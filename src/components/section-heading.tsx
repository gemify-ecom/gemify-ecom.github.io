import type { ReactNode } from 'react';

interface SectionHeadingProps {
  /** Small mono label above the heading. */
  label?: string;
  heading: ReactNode;
  lede?: ReactNode;
  /** Colors for an ink (dark) band. */
  onInk?: boolean;
  className?: string;
}

/** Left-aligned section head from the Signal board: mono label, Archivo headline, muted lede. */
export function SectionHeading({ label, heading, lede, onInk = false, className = '' }: SectionHeadingProps) {
  return (
    <div className={`grid content-start gap-3 max-w-[680px] ${className}`}>
      {label && <p className={`label-mono ${onInk ? 'text-[#8FC8FF]' : 'text-muted'}`}>{label}</p>}
      <h2 className={`font-heading text-[clamp(1.7rem,3.4vw,2.4rem)] ${onInk ? 'text-white' : 'text-fg'}`}>{heading}</h2>
      {lede && <p className={`text-lg ${onInk ? 'text-ink-muted' : 'text-muted'}`}>{lede}</p>}
    </div>
  );
}
