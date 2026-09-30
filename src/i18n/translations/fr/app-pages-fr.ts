import type { FeatureCardContent, ProblemCard } from '../content-types';
import type { AppPagesDictionary } from '../dictionary-types';

/** App detail and screencast page copy in French. */
export const appPagesFr: AppPagesDictionary = {
  bulkDeleteOrders: {
    title: 'Bulk Delete Orders',
    tagline:
      'Faites le ménage dans votre boutique Shopify en supprimant en masse vos commandes de test, vos commandes provisoires et vos clients, grâce à des filtres puissants et à une annulation automatique.',
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
          'Filtrez les commandes par période, statut, tags, client, statut de paiement et bien plus. Ciblez exactement les commandes à supprimer.',
      },
      {
        title: 'Annulation et suppression automatiques',
        description:
          'Les commandes sont automatiquement annulées avant leur suppression, sans aucune étape manuelle. Les commandes traitées peuvent aussi être supprimées.',
      },
      {
        title: 'Historique des tâches',
        description:
          'Suivez chaque tâche de suppression en temps réel, avec son statut, sa progression et les éventuels échecs.',
      },
      {
        title: 'Export de rapports',
        description:
          'Exportez votre historique des tâches au format CSV pour vos archives. Utile pour la documentation de conformité et les pistes d’audit.',
      },
      {
        title: 'Confirmation avant suppression',
        description:
          'Une étape de confirmation liste chaque commande qui sera supprimée et vous avertit que la suppression est définitive, pour que vous puissiez vérifier avant de continuer.',
      },
      {
        title: 'Nettoyage des clients',
        description:
          'Faites le ménage dans votre fichier clients de deux façons : anonymisez vos clients en masse pour masquer leurs données personnelles, ou supprimez-les définitivement avec leurs commandes.',
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
          'Distingue les modifications déclenchées par une commande des mises à jour manuelles volontaires. Les modifications manuelles faites par vos clients ou votre équipe sont conservées.',
      },
      {
        title: 'Restauration automatique',
        description:
          'Lorsqu’une commande remplace une adresse par défaut, l’application restaure l’adresse d’origine en temps réel, au moment où la commande est passée.',
      },
      {
        title: 'Tableau de bord d’activité',
        description:
          'Consultez tous les événements de protection dans un seul tableau de bord, avec l’historique complet des adresses restaurées par l’application.',
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
          'Les assistants IA cherchent le fichier sur votre propre domaine. L’héberger ailleurs impose une configuration et des redirections supplémentaires.',
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
        title: 'Éditeur de modèles',
        description:
          'Modifiez les titres et la mise en forme des éléments dans un éditeur de modèles avec aperçu en direct, pour que le résultat corresponde à la façon dont vous voulez présenter votre boutique.',
      },
      {
        title: 'Servi nativement',
        description:
          'Les fichiers sont publiés dans votre thème et servis par Shopify sur /agents.md, /llms.txt et /llms-full.txt, sans hébergement supplémentaire.',
      },
      {
        title: 'Vous choisissez le contenu',
        description:
          'Incluez vos produits, collections, pages, articles de blog et politiques, par type de contenu complet ou élément par élément. Laissez de côté tout ce que vous ne souhaitez pas voir résumé par les assistants IA.',
      },
      {
        title: 'Régénération planifiée',
        description:
          'Régénérez automatiquement vos fichiers toutes les heures, tous les jours ou toutes les semaines, dans votre propre fuseau horaire, avec un historique de chaque exécution.',
      },
      {
        title: 'Markdown propre',
        description:
          'Le contenu de votre boutique est converti en markdown propre, que les assistants IA lisent sans avoir à deviner.',
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
          'Lancez la génération. L’application lit le contenu de votre boutique et le convertit en markdown propre.',
      },
      {
        title: 'Prêt pour l’IA',
        description:
          'Vos fichiers sont en ligne sur votre propre domaine, où les assistants IA comme ChatGPT, Claude et Gemini peuvent les lire. Activez la régénération planifiée pour les garder à jour.',
      },
    ] satisfies FeatureCardContent[],
    ctaHeading: 'Prêt à passer à l’ère de l’IA ?',
    ctaBody:
      'Installez LLMs-full.txt dès aujourd’hui et donnez aux assistants IA une image fidèle de votre boutique. Installation gratuite.',
  },

  // Pas encore sur l’App Store : chaque application a une page de détail (sans
  // lien d’installation ni prix tant que la fiche n’est pas en ligne), une page
  // de démonstration et, pour Best Store Locator et Checkout Probe, une page
  // d’aide. Les faits viennent du brouillon de fiche App Store de chaque
  // application ; n’affirmer que ce que l’application fait déjà.
  japanMultiship: {
    title: 'Japan Multiship',
    tagline:
      'Permettez à vos acheteurs d’envoyer une même commande à 20 destinataires maximum partout au Japon depuis la page du panier, de payer une seule fois et de voir les frais d’expédition calculés pour chaque destination.',
    problemHeading: 'Le problème',
    problemIntro:
      'Le paiement Shopify expédie une commande à une seule adresse. Au Japon, les acheteurs de cadeaux envoient souvent la même commande à leur famille, à leurs amis et à leurs clients : ils passent donc par le paiement une fois par destinataire, ou vous envoient par e-mail une liste à traiter à la main.',
    problems: [
      {
        title: 'Un paiement par destinataire',
        description:
          'Les acheteurs recommencent le paiement pour chaque adresse. C’est long, et beaucoup abandonnent avant le dernier cadeau.',
      },
      {
        title: 'Des frais d’expédition calculés à la main',
        description:
          'Sans tarif pour chaque destination, vous estimez les frais d’expédition au jugé ou corrigez le total après le paiement.',
      },
      {
        title: 'Des listes d’adresses par e-mail',
        description:
          'Les destinataires envoyés dans une note ou un tableur doivent être copiés un par un dans les commandes et les fichiers du transporteur.',
      },
      {
        title: 'Un suivi pour chaque colis',
        description:
          'Chaque colis reçoit son propre numéro de suivi, et les saisir à nouveau dans Shopify prend du temps.',
      },
    ] satisfies ProblemCard[],
    howItWorksHeading: 'Comment ça marche',
    howItWorksIntro:
      'Les acheteurs répartissent leur panier sur la page du panier et paient une seule fois. Chaque destination devient ensuite son propre traitement, prêt pour votre transporteur.',
    features: [
      {
        title: 'Jusqu’à 20 destinataires',
        description:
          'Sur la page du panier, les acheteurs attribuent les articles du panier à 20 destinataires maximum et paient une seule fois.',
      },
      {
        title: 'Saisie automatique par code postal',
        description:
          'Un code postal japonais remplit automatiquement la préfecture et la ville, avec des champs en kana pour les noms.',
      },
      {
        title: 'Frais d’expédition par destination',
        description:
          'Les frais d’expédition sont calculés pour chaque destination à partir de vos zones d’expédition et affichés avant le paiement.',
      },
      {
        title: 'Un traitement par destination',
        description:
          'Après le paiement, chaque destination devient sa propre commande de traitement, et la page de la commande liste tous les destinataires.',
      },
      {
        title: 'CSV Yamato B2 Cloud',
        description:
          'Exportez un CSV Yamato B2 Cloud pour les commandes à plusieurs destinations comme pour les commandes à adresse unique.',
      },
      {
        title: 'Import des numéros de suivi',
        description:
          'Importez le CSV du transporteur pour ajouter les numéros de suivi et traiter chaque destination.',
      },
    ] satisfies FeatureCardContent[],
    goodToKnowHeading: 'Bon à savoir',
    goodToKnow: [
      'Conçu pour les boutiques au Japon : la devise de la boutique doit être le JPY.',
      'Nécessite le canal de vente Boutique en ligne et une page de panier. Sur Shopify Plus, un bloc de paiement permet aussi aux acheteurs d’ajouter des destinations lors du paiement.',
      'Une réduction de type « Montant de la commande » diminue aussi les frais d’expédition, et l’application signale chaque commande concernée. Une réduction de type « Montant des produits » ne le fait pas.',
      'L’application est disponible en anglais et en japonais.',
    ],
    ctaHeading: 'Japan Multiship vous intéresse pour votre boutique ?',
    ctaBody:
      'Japan Multiship n’est pas encore disponible sur le Shopify App Store. Envoyez-nous un message si vous souhaitez l’utiliser dans votre boutique.',
  },
  bestStoreLocator: {
    title: 'Best Store Locator',
    tagline:
      'Affichez vos magasins, revendeurs ou distributeurs sur une carte avec recherche sur votre vitrine, sans clé API ni compte de cartographie à configurer.',
    problemHeading: 'Le problème',
    problemIntro:
      'Les clients qui souhaitent venir vous voir doivent trouver le point de vente le plus proche. De nombreux localisateurs de magasins exigent d’abord une clé API de cartographie et un compte de facturation, et tenir à jour à la main une longue liste d’emplacements prend du temps.',
    problems: [
      {
        title: 'Clés API et facturation des cartes',
        description:
          'De nombreux localisateurs exigent un compte chez un fournisseur de cartes, une clé API et une carte bancaire enregistrée avant d’afficher la carte.',
      },
      {
        title: 'De longues listes d’emplacements',
        description:
          'Ajouter des centaines de revendeurs un par un prend du temps, et un import raté peut écraser des données correctes.',
      },
      {
        title: 'Des repères mal placés',
        description: 'Une adresse placée au mauvais endroit envoie les clients à la mauvaise porte.',
      },
      {
        title: 'Des clients qui abandonnent',
        description:
          'Sans recherche par ville ou code postal ni horaires d’ouverture, les clients repartent au lieu de venir.',
      },
    ] satisfies ProblemCard[],
    howItWorksHeading: 'Comment ça marche',
    howItWorksIntro:
      'Ajoutez vos emplacements à la main ou depuis un CSV, et une carte avec recherche apparaît sur votre vitrine sous forme de bloc de thème.',
    features: [
      {
        title: 'Cartes intégrées',
        description:
          'Les cartes et la vérification d’adresses sont incluses dans toutes les formules, sans compte de cartographie ni clé API.',
      },
      {
        title: 'Import CSV avec aperçu',
        description:
          'Consultez un aperçu complet avant tout enregistrement. Les réimports mettent à jour les magasins existants et repèrent les doublons.',
      },
      {
        title: 'Mise en attente pour vérification',
        description:
          'Les adresses qui ne peuvent pas être placées avec précision sont mises en attente pour vérification au lieu d’être publiées avec un repère au mauvais endroit.',
      },
      {
        title: 'Bloc de thème',
        description:
          'Ajoutez la carte sous forme de bloc de thème, avec vos couleurs, votre mise en page, votre unité de distance et vos textes.',
      },
      {
        title: 'Recherche et magasins ouverts',
        description:
          'Les clients cherchent par ville ou code postal, utilisent leur position, filtrent par tag et voient quels magasins sont ouverts en ce moment. Les clients connectés peuvent enregistrer un magasin favori.',
      },
      {
        title: 'Pages d’emplacement',
        description:
          'Des pages d’emplacement avec données structurées aident les moteurs de recherche et les assistants IA à trouver chaque magasin (formule Pro et supérieures).',
      },
    ] satisfies FeatureCardContent[],
    goodToKnowHeading: 'Bon à savoir',
    goodToKnow: [
      'Nécessite le canal de vente Boutique en ligne : la carte est un bloc d’application de thème.',
      'L’import CSV est inclus dans toutes les formules.',
      'La vérification d’adresses traite environ une ligne par seconde. Ajoutez des colonnes de latitude et de longitude pour importer instantanément un fichier volumineux.',
      'Fonctionne pour les boutiques de tous les pays.',
    ],
    ctaHeading: 'Best Store Locator vous intéresse pour votre boutique ?',
    ctaBody:
      'Best Store Locator n’est pas encore disponible sur le Shopify App Store. Envoyez-nous un message si vous souhaitez l’utiliser dans votre boutique.',
  },
  checkoutProbe: {
    title: 'Checkout Probe',
    tagline:
      'Préparez votre paiement à WebMCP. Découvrez ce qui bloquerait les agents d’achat IA lors du paiement dans votre boutique, avec une solution pour chaque problème détecté par le test. Aucune commande n’est jamais passée.',
    problemHeading: 'Le problème',
    problemIntro:
      'Depuis septembre 2026, le paiement Shopify propose des outils WebMCP : les agents IA qui tournent dans le navigateur de l’acheteur peuvent lire et finaliser un paiement. Quand un paiement demande une information qu’un agent ne peut pas fournir, l’agent s’arrête, la vente est perdue, et rien dans vos commandes n’indique pourquoi.',
    problems: [
      {
        title: 'Des règles qui demandent une saisie',
        description:
          'Une règle de paiement qui demande quelque chose de plus à l’acheteur peut bloquer un agent incapable d’y répondre.',
      },
      {
        title: 'Pas de Shop Pay',
        description: 'Sans Shop Pay, certains agents ne peuvent pas finaliser l’étape de règlement.',
      },
      {
        title: 'Aucune expédition proposée',
        description:
          'Si aucun tarif d’expédition n’est proposé pour l’adresse, l’agent ne peut pas finaliser le paiement.',
      },
      {
        title: 'Rien de visible dans les commandes',
        description:
          'Un paiement d’agent qui échoue ne laisse aucune commande derrière lui, si bien que le problème reste invisible.',
      },
    ] satisfies ProblemCard[],
    howItWorksHeading: 'Comment ça marche',
    howItWorksIntro:
      'Checkout Probe ouvre un paiement de test comme le ferait un agent, renseigne un acheteur de test et une adresse de livraison, puis l’annule.',
    features: [
      {
        title: 'Test en un clic',
        description: 'Lancez un paiement de test comme le ferait un agent d’achat IA, en un seul clic.',
      },
      {
        title: 'Là où un agent reste bloqué',
        description: 'Voyez chaque point où un agent s’arrêterait, avec le message renvoyé par le paiement.',
      },
      {
        title: 'Une solution pour chaque problème',
        description:
          'Obtenez une solution et un lien vers la page de paramètres correspondante pour chaque problème détecté par le test.',
      },
      {
        title: 'Ce que le test ne peut pas voir',
        description:
          'Le rapport liste ce que le test ne peut pas vérifier, pour que vous sachiez quoi contrôler vous-même.',
      },
      {
        title: 'Votre produit et votre adresse',
        description: 'Choisissez le produit de test et l’adresse de livraison utilisés par le test.',
      },
      {
        title: 'Aucune commande passée',
        description: 'Le paiement de test est toujours annulé. Aucune commande n’est passée.',
      },
    ] satisfies FeatureCardContent[],
    goodToKnowHeading: 'Bon à savoir',
    goodToKnow: [
      'Conçu pour les outils WebMCP du paiement Shopify. Le test passe par le Checkout MCP de Shopify : certaines étapes visibles uniquement dans le navigateur, comme certaines extensions d’interface de paiement, peuvent ne pas apparaître. Le rapport indique ce que le test ne peut pas vérifier.',
      'Lecture seule : l’application ne modifie jamais les paramètres de votre boutique et ne passe jamais de commande.',
      'Nécessite au moins un produit actif pouvant être acheté, ainsi qu’une adresse de livraison : l’adresse de la boutique ou une adresse de test que vous définissez dans l’application.',
      'Aucune modification du thème et aucun bloc d’application.',
    ],
    ctaHeading: 'Checkout Probe vous intéresse pour votre boutique ?',
    ctaBody:
      'Checkout Probe n’est pas encore disponible sur le Shopify App Store. Envoyez-nous un message si vous souhaitez l’utiliser dans votre boutique.',
  },
};
