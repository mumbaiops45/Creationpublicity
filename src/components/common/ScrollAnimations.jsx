'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { gsap, ScrollTrigger, prefersReducedMotion } from '@/lib/gsap'

/**
 * One global scroll animator, mounted once in the root layout.
 *
 * Instead of wrapping every element in a component, markup opts in with data
 * attributes — which keeps the page components readable and means server
 * components can use animation without becoming client components:
 *
 *   data-reveal="up|down|left|right|scale|fade"   animate this element in
 *   data-reveal-delay="0.2"                       delay in seconds
 *   data-reveal-child                             stagger this element's children
 *   data-parallax="0.25"                          parallax drift, -1…1
 *   data-parallax-x="0.1"                         horizontal parallax drift
 *
 * Everything is torn down and rebuilt on navigation via gsap.context().
 */

const OFFSETS = {
  up: { y: 46 },
  down: { y: -46 },
  left: { x: -56 },
  right: { x: 56 },
  scale: { scale: 0.9 },
  fade: {},
}

export default function ScrollAnimations() {
  const pathname = usePathname()

  useEffect(() => {
    // Reduced motion: reveal everything immediately and skip all scroll work.
    if (prefersReducedMotion()) {
      document.documentElement.classList.remove('js-ready')
      return
    }

    const ctx = gsap.context(() => {
      // --- Single element reveals ---------------------------------------
      gsap.utils.toArray('[data-reveal]').forEach((el) => {
        const direction = el.dataset.reveal || 'up'
        const delay = parseFloat(el.dataset.revealDelay || 0)

        // fromTo, not from: the stylesheet already sets opacity:0 on these,
        // so an implicit "to" would resolve to 0 and animate nothing.
        gsap.fromTo(
          el,
          { ...(OFFSETS[direction] ?? OFFSETS.up), opacity: 0 },
          {
            x: 0,
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 1.05,
            delay,
            ease: 'power3.out',
            // once: a reveal should never replay or rewind.
            scrollTrigger: { trigger: el, once: true },
          },
        )
      })

      // --- Staggered children -------------------------------------------
      gsap.utils.toArray('[data-reveal-child]').forEach((group) => {
        const children = Array.from(group.children)
        if (!children.length) return

        gsap.fromTo(
          children,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.09,
            ease: 'power3.out',
            scrollTrigger: { trigger: group, once: true },
          },
        )
      })

      // --- Images settling into their frame ------------------------------
      // The picture starts slightly oversized and eases back to its natural
      // size as it enters view. The wrapper clips, so nothing spills out.
      gsap.utils.toArray('[data-reveal-image]').forEach((frame) => {
        const picture = frame.querySelector('img, [data-image-inner]')
        if (!picture) return

        gsap.fromTo(
          picture,
          { scale: 1.22, opacity: 0.35 },
          {
            scale: 1,
            opacity: 1,
            duration: 1.4,
            ease: 'power3.out',
            scrollTrigger: { trigger: frame, once: true },
          },
        )
      })

      // --- Parallax ------------------------------------------------------
      gsap.utils.toArray('[data-parallax]').forEach((el) => {
        const speed = parseFloat(el.dataset.parallax || 0.2)
        gsap.fromTo(
          el,
          { yPercent: -speed * 50 },
          {
            yPercent: speed * 50,
            ease: 'none',
            scrollTrigger: {
              trigger: el.parentElement || el,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          },
        )
      })

      gsap.utils.toArray('[data-parallax-x]').forEach((el) => {
        const speed = parseFloat(el.dataset.parallaxX || 0.15)
        gsap.fromTo(
          el,
          { xPercent: -speed * 50 },
          {
            xPercent: speed * 50,
            ease: 'none',
            scrollTrigger: {
              trigger: el.parentElement || el,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          },
        )
      })
    })

    // Late-loading webfonts and images change layout; re-measure once settled.
    const refresh = () => ScrollTrigger.refresh()
    window.addEventListener('load', refresh)
    const timer = setTimeout(refresh, 600)

    return () => {
      window.removeEventListener('load', refresh)
      clearTimeout(timer)
      ctx.revert()
    }
  }, [pathname])

  return null
}
