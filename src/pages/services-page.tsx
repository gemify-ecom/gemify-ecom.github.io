import { Layout } from '../components/layout';
import { ContactSection } from '../components/home-contact-section';
import { PageHero } from '../components/page-hero';
import { SectionHeading } from '../components/section-heading';
import { ServiceIcon } from '../components/service-icon';
import { PRIMARY_BUTTON_ON_INK, TEXT_LINK_ON_INK } from '../components/button-classes';
import { useTranslations } from '../i18n/use-locale';

/**
 * Custom work beyond Gemify's own apps: new apps, customization, upgrades,
 * and bug fixes. Visitors request a quote through the contact form at the
 * bottom of the page.
 */

interface ServiceCellProps {
  index: number;
  title: string;
  description: string;
  items: string[];
}

function ServiceCell({ index, title, description, items }: ServiceCellProps) {
  return (
    <li className="grid content-start gap-3 bg-white p-6 md:p-8">
      <ServiceIcon index={index} className="w-6 h-6 text-signal" />
      <h3 className="text-xl font-bold text-fg">{title}</h3>
      <p className="text-muted leading-relaxed">{description}</p>
      <ul className="list-disc pl-5 grid gap-2 text-sm text-[#39414F] marker:text-[#AAB4C4]">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </li>
  );
}

export function ServicesPage() {
  const page = useTranslations('services');

  return (
    <Layout showFooterCTA={false}>
      <PageHero label={page.hero.badge} title={page.hero.title} lede={page.hero.subtitle}>
        <a href="#contact" className={PRIMARY_BUTTON_ON_INK}>
          {page.hero.primaryCta}
        </a>
        <a href="#process" className={TEXT_LINK_ON_INK}>
          {page.hero.secondaryCta}
        </a>
      </PageHero>

      {/* Services */}
      <section className="py-16 md:py-24 px-6 bg-mist">
        <div className="max-w-[1120px] mx-auto grid gap-10">
          <SectionHeading heading={page.servicesHeading} lede={page.servicesIntro} />

          {/* Hairline grid: the 1px gap shows the line color between cells */}
          <ul className="grid md:grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line">
            {page.services.map((service, index) => (
              <ServiceCell
                key={service.title}
                index={index}
                title={service.title}
                description={service.description}
                items={service.items}
              />
            ))}
          </ul>

          {/* Work on apps from other developers, not only Gemify's */}
          <div className="grid gap-2 rounded-2xl border border-line bg-white p-6 md:p-8">
            <h3 className="text-lg font-bold text-fg">{page.anyApp.heading}</h3>
            <p className="text-[#39414F] leading-relaxed max-w-[760px]">{page.anyApp.body}</p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto grid gap-10">
          <SectionHeading heading={page.processHeading} lede={page.processIntro} />

          <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-px overflow-hidden rounded-2xl border border-line bg-line">
            {page.steps.map((step, index) => (
              <li key={step.title} className="grid content-start gap-2 bg-white px-6 pt-5 pb-6">
                <span aria-hidden="true" className="label-mono text-signal">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="font-bold text-fg">{step.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <ContactSection />
    </Layout>
  );
}
