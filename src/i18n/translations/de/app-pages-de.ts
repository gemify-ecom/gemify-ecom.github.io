import type { AppPagesDictionary } from '../dictionary-types';

/** App detail and screencast page copy in German. */
export const appPagesDe: AppPagesDictionary = {
  bulkDeleteOrders: {
    title: 'Bulk Delete Orders',
    tagline:
      'Räumen Sie Ihren Shopify-Store auf: Testbestellungen, alte Daten und unerwünschte Bestellungen löschen Sie in großen Mengen, mit leistungsstarken Filtern und automatischer Stornierung.',
    problemHeading: 'Das Problem',
    problemIntro:
      'Shopify bietet keine native Möglichkeit, Bestellungen in großen Mengen zu löschen. Hunderte oder Tausende Bestellungen einzeln von Hand zu löschen, kostet viel Zeit und ist fehleranfällig.',
    problems: [
      {
        title: 'Testbestellungen verfälschen Ihre Daten',
        description:
          'Entwicklung und Tests hinterlassen fiktive Bestellungen, die Ihre Analysen verwässern und den Blick auf die tatsächliche Geschäftsentwicklung verstellen.',
      },
      {
        title: 'Aufräumen nach der Migration',
        description:
          'Nach dem Umzug von einer anderen Plattform sind womöglich Bestellungen importiert worden, die Sie nicht mehr benötigen und entfernen möchten.',
      },
      {
        title: 'Doppelte Bestellungen',
        description:
          'Systemfehler oder Probleme bei Integrationen können doppelte Bestellungen erzeugen, die effizient bereinigt werden müssen.',
      },
      {
        title: 'DSGVO und Datenschutz',
        description:
          'Datenschutzvorschriften können verlangen, alte Kundendaten einschließlich Bestelldatensätzen nach einer bestimmten Frist zu löschen.',
      },
    ],
    howItWorksHeading: 'So funktioniert es',
    howItWorksIntro:
      'Unsere App macht das Löschen großer Bestellmengen einfach, sicher und nachvollziehbar. Filtern Sie Bestellungen präzise und löschen Sie sie mit einem einzigen Klick.',
    features: [
      {
        title: 'Leistungsstarke Filter',
        description:
          'Filtern Sie Bestellungen nach Zeitraum, Status, Tags, Kunde, Zahlungsstatus und weiteren Kriterien. So treffen Sie genau die Bestellungen, die Sie löschen möchten.',
      },
      {
        title: 'Automatisch stornieren und löschen',
        description:
          'Bestellungen werden vor dem Löschen automatisch storniert, ganz ohne manuelle Schritte. Bereits ausgeführte Bestellungen werden sauber behandelt.',
      },
      {
        title: 'Job-Verlauf',
        description:
          'Verfolgen Sie alle Löschvorgänge mit detaillierten Protokollen. Exportieren Sie Berichte für Compliance- und Auditzwecke.',
      },
      {
        title: 'Berichte exportieren',
        description:
          'Erstellen Sie detaillierte Berichte über gelöschte Bestellungen für Ihre Unterlagen. Ideal für Compliance-Nachweise und Prüfpfade.',
      },
      {
        title: 'Sichere Vorschau vor dem Löschen',
        description:
          'Sehen Sie sich Bestellungen vor dem Löschen an. Sie erkennen genau, was gelöscht wird, und bestätigen erst danach.',
      },
    ],
    ctaHeading: 'Bereit, Ihren Store aufzuräumen?',
    ctaBody:
      'Installieren Sie Bulk Delete Orders noch heute und sparen Sie sich Stunden manueller Arbeit. Für den Einstieg steht ein kostenloser Tarif bereit.',
  },

  defaultAddressLock: {
    title: 'Default Address Lock',
    tagline:
      'Verhindern Sie, dass Shopify die Standardadressen Ihrer Kunden überschreibt, wenn diese Bestellungen an andere Adressen versenden.',
    problemHeading: 'Das Problem',
    problemIntro:
      'Seit 2015 ändert Shopify die Standardadresse eines Kunden automatisch, sobald dieser mit einer abweichenden Lieferadresse bestellt. Für Händler sorgt das für erheblichen Ärger.',
    problems: [
      {
        title: 'Geschenkshops',
        description:
          'Kunden, die Geschenke an Freunde und Familie senden, stellen fest, dass sich ihre Standardadresse ständig in die Adresse der beschenkten Person ändert.',
      },
      {
        title: 'B2B-Händler',
        description:
          'Geschäftskunden, die an ihre eigenen Kunden liefern lassen, behalten falsche Standardadressen zurück, was künftige Bestellungen stört.',
      },
      {
        title: 'Shops mit CRM-Anbindung',
        description:
          'Stores, die für Marketing oder Fulfillment auf korrekte Kundendaten angewiesen sind, kämpfen mit Problemen bei der Datenintegrität.',
      },
      {
        title: 'Abo-Geschäfte',
        description:
          'Eine einmalige Geschenksendung kann die Lieferadresse des Abos überschreiben, sodass wiederkehrende Sendungen an den falschen Ort gehen.',
      },
    ],
    howItWorksHeading: 'So funktioniert es',
    howItWorksIntro:
      'Unsere App überwacht Adressänderungen intelligent und stellt die ursprüngliche Standardadresse automatisch wieder her, sobald Shopify sie überschreiben will.',
    features: [
      {
        title: 'Intelligente Erkennung',
        description:
          'Unterscheidet zwischen bestellbedingten Änderungen und bewussten manuellen Aktualisierungen. Manuelle Änderungen bleiben erhalten.',
      },
      {
        title: 'Automatische Wiederherstellung',
        description:
          'Überschreibt Shopify nach einer Bestellung eine Standardadresse, stellen wir die ursprüngliche Adresse automatisch wieder her.',
      },
      {
        title: 'Datenschutz zuerst',
        description:
          'Wir speichern ausschließlich Adress-IDs, niemals die tatsächlichen Adressinhalte. Ihre Kundendaten bleiben sicher in Shopify.',
      },
    ],
    diagram: {
      heading: 'Default Address Lock',
      withoutApp: 'Ohne unsere App',
      withApp: 'Mit unserer App',
      stepLabel: 'Schritt {number}',
      step1: 'Die Standardadresse ist {a} (Ihre Privatadresse)',
      step2: 'Sie senden ein Geschenk an {b} (Adresse einer befreundeten Person)',
      step3Without: 'Shopify ändert die Standardadresse in {b}',
      step3With: 'Die App erkennt die Änderung und setzt sie auf {a} zurück',
      resultWithoutTitle: 'Die Standardadresse ist jetzt falsch!',
      resultWithoutBody: 'Künftige Bestellungen gehen möglicherweise an den falschen Ort',
      resultWithTitle: 'Die Standardadresse bleibt korrekt!',
      resultWithBody: 'Ihre Privatadresse bleibt geschützt',
      summaryHeading: 'Was wir tun',
      summaryNegative: 'Wir ändern keine Bestelladressen',
      summaryPositive: 'Wir schützen Ihre Standardadresse',
    },
    ctaHeading: 'Bereit, die Adressen Ihrer Kunden zu schützen?',
    ctaBody:
      'Installieren Sie Default Address Lock noch heute und verhindern Sie, dass Shopify die Standardadressen Ihrer Kunden überschreibt. Für kleine Stores steht ein kostenloser Tarif bereit.',
  },

  llmsTxt: {
    title: 'LLMs-full.txt',
    tagline:
      'Machen Sie Ihren Shopify-Store bereit für KI. Erzeugen Sie {llmsTxt} und {llmsFullTxt}, damit KI-Assistenten Ihre Produkte, Kategorien und Seiten verstehen.',
    problemHeading: 'Warum Ihr Store llms.txt braucht',
    problemIntro:
      'Der {standardLink} hilft KI-Modellen, Ihre Website zu verstehen. So wie {robotsTxt} Suchmaschinen leitet, leitet {llmsTxt} KI-Assistenten und hilft ihnen, Ihre Produkte zu empfehlen und Kundenfragen korrekt zu beantworten.',
    standardLinkLabel: 'llms.txt-Standard',
    problems: [
      {
        title: 'Käufer fragen zuerst die KI',
        description:
          'Immer mehr Kunden recherchieren Produkte über ChatGPT, Claude und Gemini. Ohne eine saubere Zusammenfassung Ihres Katalogs arbeiten diese Assistenten mit dem, was sie zufällig auslesen können.',
      },
      {
        title: 'Storefront-HTML ist unübersichtlich',
        description:
          'Theme-Markup, Skripte und Navigation überdecken die entscheidenden Details. Modelle lesen Markdown deutlich zuverlässiger als eine gerenderte Storefront-Seite.',
      },
      {
        title: 'Handarbeit lässt sich nicht skalieren',
        description:
          'Eine handgeschriebene Datei über Hunderte Produkte, Kategorien und Blog-Artikel hinweg zu pflegen, ist mühsam und veraltet, sobald sich Ihr Katalog ändert.',
      },
      {
        title: 'Das Hosting steht im Weg',
        description:
          'Der Standard erwartet die Datei auf Ihrer Root-Domain. Sie über einen externen Host oder einen App-Proxy-Pfad auszuliefern, bedeutet zusätzliche Infrastruktur und Weiterleitungen.',
      },
    ],
    featuresHeading: 'Das erhalten Sie',
    featuresIntro:
      'Inhalte auswählen, beide Dateien erzeugen und von Shopify auf Ihrer eigenen Domain ausliefern lassen. Kein zusätzliches Hosting, keine manuelle Bearbeitung.',
    features: [
      {
        title: 'Erzeugung mit einem Klick',
        description:
          'Erzeugen Sie llms.txt und llms-full.txt direkt aus Ihrem Dashboard. Wählen Sie genau aus, welche Produkte, Kategorien, Seiten und Artikel enthalten sein sollen.',
      },
      {
        title: 'Individuelle Ausgabe',
        description:
          'Ordnen Sie Abschnitte neu an und passen Sie die Formatierung Ihrer llms-Dateien an, damit die Ausgabe Ihren Store so beschreibt, wie Sie es möchten.',
      },
      {
        title: 'Native Auslieferung',
        description:
          'Die Dateien werden in Ihrem Theme veröffentlicht und von Shopify unter /llms.txt und /llms-full.txt ausgeliefert, ohne zusätzliches Hosting.',
      },
      {
        title: 'Sie bestimmen die Inhalte',
        description:
          'Nehmen Sie Produkte, Kategorien, Seiten, Blog-Artikel und Richtlinien auf. Lassen Sie alles weg, was nicht für KI-Assistenten zusammengefasst werden soll.',
      },
      {
        title: 'Sauberes Markdown',
        description:
          'Store-Daten werden über die Shopify GraphQL API abgerufen und in sauberes Markdown umgewandelt, das Modelle ohne Raten auswerten können.',
      },
    ],
    howItWorksHeading: 'So funktioniert es',
    howItWorksIntro: 'Drei Schritte von der Installation zur KI-lesbaren Storefront.',
    steps: [
      {
        title: 'Installieren und einrichten',
        description:
          'Wählen Sie aus, welche Inhalte aufgenommen werden: Produkte, Kategorien, Seiten, Blog-Artikel und Richtlinien.',
      },
      {
        title: 'Dateien erzeugen',
        description:
          'Auf Erzeugen klicken. Die App ruft Ihre Store-Daten per GraphQL ab und wandelt sie in sauberes Markdown um.',
      },
      {
        title: 'Bereit für KI',
        description:
          'Ihre llms.txt ist nun öffentlich zugänglich. KI-Assistenten wie ChatGPT, Claude und Gemini können Ihren Store lesen und verstehen.',
      },
    ],
    ctaHeading: 'Bereit für den KI-Auftritt?',
    ctaBody:
      'Installieren Sie LLMs-full.txt noch heute und geben Sie KI-Assistenten ein zutreffendes Bild Ihres Stores. Installation kostenlos.',
  },
};
