import { Filter, Trash2, History, FileText, Shield, Users } from 'lucide-react';
import { Layout } from '../components/layout';
import { AppPageFeatureGrid } from '../components/app-page-feature-grid';
import { ClosingCtaBand } from '../components/closing-cta-band';
import { PageHero } from '../components/page-hero';
import { SectionHeading } from '../components/section-heading';
import { PRIMARY_BUTTON_ON_INK, TEXT_LINK_ON_INK } from '../components/button-classes';
import { useTranslations } from '../i18n/use-locale';
import { LocalizedLink } from '../i18n/localized-link';
import { GEMIFY_APPS } from '../site/gemify-apps';

const APP_STORE_URL = GEMIFY_APPS.bulkDeleteOrders.appStoreUrl;

const ICON_PROPS = { className: 'w-6 h-6 text-signal', strokeWidth: 1.75, 'aria-hidden': true } as const;

export function BulkDeleteOrdersPage() {
  const { bulkDeleteOrders: page } = useTranslations('appPages');
  const { actions } = useTranslations('common');

  // Icons stay next to the layout; the copy comes from the dictionary in order.
  const featureIcons = [
    <Filter key="filter" {...ICON_PROPS} />,
    <Trash2 key="trash" {...ICON_PROPS} />,
    <History key="history" {...ICON_PROPS} />,
    <FileText key="file" {...ICON_PROPS} />,
    <Shield key="shield" {...ICON_PROPS} />,
    <Users key="users" {...ICON_PROPS} />,
  ];

  return (
    <Layout showFooterCTA={false}>
      <PageHero icon="/resources/bulk_delete_orders-192.jpg" title={page.title} lede={page.tagline}>
        <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className={PRIMARY_BUTTON_ON_INK}>
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

      <ClosingCtaBand heading={page.ctaHeading} body={page.ctaBody}>
        <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className={PRIMARY_BUTTON_ON_INK}>
          {actions.installFreeOnShopify}
        </a>
        <LocalizedLink to="/faq#bulk-delete-orders" className={TEXT_LINK_ON_INK}>
          {actions.readFaq}
        </LocalizedLink>
      </ClosingCtaBand>
    </Layout>
  );
}
