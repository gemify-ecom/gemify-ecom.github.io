import { useTranslations } from '../i18n/use-locale';
import { LocalizedLink } from '../i18n/localized-link';
import { interpolate } from '../i18n/rich-text';
import { APP_STORE_PARTNER_URL, SUPPORT_EMAIL, YOUTUBE_URL } from '../site/site-config';
import { GemifyLogoMark } from './gemify-logo-mark';
import { LanguageSwitcher } from './language-switcher';
import { ClosingCtaBand } from './closing-cta-band';
import { PRIMARY_BUTTON_ON_INK } from './button-classes';

const FOOTER_LINK_CLASS = 'text-[#9AA4B6] no-underline text-sm hover:text-white transition-colors';
const FOOTER_HEADING_CLASS = 'label-mono text-[#8B96AA] mb-4';

interface FooterProps {
  showCTA?: boolean;
}

export function Footer({ showCTA = true }: FooterProps) {
  const { brand, footer } = useTranslations('common');

  return (
    <>
      {/* Closing call to action on the same ink ground as the footer below it */}
      {showCTA && (
        <ClosingCtaBand heading={footer.ctaHeading} body={footer.ctaBody}>
          <LocalizedLink to="/#apps" className={PRIMARY_BUTTON_ON_INK}>
            {footer.ctaButton}
          </LocalizedLink>
        </ClosingCtaBand>
      )}

      {/* Footer */}
      {/* Extra bottom padding keeps the last line clear of Safari's floating bottom bar */}
      <footer className="bg-ink text-white pt-12 pb-[calc(3rem+env(safe-area-inset-bottom))] px-6">
        <div className="max-w-[1120px] mx-auto">
          {/* Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
            {/* Brand Column */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2.5 mb-4">
                <GemifyLogoMark />
                <span className="font-heading text-[1.3rem]">{brand}</span>
              </div>
              <p className="text-[#9AA4B6] text-sm leading-relaxed">
                {footer.brandBlurb}
              </p>
            </div>

            {/* Navigation Column */}
            <div>
              <h2 className={FOOTER_HEADING_CLASS}>{footer.navigationHeading}</h2>
              <nav aria-label={footer.navigationLabel} className="flex flex-col gap-3">
                <LocalizedLink to="/#apps" className={FOOTER_LINK_CLASS}>
                  {footer.ourApps}
                </LocalizedLink>
                <LocalizedLink to="/services" className={FOOTER_LINK_CLASS}>
                  {footer.services}
                </LocalizedLink>
                <LocalizedLink to="/#about" className={FOOTER_LINK_CLASS}>
                  {footer.aboutUs}
                </LocalizedLink>
                <LocalizedLink to="/#contact" className={FOOTER_LINK_CLASS}>
                  {footer.contact}
                </LocalizedLink>
              </nav>
            </div>

            {/* Resources Column */}
            <div>
              <h2 className={FOOTER_HEADING_CLASS}>{footer.resourcesHeading}</h2>
              <nav aria-label={footer.resourcesLabel} className="flex flex-col gap-3">
                <LocalizedLink to="/faq" className={FOOTER_LINK_CLASS}>
                  {footer.faq}
                </LocalizedLink>
                <LocalizedLink to="/privacy-policy" className={FOOTER_LINK_CLASS}>
                  {footer.privacyPolicy}
                </LocalizedLink>
                {/* Plain-markdown site summary for AI assistants */}
                <a href="/llms.txt" className={FOOTER_LINK_CLASS}>
                  llms.txt
                </a>
              </nav>
            </div>

            {/* Contact Column */}
            <div>
              <h2 className={FOOTER_HEADING_CLASS}>{footer.contactHeading}</h2>
              <div className="flex flex-col gap-3">
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="text-[#5AA8FF] no-underline text-sm hover:underline"
                >
                  {SUPPORT_EMAIL}
                </a>
                <a
                  href={APP_STORE_PARTNER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={FOOTER_LINK_CLASS}
                >
                  Shopify App Store
                </a>
                <a
                  href={YOUTUBE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={FOOTER_LINK_CLASS}
                >
                  YouTube
                </a>
              </div>
            </div>
          </div>

          {/* Copyright and language switcher */}
          <div className="pt-8 border-t border-ink-line flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#9AA4B6] text-sm order-2 md:order-1">
              {interpolate(footer.copyright, { year: __BUILD_YEAR__ })}
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
