import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { AppRoutes } from './app-routes';
import { buildLocalePath, getLocaleFromPathname } from './i18n/locale-paths';
import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from './i18n/locales';
import { buildPageHead } from './seo/page-head';
import { pageHeadToHtml } from './seo/page-head-output';
import { absoluteUrl } from './seo/structured-data';
import { SITE_PAGES } from './site/site-pages';

export { loadAllDictionaries } from './i18n/dictionary-store';

/**
 * Build-time entry used by `scripts/prerender.mjs`. GitHub Pages can only
 * serve static files, so every route is rendered to its own HTML file at
 * build time. Crawlers and AI agents then get the full page content, title,
 * and structured data with a 200 status, without running JavaScript; the
 * browser hydrates the same markup and carries on as a normal SPA.
 */

export interface PrerenderTarget {
  /** URL the page is rendered for, e.g. `/ja/faq`. */
  url: string;
  /** Output file relative to `dist/`, e.g. `ja/faq.html`. */
  file: string;
  /** Whether the client may hydrate this markup (false for the shared 404 page). */
  hydrate: boolean;
}

/**
 * GitHub Pages serves `/faq` from `faq.html` and `/ja` from `ja.html` (even
 * when a `ja/` folder exists) without a redirect, so writing `{path}.html`
 * keeps every existing URL exactly as it is.
 */
function outputFileFor(url: string): string {
  return url === '/' ? 'index.html' : `${url.slice(1)}.html`;
}

export const PRERENDER_TARGETS: PrerenderTarget[] = [
  ...SUPPORTED_LOCALES.flatMap((locale) =>
    SITE_PAGES.map((page) => {
      const url = buildLocalePath(locale, page.path);
      return { url, file: outputFileFor(url), hydrate: true };
    }),
  ),
  // Served by GitHub Pages for every unknown URL, in any language, so the
  // client renders it fresh instead of hydrating.
  { url: '/404', file: '404.html', hydrate: false },
];

export interface RenderedPage {
  lang: string;
  headHtml: string;
  appHtml: string;
}

export function renderPage(url: string): RenderedPage {
  const appHtml = renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </StrictMode>,
  );
  const head = buildPageHead(getLocaleFromPathname(url), url);

  return { lang: head.lang, headHtml: pageHeadToHtml(head), appHtml };
}

/** sitemap.xml listing every indexable page in every language, with hreflang alternates. */
export function buildSitemapXml(): string {
  const entries = SITE_PAGES.filter((page) => page.indexable).flatMap((page) => {
    const alternates = [
      ...SUPPORTED_LOCALES.map((locale) => ({ hreflang: locale, href: absoluteUrl(locale, page.path) })),
      { hreflang: 'x-default', href: absoluteUrl(DEFAULT_LOCALE, page.path) },
    ]
      .map(({ hreflang, href }) => `    <xhtml:link rel="alternate" hreflang="${hreflang}" href="${href}"/>`)
      .join('\n');

    return SUPPORTED_LOCALES.map(
      (locale) => `  <url>\n    <loc>${absoluteUrl(locale, page.path)}</loc>\n${alternates}\n  </url>`,
    );
  });

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...entries,
    '</urlset>',
    '',
  ].join('\n');
}
