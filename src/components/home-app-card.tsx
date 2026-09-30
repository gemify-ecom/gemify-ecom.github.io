import { Star } from 'lucide-react';
import { useTranslations } from '../i18n/use-locale';
import { LocalizedLink } from '../i18n/localized-link';
import { interpolate } from '../i18n/rich-text';

export interface AppCardProps {
  icon: string;
  title: string;
  tagline: string;
  features: string[];
  /** App Store listing. Omitted while the app is not on the App Store yet. */
  installHref?: string;
  detailsLink?: string;
  rating?: number;
  installs?: string;
  isComingSoon?: boolean;
}

interface AppStatusLineProps {
  rating?: number;
  installs?: string;
  isComingSoon?: boolean;
  /** Colors for the ink hero. */
  onInk?: boolean;
}

/** Mono status line: "Coming soon", or the App Store rating and install count. Renders nothing when there is neither. */
export function AppStatusLine({ rating, installs, isComingSoon = false, onInk = false }: AppStatusLineProps) {
  const { apps } = useTranslations('home');

  if (isComingSoon) {
    return <p className={`label-mono ${onInk ? 'text-[#E9B872]' : 'text-soon'}`}>{apps.comingSoon}</p>;
  }
  if (!rating && !installs) {
    return null;
  }
  return (
    <p className={`label-mono ${onInk ? 'text-[#8FC8FF]' : 'text-chip-fg'}`}>
      {rating && (
        <span role="img" aria-label={interpolate(apps.ratingLabel, { rating: rating.toFixed(1) })}>
          <Star aria-hidden="true" className="inline w-3 h-3 -mt-0.5 mr-1 text-amber-500 fill-current" />
          {rating.toFixed(1)}
        </span>
      )}
      {rating && installs && <span aria-hidden="true"> · </span>}
      {installs && interpolate(apps.installs, { count: installs })}
    </p>
  );
}

/** One app on the home page: icon, mono status line, what it does, and install link. */
export function AppCard({
  icon,
  title,
  tagline,
  features,
  installHref,
  detailsLink,
  rating,
  installs,
  isComingSoon = false,
}: AppCardProps) {
  const { actions } = useTranslations('common');
  const { apps } = useTranslations('home');

  return (
    <article className="flex h-full flex-col gap-4 rounded-2xl border border-line bg-white p-5 transition-colors hover:border-signal-bright/40">
      <div className="flex items-center gap-3">
        <img
          src={icon}
          alt=""
          width={48}
          height={48}
          loading="lazy"
          className="w-12 h-12 shrink-0 rounded-xl bg-white object-cover ring-1 ring-black/5"
        />
        <div className="grid gap-1 min-w-0">
          <h4 className="font-bold text-fg leading-snug">{title}</h4>
          {/* Coming-soon apps say so on their disabled button instead */}
          <AppStatusLine rating={rating} installs={installs} />
        </div>
      </div>

      <p className="text-sm text-muted">{tagline}</p>

      <ul className="grid gap-1.5 pl-4 list-disc marker:text-[#AAB4C4] text-sm text-[#39414F] leading-relaxed">
        {features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>

      {/* Pinned to the bottom so the buttons line up across a row */}
      <div className="mt-auto pt-2 flex items-center gap-4 flex-wrap">
        {isComingSoon ? (
          // Same row as a live card: the install button stays disabled until the App Store listing is approved
          <button
            type="button"
            disabled
            className="inline-flex items-center bg-[#EEF1F5] text-muted px-4 py-2 rounded-xl text-sm font-semibold cursor-not-allowed"
          >
            {apps.comingSoon}
          </button>
        ) : (
          installHref && (
            <a
              href={installHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-signal text-white px-4 py-2 rounded-xl text-sm font-semibold no-underline hover:bg-signal-deep transition-colors"
            >
              {actions.installFree}
            </a>
          )
        )}
        {detailsLink && (
          <LocalizedLink
            to={detailsLink}
            className="text-sm font-semibold text-signal-deep no-underline hover:underline"
          >
            {actions.learnMore}
            {/* Names the app for screen readers, crawlers, and agents */}
            <span className="sr-only">: {title}</span>
          </LocalizedLink>
        )}
      </div>
    </article>
  );
}
