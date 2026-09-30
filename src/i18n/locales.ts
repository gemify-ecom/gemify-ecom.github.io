/**
 * Supported locales for the site.
 *
 * `en` is the default locale and lives at the unprefixed URL root (`/faq`).
 * Every other locale is served from a path prefix (`/ja/faq`) so that each
 * language has a crawlable, shareable URL.
 */
export const SUPPORTED_LOCALES = ['en', 'ja', 'de', 'fr', 'es'] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'en';

/** Label shown in the language switcher, written in the language itself. */
export const LOCALE_LABELS: Record<Locale, string> = {
  en: 'English',
  ja: '日本語',
  de: 'Deutsch',
  fr: 'Français',
  es: 'Español',
};

/** Open Graph `og:locale` value for each language. */
export const OG_LOCALES: Record<Locale, string> = {
  en: 'en_US',
  ja: 'ja_JP',
  de: 'de_DE',
  fr: 'fr_FR',
  es: 'es_ES',
};

export function isLocale(value: string | null | undefined): value is Locale {
  return !!value && (SUPPORTED_LOCALES as readonly string[]).includes(value);
}
