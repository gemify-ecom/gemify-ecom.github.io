interface GemifyLogoMarkProps {
  className?: string;
}

/**
 * The Gemify gem, drawn for dark grounds: the outline takes the current text
 * color (white on the ink header and footer) and the inner chevron is the
 * spark cyan, the same accent as the blue leaf on the AI app icons.
 */
export function GemifyLogoMark({ className = 'w-8 h-8' }: GemifyLogoMarkProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`shrink-0 ${className}`}
    >
      <path d="M3.26 9.61 6.82 4.27A.64.64 0 0 1 7.32 4h9.36c.2 0 .39.1.5.27l3.56 5.34a.6.6 0 0 1-.05.73L12 20l-8.69-9.65a.6.6 0 0 1-.05-.73Z" />
      <path d="M9.4 12 7.5 10 9 8" stroke="#1EC0FF" />
    </svg>
  );
}
