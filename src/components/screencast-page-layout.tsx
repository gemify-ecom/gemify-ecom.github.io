import { Layout } from './layout';
import { useTranslations } from '../i18n/use-locale';
import { useNoindexMeta } from '../hooks/use-noindex-meta';

interface ScreencastPageLayoutProps {
  /** App name shown as the page heading; app names are not translated. */
  title: string;
  videoSrc: string;
}

/** Shared shell for the per-app screencast demo pages. */
export function ScreencastPageLayout({ title, videoSrc }: ScreencastPageLayoutProps) {
  const { screencast } = useTranslations('common');
  useNoindexMeta();

  return (
    <Layout showFooterCTA={false}>
      <section className="py-16 px-6 bg-[#F6F6F7] min-h-[80vh]">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-[#202223] mb-2 text-center">
            {title}
          </h1>
          <p className="text-[#616569] text-center mb-8">{screencast.subtitle}</p>

          <div className="bg-black rounded-2xl overflow-hidden shadow-xl">
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
