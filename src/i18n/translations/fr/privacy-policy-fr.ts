import type { PrivacyPolicyDictionary } from '../dictionary-types';

/**
 * Privacy policy copy in French, mirroring the block order of the English
 * version. `{email}` becomes the support mailto link and `{edpb}` the EDPB link.
 *
 * Written for merchants: what each app holds, why, for how long, who
 * processes it, and where. Implementation detail (cipher names, Shopify
 * event topics, access scopes, hosting regions) lives in each app's own repo.
 * This is a translation of a legal document: have it reviewed by a
 * French-speaking reviewer before treating it as the authoritative text.
 */
export const privacyPolicyFr: PrivacyPolicyDictionary = {
  title: 'Politique de confidentialité',
  lastUpdated: 'Dernière mise à jour : 29 septembre 2026',

  blocks: [
    {
      kind: 'paragraph',
      text: 'Chez Gemify (« nous », « notre » ou « nos »), nous prenons votre vie privée au sérieux. La présente politique de confidentialité explique comment nos applications Shopify, notamment Bulk Delete Orders, Default Address Lock, LLMs-full.txt, Japan Multiship, Best Store Locator et Checkout Probe (collectivement, « nos applications »), collectent, utilisent, conservent et protègent vos informations lorsque vous utilisez nos services.',
    },
    {
      kind: 'highlight',
      heading: 'Points clés :',
      items: [
        'Nous collectons uniquement le minimum de données nécessaire à la fourniture de nos services',
        'Nous ne vendons ni ne partageons vos données avec des tiers à des fins marketing',
        'Vous gardez le contrôle total de vos données et pouvez en demander la suppression à tout moment',
        'Nous respectons le RGPD, le CPRA et les autres lois applicables en matière de vie privée',
      ],
    },

    { kind: 'heading', text: '1. Informations que nous collectons' },
    {
      kind: 'list',
      items: [
        {
          label: 'Informations sur la boutique :',
          text: 'Nom de la boutique, domaine, adresse e-mail du propriétaire et fuseau horaire, ainsi que la clé d’accès fournie par Shopify pour que nos applications puissent se connecter à votre boutique',
        },
        {
          label: 'Contact et support :',
          text: 'Votre nom, votre adresse e-mail et les messages que vous nous envoyez',
        },
        {
          label: 'Utilisation et journaux :',
          text: 'Les fonctionnalités que vous utilisez, les réglages que vous choisissez, les erreurs et les journaux serveur habituels (adresse IP, type de navigateur et heures d’accès)',
        },
        {
          label: 'Données client :',
          text: 'La plupart de nos applications ne conservent aucune donnée personnelle sur vos clients. La section 2 indique précisément ce que conserve chaque application',
        },
      ],
    },

    { kind: 'heading', text: '2. Ce que conserve chaque application' },
    {
      kind: 'paragraph',
      text: 'Chaque application conserve uniquement ce dont elle a besoin pour fonctionner. Les données restent liées à votre boutique, et l’application ne les utilise que pour vous fournir ses fonctionnalités.',
    },
    { kind: 'subheading', text: '2.1 Bulk Delete Orders' },
    {
      kind: 'list',
      items: [
        {
          label: 'Données :',
          text: 'Les identifiants des commandes, commandes provisoires et clients que vous sélectionnez, ainsi que les compteurs de chaque tâche. Aucun nom, adresse, adresse e-mail ni donnée de paiement de client',
        },
        {
          label: 'Pourquoi :',
          text: 'Pour exécuter les tâches de suppression et d’anonymisation que vous lancez, et en afficher l’historique',
        },
        {
          label: 'Durée de conservation :',
          text: 'Tant que l’application est installée, puis suppression sous 30 jours après la désinstallation',
        },
      ],
    },
    { kind: 'subheading', text: '2.2 Default Address Lock' },
    {
      kind: 'list',
      items: [
        {
          label: 'Données :',
          text: 'Uniquement les identifiants clients et les identifiants d’adresse. Les noms, adresses et numéros de téléphone restent chez Shopify',
        },
        {
          label: 'Pourquoi :',
          text: 'Pour rétablir l’adresse par défaut d’un client après qu’une commande l’a modifiée, et afficher l’historique d’activité',
        },
        {
          label: 'Durée de conservation :',
          text: 'Tant que l’application est installée, puis suppression sous 30 jours après la désinstallation',
        },
      ],
    },
    { kind: 'subheading', text: '2.3 LLMs-full.txt' },
    {
      kind: 'list',
      items: [
        {
          label: 'Données :',
          text: 'Le contenu de la boutique que vous choisissez d’inclure : produits, collections, pages, articles de blog et politiques. Aucune donnée client ni de commande',
        },
        {
          label: 'Pourquoi :',
          text: 'Pour créer vos fichiers llms.txt et les publier dans votre thème. Les fichiers publiés sont publics sur votre vitrine, comme le reste du contenu de votre boutique',
        },
        {
          label: 'Durée de conservation :',
          text: 'Tant que l’application est installée, puis suppression sous 30 jours après la désinstallation',
        },
      ],
    },
    { kind: 'subheading', text: '2.4 Japan Multiship' },
    {
      kind: 'list',
      items: [
        {
          label: 'Données :',
          text: 'Pour les commandes cadeaux, le nom, l’adresse et le numéro de téléphone de chaque destinataire que l’acheteur saisit sur la page du panier, la date et le créneau de livraison, ainsi que le numéro de suivi. Un destinataire peut n’avoir aucun lien avec la boutique',
        },
        {
          label: 'Pourquoi :',
          text: 'Pour scinder la commande en une expédition par destinataire, créer le fichier d’expédition Yamato B2 Cloud et ajouter les numéros de suivi afin que l’acheteur soit notifié. L’application n’utilise les données des destinataires à aucune autre fin',
        },
        {
          label: 'Protection :',
          text: 'Les données des destinataires sont chiffrées et stockées uniquement au Japon. L’application enregistre quels membres du personnel du marchand ont consulté des données de destinataires, et à quel moment, afin de détecter les abus. Ce registre ne contient aucune information sur les destinataires et est supprimé au bout d’un an',
        },
        {
          label: 'Durée de conservation :',
          text: 'Les informations des destinataires sont supprimées automatiquement 90 jours après l’expédition ou l’annulation de la commande. Le marchand peut choisir un délai plus court. Rien n’est conservé plus de 180 jours',
        },
        {
          label: 'APPI japonaise :',
          text: 'Le marchand reste responsable des données des destinataires au regard de la loi japonaise sur la protection des informations personnelles (APPI). Japan Multiship les traite uniquement pour le compte du marchand',
        },
      ],
    },
    { kind: 'subheading', text: '2.5 Best Store Locator' },
    {
      kind: 'list',
      items: [
        {
          label: 'Données :',
          text: 'Les emplacements de magasins que vous saisissez ou importez, comme les noms, adresses, coordonnées et horaires d’ouverture. Il s’agit d’informations commerciales que vous publiez volontairement sur votre vitrine',
        },
        {
          label: 'Visiteurs de la vitrine :',
          text: 'Les recherches et la position transmise via « Utiliser ma position » servent uniquement à répondre à cette recherche et ne sont pas conservées. La carte n’ajoute aucun cookie, outil d’analyse ni traceur publicitaire',
        },
        {
          label: 'Magasin favori (facultatif) :',
          text: 'Désactivé par défaut. Lorsque vous l’activez, le magasin choisi par un client connecté est enregistré dans son propre profil client Shopify, et non sur nos serveurs',
        },
        {
          label: 'Durée de conservation :',
          text: 'Suppression environ 48 heures après la désinstallation de l’application',
        },
      ],
    },
    { kind: 'subheading', text: '2.6 Checkout Probe' },
    {
      kind: 'list',
      items: [
        {
          label: 'Données :',
          text: 'Vos réglages de test (le produit de test et l’adresse de livraison de test) et vos 10 derniers rapports de test',
        },
        {
          label: 'Pourquoi :',
          text: 'Pour tester votre checkout comme le ferait un agent d’achat IA et afficher les résultats. Un test ne passe jamais de commande, ne facture jamais rien et ne modifie jamais les paramètres de votre boutique',
        },
        {
          label: 'Aucune donnée client :',
          text: 'Chaque test utilise un acheteur de test fictif, et non une personne réelle. L’application lit uniquement vos produits et vos paramètres d’expédition',
        },
        {
          label: 'Durée de conservation :',
          text: 'Seuls les 10 derniers rapports sont conservés. Tout est supprimé lorsque vous désinstallez l’application',
        },
      ],
    },

    { kind: 'heading', text: '3. Utilisation de vos informations' },
    {
      kind: 'list',
      items: [
        'Fournir les fonctionnalités des applications que vous utilisez et se connecter à votre boutique de façon sécurisée',
        'Répondre à vos demandes de support',
        'Vous envoyer des notifications importantes concernant nos applications (mises à jour de sécurité, changements de service, etc.)',
        'Vous informer des nouvelles fonctionnalités, uniquement si vous y avez consenti',
        'Corriger les problèmes et améliorer nos applications',
        'Prévenir la fraude et les abus, respecter nos obligations légales et répondre aux demandes relatives aux données',
      ],
    },
    { kind: 'paragraph', text: 'Nous n’utilisons pas vos informations pour :', strong: true },
    {
      kind: 'list',
      items: [
        'Des campagnes marketing ou publicitaires, sauf consentement explicite de votre part',
        'Les vendre ou les partager avec des tiers à leurs fins marketing',
        'Des décisions automatisées produisant des effets juridiques ou significatifs pour les marchands ou leurs clients',
      ],
    },

    { kind: 'heading', text: '4. Durée de conservation des données' },
    {
      kind: 'list',
      items: [
        {
          label: 'Tant qu’une application est installée :',
          text: 'Nous conservons les données nécessaires à son fonctionnement',
        },
        {
          label: 'Après la désinstallation :',
          text: 'Vos données sont supprimées sous 30 jours, et plus tôt pour certaines applications (voir la section 2). Nous pouvons conserver des statistiques d’usage anonymes et agrégées',
        },
        { label: 'E-mails de support :', text: '2 ans, pour aider à résoudre les problèmes en cours' },
        { label: 'Journaux serveur :', text: '90 jours, à des fins de sécurité et de dépannage' },
        {
          label: 'Documents légaux :',
          text: 'Aussi longtemps que la loi l’exige, par exemple à des fins fiscales',
        },
      ],
    },

    { kind: 'heading', text: '5. Lieu de stockage et protection des données' },
    {
      kind: 'paragraph',
      text: 'Vos données sont stockées chez des hébergeurs cloud situés aux États-Unis, à l’exception des données de Japan Multiship, qui sont stockées uniquement au Japon.',
    },
    {
      kind: 'paragraph',
      text: 'Si vous résidez dans l’Espace économique européen (EEE), au Royaume-Uni ou dans une autre région soumise à des règles sur les transferts de données, vos données peuvent être traitées hors de votre pays. Nous encadrons ces transferts par des clauses contractuelles types et des mesures de sécurité supplémentaires.',
    },
    {
      kind: 'list',
      items: [
        { label: 'Chiffrement :', text: 'Les données sont chiffrées en transit et au repos' },
        { label: 'Contrôles d’accès :', text: 'Seul le personnel autorisé peut accéder à vos données' },
        {
          label: 'Connexion sécurisée :',
          text: 'Nos applications se connectent à votre boutique via la connexion sécurisée de Shopify',
        },
        {
          label: 'Audits de sécurité et supervision :',
          text: 'Nous réalisons régulièrement des évaluations de sécurité et surveillons nos systèmes afin de détecter les menaces',
        },
        {
          label: 'Développement sécurisé :',
          text: 'Nous appliquons des pratiques de développement sécurisées et procédons à des revues de code',
        },
      ],
    },
    {
      kind: 'paragraph',
      text: 'Aucune méthode de transmission ou de stockage n’est sûre à 100 %. Si la sécurité de vos données vous préoccupe, écrivez-nous à {email}.',
    },

    { kind: 'heading', text: '6. Prestataires de services et partage' },
    {
      kind: 'paragraph',
      text: 'Nous ne vendons, ne louons ni n’échangeons vos informations personnelles. Nous les partageons uniquement dans les cas suivants :',
    },
    {
      kind: 'list',
      items: [
        {
          label: 'Prestataires de services :',
          text: 'Shopify (la plateforme sur laquelle fonctionnent nos applications), des hébergeurs cloud comme Fly.io et Amazon Web Services, ainsi que des outils de suivi des erreurs et de support. Pour Best Store Locator, l’OpenStreetMap Foundation reçoit uniquement les adresses des magasins afin de les placer sur la carte, et OpenFreeMap fournit les images de la carte aux visiteurs. Ces prestataires sont tenus de protéger les données et de ne les utiliser qu’aux fins que nous précisons',
        },
        {
          label: 'Obligations légales :',
          text: 'Lorsque la loi l’exige (une décision de justice, par exemple), ou pour protéger nos droits, nos utilisateurs ou le public, ou pour traiter une fraude ou un problème de sécurité',
        },
        {
          label: 'Transferts d’entreprise :',
          text: 'Si Gemify prend part à une fusion, une acquisition ou une cession d’actifs, vos informations pourront être transférées. Nous vous en informerons par e-mail ou sur notre site avant qu’une politique de confidentialité différente ne s’applique',
        },
      ],
    },

    { kind: 'heading', text: '7. Vos droits' },
    {
      kind: 'paragraph',
      text: 'Selon votre lieu de résidence, vous pouvez nous demander de :',
    },
    {
      kind: 'list',
      items: [
        'Vous fournir une copie de vos données personnelles, dans un format portable',
        'Corriger des données inexactes ou incomplètes',
        'Supprimer vos données. La désinstallation d’une application supprime ses données sous 30 jours, ou écrivez à {email} pour une suppression immédiate',
        'Limiter certains traitements ou vous y opposer',
        'Retirer un consentement donné précédemment',
        'Cesser de vous envoyer des e-mails marketing, via le lien « se désabonner » présent dans chacun d’eux',
      ],
    },
    {
      kind: 'paragraph',
      text: 'Pour exercer l’un de ces droits, écrivez-nous à {email}. Nous répondons sous 30 jours.',
    },

    { kind: 'heading', text: '8. Lois sur la vie privée' },
    { kind: 'subheading', text: '8.1 RGPD (EEE et Royaume-Uni)' },
    {
      kind: 'paragraph',
      text: 'Nous traitons les données personnelles au titre du RGPD et du RGPD britannique sur les bases légales suivantes :',
    },
    {
      kind: 'list',
      items: [
        { label: 'Contrat :', text: 'Pour vous fournir nos applications' },
        {
          label: 'Intérêts légitimes :',
          text: 'Pour améliorer nos services, en garantir la sécurité et assurer le support',
        },
        { label: 'Consentement :', text: 'Lorsque vous l’avez explicitement donné' },
        { label: 'Obligations légales :', text: 'Pour respecter la loi' },
      ],
    },
    { kind: 'subheading', text: '8.2 CPRA (Californie)' },
    {
      kind: 'paragraph',
      text: 'Les résidents de Californie ont le droit de savoir quelles informations personnelles nous collectons et comment nous les utilisons, de les faire supprimer ou rectifier, de limiter l’utilisation des informations personnelles sensibles, de refuser leur vente ou leur partage (nous ne les vendons ni ne les partageons), et de ne subir aucun traitement différent pour avoir exercé ces droits.',
    },
    { kind: 'subheading', text: '8.3 Autres lois' },
    {
      kind: 'paragraph',
      text: 'Nous respectons également la loi japonaise sur la protection des informations personnelles (APPI), le Colorado Privacy Act, le Virginia Consumer Data Protection Act et les autres lois applicables.',
    },
    { kind: 'subheading', text: '8.4 Demandes de données client transmises par Shopify' },
    {
      kind: 'paragraph',
      text: 'Lorsqu’un de vos clients demande l’accès à ses données ou leur suppression, Shopify nous transmet la demande. Nous fournissons ou supprimons sous 30 jours toutes les données personnelles que nous détenons sur ce client. Les applications qui ne conservent aucune donnée client confirment qu’il n’y a rien à fournir. Lorsque vous désinstallez une application ou fermez votre boutique, Shopify nous demande de supprimer les données de votre boutique, ce que nous faisons comme indiqué à la section 4.',
    },

    { kind: 'heading', text: '9. Protection des mineurs' },
    {
      kind: 'paragraph',
      text: 'Nos applications ne s’adressent pas aux personnes de moins de 18 ans. Nous ne collectons pas sciemment d’informations personnelles auprès d’enfants. Si vous pensez que nous avons collecté des informations concernant un enfant, contactez-nous et nous les supprimerons.',
    },

    { kind: 'heading', text: '10. Liens vers des sites tiers' },
    {
      kind: 'paragraph',
      text: 'Nos applications ou notre site peuvent contenir des liens vers des sites ou services tiers. Nous ne sommes pas responsables de leurs pratiques de confidentialité : nous vous invitons donc à consulter leurs politiques de confidentialité.',
    },

    { kind: 'heading', text: '11. Modifications de la présente politique de confidentialité' },
    {
      kind: 'paragraph',
      text: 'Nous pouvons mettre à jour la présente politique de confidentialité afin de refléter des changements dans nos pratiques ou dans la loi. En cas de modification importante, nous mettrons à jour la date de « dernière mise à jour », vous en informerons par e-mail si nous disposons de votre adresse, et afficherons un avis dans nos applications. En continuant à utiliser nos applications après l’entrée en vigueur des modifications, vous acceptez la politique révisée.',
    },

    { kind: 'heading', text: '12. Nous contacter' },
    {
      kind: 'paragraph',
      text: 'Pour toute question ou demande concernant la présente politique de confidentialité ou vos données, contactez-nous. Pour les demandes relatives à la confidentialité, veuillez indiquer l’objet « Demande relative à la confidentialité ».',
    },
    { kind: 'contact', brand: 'Gemify', emailLabel: 'E-mail :', websiteLabel: 'Site web :' },
    {
      kind: 'paragraph',
      text: 'Si vous estimez que nous n’avons pas traité vos données personnelles de façon appropriée, vous pouvez introduire une réclamation auprès de votre autorité locale de protection des données. Pour les résidents de l’EEE, la liste des autorités est disponible sur {edpb}.',
    },

    { kind: 'divider' },
    {
      kind: 'closing',
      text: 'La présente politique de confidentialité a été mise à jour le 29 septembre 2026. En utilisant nos applications, vous reconnaissez avoir lu et compris la présente politique de confidentialité et acceptez d’être lié par ses dispositions.',
    },
  ],
};
