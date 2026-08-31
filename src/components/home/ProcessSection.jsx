'use client'

import { useEffect, useRef } from 'react'
import { process } from '@/data/team'
import SectionTitle from '@/components/common/SectionTitle'
import { gsap, ScrollTrigger, prefersReducedMotion } from '@/lib/gsap'

/**
 * How we work — the five steps laid out as a horizontal flow across the full
 * width, so the section reads as a sequence rather than a short list floating
 * beside a heading.
 *
 * A connecting line runs through the step numbers and fills with brand blue as
 * the visitor scrolls; each step lights up as the fill reaches it. The line is
 * horizontal from `md` up and vertical below it, so both orientations get the
 * same effect.
 */
export default function ProcessSection() {
  const root = useRef(null)

  useEffect(() => {
    if (prefersReducedMotion()) return

    const ctx = gsap.context(() => {
      // Scrubbed against the whole section, not just the row of steps: the
      // row is only one line tall on desktop, so triggering on it would fill
      // the line almost instantly.
      const trigger = {
        trigger: root.current,
        start: 'top 60%',
        end: 'bottom 85%',
        scrub: 0.5,
      }

      gsap.fromTo('[data-process="fill-x"]', { scaleX: 0 }, { scaleX: 1, ease: 'none', scrollTrigger: trigger })
      gsap.fromTo('[data-process="fill-y"]', { scaleY: 0 }, { scaleY: 1, ease: 'none', scrollTrigger: trigger })

      // Each step lights up a little later than the one before it, so they
      // switch on left-to-right in time with the line filling.
      gsap.utils.toArray('[data-process="step"]').forEach((step, i) => {
        ScrollTrigger.create({
          trigger: root.current,
          start: `top ${52 - i * 6}%`,
          onEnter: () => step.classList.add('is-active'),
          onLeaveBack: () => step.classList.remove('is-active'),
        })
      })
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={root} className="section relative overflow-hidden">
      <div className="container-x relative z-10">
        <SectionTitle
          align="center"
          eyebrow="How We Work"
          title="Five steps between a brief"
          highlight="and a closing report"
          lead="The same process whether it is one hoarding or a 240-outlet signage rollout. You always know which step you are on."
        />

        <ol
          data-process="list"
          className="relative mt-10 grid gap-9 md:grid-cols-5 md:gap-6"
        >
          {/* Connecting line — horizontal on desktop, vertical on mobile. */}
          <span
            aria-hidden="true"
            className="absolute left-[1.75rem] top-2 hidden h-[calc(100%-3rem)] w-px bg-line max-md:block"
          />
          <span
            data-process="fill-y"
            aria-hidden="true"
            className="absolute left-[1.75rem] top-2 hidden h-[calc(100%-3rem)] w-px origin-top bg-brand-600 max-md:block"
          />
          <span
            aria-hidden="true"
            className="absolute left-[10%] right-[10%] top-7 hidden h-px bg-line md:block"
          />
          <span
            data-process="fill-x"
            aria-hidden="true"
            className="absolute left-[10%] right-[10%] top-7 hidden h-px origin-left bg-brand-600 md:block"
          />

          {process.map((item) => (
            <li
              key={item.step}
              data-process="step"
              className="group relative flex gap-5 md:flex-col md:items-center md:gap-0 md:text-center"
            >
              {/* Number badge. Opaque, so the connecting line passes behind it. */}
              <span
                className={[
                  'relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full',
                  'border-2 border-line bg-white font-display text-[0.9rem] font-bold text-faint',
                  'transition-all duration-500 ease-out-expo',
                  'group-[.is-active]:border-brand-600 group-[.is-active]:bg-brand-600',
                  'group-[.is-active]:text-white',
                  'group-[.is-active]:shadow-[0_10px_24px_-8px_rgba(15,118,188,0.75)]',
                ].join(' ')}
              >
                {item.step}
              </span>

              <div className="md:mt-6">
                <h3 className="font-display text-[1.05rem] font-bold text-ink-900 transition-colors duration-500 group-[.is-active]:text-brand-800">
                  {item.title}
                </h3>
                <p className="mt-2 text-[0.88rem] leading-relaxed text-muted md:mx-auto md:max-w-[15rem]">
                  {item.detail}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
