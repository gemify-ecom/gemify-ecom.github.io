import { useEffect, useId, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslations } from '../i18n/use-locale';
import { LocalizedLink } from '../i18n/localized-link';
import { GemifyLogoMark } from './gemify-logo-mark';

interface HeaderProps {
  showLogo?: boolean;
}

const LINK_CLASS =
  'text-ink-muted no-underline text-sm font-medium hover:text-white transition-colors';

export function Header({ showLogo = true }: HeaderProps) {
  const { brand, header } = useTranslations('common');
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!menuOpen) {
      return;
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  const navLinks = [
    { to: '/#apps', label: header.apps },
    { to: '/services', label: header.services },
    { to: '/#about', label: header.about },
    { to: '/faq', label: header.faq },
    { to: '/#contact', label: header.contact },
  ];

  return (
    // Ink bar, same ground as the hero and footer
    <header className="sticky top-0 z-50 bg-ink py-3.5 border-b border-white/10">
      {/* 1168px minus the 24px padding on each side = the 1120px content width of the sections */}
      <div className="max-w-[1168px] mx-auto px-6 flex items-center justify-between">
        {/* Logo and brand: one link home */}
        <LocalizedLink
          to="/"
          className="flex items-center gap-3 font-heading text-[1.4rem] text-white no-underline"
        >
          {showLogo && <GemifyLogoMark />}
          {brand}
        </LocalizedLink>

        {/* Navigation - desktop */}
        <nav aria-label={header.navLabel} className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <LocalizedLink key={link.to} to={link.to} className={LINK_CLASS}>
              {link.label}
            </LocalizedLink>
          ))}
          <LocalizedLink
            to="/#apps"
            className="bg-signal text-white px-4 py-2 rounded-xl text-sm font-semibold no-underline hover:bg-signal-deep transition-colors"
          >
            {header.exploreApps}
          </LocalizedLink>
        </nav>

        {/* Menu toggle - mobile */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls={menuOpen ? menuId : undefined}
          aria-label={menuOpen ? header.closeMenu : header.openMenu}
          className="md:hidden inline-flex items-center justify-center w-11 h-11 -mr-2 rounded-lg text-white hover:bg-white/10 cursor-pointer"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Navigation - mobile panel, rendered only while open */}
      {menuOpen && (
      <nav
        id={menuId}
        aria-label={header.navLabel}
        className="md:hidden border-t border-white/10 mt-3.5 px-6 pt-2 pb-4 bg-ink"
      >
        <ul className="flex flex-col">
          {navLinks.map((link) => (
            <li key={link.to}>
              <LocalizedLink
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-base font-medium text-ink-muted no-underline hover:text-white"
              >
                {link.label}
              </LocalizedLink>
            </li>
          ))}
        </ul>
        <LocalizedLink
          to="/#apps"
          onClick={() => setMenuOpen(false)}
          className="mt-2 block text-center bg-signal text-white px-5 py-3 rounded-xl text-base font-semibold no-underline hover:bg-signal-deep transition-colors"
        >
          {header.exploreApps}
        </LocalizedLink>
      </nav>
      )}
    </header>
  );
}
