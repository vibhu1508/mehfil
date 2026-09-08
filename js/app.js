import { PEGS, FILTERS, TRACKS, SHERS, FAQ, SITE } from './data.js';

/* The live song library. Starts as whatever is baked into data.js and is
 * replaced by the playlist sync when that succeeds. */
let LIB = TRACKS;

const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const MOBILE = window.matchMedia('(max-width: 900px)');

const state = {
  peg: PEGS[0],
  filter: 'all',
  queue: [],        // playable tracks (have a yt id) in play order
  view: [],         // what the list currently shows, filtered
  idx: -1,
  shuffle: false,
  playing: false,
  sher: 0,
  ready: false,
  script: 'roman',     // 'roman' (Hinglish) or 'dv' (Devanagari)
  playingPeg: null     // which peg the queue belongs to — may differ from the
                       // peg being browsed; music keeps playing while you look
};

try {
  const saved = localStorage.getItem('mehfil.script');
  if (saved === 'dv' || saved === 'roman') state.script = saved;
} catch {}

/* ---------------- background ---------------- */

const layers = [$('#layerA'), $('#layerB')];
let live = 0;
let pending = null;   // the url the most recent request is working towards

const bgFor = peg => MOBILE.matches
  ? `assets/still/mobile/${peg.slug}.jpg`
  : `assets/still/${peg.slug}.jpg`;

function paintRoom(peg, immediate = false) {
  const url = bgFor(peg);
  const cur = layers[live];
  if (cur.getAttribute('src') === url && cur.classList.contains('is-on')) { pending = null; return; }
  pending = url;

  // Read `live` at swap time, not at call time, and bail if a newer request
  // has superseded this one - otherwise a slow image undoes a fast one.
  const swap = () => {
    if (pending !== url) return;
    const prev = layers[live], next = layers[1 - live];
    next.src = url;
    next.classList.add('is-on');
    prev.classList.remove('is-on');
    live = 1 - live;
    pending = null;
  };

  if (immediate) return swap();

  const probe = new Image();
  probe.onload = probe.onerror = () => requestAnimationFrame(swap);
  probe.src = url;
}

MOBILE.addEventListener('change', () => paintRoom(state.peg, true));

function preloadRooms() {
  PEGS.forEach(p => { const i = new Image(); i.src = bgFor(p); });
}

/* ---------------- which peg ---------------- */

function pegNow() {
  const h = new Date().getHours();
  return PEGS.find(p => p.hours.includes(h)) || PEGS[0];
}

/* ---------------- rendering ---------------- */

function renderDial() {
  $('#dial').innerHTML = PEGS.map(p => `
    <button class="peg" type="button" data-peg="${p.id}" aria-pressed="${p.id === state.peg.id}">
      <span class="pt">${p.clock}</span>
      <span class="pn dv">${p.dv.split(' ')[0]}</span>
    </button>`).join('');
}

/* Only offer a category that has something in it for this peg — an empty
 * filter is a dead end. Add a Sufi track and the Sufi chip appears by itself. */
function renderFilters() {
  const all = LIB[state.peg.id] || [];
  const live = FILTERS.filter(f =>
    f.id === 'all' || all.some(t => (t.tags || []).includes(f.id)));

  if (!live.some(f => f.id === state.filter)) state.filter = 'all';

  $('#filters').innerHTML = live.map(f => `
    <button class="chip chip-sm ${f.id === state.filter ? 'is-on' : ''}"
            type="button" data-filter="${f.id}" aria-pressed="${f.id === state.filter}">${f.label}</button>`).join('');
  $('#filters').hidden = live.length < 2;   // nothing to choose between
}

function trackRow(t, i, n, attr = 'data-play') {
  const dead = !t.yt;
  return `
    <li>
      <button class="track" type="button" ${attr}="${i}" ${dead ? 'disabled' : ''}
              aria-current="${!dead && state.queue[state.idx] === t}">
        <span class="n">${String(n).padStart(2, '0')}</span>
        <span class="body">
          <span class="tt">${t.title}</span>
          <span class="tn">${[t.artist, t.year, t.note].filter(Boolean).join(' · ')}</span>
        </span>
        ${dead ? '<span class="flag">add id</span>' : ''}
      </button>
    </li>`;
}

