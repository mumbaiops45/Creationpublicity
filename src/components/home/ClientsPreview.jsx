import Link from 'next/link'
import { clients } from '@/data/clients'
import { initials } from '@/lib/utils'
import SectionTitle from '@/components/common/SectionTitle'
import { ArrowIcon } from '@/components/common/Icons'

/** One row of the marquee, rendered twice so the loop is seamless. */
function MarqueeRow({ items, duration, reverse = false }) {
  return (
    <div className="marquee relative overflow-hidden">
      <div
        className="marquee-track gap-4"
        style={{
          '--marquee-duration': duration,
          animationDirection: reverse ? 'reverse' : 'normal',
        }}
      >
        {[...items, ...items].map((client, i) => (
          <div
            key={`${client.name}-${i}`}
            aria-hidden={i >= items.length}
            className="group flex h-20 w-56 shrink-0 items-center justify-center gap-3 rounded-xl border border-line bg-white px-5 shadow-[0_2px_10px_-6px_rgba(11,44,71,0.3)] transition-all duration-500 hover:-translate-y-1 hover:border-brand-300 hover:shadow-[0_12px_26px_-14px_rgba(15,118,188,0.5)]"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-600 font-display text-[0.68rem] font-bold text-white">
              {initials(client.name)}
            </span>
            <span className="font-display text-[0.84rem] font-bold leading-tight text-ink-800">
              {client.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function ClientsPreview() {
  const half = Math.ceil(clients.length / 2)

  return (
    <section className="section section-tinted relative overflow-hidden border-y border-line bg-surface-2">
      <div className="container-x relative z-10">
        <SectionTitle
          align="center"
          eyebrow="Who We Work With"
          title="Brands that came back"
          highlight="for the second campaign"
          lead="Retail, real estate, healthcare, automotive, financial services, food and education — 620+ brands and counting."
        />
      </div>

      <div className="relative mt-10 space-y-4">
        {/* Fade the marquee out at both edges instead of cutting it hard. */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-32" />

        <MarqueeRow items={clients.slice(0, half)} duration="52s" />
        <MarqueeRow items={clients.slice(half)} duration="46s" reverse />
      </div>

      <div className="container-x mt-9 flex justify-center" data-reveal="up">
        <Link href="/clients" className="btn btn-ghost group">
          View all clients &amp; testimonials
          <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  )
}
