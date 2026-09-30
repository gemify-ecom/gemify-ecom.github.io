import {
  CircleAlert,
  EyeOff,
  FileSpreadsheet,
  Flag,
  Globe,
  LayoutTemplate,
  Mailbox,
  Map as MapIcon,
  MousePointerClick,
  Package,
  ScanBarcode,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Truck,
  Upload,
  Users,
  Wrench,
  type LucideIcon,
} from 'lucide-react';
import { Layout } from '../components/layout';
import { AppPageFeatureGrid } from '../components/app-page-feature-grid';
import { ClosingCtaBand } from '../components/closing-cta-band';
import { PageHero } from '../components/page-hero';
import { SectionHeading } from '../components/section-heading';
import { PRIMARY_BUTTON_ON_INK, TEXT_LINK_ON_INK } from '../components/button-classes';
import { useTranslations } from '../i18n/use-locale';
import { LocalizedLink } from '../i18n/localized-link';
import type { AppId, ListedAppId } from '../site/gemify-apps';
import { HOME_APP_LINEUP } from '../site/home-app-lineup';

/** Apps that are not on the App Store yet and share this page layout. */
export type ComingSoonAppId = Exclude<AppId, ListedAppId>;

/** One plain line icon per feature, in the order of `features` in the dictionaries. */
const FEATURE_ICONS: Record<ComingSoonAppId, LucideIcon[]> = {
  japanMultiship: [Users, Mailbox, Truck, Package, FileSpreadsheet, ScanBarcode],
  bestStoreLocator: [MapIcon, Upload, Flag, LayoutTemplate, Search, Globe],
  checkoutProbe: [MousePointerClick, CircleAlert, Wrench, EyeOff, SlidersHorizontal, ShieldCheck],
};

/**
 * Detail page for an app that is not on the Shopify App Store yet: same
 * layout as the live app pages, with a disabled "Coming Soon" button in
 * place of the install link, no prices, and a contact link instead.
 */
export function ComingSoonAppPage({ app }: { app: ComingSoonAppId }) {
  const page = useTranslations('appPages')[app];
  const { apps } = useTranslations('home');
  const { actions, header } = useTranslations('common');
  const icon = HOME_APP_LINEUP.find((entry) => entry.id === app)?.icon;
  const featureIcons = FEATURE_ICONS[app].map((Icon, index) => (
    <Icon key={index} className="w-6 h-6 text-signal" strokeWidth={1.75} aria-hidden="true" />
  ));

  return (
    <Layout showFooterCTA={false}>
      <PageHero icon={icon} label={apps.comingSoon} title={page.title} lede={page.tagline}>
        <button
          type="button"
          disabled
          className="inline-flex items-center justify-center px-5 py-3 bg-white/10 text-ink-muted font-semibold rounded-xl cursor-not-allowed"
        >
          {apps.comingSoon}
        </button>
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

      {/* Requirements and known limits, so a merchant knows before asking */}
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
        <LocalizedLink to="/#contact" className={PRIMARY_BUTTON_ON_INK}>
          {actions.contactUs}
        </LocalizedLink>
        <LocalizedLink to="/#apps" className={TEXT_LINK_ON_INK}>
          {header.exploreApps}
        </LocalizedLink>
      </ClosingCtaBand>
    </Layout>
  );
}
