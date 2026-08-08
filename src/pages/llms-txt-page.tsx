import { Link } from 'react-router-dom';
import { AlertTriangle, Bot, FileText, ListChecks, Server, Settings2, Zap } from 'lucide-react';
import { Layout } from '../components/layout';

const APP_URL = 'https://llms-full-txt.fly.dev/';

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
  return (
    <Layout showFooterCTA={false}>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F6F6F7] to-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-24 h-24 mx-auto mb-6">
            <img
              src="/resources/llms_txt.png"
              alt="LLMs.txt"
              className="w-full h-full object-contain rounded-2xl shadow-lg"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#202223] mb-4">
            LLMs.txt
          </h1>
          <p className="text-xl text-[#616569] mb-6 max-w-2xl mx-auto">
            Make your Shopify store AI-ready. Generate <code className="font-mono text-[#00A87B]">llms.txt</code> and{' '}
            <code className="font-mono text-[#00A87B]">llms-full.txt</code> so AI assistants can understand
            your products, collections, and pages.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#00A87B] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#008060] hover:shadow-lg transition-all no-underline"
            >
              Install Free
            </a>
            <Link
              to="/#contact"
              className="bg-white border-2 border-[#00A87B] text-[#00A87B] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#00A87B] hover:text-white transition-colors no-underline"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#202223] mb-4">
            Why Your Store Needs llms.txt
          </h2>
          <p className="text-center text-[#616569] mb-12 max-w-2xl mx-auto">
            The{' '}
            <a
              href="https://llmstxt.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00A87B] hover:underline"
            >
              llms.txt standard
            </a>{' '}
            helps AI models understand your website. Just like <code className="font-mono">robots.txt</code>{' '}
            guides search engines, <code className="font-mono">llms.txt</code> guides AI assistants, helping
            them recommend your products and answer customer questions accurately.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-red-700 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Shoppers Ask AI First
              </h3>
              <p className="text-red-600 text-sm">
                Customers increasingly research products through ChatGPT, Claude, and Gemini.
                Without a clean summary of your catalog, those assistants work from whatever
                they can scrape.
              </p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-red-700 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Storefront HTML Is Noisy
              </h3>
              <p className="text-red-600 text-sm">
                Theme markup, scripts, and navigation bury the details that matter. Models
                read markdown far more reliably than a rendered storefront page.
              </p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-red-700 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Writing It By Hand Doesn&apos;t Scale
              </h3>
              <p className="text-red-600 text-sm">
                Maintaining a hand-written file across hundreds of products, collections, and
                blog articles is tedious and goes stale the moment your catalog changes.
              </p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-red-700 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Hosting Gets In The Way
              </h3>
              <p className="text-red-600 text-sm">
                The standard expects the file at your root domain. Serving it from an external
                host or an app proxy path means extra infrastructure and redirects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-[#F6F6F7]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#202223] mb-4">
            What You Get
          </h2>
          <p className="text-center text-[#616569] mb-12 max-w-2xl mx-auto">
            Pick your content, generate both files, and let Shopify serve them from your own
            domain. No extra hosting, no manual editing.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Zap className="w-6 h-6" />}
              title="One-Click Generation"
              description="Generate both llms.txt and llms-full.txt from your dashboard. Choose exactly which products, collections, pages, and articles to include."
            />
            <FeatureCard
              icon={<Settings2 className="w-6 h-6" />}
              title="Custom Output"
              description="Reorder sections and customize how your llms files are formatted, so the output matches how you want your store described."
            />
            <FeatureCard
              icon={<Server className="w-6 h-6" />}
              title="Served Natively"
              description="Files are published to your theme and served by Shopify at /llms.txt and /llms-full.txt, with no extra hosting needed."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <FeatureCard
              icon={<ListChecks className="w-6 h-6" />}
              title="You Choose the Content"
              description="Include products, collections, pages, blog articles, and policies. Leave out anything you don't want summarized for AI assistants."
            />
            <FeatureCard
              icon={<FileText className="w-6 h-6" />}
              title="Clean Markdown Output"
              description="Store data is pulled through the Shopify GraphQL API and converted to clean markdown that models can parse without guessing."
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#202223] mb-4">
            How It Works
          </h2>
          <p className="text-center text-[#616569] mb-12 max-w-2xl mx-auto">
            Three steps from install to an AI-readable storefront.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StepCard
              step={1}
              title="Install & Configure"
              description="Select which content to include: products, collections, pages, blog articles, and policies."
            />
            <StepCard
              step={2}
              title="Generate Files"
              description="Hit generate. The app fetches your store data via GraphQL and converts it to clean markdown."
            />
            <StepCard
              step={3}
              title="AI-Ready"
              description="Your llms.txt is now publicly accessible. AI assistants like ChatGPT, Claude, and Gemini can read and understand your store."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-[#00A87B] to-[#008060]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <Bot className="w-8 h-8" aria-hidden="true" />
            Ready to Go AI-Ready?
          </h2>
          <p className="text-white/90 mb-8">
            Install LLMs.txt today and give AI assistants an accurate picture of your store.
            Free to install.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#00A87B] px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-lg transition-shadow no-underline"
            >
              Install Free
            </a>
            <Link
              to="/faq"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-colors no-underline"
            >
              Read FAQ
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
