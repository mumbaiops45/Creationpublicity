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
    <section className="section section-tinted relative overflow-hidden border-y border-line bg-surface-2">
      <div className="aurora opacity-50" />

      <div className="container-x relative z-10">
        <SectionTitle
          align="center"
          eyebrow="Why Creation Publicity"
          title="Anyone can sell you space."
          highlight="We sell you proof."
          lead="Four commitments that decide how we plan a campaign, which sites we refuse to recommend, and why most of our clients book us again."
        />

        <div
          className="mt-16 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4"
          data-reveal-child
        >
          {values.map((value, index) => (
            <div key={value.title} data-parallax={index % 2 === 0 ? '0.05' : '-0.04'}>
              <span className="font-display text-4xl font-extrabold leading-none text-brand-200">
                {String(index + 1).padStart(2, '0')}
              </span>

              <span className="mt-4 block h-px w-10 bg-brand-400" />

              <h3 className="mt-5 font-display text-lg font-bold text-ink-900">
                {value.title}
              </h3>
              <p className="mt-2.5 text-[0.9rem] leading-relaxed text-muted">
                {value.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
