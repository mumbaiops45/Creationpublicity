import { cloneElement } from 'react'

/**
 * All icons as inline SVG — no icon library, no extra network request, and
 * every glyph inherits currentColor so it re-themes for free.
 */

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  viewBox: '0 0 24 24',
  'aria-hidden': 'true',
}

/* -------------------------------------------------------------------------- */
/* Service icons — keyed by the `icon` field in src/data/services.js           */
/* -------------------------------------------------------------------------- */

const serviceIcons = {
  mall: (
    <svg {...base}>
      <path d="M3 9h18l-1.2 11.2a1 1 0 0 1-1 .8H5.2a1 1 0 0 1-1-.8Z" />
      <path d="M8 9V6.5a4 4 0 0 1 8 0V9" />
      <path d="M3 9 5 4h14l2 5" />
    </svg>
  ),
  billboard: (
    <svg {...base}>
      <rect x="2.5" y="3.5" width="19" height="11" rx="1.5" />
      <path d="M9 14.5 7.5 21M15 14.5 16.5 21M6 21h12" />
      <path d="M6.5 8.5h5M6.5 11h8" />
    </svg>
  ),
  gift: (
    <svg {...base}>
      <rect x="3" y="8.5" width="18" height="12.5" rx="1.5" />
      <path d="M3 13h18M12 8.5V21" />
      <path d="M12 8.5S10.5 3 7.8 3a2.4 2.4 0 0 0 0 5.5ZM12 8.5S13.5 3 16.2 3a2.4 2.4 0 0 1 0 5.5Z" />
    </svg>
  ),
  print: (
    <svg {...base}>
      <path d="M7 9V3.5h10V9" />
      <rect x="3.5" y="9" width="17" height="7.5" rx="1.5" />
      <path d="M7 14h10v6.5H7z" />
      <path d="M17.5 12h.01" />
    </svg>
  ),
  transit: (
    <svg {...base}>
      <rect x="5" y="2.8" width="14" height="14.5" rx="3" />
      <path d="M5 11.5h14M9 6.2h6" />
      <path d="M8.5 14.4h.01M15.5 14.4h.01" />
      <path d="m8 17.3-2.5 3.9M16 17.3l2.5 3.9" />
    </svg>
  ),
  store: (
    <svg {...base}>
      <path d="M3.5 9.5h17V20a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1Z" />
      <path d="M2.6 9.5 4.4 4a1 1 0 0 1 .95-.7h13.3a1 1 0 0 1 .95.7l1.8 5.5" />
      <path d="M9.5 21v-6h5v6" />
      <path d="M8 9.5a2.6 2.6 0 0 1-5.2 0M13.2 9.5a2.6 2.6 0 0 1-5.2 0M18.4 9.5a2.6 2.6 0 0 1-5.2 0" />
    </svg>
  ),
  digital: (
    <svg {...base}>
      <path d="M3.5 19.5v-5M9 19.5V9M14.5 19.5v-7.5M20 19.5V4.5" />
      <path d="M3 10.5 8.5 5l4 3.5L20.5 2" />
      <path d="M16.5 2h4v4" />
    </svg>
  ),
  bus: (
    <svg {...base}>
      <rect x="3" y="3.5" width="18" height="13" rx="2.5" />
      <path d="M3 10.5h18M7.5 3.5v7M16.5 3.5v7" />
      <path d="M6.5 16.5v2.6a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-2.6M20.5 16.5v2.6a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-2.6" />
      <path d="M6.8 13.5h.01M17.2 13.5h.01" />
    </svg>
  ),
  news: (
    <svg {...base}>
      <path d="M3.5 5.5h13v15h-11a2 2 0 0 1-2-2Z" />
      <path d="M16.5 9h3a1 1 0 0 1 1 1v8.5a2 2 0 0 1-2 2h-1" />
      <path d="M6.5 8.5h7M6.5 12h7M6.5 15.5h4" />
    </svg>
  ),
  radio: (
    <svg {...base}>
      <rect x="2.5" y="8" width="19" height="12" rx="2" />
      <circle cx="16" cy="14" r="3" />
      <path d="M6 12.5h4.5M6 15.5h4.5" />
      <path d="m7 8 10-4.5" />
    </svg>
  ),
  event: (
    <svg {...base}>
      <path d="M4 20.5V9.2a1 1 0 0 1 .5-.87l7-4.05a1 1 0 0 1 1 0l7 4.05a1 1 0 0 1 .5.87V20.5" />
      <path d="M2.5 20.5h19" />
      <path d="M9 20.5v-5.2a3 3 0 0 1 6 0v5.2" />
      <path d="M12 3v2" />
    </svg>
  ),
  plane: (
    <svg {...base}>
      <path d="M10.5 13.2 3 10.4l1.6-1.7 6.6 1.1 3.5-3.6c1-1 2.4-1.2 3.1-.5s.5 2-.5 3.1l-3.6 3.5 1.1 6.6-1.7 1.6Z" />
      <path d="M4 21h9" />
    </svg>
  ),
}

