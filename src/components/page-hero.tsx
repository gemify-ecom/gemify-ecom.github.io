import type { ReactNode } from 'react';

interface PageHeroProps {
  /** Small mono label above the title. */
  label?: string;
  title: ReactNode;
  lede?: ReactNode;
  /** 192px app icon, shown above the label on app pages. */
  icon?: string;
  /** Actions row: one PRIMARY_BUTTON_ON_INK, then TEXT_LINK_ON_INK links. */
  children?: ReactNode;
}

/**
 * Ink hero for every page except home: same ground as the header, left
 * aligned, on the 1120px content grid of the sections below.
 */
export function PageHero({ label, title, lede, icon, children }: PageHeroProps) {
  return (
    <section className="bg-ink text-white">
      {/* 1168px minus the 24px padding on each side = the 1120px content width of the sections */}
      <div className="max-w-[1168px] mx-auto px-6 py-14 md:py-20">
        <div className="grid gap-5 max-w-[760px]">
          {icon && (
            <img
              src={icon}
              alt=""
              width={72}
              height={72}
              className="w-[72px] h-[72px] mb-1 rounded-[22%] bg-white object-cover shadow-[0_18px_30px_-12px_rgba(0,0,0,0.6)]"
            />
          )}
          {label && <p className="label-mono text-[#8FC8FF]">{label}</p>}
          <h1 className="font-heading text-[clamp(2.2rem,4.8vw,3.4rem)] leading-[1] tracking-[-0.03em]">{title}</h1>
          {lede && <p className="text-lg text-ink-muted leading-relaxed max-w-[620px]">{lede}</p>}
          {children && <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2">{children}</div>}
        </div>
      </div>
    </section>
  );
}
