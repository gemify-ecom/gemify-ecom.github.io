import { HelpPageLayout } from '../components/help-page-layout';
import { useTranslations } from '../i18n/use-locale';
import { CHECKOUT_PROBE_HELP, CHECKOUT_PROBE_HELP_INTRO } from './checkout-probe-help-content';

/**
 * Merchant help for Checkout Probe, linked from its App Store listing as the
 * FAQ and documentation URL. It has no nav link, JSON-LD, or sitemap entry:
 * the content is English in every locale because the app UI is English only
 * (see the content module), so indexing it would publish five copies.
 */
export function CheckoutProbeHelpPage() {
  const { checkoutProbe } = useTranslations('appPages');

  return <HelpPageLayout title={checkoutProbe.title} intro={CHECKOUT_PROBE_HELP_INTRO} sections={CHECKOUT_PROBE_HELP} />;
}
