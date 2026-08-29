import Image from 'next/image'
import { story, values, timeline, team } from '@/data/team'
import { site } from '@/data/site'
import { headlineStats } from '@/data/stats'
import { initials } from '@/lib/utils'
import PageHero from '@/components/common/PageHero'
import SectionTitle from '@/components/common/SectionTitle'
import Counter from '@/components/common/Counter'
import ProcessSection from '@/components/home/ProcessSection'
import CtaBanner from '@/components/home/CtaBanner'
import { CheckIcon, LinkedInIcon } from '@/components/common/Icons'

export const metadata = {
  title: 'About Us — Our Story & Team',
  description:
    'Creation Publicity Pvt. Ltd. has been planning and executing advertising campaigns across India since 2009. Our story, our values and the team behind the work.',
  alternates: { canonical: '/about' },
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: 'About Us' }]}
        eyebrow="About Us"
        title="An independent agency"
        highlight="that still checks the site"
        lead={`Founded in ${site.foundedYear}. Still independently owned, still doing the unglamorous work that makes a campaign land.`}
      />

      {/* ---------------- Story ---------------- */}
      <section className="section pt-0">
        <div className="container-x grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div className="space-y-6" data-reveal="up">
            {story.map((paragraph, index) => (
              <p
                key={index}
                className={
                  index === 0
                    ? 'text-lg leading-relaxed text-ink-800 sm:text-xl'
                    : 'text-[1.02rem] leading-relaxed text-body'
                }
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Depth panel — drifts against the copy as you scroll. */}
          <aside className="relative" data-reveal="right">
            <div
              data-parallax="0.08"
              className="glass relative overflow-hidden rounded-2xl p-8"
            >
              <span className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-brand-50 blur-3xl" />

              <p className="eyebrow mb-6">At a glance</p>

              <dl className="space-y-6">
                {headlineStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-baseline justify-between gap-4 border-b border-line pb-5 last:border-0 last:pb-0"
                  >
                    <dt className="text-[0.88rem] text-muted">{stat.label}</dt>
                    <dd>
                      <Counter
                        value={stat.value}
                        prefix={stat.prefix}
                        suffix={stat.suffix}
                        className="font-display text-2xl font-extrabold text-brand-600"
                      />
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>
        </div>
      </section>

      {/* ---------------- Values ---------------- */}
      <section className="section section-tinted relative overflow-hidden border-y border-line bg-surface-2">
        <div className="aurora opacity-40" />

        <div className="container-x relative z-10">
          <SectionTitle
            eyebrow="What We Stand For"
            title="Four rules we do not"
            highlight="bend for a booking"
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2" data-reveal-child>
            {values.map((value) => (
              <div key={value.title} className="glass glass-hover rounded-2xl p-7">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-brand-200 bg-brand-50 text-brand-600">
                  <CheckIcon className="h-4 w-4" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-ink-900">
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

      {/* ---------------- Timeline ---------------- */}
      <section className="section relative overflow-hidden">
        <div className="grid-lines opacity-50" />

        <div className="container-x relative z-10">
          <SectionTitle
            align="center"
            eyebrow="Our Journey"
            title="Sixteen years,"
            highlight="six turning points"
          />

          <ol className="relative mx-auto mt-14 max-w-3xl" data-reveal-child>
            {timeline.map((item, index) => (
              <li key={item.year} className="relative flex gap-6 pb-10 last:pb-0">
                {/* Connector line between markers. */}
                {index < timeline.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute left-[1.4rem] top-12 h-[calc(100%-2rem)] w-px bg-gradient-to-b from-brand-400/40 to-transparent"
                  />
                )}

                <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brand-300 bg-surface-2 font-display text-[0.68rem] font-bold text-brand-600">
                  {item.year}
                </span>

                <div className="glass flex-1 rounded-xl p-5">
                  <h3 className="font-display text-base font-bold text-ink-900">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-[0.88rem] leading-relaxed text-muted">
                    {item.detail}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <ProcessSection />

      {/* ---------------- Team ---------------- */}
      <section className="section section-tinted relative overflow-hidden border-t border-line bg-surface-2">
        <div className="aurora opacity-40" />

        <div className="container-x relative z-10">
          <SectionTitle
            align="center"
            eyebrow="The Team"
            title="The people who will"
            highlight="actually run your campaign"
            lead="No layers of account management between you and the person doing the work."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" data-reveal-child>
            {team.map((member, index) => (
              <div key={index} className="glass glass-hover group rounded-2xl p-6 text-center">
                <span className="mx-auto mb-5 flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border border-brand-200 bg-brand-50">
                  {member.photo ? (
                    <Image
                      src={member.photo}
                      alt={member.name}
                      width={160}
                      height={160}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span className="font-display text-lg font-bold text-brand-600">
                      {initials(member.name)}
                    </span>
                  )}
                </span>

                <h3 className="font-display text-base font-bold text-ink-900">{member.name}</h3>
                <p className="mt-1 text-[0.78rem] font-semibold uppercase tracking-wider text-brand-600">
                  {member.role}
                </p>
                <p className="mt-3 text-[0.85rem] leading-relaxed text-muted">
                  {member.bio}
                </p>

                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} on LinkedIn`}
                    className="mt-4 inline-flex rounded-full border border-brand-200 p-2 text-muted transition-colors hover:border-brand-400 hover:text-brand-700"
                  >
                    <LinkedInIcon className="h-4 w-4" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        eyebrow="Work with us"
        title="Come and give us something difficult."
        lead="The briefs we enjoy most are the ones with a short deadline and a real constraint. Tell us yours."
      />
    </>
  )
}
