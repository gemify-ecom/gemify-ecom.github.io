import type { HomeDictionary } from '../dictionary-types';

/** Home page copy in German. */
export const homeDe: HomeDictionary = {
  skipToContent: 'Zum Hauptinhalt springen',

  hero: {
    socialProof: 'Über 500 Shopify-Händler vertrauen uns',
    headline: 'Apps, die Ihrem Shopify-Store wirklich weiterhelfen',
    subheadline:
      'Einfache, leistungsstarke Tools von Entwicklern, die die Anforderungen von Händlern kennen. Kein Ballast, nur Ergebnisse.',
    primaryCta: 'Unsere Apps entdecken',
    secondaryCta: 'Kontakt aufnehmen →',
    ratingBadge: '5 Sterne im Shopify App Store',
  },

  apps: {
    badge: 'Installation kostenlos',
    heading: 'Unsere Shopify-Apps',
    subheading: 'Einfache, leistungsstarke Tools, die echte Probleme von Händlern lösen',
    comingSoon: 'Demnächst verfügbar',
    installs: '{count} Installationen',
    bulkDeleteOrders: {
      title: 'Bulk Delete Orders',
      tagline: 'Testbestellungen und unerwünschte Daten in Sekunden bereinigen',
      features: [
        'Bestellungen filtern und gezielt für die Massenlöschung auswählen',
        'Storniert Bestellungen automatisch vor dem Löschen, ganz ohne manuelle Schritte',
        'Vorgänge nachverfolgen und Berichte im Job-Verlauf exportieren',
      ],
    },
    defaultAddressLock: {
      title: 'Default Address Lock',
      tagline: 'Standardadressen Ihrer Kunden bleiben auch nach Bestellungen erhalten',
      features: [
        'Verhindert, dass Shopify Standardadressen überschreibt',
        'Intelligente Unterscheidung zwischen bestellbedingten und manuellen Änderungen',
        'Ideal für Geschenkshops und B2B-Händler',
      ],
    },
    llmsTxt: {
      title: 'LLMs-full.txt',
      tagline: 'Machen Sie Ihren Store für ChatGPT, Claude und Gemini lesbar',
      features: [
        'agents.md, llms.txt und llms-full.txt mit einem Klick erzeugen',
        'Selbst festlegen, welche Produkte, Kategorien, Seiten und Artikel enthalten sind',
        'Von Shopify direkt unter /llms.txt ausgeliefert, ohne zusätzliches Hosting',
      ],
    },
  },

  testimonials: {
    badge: '5,0 im Shopify App Store',
    heading: 'Händler vertrauen uns',
    subheading: 'Das sagen Store-Betreiber über unsere Apps',
    verified: 'Verifiziert',
    merchantRole: 'Shopify-Händler',
  },

  whyChoose: {
    heading: 'Warum Händler sich für Gemify entscheiden',
    subheading: 'Tools, die auf Ihren Erfolg ausgerichtet sind',
    benefits: [
      {
        title: 'Shopify-Expertise',
        description:
          'Entwickelt von zertifizierten Shopify-Experten, die Ihre täglichen Herausforderungen kennen.',
      },
      {
        title: 'Sicherheit auf Unternehmensniveau',
        description: 'Sicherheit auf Bankenniveau schützt Ihre Store-Daten rund um die Uhr.',
      },
      {
        title: 'Schneller Support',
        description:
          'Echte Menschen stehen Ihnen zur Seite. Keine Bots, sondern persönliche Unterstützung.',
      },
    ],
  },

  about: {
    heading: 'Über Gemify',
    intro:
      'Gegründet von erfahrenen Shopify-Entwicklern, die die Herausforderungen von Händlern aus der Praxis kennen.',
    mission: {
      text: 'Unsere Mission ist einfach: {emphasis}. Keine überladenen Funktionen. Keine verwirrenden Oberflächen. Nur klare Lösungen, mit denen Ihr Geschäft wächst.',
      emphasis: 'intuitive, zuverlässige Apps',
    },
    closing: {
      text: 'Jede App entwickeln wir mit derselben Sorgfalt, die wir für unsere eigenen Stores verlangen würden. Wenn Sie sich für Gemify entscheiden, entscheiden Sie sich für einen {emphasis}.',
      emphasis: 'Partner, der sich Ihrem Erfolg verschreibt',
    },
  },

  contact: {
    heading: 'Kontakt aufnehmen',
    responseTime: 'Wir antworten in der Regel innerhalb von 24 Stunden',
    successTitle: 'Vielen Dank!',
    successBody: 'Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns in Kürze bei Ihnen!',
    successCta: 'Entdecken Sie unsere Apps, während Sie warten →',
    nameLabel: 'Name',
    namePlaceholder: 'Ihr Name',
    emailLabel: 'E-Mail',
    emailPlaceholder: 'name@beispiel.de',
    subjectLabel: 'Betreff',
    subjectPlaceholder: 'Wie können wir helfen?',
    messageLabel: 'Nachricht',
    messagePlaceholder: 'Beschreiben Sie Ihre Frage oder Ihr Feedback ...',
    submit: 'Nachricht senden',
    submitting: 'Wird gesendet ...',
    submitted: 'Nachricht gesendet',
    errorAlert:
      'Beim Senden Ihrer Nachricht ist ein Problem aufgetreten. Bitte versuchen Sie es erneut.',
    securityNote: 'Ihre Daten sind sicher und werden niemals weitergegeben',
  },
};
