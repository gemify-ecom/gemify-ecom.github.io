import type { appPagesEn } from './en/app-pages-en';
import type { commonEn } from './en/common-en';
import type { homeEn } from './en/home-en';
import type { seoEn } from './en/seo-en';
import type { servicesEn } from './en/services-en';

/**
 * The English dictionaries are the source of truth for the shape of every
 * namespace: each translation must provide exactly the same keys. FAQ and
 * privacy policy shapes live in `content-types.ts` because their content is a
 * discriminated union that needs an explicit declaration.
 */
export type CommonDictionary = typeof commonEn;
export type HomeDictionary = typeof homeEn;
export type AppPagesDictionary = typeof appPagesEn;
export type SeoDictionary = typeof seoEn;
export type ServicesDictionary = typeof servicesEn;

export type { FaqDictionary, PrivacyPolicyDictionary } from './content-types';
