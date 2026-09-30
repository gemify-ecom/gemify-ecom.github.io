import { useTranslations } from '../i18n/use-locale';
import { SectionHeading } from './section-heading';

/** The four Gemify values, each backed by a proof line from the shipped apps. */
export function HomeCoreValuesSection() {
  const { values } = useTranslations('home');

  return (
    <section className="py-16 md:py-24 px-6 bg-mist">
      <div className="max-w-[1120px] mx-auto grid gap-10">
        <SectionHeading label={values.eyebrow} heading={values.heading} lede={values.subheading} />

        {/* Hairline grid: the 1px gap shows the line color between cells */}
        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px overflow-hidden rounded-2xl border border-line bg-line">
          {values.items.map((value) => (
            <li key={value.title} className="flex flex-col gap-2.5 bg-white px-6 pt-6 pb-7">
              <h3 className="font-heading text-[1.1rem] tracking-[-0.01em] text-fg">{value.title}</h3>
              <p className="text-[#39414F] leading-relaxed">{value.description}</p>
              <p className="mt-auto pt-3 text-sm text-muted leading-relaxed">
                <span className="font-semibold text-fg">{values.proofLabel}: </span>
                {value.proof}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