/* "Sab" means the mehfil — party tracks are deliberately excluded from it and
 * live behind their own tab, so the default listen stays on-concept. */
function visibleFor(pegId, filter) {
  const all = LIB[pegId] || [];
  return filter === 'all'
    ? all.filter(t => !(t.tags || []).includes('party'))
    : all.filter(t => (t.tags || []).includes(filter));
}

function renderList() {
  state.view = visibleFor(state.peg.id, state.filter);
  const n = state.view.length;

  $('#listTitle').textContent    = `${state.peg.en} · ${n} songs`;
  $('#dlgListTitle').textContent = `${state.peg.en} · ${n} songs`;

  $('#tracks').innerHTML = n
    ? state.view.map((t, i) => trackRow(t, i, i + 1)).join('')
    : `<li class="hint" style="padding:14px 0">Is filter mein abhi kuch nahi.</li>`;
  $('#tracksFull').innerHTML = state.view.map((t, i) => trackRow(t, i, i + 1, 'data-full')).join('');
  // the button label is paintTransport's job — it knows what is playing
}

function renderSher() {
  const list = SHERS[state.peg.id] || [];
  if (!list.length) { $('#sherCard').hidden = true; return; }
  $('#sherCard').hidden = false;
  const s = list[state.sher % list.length];
  const dv = state.script === 'dv';
  const lines = (dv ? s.dv : s.roman) || s.roman || s.dv;
  const poet  = dv ? (s.poetDv || s.poet) : (s.poet || s.poetDv);

  for (const id of ['', 'M']) {
    const t = $('#sherText' + id), po = $('#sherPoet' + id),
          n = $('#sherNext' + id), sc = $('#sherScript' + id);
    if (!t) continue;
    t.textContent = lines.join('\n');
    t.classList.toggle('dv', dv);
    po.textContent = poet ? '— ' + poet : '';
    po.hidden = !poet;
    if (n)  n.hidden = list.length < 2;
    if (sc) { sc.textContent = dv ? 'Hinglish' : 'हिंदी में';
              sc.classList.toggle('dv', !dv); }
  }
  // long ones are clamped in the card — offer the whole thing in the sheet
  $('#sherFull').hidden = lines.length <= 5;
}

function renderPeg(immediate = false) {
  const p = state.peg;
  $('#kicker').textContent = p.kicker;
  $('#headline').innerHTML = p.headline.map(l => `<span>${l}</span>`).join('<br>');
  $('#tagline').textContent = p.tagline;
  $('#dialHint').textContent = `${p.clock} · ${p.tagline}`;
  document.title = `${p.dv} — महफ़िल Mehfil`;
  $$('#dial .peg').forEach(b => b.setAttribute('aria-pressed', b.dataset.peg === p.id));
  paintRoom(p, immediate);
  state.sher = 0;
  renderFilters();
  renderSher();
  renderList();
  paintTransport();
}

function setPeg(id) {
  const p = PEGS.find(x => x.id === id);
  if (!p || p.id === state.peg.id) return;
  state.peg = p;                       // note: playback carries on untouched
  state.filter = 'all';
  renderPeg();
  history.replaceState(null, '', '#' + p.slug);
}

/* ---------------- queue ---------------- */

const queueFor = pegId => {
  const all = visibleFor(pegId, state.filter).filter(t => t.yt);
  return state.shuffle ? shuffled(all) : all;
};

/* Start a peg's list. Switching the queue only happens here — on a deliberate
 * play, never on merely browsing to another peg. */
function playFrom(pegId, track) {
  if (state.playingPeg !== pegId) {
    state.queue = queueFor(pegId);
    state.playingPeg = pegId;
  }
  const i = track ? state.queue.indexOf(track) : 0;
  return play(i < 0 ? 0 : i);
}
const shuffled = a => { const c = [...a]; for (let i = c.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0; [c[i], c[j]] = [c[j], c[i]]; } return c; };

