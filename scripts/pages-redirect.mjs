// Turns the built site in dist/ into meta-refresh redirect pages for the old
// GitHub Pages URL (vettv-studios.github.io/vettv-handheld-news/) -> news.vettvstudios.com.
import { readdirSync, statSync, mkdirSync, writeFileSync, copyFileSync } from 'node:fs';
import { join, relative, dirname } from 'node:path';
const SRC = 'dist', OUT = 'dist-pages', NEW = 'https://news.vettvstudios.com';
const page = (u) => `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>VetTV News has moved</title><link rel="canonical" href="${u}"><meta name="robots" content="noindex"><meta http-equiv="refresh" content="0; url=${u}"><script>location.replace(${JSON.stringify(u)}+location.search+location.hash)</script></head><body><p>VetTV News has moved to <a href="${u}">${u}</a>.</p></body></html>`;
function walk(d) { for (const f of readdirSync(d)) { const p = join(d, f); if (statSync(p).isDirectory()) walk(p); else emit(p); } }
function emit(p) {
  const rel = relative(SRC, p).replaceAll('\\', '/'); const out = join(OUT, rel); mkdirSync(dirname(out), { recursive: true });
  if (rel.endsWith('.html')) writeFileSync(out, page(`${NEW}/${rel.replace(/(^|\/)index\.html$/, '$1').replace(/\.html$/, '/')}`));
  else if (/\.(xml|txt)$/.test(rel)) return; // feeds/sitemaps/robots live only on the new domain
  else copyFileSync(p, out); // keep images so old embeds don't break
}
walk(SRC);
writeFileSync(join(OUT, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${NEW}/sitemap-index.xml\n`);
console.log('Pages redirect site written to', OUT);
