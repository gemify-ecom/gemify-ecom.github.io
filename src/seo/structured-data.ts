import { interpolate } from '../i18n/rich-text';
import { buildLocalePath } from '../i18n/locale-paths';
import type { Locale } from '../i18n/locales';
import type { Dictionary } from '../i18n/translations';
import type { Bullet, FaqEntry } from '../i18n/translations/content-types';
import { GEMIFY_APPS, isListedApp, type AppId, type AppPlan, type ListedAppId } from '../site/gemify-apps';
import {
  APP_STORE_PARTNER_URL,
  LOGO_PATH,
  SITE_URL,
  SUPPORT_EMAIL,
  YOUTUBE_URL,
} from '../site/site-config';
import type { SitePage } from '../site/site-pages';

/**
 * schema.org JSON-LD for each page kind. Search engines use it for rich
 * results and knowledge panels; AI agents use it as a machine-readable
 * summary of who Gemify is, what each app does, and what it costs.
 *
 * Ratings are deliberately left out: they are collected by the Shopify App
 * Store, and Google's guidelines forbid marking up ratings aggregated from
 * another site.
 */

type JsonLd = Record<string, unknown>;

const ORGANIZATION_ID = `${SITE_URL}/#organization`;

export function absoluteUrl(locale: Locale, path: string): string {
  return SITE_URL + buildLocalePath(locale, path);
}

function organization(dictionary: Dictionary): JsonLd {
  return {
    '@type': 'Organization',
    '@id': ORGANIZATION_ID,
    name: dictionary.common.brand,
    url: `${SITE_URL}/`,
    logo: SITE_URL + LOGO_PATH,
    email: SUPPORT_EMAIL,
    description: dictionary.common.footer.brandBlurb,
    sameAs: [YOUTUBE_URL, APP_STORE_PARTNER_URL],
  };
}

function website(locale: Locale, dictionary: Dictionary): JsonLd {
  return {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: absoluteUrl(locale, '/'),
    name: dictionary.common.brand,
    inLanguage: locale,
    publisher: { '@id': ORGANIZATION_ID },
  };
}

function breadcrumbs(locale: Locale, dictionary: Dictionary, name: string, path: string): JsonLd {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: dictionary.seo.breadcrumbHome, item: absoluteUrl(locale, '/') },
      { '@type': 'ListItem', position: 2, name, item: absoluteUrl(locale, path) },
    ],
  };
}

/** UN/CEFACT unit codes used by schema.org for a billing interval. */
const INTERVAL_UNIT_CODES = { month: 'MON', year: 'ANN' } as const;

function offer(plan: AppPlan, appStoreUrl: string): JsonLd {
  return {
    '@type': 'Offer',
    name: plan.name,
    price: plan.price.toFixed(2),
    priceCurrency: 'USD',
    url: appStoreUrl,
    ...(plan.interval && {
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: plan.price.toFixed(2),
        priceCurrency: 'USD',
        unitCode: INTERVAL_UNIT_CODES[plan.interval],
        unitText: plan.interval,
      },
    }),
  };
}

function softwareApplication(locale: Locale, dictionary: Dictionary, appId: ListedAppId): JsonLd {
  const app = GEMIFY_APPS[appId];
  const copy = dictionary.appPages[appId];

  return {
    '@type': 'SoftwareApplication',
    name: copy.title,
    description: dictionary.seo.pages[appId].description,
    url: absoluteUrl(locale, app.path),
    image: SITE_URL + app.icon,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Shopify',
    installUrl: app.appStoreUrl,
    inLanguage: locale,
    featureList: copy.features.map((feature) => feature.title),
    offers: app.plans.map((plan) => offer(plan, app.appStoreUrl)),
    publisher: { '@id': ORGANIZATION_ID },
  };
}

/** Custom development work, listed as one offer per service on the services page. */
function developmentService(locale: Locale, dictionary: Dictionary): JsonLd {
  const copy = dictionary.services;

  return {
    '@type': 'Service',
    name: copy.hero.title,
    description: dictionary.seo.pages.services.description,
    url: absoluteUrl(locale, '/services'),
    serviceType: 'Shopify app development',
    areaServed: 'Worldwide',
    provider: { '@id': ORGANIZATION_ID },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: copy.servicesHeading,
      itemListElement: copy.services.map((service) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: service.title, description: service.description },
      })),
    },
  };
}

/** Flattens an FAQ answer (paragraphs + bullets, with placeholders) into plain text. */
function faqAnswerText(entry: FaqEntry, dictionary: Dictionary): string {
  const values = { email: SUPPORT_EMAIL, privacyPolicy: dictionary.common.footer.privacyPolicy };
  const bulletText = (bullet: Bullet) =>
    typeof bullet === 'string' ? bullet : `${bullet.label} ${bullet.text}`;

  return [
    ...entry.paragraphs.map((paragraph) => interpolate(paragraph, values)),
    ...(entry.bullets ?? []).map((bullet) => `- ${interpolate(bulletText(bullet), values)}`),
  ].join('\n');
}

function faqPage(locale: Locale, dictionary: Dictionary): JsonLd {
  return {
    '@type': 'FAQPage',
    url: absoluteUrl(locale, '/faq'),
    inLanguage: locale,
    mainEntity: dictionary.faq.sections.flatMap((section) =>
      section.items.map((entry) => ({
        '@type': 'Question',
        name: entry.question,
        acceptedAnswer: { '@type': 'Answer', text: faqAnswerText(entry, dictionary) },
      })),
    ),
  };
}

/** The JSON-LD blocks for one page, each ready to serialise into a `<script>`. */
export function buildStructuredData(locale: Locale, dictionary: Dictionary, page: SitePage): JsonLd[] {
  const withContext = (data: JsonLd) => ({ '@context': 'https://schema.org', ...data });

  switch (page.kind) {
    case 'home':
      return [withContext(organization(dictionary)), withContext(website(locale, dictionary))];
    case 'app':
      // Apps not on the App Store yet have no install URL or live prices, so they get breadcrumbs only.
      if (!page.app) {
        return [];
      }
      return [
        ...(isListedApp(page.app) ? [withContext(softwareApplication(locale, dictionary, page.app))] : []),
        withContext(breadcrumbs(locale, dictionary, dictionary.appPages[page.app].title, page.path)),
      ];
    case 'services':
      return [
        withContext(developmentService(locale, dictionary)),
        withContext(breadcrumbs(locale, dictionary, dictionary.common.header.services, page.path)),
      ];
    case 'faq':
      return [
        withContext(faqPage(locale, dictionary)),
        withContext(breadcrumbs(locale, dictionary, dictionary.faq.title, page.path)),
      ];
    case 'privacyPolicy':
      return [withContext(breadcrumbs(locale, dictionary, dictionary.privacyPolicy.title, page.path))];
    case 'screencast':
    case 'help':
      return [];
  }
}

/** Used by screencast and help titles, which name the app they are about. */
export function screencastText(template: string, dictionary: Dictionary, appId: AppId): string {
  return interpolate(template, { app: dictionary.appPages[appId].title });
}
