import Link from 'next/link'
import { testimonials } from '@/data/testimonials'
import { initials } from '@/lib/utils'
import SectionTitle from '@/components/common/SectionTitle'
import { QuoteIcon, ArrowIcon } from '@/components/common/Icons'

export function TestimonialCard({ testimonial, featured = false }) {
  return (
    <figure
      className={`glass glass-hover relative flex flex-col overflow-hidden rounded-2xl p-7 ${
        featured ? 'sm:p-9' : ''
      }`}
    >
      <QuoteIcon className="absolute right-5 top-5 h-10 w-10 text-brand-800" />

      <blockquote
        className={`relative flex-1 leading-relaxed text-body ${
          featured ? 'text-lg sm:text-xl' : 'text-[0.95rem]'
        }`}
      >
        “{testimonial.quote}”
      </blockquote>

      <figcaption className="relative mt-7 flex items-center gap-3.5 border-t border-line pt-5">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brand-200 bg-brand-50 font-display text-[0.78rem] font-bold text-brand-600">
          {initials(testimonial.name)}
        </span>
        <span className="min-w-0">
          <span className="block font-display text-[0.92rem] font-bold text-ink-900">
            {testimonial.name}
          </span>
          <span className="block truncate text-[0.78rem] text-faint">
            {testimonial.role}, {testimonial.company}
          </span>
        </span>
        {testimonial.service && (
          <span className="ml-auto hidden shrink-0 rounded-full border border-brand-200 px-3 py-1 text-[0.66rem] font-semibold uppercase tracking-wider text-brand-600 lg:block">
            {testimonial.service}
          </span>
        )}
      </figcaption>
    </figure>
  )
}

export default function TestimonialsPreview() {
  return (
    <section className="section relative overflow-hidden">
      <div className="grid-lines opacity-50" />

      <div className="container-x relative z-10">
        <SectionTitle
          align="center"
          eyebrow="In Their Words"
          title="What clients say when"
          highlight="the campaign is over"
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3" data-reveal-child>
          {testimonials.slice(0, 3).map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>

        <div className="mt-12 flex justify-center" data-reveal="up">
          <Link href="/testimonials" className="btn btn-ghost group">
            Read more testimonials
            <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
