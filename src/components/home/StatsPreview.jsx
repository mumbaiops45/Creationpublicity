import Link from 'next/link'
import { headlineStats } from '@/data/stats'
import Counter from '@/components/common/Counter'
import { ArrowIcon } from '@/components/common/Icons'

/**
 * The numbers band. Deliberately dark: it anchors the middle of an otherwise
 * white page, and the brief asked for the statistics to feel bold.
 */
export default function StatsPreview() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-14 md:py-18">
      {/* Brand wash + faint grid, the same treatment as the hero. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_90%_80%_at_50%_0%,#12436a,transparent_70%)]"
      />

      <div className="container-x relative z-10">
        <div className="mx-auto max-w-2xl text-center" data-reveal="up">
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.3em] text-brand-300">
            By the numbers
          </p>
          <h2 className="mt-4 text-3xl leading-tight text-white sm:text-4xl">
            Sixteen years, measured in{' '}
            <span className="text-brand-300">campaigns delivered</span>
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4" data-reveal-child>
          {headlineStats.map((stat, i) => (
            <div
              key={stat.label}
              // Hairline separators rather than boxes — simpler, and it lets
              // the numbers themselves carry the section.
              className={
                i > 0 ? 'text-center lg:border-l lg:border-white/15' : 'text-center'
              }
            >
              <Counter
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                className="block font-display text-[2.1rem] font-extrabold leading-none tracking-tight text-white sm:text-5xl"
              />
              <p className="mt-3 font-display text-sm font-bold text-brand-300">
                {stat.label}
              </p>
              <p className="mx-auto mt-2 max-w-[15rem] text-[0.8rem] leading-relaxed text-white/55">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center" data-reveal="up">
          <Link href="/statistics" className="btn btn-on-dark group">
            See the full profile
            <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
