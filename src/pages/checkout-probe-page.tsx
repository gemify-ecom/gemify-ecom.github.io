import { CircleAlert, EyeOff, MousePointerClick, ShieldCheck, SlidersHorizontal, Wrench } from 'lucide-react';
import { Layout } from '../components/layout';
import { AppPageFeatureGrid } from '../components/app-page-feature-grid';
import { ClosingCtaBand } from '../components/closing-cta-band';
import { PageHero } from '../components/page-hero';
import { SectionHeading } from '../components/section-heading';
import { PRIMARY_BUTTON_ON_INK, TEXT_LINK_ON_INK } from '../components/button-classes';
import { useTranslations } from '../i18n/use-locale';
import { LocalizedLink } from '../i18n/localized-link';
import { GEMIFY_APPS } from '../site/gemify-apps';

const APP_URL = GEMIFY_APPS.checkoutProbe.appStoreUrl;

const ICON_PROPS = { className: 'w-6 h-6 text-signal', strokeWidth: 1.75, 'aria-hidden': true } as const;

/**
 * Checkout Probe detail page. Same sections as before the listing went live
 * (problems, features, requirements), now with the install link. The closing
 * band links to the merchant help, which the App Store listing uses as its FAQ.
 */
export function CheckoutProbePage() {
  const { checkoutProbe: page } = useTranslations('appPages');
  const { actions } = useTranslations('common');

  // One plain line icon per feature, in the order of `features` in the dictionaries.
  const featureIcons = [
    <MousePointerClick key="test" {...ICON_PROPS} />,
    <CircleAlert key="stuck" {...ICON_PROPS} />,
    <Wrench key="fix" {...ICON_PROPS} />,
    <EyeOff key="blind" {...ICON_PROPS} />,
    <SlidersHorizontal key="settings" {...ICON_PROPS} />,
    <ShieldCheck key="safe" {...ICON_PROPS} />,
  ];

  return (
    <Layout showFooterCTA={false}>
      <PageHero icon="/resources/checkout_probe-192.png" title={page.title} lede={page.tagline}>
        <a href={APP_URL} target="_blank" rel="noopener noreferrer" className={PRIMARY_BUTTON_ON_INK}>
          {actions.installFree}
        </a>
        <LocalizedLink to="/#contact" className={TEXT_LINK_ON_INK}>
          {actions.contactUs}
        </LocalizedLink>
      </PageHero>

      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto grid gap-10">
          <SectionHeading heading={page.problemHeading} lede={page.problemIntro} />
          <AppPageFeatureGrid items={page.problems} columns={2} dense />
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 bg-mist">
        <div className="max-w-[1120px] mx-auto grid gap-10">
          <SectionHeading heading={page.howItWorksHeading} lede={page.howItWorksIntro} />
          <AppPageFeatureGrid items={page.features} leads={featureIcons} />
        </div>
      </section>

      {/* Requirements and known limits, so a merchant knows before installing */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
          <SectionHeading heading={page.goodToKnowHeading} />
          <ul className="grid gap-3 pl-5 list-disc marker:text-[#AAB4C4] text-lg text-[#39414F] leading-relaxed max-w-[640px]">
            {page.goodToKnow.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <ClosingCtaBand heading={page.ctaHeading} body={page.ctaBody}>
        <a href={APP_URL} target="_blank" rel="noopener noreferrer" className={PRIMARY_BUTTON_ON_INK}>
          {actions.installFree}
        </a>
        <LocalizedLink to="/apps/checkout-probe/help" className={TEXT_LINK_ON_INK}>
          {actions.readFaq}
        </LocalizedLink>
      </ClosingCtaBand>
    </Layout>
  );
}