/* ---------------- youtube ---------------- */

let yt = null, ytLoading = null, tick = null;

function loadYT() {
  if (ytLoading) return ytLoading;
  ytLoading = new Promise(res => {
    if (window.YT && window.YT.Player) return res();
    window.onYouTubeIframeAPIReady = () => res();
    const s = document.createElement('script');
    s.src = 'https://www.youtube.com/iframe_api';
    document.head.appendChild(s);
  }).then(() => new Promise(res => {
    yt = new YT.Player('yt-host', {
      host: 'https://www.youtube-nocookie.com',
      width: 1, height: 1,
      playerVars: { controls: 0, disablekb: 1, playsinline: 1, rel: 0, modestbranding: 1 },
      events: {
        onReady: () => { state.ready = true; res(); },
        onStateChange: onYTState,
        onError: () => { toast('Ye gaana yahan nahi chal raha — agla laga rahe hain'); next(); }
      }
    });
  }));
  return ytLoading;
}

function onYTState(e) {
  if (e.data === YT.PlayerState.ENDED) return next();
  const playing = e.data === YT.PlayerState.PLAYING;
  state.playing = playing;
  paintTransport();
  if (playing) startTick(); else stopTick();
}

const startTick = () => { stopTick(); tick = setInterval(paintProgress, 250); };
const stopTick  = () => { if (tick) clearInterval(tick), tick = null; };

async function play(i) {
  if (!state.queue.length) return toast('Abhi is peg mein koi gaana nahi hai');
  await loadYT();
  state.idx = (i + state.queue.length) % state.queue.length;
  const t = state.queue[state.idx];
  yt.loadVideoById(t.yt);
  yt.playVideo();
  // clear the old song's clock straight away — otherwise the previous
  // duration lingers on screen until the next progress tick
  $('#tNow').textContent = '0:00';
  $('#tEnd').textContent = '0:00';
  $('#seek').value = 0;
  paintNowPlaying();
  renderList();
}

function toggle() {
  if (!state.ready || state.idx < 0) return play(0);
  state.playing ? yt.pauseVideo() : yt.playVideo();
}
const next = () => play(state.idx + 1);
const prev = () => (state.ready && yt.getCurrentTime() > 3) ? yt.seekTo(0) : play(state.idx - 1);

function stop() {
  stopTick();
  if (state.ready && yt) { try { yt.stopVideo(); } catch {} }
  state.playing = false; state.idx = -1;
  paintTransport(); paintNowPlaying(); paintProgress();
}

/* ---------------- player chrome ---------------- */

const mmss = s => (!isFinite(s) || s < 0) ? '0:00'
  : `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;

function paintTransport() {
  $('#playIco').className = state.playing ? 'ico-pause' : 'ico-play';
  $('#playBtn').setAttribute('aria-label', state.playing ? 'Rok do' : 'Chalao');

  const here    = state.playingPeg === state.peg.id;
  const canPlay = visibleFor(state.peg.id, state.filter).some(t => t.yt);
  const btn     = $('#startBtn');

  $('#startLabel').textContent =
    !canPlay                   ? 'Abhi gaane nahi hain' :
    here && state.playing      ? 'Rok do' :
    here && state.idx >= 0     ? 'Phir se chalao' :
    state.playingPeg           ? `${state.peg.en} chalao` :
                                 'Mehfil shuru karo';
  btn.disabled = !canPlay;
  btn.querySelector('.ico-play, .ico-pause').className =
    (here && state.playing) ? 'ico-pause' : 'ico-play';

  // mark which peg the music is actually coming from
  $$('#dial .peg').forEach(b =>
    b.toggleAttribute('data-playing', b.dataset.peg === state.playingPeg));
}

function paintNowPlaying() {
  const t = state.queue[state.idx];
  $('#npTitle').textContent  = t ? t.title : '—';
  $('#npArtist').textContent = t ? [t.artist, t.year].filter(Boolean).join(' · ') : '';
  $('#npArt').style.backgroundImage = t ? `url(https://i.ytimg.com/vi/${t.yt}/mqdefault.jpg)` : '';
}

