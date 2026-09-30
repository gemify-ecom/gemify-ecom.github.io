import { CalendarClock, FileText, ListChecks, Server, Settings2, Zap } from 'lucide-react';
import { Layout } from '../components/layout';
import { AppPageFeatureGrid } from '../components/app-page-feature-grid';
import { ClosingCtaBand } from '../components/closing-cta-band';
import { PageHero } from '../components/page-hero';
import { SectionHeading } from '../components/section-heading';
import { PRIMARY_BUTTON_ON_INK, TEXT_LINK, TEXT_LINK_ON_INK } from '../components/button-classes';
import { useTranslations } from '../i18n/use-locale';
import { LocalizedLink } from '../i18n/localized-link';
import { renderTemplate } from '../i18n/rich-text';
import { GEMIFY_APPS } from '../site/gemify-apps';

const APP_URL = GEMIFY_APPS.llmsTxt.appStoreUrl;
const STANDARD_URL = 'https://llmstxt.org';

const ICON_PROPS = { className: 'w-6 h-6 text-signal', strokeWidth: 1.75, 'aria-hidden': true } as const;

export function LlmsTxtPage() {
  const { llmsTxt: page } = useTranslations('appPages');
  const { actions } = useTranslations('common');

  const featureIcons = [
    <Zap key="zap" {...ICON_PROPS} />,
    <Settings2 key="settings" {...ICON_PROPS} />,
    <Server key="server" {...ICON_PROPS} />,
    <ListChecks key="list" {...ICON_PROPS} />,
    <CalendarClock key="calendar" {...ICON_PROPS} />,
    <FileText key="file" {...ICON_PROPS} />,
  ];

  // Step numbers as mono labels in place of the old filled circles.
  const stepLeads = page.steps.map((step, index) => (
    <span key={step.title} className="label-mono text-signal">
      {String(index + 1).padStart(2, '0')}
    </span>
  ));

  // Inline code and links referenced by the translated sentences.
  const taglineNodes = {
    agentsMd: <code className="font-mono text-white">agents.md</code>,
    llmsTxt: <code className="font-mono text-white">llms.txt</code>,
    llmsFullTxt: <code className="font-mono text-white">llms-full.txt</code>,
  };
  const introNodes = {
    standardLink: (
      <a href={STANDARD_URL} target="_blank" rel="noopener noreferrer" className={TEXT_LINK}>
        {page.standardLinkLabel}
      </a>
    ),
    robotsTxt: <code className="font-mono">robots.txt</code>,
    llmsTxt: <code className="font-mono">llms.txt</code>,
  };

  return (
    <Layout showFooterCTA={false}>
      <PageHero
        icon="/resources/llms_txt-192.png"
        title={page.title}
        lede={renderTemplate(page.tagline, taglineNodes)}
      >
        <a href={APP_URL} target="_blank" rel="noopener noreferrer" className={PRIMARY_BUTTON_ON_INK}>
          {actions.installFree}
        </a>
        <LocalizedLink to="/#contact" className={TEXT_LINK_ON_INK}>
          {actions.contactUs}
        </LocalizedLink>
      </PageHero>

      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto grid gap-10">
          <SectionHeading heading={page.problemHeading} lede={renderTemplate(page.problemIntro, introNodes)} />
          <AppPageFeatureGrid items={page.problems} columns={2} dense />
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 bg-mist">
        <div className="max-w-[1120px] mx-auto grid gap-10">
          <SectionHeading heading={page.featuresHeading} lede={page.featuresIntro} />
          <AppPageFeatureGrid items={page.features} leads={featureIcons} />
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto grid gap-10">
          <SectionHeading heading={page.howItWorksHeading} lede={page.howItWorksIntro} />
          <AppPageFeatureGrid items={page.steps} leads={stepLeads} />
        </div>
      </section>

      <ClosingCtaBand heading={page.ctaHeading} body={page.ctaBody}>
        <a href={APP_URL} target="_blank" rel="noopener noreferrer" className={PRIMARY_BUTTON_ON_INK}>
          {actions.installFree}
        </a>
        <LocalizedLink to="/faq#llms-full-txt" className={TEXT_LINK_ON_INK}>
          {actions.readFaq}
        </LocalizedLink>
      </ClosingCtaBand>
    </Layout>
  );
}
