import { Globe } from 'lucide-react';
import { useLocale, useTranslations } from '../i18n/use-locale';
import { LOCALE_LABELS, LOCALE_SHORT_LABELS, SUPPORTED_LOCALES } from '../i18n/locales';

/**
 * Footer language switcher. The active language is derived from the URL (see
 * `LocaleUrlSync`), so this control only records the visitor's choice and moves
 * them to the matching URL for the page they are on.
 */
export function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();
  const { languageSwitcher } = useTranslations('common');

  return (
    <div className="flex items-center gap-2 text-[#9CA3AF]">
      <Globe className="w-4 h-4 shrink-0" aria-hidden="true" />
      <span className="sr-only">{languageSwitcher.heading}</span>
      <div
        role="group"
        aria-label={languageSwitcher.label}
        className="inline-flex rounded-lg border border-[#374151] overflow-hidden"
      >
        {SUPPORTED_LOCALES.map((option) => {
          const isActive = option === locale;

          return (
            <button
              key={option}
              type="button"
              lang={option}
              onClick={() => setLocale(option)}
              aria-current={isActive ? 'true' : undefined}
              title={LOCALE_LABELS[option]}
              className={`px-3 py-2 text-sm font-medium transition-colors cursor-pointer ${
                isActive
                  ? 'bg-[#00A87B] text-white'
                  : 'bg-transparent text-[#9CA3AF] hover:text-white hover:bg-[#2C2E30]'
              }`}
            >
              {LOCALE_SHORT_LABELS[option]}
            </button>
          );
        })}
      </div>
    </div>
  );
}