let dragging = false;
function paintProgress() {
  if (!state.ready || dragging) return;
  const d = yt.getDuration() || 0, c = yt.getCurrentTime() || 0;
  $('#tNow').textContent = mmss(c);
  $('#tEnd').textContent = mmss(d);
  $('#seek').value = d ? Math.round(c / d * 1000) : 0;
}

/* ---------------- overlays, share, toast ---------------- */

let toastT;
function toast(msg) {
  const el = $('#toast');
  el.textContent = msg; el.classList.add('is-on');
  clearTimeout(toastT); toastT = setTimeout(() => el.classList.remove('is-on'), 2600);
}

async function copy(text, msg) {
  try { await navigator.clipboard.writeText(text); toast(msg); }
  catch { toast('Copy nahi ho paaya'); }
}

function share(how) {
  const url  = location.href;
  const text = `${SITE.shareText} ${url}`;
  if (how === 'copy') return copy(url, 'Link copy ho gaya');
  if (navigator.share) return navigator.share({ title: 'महफ़िल Mehfil', text: SITE.shareText, url }).catch(() => {});
  open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
}

/* ---------------- playlist sync ----------------
 *
 * The worker returns the playlist as it stands on YouTube right now. Curation
 * — which peg a song belongs to, its tags, its note — lives in data.js and is
 * matched back on by video id, so a sync never overwrites your decisions.
 * Songs it has never seen land in SITE.newSongsPeg until you sort them.
 */
function mergeLive(live) {
  const curated = new Map();
  for (const [peg, list] of Object.entries(TRACKS))
    for (const t of list) if (t.yt) curated.set(t.yt, { peg, tags: t.tags, note: t.note, year: t.year });

  const fallbackPeg = PEGS.some(p => p.id === SITE.newSongsPeg) ? SITE.newSongsPeg : PEGS[0].id;
  const next = Object.fromEntries(PEGS.map(p => [p.id, []]));
  let fresh = 0;

  for (const t of live) {
    if (!t.yt || !t.title) continue;
    const c = curated.get(t.yt);
    if (!c) fresh++;
    (next[c?.peg] || next[fallbackPeg]).push({
      title: t.title,
      artist: t.artist || '',
      year: c?.year || '',
      yt: t.yt,
      tags: c?.tags || ['retro'],
      note: c?.note || ''
    });
  }
  return { next, fresh, total: live.length };
}

async function syncTracks() {
  const url = SITE.tracksEndpoint;
  if (!url) return;
  let live;
  try {
    const r = await fetch(url, { headers: { accept: 'application/json' } });
    if (!r.ok) throw new Error(r.status);
    const j = await r.json();
    if (!Array.isArray(j.tracks) || !j.tracks.length) throw new Error('empty');
    live = j.tracks;
  } catch (err) {
    console.warn('playlist sync unavailable, using the built-in list', err);
    return;                                    // baked-in TRACKS stays
  }

  const { next, fresh, total } = mergeLive(live);
  const playingId = state.queue[state.idx]?.yt;
  LIB = next;

  // keep the queue pointing at the same song across the swap
  if (state.playingPeg) {
    state.queue = queueFor(state.playingPeg);
    state.idx = playingId ? state.queue.findIndex(t => t.yt === playingId) : -1;
  }

  renderFilters();
  renderList();
  paintTransport();
  if (fresh) toast(`${fresh} naye gaane aaye hain`);
  console.info(`playlist synced: ${total} songs, ${fresh} new`);
}

/* ---------------- live listeners ---------------- */

/* Needs a real endpoint (see worker/). With none configured the counter stays
 * hidden — a made-up number is worse than no number. */
