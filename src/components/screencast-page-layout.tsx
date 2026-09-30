import { Layout } from './layout';
import { PageHero } from './page-hero';
import { useTranslations } from '../i18n/use-locale';

interface ScreencastPageLayoutProps {
  /** App name shown as the page heading; app names are not translated. */
  title: string;
  videoSrc: string;
}

/** Shared shell for the per-app screencast demo pages. */
export function ScreencastPageLayout({ title, videoSrc }: ScreencastPageLayoutProps) {
  const { screencast } = useTranslations('common');

  return (
    <Layout showFooterCTA={false}>
      <PageHero title={title} lede={screencast.subtitle} />

      <section className="py-16 md:py-24 px-6 bg-mist">
        <div className="max-w-[1120px] mx-auto">
          <div className="max-w-4xl mx-auto bg-ink rounded-2xl overflow-hidden border border-line">
            <video
              controls
              autoPlay
              loop
              muted
              playsInline
              className="w-full"
            >
              <source src={videoSrc} type="video/mp4" />
              {screencast.videoFallback}
            </video>
          </div>
        </div>
      </section>
    </Layout>
  );
}
