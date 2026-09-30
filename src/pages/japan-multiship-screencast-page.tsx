import { ScreencastPageLayout } from '../components/screencast-page-layout';
import { useTranslations } from '../i18n/use-locale';

export function JapanMultishipScreencastPage() {
  const { japanMultiship } = useTranslations('appPages');

  return <ScreencastPageLayout title={japanMultiship.title} videoSrc="/resources/JM_Screencast.mp4" />;
}
