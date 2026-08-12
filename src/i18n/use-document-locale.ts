import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLocale } from './use-locale';
import { buildLocalePath, stripLocalePrefix } from './locale-paths';
import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from './locales';

/**
 * Keeps `<html lang>` correct, publishes canonical / hreflang links for the
 * current page in every language, and marks every page except the home page
 * as `noindex` so only the home page appears in search results.
 *
 * This is a client-rendered SPA on GitHub Pages, so there is no per-route HTML
 * file to hold these tags; they have to be written at runtime. The noindex
 * relies on crawlers being allowed to fetch these routes: robots.txt must not
 * Disallow them, or the tag is never seen and the URL can stay indexed.
 */
export function useDocumentLocale() {
  const { locale, dictionary } = useLocale();
  const { pathname } = useLocation();
  const { meta } = dictionary.common;

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = meta.title;

    const descriptionMeta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (descriptionMeta) {
      descriptionMeta.content = meta.description;
    }

    const { origin } = window.location;
    const path = stripLocalePrefix(pathname);

    const links: { rel: string; hreflang?: string; href: string }[] = [
      { rel: 'canonical', href: origin + buildLocalePath(locale, path) },
      ...SUPPORTED_LOCALES.map((alternate) => ({
        rel: 'alternate',
        hreflang: alternate,
        href: origin + buildLocalePath(alternate, path),
      })),
      // Tells search engines which version to serve when no language matches.
      { rel: 'alternate', hreflang: 'x-default', href: origin + buildLocalePath(DEFAULT_LOCALE, path) },
    ];

    const elements: Element[] = links.map(({ rel, hreflang, href }) => {
      const link = document.createElement('link');
      link.rel = rel;
      if (hreflang) {
        link.hreflang = hreflang;
      }
      link.href = href;
      document.head.appendChild(link);
      return link;
    });

    // Only the home page (in any language) may be indexed.
    if (path !== '/') {
      const robots = document.createElement('meta');
      robots.name = 'robots';
      robots.content = 'noindex';
      document.head.appendChild(robots);
      elements.push(robots);
    }

    return () => {
      elements.forEach((element) => element.remove());
    };
  }, [locale, pathname, meta]);
}
