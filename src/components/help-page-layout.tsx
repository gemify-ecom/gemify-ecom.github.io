import { Fragment, type ReactNode } from 'react';
import { Layout } from './layout';
import { PageHero } from './page-hero';
import { TEXT_LINK } from './button-classes';
import { LocalizedLink } from '../i18n/localized-link';
import { renderTemplate } from '../i18n/rich-text';
import { useTranslations } from '../i18n/use-locale';
import { SUPPORT_EMAIL } from '../site/site-config';

/** One block of help copy. Inline `code` is written with backticks. */
export type HelpBlock =
  | { kind: 'paragraph'; text: string }
  | { kind: 'list'; ordered?: boolean; items: string[] }
  | { kind: 'code'; text: string };

export interface HelpSection {
  /** Anchor id, linked from the "On this page" list. */
  id: string;
  heading: string;
  blocks: HelpBlock[];
}

interface HelpPageLayoutProps {
  /** App name shown in the page heading; app names are not translated. */
  title: string;
  intro: string;
  sections: HelpSection[];
}

const LINK_CLASS = TEXT_LINK;

/**
 * Shared shell for the per-app merchant help pages (each App Store listing's
 * FAQ link). The copy is English in every locale because the apps' UIs are
 * English only and the help quotes their exact labels, so the article carries
 * `lang="en"`. Text may use `{email}` (support mailto) and `{privacyPolicy}`
 * (link to the privacy policy) placeholders.
 */
export function HelpPageLayout({ title, intro, sections }: HelpPageLayoutProps) {
  const { footer } = useTranslations('common');

  const inlineNodes: Record<string, ReactNode> = {
    email: (
      <a href={`mailto:${SUPPORT_EMAIL}`} className={LINK_CLASS}>
        {SUPPORT_EMAIL}
      </a>
    ),
    privacyPolicy: (
      <LocalizedLink to="/privacy-policy" className={LINK_CLASS}>
        {footer.privacyPolicy}
      </LocalizedLink>
    ),
  };

  /** Backtick segments become inline code; the rest may hold {placeholders}. */
  const renderText = (text: string): ReactNode =>
    text.split('`').map((part, index) =>
      index % 2 === 1 ? (
        <code key={index} className="px-1 py-0.5 rounded bg-chip text-[0.9em] font-mono">
          {part}
        </code>
      ) : (
        <Fragment key={index}>{renderTemplate(part, inlineNodes)}</Fragment>
      ),
    );

  const renderBlock = (block: HelpBlock, index: number): ReactNode => {
    switch (block.kind) {
      case 'paragraph':
        return (
          <p key={index} className="mb-4 text-[#39414F] leading-relaxed">
            {renderText(block.text)}
          </p>
        );
      case 'code':
        return (
          <pre
            key={index}
            className="mb-4 p-4 rounded-lg bg-ink text-mist text-sm overflow-x-auto whitespace-pre"
          >
            <code>{block.text}</code>
          </pre>
        );
      case 'list': {
        const ListTag = block.ordered ? 'ol' : 'ul';
        return (
          <ListTag key={index} className={`${block.ordered ? 'list-decimal' : 'list-disc'} pl-6 mb-4 marker:text-[#AAB4C4]`}>
            {block.items.map((item, itemIndex) => (
              <li key={itemIndex} className="mb-2 text-[#39414F] leading-relaxed">
                {renderText(item)}
              </li>
            ))}
          </ListTag>
        );
      }
    }
  };

  return (
    <Layout>
      <article lang="en">
        <PageHero title={`${title} Help`} lede={intro} />

        <div className="py-16 md:py-24 px-6 bg-white">
          <div className="max-w-[1120px] mx-auto">
            <div className="max-w-[760px]">
              <nav aria-label="On this page" className="mb-14">
                <ul className="list-none p-0 m-0 grid gap-2">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <a href={`#${section.id}`} className={LINK_CLASS}>
                        {section.heading}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              {sections.map((section) => (
                <section key={section.id} id={section.id} className="mb-12 scroll-mt-24">
                  <h2 className="font-heading text-[1.4rem] mb-4 text-fg">{section.heading}</h2>
                  {section.blocks.map(renderBlock)}
                </section>
              ))}
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}
