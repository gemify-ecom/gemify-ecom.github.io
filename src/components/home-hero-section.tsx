import { useTranslations } from '../i18n/use-locale';
import { LocalizedLink } from '../i18n/localized-link';
import { renderTemplate } from '../i18n/rich-text';
import { APP_STORE_REVIEWS } from '../site/app-store-reviews';
import { GEMIFY_APPS, isListedApp } from '../site/gemify-apps';
import { HOME_APP_LINEUP } from '../site/home-app-lineup';
import { APP_STORE_PARTNER_URL } from '../site/site-config';
import { AppStatusLine } from './home-app-card';

/** Two columns on phones (status sits under the tagline), three from 640px (status on the right). */
const ROW_CLASS =
  'grid grid-cols-[44px_minmax(0,1fr)] sm:grid-cols-[44px_minmax(0,1fr)_auto] items-center gap-x-4 py-3 px-1 border-b border-white/10 text-white no-underline transition-colors hover:bg-white/[0.04]';

/**
 * Ink hero. The headline promises "one job" per app, and the index on the
 * right lists all six apps with the job each one does, so the icons carry
 * names instead of sitting there as decoration.
 */
/** The first review is the one quoted in the hero. */
const HERO_REVIEW = APP_STORE_REVIEWS[0];

export function HomeHeroSection() {
  const { hero, apps, testimonials } = useTranslations('home');

  return (
    <section className="bg-ink text-white">
      {/* 1168px minus the 24px padding on each side = the 1120px content width of every section below */}
      <div className="max-w-[1168px] mx-auto px-6 py-16 md:py-20 grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14 items-center">
        <div className="grid gap-6">
          <p className="label-mono text-[#8FC8FF]">{hero.socialProof}</p>

          <h1 className="font-heading text-[clamp(2.3rem,4.6vw,3.4rem)] leading-[0.98] tracking-[-0.03em]">
            {renderTemplate(hero.headline.text, {
              // Kept on one line so "one job" never splits
              emphasis: <span className="text-spark whitespace-nowrap">{hero.headline.emphasis}</span>,
            })}
          </h1>

          <p className="text-lg text-ink-muted leading-relaxed max-w-[520px]">{hero.subheadline}</p>

          {/* One button; the second action is a text link */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-1">
            <a
              href="#apps"
              className="inline-flex items-center justify-center px-5 py-3 bg-signal text-white font-semibold rounded-xl no-underline hover:bg-signal-bright transition-colors"
            >
              {hero.primaryCta}
            </a>
            <a
              href="#contact"
              className="font-semibold text-white no-underline border-b border-white/35 pb-px hover:border-white transition-colors"
            >
              {hero.secondaryCta}
            </a>
          </div>

          {/* A real merchant in place of a star line: verbatim in English, a labeled translation elsewhere */}
          <figure className="m-0 mt-2 border-l-2 border-spark pl-4 max-w-[480px]">
            <blockquote className="m-0">
              <p className="text-[#DCE3EE] leading-relaxed">
                {testimonials.quoteMarks.open}
                {testimonials.reviews[HERO_REVIEW.id].quote}
                {testimonials.quoteMarks.close}
              </p>
            </blockquote>
            <figcaption className="mt-2 grid gap-1 label-mono text-[#8B96AA]">
              <span>
                {HERO_REVIEW.name}, {HERO_REVIEW.store ?? testimonials.merchantRole}
                {testimonials.translatedNote && <> · {testimonials.translatedNote}</>}
              </span>
              <a
                href={APP_STORE_PARTNER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit text-[#8B96AA] no-underline hover:text-white transition-colors"
              >
                {hero.ratingBadge}
              </a>
            </figcaption>
          </figure>
        </div>

        {/* Index of the six apps: every row opens the app's page */}
        <nav aria-label={apps.heading} className="border-t border-white/10">
          <ul>
            {HOME_APP_LINEUP.map((app) => {
              const copy = apps[app.id];
              const status = (
                <AppStatusLine rating={app.rating} installs={app.installs} isComingSoon={!isListedApp(app.id)} onInk />
              );
              const row = (
                <>
                  <img
                    src={app.icon}
                    alt=""
                    width={44}
                    height={44}
                    className="w-11 h-11 rounded-[22%] bg-white object-cover"
                  />
                  <div className="min-w-0">
                    <span className="block font-semibold leading-snug">{copy.title}</span>
                    <span className="block text-sm text-ink-muted leading-snug">{copy.tagline}</span>
                    <div className="mt-1 sm:hidden">{status}</div>
                  </div>
                  <div className="hidden sm:block">{status}</div>
                </>
              );
              return (
                <li key={app.id}>
                  <LocalizedLink to={GEMIFY_APPS[app.id].path} className={ROW_CLASS}>
                    {row}
                  </LocalizedLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </section>
  );
}
