import type { Dictionary } from '..';
import { appPagesEs } from './app-pages-es';
import { commonEs } from './common-es';
import { faqEs } from './faq-es';
import { homeEs } from './home-es';
import { privacyPolicyEs } from './privacy-policy-es';
import { seoEs } from './seo-es';
import { servicesEs } from './services-es';

/** Every Spanish string on the site; loaded as its own chunk on demand. */
export const dictionaryEs: Dictionary = {
  common: commonEs,
  home: homeEs,
  services: servicesEs,
  faq: faqEs,
  privacyPolicy: privacyPolicyEs,
  appPages: appPagesEs,
  seo: seoEs,
};
