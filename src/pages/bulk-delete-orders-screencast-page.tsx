import { ScreencastPageLayout } from '../components/screencast-page-layout';
import { useTranslations } from '../i18n/use-locale';

export function BulkDeleteOrdersScreencastPage() {
  const { bulkDeleteOrders } = useTranslations('appPages');

  return (
    <ScreencastPageLayout
      title={bulkDeleteOrders.title}
      videoSrc="/resources/BDO_Screencast.mp4"
    />
  );
}
