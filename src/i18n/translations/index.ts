import { appPagesEn } from './en/app-pages-en';
import { commonEn } from './en/common-en';
import { faqEn } from './en/faq-en';
import { homeEn } from './en/home-en';
import { privacyPolicyEn } from './en/privacy-policy-en';
import { seoEn } from './en/seo-en';
import { servicesEn } from './en/services-en';
import type {
  AppPagesDictionary,
  CommonDictionary,
  FaqDictionary,
  HomeDictionary,
  PrivacyPolicyDictionary,
  SeoDictionary,
  ServicesDictionary,
} from './dictionary-types';

/** Every translatable string on the site, grouped by page. */
export interface Dictionary {
  common: CommonDictionary;
  home: HomeDictionary;
  services: ServicesDictionary;
  faq: FaqDictionary;
  privacyPolicy: PrivacyPolicyDictionary;
  appPages: AppPagesDictionary;
  seo: SeoDictionary;
}

/**
 * English ships in the main bundle because it is the default and `x-default`
 * language. The other languages live in `{locale}/dictionary-{locale}.ts` and
 * are loaded on demand by `../dictionary-store.ts`.
 */
export const englishDictionary: Dictionary = {
  common: commonEn,
  home: homeEn,
  services: servicesEn,
  faq: faqEn,
  privacyPolicy: privacyPolicyEn,
  appPages: appPagesEn,
  seo: seoEn,
};
