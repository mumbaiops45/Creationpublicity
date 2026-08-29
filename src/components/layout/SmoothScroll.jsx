'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { gsap, ScrollTrigger, ScrollSmoother, prefersReducedMotion } from '@/lib/gsap'

/**
 * GSAP ScrollSmoother.
 *
 * It needs the #smooth-wrapper / #smooth-content pair that the root layout
 * renders. The header and the floating call buttons deliberately sit OUTSIDE
 * that wrapper: ScrollSmoother transforms #smooth-content, and a transformed
 * ancestor becomes the containing block for `position: fixed` children, which
 * would stop them being fixed to the viewport.
 *
 * Scoped to the home page on purpose. ScrollSmoother works by transforming
 * #smooth-content, and a transformed ancestor makes `position: sticky`
 * impossible — the sticky sidebars on the contact, service and case-study
 * pages would stop pinning. Those pages therefore scroll natively.
 *
 * Skipped entirely for visitors who prefer reduced motion — they get plain
 * native scrolling.
 */
export default function SmoothScroll() {
  const pathname = usePathname()

  useEffect(() => {
    if (prefersReducedMotion()) return
    if (pathname !== '/') return
    if (!document.getElementById('smooth-wrapper')) return

    const smoother = ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 1.2,
      // Lets markup opt into parallax with data-speed / data-lag.
      effects: true,
      // Touch devices feel better with native scrolling.
      smoothTouch: false,
      normalizeScroll: false,
    })

    // Killing it restores the wrapper's styles, so sticky works again
    // on the pages that need it.
    return () => smoother.kill()
  }, [pathname])

  // On client-side navigation, jump to the top and re-measure every trigger —
  // otherwise pinned sections keep the previous page's dimensions.
  useEffect(() => {
    const smoother = ScrollSmoother.get()
    if (smoother) smoother.scrollTo(0, false)
    else window.scrollTo(0, 0)

    const id = requestAnimationFrame(() => ScrollTrigger.refresh())
    return () => cancelAnimationFrame(id)
  }, [pathname])

  return null
}
