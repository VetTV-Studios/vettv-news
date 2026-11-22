// One rule for the generator and the pages: a real file that is not the shared
// ring template stays; anything missing or listed as a placeholder uses the card.
import fs from 'node:fs';
import path from 'node:path';

export function coverPath(id, cover, root, placeholders) {
  const rel = cover ? String(cover).replace(/^\//, '') : '';
  const present = Boolean(rel) && fs.existsSync(path.join(root, 'public', rel));
  if (present && !placeholders.has(path.basename(rel))) return rel;
  return `covers/generated/${id}.png`;
}
