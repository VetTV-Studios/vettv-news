// Typographic lead cards for posts whose committed cover is the shared concentric-ring
// template (src/data/placeholder-covers.json). These are drawn in code from the headline
// and category. They are not AI-generated artwork and they are not stock photos.
import { Resvg } from '@resvg/resvg-js';
import fs from 'fs';
import path from 'path';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const postsDir = path.join(root, 'src/content/posts');
const outDir = path.join(root, 'public/covers/generated');
const fontDir = path.join(root, 'public/fonts');
const placeholders = new Set(JSON.parse(fs.readFileSync(path.join(root, 'src/data/placeholder-covers.json'), 'utf8')));

const THEME = {
  news: ['#111827', '#22e6ff'],
  national: ['#172554', '#93c5fd'],
  handhelds: ['#083344', '#22e6ff'],
  gaming: ['#2e1065', '#c084fc'],
  tech: ['#1f1020', '#ff3fb4'],
  windows: ['#172554', '#60a5fa'],
  'linux-steamos': ['#052e16', '#4ade80'],
  macos: ['#1c1917', '#e7e5e4'],
  'open-nt': ['#3f0d1e', '#fb7185'],
  deals: ['#4a044e', '#ff3fb4'],
  projects: ['#3b0764', '#d8b4fe'],
};
const LABEL = {
  news: 'News', national: 'National', handhelds: 'Handhelds', gaming: 'Gaming', tech: 'Tech',
  windows: 'Windows', 'linux-steamos': 'Linux & SteamOS', macos: 'macOS', 'open-nt': 'Open NT',
  deals: 'Deals', projects: 'Projects',
};

const field = (fm, key) => {
  const m = fm.match(new RegExp(`^${key}:\\s*(.*)$`, 'm'));
  if (!m) return '';
  let v = m[1].trim();
  if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) v = v.slice(1, -1);
  return v.replace(/\\"/g, '"').replace(/\\'/g, "'");
};
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const wrap = (title, max) => {
  const words = title.split(/\s+/).filter(Boolean);
  const lines = [];
  let line = '';
  for (const w of words) {
    const next = line ? `${line} ${w}` : w;
    if (next.length > max && line) { lines.push(line); line = w; }
    else line = next;
  }
  if (line) lines.push(line);
  return lines;
};

const layoutTitle = (title) => {
  for (const size of [64, 56, 48, 42, 36]) {
    const max = Math.max(16, Math.floor(980 / (size * 0.5)));
    const lines = wrap(title, max);
    if (lines.length <= 4) return { size, lines };
  }
  const max = Math.floor(980 / (36 * 0.5));
  const lines = wrap(title, max).slice(0, 4);
  const last = lines[3] || '';
  if (wrap(title, max).length > 4) lines[3] = `${last.replace(/\s+\S*$/, '')}…`;
  return { size: 36, lines };
};

const hash = (s) => {
  let h = 2166136261;
  for (const c of s) h = Math.imul(h ^ c.charCodeAt(0), 16777619);
  return h >>> 0;
};

const card = ({ id, title, category }) => {
  const [bg, accent] = THEME[category] || THEME.news;
  const label = LABEL[category] || 'News';
  const { size, lines } = layoutTitle(title);
  const h = hash(id);
  const ticks = Array.from({ length: 8 }, (_, i) => {
    const v = (h >>> (i * 4)) & 15;
    const bh = 18 + v * 5;
    const op = (0.28 + (v % 5) * 0.08).toFixed(2);
    return `<rect x="${78 + i * 28}" y="${618 - bh}" width="16" height="${bh}" rx="2" fill="${accent}" opacity="${op}"/>`;
  }).join('');
  const text = lines.map((ln, i) =>
    `<text x="72" y="${210 + i * Math.round(size * 1.16)}" font-family="Source Serif 4" font-size="${size}" fill="#ffffff">${esc(ln)}</text>`
  ).join('');
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="675" viewBox="0 0 1200 675">
  <rect width="1200" height="675" fill="${bg}"/>
  <rect width="12" height="675" fill="${accent}"/>
  <text x="72" y="86" font-family="Source Sans 3" font-size="22" letter-spacing="3.5" fill="${accent}">VETTV NEWS</text>
  <text x="1128" y="86" text-anchor="end" font-family="Source Sans 3" font-size="22" letter-spacing="2.2" fill="#ffffff">${esc(label.toUpperCase())}</text>
  <rect x="72" y="108" width="120" height="4" fill="${accent}"/>
  ${text}
  ${ticks}
</svg>`;
};

const needsCard = (cover) => {
  if (!cover) return true;
  const rel = cover.replace(/^\//, '');
  if (!fs.existsSync(path.join(root, 'public', rel))) return true;
  const base = path.basename(rel);
  return placeholders.has(base);
};

fs.mkdirSync(outDir, { recursive: true });
const font = {
  fontFiles: [
    path.join(fontDir, 'source-serif-4-bold.ttf'),
    path.join(fontDir, 'source-sans-3-semibold.ttf'),
  ],
  loadSystemFonts: false,
  defaultFontFamily: 'Source Serif 4',
};

let wrote = 0;
let kept = 0;
for (const file of fs.readdirSync(postsDir).filter((f) => f.endsWith('.md'))) {
  const id = file.replace(/\.md$/, '');
  const raw = fs.readFileSync(path.join(postsDir, file), 'utf8');
  const fm = raw.split('---')[1] || '';
  const cover = field(fm, 'cover');
  if (!needsCard(cover)) { kept++; continue; }
  const svg = card({ id, title: field(fm, 'title'), category: field(fm, 'category') });
  const png = new Resvg(svg, { font, fitTo: { mode: 'width', value: 1200 } }).render().asPng();
  fs.writeFileSync(path.join(outDir, `${id}.png`), png);
  wrote++;
}
console.log(`[generate-covers] wrote ${wrote} category cards, kept ${kept} existing covers`);
