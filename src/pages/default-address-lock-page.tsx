import { Home, Gift, AlertTriangle, Shield, Check, X, ArrowDown } from 'lucide-react';
import { Layout } from '../components/layout';
import { useTranslations } from '../i18n/use-locale';
import { LocalizedLink } from '../i18n/localized-link';
import { interpolate, renderTemplate } from '../i18n/rich-text';

const APP_STORE_URL = 'https://apps.shopify.com/default-address-lock';

/** Address labels A and B are rendered as coloured markers inside the sentences. */
const addressA = <span className="text-blue-600 font-bold">A</span>;
const addressB = <span className="text-purple-600 font-bold">B</span>;
const boldB = <span className="font-bold">B</span>;
const boldA = <span className="font-bold">A</span>;

function AddressFlowDiagram() {
  const { defaultAddressLock } = useTranslations('appPages');
  const t = defaultAddressLock.diagram;
  const stepLabel = (number: number) => interpolate(t.stepLabel, { number });

  return (
    <div className="bg-gray-50 p-8">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
        {t.heading}
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Without App - Left */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-red-100">
          <div className="flex items-center gap-2 mb-6">
            <X className="w-6 h-6 text-red-500" />
            <h3 className="text-xl font-semibold text-red-600">{t.withoutApp}</h3>
          </div>

          <div className="space-y-4">
            {/* Step 1 */}
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Home className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">{stepLabel(1)}</p>
                <p className="font-medium">{renderTemplate(t.step1, { a: addressA })}</p>
              </div>
            </div>

            <ArrowDown className="w-5 h-5 text-gray-300 mx-auto" />

            {/* Step 2 */}
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Gift className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">{stepLabel(2)}</p>
                <p className="font-medium">{renderTemplate(t.step2, { b: addressB })}</p>
              </div>
            </div>

            <ArrowDown className="w-5 h-5 text-gray-300 mx-auto" />

            {/* Step 3 */}
            <div className="flex items-center gap-4 p-4 bg-red-50 rounded-xl border border-red-200">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">{stepLabel(3)}</p>
                <p className="font-medium text-red-700">
                  {renderTemplate(t.step3Without, { b: boldB })}
                </p>
              </div>
            </div>

            <ArrowDown className="w-5 h-5 text-gray-300 mx-auto" />

            {/* Result */}
            <div className="p-4 bg-red-100 rounded-xl border-2 border-red-300">
              <p className="text-center font-semibold text-red-700">
                {t.resultWithoutTitle}
              </p>
              <p className="text-center text-sm text-red-600 mt-1">
                {t.resultWithoutBody}
              </p>
            </div>
          </div>
        </div>

        {/* With App - Right */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-green-100">
          <div className="flex items-center gap-2 mb-6">
            <Check className="w-6 h-6 text-green-500" />
            <h3 className="text-xl font-semibold text-green-600">{t.withApp}</h3>
          </div>

          <div className="space-y-4">
            {/* Step 1 */}
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Home className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">{stepLabel(1)}</p>
                <p className="font-medium">{renderTemplate(t.step1, { a: addressA })}</p>
              </div>
            </div>

            <ArrowDown className="w-5 h-5 text-gray-300 mx-auto" />

            {/* Step 2 */}
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Gift className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">{stepLabel(2)}</p>
                <p className="font-medium">{renderTemplate(t.step2, { b: addressB })}</p>
              </div>
            </div>

            <ArrowDown className="w-5 h-5 text-gray-300 mx-auto" />

            {/* Step 3 */}
            <div className="flex items-center gap-4 p-4 bg-green-50 rounded-xl border border-green-200">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">{stepLabel(3)}</p>
                <p className="font-medium text-green-700">
                  {renderTemplate(t.step3With, { a: boldA })}
                </p>
              </div>
            </div>

            <ArrowDown className="w-5 h-5 text-gray-300 mx-auto" />

            {/* Result */}
            <div className="p-4 bg-green-100 rounded-xl border-2 border-green-300">
              <p className="text-center font-semibold text-green-700">
                {t.resultWithTitle}
              </p>
              <p className="text-center text-sm text-green-600 mt-1">
                {t.resultWithBody}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-xl shadow-md">
        <h3 className="font-semibold text-gray-800 mb-3 text-center">{t.summaryHeading}</h3>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
            <X className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-600">{t.summaryNegative}</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full">
            <Check className="w-4 h-4 text-green-600" />
            <span className="text-sm text-green-700">{t.summaryPositive}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

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

export function DefaultAddressLockPage() {
  const { defaultAddressLock: page } = useTranslations('appPages');
  const { actions } = useTranslations('common');

  const featureIcons = [
    <Shield className="w-6 h-6" />,
    <Home className="w-6 h-6" />,
    <Check className="w-6 h-6" />,
  ];

  return (
    <Layout showFooterCTA={false}>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F6F6F7] to-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-24 h-24 mx-auto mb-6">
            <img
              src="/resources/default_address_lock.png"
              alt={page.title}
              className="w-full h-full object-contain rounded-2xl shadow-lg"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#202223] mb-4">
            {page.title}
          </h1>
          <p className="text-xl text-[#616569] mb-6 max-w-2xl mx-auto">
            {page.tagline}
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href={APP_STORE_URL}
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

      {/* Problem Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#202223] mb-4">
            {page.problemHeading}
          </h2>
          <p className="text-center text-[#616569] mb-12 max-w-2xl mx-auto">
            {page.problemIntro}
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

      {/* Visual Diagram */}
      <AddressFlowDiagram />

      {/* Features Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#202223] mb-4">
            {page.howItWorksHeading}
          </h2>
          <p className="text-center text-[#616569] mb-12 max-w-2xl mx-auto">
            {page.howItWorksIntro}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {page.features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                icon={featureIcons[index]}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-[#00A87B] to-[#008060]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {page.ctaHeading}
          </h2>
          <p className="text-white/90 mb-8">
            {page.ctaBody}
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#00A87B] px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-lg transition-shadow no-underline"
            >
              {actions.installFreeOnShopify}
            </a>
            <LocalizedLink
              to="/faq#default-address-lock-app"
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
