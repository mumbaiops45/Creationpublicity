'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { site, mainNav } from '@/data/site'
import { services } from '@/data/services'
import { cn } from '@/lib/utils'
import { MenuIcon, CloseIcon, ArrowIcon, ServiceIcon } from '@/components/common/Icons'

const headerNav = mainNav.filter((item) => item.href !== '/contact')

export default function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const closeTimer = useRef(null)

  // Condense the bar once the visitor leaves the top of the page.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close both menus whenever the route changes. Adjusted during render
  // rather than in an effect, so the menus never paint open on the new page.
  const [renderedPath, setRenderedPath] = useState(pathname)
  if (pathname !== renderedPath) {
    setRenderedPath(pathname)
    setMobileOpen(false)
    setServicesOpen(false)
  }

  // Lock background scrolling while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== 'Escape') return
      setMobileOpen(false)
      setServicesOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const isActive = (href) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  // Only the home page has a dark video hero behind the bar. On every other
  // page the content behind the header is white, so white nav type would
  // vanish — those pages always use the light treatment.
  const overHero = pathname === '/' && !scrolled

  // A small grace period stops the dropdown snapping shut as the pointer
  // travels from the trigger down into the panel.
  const openServices = () => {
    clearTimeout(closeTimer.current)
    setServicesOpen(true)
  }
  const scheduleCloseServices = () => {
    clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setServicesOpen(false), 140)
  }

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-brand-600 focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-500',
          scrolled
            ? 'border-b border-line bg-white/90 py-2.5 backdrop-blur-xl'
            : 'border-b border-transparent py-4',
          // Over the home page's dark video hero the bar is transparent with
          // white type; everywhere else the page behind it is white.
          overHero && 'bg-transparent',
        )}
      >
        <div className="flex w-full items-center gap-4 px-6 lg:px-8">
          {/* ---------------- Logo ---------------- */}
          {/*
            The supplied logo is a horizontal lockup that already contains the
            company name, so it stands alone — no repeated wordmark beside it.
            Over the dark hero we swap in the white knockout so it needs no
            plate; elsewhere the full-colour mark sits on the white bar.
          */}
          <Link href="/" className="flex shrink-0 items-center">
            <Image
              src={overHero ? '/images/logo/logo-white.png' : '/images/logo/logo.png'}
              alt={`${site.legalName} — home`}
              width={560}
              height={265}
              priority
              className={cn(
                'w-auto object-contain transition-all duration-500',
                scrolled ? 'h-12' : 'h-16',
                overHero && 'drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]',
              )}
            />
          </Link>

          {/* ---------------- Desktop nav ---------------- */}
          <nav className="ml-auto hidden items-center gap-1 lg:flex" aria-label="Main">
            {headerNav.map((item) =>
              item.href === '/services' ? (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={openServices}
                  onMouseLeave={scheduleCloseServices}
                >
                  <Link
                    href={item.href}
                    aria-expanded={servicesOpen}
                    className={cn(
                      'relative flex items-center gap-1.5 px-3.5 py-2 text-[0.83rem] font-medium transition-colors duration-300',
                      'after:absolute after:inset-x-3.5 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:transition-transform after:duration-300 hover:after:scale-x-100',
                      isActive(item.href) && 'after:scale-x-100',
                      overHero ? 'after:bg-brand-300' : 'after:bg-brand-600',
                      overHero
                        ? isActive(item.href)
                          ? 'text-white'
                          : 'text-white/80 hover:text-white'
                        : isActive(item.href)
                          ? 'text-brand-600'
                          : 'text-body hover:text-ink-900',
                    )}
                  >
                    {item.label}
                    <svg
                      viewBox="0 0 24 24"
                      className={cn(
                        'h-3.5 w-3.5 transition-transform duration-300',
                        servicesOpen && 'rotate-180',
                      )}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      aria-hidden="true"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </Link>

                  {/* Mega menu */}
                  <div
                    className={cn(
                      'absolute left-1/2 top-full w-[46rem] -translate-x-1/2 pt-3 transition-all duration-300',
                      servicesOpen
                        ? 'pointer-events-auto translate-y-0 opacity-100'
                        : 'pointer-events-none -translate-y-2 opacity-0',
                    )}
                  >
                    <div className="glass grid grid-cols-2 gap-1 rounded-2xl p-3 shadow-2xl shadow-brand-900/10">
                      {services.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className="group flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors duration-200 hover:bg-brand-50"
                        >
                          <span className="mt-0.5 text-brand-600 transition-transform duration-300 group-hover:scale-110">
                            <ServiceIcon name={service.icon} className="h-5 w-5" />
                          </span>
                          <span>
                            <span className="block text-[0.82rem] font-semibold text-ink-900">
                              {service.title}
                            </span>
                            <span className="mt-0.5 block text-[0.72rem] leading-snug text-muted">
                              {service.tagline}
                            </span>
                          </span>
                        </Link>
                      ))}
                      <Link
                        href="/services"
                        className="col-span-2 mt-1 flex items-center justify-center gap-2 rounded-xl border border-brand-200 py-2.5 text-[0.8rem] font-semibold text-brand-600 transition-colors hover:bg-brand-50"
                      >
                        View all 12 services
                        <ArrowIcon className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'relative px-3.5 py-2 text-[0.83rem] font-medium transition-colors duration-300',
                    // Underline marks the current page, as in the reference.
                    'after:absolute after:inset-x-3.5 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:transition-transform after:duration-300',
                    isActive(item.href) && 'after:scale-x-100',
                    overHero
                      ? isActive(item.href)
                        ? 'text-white after:bg-brand-300'
                        : 'text-white/80 hover:text-white after:bg-brand-300'
                      : isActive(item.href)
                        ? 'text-brand-600 after:bg-brand-600'
                        : 'text-body hover:text-ink-900 after:bg-brand-600',
                    'hover:after:scale-x-100',
                  )}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          {/* ---------------- Right side ---------------- */}
          <div className="flex items-center gap-2 lg:ml-3">
            <Link
              href="/contact"
              className="btn btn-primary group hidden px-5 py-2.5 text-[0.8rem] sm:inline-flex"
            >
              Enquire Now
              <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <button
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              className={cn(
                'rounded-full border p-2 transition-colors lg:hidden',
                overHero
                  ? 'border-white/35 text-white hover:border-white hover:bg-white/10'
                  : 'border-brand-200 text-ink-800 hover:border-brand-400 hover:text-ink-900',
              )}
            >
              {mobileOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* ---------------- Mobile drawer ---------------- */}
      <div
        className={cn(
          'fixed inset-0 z-40 transition-all duration-300 lg:hidden',
          mobileOpen ? 'visible opacity-100' : 'invisible opacity-0',
        )}
      >
        <button
          type="button"
          aria-label="Close menu"
          tabIndex={mobileOpen ? 0 : -1}
          onClick={() => setMobileOpen(false)}
          className="absolute inset-0 h-full w-full cursor-default bg-ink-950/45 backdrop-blur-sm"
        />

        <nav
          aria-label="Mobile"
          aria-hidden={!mobileOpen}
          className={cn(
            'absolute right-0 top-0 flex h-full w-[min(22rem,88vw)] flex-col overflow-y-auto border-l border-line bg-white px-6 pb-10 pt-24 transition-transform duration-500 ease-out-expo',
            mobileOpen ? 'translate-x-0' : 'translate-x-full',
          )}
        >
          {headerNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              tabIndex={mobileOpen ? 0 : -1}
              className={cn(
                'border-b border-line py-3.5 font-display text-lg font-semibold transition-colors',
                isActive(item.href) ? 'text-brand-600' : 'text-ink-800',
              )}
            >
              {item.label}
            </Link>
          ))}

          <p className="mt-7 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-faint">
            Our Services
          </p>
          <div className="mt-3 space-y-0.5">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                tabIndex={mobileOpen ? 0 : -1}
                className="flex items-center gap-2.5 rounded-lg px-2 py-2 text-[0.85rem] text-muted transition-colors hover:bg-brand-50 hover:text-brand-700"
              >
                <ServiceIcon name={service.icon} className="h-4 w-4 shrink-0 text-brand-500" />
                {service.title}
              </Link>
            ))}
          </div>

          <Link
            href="/contact"
            tabIndex={mobileOpen ? 0 : -1}
            className="btn btn-primary mt-8 w-full"
          >
            Enquire Now
          </Link>

        </nav>
      </div>
    </>
  )
}
