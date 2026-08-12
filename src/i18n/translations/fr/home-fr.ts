import type { EmphasisedText } from '../content-types';
import type { HomeDictionary } from '../dictionary-types';

/** Home page copy in French. */
export const homeFr: HomeDictionary = {
  skipToContent: 'Aller au contenu principal',

  hero: {
    socialProof: 'Plus de 500 marchands Shopify nous font confiance',
    headline: 'Des applications qui aident vraiment votre boutique Shopify',
    subheadline:
      'Des outils simples et puissants conçus par des développeurs qui comprennent les besoins des marchands. Pas de superflu, uniquement des résultats.',
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
    bulkDeleteOrders: {
      title: 'Bulk Delete Orders',
      tagline: 'Nettoyez vos commandes de test et vos données inutiles en quelques secondes',
      features: [
        'Filtrez et ciblez précisément les commandes à supprimer en masse',
        'Annulation automatique des commandes avant suppression, sans étape manuelle',
        'Suivez vos traitements et exportez vos rapports depuis l’historique des tâches',
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
        'Générez llms.txt et llms-full.txt en un clic',
        'Choisissez les produits, collections, pages et articles à inclure',
        'Servi nativement par Shopify sur /llms.txt, sans hébergement supplémentaire',
      ],
    },
  },

  testimonials: {
    badge: '5,0 sur le Shopify App Store',
    heading: 'La confiance des marchands',
    subheading: 'Découvrez ce que les commerçants disent de nos applications',
    verified: 'Vérifié',
    merchantRole: 'Marchand Shopify',
  },

  whyChoose: {
    heading: 'Pourquoi les marchands choisissent Gemify',
    subheading: 'Des outils pensés pour votre réussite',
    benefits: [
      {
        title: 'Expertise Shopify',
        description:
          'Développées par des experts Shopify certifiés qui connaissent vos défis quotidiens.',
      },
      {
        title: 'Sécurité de niveau entreprise',
        description:
          'Une sécurité de niveau bancaire qui protège les données de votre boutique 24h/24 et 7j/7.',
      },
      {
        title: 'Support réactif',
        description:
          'Une équipe humaine prête à vous aider. Pas de robots, juste une véritable assistance.',
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
    securityNote: 'Vos informations sont sécurisées et ne seront jamais communiquées à des tiers',
  },
};
