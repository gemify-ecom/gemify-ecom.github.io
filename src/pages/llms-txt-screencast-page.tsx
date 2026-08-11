import { ScreencastPageLayout } from '../components/screencast-page-layout';
import { useTranslations } from '../i18n/use-locale';

export function LlmsTxtScreencastPage() {
  const { llmsTxt } = useTranslations('appPages');

  return <ScreencastPageLayout title={llmsTxt.title} videoSrc="/resources/LF_Screencast.mp4" />;
}
