import type { ReactNode } from 'react';
import { useTranslations } from '../i18n/use-locale';
import { GEMIFY_APPS, isListedApp, type GemifyApp } from '../site/gemify-apps';
import { HOME_APP_LINEUP, type HomeAppEntry } from '../site/home-app-lineup';
import { AppCard } from './home-app-card';
import { SectionHeading } from './section-heading';

/** One column on phones, two on tablets, four from 1280px. */
const APP_GRID = 'grid gap-4 md:grid-cols-2 xl:grid-cols-4';

interface AppGroupProps {
  heading: string;
  description: string;
  children: ReactNode;
}

/** A labelled row of app cards. Groups follow the icon plates: blue for store tools, black for AI tools. */
function AppGroup({ heading, description, children }: AppGroupProps) {
  return (
    <div className="grid gap-4">
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h3 className="font-heading text-[1.4rem] text-fg">{heading}</h3>
        <p className="text-sm text-muted">{description}</p>
      </div>
      <div className={APP_GRID}>{children}</div>
    </div>
  );
}

export function HomeAppsSection() {
  const { apps } = useTranslations('home');

  /** Cards for one icon plate family, in lineup order. */
  const cardsFor = (group: HomeAppEntry['group']) =>
    HOME_APP_LINEUP.filter((app) => app.group === group).map((app) => {
      const copy = apps[app.id];
      const facts: GemifyApp = GEMIFY_APPS[app.id];
      const isComingSoon = !isListedApp(app.id);
      return (
        <AppCard
          key={app.id}
          icon={app.icon}
          title={copy.title}
          tagline={copy.tagline}
          features={copy.features}
          // Apps not on the App Store yet keep a disabled install button until each listing is approved
          installHref={isComingSoon ? undefined : facts.appStoreUrl}
          detailsLink={facts.path}
          rating={app.rating}
          installs={app.installs}
          isComingSoon={isComingSoon}
        />
      );
    });

  return (
    <section id="apps" className="py-16 md:py-24 px-6 bg-white">
      <div className="max-w-[1120px] mx-auto grid gap-12">
        <SectionHeading label={apps.badge} heading={apps.heading} lede={apps.subheading} />

        <AppGroup heading={apps.groups.storeOperations.heading} description={apps.groups.storeOperations.description}>
          {cardsFor('storeOperations')}
        </AppGroup>

        <AppGroup heading={apps.groups.aiShoppers.heading} description={apps.groups.aiShoppers.description}>
          {cardsFor('aiShoppers')}
        </AppGroup>
      </div>
    </section>
  );
}
