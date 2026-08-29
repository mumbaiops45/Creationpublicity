import { profileStats, headlineStats } from '@/data/stats'
import { timeline } from '@/data/team'
import { services } from '@/data/services'
import PageHero from '@/components/common/PageHero'
import Counter from '@/components/common/Counter'
import SectionTitle from '@/components/common/SectionTitle'
import CtaBanner from '@/components/home/CtaBanner'
import { ServiceIcon } from '@/components/common/Icons'

export const metadata = {
  title: 'Our Profile in Numbers — Statistics',
  description:
    '16+ years, 4,800+ campaigns, 620+ brands, 140+ cities. The scale, media footprint and delivery record of Creation Publicity Pvt. Ltd.',
  alternates: { canonical: '/statistics' },
}

export default function StatisticsPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: 'Statistics' }]}
        eyebrow="Company Profile"
        title="Sixteen years of work,"
        highlight="counted honestly"
        lead="Every figure on this page is drawn from delivered, invoiced campaigns — not pitches, projections or industry estimates."
      />

      {/* ---------------- Headline numbers ---------------- */}
      <section className="pb-8">
        <div className="container-x">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4" data-reveal-child>
            {headlineStats.map((stat) => (
              <div
                key={stat.label}
                className="glass glass-hover relative overflow-hidden rounded-2xl p-8 text-center"
              >
                <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-400/60 to-transparent" />
                <span className="pointer-events-none absolute -bottom-16 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-brand-50 blur-2xl" />

                <Counter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  className="relative block font-display text-5xl font-extrabold tracking-tight gradient-text sm:text-6xl"
                />
                <p className="relative mt-3 font-display text-sm font-bold text-ink-900">
                  {stat.label}
                </p>
                <p className="relative mt-1.5 text-[0.8rem] text-faint">{stat.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Grouped profile ---------------- */}
      {profileStats.map((group, groupIndex) => (
        <section
          key={group.group}
          className={
            groupIndex % 2 === 1
              ? 'section section-tinted relative overflow-hidden border-y border-line bg-surface-2'
              : 'section relative overflow-hidden'
          }
        >
          {groupIndex % 2 === 1 && <div className="aurora opacity-40" />}

          <div className="container-x relative z-10">
            <SectionTitle eyebrow={`0${groupIndex + 1} — ${group.group}`} title={group.group} />

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" data-reveal-child>
              {group.items.map((item) => (
                <div key={item.label} className="glass glass-hover rounded-2xl p-7">
                  <Counter
                    value={item.value}
                    prefix={item.prefix}
                    suffix={item.suffix}
                    className="block font-display text-4xl font-extrabold tracking-tight text-brand-600"
                  />
                  <p className="mt-3 font-display text-[0.95rem] font-bold text-ink-900">
                    {item.label}
                  </p>
                  <p className="mt-1.5 text-[0.82rem] leading-relaxed text-faint">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ---------------- Service reach strip ---------------- */}
      <section className="section relative overflow-hidden">
        <div className="grid-lines opacity-50" />

        <div className="container-x relative z-10">
          <SectionTitle
            align="center"
            eyebrow="Media Reach"
            title="What we can put in front of"
            highlight="your audience"
            lead="Inventory depth across all twelve disciplines, held or contracted."
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" data-reveal-child>
            {services.map((service) => (
              <div
                key={service.slug}
                className="glass flex items-center gap-4 rounded-xl p-5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-brand-200 bg-brand-50 text-brand-600">
                  <ServiceIcon name={service.icon} className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="font-display text-lg font-extrabold text-ink-900">
                    {service.stat.value}
                  </p>
                  <p className="truncate text-[0.78rem] text-faint">
                    {service.stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Timeline ---------------- */}
      <section className="section section-tinted relative overflow-hidden border-t border-line bg-surface-2">
        <div className="aurora opacity-40" />

        <div className="container-x relative z-10">
          <SectionTitle
            eyebrow="Milestones"
            title="How we got"
            highlight="from one hoarding to here"
          />

          <ol className="relative mt-12 space-y-4" data-reveal-child>
            {timeline.map((item) => (
              <li
                key={item.year}
                className="glass glass-hover group flex flex-col gap-3 rounded-2xl p-6 sm:flex-row sm:items-center sm:gap-8 sm:p-7"
              >
                <span className="font-display text-3xl font-extrabold text-brand-600 transition-colors duration-500 group-hover:text-brand-600/80 sm:w-24 sm:shrink-0">
                  {item.year}
                </span>
                <span className="flex-1">
                  <span className="block font-display text-lg font-bold text-ink-900">
                    {item.title}
                  </span>
                  <span className="mt-1.5 block text-[0.9rem] leading-relaxed text-muted">
                    {item.detail}
                  </span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBanner
        eyebrow="Put the numbers to work"
        title="Every figure here started as one brief."
        lead="Send us yours and we will show you exactly which part of this reach applies to your audience."
      />
    </>
  )
}
