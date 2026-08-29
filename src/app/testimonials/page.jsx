import Link from 'next/link'
import { testimonials } from '@/data/testimonials'
import { headlineStats } from '@/data/stats'
import PageHero from '@/components/common/PageHero'
import Counter from '@/components/common/Counter'
import { TestimonialCard } from '@/components/home/TestimonialsPreview'
import CtaBanner from '@/components/home/CtaBanner'
import { ArrowIcon } from '@/components/common/Icons'

export const metadata = {
  title: 'Client Testimonials',
  description:
    'What marketing heads, retail directors and business owners say about working with Creation Publicity Pvt. Ltd.',
  alternates: { canonical: '/testimonials' },
}

export default function TestimonialsPage() {
  const [featured, ...rest] = testimonials

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: 'Testimonials' }]}
        eyebrow="Testimonials"
        title="The reviews that matter"
        highlight="come after delivery"
        lead="Every quote below is from a client who has since booked us again. We ask for feedback at the closing report, not during the pitch."
      />

      <section className="section pt-0">
        <div className="container-x">
          <div data-reveal="up">
            <TestimonialCard testimonial={featured} featured />
          </div>

          <div className="mt-5 grid gap-5 lg:grid-cols-2" data-reveal-child>
            {rest.map((testimonial) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Retention band — the number behind the quotes. */}
      <section className="relative overflow-hidden border-y border-line bg-surface-2 py-16">
        <div className="aurora opacity-40" />

        <div className="container-x relative z-10">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4" data-reveal-child>
            {headlineStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <Counter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  className="block font-display text-4xl font-extrabold text-brand-600"
                />
                <p className="mt-2 text-[0.85rem] font-semibold text-ink-900">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center" data-reveal="up">
            <Link href="/clients" className="btn btn-ghost group">
              See the client list
              <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner
        eyebrow="Your turn"
        title="We would like to earn one of these."
        lead="Send us a brief. If we are not the right agency for it, we will say so and point you to someone who is."
      />
    </>
  )
}
