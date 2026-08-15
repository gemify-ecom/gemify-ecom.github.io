import type { FeatureCardContent, ProblemCard } from '../content-types';
import type { AppPagesDictionary } from '../dictionary-types';

/** App detail and screencast page copy in French. */
export const appPagesFr: AppPagesDictionary = {
  bulkDeleteOrders: {
    title: 'Bulk Delete Orders',
    tagline:
      'Faites le ménage dans votre boutique Shopify en supprimant en masse vos commandes de test, vos anciennes données ou vos commandes inutiles, grâce à des filtres puissants et à une annulation automatique.',
    problemHeading: 'Le problème',
    problemIntro:
      'Shopify ne propose aucun moyen natif de supprimer des commandes en masse. Supprimer manuellement des centaines ou des milliers de commandes une par une prend un temps considérable et laisse place aux erreurs.',
    problems: [
      {
        title: 'Des commandes de test qui polluent vos données',
        description:
          'Le développement et les tests laissent derrière eux des commandes fictives qui faussent vos analyses et compliquent la lecture de vos performances réelles.',
      },
      {
        title: 'Nettoyage après migration',
        description:
          'Après une migration depuis une autre plateforme, vous pouvez vous retrouver avec des commandes importées dont vous n’avez plus besoin et que vous souhaitez supprimer.',
      },
      {
        title: 'Commandes en double',
        description:
          'Des dysfonctionnements techniques ou des problèmes d’intégration peuvent créer des commandes en double qu’il faut supprimer efficacement.',
      },
      {
        title: 'Conformité RGPD et vie privée',
        description:
          'Les réglementations sur la vie privée peuvent vous obliger à supprimer les anciennes données clients, y compris les commandes, au bout d’une certaine durée.',
      },
    ] satisfies ProblemCard[],
    howItWorksHeading: 'Comment ça marche',
    howItWorksIntro:
      'Notre application rend la suppression en masse simple, sûre et traçable. Filtrez précisément vos commandes, puis supprimez-les en un seul clic.',
    features: [
      {
        title: 'Filtres puissants',
        description:
          'Filtrez les commandes par période, statut, tags, client, statut financier et bien plus. Ciblez exactement les commandes à supprimer.',
      },
      {
        title: 'Annulation et suppression automatiques',
        description:
          'Les commandes sont automatiquement annulées avant leur suppression, sans aucune étape manuelle. Les commandes traitées sont gérées proprement.',
      },
      {
        title: 'Historique des tâches',
        description:
          'Suivez toutes les suppressions avec des journaux détaillés. Exportez des rapports pour vos besoins de conformité et vos audits.',
      },
      {
        title: 'Export de rapports',
        description:
          'Générez des rapports détaillés des commandes supprimées pour vos archives. Idéal pour la documentation de conformité et les pistes d’audit.',
      },
      {
        title: 'Aperçu sûr avant suppression',
        description:
          'Prévisualisez les commandes avant de les supprimer. Vérifiez exactement ce qui sera supprimé, puis confirmez.',
      },
    ] satisfies FeatureCardContent[],
    ctaHeading: 'Prêt à faire le ménage dans votre boutique ?',
    ctaBody:
      'Installez Bulk Delete Orders dès aujourd’hui et économisez des heures de travail manuel. Une formule gratuite est disponible pour démarrer.',
  },

  defaultAddressLock: {
    title: 'Default Address Lock',
    tagline:
      'Empêchez Shopify de remplacer les adresses par défaut de vos clients lorsqu’ils font livrer leurs commandes à une autre adresse.',
    problemHeading: 'Le problème',
    problemIntro:
      'Depuis 2015, Shopify modifie automatiquement l’adresse par défaut des clients dès qu’ils passent une commande avec une adresse de livraison différente. Ce comportement complique sérieusement la vie des marchands.',
    problems: [
      {
        title: 'Boutiques de cadeaux',
        description:
          'Les clients qui envoient des cadeaux à leurs proches voient leur adresse par défaut remplacée en permanence par celle des destinataires.',
      },
      {
        title: 'Marchands B2B',
        description:
          'Les acheteurs professionnels qui expédient à leurs propres clients se retrouvent avec des adresses par défaut erronées, ce qui perturbe leurs commandes suivantes.',
      },
      {
        title: 'Boutiques intégrées à un CRM',
        description:
          'Les boutiques qui s’appuient sur des données clients fiables pour leur marketing ou leur logistique rencontrent des problèmes d’intégrité des données.',
      },
      {
        title: 'Activités par abonnement',
        description:
          'Un envoi cadeau ponctuel peut écraser l’adresse de livraison de l’abonnement, si bien que les envois récurrents partent au mauvais endroit.',
      },
    ] satisfies ProblemCard[],
    howItWorksHeading: 'Comment ça marche',
    howItWorksIntro:
      'Notre application surveille intelligemment les modifications d’adresse et restaure automatiquement l’adresse par défaut d’origine lorsque Shopify tente de la remplacer.',
    features: [
      {
        title: 'Détection intelligente',
        description:
          'Distingue les modifications déclenchées par une commande des mises à jour manuelles volontaires. Les modifications manuelles sont conservées.',
      },
      {
        title: 'Restauration automatique',
        description:
          'Lorsque Shopify remplace une adresse par défaut après une commande, nous restaurons automatiquement l’adresse d’origine.',
      },
      {
        title: 'Confidentialité avant tout',
        description:
          'Nous stockons uniquement les identifiants d’adresse, jamais le contenu réel des adresses. Les données de vos clients restent en sécurité dans Shopify.',
      },
    ] satisfies FeatureCardContent[],
    diagram: {
      heading: 'Default Address Lock',
      withoutApp: 'Sans notre application',
      withApp: 'Avec notre application',
      stepLabel: 'Étape {number}',
      step1: 'L’adresse par défaut est {a} (votre domicile)',
      step2: 'Vous envoyez un cadeau à {b} (adresse d’un ami)',
      step3Without: 'Shopify remplace l’adresse par défaut par {b}',
      step3With: 'L’application détecte le changement et rétablit {a}',
      resultWithoutTitle: 'L’adresse par défaut est désormais erronée !',
      resultWithoutBody: 'Les prochaines commandes risquent d’être livrées au mauvais endroit',
      resultWithTitle: 'L’adresse par défaut reste correcte !',
      resultWithBody: 'Votre adresse personnelle reste protégée',
      summaryHeading: 'Ce que nous faisons',
      summaryNegative: 'Nous ne modifions pas les adresses de commande',
      summaryPositive: 'Nous protégeons votre adresse par défaut',
    },
    ctaHeading: 'Prêt à protéger les adresses de vos clients ?',
    ctaBody:
      'Installez Default Address Lock dès aujourd’hui et empêchez Shopify de remplacer les adresses par défaut de vos clients. Une formule gratuite est disponible pour les petites boutiques.',
  },

  llmsTxt: {
    title: 'LLMs-full.txt',
    tagline:
      'Préparez votre boutique Shopify pour l’IA. Générez {agentsMd}, {llmsTxt} et {llmsFullTxt} pour que les assistants IA comprennent vos produits, vos collections et vos pages.',
    problemHeading: 'Pourquoi votre boutique a besoin de llms.txt',
    problemIntro:
      'Le {standardLink} aide les modèles d’IA à comprendre votre site. Tout comme {robotsTxt} guide les moteurs de recherche, {llmsTxt} guide les assistants IA et les aide à recommander vos produits et à répondre correctement aux questions de vos clients.',
    standardLinkLabel: 'standard llms.txt',
    problems: [
      {
        title: 'Les acheteurs interrogent d’abord l’IA',
        description:
          'Les clients se renseignent de plus en plus sur les produits via ChatGPT, Claude et Gemini. Sans résumé clair de votre catalogue, ces assistants se contentent de ce qu’ils parviennent à extraire.',
      },
      {
        title: 'Le HTML des vitrines est trop bruité',
        description:
          'Le balisage du thème, les scripts et la navigation noient les informations qui comptent. Les modèles lisent le markdown bien plus fidèlement qu’une page de vitrine rendue.',
      },
      {
        title: 'La rédaction manuelle ne tient pas la charge',
        description:
          'Maintenir un fichier écrit à la main pour des centaines de produits, de collections et d’articles de blog est fastidieux et devient obsolète dès que votre catalogue évolue.',
      },
      {
        title: 'L’hébergement complique tout',
        description:
          'Le standard attend le fichier à la racine de votre domaine. Le servir depuis un hébergeur externe ou un chemin de proxy applicatif impose une infrastructure et des redirections supplémentaires.',
      },
    ] satisfies ProblemCard[],
    featuresHeading: 'Ce que vous obtenez',
    featuresIntro:
      'Choisissez votre contenu, générez vos fichiers et laissez Shopify les servir depuis votre propre domaine. Aucun hébergement supplémentaire, aucune édition manuelle.',
    features: [
      {
        title: 'Génération en un clic',
        description:
          'Générez agents.md, llms.txt et llms-full.txt depuis votre tableau de bord. Choisissez précisément les produits, collections, pages et articles à inclure.',
      },
      {
        title: 'Sortie personnalisable',
        description:
          'Réorganisez les sections et personnalisez la mise en forme de vos fichiers générés, pour que le résultat corresponde à la façon dont vous voulez présenter votre boutique.',
      },
      {
        title: 'Servi nativement',
        description:
          'Les fichiers sont publiés dans votre thème et servis par Shopify sur /agents.md, /llms.txt et /llms-full.txt, sans hébergement supplémentaire.',
      },
      {
        title: 'Vous choisissez le contenu',
        description:
          'Incluez vos produits, collections, pages, articles de blog et politiques. Laissez de côté tout ce que vous ne souhaitez pas voir résumé par les assistants IA.',
      },
      {
        title: 'Markdown propre',
        description:
          'Les données de la boutique sont récupérées via l’API GraphQL de Shopify et converties en markdown propre, que les modèles analysent sans avoir à deviner.',
      },
    ] satisfies FeatureCardContent[],
    howItWorksHeading: 'Comment ça marche',
    howItWorksIntro: 'Trois étapes entre l’installation et une vitrine lisible par les IA.',
    steps: [
      {
        title: 'Installez et configurez',
        description:
          'Sélectionnez le contenu à inclure : produits, collections, pages, articles de blog et politiques.',
      },
      {
        title: 'Générez les fichiers',
        description:
          'Lancez la génération. L’application récupère les données de votre boutique via GraphQL et les convertit en markdown propre.',
      },
      {
        title: 'Prêt pour l’IA',
        description:
          'Votre fichier llms.txt est désormais accessible publiquement. Les assistants IA comme ChatGPT, Claude et Gemini peuvent lire et comprendre votre boutique.',
      },
    ] satisfies FeatureCardContent[],
    ctaHeading: 'Prêt à passer à l’ère de l’IA ?',
    ctaBody:
      'Installez LLMs-full.txt dès aujourd’hui et donnez aux assistants IA une image fidèle de votre boutique. Installation gratuite.',
  },
};
