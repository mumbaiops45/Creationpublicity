'use client'

import { useEffect, useRef } from 'react'
import { gsap, prefersReducedMotion } from '@/lib/gsap'

/**
 * A number that counts up when it scrolls into view.
 *
 * The final value is rendered on the server too, so the real figure is in the
 * static HTML for search engines and for anyone browsing without JavaScript.
 */
export default function Counter({
  value,
  prefix = '',
  suffix = '',
  decimals = 0,
  duration = 2,
  className,
}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const format = (n) =>
      n.toLocaleString('en-IN', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })

    if (prefersReducedMotion()) {
      el.textContent = format(value)
      return
    }

    const counter = { n: 0 }
    const tween = gsap.to(counter, {
      n: value,
      duration,
      ease: 'power2.out',
      onUpdate: () => {
        el.textContent = format(counter.n)
      },
      scrollTrigger: { trigger: el, start: 'top 88%', once: true },
    })

    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [value, decimals, duration])

  return (
    <span className={className}>
      {prefix}
      <span ref={ref}>
        {value.toLocaleString('en-IN', {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        })}
      </span>
      {suffix}
    </span>
  )
}
