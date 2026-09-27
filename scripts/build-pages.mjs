// Assemble the static site into _site/:
//   /                      index.html (with the latest cases injected)
//   /cases/                index of case write-ups, intro taken from docs/cases/README.md
//   /cases/<slug>/         one page per docs/cases/*.md, images next to it as webp + png fallback
//
// Run after build:font and build:css (see package.json "build").

import { readFile, writeFile, mkdir, readdir, cp, copyFile, rm } from 'node:fs/promises';
import path from 'node:path';
import MarkdownIt from 'markdown-it';
import sharp from 'sharp';

const ROOT = process.cwd();
const OUT = path.join(ROOT, '_site');
const CASES_DIR = path.join(ROOT, 'docs/cases');
const SITE_URL = 'https://8h-probe.ddio.io';
const CONTENT_WIDTH = 672; // max-w-2xl minus padding, px
const SMALL_WIDTH = 640;

const md = new MarkdownIt({ html: false, linkify: true, typographer: false });

// ---------- shared layout ----------

export const NAV_LABELS = { brand: '8h-probe', home: '服務說明', cases: '案例紀錄' };

function nav(current) {
  const link = (href, label, key) =>
    `<a href="${href}"${current === key ? ' aria-current="page"' : ''}>${label}</a>`;
  return `<nav class="site-nav" aria-label="主導覽">
      <a class="site-nav__brand" href="/">${NAV_LABELS.brand}</a>
      <div class="site-nav__links">${link('/', NAV_LABELS.home, 'home')}${link('/cases/', NAV_LABELS.cases, 'cases')}</div>
    </nav>`;
}

const DEFAULT_IMAGE = { src: '/assets/og-default.png', width: 1200, height: 630 };

function socialMeta({ title, description, url, type, image = DEFAULT_IMAGE, published, modified }) {
  const tags = [
    `<meta property="og:site_name" content="8h-probe">`,
    `<meta property="og:locale" content="zh_TW">`,
    `<meta property="og:title" content="${esc(title)}">`,
    `<meta property="og:description" content="${esc(description)}">`,
    `<meta property="og:type" content="${type}">`,
    `<meta property="og:url" content="${SITE_URL}${url}">`,
    `<meta property="og:image" content="${SITE_URL}${image.src}">`,
    `<meta property="og:image:width" content="${image.width}">`,
    `<meta property="og:image:height" content="${image.height}">`,
    `<meta name="twitter:card" content="summary_large_image">`,
  ];
  if (published) tags.push(`<meta property="article:published_time" content="${published}">`);
  if (modified) tags.push(`<meta property="article:modified_time" content="${modified}">`);
  return tags.join('\n  ');
}

const PERSON_ID = `${SITE_URL}/#person`;
const WEBSITE_ID = `${SITE_URL}/#website`;

function layout({ title, description, url, current, body, type = 'website', image, published, modified, jsonLd, noindex = false }) {
  return `<!doctype html>
<html lang="zh-Hant-TW">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(title)} — 8h-probe</title>
  <meta name="description" content="${esc(description)}">
  ${noindex ? '<meta name="robots" content="noindex">' : `<link rel="canonical" href="${SITE_URL}${url}">`}
  <link rel="sitemap" type="application/xml" href="/sitemap.xml">
  ${socialMeta({ title, description, url, type, image, published, modified })}
  <link rel="preload" href="/assets/fonts/jf-openhuninn-subset.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600&family=Noto+Sans+TC:wght@400;700&display=optional" rel="stylesheet">
  <link rel="stylesheet" href="/assets/site.css">
${jsonLd ? `  <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>\n` : ''}</head>
<body class="bg-paper text-ink font-body antialiased">
  <main class="mx-auto max-w-2xl px-6">
    ${nav(current)}
${body}
    <footer class="mt-16 border-t border-ink/10 py-8">
      <p class="font-mono text-xs leading-relaxed text-pencil">© 2026 Ddio · 文字內容 CC BY 4.0 · 程式碼 MIT · <a class="underline hover:text-glue" href="https://github.com/ddio/8h-probe">GitHub</a></p>
    </footer>
  </main>
  <script data-goatcounter="https://8h-probe.goatcounter.com/count"
          async src="//gc.zgo.at/count.js"></script>
</body>
</html>
`;
}

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// ---------- markdown → article ----------

