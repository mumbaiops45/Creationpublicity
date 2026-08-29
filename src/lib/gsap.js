'use client'

/**
 * Central GSAP setup. Import { gsap, ScrollTrigger } from here rather than
 * from 'gsap' directly, so plugins are only ever registered once.
 */

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { ScrollSmoother } from 'gsap/ScrollSmoother'

if (typeof window !== 'undefined' && !gsap.core.globals().ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger, SplitText, ScrollSmoother)

  gsap.defaults({ ease: 'power3.out', duration: 1 })

  // Start every trigger a little inside the viewport so animation is visible
  // rather than already finished by the time an element scrolls into view.
  //
  // Deliberately no 'reverse' in toggleActions: content reveals must not
  // un-reveal when the visitor scrolls back up.
  ScrollTrigger.defaults({ start: 'top 82%', toggleActions: 'play none none none' })
}

/** True when the visitor has asked their OS for reduced motion. */
export function prefersReducedMotion() {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export { gsap, ScrollTrigger, SplitText, ScrollSmoother }
