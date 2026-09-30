import type { HomeDictionary } from '../dictionary-types';

/** Home page copy in German. */
export const homeDe: HomeDictionary = {
  hero: {
    socialProof: 'Über 500 Shopify-Händler vertrauen uns',
    headline: {
      text: 'Kleine Apps, die {emphasis} richtig gut machen.',
      emphasis: 'eine Aufgabe',
    },
    subheadline:
      'Jede App löst genau eine Aufgabe in Ihrem Shopify-Shop, startet kostenlos und wird von dem Entwickler betreut, der sie gebaut hat.',
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
    /** Accessible label for the star rating badge on each app card. */
    ratingLabel: 'Im Shopify App Store mit {rating} von 5 Sternen bewertet',
    /** App groups: store tools use the blue icon plate, AI tools the black one. */
    groups: {
      storeOperations: {
        heading: 'Shop-Betrieb',
        description: 'Bestellungen, Adressen, Versand und Standorte',
      },
      aiShoppers: {
        heading: 'Bereit für KI-Shopping',
        description: 'Damit KI-Assistenten Ihren Shop lesen und den Checkout abschließen können',
      },
    },
    bulkDeleteOrders: {
      title: 'Bulk Delete Orders',
      tagline: 'Testbestellungen und unerwünschte Daten in Sekunden bereinigen',
      features: [
        'Bestellungen, Bestellentwürfe und Kunden in großen Mengen löschen',
        'Storniert Bestellungen automatisch vor dem Löschen, ganz ohne manuelle Schritte',
        'Jeden Vorgang nachverfolgen und CSV-Berichte im Job-Verlauf exportieren',
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
    japanMultiship: {
      title: 'Japan Multiship',
      tagline: 'Eine Geschenkbestellung an viele Empfänger in Japan senden',
      features: [
        'Käufer verteilen Artikel im Warenkorb auf mehrere Empfänger',
        'Jede bezahlte Bestellung wird zu einem Fulfillment pro Zieladresse',
        'Yamato-B2-Cloud-CSV exportieren und Sendungsnummern zurück importieren',
      ],
    },
    checkoutProbe: {
      title: 'Checkout Probe',
      tagline: 'Ihr Checkout bereit für WebMCP-Einkaufsagenten',
      features: [
        'Den Checkout mit einem Klick wie ein KI-Einkaufsagent testen',
        'Sehen, was einen Agenten stoppt oder stoppen kann, mit Lösung',
        'Keine Bestellung: Jeder Test-Checkout wird abgebrochen',
      ],
    },
    bestStoreLocator: {
      title: 'Best Store Locator',
      tagline: 'Ihre Filialen und Händler auf einer Karte, ohne API-Schlüssel',
      features: [
        'Integrierte Karten und Adressprüfung, ohne Google-API-Schlüssel',
        'CSV-Import mit vollständiger Vorschau vor dem Speichern',
        'Kunden suchen nach Stadt oder PLZ und sehen, wer gerade geöffnet hat',
      ],
    },
  },

  testimonials: {
    badge: '5,0 im Shopify App Store',
    heading: 'Händler vertrauen uns',
    subheading: 'Das sagen Store-Betreiber über unsere Apps',
    verified: 'Verifiziert',
    merchantRole: 'Shopify-Händler',
    translatedNote: 'Aus dem Englischen übersetzt',
    /** Quotation marks around review text in this language. */
    quoteMarks: { open: '„', close: '“' },
    reviews: {
      barbellStandard: {
        quote: 'Ihre App hat meinem Team etwa 8 Stunden Klickarbeit in Shopify erspart und daraus ein 5-Minuten-Projekt gemacht.',
        highlight: '8 Stunden → 5 Minuten',
      },
      yubiBar: {
        quote: 'Tolle App. Ich musste aus Amazon importierte Bestellungen entfernen, die meine Analysen durcheinanderbrachten. Der Shopify-Support sagte mir, dass sich ausgeführte Bestellungen nicht entfernen lassen. Dann habe ich diese App benutzt, und es hat wie von Zauberhand funktioniert. Danke an das ganze Team von GEMIFY.',
        highlight: 'Wie von Zauberhand',
      },
      strikeSports: {
        quote: 'Tolle App und noch besserer Kundensupport! Die App läuft reibungslos und hält genau, was sie verspricht. Das Support-Team antwortet sehr schnell und ist professionell und hilfsbereit. Sehr zu empfehlen!',
        highlight: 'Noch besserer Kundensupport',
      },
      mooMenn: {
        quote: 'Sean war hervorragend und hat weit mehr getan als nötig, um alle Bestellungen sofort im Hintergrund zu löschen. Sehr zu empfehlen, top Support!',
        highlight: 'Weit mehr als nötig',
      },
      amyDepot: {
        quote: 'Macht genau, was versprochen wird, und das unglaublich gut zu einem unglaublichen Preis. Ein Volltreffer. Danke an das Team von Gemify. Genau das habe ich gebraucht!',
        highlight: 'Ein Volltreffer',
      },
    },
  },

  /** Core values. Each proof line must stay true of the shipped apps. */
  values: {
    eyebrow: 'Unsere Werte',
    heading: 'Vier Versprechen hinter jeder App',
    subheading: 'Jedes davon halten unsere Apps schon heute.',
    proofLabel: 'Nachweis',
    items: [
      {
        title: 'Eine Aufgabe, richtig gut',
        description: 'Jede App löst ein Problem von Händlern und bleibt so klein, dass Sie sie in einer Minute verstehen.',
        proof: 'Sechs Apps, sechs Aufgaben: Bestellungen löschen, Adressen schützen, llms.txt veröffentlichen, Geschenkbestellungen aufteilen, Filialen finden und Checkouts durch Agenten testen.',
      },
      {
        title: 'Sicherheit vor Tempo',
        description: 'Unsere Apps zeigen Ihnen, was sich ändert, und halten fest, was sich geändert hat.',
        proof: 'Job History mit CSV-Berichten in Bulk Delete Orders, eine vollständige Vorschau vor einem Import in Best Store Locator, und Checkout Probe gibt nie eine Bestellung auf.',
      },
      {
        title: 'Klare Worte, echte Preise',
        description: 'Wir schreiben so, wie Händler sprechen. Der Eintrag im Shopify App Store ist die Preisliste.',
        proof: 'Jede App startet mit einem kostenlosen Tarif, und unsere Datenschutzerklärung ist in einfacher Sprache geschrieben.',
      },
      {
        title: 'Menschen antworten',
        description: 'Jede Support-Nachricht liest und beantwortet ein Mensch. Keine Bots.',
        proof: 'Händler nennen unseren Support in ihren App-Store-Bewertungen beim Namen.',
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

  /** Teaser for the services page; the cards reuse the services namespace. */
  services: {
    badge: 'Services',
    heading: 'Sie brauchen etwas Individuelles?',
    subheading:
      'Neben unseren eigenen Apps entwickeln, passen an, aktualisieren und reparieren wir Shopify-Apps, auch solche, die nicht von uns stammen.',
    cta: 'Alle Services ansehen',
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
    /** Shown under the error; `{email}` becomes a mailto link. */
    errorEmailFallback: 'Sie können uns auch direkt per E-Mail an {email} schreiben.',
    securityNote: 'Ihre Daten sind sicher und werden niemals weitergegeben',
  },
};
