import type { ReactNode } from 'react';
import { Layout } from '../components/layout';
import { useTranslations } from '../i18n/use-locale';
import { LocalizedLink } from '../i18n/localized-link';
import { renderTemplate } from '../i18n/rich-text';
import type { Bullet, FaqEntry } from '../i18n/translations/content-types';

const SUPPORT_EMAIL = 'sean.gemify@gmail.com';

function FaqItem({ entry, prefix }: { entry: FaqEntry; prefix: string }) {
  const { footer } = useTranslations('common');

  // Nodes that answers can reference by name, e.g. "Contact us at {email}".
  const inlineNodes: Record<string, ReactNode> = {
    email: (
      <a href={`mailto:${SUPPORT_EMAIL}`} className="text-[#00A87B] no-underline hover:underline">
        {SUPPORT_EMAIL}
      </a>
    ),
    privacyPolicy: (
      <LocalizedLink to="/privacy-policy" className="text-[#00A87B] no-underline hover:underline">
        {footer.privacyPolicy}
      </LocalizedLink>
    ),
  };

  return (
    <div className="mb-6 p-6 bg-[#F6F6F7] rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <div className="text-lg font-semibold mb-3 text-[#202223] flex items-start gap-3">
        <span className="text-[#00A87B] font-bold shrink-0">{prefix}</span>
        <span>{entry.question}</span>
      </div>
      <div className="text-base text-[#202223] leading-relaxed pl-8">
        {entry.paragraphs.map((paragraph, index) => (
          <p key={index} className={index < entry.paragraphs.length - 1 || entry.bullets ? 'mb-3' : ''}>
            {renderTemplate(paragraph, inlineNodes)}
          </p>
        ))}
        {entry.bullets && (
          <ul className="list-disc pl-5 mb-0">
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
      <div className="max-w-[900px] mx-auto px-6">
        <div className="bg-white my-10 p-12 rounded-xl shadow-sm md:p-8 md:my-6">
          <h1 className="text-4xl font-bold mb-4 text-[#202223] text-center md:text-3xl">
            {faq.title}
          </h1>
          <p className="text-lg text-[#6D7175] mb-12 text-center pb-8 border-b border-[#E1E3E5]">
            {renderTemplate(faq.intro, {
              email: (
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="text-[#00A87B] no-underline hover:underline"
                >
                  {SUPPORT_EMAIL}
                </a>
              ),
            })}
          </p>

          {faq.sections.map((section) => (
            <div key={section.title} className="mb-12 last:mb-0">
              <h2 className="text-2xl font-bold mb-6 text-[#202223] pb-3 border-b-2 border-[#00A87B]">
                {section.title}
              </h2>
              {section.items.map((entry) => (
                <FaqItem key={entry.question} entry={entry} prefix={faq.questionPrefix} />
              ))}
            </div>
          ))}

          {/* Contact Box */}
          <div className="bg-gradient-to-br from-[#00A87B] to-[#008060] text-white p-8 rounded-xl text-center mt-12">
            <h2 className="text-2xl font-bold mb-3">{faq.contactBox.heading}</h2>
            <p className="text-base mb-5 opacity-95">
              {faq.contactBox.body}
            </p>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="inline-block bg-white text-[#00A87B] px-8 py-3 rounded-lg no-underline font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            >
              {faq.contactBox.cta}
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
