'use client'

import { useEffect, useState } from 'react'
import { site, whatsappLink } from '@/data/site'
import { cn } from '@/lib/utils'
import { WhatsAppIcon, PhoneIcon } from '@/components/common/Icons'

/**
 * The WhatsApp Business and telephone buttons pinned to the bottom-right of
 * every page. Labels expand on hover on desktop; icons only on mobile so they
 * never cover content.
 */
export default function FloatingActions() {
  const [visible, setVisible] = useState(false)

  // Hold them back until just after first paint so they animate in rather
  // than appearing on top of the hero.
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 900)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={cn(
        'fixed bottom-5 right-4 z-40 flex flex-col items-end gap-3 transition-all duration-700 ease-out-expo sm:bottom-7 sm:right-6',
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0',
      )}
    >
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
