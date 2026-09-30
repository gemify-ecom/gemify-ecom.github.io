import type { ServicesDictionary } from '../dictionary-types';

/**
 * Services page copy in German: custom work beyond Gemify's own apps.
 * The home page teaser reuses `services` (titles and descriptions) from here.
 */
export const servicesDe: ServicesDictionary = {
  hero: {
    badge: 'Shopify-App-Services',
    title: 'Shopify-App-Entwicklung & Support',
    subtitle:
      'Neben unseren eigenen Apps entwickeln wir individuelle Shopify-Apps, passen bestehende Apps an, aktualisieren sie auf die neuesten Shopify-APIs und beheben Fehler, die Ihren Store ausbremsen. Für Gemify-Apps und jede andere Shopify-App.',
    primaryCta: 'Kostenloses Angebot anfordern',
    secondaryCta: 'So arbeiten wir',
  },

  servicesHeading: 'Was wir für Sie tun können',
  servicesIntro:
    'Sagen Sie uns, was Ihr Store braucht. Wenn es auf Shopify läuft und eine App betrifft, können wir helfen.',
  services: [
    {
      title: 'Individuelle App-Entwicklung',
      description:
        'Sie brauchen eine Funktion, die keine App bietet? Wir konzipieren und entwickeln Shopify-Apps rund um Ihre Abläufe, von der privaten App für einen Store bis zur öffentlichen App für den Shopify App Store.',
      items: [
        'Individuelle Apps nur für Ihren Store',
        'Öffentliche Apps, bereit für die Prüfung im Shopify App Store',
        'App-Erweiterungen für Admin, Checkout und Theme',
        'Integrationen mit ERP, CRM und anderen Diensten',
      ],
    },
    {
      title: 'App-Anpassung',
      description:
        'Eine App soll etwas mehr können oder etwas anders funktionieren? Wir ergänzen Funktionen und ändern das Verhalten von Gemify-Apps und von Apps anderer Entwickler.',
      items: [
        'Neue Funktionen und Einstellungen für Gemify-Apps',
        'Änderungen an Apps anderer Entwickler oder Agenturen',
        'Eigene Regeln, Berichte und Automatisierungen',
        'Anbindung an die Tools, die Sie bereits nutzen',
      ],
    },
    {
      title: 'Upgrades & Migrationen',
      description:
        'Shopify veröffentlicht jedes Quartal eine neue API-Version und stellt alte ein. Wir halten Ihre App aktuell, bevor eine Abkündigung sie lahmlegt.',
      items: [
        'Upgrades der Shopify-API-Version',
        'Migration von der REST- zur GraphQL-Admin-API',
        'Updates für Polaris und App Bridge',
        'Upgrades von Frameworks und Abhängigkeiten',
      ],
    },
    {
      title: 'Fehlerbehebung & Wartung',
      description:
        'Ihre App wirft Fehler, läuft langsam oder verliert Daten zwischen Systemen? Wir finden die Ursache, beheben sie und halten die App stabil.',
      items: [
        'Fehler und Abstürze analysieren und beheben',
        'Probleme mit Webhooks, Synchronisierung und Datenkonsistenz',
        'Verbesserungen bei Leistung und Zuverlässigkeit',
        'Laufende Wartung und Überwachung',
      ],
    },
  ],

  anyApp: {
    heading: 'Nicht von uns entwickelt? Kein Problem.',
    body: 'Wir arbeiten an Gemify-Apps und an Shopify-Apps anderer Entwickler oder Agenturen. Senden Sie uns, was Sie haben, und wir prüfen den Code, bevor wir ein Angebot machen.',
  },

  processHeading: 'So arbeiten wir',
  processIntro: 'Ein einfacher Ablauf, mit einem klaren Angebot, bevor die Arbeit beginnt.',
  steps: [
    {
      title: 'Beschreiben Sie Ihr Anliegen',
      description: 'Beschreiben Sie die App, die Änderung oder den Fehler über das Formular unten oder per E-Mail.',
    },
    {
      title: 'Kostenloses Angebot erhalten',
      description:
        'Wir prüfen Ihre Anfrage und antworten mit einem Plan, einem Zeitrahmen und einer Kostenschätzung. Das Angebot ist kostenlos.',
    },
    {
      title: 'Wir entwickeln, Sie prüfen',
      description:
        'Wir teilen den Fortschritt laufend, damit Sie die Arbeit vor dem Start testen und Feedback geben können.',
    },
    {
      title: 'Start und Support',
      description:
        'Wir begleiten Sie beim Go-live, und jedes Projekt umfasst eine Support-Phase nach dem Start, in der wir Fehler in der gelieferten Arbeit beheben.',
    },
  ],
};