function startPresence() {
  const url = SITE.presenceEndpoint;
  const box = $('#live'), txt = $('#liveText');
  if (!url) { box.hidden = true; return; }

  const rnd = () => (crypto.randomUUID ? crypto.randomUUID() : String(Math.random()).slice(2));
  const me = rnd();                       // this tab, for the live count
  const total = $('#totalText');

  /* A first-party id kept in this browser only, so a return visit is not
   * counted as a new person. No cookie, nothing shared with anyone else. */
  let returning = false;
  try {
    returning = !!localStorage.getItem('mehfil.vid');
    if (!returning) localStorage.setItem('mehfil.vid', rnd());
  } catch { returning = false; }

  let misses = 0, firstBeat = true;

  const beat = async () => {
    try {
      const r = await fetch(url, {
        method: 'POST', headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          id: me, peg: state.peg.id,
          visit: firstBeat || undefined,     // counted once per page load
          returning: returning || undefined
        })
      });
      if (!r.ok) throw new Error(r.status);
      const d = await r.json();
      if (typeof d.count !== 'number' || d.count < 1) throw new Error('bad payload');
      firstBeat = false;

      txt.textContent = d.count === 1
        ? 'Sirf teri mehfil chal rahi hai'
        : `${d.count.toLocaleString('en-IN')} mehfilein chal rahi hain`;
      total.textContent = d.visitors > 1
        ? `${d.visitors.toLocaleString('en-IN')} aa chuke hain`
        : '';
      box.hidden = false;
      misses = 0;
    } catch {
      if (++misses >= 2) box.hidden = true;   // one blip should not hide it
    }
  };

  beat();
  setInterval(beat, 20000);
  addEventListener('pagehide', () => {
    try { navigator.sendBeacon(url + '?leave=' + encodeURIComponent(me)); } catch {}
  });
}

/* ---------------- wiring ---------------- */

