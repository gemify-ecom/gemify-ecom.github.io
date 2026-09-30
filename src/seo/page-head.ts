import { stripLocalePrefix } from '../i18n/locale-paths';
import { getDictionary } from '../i18n/dictionary-store';
import { DEFAULT_LOCALE, OG_LOCALES, SUPPORTED_LOCALES, type Locale } from '../i18n/locales';
import { GEMIFY_APPS } from '../site/gemify-apps';
import { LLMS_TXT_PATH, LOGO_PATH, SITE_URL } from '../site/site-config';
import { findSitePage, type SitePage } from '../site/site-pages';
import { absoluteUrl, buildStructuredData, screencastText } from './structured-data';

/**
 * Everything that belongs in `<head>` for one page in one language: title,
 * description, robots, canonical, hreflang, Open Graph, Twitter, and JSON-LD.
 *
 * One pure function serves both render paths: the prerender step serialises
 * the result into each static HTML file, and the client re-applies it after
 * every in-app navigation. Keeping a single builder is what guarantees the
 * crawler-visible HTML and the live page never disagree.
 */

export interface HeadTag {
  tag: 'meta' | 'link' | 'script';
  attributes: Record<string, string>;
  /** Text content; only used for JSON-LD scripts. */
  content?: string;
}

export interface PageHead {
  lang: Locale;
  title: string;
  tags: HeadTag[];
}

const meta = (attributes: Record<string, string>): HeadTag => ({ tag: 'meta', attributes });
const link = (attributes: Record<string, string>): HeadTag => ({ tag: 'link', attributes });

function pageText(locale: Locale, page: SitePage | undefined) {
  const dictionary = getDictionary(locale);
  const { pages, screencast, help } = dictionary.seo;

  if (!page) {
    return pages.notFound;
  }
  switch (page.kind) {
    case 'app':
      return pages[page.app!];
    case 'screencast':
      return {
        title: screencastText(screencast.title, dictionary, page.app!),
        description: screencastText(screencast.description, dictionary, page.app!),
      };
    case 'help':
      return {
        title: screencastText(help.title, dictionary, page.app!),
        description: screencastText(help.description, dictionary, page.app!),
      };
    default:
      return pages[page.kind];
  }
}

/** Builds the `<head>` contents for `pathname` (which may carry a locale prefix). */
export function buildPageHead(locale: Locale, pathname: string): PageHead {
  const path = stripLocalePrefix(pathname);
  const page = findSitePage(path);
  const dictionary = getDictionary(locale);
  const { title, description } = pageText(locale, page);
  const indexable = page?.indexable ?? false;

  const image = SITE_URL + (page?.app ? GEMIFY_APPS[page.app].icon : LOGO_PATH);
  const tags: HeadTag[] = [meta({ name: 'description', content: description })];

  if (!indexable) {
    tags.push(meta({ name: 'robots', content: 'noindex' }));
  }

  if (page) {
    const url = absoluteUrl(locale, page.path);
    tags.push(link({ rel: 'canonical', href: url }));

    // hreflang only makes sense between pages that can be indexed.
    if (indexable) {
      for (const alternate of SUPPORTED_LOCALES) {
        tags.push(link({ rel: 'alternate', hreflang: alternate, href: absoluteUrl(alternate, page.path) }));
      }
      tags.push(link({ rel: 'alternate', hreflang: 'x-default', href: absoluteUrl(DEFAULT_LOCALE, page.path) }));
    }

    tags.push(meta({ property: 'og:url', content: url }));
  }

  tags.push(
    meta({ property: 'og:type', content: page?.kind === 'app' ? 'product' : 'website' }),
    meta({ property: 'og:site_name', content: dictionary.common.brand }),
    meta({ property: 'og:title', content: title }),
    meta({ property: 'og:description', content: description }),
    meta({ property: 'og:image', content: image }),
    meta({ property: 'og:locale', content: OG_LOCALES[locale] }),
    ...SUPPORTED_LOCALES.filter((other) => other !== locale).map((other) =>
      meta({ property: 'og:locale:alternate', content: OG_LOCALES[other] }),
    ),
    meta({ name: 'twitter:card', content: 'summary' }),
    meta({ name: 'twitter:title', content: title }),
    meta({ name: 'twitter:description', content: description }),
    meta({ name: 'twitter:image', content: image }),
    // Points agents at the plain-markdown summary of the whole site.
    link({ rel: 'alternate', type: 'text/markdown', href: SITE_URL + LLMS_TXT_PATH, title: 'llms.txt' }),
  );

  if (page) {
    for (const data of buildStructuredData(locale, dictionary, page)) {
      tags.push({
        tag: 'script',
        attributes: { type: 'application/ld+json' },
        content: JSON.stringify(data),
      });
    }
  }

  return { lang: locale, title, tags };
}
