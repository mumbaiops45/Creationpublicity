'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap, prefersReducedMotion } from '@/lib/gsap'
import { trustPoints } from '@/data/stats'
import { ArrowIcon, CheckIcon } from '@/components/common/Icons'

/**
 * Dark video hero: the showreel loops under a dark scrim, with white type over
 * it. The rest of the site is white — the hard edge at the bottom of this
 * section is deliberate.
 */
/*
  Hero wording. One array entry per headline line; `accent: true` colours a
  part in brand blue. Edit the text here — nothing else needs changing.
*/
const HEADLINE = [
  [{ text: 'Creation Publicity' }],
  [{ text: 'Pvt. Ltd.', accent: true }],
]

const SUBLINE = [
  { text: "India's complete " },
  { text: 'advertising media network', accent: true },
  { text: ' · 140+ cities since 2009' },
]

/** The looping showreel behind the headline. See public/videos/README.md. */
const HERO_VIDEO = '/videos/homepage1.mp4'

export default function Hero() {
  const root = useRef(null)
  const video = useRef(null)

  // Autoplay is a motion effect. Anyone who has asked their OS for reduced
  // motion gets a held first frame rather than a looping clip.
  useEffect(() => {
    const el = video.current
    if (!el || !prefersReducedMotion()) return

    el.autoplay = false
    el.loop = false
    el.pause()
  }, [])

  /* ---- Entrance timeline + scroll parallax ------------------------------ */
  useEffect(() => {
    if (prefersReducedMotion()) return

    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: 'power3.out' } })
        .fromTo(
          '[data-hero="headline"]',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          0.15,
        )
        .fromTo(
          '[data-hero="lead"]',
          { y: 26, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9 },
          '-=0.55',
        )
        .fromTo(
          '[data-hero="cta"] > *',
          { y: 22, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.12 },
          '-=0.6',
        )
        .fromTo(
          '[data-hero="trust"] > *',
          { y: 14, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.08 },
          '-=0.5',
        )

      // Content drifts up and dissolves as the visitor scrolls past — the
      // background layers move slower, which is what sells the depth.
      gsap.to('[data-hero="content"]', {
        yPercent: -16,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: root.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })

      gsap.to('[data-hero="media"]', {
        yPercent: 14,
        scale: 1.12,
        ease: 'none',
        scrollTrigger: {
          trigger: root.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={root}
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink-950 pb-24 pt-32 md:pt-36"
    >
      {/* ---------------- Background media ---------------- */}
      <div data-hero="media" className="absolute inset-0 z-0">
        <video
          ref={video}
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          tabIndex={-1}
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>

        {/* Colour field beneath the video — carries the hero while the clip
            buffers, and for any browser that refuses to autoplay it. */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_120%_90%_at_30%_0%,#12436a,#071d30_70%)]" />

        {/*
          Dark scrim, so the white headline holds against whatever frame is on
          screen. Dial these four opacities together if the clip is darker or
          lighter than expected — the type must stay the brightest thing here.
        */}
        <div className="absolute inset-0 bg-ink-950/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/55 via-ink-950/15 to-ink-950/65" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_65%_at_50%_48%,rgba(7,29,48,0.45),transparent_78%)]" />
        {/* A touch of brand blue so the footage reads on-brand, not neutral. */}
        <div className="absolute inset-0 bg-brand-950/15 mix-blend-multiply" />
      </div>

      {/* ---------------- Content ---------------- */}
      <div data-hero="content" className="container-x relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          {/* Headline. The logo lives in the navbar, so this is the only
              wordmark on the hero. */}
          <h1
            data-hero="headline"
            className="relative font-display text-[2.05rem] font-extrabold uppercase leading-[1.05] tracking-[-0.02em] text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)] sm:text-5xl lg:text-[4.1rem]"
          >
            {HEADLINE.map((line, i) => (
              <span key={i} className="block">
                {line.map((part) => (
                  <span key={part.text} className={part.accent ? 'text-brand-300' : undefined}>
                    {part.text}{' '}
                  </span>
                ))}
              </span>
            ))}
          </h1>

          {/* Subline — uppercase and letterspaced, like the headline above it. */}
          <p
            data-hero="lead"
            className="mx-auto mt-6 max-w-4xl text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-white/75 drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)] sm:text-[0.95rem] sm:tracking-[0.2em]"
          >
            {SUBLINE.map((part) => (
              <span key={part.text} className={part.accent ? 'text-brand-300' : undefined}>
                {part.text}
              </span>
            ))}
          </p>

          <div
            data-hero="cta"
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
          >
            <Link href="/contact" className="btn btn-primary group w-full px-8 py-4 sm:w-auto">
              Enquire Now
              <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link href="/services" className="btn btn-on-dark w-full px-8 py-4 sm:w-auto">
              Explore 12 Services
            </Link>
          </div>

          <ul
            data-hero="trust"
            className="mx-auto mt-11 flex max-w-3xl flex-wrap items-center justify-center gap-x-6 gap-y-2.5"
          >
            {trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-2 text-[0.78rem] text-white/70">
                <CheckIcon className="h-3.5 w-3.5 shrink-0 text-brand-300" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ---------------- Scroll hint ---------------- */}
      <div className="absolute inset-x-0 bottom-7 z-10 flex justify-center">
        <div className="flex h-9 w-5.5 items-start justify-center rounded-full border border-white/40 pt-1.5">
          <span className="scroll-hint h-1.5 w-1 rounded-full bg-white" />
        </div>
      </div>
    </section>
  )
}
