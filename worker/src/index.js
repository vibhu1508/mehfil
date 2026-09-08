/* Mehfil — live listener count.
 *
 * One Durable Object holds a Map of visitorId -> lastSeen. The page POSTs a
 * heartbeat every 20s; anyone not seen for 45s has left. That is the whole
 * thing. No cookies, no personal data, no storage — the ids are random per
 * page load and live only in memory.
 */

const WINDOW_MS = 45_000;   // treat a visitor as gone after this
const MAX = 50_000;         // hard cap, so a flood cannot grow the map forever

export class Presence {
  constructor(state) {
    this.state = state;
    this.seen = new Map();          // id -> lastSeen ms   (live, in memory)
    this.pegs = new Map();          // id -> peg id
    this.totals = null;             // { views, visitors }  (persisted)
  }

  /* Durable Objects can be evicted, so read the totals back from storage the
   * first time they are needed rather than trusting memory. */
  async loadTotals() {
    if (this.totals) return this.totals;
    this.totals = {
      views:    (await this.state.storage.get('views'))    || 0,
      visitors: (await this.state.storage.get('visitors')) || 0
    };
    return this.totals;
  }

  prune(now) {
    for (const [id, t] of this.seen) {
      if (now - t > WINDOW_MS) { this.seen.delete(id); this.pegs.delete(id); }
    }
  }

  async fetch(req) {
    const now = Date.now();
    const url = new URL(req.url);

    const leave = url.searchParams.get('leave');
    if (leave) { this.seen.delete(leave); this.pegs.delete(leave); }

    const totals = await this.loadTotals();

    if (req.method === 'POST' && !leave) {
      let body = {};
      try { body = await req.json(); } catch {}
      const id = typeof body.id === 'string' ? body.id.slice(0, 64) : null;
      if (id && this.seen.size < MAX) {
        this.seen.set(id, now);
        if (typeof body.peg === 'string') this.pegs.set(id, body.peg.slice(0, 24));
      }

      // `visit` is sent once per page load, `returning` when the browser has
      // been here before — so views counts opens, visitors counts people.
      if (body.visit) {
        totals.views += 1;
        await this.state.storage.put('views', totals.views);
        if (!body.returning) {
          totals.visitors += 1;
          await this.state.storage.put('visitors', totals.visitors);
        }
      }
    }

    this.prune(now);

    // per-peg breakdown, in case you want "kaun kis peg par hai" later
    const byPeg = {};
    for (const peg of this.pegs.values()) byPeg[peg] = (byPeg[peg] || 0) + 1;

    return Response.json({
      count: this.seen.size,        // here right now
      views: totals.views,          // page opens, all time
      visitors: totals.visitors,    // distinct browsers, all time
      byPeg
    });
  }
}

/* ---------------- playlist sync ----------------
 *
 * GET /tracks -> the live contents of the YouTube playlist.
 *
 * The API key lives here as a Cloudflare secret and never reaches the browser.
 * Responses are cached at the edge for CACHE_MINUTES so a traffic spike cannot
 * burn the daily quota: playlistItems.list costs 1 unit per call, the free
 * allowance is 10,000/day, and caching keeps this at roughly 100 calls a day
 * no matter how many people visit.
 */
const CACHE_MINUTES = 15;

async function fetchPlaylist(env) {
  const key = env.YT_API_KEY, list = env.PLAYLIST_ID;
  if (!key || !list) throw new Error('YT_API_KEY or PLAYLIST_ID not configured');

  const items = [];
  let pageToken = '';
  for (let page = 0; page < 10; page++) {          // 500 songs is plenty
    const u = new URL('https://www.googleapis.com/youtube/v3/playlistItems');
    u.searchParams.set('part', 'snippet,contentDetails');
    u.searchParams.set('playlistId', list);
    u.searchParams.set('maxResults', '50');
    u.searchParams.set('key', key);
    if (pageToken) u.searchParams.set('pageToken', pageToken);

    const r = await fetch(u, { headers: { accept: 'application/json' } });
    if (!r.ok) throw new Error(`youtube ${r.status}: ${(await r.text()).slice(0, 200)}`);
    const j = await r.json();

    for (const it of j.items || []) {
      const sn = it.snippet || {};
      const title = sn.title || '';
      // deleted and private entries still come back — drop them
      if (!it.contentDetails?.videoId) continue;
      if (title === 'Private video' || title === 'Deleted video') continue;
      items.push({
        yt: it.contentDetails.videoId,
        title,
        // "Kishore Kumar - Topic" is how YouTube names auto-generated artist channels
        artist: (sn.videoOwnerChannelTitle || '').replace(/ - Topic$/, '').trim(),
        position: sn.position ?? items.length
      });
    }
    pageToken = j.nextPageToken || '';
    if (!pageToken) break;
  }
  items.sort((a, b) => a.position - b.position);
  return items;
}

async function tracks(req, env, ctx) {
  const cache = caches.default;
  const cacheKey = new Request(new URL('/tracks', req.url).toString(), { method: 'GET' });

  let hit = await cache.match(cacheKey);
  if (hit) return hit;

  let body, status = 200;
  try {
    body = { tracks: await fetchPlaylist(env), fetchedAt: new Date().toISOString() };
  } catch (err) {
    body = { error: String(err.message || err) };
    status = 502;
  }

  const res = Response.json(body, {
    status,
    headers: { 'cache-control': `public, max-age=${CACHE_MINUTES * 60}` }
  });
  if (status === 200) ctx.waitUntil(cache.put(cacheKey, res.clone()));
  return res;
}

const cors = origin => ({
  'access-control-allow-origin': origin,
  'access-control-allow-methods': 'POST, GET, OPTIONS',
  'access-control-allow-headers': 'content-type',
  'access-control-max-age': '86400'
});

export default {
  async fetch(req, env, ctx) {
    // ALLOWED_ORIGIN is set in wrangler.toml. '*' is fine while testing;
    // set it to your real domain before launch.
    const origin = env.ALLOWED_ORIGIN || '*';
    const url = new URL(req.url);

    if (req.method === 'OPTIONS') return new Response(null, { headers: cors(origin) });

    if (url.pathname === '/tracks') {
      const upstream = await tracks(req, env, ctx);
      const res = new Response(upstream.body, upstream);
      for (const [k, v] of Object.entries(cors(origin))) res.headers.set(k, v);
      return res;
    }

    const id  = env.PRESENCE.idFromName('mehfil-global');
    const obj = env.PRESENCE.get(id);
    const res = await obj.fetch(req);

    const out = new Response(res.body, res);
    for (const [k, v] of Object.entries(cors(origin))) out.headers.set(k, v);
    out.headers.set('cache-control', 'no-store');
    return out;
  }
};
