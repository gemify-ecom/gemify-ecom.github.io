/**
 * Writes one static HTML file per route and locale into dist/, plus
 * sitemap.xml, using the server bundle built from src/entry-server.tsx.
 *
 * Runs after `vite build` (client) and `vite build --ssr` (server) as part of
 * `npm run build`. dist/index.html from the client build is the template: its
 * <title> is replaced with the page's full <head> tags, and the empty
 * #root is filled with the rendered page.
 */
import { mkdir, readdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(rootDir, 'dist');
const serverDir = path.join(rootDir, 'dist-server');

const { PRERENDER_TARGETS, renderPage, buildSitemapXml, loadAllDictionaries } = await import(
  pathToFileURL(path.join(serverDir, 'entry-server.js')).href
);

// Rendering is synchronous, so every language's copy must be in memory first.
await loadAllDictionaries();

const template = await readFile(path.join(distDir, 'index.html'), 'utf8');

// Non-English pages need their dictionary chunk before hydrating; preloading
// it from the HTML fetches it in parallel with the main bundle.
const assetFiles = await readdir(path.join(distDir, 'assets'));
function dictionaryPreload(lang) {
  const chunk = assetFiles.find((file) => file.startsWith(`dictionary-${lang}-`) && file.endsWith('.js'));
  return chunk ? `\n    <link rel="modulepreload" crossorigin href="/assets/${chunk}" />` : '';
}

/** Replaces exactly one occurrence, failing loudly if the template changed shape. */
function replaceOnce(html, pattern, replacement, label) {
  if (!pattern.test(html)) {
    throw new Error(`prerender: ${label} not found in dist/index.html`);
  }
  // A function replacement keeps `$` in page content (prices) literal.
  return html.replace(pattern, () => replacement);
}

for (const { url, file, hydrate } of PRERENDER_TARGETS) {
  const { lang, headHtml, appHtml } = renderPage(url);

  let html = replaceOnce(template, /<html lang="[^"]*">/, `<html lang="${lang}">`, '<html lang>');
  html = replaceOnce(html, /<title>[\s\S]*?<\/title>/, headHtml + dictionaryPreload(lang), '<title>');
  html = replaceOnce(
    html,
    /<div id="root"><\/div>/,
    `<div id="root" data-prerendered-path="${hydrate ? url : ''}">${appHtml}</div>`,
    '<div id="root">',
  );

  const outputPath = path.join(distDir, file);
  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, html);
}

await writeFile(path.join(distDir, 'sitemap.xml'), buildSitemapXml());
await rm(serverDir, { recursive: true, force: true });

console.log(`prerender: wrote ${PRERENDER_TARGETS.length} pages and sitemap.xml`);
