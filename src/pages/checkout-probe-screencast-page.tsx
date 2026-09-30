import { ScreencastPageLayout } from '../components/screencast-page-layout';
import { useTranslations } from '../i18n/use-locale';

/**
 * Reviewer screencast for the Checkout Probe App Store listing submission.
 * The video is recorded separately and added to `public/resources/` in its
 * own change; until then the page builds and shows an empty player.
 */
export function CheckoutProbeScreencastPage() {
  const { checkoutProbe } = useTranslations('appPages');

  return <ScreencastPageLayout title={checkoutProbe.title} videoSrc="/resources/CP_Screencast.mp4" />;
}