function boot() {
  $('#curator').textContent = SITE.curator;
  $('#curRole').textContent = SITE.role || '';
  $('#aboutName').textContent = SITE.curator;
  $('#aboutRole').textContent = SITE.role || '';

  const xUrl = 'https://x.com/' + String(SITE.x || '').replace(/^@/, '');
  for (const id of ['#xLink', '#xLinkAbout']) {
    const el = $(id); if (!el) continue;
    el.href = xUrl;
    el.title = 'X — @' + String(SITE.x || '').replace(/^@/, '');
  }
  if (SITE.whatsapp) $('#waLink').href = SITE.whatsapp; else $('#waLink').hidden = true;

  const port = $('#portfolioLink');
  if (SITE.portfolio && !SITE.portfolio.startsWith('[')) port.href = SITE.portfolio;
  else { port.href = '#'; port.setAttribute('aria-disabled', 'true'); port.title = 'Portfolio link abhi add karna hai'; }

  // photo: curator panel + About sheet, both of which quietly stay blank if the
  // file is missing
  if (SITE.photo) {
    const probe = new Image();
    probe.onload = () => {
      for (const img of [$('#curPhoto'), $('#aboutPhoto')]) {
        img.src = SITE.photo; img.alt = SITE.curator; img.hidden = false;
      }
      $('#curBlank').hidden = true;
    };
    probe.onerror = () => console.info('no photo at ' + SITE.photo + ' yet — placeholders stay');
    probe.src = SITE.photo;
  }

  $('#faqList').innerHTML = FAQ.map(f => `<dt>${f.q}</dt><dd>${f.a}</dd>`).join('');
  $('#aboutBody').innerHTML =
    SITE.about.map(t => `<p>${t}</p>`).join('') + `<p class="warn">${SITE.aboutWarn}</p>`;

  if (SITE.ytMusicPlaylist) { const l = $('#ytLink'); l.href = SITE.ytMusicPlaylist; l.hidden = false; }

  const fromHash = PEGS.find(p => p.slug === location.hash.slice(1));
  state.peg = fromHash || pegNow();

  renderDial(); renderFilters(); renderPeg(true);
  paintTransport();
  startPresence();
  syncTracks();
  if ('requestIdleCallback' in window) requestIdleCallback(preloadRooms, { timeout: 2000 });
  else setTimeout(preloadRooms, 1200);

  $('#dial').addEventListener('click', e => {
    const b = e.target.closest('[data-peg]'); if (b) setPeg(b.dataset.peg);
  });
  $('#filters').addEventListener('click', e => {
    const b = e.target.closest('[data-filter]'); if (!b) return;
    state.filter = b.dataset.filter; renderFilters(); renderList(); paintTransport();
  });

  const pick = t => { if (t && t.yt) playFrom(state.peg.id, t); };

  $('#tracks').addEventListener('click', e => {
    const b = e.target.closest('[data-play]'); if (!b || b.disabled) return;
    pick(state.view[+b.dataset.play]);
  });
  $('#tracksFull').addEventListener('click', e => {
    const b = e.target.closest('[data-full]'); if (!b || b.disabled) return;
    pick(visibleFor(state.peg.id, state.filter)[+b.dataset.full]);
    $('#dlg-tracklist').close();
  });

  $('#startBtn').addEventListener('click', () => {
    if (state.playingPeg === state.peg.id && state.idx >= 0) return toggle();
    playFrom(state.peg.id);            // nothing playing, or a different peg
  });
  $('#playBtn').addEventListener('click', toggle);
  $('#nextBtn').addEventListener('click', next);
  $('#prevBtn').addEventListener('click', prev);
  $('#shuffleBtn').addEventListener('click', e => {
    state.shuffle = !state.shuffle;
    e.currentTarget.setAttribute('aria-pressed', state.shuffle);
    const cur = state.queue[state.idx];
    if (state.playingPeg) {
      state.queue = queueFor(state.playingPeg);
      state.idx = cur ? state.queue.indexOf(cur) : -1;
    }
    toast(state.shuffle ? 'Shuffle on' : 'Shuffle off');
  });

  const seek = $('#seek');
  seek.addEventListener('input', () => { dragging = true; });
  seek.addEventListener('change', () => {
    if (state.ready) { const d = yt.getDuration() || 0; yt.seekTo(d * seek.value / 1000, true); }
    dragging = false;
  });

  const nextSher = () => { state.sher++; renderSher(); };
  const copySher = () => {
    const list = SHERS[state.peg.id] || []; if (!list.length) return;
    const l = list[state.sher % list.length];
    const dv = state.script === 'dv';
    const lines = (dv ? l.dv : l.roman) || l.roman || l.dv;
    const poet = dv ? (l.poetDv || l.poet) : (l.poet || l.poetDv);
    copy(`${lines.join('\n')}${poet ? `\n— ${poet}` : ''}\n\n${location.href}`, 'Sher copy ho gaya');
  };
  const flipScript = () => {
    state.script = state.script === 'dv' ? 'roman' : 'dv';
    try { localStorage.setItem('mehfil.script', state.script); } catch {}
    renderSher();
  };
  ['#sherScript', '#sherScriptM'].forEach(s2 => $(s2)?.addEventListener('click', flipScript));
  ['#sherNext', '#sherNextM'].forEach(s2 => $(s2)?.addEventListener('click', nextSher));
  ['#sherCopy', '#sherCopyM'].forEach(s2 => $(s2)?.addEventListener('click', copySher));

  $$('[data-share]').forEach(b => b.addEventListener('click', () => share(b.dataset.share)));
  $$('[data-open]').forEach(b => b.addEventListener('click', () => $('#dlg-' + b.dataset.open).showModal()));
  $$('[data-close]').forEach(b => b.addEventListener('click', () => b.closest('dialog').close()));
  $$('dialog').forEach(d => d.addEventListener('click', e => { if (e.target === d) d.close(); }));

  addEventListener('keydown', e => {
    if (e.target.matches('input,textarea') || $$('dialog[open]').length) return;
    if (e.code === 'Space') { e.preventDefault(); toggle(); }
    if (e.key === 'ArrowRight' && e.altKey) next();
    if (e.key === 'ArrowLeft'  && e.altKey) prev();
  });
}

try { boot(); }
catch (err) { console.error('boot failed', err); }
