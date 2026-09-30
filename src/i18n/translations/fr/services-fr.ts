import type { ServicesDictionary } from '../dictionary-types';

/**
 * Services page copy in French: custom work beyond Gemify's own apps.
 * The home page teaser reuses `services` (titles and descriptions) from here.
 */
export const servicesFr: ServicesDictionary = {
  hero: {
    badge: 'Services d’applications Shopify',
    title: 'Développement et support d’applications Shopify',
    subtitle:
      'Au-delà de nos propres applications, nous développons des applications Shopify sur mesure, personnalisons des applications existantes, les mettons à niveau vers les dernières API Shopify et corrigeons les bugs qui freinent votre boutique. Pour les applications Gemify comme pour toute autre application Shopify.',
    primaryCta: 'Demander un devis gratuit',
    secondaryCta: 'Notre méthode',
  },

  servicesHeading: 'Ce que nous pouvons faire pour vous',
  servicesIntro:
    'Dites-nous ce dont votre boutique a besoin. Si cela fonctionne sur Shopify et concerne une application, nous pouvons vous aider.',
  services: [
    {
      title: 'Développement d’applications sur mesure',
      description:
        'Besoin d’une fonctionnalité qu’aucune application ne propose ? Nous concevons et développons des applications Shopify adaptées à votre façon de travailler, de l’application privée pour une seule boutique à l’application publique pour le Shopify App Store.',
      items: [
        'Applications sur mesure réservées à votre boutique',
        'Applications publiques prêtes pour la validation du Shopify App Store',
        'Extensions d’application pour l’admin, le checkout et le thème',
        'Intégrations avec des ERP, CRM et autres services',
      ],
    },
    {
      title: 'Personnalisation d’applications',
      description:
        'Vous voulez qu’une application en fasse un peu plus, ou fonctionne un peu autrement ? Nous ajoutons des fonctionnalités et modifions le comportement des applications Gemify et des applications créées par d’autres développeurs.',
      items: [
        'Nouvelles fonctionnalités et nouveaux réglages pour les applications Gemify',
        'Modifications d’applications créées par d’autres développeurs ou agences',
        'Règles, rapports et automatisations sur mesure',
        'Connexions avec les outils que vous utilisez déjà',
      ],
    },
    {
      title: 'Mises à niveau et migrations',
      description:
        'Shopify publie une nouvelle version d’API chaque trimestre et retire les anciennes. Nous gardons votre application à jour avant qu’une dépréciation ne la casse.',
      items: [
        'Mises à niveau de la version de l’API Shopify',
        'Migration de l’API Admin REST vers GraphQL',
        'Mises à jour de Polaris et App Bridge',
        'Mises à niveau du framework et des dépendances',
      ],
    },
    {
      title: 'Correction de bugs et maintenance',
      description:
        'Votre application affiche des erreurs, ralentit ou perd des données entre systèmes ? Nous trouvons la cause, la corrigeons et gardons l’application en bonne santé.',
      items: [
        'Diagnostic et correction des erreurs et plantages',
        'Problèmes de webhooks, de synchronisation et de cohérence des données',
        'Amélioration des performances et de la fiabilité',
        'Maintenance et surveillance continues',
      ],
    },
  ],

  anyApp: {
    heading: 'Ce n’est pas nous qui l’avons créée ? Aucun problème.',
    body: 'Nous travaillons sur les applications Gemify et sur les applications Shopify créées par d’autres développeurs ou agences. Envoyez-nous ce que vous avez, et nous examinerons le code avant d’établir un devis.',
  },

  processHeading: 'Notre méthode',
  processIntro: 'Un processus simple, avec un devis clair avant le début des travaux.',
  steps: [
    {
      title: 'Décrivez votre besoin',
      description: 'Décrivez l’application, la modification ou le bug via le formulaire ci-dessous ou par e-mail.',
    },
    {
      title: 'Recevez un devis gratuit',
      description:
        'Nous étudions votre demande et vous répondons avec un plan, un calendrier et une estimation. Le devis est gratuit.',
    },
    {
      title: 'Nous développons, vous validez',
      description:
        'Nous partageons l’avancement au fil du projet, pour que vous puissiez tester et donner votre avis avant la mise en ligne.',
    },
    {
      title: 'Mise en ligne et support',
      description:
        'Nous vous accompagnons jusqu’à la mise en ligne, et chaque projet comprend une période de support après le lancement pour corriger les bugs dans le travail livré.',
    },
  ],
};
