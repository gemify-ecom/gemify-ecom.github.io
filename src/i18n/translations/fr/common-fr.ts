import type { CommonDictionary } from '../dictionary-types';

/** Site chrome (header, footer, shared buttons) in French. */
export const commonFr: CommonDictionary = {
  brand: 'Gemify',
  skipToContent: 'Aller au contenu principal',

  header: {
    logoAlt: 'Logo Gemify',
    navLabel: 'Navigation principale',
    apps: 'Applications',
    services: 'Services',
    about: 'À propos',
    faq: 'FAQ',
    contact: 'Contact',
    exploreApps: 'Découvrir les applications',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
  },

  footer: {
    ctaHeading: 'Prêt à simplifier la gestion de votre boutique Shopify ?',
    ctaBody:
      'Rejoignez les centaines de marchands qui utilisent nos applications pour gagner du temps et développer leurs ventes.',
    ctaButton: 'Découvrir nos applications',
    brandBlurb:
      'Nous concevons des applications Shopify puissantes qui aident les marchands à gagner du temps et à développer leur activité.',
    navigationHeading: 'Navigation',
    navigationLabel: 'Navigation du pied de page',
    ourApps: 'Nos applications',
    services: 'Services',
    aboutUs: 'À propos',
    contact: 'Contact',
    resourcesHeading: 'Ressources',
    resourcesLabel: 'Ressources',
    faq: 'FAQ',
    privacyPolicy: 'Politique de confidentialité',
    contactHeading: 'Contact',
    /** `{year}` is replaced with the current year. */
    copyright: '© {year} Gemify. Tous droits réservés.',
  },

  languageSwitcher: {
    heading: 'Langue',
    label: 'Choisir la langue',
  },

  actions: {
    installFree: 'Installer gratuitement',
    installFreeOnShopify: 'Installer gratuitement sur Shopify',
    contactUs: 'Nous contacter',
    readFaq: 'Consulter la FAQ',
    learnMore: 'En savoir plus',
  },

  screencast: {
    subtitle: 'Démonstration vidéo',
    videoFallback: 'Votre navigateur ne prend pas en charge la lecture de vidéos.',
  },

  notFound: {
    heading: 'Page introuvable',
    body: 'La page que vous recherchez n’existe pas ou a été déplacée.',
    homeCta: 'Retour à l’accueil',
    faqCta: 'Consulter la FAQ',
  },
};
