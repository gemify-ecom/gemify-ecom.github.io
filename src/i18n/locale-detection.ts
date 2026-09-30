import { DEFAULT_LOCALE, isLocale, SUPPORTED_LOCALES, type Locale } from './locales';

/**
 * Locale resolution inputs, in precedence order:
 *
 *   1. `?locale=ja` in the URL       - explicit, forces the language and is remembered
 *   2. the URL prefix (`/ja/...`)    - explicit, the canonical shareable form
 *   3. the visitor's saved choice    - from a previous switcher click or `?locale=`
 *   4. the browser language          - `navigator.languages`
 *   5. `DEFAULT_LOCALE`
 *
 * Steps 3-5 only apply when the visitor lands on an unprefixed URL, so an
 * explicit `/ja/...` or `/faq` link always renders the language it names.
 */

const STORAGE_KEY = 'gemify.locale';

/** Name of the query parameter that forces a language, e.g. `?locale=ja`. */
export const LOCALE_QUERY_PARAM = 'locale';

/** Reads a forced locale from a query string. Returns null when absent or unknown. */
export function getLocaleFromSearch(search: string): Locale | null {
  const requested = new URLSearchParams(search).get(LOCALE_QUERY_PARAM);

  if (!requested) {
    return null;
  }

  // Accept `ja`, `ja-JP`, `JA` and similar spellings of a supported locale.
  return matchSupportedLocale(requested);
}

/** Removes the `locale` parameter, returning a search string ready for a URL. */
export function removeLocaleParam(search: string): string {
  const params = new URLSearchParams(search);
  params.delete(LOCALE_QUERY_PARAM);
  const remaining = params.toString();
  return remaining ? `?${remaining}` : '';
}

/** The locale the visitor previously chose, if any. */
export function readStoredLocale(): Locale | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return isLocale(stored) ? stored : null;
  } catch {
    // Private browsing modes can throw on localStorage access.
    return null;
  }
}

export function storeLocale(locale: Locale): void {
  try {
    localStorage.setItem(STORAGE_KEY, locale);
  } catch {
    // Persisting the choice is a nice-to-have; ignore storage failures.
  }
}

/** Best supported match for the browser's preferred languages. */
export function detectBrowserLocale(): Locale | null {
  if (typeof navigator === 'undefined') {
    return null;
  }

  const preferences = navigator.languages?.length
    ? navigator.languages
    : [navigator.language].filter(Boolean);

  for (const preference of preferences) {
    const match = matchSupportedLocale(preference);
    if (match) {
      return match;
    }
  }

  return null;
}

/**
 * Resolves the locale for a visitor landing on an unprefixed URL:
 * saved choice first, then browser language, then the default.
 */
export function resolveLandingLocale(): Locale {
  return readStoredLocale() ?? detectBrowserLocale() ?? DEFAULT_LOCALE;
}

/** Maps a BCP 47 tag such as `ja-JP` onto a supported locale. */
function matchSupportedLocale(tag: string): Locale | null {
  const base = tag.trim().toLowerCase().split('-')[0];
  return SUPPORTED_LOCALES.find((locale) => locale === base) ?? null;
}
