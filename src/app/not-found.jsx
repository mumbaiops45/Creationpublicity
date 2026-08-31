import Link from 'next/link'
import { services } from '@/data/services'
import { ArrowIcon, ServiceIcon } from '@/components/common/Icons'

export const metadata = {
  title: 'Page not found',
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden py-24">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_0%,rgba(15,118,188,0.12),transparent_65%)]" />
      <div className="aurora opacity-60" />

      <div className="container-x relative z-10 text-center" data-reveal="up">
        <p className="font-display text-[6rem] font-extrabold leading-none gradient-text sm:text-[9rem]">
          404
        </p>

        <h1 className="mt-4 text-3xl sm:text-4xl">This page has been taken down</h1>

        <p className="mx-auto mt-5 max-w-md leading-relaxed text-muted">
          Like an expired hoarding, it is no longer there. Here is where to go instead.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn btn-primary group px-8 py-4">
            Back to Home
            <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link href="/contact" className="btn btn-ghost px-8 py-4">
            Enquire Now
          </Link>
        </div>

        <div className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-3" data-reveal-child>
          {services.slice(0, 3).map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="glass glass-hover group flex items-center gap-3 rounded-xl p-4 text-left"
            >
              <span className="text-brand-600">
                <ServiceIcon name={service.icon} className="h-5 w-5" />
              </span>
              <span className="text-[0.85rem] font-semibold text-body transition-colors group-hover:text-ink-900">
                {service.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
