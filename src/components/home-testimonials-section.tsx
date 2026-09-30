import { Star } from 'lucide-react';
import { useTranslations } from '../i18n/use-locale';
import { APP_STORE_REVIEWS } from '../site/app-store-reviews';
import { SectionHeading } from './section-heading';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  url?: string;
  highlight?: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  /** The first review is set larger on an ink card. */
  lead?: boolean;
}

function TestimonialCard({ testimonial, lead = false }: TestimonialCardProps) {
  const { quote, name, role, url, highlight } = testimonial;
  const { testimonials } = useTranslations('home');

  return (
    <figure
      className={`flex h-full flex-col gap-4 rounded-2xl p-6 ${
        // Lead card from 1024px: highlight and author on the left, the quote on the right
        lead
          ? 'bg-ink text-white md:p-8 lg:grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-x-12 lg:gap-y-6'
          : 'bg-white border border-line'
      }`}
    >
      {highlight && (
        <p className={`font-heading ${lead ? 'text-[clamp(1.6rem,3vw,2.2rem)] text-spark' : 'text-[1.1rem] text-fg'}`}>
          {highlight}
        </p>
      )}

      {/* Verbatim in English; other languages show a translation labeled as one */}
      <blockquote className={`m-0 ${lead ? 'lg:col-start-2 lg:row-start-1 lg:row-span-2' : ''}`}>
        <p className={`leading-relaxed ${lead ? 'text-lg md:text-xl text-[#DCE3EE]' : 'text-[#39414F]'}`}>
          {testimonials.quoteMarks.open}
          {quote}
          {testimonials.quoteMarks.close}
        </p>
      </blockquote>

      {/* Author, pinned to the bottom so authors line up across a row */}
      <figcaption className={`mt-auto pt-4 border-t grid gap-1 ${lead ? 'border-white/15' : 'border-line'}`}>
        <span className="text-sm">
          <span className={`font-semibold ${lead ? 'text-white' : 'text-fg'}`}>{name}</span>
          <span className={lead ? 'text-ink-muted' : 'text-muted'}>, </span>
          {url ? (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:underline ${lead ? 'text-[#8FC8FF]' : 'text-signal'}`}
            >
              {role}
            </a>
          ) : (
            <span className={lead ? 'text-ink-muted' : 'text-muted'}>{role}</span>
          )}
        </span>
        <span className={`inline-flex items-center gap-2 label-mono ${lead ? 'text-[#8B96AA]' : 'text-muted'}`}>
          {lead && (
            <span className="flex gap-0.5 text-[#F5C518]" aria-hidden="true">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-current" />
              ))}
            </span>
          )}
          {testimonials.verified}
          {testimonials.translatedNote && <span> · {testimonials.translatedNote}</span>}
        </span>
      </figcaption>
    </figure>
  );
}

export function HomeTestimonialsSection() {
  const { testimonials: t } = useTranslations('home');

  // Names and links are the same in every language; the text comes from the
  // dictionary (verbatim in English, translated and labeled elsewhere).
  const testimonials: Testimonial[] = APP_STORE_REVIEWS.map((review) => ({
    quote: t.reviews[review.id].quote,
    highlight: t.reviews[review.id].highlight,
    name: review.name,
    role: review.store ?? t.merchantRole,
    url: review.url,
  }));

  const [lead, ...rest] = testimonials;

  return (
    <section className="py-16 md:py-24 px-6 bg-white">
      <div className="max-w-[1120px] mx-auto grid gap-10">
        <SectionHeading label={t.badge} heading={t.heading} lede={t.subheading} />

        {/* Lead review across the top, the other four in a row below it */}
        <div className="grid gap-4">
          <TestimonialCard testimonial={lead} lead />
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {rest.map((testimonial) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
