// Subset jf open 粉圓 (OFL-1.1) to the glyphs actually used on the page,
// so the display font ships as a small woff2 instead of the full 4.7MB ttf.
//
// Source ttf is not committed. Download it once before running:
//   curl -L -o /tmp/openhuninn.ttf \
//     https://github.com/justfont/open-huninn-font/releases/download/v2.1/jf-openhuninn-2.1.ttf
//   OPENHUNINN_TTF=/tmp/openhuninn.ttf npm run build:font

import { readFile, writeFile, mkdir, readdir } from 'node:fs/promises';
import subsetFont from 'subset-font';

const srcPath = process.env.OPENHUNINN_TTF;
if (!srcPath) {
  console.error('Set OPENHUNINN_TTF to the path of jf-openhuninn-2.1.ttf (see comment in this script).');
  process.exit(1);
}

// Keep every character that appears on any page: the home page, the case write-ups,
// and the page templates (nav labels, headings), plus basic ASCII for safety.
// Markdown only contributes its heading lines: body text renders in Noto Sans TC.
let text = (await readFile('index.html', 'utf8')) + (await readFile('scripts/build-pages.mjs', 'utf8'));
for (const f of await readdir('docs/cases')) {
  if (!f.endsWith('.md')) continue;
  const mdText = await readFile(`docs/cases/${f}`, 'utf8');
  text += mdText.split('\n').filter((l) => /^#{1,3}\s/.test(l)).join('\n');
}
const ascii = Array.from({ length: 95 }, (_, i) => String.fromCharCode(32 + i)).join('');
text += ascii;

const ttf = await readFile(srcPath);
const woff2 = await subsetFont(ttf, text, { targetFormat: 'woff2' });

await mkdir('assets/fonts', { recursive: true });
await writeFile('assets/fonts/jf-openhuninn-subset.woff2', woff2);
console.log(`assets/fonts/jf-openhuninn-subset.woff2: ${(woff2.length / 1024).toFixed(1)} KB`);
