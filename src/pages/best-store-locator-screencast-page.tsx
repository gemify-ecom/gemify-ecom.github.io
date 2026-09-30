import { ScreencastPageLayout } from '../components/screencast-page-layout';
import { useTranslations } from '../i18n/use-locale';

/** Reviewer screencast for the Best Store Locator App Store listing submission. */
export function BestStoreLocatorScreencastPage() {
  const { bestStoreLocator } = useTranslations('appPages');

  return <ScreencastPageLayout title={bestStoreLocator.title} videoSrc="/resources/BSL_Screencast.mp4" />;
}
