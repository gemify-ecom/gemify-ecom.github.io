import { SUPPORTED_LOCALES, type Locale } from './locales';
import { englishDictionary, type Dictionary } from './translations';

/**
 * Loads each language's copy only when a page is shown in that language, so
 * visitors download one dictionary instead of all five. English is bundled;
 * every other language is a separate chunk.
 *
 * The browser entry waits for the current URL's language before it hydrates,
 * and language switches load the next language before navigating, so pages
 * render synchronously in the normal flow. `LocaleProvider` suspends only in
 * the rare case of landing on an unloaded language (e.g. browser back after a
 * reload). The prerender step loads every language up front.
 */

type LazyLocale = Exclude<Locale, 'en'>;

const LOADERS: Record<LazyLocale, () => Promise<Dictionary>> = {
  ja: () => import('./translations/ja/dictionary-ja').then((module) => module.dictionaryJa),
  de: () => import('./translations/de/dictionary-de').then((module) => module.dictionaryDe),
  fr: () => import('./translations/fr/dictionary-fr').then((module) => module.dictionaryFr),
  es: () => import('./translations/es/dictionary-es').then((module) => module.dictionaryEs),
};

const loaded = new Map<Locale, Dictionary>([['en', englishDictionary]]);
const pending = new Map<Locale, Promise<Dictionary>>();

/** The dictionary for `locale` if it has already been loaded. */
export function getLoadedDictionary(locale: Locale): Dictionary | undefined {
  return loaded.get(locale);
}

/** The dictionary for `locale`; only call after it has been loaded. */
export function getDictionary(locale: Locale): Dictionary {
  const dictionary = loaded.get(locale);
  if (!dictionary) {
    throw new Error(`Dictionary for "${locale}" is not loaded yet`);
  }
  return dictionary;
}

/**
 * Loads `locale`, returning the same promise to every caller while it is in
 * flight (React's `use()` requires a stable promise). A failed load is not
 * cached, so the next attempt retries; callers decide how to recover (see
 * `locale-navigation.ts`). At build time a failure fails the build rather
 * than prerendering English text under another language's URL.
 */
export function loadDictionary(locale: Locale): Promise<Dictionary> {
  const ready = loaded.get(locale);
  if (ready) {
    return Promise.resolve(ready);
  }

  let promise = pending.get(locale);
  if (!promise) {
    promise = LOADERS[locale as LazyLocale]().then(
      (dictionary) => {
        loaded.set(locale, dictionary);
        pending.delete(locale);
        return dictionary;
      },
      (error: unknown) => {
        pending.delete(locale);
        throw error;
      },
    );
    pending.set(locale, promise);
  }
  return promise;
}

/** Used at build time so every page can be prerendered synchronously. */
export async function loadAllDictionaries(): Promise<void> {
  await Promise.all(SUPPORTED_LOCALES.map(loadDictionary));
}
