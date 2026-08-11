import { useTranslations } from '../i18n/use-locale';
import { LocalizedLink } from '../i18n/localized-link';
import { LanguageSwitcher } from './language-switcher';

interface FooterProps {
  showCTA?: boolean;
}

export function Footer({ showCTA = true }: FooterProps) {
  const { brand, footer } = useTranslations('common');

  return (
    <>
      {/* Final CTA Section - Only on homepage */}
      {showCTA && (
        <section className="bg-gradient-to-r from-[#00A87B] to-[#00BFA5] py-16 px-6 text-center">
          <div className="max-w-[800px] mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              {footer.ctaHeading}
            </h2>
            <p className="text-white/90 text-lg mb-8">
              {footer.ctaBody}
            </p>
            <a
              href="#apps"
              className="inline-block bg-white text-[#00A87B] px-8 py-4 rounded-xl text-lg font-semibold no-underline hover:bg-gray-100 transition-colors shadow-lg"
            >
              {footer.ctaButton}
            </a>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer role="contentinfo" className="bg-[#202223] text-white py-12 px-6">
        <div className="max-w-[1200px] mx-auto">
          {/* Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
            {/* Brand Column */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/resources/gemify.png"
                  alt={brand}
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
                <span className="text-xl font-bold">{brand}</span>
              </div>
              <p className="text-[#9CA3AF] text-sm leading-relaxed">
                {footer.brandBlurb}
              </p>
            </div>

            {/* Navigation Column */}
            <div>
              <h4 className="font-semibold mb-4 text-white">{footer.navigationHeading}</h4>
              <nav aria-label={footer.navigationLabel} className="flex flex-col gap-3">
                <a href="#apps" className="text-[#9CA3AF] no-underline text-sm hover:text-[#00A87B] transition-colors">
                  {footer.ourApps}
                </a>
                <a href="#about" className="text-[#9CA3AF] no-underline text-sm hover:text-[#00A87B] transition-colors">
                  {footer.aboutUs}
                </a>
                <a href="#contact" className="text-[#9CA3AF] no-underline text-sm hover:text-[#00A87B] transition-colors">
                  {footer.contact}
                </a>
              </nav>
            </div>

            {/* Resources Column */}
            <div>
              <h4 className="font-semibold mb-4 text-white">{footer.resourcesHeading}</h4>
              <nav aria-label={footer.resourcesLabel} className="flex flex-col gap-3">
                <LocalizedLink to="/faq" className="text-[#9CA3AF] no-underline text-sm hover:text-[#00A87B] transition-colors">
                  {footer.faq}
                </LocalizedLink>
                <LocalizedLink to="/privacy-policy" className="text-[#9CA3AF] no-underline text-sm hover:text-[#00A87B] transition-colors">
                  {footer.privacyPolicy}
                </LocalizedLink>
              </nav>
            </div>

            {/* Contact Column */}
            <div>
              <h4 className="font-semibold mb-4 text-white">{footer.contactHeading}</h4>
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:sean.gemify@gmail.com"
                  className="text-[#00A87B] no-underline text-sm hover:underline"
                >
                  sean.gemify@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Copyright and language switcher */}
          <div className="pt-8 border-t border-[#374151] flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#616569] text-sm order-2 md:order-1">
              {footer.copyright}
            </p>
            <div className="order-1 md:order-2">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
