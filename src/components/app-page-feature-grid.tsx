import type { ReactNode } from 'react';

interface AppPageFeatureGridItem {
  title: string;
  description: string;
}

interface AppPageFeatureGridProps {
  items: readonly AppPageFeatureGridItem[];
  /** Optional lead per item (one plain line icon or a mono step label), matched by index. */
  leads?: readonly ReactNode[];
  /** Columns from the lg breakpoint up. */
  columns?: 2 | 3;
  /** Dense lists (problems) use a bold title, value-like items (features, steps) the heading font. */
  dense?: boolean;
}

// Full class names so Tailwind can see them at build time.
const COLUMN_CLASSES = {
  2: 'sm:grid-cols-2',
  3: 'sm:grid-cols-2 lg:grid-cols-3',
} as const;

/** Hairline grid for the equal items on an app page: problems, features, steps. */
export function AppPageFeatureGrid({ items, leads, columns = 3, dense = false }: AppPageFeatureGridProps) {
  return (
    <ul className={`grid ${COLUMN_CLASSES[columns]} gap-px overflow-hidden rounded-2xl border border-line bg-line`}>
      {items.map((item, index) => (
        <li key={item.title} className="flex flex-col gap-2.5 bg-white px-6 pt-6 pb-7">
          {leads?.[index]}
          <h3
            className={
              dense ? 'font-bold text-fg' : 'font-heading text-[1.1rem] tracking-[-0.01em] text-fg'
            }
          >
            {item.title}
          </h3>
          <p className="text-[#39414F] leading-relaxed">{item.description}</p>
        </li>
      ))}
    </ul>
  );
}
