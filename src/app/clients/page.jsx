import Link from 'next/link'
import Image from 'next/image'
import { clients, clientSectors } from '@/data/clients'
import { testimonials } from '@/data/testimonials'
import { getAllPosts } from '@/data/posts'
import PageHero from '@/components/common/PageHero'
import SectionTitle from '@/components/common/SectionTitle'
import ClientLogo from '@/components/common/ClientLogo'
import BlogCard from '@/components/blog/BlogCard'
import { TestimonialCard } from '@/components/home/TestimonialsPreview'
import CtaBanner from '@/components/home/CtaBanner'
import { ArrowIcon, CheckIcon } from '@/components/common/Icons'

export const metadata = {
  title: 'Our Clients & Testimonials',
  description:
    'Brands across retail, real estate, healthcare, automotive, financial services, food and education that trust Creation Publicity with their advertising.',
  alternates: { canonical: '/clients' },
}

export default function ClientsPage() {
  // Group by sector so the page reads as a capability map, not a logo dump.
  const sectors = clientSectors.filter((sector) => sector !== 'All')

  // The case studies name brands that appear in the grid above, so they are
  // the proof for this page rather than a generic reading list.
  const caseStudies = getAllPosts()
    .filter((post) => post.category === 'Case Study')
    .slice(0, 3)

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: 'Clients' }]}
        eyebrow="Our Clients"
        title="620+ brands, and"
        highlight="94% of them came back"
        lead="We work with local retailers running a single storefront sign and with national brands running campaigns in forty cities at once. Both get the same account lead and the same closing report."
        media={
          <div
            className="relative aspect-square overflow-hidden rounded-[1.5rem] border border-line shadow-[0_26px_58px_-30px_rgba(11,44,71,0.55)]"
            data-reveal-image
          >
            <Image
              src="/images/clients/clients-banner.webp"
              alt="Brand campaigns running across hoardings, mall facades, bus shelters and transit media"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        }
      >
        <ul className="mt-7 space-y-2.5">
          {[
            'Seven industries, from single-store retail to listed corporates',
            'The same account lead whether you book one site or forty cities',
            'Every campaign closes with dated photographs from every site',
          ].map((point) => (
            <li
              key={point}
              className="flex items-start gap-3 text-[0.93rem] leading-relaxed text-body"
            >
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                <CheckIcon className="h-3 w-3" />
              </span>
              {point}
            </li>
          ))}
        </ul>
      </PageHero>

      {/* ---------------- Clients by sector ---------------- */}
      <section className="section section-tinted relative overflow-hidden border-y border-line bg-surface-2">
        <div className="aurora opacity-40" />

        <div className="container-x relative z-10 space-y-14">
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

      {/* ---------------- Selected work ---------------- */}
      <section className="section relative overflow-hidden">

        <div className="container-x relative z-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionTitle
              eyebrow="Selected Work"
              title="The campaigns behind"
              highlight="these names"
              lead="Three briefs from the brands above, with the deadline, the constraint and the number at the end left in."
            />

            <Link
              href="/blog"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
              data-reveal="left"
            >
              All case studies
              <ArrowIcon className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" data-reveal-child>
            {caseStudies.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
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

          <div className="mt-10 grid gap-5 lg:grid-cols-3" data-reveal-child>
            {testimonials.slice(0, 3).map((testimonial) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} />
            ))}
          </div>

          <div className="mt-9 flex justify-center" data-reveal="up">
            <Link href="/testimonials" className="btn btn-ghost group">
              Read all client testimonials
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
