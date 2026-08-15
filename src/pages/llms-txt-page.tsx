import { AlertTriangle, Bot, FileText, ListChecks, Server, Settings2, Zap } from 'lucide-react';
import { Layout } from '../components/layout';
import { useTranslations } from '../i18n/use-locale';
import { LocalizedLink } from '../i18n/localized-link';
import { renderTemplate } from '../i18n/rich-text';

const APP_URL = 'https://apps.shopify.com/llms-full-txt';
const STANDARD_URL = 'https://llmstxt.org';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="w-12 h-12 bg-[#00A87B]/10 rounded-lg flex items-center justify-center mb-4 text-[#00A87B]">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-[#202223] mb-2">{title}</h3>
      <p className="text-[#616569] text-sm leading-relaxed">{description}</p>
    </div>
  );
}

interface StepCardProps {
  step: number;
  title: string;
  description: string;
}

function StepCard({ step, title, description }: StepCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="w-10 h-10 rounded-full bg-[#00A87B] text-white font-bold flex items-center justify-center mb-4">
        {step}
      </div>
      <h3 className="text-lg font-semibold text-[#202223] mb-2">{title}</h3>
      <p className="text-[#616569] text-sm leading-relaxed">{description}</p>
    </div>
  );
}

export function LlmsTxtPage() {
  const { llmsTxt: page } = useTranslations('appPages');
  const { actions } = useTranslations('common');

  const featureIcons = [
    <Zap className="w-6 h-6" />,
    <Settings2 className="w-6 h-6" />,
    <Server className="w-6 h-6" />,
    <ListChecks className="w-6 h-6" />,
    <FileText className="w-6 h-6" />,
  ];
  const primaryFeatures = page.features.slice(0, 3);
  const secondaryFeatures = page.features.slice(3);

  // Inline code and links referenced by the translated sentences.
  const taglineNodes = {
    agentsMd: <code className="font-mono text-[#00A87B]">agents.md</code>,
    llmsTxt: <code className="font-mono text-[#00A87B]">llms.txt</code>,
    llmsFullTxt: <code className="font-mono text-[#00A87B]">llms-full.txt</code>,
  };
  const introNodes = {
    standardLink: (
      <a
        href={STANDARD_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#00A87B] hover:underline"
      >
        {page.standardLinkLabel}
      </a>
    ),
    robotsTxt: <code className="font-mono">robots.txt</code>,
    llmsTxt: <code className="font-mono">llms.txt</code>,
  };

  return (
    <Layout showFooterCTA={false}>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F6F6F7] to-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-24 h-24 mx-auto mb-6">
            <img
              src="/resources/llms_txt.png"
              alt={page.title}
              className="w-full h-full object-contain rounded-2xl shadow-lg"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#202223] mb-4">
            {page.title}
          </h1>
          <p className="text-xl text-[#616569] mb-6 max-w-2xl mx-auto">
            {renderTemplate(page.tagline, taglineNodes)}
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#00A87B] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#008060] hover:shadow-lg transition-all no-underline"
            >
              {actions.installFree}
            </a>
            <LocalizedLink
              to="/#contact"
              className="bg-white border-2 border-[#00A87B] text-[#00A87B] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#00A87B] hover:text-white transition-colors no-underline"
            >
              {actions.contactUs}
            </LocalizedLink>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#202223] mb-4">
            {page.problemHeading}
          </h2>
          <p className="text-center text-[#616569] mb-12 max-w-2xl mx-auto">
            {renderTemplate(page.problemIntro, introNodes)}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {page.problems.map((problem) => (
              <div key={problem.title} className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-red-700 mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  {problem.title}
                </h3>
                <p className="text-red-600 text-sm">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-[#F6F6F7]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#202223] mb-4">
            {page.featuresHeading}
          </h2>
          <p className="text-center text-[#616569] mb-12 max-w-2xl mx-auto">
            {page.featuresIntro}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {primaryFeatures.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                icon={featureIcons[index]}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {secondaryFeatures.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                icon={featureIcons[primaryFeatures.length + index]}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#202223] mb-4">
            {page.howItWorksHeading}
          </h2>
          <p className="text-center text-[#616569] mb-12 max-w-2xl mx-auto">
            {page.howItWorksIntro}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {page.steps.map((step, index) => (
              <StepCard
                key={step.title}
                step={index + 1}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-[#00A87B] to-[#008060]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <Bot className="w-8 h-8" aria-hidden="true" />
            {page.ctaHeading}
          </h2>
          <p className="text-white/90 mb-8">
            {page.ctaBody}
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#00A87B] px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-lg transition-shadow no-underline"
            >
              {actions.installFree}
            </a>
            <LocalizedLink
              to="/faq"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-colors no-underline"
            >
              {actions.readFaq}
            </LocalizedLink>
          </div>
        </div>
      </section>
    </Layout>
  );
}
