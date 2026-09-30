import type { ReactNode } from 'react';
import { Home, Shield, Check, Activity } from 'lucide-react';
import { Layout } from '../components/layout';
import { AppPageFeatureGrid } from '../components/app-page-feature-grid';
import { ClosingCtaBand } from '../components/closing-cta-band';
import { PageHero } from '../components/page-hero';
import { SectionHeading } from '../components/section-heading';
import { PRIMARY_BUTTON_ON_INK, TEXT_LINK_ON_INK } from '../components/button-classes';
import { useTranslations } from '../i18n/use-locale';
import { LocalizedLink } from '../i18n/localized-link';
import { interpolate, renderTemplate } from '../i18n/rich-text';
import { GEMIFY_APPS } from '../site/gemify-apps';

const APP_STORE_URL = GEMIFY_APPS.defaultAddressLock.appStoreUrl;

const ICON_PROPS = { className: 'w-6 h-6 text-signal', strokeWidth: 1.75, 'aria-hidden': true } as const;

/** Address labels A and B are rendered as bold markers inside the sentences. */
const addressA = <span className="text-signal font-bold">A</span>;
const addressB = <span className="text-fg font-bold">B</span>;
const boldB = <span className="font-bold">B</span>;
const boldA = <span className="font-bold">A</span>;

interface FlowColumnProps {
  title: string;
  /** Mono label color: muted for the "without" column, signal for the "with" column. */
  titleClassName: string;
  steps: ReactNode[];
  stepLabel: (number: number) => string;
  resultTitle: string;
  resultBody: string;
}

/** One side of the before/after comparison: numbered steps, then the outcome. */
function FlowColumn({ title, titleClassName, steps, stepLabel, resultTitle, resultBody }: FlowColumnProps) {
  return (
    <div className="flex flex-col gap-6 bg-white px-6 pt-6 pb-7">
      <h3 className={`label-mono ${titleClassName}`}>{title}</h3>
      <ol className="grid gap-5">
        {steps.map((step, index) => (
          <li key={index} className="grid gap-1">
            <p className="label-mono text-muted">{stepLabel(index + 1)}</p>
            <p className="text-[#39414F] leading-relaxed">{step}</p>
          </li>
        ))}
      </ol>
      <div className="mt-auto grid gap-1 border-t border-line pt-5">
        <p className="font-heading text-[1.1rem] tracking-[-0.01em] text-fg">{resultTitle}</p>
        <p className="text-[#39414F] leading-relaxed">{resultBody}</p>
      </div>
    </div>
  );
}

function AddressFlowDiagram() {
  const { defaultAddressLock } = useTranslations('appPages');
  const t = defaultAddressLock.diagram;
  const stepLabel = (number: number) => interpolate(t.stepLabel, { number });

  const sharedSteps = [
    renderTemplate(t.step1, { a: addressA }),
    renderTemplate(t.step2, { b: addressB }),
  ];

  return (
    <section className="py-16 md:py-24 px-6 bg-mist">
      <div className="max-w-[1120px] mx-auto grid gap-10">
        <SectionHeading heading={t.heading} />

        {/* Hairline grid: the 1px gap shows the line color between the two columns */}
        <div className="grid md:grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line">
          <FlowColumn
            title={t.withoutApp}
            titleClassName="text-muted"
            steps={[...sharedSteps, renderTemplate(t.step3Without, { b: boldB })]}
            stepLabel={stepLabel}
            resultTitle={t.resultWithoutTitle}
            resultBody={t.resultWithoutBody}
          />
          <FlowColumn
            title={t.withApp}
            titleClassName="text-signal"
            steps={[...sharedSteps, renderTemplate(t.step3With, { a: boldA })]}
            stepLabel={stepLabel}
            resultTitle={t.resultWithTitle}
            resultBody={t.resultWithBody}
          />
        </div>

        {/* Summary */}
        <div className="grid gap-3">
          <h3 className="label-mono text-muted">{t.summaryHeading}</h3>
          <ul className="grid sm:grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line">
            <li className="bg-white px-6 py-5 text-muted leading-relaxed">{t.summaryNegative}</li>
            <li className="bg-white px-6 py-5 font-semibold text-fg leading-relaxed">{t.summaryPositive}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export function DefaultAddressLockPage() {
  const { defaultAddressLock: page } = useTranslations('appPages');
  const { actions } = useTranslations('common');

  const featureIcons = [
    <Shield key="shield" {...ICON_PROPS} />,
    <Home key="home" {...ICON_PROPS} />,
    <Activity key="activity" {...ICON_PROPS} />,
    <Check key="check" {...ICON_PROPS} />,
  ];

  return (
    <Layout showFooterCTA={false}>
      <PageHero icon="/resources/default_address_lock-192.png" title={page.title} lede={page.tagline}>
        <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className={PRIMARY_BUTTON_ON_INK}>
          {actions.installFree}
        </a>
        <LocalizedLink to="/#contact" className={TEXT_LINK_ON_INK}>
          {actions.contactUs}
        </LocalizedLink>
      </PageHero>

      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto grid gap-10">
          <SectionHeading heading={page.problemHeading} lede={page.problemIntro} />
          <AppPageFeatureGrid items={page.problems} columns={2} dense />
        </div>
      </section>

      <AddressFlowDiagram />

      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto grid gap-10">
          <SectionHeading heading={page.howItWorksHeading} lede={page.howItWorksIntro} />
          <AppPageFeatureGrid items={page.features} leads={featureIcons} columns={2} />
        </div>
      </section>

      <ClosingCtaBand heading={page.ctaHeading} body={page.ctaBody}>
        <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className={PRIMARY_BUTTON_ON_INK}>
          {actions.installFreeOnShopify}
        </a>
        <LocalizedLink to="/faq#default-address-lock" className={TEXT_LINK_ON_INK}>
          {actions.readFaq}
        </LocalizedLink>
      </ClosingCtaBand>
    </Layout>
  );
}
