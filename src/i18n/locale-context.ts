import { createContext } from 'react';
import type { Locale } from './locales';
import type { Dictionary } from './translations';

export interface LocaleContextValue {
  locale: Locale;
  /** Persists the choice and navigates to the same page in the new locale. */
  setLocale: (locale: Locale) => void;
  dictionary: Dictionary;
}

/**
 * Holds the active locale. Kept in its own module so the provider component and
 * the hooks can live in separate files, which keeps fast refresh working.
 */
export const LocaleContext = createContext<LocaleContextValue | null>(null);
