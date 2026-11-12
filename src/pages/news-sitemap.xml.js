import { getCollection } from 'astro:content';
import { publishedOn } from '../site';

const TWO_DAYS_MS = 2 * 24 * 60 * 60 * 1000;
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export async function GET(context) {
  const now = Date.now();
  const site = String(context.site).replace(/\/$/, '');
  const posts = (await getCollection('posts', ({ data }) => !data.draft))
    .filter((p) => now - publishedOn(p.data).getTime() <= TWO_DAYS_MS)
    .sort((a, b) => publishedOn(b.data) - publishedOn(a.data));

  const urls = posts.map((p) => {
    const loc = `${site}/posts/${p.id}/`;
    const date = publishedOn(p.data).toISOString();
    return `  <url>
    <loc>${esc(loc)}</loc>
    <news:news>
      <news:publication>
        <news:name>VetTV News</news:name>
        <news:language>en</news:language>
      </news:publication>
      <news:publication_date>${esc(date)}</news:publication_date>
      <news:title>${esc(p.data.title)}</news:title>
    </news:news>
  </url>`;
  }).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${urls}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
