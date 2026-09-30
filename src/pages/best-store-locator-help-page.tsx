import { HelpPageLayout } from '../components/help-page-layout';
import { useTranslations } from '../i18n/use-locale';
import { BEST_STORE_LOCATOR_HELP, BEST_STORE_LOCATOR_HELP_INTRO } from './best-store-locator-help-content';

/**
 * Merchant help for Best Store Locator, linked from its App Store listing.
 * The app is not on the App Store yet, so like Japan Multiship's screencast it
 * has no detail page, nav link, JSON-LD, or sitemap entry. The content is
 * English in every locale because the app UI is English only (see the
 * content module).
 */
export function BestStoreLocatorHelpPage() {
  const { bestStoreLocator } = useTranslations('appPages');

  return (
    <HelpPageLayout
      title={bestStoreLocator.title}
      intro={BEST_STORE_LOCATOR_HELP_INTRO}
      sections={BEST_STORE_LOCATOR_HELP}
    />
  );
}
