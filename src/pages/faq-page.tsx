import type { ReactNode } from 'react';
import { Layout } from '../components/layout';
import { PageHero } from '../components/page-hero';
import { PRIMARY_BUTTON, TEXT_LINK, TEXT_LINK_ON_INK } from '../components/button-classes';
import { useTranslations } from '../i18n/use-locale';
import { LocalizedLink } from '../i18n/localized-link';
import { renderTemplate } from '../i18n/rich-text';
import type { Bullet, FaqEntry } from '../i18n/translations/content-types';
import { SUPPORT_EMAIL } from '../site/site-config';

function FaqItem({ entry }: { entry: FaqEntry }) {
  const { footer } = useTranslations('common');

  // Nodes that answers can reference by name, e.g. "Contact us at {email}".
  const inlineNodes: Record<string, ReactNode> = {
    email: (
      <a href={`mailto:${SUPPORT_EMAIL}`} className={TEXT_LINK}>
        {SUPPORT_EMAIL}
      </a>
    ),
    privacyPolicy: (
      <LocalizedLink to="/privacy-policy" className={TEXT_LINK}>
        {footer.privacyPolicy}
      </LocalizedLink>
    ),
  };

  return (
    <div className="border-t border-line py-6">
      <h3 className="text-lg font-bold text-fg mb-3">{entry.question}</h3>
      <div className="text-base text-[#39414F] leading-relaxed">
        {entry.paragraphs.map((paragraph, index) => (
          <p key={index} className={index < entry.paragraphs.length - 1 || entry.bullets ? 'mb-3' : ''}>
            {renderTemplate(paragraph, inlineNodes)}
          </p>
        ))}
        {entry.bullets && (
          <ul className="list-disc pl-5 mb-0 marker:text-[#AAB4C4]">
            {entry.bullets.map((bullet, index) => (
              <li key={index} className={index < entry.bullets!.length - 1 ? 'mb-2' : ''}>
                {renderBullet(bullet)}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function renderBullet(bullet: Bullet): ReactNode {
  if (typeof bullet === 'string') {
    return bullet;
  }

  return (
    <>
      <strong>{bullet.label}</strong> {bullet.text}
    </>
  );
}

export function FaqPage() {
  const faq = useTranslations('faq');

  return (
    <Layout>
      <PageHero
        title={faq.title}
        lede={renderTemplate(faq.intro, {
          email: (
            <a href={`mailto:${SUPPORT_EMAIL}`} className={TEXT_LINK_ON_INK}>
              {SUPPORT_EMAIL}
            </a>
          ),
        })}
      />

      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <div className="max-w-[760px]">
            {/* Jump links to each topic */}
            <nav aria-label={faq.title} className="mb-14">
              <ul className="grid gap-2 list-none p-0 m-0">
                {faq.sections.map((section) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`} className={TEXT_LINK}>
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {faq.sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                aria-labelledby={`${section.id}-heading`}
                className="mb-14 last:mb-0 scroll-mt-24"
              >
                <h2
                  id={`${section.id}-heading`}
                  className="font-heading text-[clamp(1.5rem,3vw,2rem)] text-fg mb-6"
                >
                  {section.title}
                </h2>
                {section.items.map((entry) => (
                  <FaqItem key={entry.question} entry={entry} />
                ))}
              </section>
            ))}

            {/* Contact */}
            <div className="mt-14 border-t border-line pt-10 grid gap-3 justify-items-start">
              <h2 className="font-heading text-[clamp(1.5rem,3vw,2rem)] text-fg">{faq.contactBox.heading}</h2>
              <p className="text-base text-[#39414F] leading-relaxed">{faq.contactBox.body}</p>
              <a href={`mailto:${SUPPORT_EMAIL}`} className={`${PRIMARY_BUTTON} mt-2`}>
                {faq.contactBox.cta}
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
