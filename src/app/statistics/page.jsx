import Link from 'next/link'
import Image from 'next/image'
import { profileStats, headlineStats } from '@/data/stats'
import { services } from '@/data/services'
import PageHero from '@/components/common/PageHero'
import Counter from '@/components/common/Counter'
import SectionTitle from '@/components/common/SectionTitle'
import CtaBanner from '@/components/home/CtaBanner'
import { ArrowIcon, CheckIcon } from '@/components/common/Icons'

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
        media={
          <div
            className="relative aspect-[6/5] overflow-hidden rounded-[1.5rem] border border-line shadow-[0_26px_58px_-30px_rgba(11,44,71,0.55)]"
            data-reveal-image
          >
            <Image
              src="/images/statistics/statistics-banner.webp"
              alt="Creation Publicity campaigns running across hoardings, metro, bus and press media"
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
            'Delivered and invoiced work only — no pitches or projections',
            'Inventory we hold or have contracted, not aggregator listings',
            'Restated at the close of each financial year',
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

      {/* ---------------- Headline numbers ---------------- */}
      {/*
        The dark anchor of the page. This is the "bold and impressive" moment
        the brief asks for: four figures at display size, white on deep navy,
        counting up as they scroll in. Everything else on the page stays light
        so this band lands as a punch rather than a wash.
      */}
      <section className="relative overflow-hidden bg-ink-950 py-16 md:py-24">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_90%_85%_at_50%_0%,#12436a,transparent_72%)]"
        />
        <span
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-400/70 to-transparent"
        />

        <div className="container-x relative z-10">
          <p
            className="text-center text-[0.68rem] font-bold uppercase tracking-[0.3em] text-brand-300"
            data-reveal="fade"
          >
            The profile in four numbers
          </p>

          <div
            className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 sm:mt-12 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-4"
            data-reveal-child
          >
            {headlineStats.map((stat, index) => (
              <div
                key={stat.label}
                // Hairline dividers rather than boxes — nothing competes with
                // the figures themselves.
                className={
                  index > 0
                    ? 'text-center lg:border-l lg:border-white/15'
                    : 'text-center'
                }
              >
                <Counter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  className="block font-display text-[2.35rem] font-extrabold leading-[0.95] tracking-[-0.03em] text-white sm:text-6xl lg:text-[4.2rem]"
                />
                <p className="mt-4 font-display text-[0.95rem] font-bold text-brand-300">
                  {stat.label}
                </p>
                <p className="mx-auto mt-2 max-w-[15rem] text-[0.82rem] leading-relaxed text-white/55">
                  {stat.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Grouped profile ---------------- */}
      {/* 'Scale' is dropped: it restates the four headline numbers directly
          above it. Only the groups that add new figures are rendered. */}
      {profileStats
        .filter((group) => group.group !== 'Scale')
        .map((group, groupIndex) => (
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
            <SectionTitle eyebrow={`Profile 0${groupIndex + 1}`} title={group.group} />

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
      {/* border-t: the Delivery group above is white too, so without it the
          two bands run together. */}
      <section className="section relative overflow-hidden border-t border-line">

        <div className="container-x relative z-10">
          <SectionTitle
            align="center"
            eyebrow="Media Reach"
            title="What we can put in front of"
            highlight="your audience"
            lead="Inventory depth across all twelve disciplines, held or contracted."
          />

          {/* Each discipline's headline number, set on the photograph of the
              medium itself — the figures stop being abstract. */}
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" data-reveal-child>
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group block overflow-hidden rounded-2xl border border-line bg-white shadow-[0_1px_3px_rgba(11,44,71,0.05)] transition-[transform,box-shadow,border-color] duration-500 ease-out-expo hover:-translate-y-1.5 hover:border-brand-300 hover:shadow-[0_18px_40px_-20px_rgba(15,118,188,0.45)]"
              >
                <div className="relative aspect-[3/2] overflow-hidden bg-surface-3" data-reveal-image>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-[900ms] ease-out-expo group-hover:scale-[1.06]"
                  />

                  {/* Scrim under the number, not across the whole photo. */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/20 to-transparent"
                  />

                  <span className="absolute inset-x-5 bottom-4">
                    <span className="block font-display text-[1.6rem] font-extrabold leading-none text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                      {service.stat.value}
                    </span>
                    <span className="mt-1.5 block text-[0.78rem] leading-snug text-white/75">
                      {service.stat.label}
                    </span>
                  </span>
                </div>

                <div className="flex items-center justify-between gap-3 px-5 py-3.5">
                  <span className="font-display text-[0.9rem] font-bold text-ink-900 transition-colors duration-300 group-hover:text-brand-700">
                    {service.shortTitle}
                  </span>
                  <ArrowIcon className="h-4 w-4 shrink-0 text-brand-500 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
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
