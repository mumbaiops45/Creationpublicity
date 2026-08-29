'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { gsap, SplitText, prefersReducedMotion } from '@/lib/gsap'
import { trustPoints } from '@/data/stats'
import { ArrowIcon, PlayIcon, PauseIcon, CheckIcon } from '@/components/common/Icons'

/**
 * Dark, video-forward hero: the showreel plays at full strength under a dark
 * scrim, with white type over it. The rest of the site is white — the hard
 * edge at the bottom of this section is deliberate.
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

export default function Hero() {
  const root = useRef(null)
  const videoRef = useRef(null)
  const [videoReady, setVideoReady] = useState(false)
  const [playing, setPlaying] = useState(true)

  /* ---- Entrance timeline + scroll parallax ------------------------------ */
  useEffect(() => {
    if (prefersReducedMotion()) return

    const headline = root.current.querySelector('[data-hero="headline"]')

    // Hide the headline until it has been split, otherwise the un-split text
    // paints for a frame and then jumps.
    gsap.set(headline, { autoAlpha: 0 })

    let split
    let ctx
    let cancelled = false

    const build = () => {
      if (cancelled || !root.current) return

      ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

        // Typewriter: characters appear one at a time, left to right, with a
        // caret parked after the most recently typed letter.
        split = new SplitText(headline, { type: 'chars,words', charsClass: 'hero-char' })
        gsap.set(split.chars, { opacity: 0 })
        gsap.set(headline, { autoAlpha: 1 })

        const caret = headline.querySelector('[data-hero="caret"]')

        /** Park the caret just after the last character typed so far. */
        const moveCaret = (index) => {
          const char = split.chars[Math.min(index, split.chars.length - 1)]
          if (!char || !caret) return
          gsap.set(caret, {
            x: char.offsetLeft + char.offsetWidth,
            y: char.offsetTop,
            height: char.offsetHeight,
          })
        }

        moveCaret(0)

        const typed = { i: 0 }
        tl.set(caret, { opacity: 1 })
          .to(split.chars, {
            opacity: 1,
            duration: 0.001,
            ease: 'none',
            stagger: 0.055,
          })
          .to(
            typed,
            {
              i: split.chars.length - 1,
              duration: 0.055 * split.chars.length,
              ease: 'none',
              onUpdate: () => moveCaret(Math.round(typed.i)),
            },
            '<',
          )
          .fromTo(
            '[data-hero="lead"]',
            { y: 26, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.9 },
            '-=0.7',
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
    }

    // SplitText measures text, so it must run after the webfont has swapped in
    // — otherwise the characters are positioned against the fallback metrics.
    // The race is a safety net: the headline is hidden until `build` runs, so
    // it must never be possible for that promise to leave it hidden forever.
    const fontsReady = document.fonts?.ready ?? Promise.resolve()
    const safetyNet = new Promise((resolve) => setTimeout(resolve, 1500))
    Promise.race([fontsReady, safetyNet]).then(build)

    return () => {
      cancelled = true
      ctx?.revert()
      // SplitText rewrites the DOM, so it has to be undone explicitly.
      split?.revert()
      gsap.set(headline, { clearProps: 'all' })
    }
  }, [])

  const toggleVideo = () => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) {
      video.play()
      setPlaying(true)
    } else {
      video.pause()
      setPlaying(false)
    }
  }

  return (
    <section
      ref={root}
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink-950 pb-24 pt-32 md:pt-36"
    >
      {/* ---------------- Background media ---------------- */}
      <div data-hero="media" className="absolute inset-0 z-0">
        {/*
          Showreel. The browser tries each <source> in order and uses the first
          that loads, so either filename works — drop the file in as
          /public/videos/homepage.mp4 (or hero-showreel.mp4) and it appears here.

          Until one of them exists the gradient beneath shows through instead,
          so the hero never looks empty.
        */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          onCanPlay={() => setVideoReady(true)}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            videoReady ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <source src="/videos/homepage.mp4" type="video/mp4" />
          <source src="/videos/hero-showreel.mp4" type="video/mp4" />
        </video>

        {/* Fallback colour field, visible until the video loads. */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_120%_90%_at_30%_0%,#12436a,#071d30_70%)]" />

        {/* Dark scrim — holds the white type legible over any footage. */}
        <div className="absolute inset-0 bg-ink-950/38" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/75 via-ink-950/15 to-ink-950/80" />
        {/* A touch of brand blue so the footage reads on-brand, not neutral. */}
        <div className="absolute inset-0 bg-brand-900/15 mix-blend-multiply" />
      </div>

      {/* ---------------- Content ---------------- */}
      <div data-hero="content" className="container-x relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          {/* Headline — typed out character by character, with a caret that
              follows the last typed letter. The logo lives in the navbar. */}
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

            {/* Typing caret. Positioned by the timeline; hidden until then. */}
            <span
              data-hero="caret"
              aria-hidden="true"
              className="caret-blink pointer-events-none absolute left-0 top-0 w-[0.07em] rounded-full bg-brand-300 opacity-0"
            />
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

      {/* ---------------- Video control ---------------- */}
      {videoReady && (
        <button
          type="button"
          onClick={toggleVideo}
          aria-label={playing ? 'Pause background video' : 'Play background video'}
          className="absolute bottom-8 right-6 z-20 hidden rounded-full border border-white/30 bg-white/10 p-3 text-white backdrop-blur-sm transition-colors hover:border-white hover:bg-white/20 lg:block"
        >
          {playing ? <PauseIcon className="h-4 w-4" /> : <PlayIcon className="h-4 w-4" />}
        </button>
      )}

      {/* ---------------- Scroll hint ---------------- */}
      <div className="absolute inset-x-0 bottom-7 z-10 flex justify-center">
        <div className="flex h-9 w-5.5 items-start justify-center rounded-full border border-white/40 pt-1.5">
          <span className="scroll-hint h-1.5 w-1 rounded-full bg-white" />
        </div>
      </div>
    </section>
  )
}
