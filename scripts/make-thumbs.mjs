// Generate responsive WebP thumbnails for every cover in public/covers/.
// Originals are 1920x1080 and stay in place for og:image; templates serve
// these via srcset (see coverSrc/coverSrcset in src/site.ts).
// Output: public/covers/thumbs/<name>-<width>.webp (gitignored, built each deploy).
// Skips files whose thumbnail is newer than the source.
import { readdir, mkdir, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.dirname(fileURLToPath(import.meta.url)) + '/..';
const srcDir = path.join(root, 'public/covers');
const outDir = path.join(srcDir, 'thumbs');
const WIDTHS = [320, 640, 960, 1280];
const QUALITY = 72;

await mkdir(outDir, { recursive: true });
const files = (await readdir(srcDir)).filter((f) => /\.(png|jpe?g)$/i.test(f));
let made = 0, skipped = 0;
const t0 = Date.now();
for (const f of files) {
  const src = path.join(srcDir, f);
  const base = f.replace(/\.(png|jpe?g)$/i, '');
  const srcTime = (await stat(src)).mtimeMs;
  for (const w of WIDTHS) {
    const out = path.join(outDir, `${base}-${w}.webp`);
    if (existsSync(out) && (await stat(out)).mtimeMs >= srcTime) { skipped++; continue; }
    await sharp(src).resize({ width: w }).webp({ quality: QUALITY }).toFile(out);
    made++;
  }
}
console.log(`thumbs: ${made} written, ${skipped} up-to-date, ${files.length} covers, ${((Date.now() - t0) / 1000).toFixed(1)}s`);
