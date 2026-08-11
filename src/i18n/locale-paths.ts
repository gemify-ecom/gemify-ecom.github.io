import { DEFAULT_LOCALE, isLocale, SUPPORTED_LOCALES, type Locale } from './locales';

/**
 * URL helpers for prefix-based locale routing.
 *
 * Canonical shape:
 *   en -> /faq            (default locale, no prefix)
 *   ja -> /ja/faq
 */

/** Locales that own a URL prefix (everything except the default locale). */
const PREFIXED_LOCALES = SUPPORTED_LOCALES.filter((locale) => locale !== DEFAULT_LOCALE);

/** Reads the locale encoded in a pathname, falling back to the default locale. */
export function getLocaleFromPathname(pathname: string): Locale {
  const [, firstSegment] = pathname.split('/');

  if (isLocale(firstSegment) && PREFIXED_LOCALES.includes(firstSegment)) {
    return firstSegment;
  }

  return DEFAULT_LOCALE;
}

/** Strips any locale prefix, returning the locale-agnostic path (always starts with `/`). */
export function stripLocalePrefix(pathname: string): string {
  const locale = getLocaleFromPathname(pathname);

  if (locale === DEFAULT_LOCALE) {
    return pathname || '/';
  }

  const withoutPrefix = pathname.slice(`/${locale}`.length);
  return withoutPrefix.startsWith('/') ? withoutPrefix : `/${withoutPrefix}`;
}

/**
 * Builds the URL for `path` in `locale`.
 * `path` is a locale-agnostic app path such as `/`, `/faq`, or `/faq#pricing`.
 */
export function buildLocalePath(locale: Locale, path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;

  if (locale === DEFAULT_LOCALE) {
    return normalized;
  }

  // `/` must not become `/ja/` - a trailing slash would break route matching.
  return normalized === '/' ? `/${locale}` : `/${locale}${normalized}`;
}

/** Rewrites a full location (path + search + hash) into another locale. */
export function switchLocaleInLocation(
  locale: Locale,
  { pathname, search = '', hash = '' }: { pathname: string; search?: string; hash?: string },
): string {
  return buildLocalePath(locale, stripLocalePrefix(pathname)) + search + hash;
}
