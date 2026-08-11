import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLocale } from './use-locale';
import { buildLocalePath, stripLocalePrefix } from './locale-paths';
import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from './locales';

/**
 * Keeps `<html lang>` correct and publishes canonical / hreflang links for the
 * current page in every language.
 *
 * This is a client-rendered SPA on GitHub Pages, so there is no per-route HTML
 * file to hold these tags; they have to be written at runtime, the same way
 * `useNoindexMeta` handles the screencast pages.
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

    const elements = links.map(({ rel, hreflang, href }) => {
      const link = document.createElement('link');
      link.rel = rel;
      if (hreflang) {
        link.hreflang = hreflang;
      }
      link.href = href;
      document.head.appendChild(link);
      return link;
    });

    return () => {
      elements.forEach((link) => link.remove());
    };
  }, [locale, pathname, meta]);
}
