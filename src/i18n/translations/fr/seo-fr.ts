import type { SeoDictionary } from '../dictionary-types';

/**
 * Search and social metadata in French: one title and description per page,
 * written into `<head>` by the prerender step and on client-side navigation.
 * App names, plan names, and prices are not translated.
 */
export const seoFr: SeoDictionary = {
  /** Label for the first breadcrumb, pointing at the home page. */
  breadcrumbHome: 'Accueil',

  pages: {
    home: {
      title: 'Gemify | Apps Shopify : Bulk Delete Orders, Address Lock, llms.txt',
      description:
        'Apps Shopify pour marchands : supprimez commandes et clients en masse, protégez les adresses par défaut, publiez llms.txt pour l’IA. Formules gratuites.',
    },
    faq: {
      title: 'FAQ : apps Shopify Gemify, tarifs et confidentialité | Gemify',
      description:
        'Réponses sur Bulk Delete Orders, Default Address Lock et LLMs-full.txt : fonctionnalités, tarifs, facturation, confidentialité et compatibilité Shopify.',
    },
    services: {
      title: 'Développement et personnalisation d’applications Shopify | Gemify',
      description:
        'Développement d’applications Shopify sur mesure, personnalisation, mises à niveau d’API et correction de bugs, pour Gemify ou toute application Shopify. Devis gratuit.',
    },
    privacyPolicy: {
      title: 'Politique de confidentialité | Gemify',
      description:
        'Comment les apps Shopify de Gemify collectent, utilisent, conservent et protègent les données des marchands et clients : RGPD, CPRA, demandes de données client.',
    },
    bulkDeleteOrders: {
      title: 'Supprimer des commandes Shopify et des clients en masse | Gemify',
      description:
        'Supprimez des commandes Shopify, commandes provisoires et clients en masse : filtres, annulation automatique, suivi, export CSV. Gratuit ou 36 USD/an illimité.',
    },
    defaultAddressLock: {
      title: 'Default Address Lock : protégez les adresses Shopify | Gemify',
      description:
        'Empêchez Shopify d’écraser l’adresse par défaut d’un client qui fait livrer ailleurs : détection intelligente, restauration immédiate, tableau de bord. Gratuit.',
    },
    llmsTxt: {
      title: 'LLMs-full.txt : llms.txt et agents.md pour Shopify | Gemify',
      description:
        'Publiez agents.md, llms.txt et llms-full.txt sur votre domaine Shopify : ChatGPT, Claude et Gemini comprennent vos produits. Mises à jour planifiées. Gratuit.',
    },
    japanMultiship: {
      title: 'Japan Multiship : une commande, plusieurs destinataires | Gemify',
      description:
        'Bientôt sur le Shopify App Store. Une commande pour 20 destinataires maximum au Japon, un seul paiement, frais par destination et export CSV Yamato B2 Cloud.',
    },
    bestStoreLocator: {
      title: 'Best Store Locator : carte des magasins sans clé API | Gemify',
      description:
        'Bientôt sur le Shopify App Store. Carte de recherche de vos magasins, revendeurs ou distributeurs : cartes intégrées, import CSV avec aperçu, magasins ouverts.',
    },
    checkoutProbe: {
      title: 'Checkout Probe : test de paiement WebMCP pour Shopify | Gemify',
      description:
        'Bientôt sur le Shopify App Store. Préparez votre paiement à WebMCP : testez-le comme un agent d’achat IA et obtenez une solution pour chaque problème.',
    },
    notFound: {
      title: 'Page introuvable | Gemify',
      description:
        'La page que vous recherchez n’existe pas. Découvrez plutôt les applications Shopify de Gemify.',
    },
  },

  /** Screencast pages are not indexed; `{app}` is the app name. */
  screencast: {
    title: 'Démonstration vidéo de {app} | Gemify',
    description: 'Regardez une courte démonstration vidéo de {app}, une application Shopify signée Gemify.',
  },
  help: {
    title: 'Aide {app} | Gemify',
    description: 'Comment configurer et utiliser {app}, une application Shopify de Gemify.',
  },
};
