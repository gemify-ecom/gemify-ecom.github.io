import type { FaqDictionary } from '../dictionary-types';

/** FAQ page copy in French. `{email}` and `{privacyPolicy}` become links. */
export const faqFr: FaqDictionary = {
  title: 'Questions fréquentes',
  intro:
    'Retrouvez les réponses aux questions les plus courantes sur Gemify et nos applications. Vous ne trouvez pas ce que vous cherchez ? Écrivez-nous à {email}',
  questionPrefix: 'Q :',

  sections: [
    {
      id: 'general',
      title: 'Questions générales',
      items: [
        {
          question: 'Qu’est-ce que Gemify ?',
          paragraphs: [
            'Gemify est une société de développement d’applications Shopify qui conçoit des outils simples et puissants pour les marchands. Nous créons des applications qui résolvent de vrais problèmes, sans complexité inutile.',
          ],
        },
        {
          question: 'Vos applications sont-elles sûres ?',
          paragraphs: [
            'Oui, tout à fait. Toutes nos applications respectent les bonnes pratiques et les consignes de sécurité de Shopify. Nous utilisons un chiffrement conforme aux standards du secteur, une authentification sécurisée, et nous ne partageons jamais vos données avec des tiers. Les données de votre boutique sont protégées en permanence.',
          ],
        },
        {
          question: 'Comment obtenir de l’aide ?',
          paragraphs: [
            'Vous pouvez contacter notre équipe support par e-mail à {email}. Nous répondons généralement sous 24 heures les jours ouvrés.',
          ],
        },
        {
          question: 'Proposez-vous des remboursements ?',
          paragraphs: [
            'Les frais des applications sont facturés par Shopify. Si l’une de nos applications ne vous donne pas satisfaction, écrivez-nous à {email} : nous chercherons une solution avec vous ou procéderons à un remboursement si cela se justifie.',
          ],
        },
      ],
    },
    {
      id: 'bulk-delete-orders',
      title: 'Application Bulk Delete Orders',
      items: [
        {
          question: 'Que fait l’application Bulk Delete Orders ?',
          paragraphs: [
            'Bulk Delete Orders vous permet de supprimer en une seule opération de nombreuses commandes, commandes provisoires ou clients de votre boutique Shopify. Vous pouvez utiliser des filtres puissants pour cibler des commandes précises selon leur statut, leur date, leurs tags ou d’autres critères. L’application annule automatiquement les commandes avant de les supprimer, ce qui vous évite un long travail manuel.',
          ],
        },
        {
          question: 'Est-il sûr de supprimer des commandes ?',
          paragraphs: [
            'Oui, mais restez vigilant. L’application annule automatiquement les commandes avant de les supprimer, et une étape de confirmation liste chaque commande et vous avertit avant toute suppression. Cependant, une fois supprimées, les commandes ne peuvent plus être récupérées. Nous vous recommandons de :',
          ],
          bullets: [
            'Utiliser les filtres avec soin pour ne sélectionner que les commandes à supprimer',
            'Commencer par un petit lot de test',
            'Exporter vos commandes en guise de sauvegarde avant toute suppression en masse',
          ],
        },
        {
          question: 'Puis-je annuler une suppression ?',
          paragraphs: [
            'Non. Une fois les commandes supprimées de Shopify, elles ne peuvent être restaurées ni par notre application ni depuis l’interface d’administration Shopify. C’est pourquoi nous recommandons de définir vos filtres avec beaucoup de soin et de commencer par de petits lots de test.',
          ],
        },
        {
          question: 'Quels filtres sont disponibles ?',
          paragraphs: ['Vous pouvez filtrer les commandes par :'],
          bullets: [
            'Statut de commande (ouverte, archivée, annulée)',
            'Statut de paiement (payée, en attente, remboursée, etc.)',
            'Statut de traitement (non traitée, traitée, partiellement traitée)',
            'Période (date de création, date de mise à jour)',
            'Tags de commande',
            'Et d’autres critères encore',
          ],
        },
        {
          question: 'Combien de temps prend la suppression des commandes ?',
          paragraphs: [
            'La vitesse de suppression dépend du nombre de commandes et de la vitesse à laquelle Shopify permet aux applications de les supprimer. L’application traite les suppressions en arrière-plan et vous pouvez suivre leur progression dans la section Historique des tâches. Pour les lots volumineux, cela peut prendre de quelques minutes à plusieurs heures.',
          ],
        },
        {
          question: 'Puis-je suivre les tâches de suppression ?',
          paragraphs: [
            'Oui ! L’application inclut un historique des tâches où vous pouvez suivre chaque tâche de suppression en temps réel, voir son statut et sa progression, et exporter l’historique au format CSV pour vos archives.',
          ],
        },
        {
          question: 'Cela aura-t-il un impact sur mes statistiques Shopify ?',
          paragraphs: [
            'Oui : supprimer des commandes les retire de vos analyses et de vos rapports Shopify. Les données associées à ces commandes n’apparaîtront plus dans les statistiques de votre boutique. C’est pourquoi nous vous invitons à bien réfléchir aux commandes que vous souhaitez supprimer.',
          ],
        },
        {
          question: 'Que deviennent les informations client lorsque je supprime des commandes ?',
          paragraphs: [
            'La suppression d’une commande efface l’enregistrement de la commande, mais pas le compte client. Les profils clients restent dans votre boutique tant que vous ne les effacez pas, soit avec les outils clients de Bulk Delete Orders, soit depuis l’interface d’administration Shopify.',
          ],
        },
        {
          question: 'Puis-je supprimer ou anonymiser des clients en masse ?',
          paragraphs: [
            'Oui. Bulk Delete Orders traite les clients de deux façons : les anonymiser pour masquer leurs données personnelles, ou les supprimer définitivement avec leurs commandes. La suppression de clients en masse est incluse dans la formule gratuite. L’anonymisation nécessite la formule Complete.',
          ],
        },
        {
          question: 'Puis-je supprimer des commandes provisoires ?',
          paragraphs: [
            'Oui ! Bulk Delete Orders prend en charge aussi bien les commandes classiques que les commandes provisoires. Vous pouvez supprimer en masse les deux types grâce à des filtres puissants.',
          ],
        },
        {
          question: 'Combien coûte Bulk Delete Orders ?',
          paragraphs: ['Nous proposons une tarification simple :'],
          bullets: [
            {
              label: 'Formule Free (gratuite) :',
              text: 'Jusqu’à 50 suppressions de commandes ou de commandes provisoires, suppression de clients en masse, suivi des tâches en direct et export CSV',
            },
            {
              label: 'Formule Complete (36 USD/an) :',
              text: 'Suppressions de commandes ou de commandes provisoires illimitées, plus la suppression et l’anonymisation de clients en masse (masquage des données personnelles)',
            },
          ],
        },
      ],
    },
    {
      id: 'default-address-lock',
      title: 'Application Default Address Lock',
      items: [
        {
          question: 'Que fait Default Address Lock ?',
          paragraphs: [
            'Default Address Lock empêche Shopify de remplacer automatiquement l’adresse par défaut de vos clients lorsqu’ils passent une commande avec une autre adresse de livraison. Lorsqu’un client envoie un cadeau à quelqu’un d’autre, Shopify remplace normalement son adresse par défaut par celle du destinataire. Notre application l’en empêche et conserve l’adresse par défaut d’origine.',
          ],
        },
        {
          question: 'Pourquoi Shopify modifie-t-il les adresses par défaut des clients ?',
          paragraphs: [
            'Il s’agit d’un comportement historique de Shopify (depuis 2015) : l’adresse par défaut d’un client est automatiquement remplacée par l’adresse de livraison de sa commande la plus récente. Pensé pour simplifier la vie des clients, ce fonctionnement pose problème pour :',
          ],
          bullets: [
            'Les boutiques de cadeaux, dont les clients expédient à des destinataires différents',
            'Les marchands B2B, dont les acheteurs expédient à leurs propres clients',
            'Les boutiques dont les intégrations CRM dépendent de la justesse des adresses client',
            'Les activités de box par abonnement',
          ],
        },
        {
          question: 'Comment l’application détermine-t-elle quelles modifications bloquer ?',
          paragraphs: [
            'Notre système de détection intelligent fait la différence entre les modifications d’adresse déclenchées par une commande et les mises à jour manuelles volontaires. Si un client modifie son adresse depuis son compte, ou si votre équipe la modifie dans l’interface d’administration Shopify, cette modification est conservée. Seuls les remplacements automatiques provoqués par une commande sont annulés.',
          ],
        },
        {
          question: 'Mes clients pourront-ils toujours modifier leurs adresses ?',
          paragraphs: [
            'Oui. Les clients peuvent toujours modifier manuellement leur adresse par défaut à tout moment depuis leur compte. L’application empêche uniquement les remplacements automatiques déclenchés par des commandes passées avec une autre adresse de livraison.',
          ],
        },
        {
          question: 'Quelles données Default Address Lock enregistre-t-elle ?',
          paragraphs: [
            'Nous appliquons une approche privacy-first et enregistrons uniquement les identifiants d’adresse. Nous ne stockons jamais le contenu réel des adresses, comme les noms de rue ou les villes. Cette empreinte de données minimale garantit la sécurité des informations de vos clients tout en assurant une protection complète.',
          ],
        },
        {
          question: 'Puis-je voir quelles adresses l’application a restaurées ?',
          paragraphs: [
            'Oui. Le tableau de bord d’activité liste chaque événement de protection : vous pouvez voir quand l’application a restauré une adresse par défaut et consulter l’historique complet.',
          ],
        },
        {
          question: 'Combien coûte Default Address Lock ?',
          paragraphs: [
            'Notre tarification est basée sur le volume de commandes, afin de rester accessible aux boutiques de toutes tailles :',
          ],
          bullets: [
            { label: 'Free (gratuite) :', text: 'Jusqu’à 30 commandes par mois' },
            { label: 'Basic (4,99 USD/mois) :', text: 'Jusqu’à 100 commandes par mois' },
            { label: 'Growth (24,99 USD/mois) :', text: 'Jusqu’à 500 commandes par mois' },
            { label: 'Enterprise (99 USD/mois) :', text: 'Commandes illimitées' },
          ],
        },
        {
          question: 'Default Address Lock est-elle déjà disponible ?',
          paragraphs: [
            'Oui ! Default Address Lock est disponible sur le Shopify App Store. Vous pouvez l’installer directement depuis sa fiche. Si vous avez des questions avant de vous lancer, écrivez-nous à {email}.',
          ],
        },
      ],
    },
    {
      id: 'llms-full-txt',
      title: 'Application LLMs-full.txt',
      items: [
        {
          question: 'Que fait l’application LLMs-full.txt ?',
          paragraphs: [
            'LLMs-full.txt génère les fichiers agents.md, llms.txt et llms-full.txt de votre boutique Shopify, afin que les assistants IA comme ChatGPT, Claude et Gemini comprennent vos produits, vos collections et vos pages. Les fichiers sont publiés dans votre thème et servis par Shopify sur /agents.md, /llms.txt et /llms-full.txt, sur votre propre domaine, sans hébergement supplémentaire.',
          ],
        },
        {
          question: 'Que sont agents.md, llms.txt et llms-full.txt ?',
          paragraphs: [
            'Ce sont de simples fichiers markdown fondés sur le standard llms.txt. Tout comme robots.txt guide les moteurs de recherche, ces fichiers guident les assistants IA. llms.txt est un index concis de votre boutique, llms-full.txt contient l’intégralité du contenu que vous avez choisi d’inclure, et agents.md publie la même description de boutique sous le nom de fichier que recherchent les agents IA. Les modèles d’IA lisent ces fichiers bien plus fidèlement que le HTML d’une vitrine.',
          ],
        },
        {
          question: 'Quel contenu puis-je inclure ?',
          paragraphs: [
            'Vous choisissez exactement ce qui figure dans les fichiers, par type de contenu complet ou élément par élément, et pouvez laisser de côté tout ce que vous ne souhaitez pas voir résumé par les assistants IA. Vous pouvez inclure :',
          ],
          bullets: [
            'Les produits',
            'Les collections',
            'Les pages',
            'Les articles de blog',
            'Les politiques de la boutique',
          ],
        },
        {
          question: 'LLMs-full.txt accède-t-elle aux données clients ?',
          paragraphs: [
            'Non. LLMs-full.txt lit uniquement le contenu de la boutique (produits, collections, pages, articles de blog et politiques). Elle n’accède jamais aux commandes ni aux informations client.',
          ],
        },
        {
          question: 'Qui peut consulter les fichiers générés ?',
          paragraphs: [
            'Les fichiers sont accessibles publiquement sur le domaine de votre boutique, au même titre que les pages de votre vitrine. Ils ne contiennent que le contenu que vous avez choisi d’inclure, lequel est déjà public sur votre vitrine.',
          ],
        },
        {
          question: 'Les fichiers vont-ils ralentir ma boutique ?',
          paragraphs: [
            'Non. Les fichiers générés sont des fichiers texte statiques servis par Shopify avec votre thème. Ils n’ajoutent aucun script à votre vitrine et n’ont aucun impact sur la vitesse de chargement.',
          ],
        },
        {
          question: 'Que se passe-t-il lorsque mon catalogue change ?',
          paragraphs: [
            'Activez la régénération planifiée et l’application reconstruit vos fichiers toutes les heures, tous les jours ou toutes les semaines, dans votre propre fuseau horaire. Vous pouvez aussi les régénérer manuellement en un clic. Les fichiers publiés sont mis à jour directement, et chaque exécution est enregistrée dans l’historique de génération.',
          ],
        },
        {
          question: 'Combien coûte LLMs-full.txt ?',
          paragraphs: [
            'LLMs-full.txt propose une formule gratuite couvrant jusqu’à 50 éléments par type de contenu, avec toutes les fonctionnalités incluses : aperçu avant publication, génération manuelle et planifiée, éditeur de modèles et historique de génération. La formule Complete coûte 9,99 USD/mois pour un nombre illimité de produits, collections, pages et articles de blog.',
          ],
        },
      ],
    },
    {
      id: 'pricing',
      title: 'Tarifs et facturation',
      items: [
        {
          question: 'Combien coûtent vos applications ?',
          paragraphs: [
            'Les tarifs varient selon l’application. Les formules de chaque application sont détaillées dans sa section de cette FAQ et sur sa fiche du Shopify App Store. Toutes nos applications proposent une formule gratuite, pour les essayer avant de passer à une formule payante.',
          ],
        },
        {
          question: 'Comment suis-je facturé ?',
          paragraphs: [
            'Toute la facturation est gérée par Shopify. Les frais liés aux applications figurent sur votre facture Shopify habituelle et suivent le cycle de facturation de Shopify. Vous pouvez résilier à tout moment depuis votre interface d’administration Shopify.',
          ],
        },
        {
          question: 'Existe-t-il une formule gratuite ?',
          paragraphs: ['Oui, toutes nos applications proposent une formule gratuite :'],
          bullets: [
            { label: 'Bulk Delete Orders :', text: '50 opérations de suppression en masse offertes' },
            {
              label: 'Default Address Lock :',
              text: 'Gratuit jusqu’à 30 commandes par mois',
            },
            { label: 'LLMs-full.txt :', text: 'Gratuit jusqu’à 50 éléments par type de contenu' },
          ],
        },
        {
          question: 'Puis-je résilier à tout moment ?',
          paragraphs: [
            'Oui, vous pouvez résilier n’importe laquelle de nos applications à tout moment depuis votre interface d’administration Shopify. Il vous suffit de désinstaller l’application : le cycle de facturation suivant ne vous sera pas facturé.',
          ],
        },
      ],
    },
    {
      id: 'privacy',
      title: 'Confidentialité et sécurité',
      items: [
        {
          question: 'Quelles données collectez-vous ?',
          paragraphs: [
            'Nous collectons uniquement le minimum de données nécessaire à la fourniture de nos services. Cela comprend généralement les informations de la boutique et les données spécifiques dont l’application a besoin pour fonctionner (par exemple, les données de commande pour Bulk Delete Orders, ou le contenu des produits et des pages pour LLMs-full.txt). Pour tous les détails, consultez notre {privacyPolicy}.',
          ],
        },
        {
          question: 'Vendez-vous mes données ?',
          paragraphs: [
            'Non, jamais. Nous ne vendons, ne louons ni n’échangeons vos données avec des tiers. Les données de votre boutique servent uniquement à fournir les services des applications que vous avez installées.',
          ],
        },
        {
          question: 'Comment mes données sont-elles protégées ?',
          paragraphs: [
            'Nous appliquons des mesures de sécurité conformes aux standards du secteur, notamment :',
          ],
          bullets: [
            'Chiffrement en transit et au repos',
            'Connexion sécurisée via Shopify',
            'Audits de sécurité réguliers',
            'Contrôles d’accès stricts',
          ],
        },
        {
          question: 'Que deviennent mes données si je désinstalle une application ?',
          paragraphs: [
            'Lorsque vous désinstallez une de nos applications, vos données sont définitivement supprimées de nos systèmes sous 30 jours, et plus tôt pour certaines applications. Consultez notre {privacyPolicy} pour le détail de chaque application.',
          ],
        },
        {
          question: 'Êtes-vous conformes au RGPD ?',
          paragraphs: [
            'Oui, nous respectons le RGPD, le CPRA et les autres réglementations relatives à la vie privée. Nous répondons aux demandes d’accès et de suppression des données client que Shopify nous transmet. Consultez notre {privacyPolicy} pour en savoir plus.',
          ],
        },
      ],
    },
    {
      id: 'technical',
      title: 'Questions techniques',
      items: [
        {
          question: 'Quelles formules Shopify sont prises en charge ?',
          paragraphs: [
            'Nos applications fonctionnent avec toutes les formules Shopify, y compris Basic, Shopify, Advanced et Shopify Plus.',
          ],
        },
        {
          question: 'Vos applications fonctionnent-elles avec Shopify Plus ?',
          paragraphs: [
            'Oui, toutes nos applications sont entièrement compatibles avec les boutiques Shopify Plus.',
          ],
        },
        {
          question: 'Vos applications vont-elles ralentir ma boutique ?',
          paragraphs: [
            'Non, nos applications sont conçues pour être légères et efficaces. Elles fonctionnent principalement côté serveur et n’ajoutent aucun script aux pages de votre vitrine : la vitesse de chargement de votre boutique reste inchangée. Les fichiers publiés par LLMs-full.txt sont de simples fichiers texte statiques et n’ont pas davantage d’impact sur le temps de chargement.',
          ],
        },
        {
          question: 'Faut-il des compétences techniques pour utiliser vos applications ?',
          paragraphs: [
            'Aucune compétence technique n’est nécessaire. Nos applications sont conçues pour être simples et intuitives. Si vous savez utiliser l’interface d’administration de Shopify, vous saurez utiliser nos applications. Notre support reste à votre disposition si vous avez besoin d’aide.',
          ],
        },
        {
          question: 'Puis-je utiliser plusieurs applications Gemify en même temps ?',
          paragraphs: [
            'Oui, nos applications sont conçues pour fonctionner indépendamment les unes des autres, sans conflit. Vous pouvez installer et utiliser autant d’applications Gemify que vous le souhaitez.',
          ],
        },
      ],
    },
  ],

  contactBox: {
    heading: 'Vous avez encore des questions ?',
    body: 'Vous ne trouvez pas la réponse que vous cherchez ? Nous sommes là pour vous aider !',
    cta: 'Contacter le support',
  },
};
