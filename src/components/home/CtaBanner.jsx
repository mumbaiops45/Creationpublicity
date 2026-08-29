import Link from 'next/link'
import { site, whatsappLink } from '@/data/site'
import { ArrowIcon, WhatsAppIcon, PhoneIcon } from '@/components/common/Icons'

/** Closing call to action, reused at the foot of most pages. */
export default function CtaBanner({
  eyebrow = 'Start a Campaign',
  title = 'Tell us the number you need to move.',
  lead = 'Send us the brief — or just the problem — and we will come back with a media plan, a timeline and a price. No obligation, no retainer to start.',
}) {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="container-x relative z-10">
        <div
          className="glass relative overflow-hidden rounded-[1.75rem] px-7 py-14 text-center sm:px-14 md:py-20"
          data-reveal="scale"
        >
          {/* Depth wash behind the panel content. */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_100%_at_50%_0%,rgba(15,118,188,0.13),transparent_65%)]"
          />
          <span
            aria-hidden="true"
            data-parallax="0.12"
            className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-brand-50 blur-3xl"
          />
          <span
            aria-hidden="true"
            data-parallax="-0.1"
            className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-brand-100 blur-3xl"
          />

          <div className="relative">
            <p className="eyebrow mb-5 justify-center">{eyebrow}</p>

            <h2 className="mx-auto max-w-2xl text-3xl leading-[1.12] sm:text-4xl lg:text-5xl">
              {title}
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-body">
              {lead}
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/contact" className="btn btn-primary group w-full px-8 py-4 sm:w-auto">
                Enquire Now
                <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost w-full px-8 py-4 sm:w-auto"
              >
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp Us
              </a>
            </div>

            <a
              href={`tel:${site.phoneHref}`}
              className="mt-8 inline-flex items-center gap-2.5 text-sm text-muted transition-colors hover:text-brand-700"
            >
              <PhoneIcon className="h-4 w-4 text-brand-500" />
              Prefer to talk? {site.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
