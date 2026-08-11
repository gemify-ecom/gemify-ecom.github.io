import { useTranslations } from '../i18n/use-locale';
import { LocalizedLink } from '../i18n/localized-link';
import { useLocalePath } from '../i18n/use-locale';

interface HeaderProps {
  showLogo?: boolean;
}

export function Header({ showLogo = true }: HeaderProps) {
  const { brand, header } = useTranslations('common');
  const localePath = useLocalePath();
  const homeAnchor = (anchor: string) => `${localePath('/')}#${anchor}`;

  return (
    <header role="banner" className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm py-4 border-b border-[#E1E3E5]">
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        {/* Logo and Brand */}
        <div className="flex items-center gap-3">
          {showLogo && (
            <div className="w-10 h-10">
              <img
                src="/resources/gemify.png"
                alt={header.logoAlt}
                width={40}
                height={40}
                className="w-full h-full object-contain"
              />
            </div>
          )}
          <LocalizedLink
            to="/"
            className="text-2xl font-bold text-[#202223] no-underline hover:text-[#00A87B] transition-colors"
          >
            {brand}
          </LocalizedLink>
        </div>

        {/* Navigation - Desktop Only */}
        <nav aria-label={header.navLabel} className="hidden md:flex items-center gap-8">
          <a
            href={homeAnchor('apps')}
            className="text-[#202223] no-underline text-sm font-medium hover:text-[#00A87B] transition-colors"
          >
            {header.apps}
          </a>
          <a
            href={homeAnchor('about')}
            className="text-[#202223] no-underline text-sm font-medium hover:text-[#00A87B] transition-colors"
          >
            {header.about}
          </a>
          <a
            href={homeAnchor('contact')}
            className="text-[#202223] no-underline text-sm font-medium hover:text-[#00A87B] transition-colors"
          >
            {header.contact}
          </a>
          <a
            href={homeAnchor('apps')}
            className="bg-[#00A87B] text-white px-5 py-2.5 rounded-lg text-sm font-semibold no-underline hover:bg-[#008060] transition-colors"
          >
            {header.exploreApps}
          </a>
        </nav>
      </div>
    </header>
  );
}
