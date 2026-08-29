import Link from 'next/link'
import { clients, clientSectors } from '@/data/clients'
import { testimonials } from '@/data/testimonials'
import PageHero from '@/components/common/PageHero'
import SectionTitle from '@/components/common/SectionTitle'
import ClientLogo from '@/components/common/ClientLogo'
import { TestimonialCard } from '@/components/home/TestimonialsPreview'
import CtaBanner from '@/components/home/CtaBanner'
import { ArrowIcon } from '@/components/common/Icons'

export const metadata = {
  title: 'Our Clients & Testimonials',
  description:
    'Brands across retail, real estate, healthcare, automotive, financial services, food and education that trust Creation Publicity with their advertising.',
  alternates: { canonical: '/clients' },
}

export default function ClientsPage() {
  // Group by sector so the page reads as a capability map, not a logo dump.
  const sectors = clientSectors.filter((sector) => sector !== 'All')

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: 'Clients' }]}
        eyebrow="Our Clients"
        title="620+ brands, and"
        highlight="94% of them came back"
        lead="We work with local retailers running a single storefront sign and with national brands running campaigns in forty cities at once. Both get the same account lead and the same closing report."
      />

      {/* ---------------- Clients by sector ---------------- */}
      <section className="section pt-0">
        <div className="container-x space-y-14">
          {sectors.map((sector) => {
            const list = clients.filter((client) => client.sector === sector)
            if (!list.length) return null

            return (
              <div key={sector}>
                <div className="mb-6 flex items-center gap-4">
                  <h2 className="font-display text-[0.78rem] font-bold uppercase tracking-[0.2em] text-brand-600">
                    {sector}
                  </h2>
                  <span className="h-px flex-1 bg-gradient-to-r from-brand-400/25 to-transparent" />
                  <span className="text-[0.72rem] text-faint">{list.length} brands</span>
                </div>

                <div
                  className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
                  data-reveal-child
                >
                  {list.map((client) => (
                    <ClientLogo key={client.name} client={client} />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ---------------- Testimonials ---------------- */}
      <section className="section section-tinted relative overflow-hidden border-t border-line bg-surface-2">
        <div className="aurora opacity-40" />

        <div className="container-x relative z-10">
          <SectionTitle
            align="center"
            eyebrow="Testimonials"
            title="What it is like"
            highlight="to work with us"
          />

          <div className="mt-14 grid gap-5 lg:grid-cols-3" data-reveal-child>
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} />
            ))}
          </div>

          <div className="mt-12 flex justify-center" data-reveal="up">
            <Link href="/blog" className="btn btn-ghost group">
              Read the case studies behind these
              <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner
        eyebrow="Join them"
        title="Your brand could be on this page next year."
        lead="Start with a conversation about what you are trying to achieve. We will tell you honestly whether we are the right agency for it."
      />
    </>
  )
}
