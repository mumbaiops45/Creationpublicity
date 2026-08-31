import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { services, getServiceBySlug, getServiceSlugs } from '@/data/services'
import { site } from '@/data/site'
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

      <section className="relative overflow-hidden border-b border-line bg-surface-2 pb-12 pt-29 sm:pt-30 lg:pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_8%_18%,rgba(43,143,226,0.16),transparent_28%),radial-gradient(circle_at_88%_72%,rgba(15,118,188,0.1),transparent_32%)]" />
        <div className="container-x relative z-10">
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex flex-wrap items-center gap-2 text-[0.76rem] text-faint">
              <li>
                <Link href="/" className="transition-colors hover:text-brand-700">
                  Home
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span aria-hidden="true" className="text-brand-700">/</span>
                <Link href="/services" className="transition-colors hover:text-brand-700">
                  Services
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span aria-hidden="true" className="text-brand-700">/</span>
                <span aria-current="page" className="text-brand-600">{service.title}</span>
              </li>
            </ol>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-16">
            <div data-reveal="up">
              <div className="inline-flex items-center gap-3 rounded-full border border-brand-200 bg-white px-4 py-2 shadow-sm">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                  <ServiceIcon name={service.icon} className="h-4 w-4" />
                </span>
                <span className="text-[0.73rem] font-bold uppercase tracking-[0.12em] text-brand-700">
                  {service.tagline}
                </span>
              </div>

              <h1 className="mt-7 max-w-2xl font-display text-[2.2rem] font-extrabold leading-[1.05] tracking-[-0.03em] text-ink-900 sm:text-5xl lg:text-[3.4rem]">
                {service.title}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-body sm:text-lg">
                {service.excerpt}
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link href="#enquiry" className="btn btn-primary group">
                  Enquire About This Service
                  <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <div className="flex items-center gap-3 rounded-full border border-brand-200 bg-white px-5 py-2.5 shadow-sm">
                  <span className="text-brand-600">
                    <ServiceIcon name={service.icon} className="h-5 w-5" />
                  </span>
                  <span className="text-sm">
                    <span className="font-display font-bold text-ink-900">{service.stat.value}</span>
                    <span className="ml-1.5 text-muted">{service.stat.label}</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-xl" data-reveal="right">
              <div className="relative aspect-[3/2] overflow-hidden rounded-[1.8rem] border-[10px] border-white bg-brand-100 shadow-[0_28px_60px_-28px_rgba(11,44,71,0.42)]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  priority
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Detail + formats ---------------- */}
      {/* Own top padding rather than `pt-0`: the hero above is a separate
          tinted band with a border, so this needs air under it. */}
      <section className="section pt-10 md:pt-14">
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

      {/* ---------------- Next steps ---------------- */}
      <section className="relative overflow-hidden bg-ink-950 py-14 md:py-18">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_10%,rgba(43,143,226,0.35),transparent_32%),radial-gradient(circle_at_88%_92%,rgba(15,118,188,0.22),transparent_28%)]" />
        <div className="container-x relative z-10">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
            <div data-reveal="up">
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-brand-300">
                Ready when you are
              </p>
              <h2 className="mt-5 max-w-xl font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                Get a plan for your {service.shortTitle.toLowerCase()} campaign.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70">
                Share your objective, locations and timing. Our team will recommend the right
                formats, availability and a practical rollout plan.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="#enquiry" className="btn btn-light group">
                  Send us your brief
                  <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link href="/services" className="btn btn-on-dark">
                  Explore all services
                </Link>
              </div>
            </div>

            <ol className="grid gap-4 sm:grid-cols-3" data-reveal-child>
              {[
                ['01', 'Share your brief', 'Tell us the goal, audience, locations and campaign timing.'],
                ['02', 'Receive a clear plan', 'Get suitable formats, availability and a transparent recommendation.'],
                ['03', 'Launch with proof', 'We coordinate execution and keep you updated from start to finish.'],
              ].map(([number, title, detail]) => (
                <li key={number} className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-sm">
                  <span className="font-display text-sm font-bold tracking-[0.15em] text-brand-300">{number}</span>
                  <h3 className="mt-6 font-display text-lg font-bold text-white">{title}</h3>
                  <p className="mt-2 text-[0.86rem] leading-relaxed text-white/65">{detail}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ---------------- Enquiry form ---------------- */}
      {/* The brief asks for a simple enquiry form on every service page. The
          form carries id="enquiry" itself, which is what the two buttons above
          scroll to. Fields come from `formFields` on the service, so each page
          asks the questions that actually matter for that medium. */}
      <section className="relative overflow-hidden border-y border-line bg-surface-2 py-14 md:py-20">
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
