import type { SeoDictionary } from '../dictionary-types';

/**
 * Search and social metadata in German: one title and description per page,
 * written into `<head>` by the prerender step and on client-side navigation.
 * App names, plan names, and prices are not translated.
 */
export const seoDe: SeoDictionary = {
  /** Label for the first breadcrumb, pointing at the home page. */
  breadcrumbHome: 'Startseite',

  pages: {
    home: {
      title: 'Gemify | Shopify-Apps: Bulk Delete Orders, Address Lock, llms.txt',
      description:
        'Shopify-Apps für echte Händlerprobleme: Bestellungen und Kunden in großen Mengen löschen, Standardadressen schützen, llms.txt für KI. Kostenlose Tarife.',
    },
    faq: {
      title: 'FAQ: Gemify Shopify-Apps, Preise und Datenschutz | Gemify',
      description:
        'Antworten zu Bulk Delete Orders, Default Address Lock und LLMs-full.txt: Funktionen, Preise, Abrechnung, Datenschutz und Kompatibilität mit Shopify-Tarifen.',
    },
    services: {
      title: 'Shopify-App-Entwicklung, Anpassung & Fehlerbehebung | Gemify',
      description:
        'Individuelle Shopify-App-Entwicklung, App-Anpassung, API-Versions-Upgrades und Fehlerbehebung für Gemify-Apps oder jede Shopify-App. Kostenloses Angebot und Support.',
    },
    privacyPolicy: {
      title: 'Datenschutzerklärung | Gemify',
      description:
        'Wie die Shopify-Apps von Gemify Händler- und Kundendaten erheben, nutzen, speichern und schützen, inklusive DSGVO- und CPRA-Rechten sowie Anfragen zu Kundendaten.',
    },
    bulkDeleteOrders: {
      title: 'Shopify-Bestellungen löschen, auch Entwürfe und Kunden | Gemify',
      description:
        'Shopify-Bestellungen, Entwürfe und Kunden massenhaft löschen: Filter, Auto-Stornierung, Echtzeit-Job-Verlauf, CSV. Kostenloser Tarif, $36/Jahr unbegrenzt.',
    },
    defaultAddressLock: {
      title: 'Default Address Lock: Shopify-Standardadresse schützen | Gemify',
      description:
        'Verhindert, dass Shopify die Standardadresse bei Bestellungen an andere Adressen ersetzt. Intelligente Erkennung, Echtzeit-Wiederherstellung, Dashboard. Gratis.',
    },
    llmsTxt: {
      title: 'LLMs-full.txt: llms.txt und agents.md für Shopify | Gemify',
      description:
        'agents.md, llms.txt und llms-full.txt auf Ihrer Shopify-Domain: So verstehen ChatGPT, Claude und Gemini Ihren Katalog. Geplante Updates. Kostenloser Plan.',
    },
    japanMultiship: {
      title: 'Japan Multiship: Shopify-Bestellung an viele Empfänger | Gemify',
      description:
        'Bald im Shopify App Store. Eine Bestellung an bis zu 20 Empfänger in Japan, einmal bezahlt, mit Versand pro Ziel und Yamato B2 Cloud CSV-Export.',
    },
    bestStoreLocator: {
      title: 'Best Store Locator: Filialkarte für Shopify ohne API-Key | Gemify',
      description:
        'Bald im Shopify App Store. Durchsuchbare Karte Ihrer Filialen und Händler: integrierte Karten, CSV-Import mit Vorschau, Suche nach geöffneten Filialen.',
    },
    checkoutProbe: {
      title: 'Checkout Probe: WebMCP-Checkout-Test für Shopify | Gemify',
      description:
        'Bald im Shopify App Store. Machen Sie Ihren Checkout bereit für WebMCP: Testen Sie ihn wie ein KI-Shopping-Agent und erhalten Sie für jedes Problem eine Lösung.',
    },
    notFound: {
      title: 'Seite nicht gefunden | Gemify',
      description:
        'Die gesuchte Seite existiert nicht. Entdecken Sie stattdessen die Shopify-Apps von Gemify.',
    },
  },

  /** Screencast pages are not indexed; `{app}` is the app name. */
  screencast: {
    title: '{app} Screencast-Demo | Gemify',
    description: 'Sehen Sie sich eine kurze Screencast-Demo von {app} an, einer Shopify-App von Gemify.',
  },
  help: {
    title: '{app} Hilfe | Gemify',
    description: 'So richten Sie {app}, eine Shopify-App von Gemify, ein und nutzen sie.',
  },
};
