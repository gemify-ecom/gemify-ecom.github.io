import { Layout } from '../components/layout';
import { ContactSection } from '../components/home-contact-section';
import { HomeHeroSection } from '../components/home-hero-section';
import { HomeAppsSection } from '../components/home-apps-section';
import { HomeCoreValuesSection } from '../components/home-core-values-section';
import { HomeTestimonialsSection } from '../components/home-testimonials-section';
import { ArrowRight } from 'lucide-react';
import { SectionHeading } from '../components/section-heading';
import { ServiceIcon } from '../components/service-icon';
import { useTranslations } from '../i18n/use-locale';
import { LocalizedLink } from '../i18n/localized-link';
import { renderTemplate } from '../i18n/rich-text';

function AboutSection() {
  const { about } = useTranslations('home');
  const emphasis = (text: string) => <span className="font-semibold text-fg">{text}</span>;

  return (
    <section id="about" className="py-16 md:py-24 px-6 bg-mist">
      <div className="max-w-[1120px] mx-auto grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
        <SectionHeading heading={about.heading} lede={about.intro} />

        <div className="grid gap-5 text-lg leading-relaxed text-[#39414F] max-w-[640px] lg:pt-1">
          <p>{renderTemplate(about.mission.text, { emphasis: emphasis(about.mission.emphasis) })}</p>
          <p>{renderTemplate(about.closing.text, { emphasis: emphasis(about.closing.emphasis) })}</p>
        </div>
      </div>
    </section>
  );
}

/** Teaser for the services page: the four services in a hairline grid. */
function ServicesSection() {
  const { services: teaser } = useTranslations('home');
  const services = useTranslations('services');

  return (
    <section className="py-16 md:py-24 px-6 bg-white">
      <div className="max-w-[1120px] mx-auto grid gap-10">
        <SectionHeading label={teaser.badge} heading={teaser.heading} lede={teaser.subheading} />

        {/* Hairline grid: the 1px gap shows the line color between cells */}
        <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-px overflow-hidden rounded-2xl border border-line bg-line">
          {services.services.map((service, index) => (
            <li key={service.title} className="grid content-start gap-2 bg-white px-6 pt-5 pb-6">
              <ServiceIcon index={index} className="w-6 h-6 mb-1 text-signal" />
              <h3 className="font-bold text-fg">{service.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{service.description}</p>
            </li>
          ))}
        </ol>

        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <LocalizedLink
            to="/services"
            className="inline-flex items-center justify-center gap-2 bg-signal text-white px-5 py-3 rounded-xl font-semibold no-underline hover:bg-signal-deep transition-colors"
          >
            {teaser.cta}
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </LocalizedLink>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-5 py-3 text-signal-deep font-semibold no-underline hover:underline"
          >
            {services.hero.primaryCta}
          </a>
        </div>
      </div>
    </section>
  );
}

export function HomePage() {
  return (
    <Layout>
      <HomeHeroSection />
      <HomeAppsSection />
      <HomeCoreValuesSection />
      <HomeTestimonialsSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
    </Layout>
  );
}
