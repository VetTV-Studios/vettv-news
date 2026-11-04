#!/usr/bin/env node
// Weekly VetTV News digest. Reads src/content/posts/*.md, keeps non-draft, non-sample posts whose
// pubDate falls in the last N days (America/Chicago), and writes <out>.md + <out>.html.
// Usage: node scripts/newsletter-digest.mjs [--days 7] [--max 12] [--end YYYY-MM-DD] [--out /workspace/newsletter/issue]
// No network, no secrets. Pushing the issue to a provider is a separate step.
import fs from 'node:fs'; import path from 'node:path'; import { parse } from 'yaml';
const SITE = 'https://news.vettvstudios.com';
const arg = (k, d) => { const i = process.argv.indexOf(`--${k}`); return i > -1 ? process.argv[i + 1] : d; };
const days = Number(arg('days', 7)); const max = Number(arg('max', 12)); // 0 = no cap
const end = arg('end', new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Chicago' }).format(new Date()));
const out = arg('out', '/workspace/newsletter/issue');
const endMs = Date.parse(end + 'T00:00:00Z'), startMs = endMs - (days - 1) * 864e5;
const dir = path.resolve('src/content/posts');
const all = fs.readdirSync(dir).filter(f => f.endsWith('.md')).map(f => {
  const m = fs.readFileSync(path.join(dir, f), 'utf8').match(/^---\n([\s\S]*?)\n---/); if (!m) return null;
  const d = parse(m[1]); return { id: f.replace(/\.md$/, ''), ...d, day: new Date(d.pubDate).toISOString().slice(0, 10) };
}).filter(p => p && !p.draft && !p.sample && Date.parse(p.day + 'T00:00:00Z') >= startMs && Date.parse(p.day + 'T00:00:00Z') <= endMs)
  .sort((a, b) => b.day.localeCompare(a.day) || String(b.publishedAt ?? '').localeCompare(String(a.publishedAt ?? '')));
// Cap: newest first, stories with covers preferred, then shown in date order.
const pick = !max || all.length <= max ? all : [...all.filter(p => p.cover), ...all.filter(p => !p.cover)].slice(0, max);
const posts = all.filter(p => pick.includes(p)); const total = all.length;
const weekUrl = `${SITE}/`;
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const link = p => `${SITE}/posts/${p.id}/`; const img = p => `${SITE}/${(p.cover || 'art/banner_2560x1440.png').replace(/^\//, '')}`;
const blurb = p => (p.summary || p.description || '').split(/(?<=[.!?])\s/)[0];
const fmtD = s => new Date(s + 'T12:00Z').toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
const range = `${fmtD(new Date(startMs).toISOString().slice(0, 10))} to ${fmtD(end)}`;
const subject = `VetTV News weekly: ${total} stories (${range})`;
const plug = { md: `**Support VetTV:** the VetTV Channel Guide Supporter tier is $3/mo or $30/yr and helps keep the channels and the news coming. [Become a Supporter](https://vettvretro.com/#premium) · More from the studio at [vettvstudios.com](https://vettvstudios.com).` };
const md = [`# ${subject}`, '', `Here's everything we published on VetTV News this week (${range}).`, '',
  ...posts.flatMap(p => [`## [${p.title}](${link(p)})`, '', `![](${img(p)})`, '', blurb(p), '', `[Read it](${link(p)})`, '']),
  ...(total > posts.length ? [`**[See all ${total} stories this week](${weekUrl})**`, ''] : []), '---', '', plug.md, '', `You're getting this because you signed up at ${SITE}/newsletter/.`, ''].join('\n');
const card = p => `<tr><td style="padding:0 0 28px"><a href="${link(p)}"><img src="${esc(img(p))}" alt="" width="560" style="width:100%;max-width:560px;border-radius:10px;display:block"></a>
<h2 style="font-size:19px;margin:12px 0 6px"><a href="${link(p)}" style="color:#ffffff;text-decoration:none">${esc(p.title)}</a></h2>
<p style="margin:0 0 8px;color:#cfc3e0">${esc(blurb(p))}</p><a href="${link(p)}" style="color:#22e6ff;font-weight:bold">Read it &rarr;</a></td></tr>`;
const html = `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>${esc(subject)}</title></head>
<body style="margin:0;background:#14061f;font-family:Arial,Helvetica,sans-serif;color:#ece6f5">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td align="center" style="padding:24px 12px">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;background:#1f0b31;border:1px solid #3d1c5c;border-radius:12px"><tr><td style="padding:24px 20px">
<p style="margin:0;color:#ff3fb4;font-weight:bold;letter-spacing:1px">VETTV NEWS WEEKLY</p>
<h1 style="font-size:24px;color:#fff;margin:6px 0 4px">${total} stories this week</h1><p style="margin:0 0 24px;color:#a99bbd">${esc(range)}</p>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0">${posts.map(card).join('\n')}</table>
${total > posts.length ? `<p style="text-align:center;margin:0 0 24px"><a href="${weekUrl}" style="color:#22e6ff;font-weight:bold;font-size:16px">See all ${total} stories this week &rarr;</a></p>` : ''}
<div style="background:#260f3c;border:1px solid #3d1c5c;border-radius:10px;padding:16px;margin-top:4px">
<p style="margin:0 0 8px;color:#fff;font-weight:bold">Support VetTV</p><p style="margin:0 0 12px;color:#cfc3e0">The VetTV Channel Guide Supporter tier is $3/mo or $30/yr and helps keep the channels and the news coming.</p>
<a href="https://vettvretro.com/#premium" style="display:inline-block;background:#ff3fb4;color:#fff;padding:10px 18px;border-radius:999px;text-decoration:none;font-weight:bold">Become a Supporter</a>
<p style="margin:12px 0 0;color:#a99bbd">More from the studio at <a href="https://vettvstudios.com" style="color:#22e6ff">vettvstudios.com</a>.</p></div>
<p style="margin:20px 0 0;font-size:12px;color:#a99bbd">You're getting this because you signed up at <a href="${SITE}/newsletter/" style="color:#a99bbd">${SITE.replace('https://', '')}/newsletter</a>.</p>
</td></tr></table></td></tr></table></body></html>\n`;
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out + '.md', md); fs.writeFileSync(out + '.html', html);
fs.writeFileSync(out + '.json', JSON.stringify({ subject, range, count: total, shown: posts.length, ids: posts.map(p => p.id) }, null, 2));
console.log(`${subject}\n-> ${out}.md / .html / .json`);
