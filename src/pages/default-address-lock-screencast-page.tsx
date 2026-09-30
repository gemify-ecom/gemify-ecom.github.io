import { ScreencastPageLayout } from '../components/screencast-page-layout';
import { useTranslations } from '../i18n/use-locale';

export function DefaultAddressLockScreencastPage() {
  const { defaultAddressLock } = useTranslations('appPages');

  return (
    <ScreencastPageLayout
      title={defaultAddressLock.title}
      videoSrc="/resources/DAL_Screencast.mp4"
    />
  );
}
