import Link from 'next/link'
import { notFound } from 'next/navigation'
import { services, getServiceBySlug, getServiceSlugs } from '@/data/services'
import { site } from '@/data/site'
import PageHero from '@/components/common/PageHero'
import ServiceEnquiryForm from '@/components/services/ServiceEnquiryForm'
import { ServiceIcon, CheckIcon, ArrowIcon } from '@/components/common/Icons'

/** Pre-render all 12 service pages at build time. */
export function generateStaticParams() {
  return getServiceSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) return { title: 'Service not found' }

  return {
    title: `${service.title} — Advertising Services`,
    description: service.excerpt,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.title} | ${site.name}`,
      description: service.excerpt,
      url: `${site.url}/services/${service.slug}/`,
      type: 'website',
    },
  }
}

export default async function ServicePage({ params }) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) notFound()

  const others = services.filter((item) => item.slug !== service.slug).slice(0, 3)

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.excerpt,
    url: `${site.url}/services/${service.slug}/`,
    serviceType: service.title,
    provider: { '@type': 'Organization', name: site.legalName, url: site.url },
    areaServed: { '@type': 'Country', name: 'India' },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${service.title} formats`,
      itemListElement: service.formats.map((format) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: format.name, description: format.detail },
      })),
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <PageHero
        breadcrumbs={[{ label: 'Services', href: '/services' }, { label: service.title }]}
        eyebrow={service.tagline}
        title={service.title}
        lead={service.excerpt}
      >
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <Link href="#enquiry" className="btn btn-primary group">
            Enquire About This Service
            <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <div className="flex items-center gap-3 rounded-full border border-brand-200 bg-brand-50 px-5 py-2.5">
            <span className="text-brand-600">
              <ServiceIcon name={service.icon} className="h-5 w-5" />
            </span>
            <span className="text-sm">
              <span className="font-display font-bold text-ink-900">{service.stat.value}</span>
              <span className="ml-1.5 text-muted">{service.stat.label}</span>
            </span>
          </div>
        </div>
      </PageHero>

      {/* ---------------- Detail + formats ---------------- */}
      <section className="section pt-0">
        <div className="container-x grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <div className="space-y-5" data-reveal="up">
              {service.description.map((paragraph, index) => (
                <p key={index} className="text-[1.02rem] leading-relaxed text-body">
                  {paragraph}
                </p>
              ))}
            </div>

            <h2 className="mt-12 font-display text-2xl font-bold text-ink-900" data-reveal="up">
              What you get
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2" data-reveal-child>
              {service.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="glass flex items-start gap-3 rounded-xl p-4 text-[0.9rem] leading-relaxed text-body"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                    <CheckIcon className="h-3 w-3" />
                  </span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          {/* Formats panel — sticks alongside the copy on desktop. */}
          <aside className="lg:sticky lg:top-28 lg:h-fit" data-reveal="right">
            <div className="glass rounded-2xl p-7">
              <h2 className="font-display text-lg font-bold text-ink-900">Formats we offer</h2>
              <p className="mt-1.5 text-[0.84rem] text-faint">
                Mix and match — most campaigns use two or more.
              </p>

              <ul className="mt-6 space-y-4">
                {service.formats.map((format) => (
                  <li key={format.name} className="border-l-2 border-brand-300 pl-4">
                    <p className="font-display text-[0.95rem] font-semibold text-brand-800">
                      {format.name}
                    </p>
                    <p className="mt-1 text-[0.84rem] leading-relaxed text-muted">
                      {format.detail}
                    </p>
                  </li>
                ))}
              </ul>

              <Link href="#enquiry" className="btn btn-ghost mt-7 w-full">
                Get a quote
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* ---------------- Enquiry form ---------------- */}
      <section className="relative overflow-hidden border-y border-line bg-surface-2 py-20 md:py-24">
        <div className="aurora opacity-50" />
        <div className="container-x relative z-10">
          <div className="mx-auto max-w-3xl" data-reveal="up">
            <ServiceEnquiryForm service={service} />
          </div>
        </div>
      </section>

      {/* ---------------- Related ---------------- */}
      <section className="section">
        <div className="container-x">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-display text-2xl font-bold text-ink-900" data-reveal="up">
              Other services
            </h2>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
              data-reveal="left"
            >
              View all 12
              <ArrowIcon className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" data-reveal-child>
            {others.map((other) => (
              <Link
                key={other.slug}
                href={`/services/${other.slug}`}
                className="glass glass-hover group rounded-2xl p-6"
              >
                <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-brand-200 bg-brand-50 text-brand-600 transition-colors group-hover:border-brand-400">
                  <ServiceIcon name={other.icon} className="h-5 w-5" />
                </span>
                <h3 className="font-display text-base font-bold text-ink-900 transition-colors group-hover:text-brand-800">
                  {other.title}
                </h3>
                <p className="mt-2 text-[0.85rem] leading-relaxed text-muted">
                  {other.tagline}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
