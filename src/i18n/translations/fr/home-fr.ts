import type { EmphasisedText } from '../content-types';
import type { HomeDictionary } from '../dictionary-types';

/** Home page copy in French. */
export const homeFr: HomeDictionary = {
  hero: {
    socialProof: 'Plus de 500 marchands Shopify nous font confiance',
    headline: {
      text: 'De petites apps qui font {emphasis}, et bien.',
      emphasis: 'une seule chose',
    },
    subheadline:
      'Chaque app règle une seule chose dans votre boutique Shopify, commence gratuitement et est suivie par le développeur qui l’a créée.',
    primaryCta: 'Découvrir nos applications',
    secondaryCta: 'Nous contacter →',
    ratingBadge: 'Noté 5 étoiles sur le Shopify App Store',
  },

  apps: {
    badge: 'Installation gratuite',
    heading: 'Nos applications Shopify',
    subheading: 'Des outils simples et puissants qui résolvent les vrais problèmes des marchands',
    comingSoon: 'Bientôt disponible',
    installs: '{count} installations',
    /** Accessible label for the star rating badge on each app card. */
    ratingLabel: 'Noté {rating} sur 5 sur le Shopify App Store',
    /** App groups: store tools use the blue icon plate, AI tools the black one. */
    groups: {
      storeOperations: {
        heading: 'Gestion de la boutique',
        description: 'Commandes, adresses, livraison et magasins',
      },
      aiShoppers: {
        heading: 'Prêt pour les achats par IA',
        description: 'Pour que les assistants IA lisent votre boutique et aillent jusqu’au paiement',
      },
    },
    bulkDeleteOrders: {
      title: 'Bulk Delete Orders',
      tagline: 'Nettoyez vos commandes de test et vos données inutiles en quelques secondes',
      features: [
        'Supprimez en masse vos commandes, commandes provisoires et clients',
        'Annulation automatique des commandes avant suppression, sans étape manuelle',
        'Suivez chaque traitement et exportez des rapports CSV depuis l’historique des tâches',
      ],
    },
    defaultAddressLock: {
      title: 'Default Address Lock',
      tagline: 'Conservez intactes les adresses par défaut de vos clients après leurs commandes',
      features: [
        'Empêchez Shopify de remplacer les adresses par défaut',
        'Détection intelligente entre modification liée à une commande et modification manuelle',
        'Idéal pour les boutiques de cadeaux et les marchands B2B',
      ],
    },
    llmsTxt: {
      title: 'LLMs-full.txt',
      tagline: 'Rendez votre boutique lisible par ChatGPT, Claude et Gemini',
      features: [
        'Générez agents.md, llms.txt et llms-full.txt en un clic',
        'Choisissez les produits, collections, pages et articles à inclure',
        'Servi nativement par Shopify sur /llms.txt, sans hébergement supplémentaire',
      ],
    },
    japanMultiship: {
      title: 'Japan Multiship',
      tagline: 'Expédiez une commande cadeau à plusieurs destinataires au Japon',
      features: [
        'Les acheteurs répartissent les articles entre plusieurs destinataires dans le panier',
        'Chaque commande payée devient un traitement par adresse de livraison',
        'Exportez le CSV Yamato B2 Cloud et réimportez les numéros de suivi',
      ],
    },
    checkoutProbe: {
      title: 'Checkout Probe',
      tagline: 'Préparez votre checkout aux agents d’achat WebMCP',
      features: [
        'Testez votre checkout comme un agent d’achat IA, en un clic',
        'Voyez ce qui bloque ou peut bloquer un agent, avec une solution pour chaque cas',
        'Aucune commande passée : chaque checkout de test est annulé',
      ],
    },
    bestStoreLocator: {
      title: 'Best Store Locator',
      tagline: 'Affichez vos magasins et revendeurs sur une carte, sans clé API',
      features: [
        'Cartes et vérification d’adresses intégrées, sans clé API Google',
        'Import CSV avec un aperçu complet avant tout enregistrement',
        'Les clients cherchent par ville ou code postal et voient qui est ouvert',
      ],
    },
  },

  testimonials: {
    badge: '5,0 sur le Shopify App Store',
    heading: 'La confiance des marchands',
    subheading: 'Découvrez ce que les commerçants disent de nos applications',
    verified: 'Vérifié',
    merchantRole: 'Marchand Shopify',
    translatedNote: 'Traduit de l’anglais',
    /** Quotation marks around review text in this language. */
    quoteMarks: { open: '« ', close: ' »' },
    reviews: {
      barbellStandard: {
        quote: 'Votre app a fait gagner à mon équipe environ 8 heures de clics dans Shopify et en a fait un projet de 5 minutes.',
        highlight: '8 heures → 5 minutes',
      },
      yubiBar: {
        quote: 'Super app. Je devais supprimer des commandes importées d’Amazon qui faussaient mes statistiques. Le support Shopify m’a dit qu’il était impossible de supprimer les commandes traitées. J’ai alors utilisé cette app et ça a marché comme par magie. Merci à toute l’équipe de GEMIFY.',
        highlight: 'Comme par magie',
      },
      strikeSports: {
        quote: 'Super app et support client encore meilleur ! L’app fonctionne sans accroc et fait exactement ce qu’elle promet. L’équipe support est très réactive, professionnelle et serviable. Je recommande vivement !',
        highlight: 'Un support encore meilleur',
      },
      mooMenn: {
        quote: 'Sean a été exceptionnel et est allé bien au-delà de ce qu’on attendait pour supprimer instantanément toutes les commandes en arrière-plan. Je recommande vivement, un support au top !',
        highlight: 'Bien au-delà des attentes',
      },
      amyDepot: {
        quote: 'Fait exactement ce qui est annoncé, et le fait incroyablement bien pour un prix incroyable. Un sans-faute. Merci à l’équipe de Gemify. C’est exactement ce qu’il me fallait !',
        highlight: 'Un sans-faute',
      },
    },
  },

  /** Core values. Each proof line must stay true of the shipped apps. */
  values: {
    eyebrow: 'Nos valeurs',
    heading: 'Quatre promesses derrière chaque app',
    subheading: 'Nos apps tiennent déjà chacune d’elles aujourd’hui.',
    proofLabel: 'Preuve',
    items: [
      {
        title: 'Une seule tâche, bien faite',
        description: 'Chaque app résout un seul problème de marchand et reste assez simple pour être prise en main en une minute.',
        proof: 'Six apps, six tâches : supprimer des commandes, protéger des adresses, publier llms.txt, répartir des commandes cadeaux, localiser des magasins et tester le paiement par des agents.',
      },
      {
        title: 'La sécurité avant la vitesse',
        description: 'Nos apps vous montrent ce qui va changer et gardent une trace de ce qui a changé.',
        proof: 'L’historique des tâches avec rapports CSV dans Bulk Delete Orders, un aperçu complet avant un import dans Best Store Locator, et Checkout Probe ne passe jamais de commande.',
      },
      {
        title: 'Des mots simples, des prix réels',
        description: 'Nous écrivons comme parlent les marchands. La fiche du Shopify App Store fait foi pour les prix.',
        proof: 'Chaque app commence par un forfait gratuit, et notre politique de confidentialité est rédigée en langage clair.',
      },
      {
        title: 'Des humains répondent',
        description: 'Une vraie personne lit chaque message d’assistance et y répond. Pas de bots.',
        proof: 'Les marchands citent notre support par son nom dans leurs avis sur l’App Store.',
      },
    ],
  },

  about: {
    heading: 'À propos de Gemify',
    intro:
      'Fondée par des développeurs Shopify expérimentés qui connaissent les difficultés rencontrées par les marchands.',
    mission: {
      text: 'Notre mission est simple : proposer des {emphasis}. Pas de fonctionnalités superflues. Pas d’interfaces déroutantes. Uniquement des solutions claires qui font prospérer votre activité.',
      emphasis: 'applications intuitives et fiables',
    } satisfies EmphasisedText,
    closing: {
      text: 'Chaque application est conçue avec le même soin que si nous la destinions à nos propres boutiques. Choisir Gemify, c’est choisir un {emphasis}.',
      emphasis: 'partenaire pleinement engagé dans votre réussite',
    } satisfies EmphasisedText,
  },

  /** Teaser for the services page; the cards reuse the services namespace. */
  services: {
    badge: 'Services',
    heading: 'Besoin de sur-mesure ?',
    subheading:
      'Au-delà de nos propres applications, nous développons, personnalisons, mettons à niveau et corrigeons des applications Shopify, y compris celles que nous n’avons pas créées.',
    cta: 'Voir tous nos services',
  },

  contact: {
    heading: 'Contactez-nous',
    responseTime: 'Nous répondons généralement sous 24 heures',
    successTitle: 'Merci !',
    successBody: 'Votre message a bien été envoyé. Nous vous répondrons très prochainement.',
    successCta: 'Découvrez nos applications en attendant notre réponse →',
    nameLabel: 'Nom',
    namePlaceholder: 'Votre nom',
    emailLabel: 'E-mail',
    emailPlaceholder: 'vous@exemple.com',
    subjectLabel: 'Objet',
    subjectPlaceholder: 'Comment pouvons-nous vous aider ?',
    messageLabel: 'Message',
    messagePlaceholder: 'Décrivez votre question ou votre retour...',
    submit: 'Envoyer le message',
    submitting: 'Envoi en cours...',
    submitted: 'Message envoyé',
    errorAlert: 'Une erreur s’est produite lors de l’envoi de votre message. Veuillez réessayer.',
    /** Shown under the error; `{email}` becomes a mailto link. */
    errorEmailFallback: 'Vous pouvez aussi nous écrire directement à {email}.',
    securityNote: 'Vos informations sont sécurisées et ne seront jamais communiquées à des tiers',
  },
};
