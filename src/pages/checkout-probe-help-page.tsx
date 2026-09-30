import { HelpPageLayout } from '../components/help-page-layout';
import { useTranslations } from '../i18n/use-locale';
import { CHECKOUT_PROBE_HELP, CHECKOUT_PROBE_HELP_INTRO } from './checkout-probe-help-content';

/**
 * Merchant help for Checkout Probe, linked from its App Store listing as the
 * FAQ and documentation URL. The app is not on the App Store yet, so like Best
 * Store Locator's help it has no detail page, nav link, JSON-LD, or sitemap
 * entry. The content is English in every locale because the app UI is English
 * only (see the content module).
 */
export function CheckoutProbeHelpPage() {
  const { checkoutProbe } = useTranslations('appPages');

  return <HelpPageLayout title={checkoutProbe.title} intro={CHECKOUT_PROBE_HELP_INTRO} sections={CHECKOUT_PROBE_HELP} />;
}
