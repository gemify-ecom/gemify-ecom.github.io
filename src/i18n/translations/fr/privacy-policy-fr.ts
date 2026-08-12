import type { PrivacyPolicyDictionary } from '../dictionary-types';

/**
 * Privacy policy copy in French, mirroring the block order of the English
 * version. This is a translation of a legal document: have it reviewed by a
 * French-speaking reviewer before treating it as the authoritative text.
 */
export const privacyPolicyFr: PrivacyPolicyDictionary = {
  title: 'Politique de confidentialité',
  lastUpdated: 'Dernière mise à jour : 12 août 2026',

  blocks: [
    {
      kind: 'paragraph',
      text: 'Chez Gemify (« nous », « notre » ou « nos »), nous prenons votre vie privée au sérieux. La présente politique de confidentialité explique comment nos applications Shopify, notamment Bulk Delete Orders, Default Address Lock et LLMs-full.txt (collectivement, « nos applications »), collectent, utilisent, conservent et protègent vos informations lorsque vous utilisez nos services.',
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
    { kind: 'subheading', text: '1.1 Informations collectées via les API de Shopify' },
    {
      kind: 'paragraph',
      text: 'Lorsque vous installez et utilisez nos applications, nous accédons aux informations suivantes via les API de Shopify :',
    },
    {
      kind: 'list',
      items: [
        {
          label: 'Informations sur la boutique :',
          text: 'Nom de la boutique, domaine de la boutique, adresse e-mail du propriétaire et fuseau horaire de la boutique',
        },
        {
          label: 'Données de commande :',
          text: 'Détails des commandes, notamment numéros de commande, dates, statuts, statut financier et statut de traitement (pour l’application Bulk Delete Orders)',
        },
        {
          label: 'Données client :',
          text: 'Identifiants clients et identifiants d’adresse uniquement (pour l’application Default Address Lock) - nous ne conservons jamais d’informations personnelles telles que les noms, les adresses ou les coordonnées',
        },
        {
          label: 'Contenu de la boutique :',
          text: 'Produits, collections, pages, articles de blog et politiques de la boutique, lus via l’API GraphQL de Shopify, ainsi qu’un accès au thème pour publier les fichiers générés (pour l’application LLMs-full.txt)',
        },
        {
          label: 'Jetons d’accès à l’API :',
          text: 'Jetons nécessaires pour nous authentifier et communiquer avec votre boutique Shopify',
        },
      ],
    },
    { kind: 'subheading', text: '1.2 Informations collectées directement auprès des marchands' },
    {
      kind: 'paragraph',
      text: 'Nous pouvons collecter directement auprès de vous les informations suivantes :',
    },
    {
      kind: 'list',
      items: [
        {
          label: 'Coordonnées :',
          text: 'Adresse e-mail, nom (si vous les communiquez via une demande de support ou un formulaire)',
        },
        {
          label: 'Données d’utilisation :',
          text: 'Informations sur la façon dont vous utilisez nos applications, notamment les fonctionnalités employées et les paramètres configurés',
        },
        {
          label: 'Échanges avec le support :',
          text: 'Messages, retours et autres communications que vous nous adressez',
        },
      ],
    },
    { kind: 'subheading', text: '1.3 Informations collectées auprès des clients des marchands' },
    {
      kind: 'paragraph',
      text: 'Nos applications sont conçues pour limiter au maximum la collecte de données des clients finaux :',
    },
    {
      kind: 'list',
      items: [
        {
          label: 'Bulk Delete Orders :',
          text: 'Nous n’accédons pas directement aux informations personnelles des clients (noms, adresses ou données de paiement, par exemple) et ne les conservons pas. Les données de commande consultées via les API de Shopify peuvent contenir des références à des clients, mais nous ne conservons ni ne traitons séparément leurs données personnelles.',
        },
        {
          label: 'Default Address Lock :',
          text: 'Conception privacy-first : nous conservons uniquement les identifiants clients et les identifiants d’adresse afin d’assurer le verrouillage des adresses. Nous ne conservons jamais d’informations personnelles (noms, adresses, numéros de téléphone, etc.). Toutes les données personnelles restent hébergées de façon sécurisée chez Shopify.',
        },
        {
          label: 'LLMs-full.txt :',
          text: 'Nous n’accédons à aucune donnée client et n’en conservons aucune. L’application lit uniquement le contenu de la boutique (produits, collections, pages, articles de blog et politiques) que vous choisissez d’inclure. Notez que les fichiers llms.txt générés sont publiés sur votre vitrine et accessibles publiquement, comme le reste du contenu de votre vitrine.',
        },
        'Nous n’utilisons ni cookies ni technologies de suivi sur les vitrines destinées aux clients',
      ],
    },
    { kind: 'subheading', text: '1.4 Informations collectées automatiquement' },
    {
      kind: 'paragraph',
      text: 'Nous collectons automatiquement certaines informations techniques lorsque vous utilisez nos applications :',
    },
    {
      kind: 'list',
      items: [
        {
          label: 'Données de journalisation :',
          text: 'Adresses IP, type de navigateur, système d’exploitation, heures d’accès et journaux d’erreurs',
        },
        { label: 'Informations sur l’appareil :', text: 'Type d’appareil et identifiants uniques' },
        {
          label: 'Données de performance :',
          text: 'Informations sur les performances des applications, les erreurs et les plantages',
        },
      ],
    },

    { kind: 'heading', text: '2. Utilisation de vos informations' },
    {
      kind: 'paragraph',
      text: 'Nous utilisons les informations collectées aux fins suivantes :',
    },
    { kind: 'subheading', text: '2.1 Fournir et maintenir nos services' },
    {
      kind: 'list',
      items: [
        'Faire fonctionner nos applications et fournir les fonctionnalités que vous demandez',
        'Traiter les suppressions de commandes et les autres opérations (pour l’application Bulk Delete Orders)',
        'Gérer les préférences de verrouillage des adresses client (pour l’application Default Address Lock)',
        'Générer et publier les fichiers llms.txt dans votre thème (pour l’application LLMs-full.txt)',
        'Authentifier votre boutique et maintenir un accès sécurisé',
        'Surveiller et améliorer les performances et la fiabilité des applications',
      ],
    },
    { kind: 'subheading', text: '2.2 Communiquer avec vous' },
    {
      kind: 'list',
      items: [
        'Répondre à vos demandes de support et à vos questions',
        'Vous envoyer des notifications importantes concernant nos applications (mises à jour de sécurité, changements de service, etc.)',
        'Vous informer des nouveautés et des améliorations (uniquement si vous y avez consenti)',
      ],
    },
    { kind: 'subheading', text: '2.3 Améliorer nos services' },
    {
      kind: 'list',
      items: [
        'Analyser les usages et identifier les points à améliorer',
        'Diagnostiquer les problèmes et corriger les anomalies',
        'Développer de nouvelles fonctionnalités en fonction des besoins des utilisateurs',
      ],
    },
    { kind: 'subheading', text: '2.4 Garantir la sécurité et la conformité' },
    {
      kind: 'list',
      items: [
        'Détecter et prévenir la fraude, les abus et les incidents de sécurité',
        'Respecter nos obligations légales et faire appliquer nos conditions d’utilisation',
        'Répondre aux demandes des personnes concernées, comme l’exigent les lois sur la vie privée',
      ],
    },
    { kind: 'paragraph', text: 'Nous n’utilisons pas vos informations pour :', strong: true },
    {
      kind: 'list',
      items: [
        'Des campagnes marketing ou publicitaires (sauf consentement explicite de votre part)',
        'Vendre ou partager vos données avec des tiers à leurs fins marketing',
        'Des décisions automatisées produisant des effets juridiques ou significatifs pour les marchands ou leurs clients',
      ],
    },

    { kind: 'heading', text: '3. Conservation des données' },
    {
      kind: 'paragraph',
      text: 'Nous conservons vos données uniquement le temps nécessaire à la fourniture de nos services et à la réalisation des finalités décrites dans la présente politique de confidentialité :',
    },
    {
      kind: 'list',
      items: [
        {
          label: 'Boutiques actives :',
          text: 'Tant que nos applications sont installées et que vous utilisez nos services, nous conservons les données nécessaires à leur fonctionnement',
        },
        {
          label: 'Après la désinstallation :',
          text: 'Lorsque vous désinstallez nos applications, nous conservons un minimum de données (identifiant de boutique et jetons d’accès) pendant 30 jours afin de faciliter une éventuelle réinstallation. Passé ce délai, toutes les données, à l’exception des statistiques d’usage agrégées, sont définitivement supprimées',
        },
        {
          label: 'Échanges avec le support :',
          text: 'Les e-mails et échanges avec le support sont conservés pendant 2 ans afin de résoudre les problèmes en cours et d’améliorer nos services',
        },
        {
          label: 'Données de journalisation :',
          text: 'Les journaux serveur et les journaux d’erreurs sont conservés pendant 90 jours à des fins de sécurité et de débogage',
        },
        {
          label: 'Données de conformité :',
          text: 'Nous conservons les données lorsque la loi ou la réglementation l’exige (documents financiers à des fins fiscales, par exemple)',
        },
      ],
    },

    { kind: 'heading', text: '4. Stockage et sécurité des données' },
    { kind: 'subheading', text: '4.1 Où vos données sont stockées' },
    {
      kind: 'paragraph',
      text: 'Gemify est établie au Vietnam. Vos données sont stockées sur des serveurs sécurisés fournis par des prestataires d’infrastructure cloud de confiance situés aux États-Unis.',
    },
    {
      kind: 'paragraph',
      text: 'Si vous résidez dans l’Espace économique européen (EEE), au Royaume-Uni ou dans une autre juridiction imposant des restrictions aux transferts de données, veuillez noter que vos données peuvent être transférées et traitées dans des pays situés hors de votre juridiction. Nous veillons à ce que ces transferts respectent les lois applicables grâce à des garanties appropriées, notamment :',
    },
    {
      kind: 'list',
      items: [
        'Les clauses contractuelles types approuvées par la Commission européenne',
        'L’adhésion au cadre de protection des données UE-États-Unis (le cas échéant)',
        'La mise en place de mesures de sécurité et de protections contractuelles supplémentaires',
      ],
    },
    { kind: 'subheading', text: '4.2 Comment nous protégeons vos données' },
    {
      kind: 'paragraph',
      text: 'Nous appliquons des mesures de sécurité conformes aux standards du secteur pour protéger vos informations :',
    },
    {
      kind: 'list',
      items: [
        {
          label: 'Chiffrement :',
          text: 'Toutes les données sont chiffrées en transit (TLS 1.2+) et au repos (AES-256)',
        },
        {
          label: 'Contrôles d’accès :',
          text: 'Des contrôles d’accès stricts garantissent que seul le personnel autorisé peut accéder à vos données',
        },
        {
          label: 'Authentification :',
          text: 'Nous utilisons des méthodes d’authentification sécurisées, dont OAuth 2.0 pour l’accès aux API de Shopify',
        },
        {
          label: 'Audits de sécurité réguliers :',
          text: 'Nous réalisons régulièrement des évaluations de sécurité et des analyses de vulnérabilités',
        },
        {
          label: 'Supervision :',
          text: 'Nous surveillons en continu nos systèmes afin de détecter toute activité suspecte et toute menace de sécurité',
        },
        {
          label: 'Développement sécurisé :',
          text: 'Nous appliquons des pratiques de développement sécurisées et procédons à des revues de code',
        },
      ],
    },
    {
      kind: 'paragraph',
      text: 'Bien que nous prenions des mesures raisonnables pour protéger vos données, aucune méthode de transmission ou de stockage n’est sûre à 100 %. Si la sécurité de vos données vous préoccupe, écrivez-nous à {email}.',
    },

    { kind: 'heading', text: '5. Partage et divulgation des données' },
    {
      kind: 'paragraph',
      text: 'Nous ne vendons, ne louons ni n’échangeons vos informations personnelles. Nous pouvons partager vos informations uniquement dans les cas limités suivants :',
    },
    { kind: 'subheading', text: '5.1 Prestataires de services' },
    {
      kind: 'paragraph',
      text: 'Nous pouvons partager des données avec des prestataires tiers de confiance qui nous aident à faire fonctionner nos applications, par exemple :',
    },
    {
      kind: 'list',
      items: [
        'Des hébergeurs cloud (AWS, Google Cloud, etc.)',
        'Des services de suivi des erreurs et d’analyse',
        'Des outils de support client',
      ],
    },
    {
      kind: 'paragraph',
      text: 'Ces prestataires sont contractuellement tenus de protéger vos données et de ne les utiliser qu’aux fins que nous précisons.',
    },
    { kind: 'subheading', text: '5.2 Obligations légales' },
    {
      kind: 'paragraph',
      text: 'Nous pouvons divulguer vos informations si la loi l’exige ou en réponse à des demandes légitimes des autorités publiques, notamment :',
    },
    {
      kind: 'list',
      items: [
        'Pour respecter des obligations légales (décisions de justice, injonctions, etc.)',
        'Pour protéger nos droits, nos biens ou notre sécurité, ainsi que ceux de nos utilisateurs ou du public',
        'Pour détecter, prévenir ou traiter une fraude ou un problème de sécurité ou technique',
      ],
    },
    { kind: 'subheading', text: '5.3 Transferts d’entreprise' },
    {
      kind: 'paragraph',
      text: 'Si Gemify prend part à une fusion, une acquisition ou une cession d’actifs, vos informations pourront être transférées dans le cadre de cette opération. Nous vous en informerons par e-mail et/ou par un avis visible sur notre site avant que vos informations ne soient soumises à une politique de confidentialité différente.',
    },

    { kind: 'heading', text: '6. Vos droits et vos choix' },
    {
      kind: 'paragraph',
      text: 'Selon votre lieu de résidence, vous pouvez disposer des droits suivants sur vos données personnelles :',
    },
    { kind: 'subheading', text: '6.1 Accès et portabilité' },
    {
      kind: 'paragraph',
      text: 'Vous avez le droit de demander une copie des données personnelles que nous détenons à votre sujet. Vous pouvez également demander à les recevoir dans un format portable.',
    },
    { kind: 'subheading', text: '6.2 Rectification' },
    {
      kind: 'paragraph',
      text: 'Vous avez le droit de demander la correction de toute donnée personnelle inexacte ou incomplète.',
    },
    { kind: 'subheading', text: '6.3 Suppression' },
    {
      kind: 'paragraph',
      text: 'Vous avez le droit de demander la suppression de vos données personnelles. Vous pouvez les supprimer :',
    },
    {
      kind: 'list',
      items: [
        'En désinstallant nos applications de votre boutique Shopify (les données sont automatiquement supprimées sous 30 jours)',
        'En nous écrivant à {email} pour demander une suppression immédiate',
      ],
    },
    { kind: 'subheading', text: '6.4 Limitation et opposition' },
    {
      kind: 'paragraph',
      text: 'Vous avez le droit de demander la limitation de certains traitements de vos données personnelles ou de vous y opposer.',
    },
    { kind: 'subheading', text: '6.5 Refus des communications marketing' },
    {
      kind: 'paragraph',
      text: 'Vous pouvez refuser les communications marketing à tout moment en cliquant sur le lien « se désabonner » présent dans tout e-mail marketing ou en nous contactant.',
    },
    { kind: 'subheading', text: '6.6 Retrait du consentement' },
    {
      kind: 'paragraph',
      text: 'Lorsque nous traitons vos données sur la base de votre consentement, vous avez le droit de retirer ce consentement à tout moment.',
    },
    { kind: 'subheading', text: '6.7 Comment exercer vos droits' },
    {
      kind: 'paragraph',
      text: 'Pour exercer l’un de ces droits, écrivez-nous à {email}. Nous répondrons à votre demande sous 30 jours.',
    },

    { kind: 'heading', text: '7. Conformité aux lois sur la vie privée' },
    { kind: 'subheading', text: '7.1 RGPD (Espace économique européen)' },
    {
      kind: 'paragraph',
      text: 'Si vous résidez dans l’EEE, nous traitons vos données conformément au Règlement général sur la protection des données (RGPD). Nos bases légales de traitement sont notamment :',
    },
    {
      kind: 'list',
      items: [
        {
          label: 'Nécessité contractuelle :',
          text: 'Pour fournir nos applications et exécuter notre contrat avec vous',
        },
        {
          label: 'Intérêts légitimes :',
          text: 'Pour améliorer nos services, garantir la sécurité et assurer le support',
        },
        {
          label: 'Consentement :',
          text: 'Lorsque vous avez explicitement consenti à des traitements spécifiques',
        },
        { label: 'Obligations légales :', text: 'Pour respecter les lois applicables' },
      ],
    },
    { kind: 'subheading', text: '7.2 CPRA (Californie)' },
    {
      kind: 'paragraph',
      text: 'Si vous résidez en Californie, vous disposez de droits supplémentaires au titre du California Privacy Rights Act (CPRA), notamment :',
    },
    {
      kind: 'list',
      items: [
        'Le droit de savoir quelles informations personnelles nous collectons et comment elles sont utilisées',
        'Le droit de faire supprimer vos informations personnelles',
        'Le droit de refuser la vente ou le partage de vos informations personnelles (à noter : nous ne vendons ni ne partageons d’informations personnelles)',
        'Le droit de faire rectifier des informations personnelles inexactes',
        'Le droit de limiter l’utilisation des informations personnelles sensibles',
        'Le droit de ne subir aucune discrimination pour avoir exercé vos droits en matière de vie privée',
      ],
    },
    { kind: 'subheading', text: '7.3 Autres juridictions' },
    {
      kind: 'paragraph',
      text: 'Nous respectons les lois sur la vie privée des autres juridictions où nous exerçons nos activités, notamment le RGPD britannique, le Colorado Privacy Act, le Virginia Consumer Data Protection Act et les autres lois applicables.',
    },

    { kind: 'heading', text: '8. Webhooks obligatoires de Shopify' },
    {
      kind: 'paragraph',
      text: 'En tant que développeur d’applications Shopify, nous sommes abonnés aux webhooks de conformité obligatoires afin de traiter les demandes des personnes concernées :',
    },
    { kind: 'subheading', text: '8.1 Demande de données client' },
    {
      kind: 'paragraph',
      text: 'Lorsqu’un client demande ses données à un marchand, nous fournissons les données que nous avons éventuellement collectées à son sujet.',
    },
    { kind: 'subheading', text: '8.2 Suppression des données client' },
    {
      kind: 'paragraph',
      text: 'Lorsqu’un client demande la suppression de ses données, nous supprimons définitivement, sous 30 jours, toutes les données personnelles que nous avons collectées à son sujet.',
    },
    { kind: 'subheading', text: '8.3 Suppression des données de la boutique' },
    {
      kind: 'paragraph',
      text: 'Lorsqu’un marchand désinstalle nos applications ou ferme sa boutique Shopify, nous supprimons toutes les données associées sous 30 jours (comme indiqué à la section 3).',
    },

    { kind: 'heading', text: '9. Marketing et publicité' },
    {
      kind: 'paragraph',
      text: 'Nous ne menons actuellement aucune campagne marketing ou publicitaire utilisant des données clients. Si nous introduisons des fonctionnalités marketing à l’avenir :',
    },
    {
      kind: 'list',
      items: [
        'Nous mettrons en place des mécanismes de consentement clairs et recueillerons un consentement explicite',
        'Nous respecterons les préférences de consentement et les demandes de désinscription',
        'Nous respecterons les lois applicables en matière de marketing, notamment CAN-SPAM, la LCAP et le RGPD',
      ],
    },

    { kind: 'heading', text: '10. Protection des mineurs' },
    {
      kind: 'paragraph',
      text: 'Nos applications ne s’adressent pas aux personnes de moins de 18 ans. Nous ne collectons pas sciemment d’informations personnelles auprès d’enfants. Si vous pensez que nous avons collecté par inadvertance des informations concernant un enfant, contactez-nous immédiatement : nous prendrons les mesures nécessaires pour les supprimer.',
    },

    { kind: 'heading', text: '11. Transferts internationaux de données' },
    {
      kind: 'paragraph',
      text: 'Nous opérons à l’échelle mondiale et pouvons transférer vos données vers des pays situés hors de votre juridiction. Dans ce cas, nous veillons à mettre en place des garanties appropriées, notamment :',
    },
    {
      kind: 'list',
      items: [
        'Des clauses contractuelles types (CCT) approuvées par les autorités compétentes',
        'Des décisions d’adéquation de la Commission européenne ou d’autres autorités de régulation',
        'Des mesures de sécurité techniques et organisationnelles supplémentaires',
      ],
    },

    { kind: 'heading', text: '12. Liens vers des sites tiers' },
    {
      kind: 'paragraph',
      text: 'Nos applications ou notre site peuvent contenir des liens vers des sites ou services tiers. Nous ne sommes pas responsables des pratiques de confidentialité de ces tiers. Nous vous invitons à consulter la politique de confidentialité de chaque site tiers que vous visitez.',
    },

    { kind: 'heading', text: '13. Modifications de la présente politique de confidentialité' },
    {
      kind: 'paragraph',
      text: 'Nous pouvons mettre à jour la présente politique de confidentialité de temps à autre afin de refléter des changements dans nos pratiques, des exigences légales ou d’autres raisons opérationnelles. En cas de modification importante, nous nous engageons à :',
    },
    {
      kind: 'list',
      items: [
        'Mettre à jour la date de « dernière mise à jour » en haut de cette politique',
        'Vous en informer par e-mail (si vous nous avez communiqué votre adresse)',
        'Afficher un avis visible dans nos applications',
      ],
    },
    {
      kind: 'paragraph',
      text: 'En continuant à utiliser nos applications après l’entrée en vigueur des modifications, vous acceptez la politique de confidentialité révisée.',
    },

    { kind: 'heading', text: '14. Délégué à la protection des données' },
    {
      kind: 'paragraph',
      text: 'Si vous avez des questions sur la façon dont nous traitons vos données personnelles ou si vous souhaitez exercer vos droits, vous pouvez contacter notre délégué à la protection des données :',
    },
    {
      kind: 'list',
      items: [
        { label: 'E-mail :', text: '{email}' },
        {
          label: 'Objet du message :',
          text: '« Demande relative à la confidentialité » ou « Demande de protection des données »',
        },
      ],
    },

    { kind: 'heading', text: '15. Nous contacter' },
    {
      kind: 'paragraph',
      text: 'Pour toute question, préoccupation ou demande concernant la présente politique de confidentialité ou nos pratiques en matière de données, contactez-nous :',
    },
    { kind: 'contact', brand: 'Gemify', emailLabel: 'E-mail :', websiteLabel: 'Site web :' },

    { kind: 'heading', text: '16. Réclamations et autorités de contrôle' },
    {
      kind: 'paragraph',
      text: 'Si vous estimez que nous n’avons pas traité vos données personnelles de façon appropriée, vous avez le droit d’introduire une réclamation auprès de votre autorité locale de protection des données. Pour les résidents de l’EEE, la liste des autorités de protection des données est disponible sur {edpb}.',
    },

    { kind: 'divider' },
    {
      kind: 'closing',
      text: 'La présente politique de confidentialité a été mise à jour le 12 août 2026. En utilisant nos applications, vous reconnaissez avoir lu et compris la présente politique de confidentialité et acceptez d’être lié par ses dispositions.',
    },
  ],
};
