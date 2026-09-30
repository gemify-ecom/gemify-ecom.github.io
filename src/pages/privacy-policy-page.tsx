import type { ReactNode } from 'react';
import { Layout } from '../components/layout';
import { PageHero } from '../components/page-hero';
import { TEXT_LINK } from '../components/button-classes';
import { useTranslations } from '../i18n/use-locale';
import { renderTemplate } from '../i18n/rich-text';
import type { Bullet, PolicyBlock } from '../i18n/translations/content-types';
import { SITE_URL as WEBSITE_URL, SUPPORT_EMAIL } from '../site/site-config';

const EDPB_MEMBERS_URL = 'https://edpb.europa.eu/about-edpb/board/members_en';

const LINK_CLASS = TEXT_LINK;

/** Callout block: a hairline rule on the left, no box. */
function HighlightBox({ children }: { children: ReactNode }) {
  return <div className="border-l-2 border-line pl-5 my-6">{children}</div>;
}

const emailLink = (
  <a href={`mailto:${SUPPORT_EMAIL}`} className={LINK_CLASS}>
    {SUPPORT_EMAIL}
  </a>
);

/** Inline nodes that policy text can reference by placeholder name. */
const INLINE_NODES: Record<string, ReactNode> = {
  email: emailLink,
  edpb: (
    <a href={EDPB_MEMBERS_URL} target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>
      https://edpb.europa.eu
    </a>
  ),
};

function renderBullet(bullet: Bullet): ReactNode {
  if (typeof bullet === 'string') {
    return renderTemplate(bullet, INLINE_NODES);
  }

  return (
    <>
      <strong className="font-semibold">{bullet.label}</strong>{' '}
      {renderTemplate(bullet.text, INLINE_NODES)}
    </>
  );
}

function BulletList({ items, className }: { items: Bullet[]; className: string }) {
  return (
    <ul className={className}>
      {items.map((item, index) => (
        <li
          key={index}
          className={index < items.length - 1 ? 'mb-2 text-[#39414F]' : 'text-[#39414F]'}
        >
          {renderBullet(item)}
        </li>
      ))}
    </ul>
  );
}

/** Renders one block of the policy, preserving the original typography. */
function PolicyBlockView({ block }: { block: PolicyBlock }) {
  switch (block.kind) {
    case 'heading':
      return (
        <h2 className="font-heading text-[1.4rem] mt-12 mb-4 text-fg">{block.text}</h2>
      );

    case 'subheading':
      return (
        <h3 className="text-lg font-bold mt-6 mb-3 text-fg">{block.text}</h3>
      );

    case 'paragraph':
      return (
        <p className="mb-4 text-[#39414F] leading-relaxed">
          {block.strong ? (
            <strong className="font-semibold">{renderTemplate(block.text, INLINE_NODES)}</strong>
          ) : (
            renderTemplate(block.text, INLINE_NODES)
          )}
        </p>
      );

    case 'list':
      return <BulletList items={block.items} className="list-disc pl-6 mb-4 marker:text-[#AAB4C4]" />;

    case 'highlight':
      return (
        <HighlightBox>
          {block.heading && (
            <p className="mb-2">
              <strong className="font-semibold text-fg">{block.heading}</strong>
            </p>
          )}
          {block.paragraphs?.map((paragraph, index) => (
            <p key={index} className="mb-2 text-[#39414F]">
              {renderTemplate(paragraph, INLINE_NODES)}
            </p>
          ))}
          {block.items && <BulletList items={block.items} className="list-disc pl-6 mb-0 marker:text-[#AAB4C4]" />}
        </HighlightBox>
      );

    case 'contact':
      return (
        <HighlightBox>
          <p className="mb-0">
            <strong className="font-semibold text-fg">{block.brand}</strong>
            <br />
            {block.emailLabel} {emailLink}
            <br />
            {block.websiteLabel}{' '}
            <a href={`${WEBSITE_URL}/`} className={LINK_CLASS}>
              {WEBSITE_URL}
            </a>
          </p>
        </HighlightBox>
      );

    case 'divider':
      return <hr className="my-10 border-0 border-t border-line" />;

    case 'closing':
      return <p className="text-sm text-muted italic">{block.text}</p>;
  }
}

export function PrivacyPolicyPage() {
  const privacyPolicy = useTranslations('privacyPolicy');

  return (
    <Layout>
      <PageHero title={privacyPolicy.title} label={privacyPolicy.lastUpdated} />

      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-[1120px] mx-auto">
          <div className="max-w-[760px] [&>*:first-child]:mt-0">
            {privacyPolicy.blocks.map((block, index) => (
              <PolicyBlockView key={index} block={block} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
