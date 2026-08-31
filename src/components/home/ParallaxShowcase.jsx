import { values } from '@/data/team'
import SectionTitle from '@/components/common/SectionTitle'

/**
 * "Why us" — four commitments as a simple numbered row on a tinted band.
 * Deliberately plain: the sections either side of it carry the imagery, so
 * this one earns its place by being easy to read. The columns still drift at
 * alternating speeds on scroll to keep a sense of depth.
 */
export default function ParallaxShowcase() {
  return (
    <section className="section relative overflow-hidden border-y border-brand-100 bg-brand-50">
      <div className="aurora opacity-70" />
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-400 via-brand-600 to-brand-400" />

      <div className="container-x relative z-10">
        <SectionTitle
          align="center"
          eyebrow="Why Creation Publicity"
          title="Anyone can sell you space."
          highlight="We sell you proof."
          lead="Four commitments that decide how we plan a campaign, which sites we refuse to recommend, and why most of our clients book us again."
        />

        <div
          className="mt-10 grid overflow-hidden rounded-3xl border border-brand-100 bg-white shadow-[0_24px_60px_-32px_rgba(15,118,188,0.45)] sm:grid-cols-2 lg:grid-cols-4"
          data-reveal-child
        >
          {values.map((value, index) => (
            <div
              key={value.title}
              data-parallax={index % 2 === 0 ? '0.05' : '-0.04'}
              className="group relative min-h-64 border-b border-brand-100 p-7 transition-colors duration-300 hover:bg-brand-50 sm:even:border-l lg:min-h-72 lg:border-b-0 lg:border-l lg:first:border-l-0"
            >
              <span className="font-display text-sm font-extrabold tracking-[0.18em] text-brand-500">
                {String(index + 1).padStart(2, '0')}
              </span>

              <span className="mt-7 block h-px w-11 bg-brand-400 transition-all duration-300 group-hover:w-20" />

              <h3 className="mt-7 font-display text-xl font-bold text-ink-900">
                {value.title}
              </h3>
              <p className="mt-3 text-[0.92rem] leading-relaxed text-muted">
                {value.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
