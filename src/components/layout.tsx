import type { ReactNode } from 'react';
import { Header } from './header';
import { Footer } from './footer';
import { useTranslations } from '../i18n/use-locale';

interface LayoutProps {
  children: ReactNode;
  showHeader?: boolean;
  showFooter?: boolean;
  showHeaderLogo?: boolean;
  showFooterCTA?: boolean;
}

/** Id of the `<main>` landmark; the skip link on every page jumps here. */
export const MAIN_CONTENT_ID = 'main-content';

export function Layout({
  children,
  showHeader = true,
  showFooter = true,
  showHeaderLogo = true,
  showFooterCTA = true,
}: LayoutProps) {
  const { skipToContent } = useTranslations('common');

  return (
    <div className="min-h-screen flex flex-col">
      {/* Skip link: the first focusable element, visible only when focused */}
      <a
        href={`#${MAIN_CONTENT_ID}`}
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#0066E6] focus:text-white focus:rounded-lg focus:no-underline"
      >
        {skipToContent}
      </a>
      {showHeader && <Header showLogo={showHeaderLogo} />}
      <main id={MAIN_CONTENT_ID} tabIndex={-1} className="flex-1 focus:outline-none">
        {children}
      </main>
      {showFooter && <Footer showCTA={showFooterCTA} />}
    </div>
  );
}
