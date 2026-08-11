/**
 * Supported locales for the site.
 *
 * `en` is the default locale and lives at the unprefixed URL root (`/faq`).
 * Every other locale is served from a path prefix (`/ja/faq`) so that each
 * language has a crawlable, shareable URL.
 */
export const SUPPORTED_LOCALES = ['en', 'ja'] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'en';

/** Label shown in the language switcher, written in the language itself. */
export const LOCALE_LABELS: Record<Locale, string> = {
  en: 'English',
  ja: '日本語',
};

/** Short label for the compact switcher buttons. */
export const LOCALE_SHORT_LABELS: Record<Locale, string> = {
  en: 'EN',
  ja: '日本語',
};

export function isLocale(value: string | null | undefined): value is Locale {
  return !!value && (SUPPORTED_LOCALES as readonly string[]).includes(value);
}
