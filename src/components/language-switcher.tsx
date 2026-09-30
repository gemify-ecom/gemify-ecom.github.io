import { useEffect, useId, useRef, useState, type MouseEvent as ReactMouseEvent } from 'react';
import { useLocation } from 'react-router-dom';
import { Check, ChevronDown, Globe } from 'lucide-react';
import { useLocale, useTranslations } from '../i18n/use-locale';
import { switchLocaleInLocation } from '../i18n/locale-paths';
import { LOCALE_LABELS, SUPPORTED_LOCALES, type Locale } from '../i18n/locales';

/**
 * Footer language switcher, styled after shopify.com's footer control: a
 * compact trigger showing the current language that opens a dropdown listing
 * every language in its own tongue. The active language is derived from the
 * URL (see `LocaleUrlSync`), so this control only records the visitor's choice
 * and moves them to the matching URL for the page they are on.
 *
 * Each option is a real link to the same page in that language, so crawlers
 * and browser agents can follow it without opening the menu.
 */
export function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();
  const { languageSwitcher } = useTranslations('common');
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();

  // Close when clicking outside or pressing Escape; Escape returns focus to
  // the trigger so keyboard users are not stranded.
  useEffect(() => {
    if (!open) {
      return;
    }

    const onPointerDown = (event: MouseEvent | TouchEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('touchstart', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('touchstart', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  // Plain clicks switch in-app (and remember the choice); modified clicks
  // such as Cmd+click keep the browser's default "open in new tab".
  const selectLocale = (event: ReactMouseEvent<HTMLAnchorElement>, next: Locale) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) {
      return;
    }
    event.preventDefault();
    setOpen(false);
    if (next !== locale) {
      setLocale(next);
    }
  };

  return (
    <div ref={containerRef} className="relative">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        aria-controls={menuId}
        // The name starts with the visible language so voice control matches it.
        aria-label={`${LOCALE_LABELS[locale]}: ${languageSwitcher.label}`}
        className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-[#374151] text-sm font-medium text-[#9CA3AF] hover:text-white hover:bg-[#2C2E30] transition-colors cursor-pointer"
      >
        <Globe className="w-4 h-4 shrink-0" aria-hidden="true" />
        <span lang={locale}>{LOCALE_LABELS[locale]}</span>
        <ChevronDown
          className={`w-4 h-4 shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>

      <ul
        id={menuId}
        aria-label={languageSwitcher.heading}
        hidden={!open}
        className="absolute bottom-full right-0 mb-2 min-w-full w-max rounded-lg border border-[#374151] bg-[#1A1C1D] shadow-xl overflow-hidden py-1 z-50"
      >
        {SUPPORTED_LOCALES.map((option) => {
          const isActive = option === locale;

          return (
            <li key={option}>
              <a
                // Path only: the prerendered HTML cannot know the query or hash, and
                // an href that differs after hydration is never corrected.
                href={switchLocaleInLocation(option, { pathname: location.pathname })}
                hrefLang={option}
                lang={option}
                aria-current={isActive ? 'true' : undefined}
                onClick={(event) => selectLocale(event, option)}
                className={`flex w-full items-center justify-between gap-4 px-4 py-2 text-sm text-left no-underline transition-colors ${
                  isActive
                    ? 'text-white font-medium'
                    : 'text-[#9CA3AF] hover:text-white hover:bg-[#2C2E30]'
                }`}
              >
                {LOCALE_LABELS[option]}
                {isActive && <Check className="w-4 h-4 shrink-0 text-[#0A7BF7]" aria-hidden="true" />}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
