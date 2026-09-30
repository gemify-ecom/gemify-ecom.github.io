import type { ReactNode } from 'react';

interface ClosingCtaBandProps {
  heading: ReactNode;
  body?: ReactNode;
  /** Actions: one PRIMARY_BUTTON_ON_INK, then TEXT_LINK_ON_INK links. */
  children: ReactNode;
}

/**
 * Last call to action on a page. Ink, like the footer it sits on, with a
 * hairline between them, so the page ends in one dark block instead of a
 * separate colored band. Pages that render it pass showFooterCTA={false}.
 */
export function ClosingCtaBand({ heading, body, children }: ClosingCtaBandProps) {
  return (
    <section className="bg-ink px-6 pt-16 md:pt-20">
      <div className="max-w-[1120px] mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-12 md:pb-16 border-b border-ink-line">
        <div className="grid gap-3 max-w-[620px]">
          <h2 className="font-heading text-[clamp(1.7rem,3.4vw,2.4rem)] text-white">{heading}</h2>
          {body && <p className="text-lg text-ink-muted">{body}</p>}
        </div>
        <div className="shrink-0 flex flex-wrap items-center gap-x-6 gap-y-3">{children}</div>
      </div>
    </section>
  );
}
