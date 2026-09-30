import type { Dictionary } from '..';
import { appPagesJa } from './app-pages-ja';
import { commonJa } from './common-ja';
import { faqJa } from './faq-ja';
import { homeJa } from './home-ja';
import { privacyPolicyJa } from './privacy-policy-ja';
import { seoJa } from './seo-ja';
import { servicesJa } from './services-ja';

/** Every Japanese string on the site; loaded as its own chunk on demand. */
export const dictionaryJa: Dictionary = {
  common: commonJa,
  home: homeJa,
  services: servicesJa,
  faq: faqJa,
  privacyPolicy: privacyPolicyJa,
  appPages: appPagesJa,
  seo: seoJa,
};
