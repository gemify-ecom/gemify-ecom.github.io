import type { ReactNode } from 'react';
import { Layout } from '../components/layout';
import { useTranslations } from '../i18n/use-locale';
import { renderTemplate } from '../i18n/rich-text';
import type { Bullet, PolicyBlock } from '../i18n/translations/content-types';

const SUPPORT_EMAIL = 'sean.gemify@gmail.com';
const WEBSITE_URL = 'https://gemify-ecom.github.io';
const EDPB_MEMBERS_URL = 'https://edpb.europa.eu/about-edpb/board/members_en';

const LINK_CLASS = 'text-[#00A87B] no-underline hover:underline';

interface HighlightBoxProps {
  children: React.ReactNode;
}

function HighlightBox({ children }: HighlightBoxProps) {
  return (
    <div className="bg-[#F6F6F7] border-l-4 border-[#00A87B] py-4 px-5 my-6 rounded">
      {children}
    </div>
  );
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
          className={index < items.length - 1 ? 'mb-2 text-[#202223]' : 'text-[#202223]'}
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
        <h2 className="text-2xl font-bold mt-10 mb-4 text-[#202223]">{block.text}</h2>
      );

    case 'subheading':
      return (
        <h3 className="text-lg font-semibold mt-6 mb-3 text-[#202223]">{block.text}</h3>
      );

    case 'paragraph':
      return (
        <p className="mb-4 text-[#202223]">
          {block.strong ? (
            <strong className="font-semibold">{renderTemplate(block.text, INLINE_NODES)}</strong>
          ) : (
            renderTemplate(block.text, INLINE_NODES)
          )}
        </p>
      );

    case 'list':
      return <BulletList items={block.items} className="list-disc pl-6 mb-4" />;

    case 'highlight':
      return (
        <HighlightBox>
          {block.heading && (
            <p className="mb-2">
              <strong className="font-semibold text-[#202223]">{block.heading}</strong>
            </p>
          )}
          {block.paragraphs?.map((paragraph, index) => (
            <p key={index} className="mb-2 text-[#202223]">
              {renderTemplate(paragraph, INLINE_NODES)}
            </p>
          ))}
          {block.items && <BulletList items={block.items} className="list-disc pl-6 mb-0" />}
        </HighlightBox>
      );

    case 'contact':
      return (
        <HighlightBox>
          <p className="mb-0">
            <strong className="font-semibold text-[#202223]">{block.brand}</strong>
            <br />
            {block.emailLabel} {emailLink}
            <br />
            {block.websiteLabel}{' '}
            <a href={WEBSITE_URL} className={LINK_CLASS} target="_blank" rel="noopener noreferrer">
              {WEBSITE_URL}
            </a>
          </p>
        </HighlightBox>
      );

    case 'divider':
      return <hr className="my-10 border-0 border-t border-[#E1E3E5]" />;

    case 'closing':
      return <p className="text-sm text-[#6D7175] italic">{block.text}</p>;
  }
}

export function PrivacyPolicyPage() {
  const privacyPolicy = useTranslations('privacyPolicy');

  return (
    <Layout>
      <div className="max-w-[900px] mx-auto px-6">
        <div className="bg-white my-10 p-12 rounded-xl shadow-sm md:p-8 md:my-6">
          <h1 className="text-4xl font-bold mb-4 text-[#202223] md:text-3xl">
            {privacyPolicy.title}
          </h1>
          <p className="text-sm text-[#6D7175] mb-8 pb-6 border-b border-[#E1E3E5]">
            {privacyPolicy.lastUpdated}
          </p>

          {privacyPolicy.blocks.map((block, index) => (
            <PolicyBlockView key={index} block={block} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