function splitFrontMatter(src) {
  // Title = first H1; kicker = the single short line right after it (e.g. "組織型態｜2026-09"), if any.
  const lines = src.split('\n');
  let title = '', kicker = '', i = 0;
  for (; i < lines.length; i++) {
    const m = /^#\s+(.+)$/.exec(lines[i]);
    if (m) { title = m[1].trim(); i++; break; }
  }
  while (i < lines.length && lines[i].trim() === '') i++;
  const cand = lines[i]?.trim() ?? '';
  if (cand && cand.length <= 60 && !/^[#!>\-|]/.test(cand) && lines[i + 1]?.trim() === '') {
    kicker = cand.replace(/\*\*/g, '');
    i++;
  }
  // Optional hand-written summary: a line starting with 摘要：, used for the index and share cards, not shown in the article.
  let summaryLine = '';
  while (i < lines.length && lines[i].trim() === '') i++;
  if (/^摘要：/.test(lines[i]?.trim() ?? '')) {
    summaryLine = lines[i].trim().replace(/^摘要：/, '');
    i++;
  }
  return { title, kicker, summaryLine, body: lines.slice(i).join('\n') };
}

function firstParagraph(mdBody) {
  const para = mdBody.split(/\n\s*\n/).map((s) => s.trim()).find((s) => s && !/^[#!>*\-|]/.test(s));
  return (para || '').replace(/\*\*|\*|`/g, '').replace(/\[([^\]]+)\]\([^)]*\)/g, '$1');
}

// Share-card description: whole sentences from the first paragraph, stopping once past ~60 chars.
function summary(text, min = 60, max = 110) {
  const parts = text.split(/(?<=[。！？])/);
  let out = '';
  for (const p of parts) {
    if (out.length >= min) break;
    if ((out + p).length > max && out) break;
    out += p;
  }
  return (out || text).slice(0, max);
}

// Citations: blockquote attribution lines of the form
//   > —— Author，〈[Title](url)〉，Publisher，date
// become schema.org CreativeWork entries; lines that don't match are kept as plain text.
function citations(mdBody) {
  const out = [];
  for (const m of mdBody.matchAll(/^>\s*——\s*(.+)$/gm)) {
    const line = m[1].trim();
    const st = /^(.+?)，〈\[(.+?)\]\((\S+?)\)〉，(.+?)，(.+?)(?:（.*）)?$/.exec(line);
    if (st) {
      const date = st[5].trim().replace(/^(\d{4}) 年 (\d{1,2}) 月$/, (_, y, mo) => `${y}-${mo.padStart(2, '0')}`);
      out.push({ '@type': 'CreativeWork', author: st[1], name: st[2], url: st[3], publisher: st[4], datePublished: date });
    }
    else out.push(line.replace(/\[([^\]]+)\]\([^)]*\)/g, '$1'));
  }
  return out;
}

// Dates from the trailing 編修紀錄 list: the newest entry is the modification date,
// the entry that mentions 刊出 (publication) is the publication date.
function articleDates(mdBody) {
  const log = mdBody.split(/\*編修紀錄\*/)[1] || '';
  const entries = [...log.matchAll(/^- (\d{4}-\d{2}-\d{2})：(.*)$/gm)].map((m) => ({ date: m[1], text: m[2] }));
  if (!entries.length) return {};
  const modified = entries[0].date;
  const published = (entries.find((e) => /刊出/.test(e.text)) || entries[0]).date;
  return { published, modified };
}

async function renderImages(body, srcDir, outDir, urlBase) {
  // Replace ![alt](file.png) with <picture> pointing at generated webp + the original as fallback.
  const re = /!\[([^\]]*)\]\(([^)\s]+)\)/g;
  const jobs = [];
  const html = body.replace(re, (whole, alt, file) => {
    if (/^https?:/.test(file)) return whole;
    const token = `@@IMG${jobs.length}@@`;
    jobs.push({ token, alt, file });
    return token;
  });
  let out = html;
  let first = null;
  for (const job of jobs) {
    const src = path.join(srcDir, job.file);
    const base = job.file.replace(/\.[^.]+$/, '');
    await mkdir(outDir, { recursive: true });
    const img = sharp(src);
    const meta = await img.metadata();
    const w = meta.width, h = meta.height;
    if (!first) {
      // Share card: crop the top of the first image to 1200×630 so platforms don't centre-crop a tall screenshot.
      const card = `${base}-og.png`;
      await sharp(src).resize(1200, 630, { fit: 'cover', position: 'top' }).png({ compressionLevel: 9 }).toFile(path.join(outDir, card));
      first = { src: `${urlBase}${card}`, width: 1200, height: 630 };
    }
    await sharp(src).webp({ quality: 82 }).toFile(path.join(outDir, `${base}.webp`));
    const small = w > SMALL_WIDTH;
    if (small) await sharp(src).resize({ width: SMALL_WIDTH }).webp({ quality: 80 }).toFile(path.join(outDir, `${base}-${SMALL_WIDTH}.webp`));
    await copyFile(src, path.join(outDir, job.file));
    const srcset = small
      ? `${urlBase}${base}-${SMALL_WIDTH}.webp ${SMALL_WIDTH}w, ${urlBase}${base}.webp ${w}w`
      : `${urlBase}${base}.webp ${w}w`;
    const sizes = `(min-width: 768px) ${Math.min(w, CONTENT_WIDTH)}px, calc(100vw - 3rem)`;
    const picture =
      `<picture><source type="image/webp" srcset="${srcset}" sizes="${sizes}">` +
      `<img src="${urlBase}${job.file}" width="${w}" height="${h}" loading="lazy" decoding="async" alt="${esc(job.alt)}"></picture>`;
    out = out.replace(job.token, `\n\n<!--picture-->${picture}<!--/picture-->\n\n`);
  }
  return { html: out, firstImage: first };
}

function restorePictures(html) {
  // markdown-it (html:false) escapes our injected markup; the paragraph wrapper is swapped for <figure>.
  return html.replace(/<p>&lt;!--picture--&gt;([\s\S]*?)&lt;!--\/picture--&gt;<\/p>/g, (_, inner) => {
    const unescaped = inner.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&amp;/g, '&');
    return `<figure>${unescaped}</figure>`;
  });
}

async function buildCase(file) {
  const slug = file.replace(/\.md$/, '');
  const url = `/cases/${slug}/`;
  const outDir = path.join(OUT, 'cases', slug);
  const src = await readFile(path.join(CASES_DIR, file), 'utf8');
  const { title, kicker, summaryLine, body } = splitFrontMatter(src);
  const description = summaryLine || summary(firstParagraph(body));
  // The trailing 編修紀錄 (edit log) stays in the markdown for the record but is not part of the web page.
  const webBody = body.replace(/\n---\s*\n\s*\*編修紀錄\*[\s\S]*$/, '\n');
  const { html: withImages, firstImage } = await renderImages(webBody, CASES_DIR, outDir, url);
  const article = restorePictures(md.render(withImages));
  const { published, modified } = articleDates(body);
  const cites = citations(body);

  const kickerHtml = [kicker ? esc(kicker) : '', published ? `刊出 <time datetime="${published}">${published}</time>` : '']
    .filter(Boolean).join('｜');
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${SITE_URL}${url}#article`,
    mainEntityOfPage: `${SITE_URL}${url}`,
    headline: title,
    description,
    inLanguage: 'zh-Hant-TW',
    datePublished: published,
    dateModified: modified,
    author: { '@id': PERSON_ID, '@type': 'Person', name: 'Ddio' },
    publisher: { '@id': PERSON_ID },
    isPartOf: { '@id': WEBSITE_ID },
    license: 'https://creativecommons.org/licenses/by/4.0/',
    ...(firstImage ? { image: `${SITE_URL}${firstImage.src}` } : {}),
    ...(cites.length ? { citation: cites } : {}),
  };
  const html = layout({
    title, description, url, current: 'cases', type: 'article',
    image: firstImage || undefined, published, modified, jsonLd,
    body: `    <article class="article">
      <header class="pt-12 md:pt-16">
        ${kickerHtml ? `<p class="kicker">${kickerHtml}</p>` : ''}
        <h1 class="mt-3 font-display text-3xl leading-snug text-steel md:text-4xl">${esc(title)}</h1>
      </header>
      <div class="article__body mt-10">
${article}
      </div>
    </article>
    <section class="mt-16">
      <hr class="rule mb-10">
      <p class="font-display text-xl leading-relaxed text-steel md:text-2xl">手上也有一件不確定 AI 做不做得到的事？</p>
      <p class="mt-6"><a class="btn-glue" href="mailto:hi@ddio.io">寫信聊聊</a><a class="link-steel ml-6" href="/cases/">回案例紀錄</a></p>
    </section>`,
  });
  await mkdir(outDir, { recursive: true });
  await writeFile(path.join(outDir, 'index.html'), html);
  return { slug, url, title, kicker, description, published, modified };
}

async function buildCasesIndex(cases) {
  const readme = await readFile(path.join(CASES_DIR, 'README.md'), 'utf8');
  const intro = readme.split(/\n## /)[0].replace(/^#\s+.+\n/, '').trim();
  const list = cases.length
    ? cases.map((c) => `        <li>
          <a class="case-link" href="${c.url}">
            ${c.kicker ? `<span class="kicker">${esc(c.kicker)}</span>` : ''}
            <span class="case-link__title font-display text-xl text-steel">${esc(c.title)}</span>
            <span class="case-link__desc">${esc(c.description)}</span>
          </a>
        </li>`).join('\n')
    : '        <li class="text-pencil">還沒有刊出的紀錄。</li>';
  const html = layout({
    title: '案例紀錄',
    description: '每一次服務的公開紀錄。組織名稱與可識別的細節依對方的意願匿名。',
    url: '/cases/', current: 'cases',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      '@id': `${SITE_URL}/cases/`,
      url: `${SITE_URL}/cases/`,
      name: '案例紀錄',
      inLanguage: 'zh-Hant-TW',
      isPartOf: { '@id': WEBSITE_ID },
      hasPart: cases.map((c) => ({ '@type': 'Article', '@id': `${SITE_URL}${c.url}#article`, url: `${SITE_URL}${c.url}`, headline: c.title })),
    },
    body: `    <header class="pt-12 md:pt-16">
      <h1 class="font-display text-3xl leading-snug text-steel md:text-4xl">案例紀錄</h1>
      <div class="article__body mt-6">
${md.render(intro)}
      </div>
    </header>
    <section class="mt-12">
      <hr class="rule mb-8">
      <ul class="case-list">
${list}
      </ul>
    </section>`,
  });
  await mkdir(path.join(OUT, 'cases'), { recursive: true });
  await writeFile(path.join(OUT, 'cases', 'index.html'), html);
}

async function buildHome(cases) {
  let html = await readFile(path.join(ROOT, 'index.html'), 'utf8');
  const latest = cases.slice(0, 3).map((c) => `        <li>
          <a class="case-link" href="${c.url}">
            ${c.kicker ? `<span class="kicker">${esc(c.kicker)}</span>` : ''}
            <span class="case-link__title font-display text-xl text-steel">${esc(c.title)}</span>
            <span class="case-link__desc">${esc(c.description)}</span>
          </a>
        </li>`).join('\n');
  html = html.replace('<!-- cases:latest -->', latest ? `<ul class="case-list mt-8">\n${latest}\n      </ul>` : '');
  html = html.replace('<!-- site:nav -->', nav('home'));
  await writeFile(path.join(OUT, 'index.html'), html);
}

async function buildNotFound() {
  const html = layout({
    title: '找不到這一頁', description: '這個網址沒有內容。', url: '/404.html', current: '', noindex: true,
    body: `    <section class="pt-16 md:pt-24">
      <p class="sec-num">404</p>
      <h1 class="mt-2 font-display text-3xl leading-snug text-steel md:text-4xl">找不到這一頁</h1>
      <p class="mt-6 leading-loose">這個網址沒有內容，可能是連結打錯，或是頁面已經搬走。</p>
      <p class="mt-6"><a class="link-steel" href="/">回服務說明</a><a class="link-steel ml-6" href="/cases/">看案例紀錄</a></p>
    </section>`,
  });
  await writeFile(path.join(OUT, '404.html'), html);
}

async function buildRobotsAndSitemap(cases) {
  const latest = cases.map((c) => c.modified).filter(Boolean).sort().at(-1);
  const entries = [
    { loc: '/', lastmod: latest },
    { loc: '/cases/', lastmod: latest },
    ...cases.map((c) => ({ loc: c.url, lastmod: c.modified })),
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.map((e) => `  <url><loc>${SITE_URL}${e.loc}</loc>${e.lastmod ? `<lastmod>${e.lastmod}</lastmod>` : ''}</url>`).join('\n')}
</urlset>
`;
  await writeFile(path.join(OUT, 'sitemap.xml'), xml);
  await writeFile(path.join(OUT, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);
}

// ---------- main ----------

await rm(OUT, { recursive: true, force: true });
await mkdir(OUT, { recursive: true });
await cp(path.join(ROOT, 'assets'), path.join(OUT, 'assets'), { recursive: true });
await copyFile(path.join(ROOT, 'CNAME'), path.join(OUT, 'CNAME'));

const files = (await readdir(CASES_DIR)).filter((f) => f.endsWith('.md') && f !== 'README.md').sort().reverse();
const cases = [];
for (const f of files) cases.push(await buildCase(f));
await buildCasesIndex(cases);
await buildHome(cases);
await buildNotFound();
await buildRobotsAndSitemap(cases);
console.log(`_site: home, /cases/ (${cases.length} case${cases.length === 1 ? '' : 's'}), 404, robots.txt, sitemap.xml`);
