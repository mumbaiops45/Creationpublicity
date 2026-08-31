'use client'

import { useEffect, useState } from 'react'
import { site, whatsappLink } from '@/data/site'
import { cn } from '@/lib/utils'
import { ScrollSmoother, prefersReducedMotion } from '@/lib/gsap'
import { WhatsAppIcon, PhoneIcon, ArrowUpIcon } from '@/components/common/Icons'

/**
 * The WhatsApp Business and telephone buttons pinned to the bottom-right of
 * every page, with a back-to-top button that joins them once the visitor is a
 * screen deep. Labels expand on hover on desktop; icons only on mobile so they
 * never cover content.
 */

/** How far down the page the back-to-top button appears, as a share of the
    viewport height. Below this it would just scroll you where you already are. */
const TOP_BUTTON_AFTER = 0.9

export default function FloatingActions() {
  const [visible, setVisible] = useState(false)
  const [scrolledDeep, setScrolledDeep] = useState(false)

  // Hold them back until just after first paint so they animate in rather
  // than appearing on top of the hero.
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 900)
    return () => clearTimeout(timer)
  }, [])

  // ScrollSmoother keeps the native scrollbar and only transforms
  // #smooth-content, so window.scrollY is still the true scroll position on
  // the home page — no special case needed for reading it.
  useEffect(() => {
    const onScroll = () =>
      setScrolledDeep(window.scrollY > window.innerHeight * TOP_BUTTON_AFTER)

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  /*
    Writing to window.scrollTo would be ignored on the home page: ScrollSmoother
    drives that scroll itself and would simply pull the page back. Ask the
    smoother when one exists, and fall back to native scrolling on every other
    page. Reduced motion gets an instant jump in both cases.
  */
  const scrollToTop = () => {
    const smooth = !prefersReducedMotion()
    const smoother = ScrollSmoother.get()

    if (smoother) {
      smoother.scrollTo(0, smooth)
      return
    }

    window.scrollTo({ top: 0, behavior: smooth ? 'smooth' : 'auto' })
  }

  return (
    <div
      className={cn(
        'fixed bottom-5 right-4 z-40 flex flex-col items-end gap-3 transition-all duration-700 ease-out-expo sm:bottom-7 sm:right-6',
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0',
      )}
    >
      {/*
        Back to top. Kept in the flow rather than unmounted so it can fade
        instead of popping — the stack is anchored by `bottom`, so the two
        buttons below never move whether this one is showing or not.
      */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        tabIndex={scrolledDeep ? 0 : -1}
        aria-hidden={!scrolledDeep}
        className={cn(
          'flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-ink-800 shadow-xl shadow-ink-950/15 transition-all duration-500 ease-out-expo',
          // Hover fills the circle with the same blue as the call button, so
          // the three buttons read as one family.
          'hover:border-transparent hover:bg-gradient-to-br hover:from-brand-400 hover:to-brand-600 hover:text-white hover:shadow-2xl hover:shadow-brand-500/45',
          scrolledDeep
            ? 'translate-y-0 scale-100 opacity-100'
            : 'pointer-events-none translate-y-2 scale-90 opacity-0',
        )}
      >
        <ArrowUpIcon className="h-[1.15rem] w-[1.15rem]" />
      </button>

      {/* WhatsApp */}
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="group flex items-center overflow-hidden rounded-full bg-[#25D366] px-3.5 text-ink-900 shadow-xl shadow-[#25D366]/30 transition-all duration-500 ease-out-expo hover:shadow-2xl hover:shadow-[#25D366]/45 sm:hover:pr-5"
      >
        <span className="flex h-13 w-7 items-center justify-center">
          <WhatsAppIcon className="h-6 w-6" />
        </span>
        <span className="hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-500 ease-out-expo group-hover:max-w-[9rem] group-hover:pl-2.5 sm:inline-block">
          WhatsApp Us
        </span>
      </a>

      {/* Telephone */}
      <a
        href={`tel:${site.phoneHref}`}
        aria-label={`Call ${site.phone}`}
        className="group flex items-center overflow-hidden rounded-full bg-gradient-to-br from-brand-400 to-brand-600 px-3.5 text-ink-950 shadow-xl shadow-brand-500/30 transition-all duration-500 ease-out-expo hover:shadow-2xl hover:shadow-brand-500/45 sm:hover:pr-5"
      >
        <span className="flex h-13 w-7 items-center justify-center">
          <PhoneIcon className="h-[1.35rem] w-[1.35rem]" />
        </span>
        <span className="hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-500 ease-out-expo group-hover:max-w-[10rem] group-hover:pl-2.5 sm:inline-block">
          {site.phone}
        </span>
      </a>
    </div>
  )
}
