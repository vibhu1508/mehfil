/* Generates a real, crawlable page per peg and per category.
 *
 * The app is one screen with hash routing, so Google only ever saw ONE page
 * with 85 words and zero song titles. This emits static HTML per route with
 * the tracklist already in the markup; app.js then takes over for humans.
 *
 *   node build.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { PEGS, FILTERS, TRACKS, SHERS, SITE } from './js/data.js';

const ORIGIN = 'https://raatkimehfil.xyz';
const esc = t => String(t).replace(/&/g,'&amp;').replace(/</g,'&lt;')
  .replace(/>/g,'&gt;').replace(/"/g,'&quot;');

const tpl = fs.readFileSync('index.html', 'utf8');
const visible = (pegId, f) => (TRACKS[pegId] || []).filter(t =>
  f === 'all' ? !t.tags.includes('party') : t.tags.includes(f));

/* the same row markup app.js produces, so the swap is invisible */
const rows = list => list.map((t, i) => `
      <li><button class="track" type="button" data-play="${i}"${t.yt ? '' : ' disabled'}>
        <span class="n">${String(i + 1).padStart(2, '0')}</span>
        <span class="body"><span class="tt">${esc(t.title)}</span>
        <span class="tn">${esc([t.artist, t.year, t.note].filter(Boolean).join(' · '))}</span></span>
      </button></li>`).join('');

const jsonld = (name, desc, url, list) => JSON.stringify({
  '@context': 'https://schema.org', '@type': 'MusicPlaylist',
  name, description: desc, url, numTracks: list.length,
  track: list.slice(0, 60).map(t => ({
    '@type': 'MusicRecording', name: t.title,
    byArtist: { '@type': 'MusicGroup', name: t.artist || 'Various' }
  }))
});

function page({ slug, title, desc, h1, kicker, list, peg }) {
  const url = slug ? `${ORIGIN}/${slug}/` : `${ORIGIN}/`;
  let h = tpl;
  h = h.replace(/<title>.*?<\/title>/s, `<title>${esc(title)}</title>`);
  h = h.replace(/(<meta name="description" content=")[^"]*(">)/, `$1${esc(desc)}$2`);
  h = h.replace(/(<meta property="og:title" content=")[^"]*(">)/, `$1${esc(title)}$2`);
  h = h.replace(/(<meta property="og:description" content=")[^"]*(">)/, `$1${esc(desc)}$2`);
  h = h.replace(/(<meta property="og:url" content=")[^"]*(">)/, `$1${url}$2`);
  h = h.replace(/(<link rel="canonical" href=")[^"]*(">)/, `$1${url}$2`);
  // tell app.js which peg this page is, without relying on the URL parser
  h = h.replace('<head>', `<head>\n<meta name="mehfil-route" content="${peg || ''}|${slug || ''}">`);
  // real content in the HTML, not injected later
  h = h.replace('<ol class="tracks" id="tracks"></ol>',
    `<ol class="tracks" id="tracks">${rows(list)}\n    </ol>`);
  h = h.replace('<h1 class="headline" id="headline"></h1>',
    `<h1 class="headline" id="headline">${esc(h1)}</h1>`);
  h = h.replace('<p class="kicker dv" id="kicker">आज रात की महफ़िल</p>',
    `<p class="kicker dv" id="kicker">${esc(kicker)}</p>`);
  h = h.replace('</head>',
    `<script type="application/ld+json">${jsonld(title, desc, url, list)}</script>\n</head>`);
  return h;
}

const written = [];
function write(slug, html) {
  const dir = slug ? path.join('.', slug) : '.';
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), html);
  written.push(slug ? `/${slug}/` : '/');
}

// home
const home = visible(PEGS[0].id, 'all');
write('', page({ slug: '', peg: '', list: home,
  title: 'महफ़िल Mehfil — raat bhar ki ghazal aur shayari playlist',
  desc: 'Ek raat, chaar peg, chaar playlist. Ghazal, sharaabi geet aur purane filmi gaane — jaise-jaise raat gehri hoti hai, mehfil badalti jaati hai.',
  h1: PEGS[0].headline.join(' '), kicker: PEGS[0].kicker }));

// one page per peg
for (const p of PEGS) {
  const list = visible(p.id, 'all');
  write(p.slug, page({ slug: p.slug, peg: p.id, list,
    title: `${p.dv} ${p.en} — ${p.clock} ki mehfil | महफ़िल`,
    desc: `${p.tagline} ${list.length} gaane ${p.clock} ke liye — ghazal, purane filmi geet aur shayari.`,
    h1: p.headline.join(' '), kicker: p.kicker }));
}

// one page per category that actually has songs
for (const f of FILTERS) {
  if (f.id === 'all') continue;
  const list = PEGS.flatMap(p => visible(p.id, f.id));
  if (!list.length) continue;
  const slug = f.label.toLowerCase().replace(/\s+/g, '-');
  // open on whichever peg holds the most of this category, else the filter
  // resets to Sab the moment the page loads
  const best = PEGS.map(p => [p.id, visible(p.id, f.id).length])
                   .sort((a, b) => b[1] - a[1])[0][0];
  write(slug, page({ slug, peg: best, list,
    title: `${f.label} playlist — ${list.length} gaane | महफ़िल Mehfil`,
    desc: `${list.length} ${f.label.toLowerCase()} gaane, mehfil ke liye chune hue. Raat bhar chalne wali playlist.`,
    h1: `${f.label} mehfil`, kicker: 'महफ़िल' }));
}

fs.writeFileSync('sitemap.xml',
`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${written.map(u => `  <url><loc>${ORIGIN}${u}</loc><changefreq>weekly</changefreq><priority>${u==='/'?'1.0':'0.8'}</priority></url>`).join('\n')}
</urlset>
`);
fs.writeFileSync('robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${ORIGIN}/sitemap.xml\n`);

console.log(`built ${written.length} pages:`);
written.forEach(u => console.log('  ' + u));
console.log('  + sitemap.xml, robots.txt');