export function ServiceIcon({ name, className = 'h-6 w-6' }) {
  const icon = serviceIcons[name] ?? serviceIcons.billboard
  // Clone so the caller's sizing classes land on the <svg> itself.
  return cloneElement(icon, { className })
}

/* -------------------------------------------------------------------------- */
/* Brand + UI icons                                                           */
/* -------------------------------------------------------------------------- */

export function InstagramIcon({ className = 'h-5 w-5' }) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="3.8" />
      <path d="M17.2 6.8h.01" strokeWidth="2.2" />
    </svg>
  )
}

export function LinkedInIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M6.94 5.5a2.06 2.06 0 1 1-4.12 0 2.06 2.06 0 0 1 4.12 0ZM3.15 21h3.6V9.05h-3.6V21Zm6.2-11.95V21h3.6v-6.28c0-1.66.31-3.27 2.37-3.27 2.03 0 2.06 1.9 2.06 3.38V21h3.6v-6.9c0-3.12-.67-5.52-4.32-5.52-1.75 0-2.93.96-3.41 1.88h-.05V9.05h-3.85Z" />
    </svg>
  )
}

export function WhatsAppIcon({ className = 'h-6 w-6' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.34 4.99L2 22l5.2-1.36a9.9 9.9 0 0 0 4.84 1.24h.01c5.5 0 9.96-4.46 9.96-9.96 0-2.66-1.04-5.16-2.92-7.04A9.88 9.88 0 0 0 12.04 2Zm0 18.13h-.01a8.27 8.27 0 0 1-4.21-1.15l-.3-.18-3.13.82.83-3.05-.2-.31a8.24 8.24 0 0 1-1.26-4.4c0-4.56 3.71-8.27 8.28-8.27 2.21 0 4.29.86 5.85 2.43a8.22 8.22 0 0 1 2.42 5.85c0 4.57-3.71 8.26-8.27 8.26Zm4.54-6.19c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.16.25-.64.8-.78.97-.15.16-.29.19-.53.06-.25-.12-1.05-.38-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.44.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.16 0-.43.06-.65.31s-.86.84-.86 2.05.88 2.38 1 2.54c.12.17 1.73 2.64 4.19 3.7.59.26 1.04.4 1.4.52.59.19 1.12.16 1.55.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.29Z" />
    </svg>
  )
}

export function PhoneIcon({ className = 'h-6 w-6' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.4 21 3 13.6 3 4.5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.02l-2.22 2.2Z" />
    </svg>
  )
}

export function ArrowIcon({ className = 'h-4 w-4' }) {
  return (
    <svg {...base} strokeWidth="2" className={className}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export function CheckIcon({ className = 'h-4 w-4' }) {
  return (
    <svg {...base} strokeWidth="2.4" className={className}>
      <path d="m4 12.5 5 5L20 6.5" />
    </svg>
  )
}

export function MailIcon({ className = 'h-5 w-5' }) {
  return (
    <svg {...base} className={className}>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
      <path d="m3 7 8.4 5.7a1 1 0 0 0 1.2 0L21 7" />
    </svg>
  )
}

export function PinIcon({ className = 'h-5 w-5' }) {
  return (
    <svg {...base} className={className}>
      <path d="M12 21s7-5.7 7-11a7 7 0 1 0-14 0c0 5.3 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.7" />
    </svg>
  )
}

export function ClockIcon({ className = 'h-5 w-5' }) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.2l3.2 2" />
    </svg>
  )
}

export function PlayIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M8 5.2v13.6a1 1 0 0 0 1.53.85l10.6-6.8a1 1 0 0 0 0-1.7L9.53 4.35A1 1 0 0 0 8 5.2Z" />
    </svg>
  )
}

export function PauseIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M7 4.5h3.2v15H7zM13.8 4.5H17v15h-3.2z" />
    </svg>
  )
}

export function QuoteIcon({ className = 'h-8 w-8' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M9.5 5.5c-3 1.4-4.9 4-4.9 7.3 0 .6.05 1.2.16 1.7A3.4 3.4 0 1 0 8.2 12c-.3 0-.6.04-.88.11.3-1.6 1.4-3 3.1-3.9l-.92-2.7Zm9 0c-3 1.4-4.9 4-4.9 7.3 0 .6.05 1.2.16 1.7A3.4 3.4 0 1 0 17.2 12c-.3 0-.6.04-.88.11.3-1.6 1.4-3 3.1-3.9l-.92-2.7Z" />
    </svg>
  )
}

export function MenuIcon({ className = 'h-6 w-6' }) {
  return (
    <svg {...base} strokeWidth="1.9" className={className}>
      <path d="M4 7h16M4 12h16M4 17h10" />
    </svg>
  )
}

export function CloseIcon({ className = 'h-6 w-6' }) {
  return (
    <svg {...base} strokeWidth="1.9" className={className}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  )
}
