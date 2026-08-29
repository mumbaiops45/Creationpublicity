import Link from 'next/link'
import Image from 'next/image'
import { site, addressLine, footerNav, whatsappLink } from '@/data/site'
import { services } from '@/data/services'
import {
  InstagramIcon,
  LinkedInIcon,
  WhatsAppIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  ClockIcon,
  ArrowIcon,
} from '@/components/common/Icons'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer-arc relative overflow-hidden bg-brand-900 text-brand-100">
      <div className="aurora opacity-20" />

      <div className="container-x relative z-10 pb-10 pt-20 md:pt-28">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr_1fr_1.05fr]">
          {/* ---------------- Brand ---------------- */}
          <div>
            {/* White knockout — the footer ground is dark blue, so the
                full-colour mark's navy wordmark would barely read on it. */}
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo/logo-white.png"
                alt={site.legalName}
                width={560}
                height={265}
                className="h-12 w-auto object-contain"
              />
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-relaxed text-brand-100/75">
              A full-service advertising agency planning, producing and executing
              campaigns across outdoor, transit, retail, print and digital media —
              nationwide, from a single point of contact.
            </p>

            <div className="mt-6 flex items-center gap-2.5">
              <a
                href={site.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="rounded-full border border-white/25 p-2.5 text-white transition-all duration-300 hover:border-white hover:bg-white/10"
              >
                <InstagramIcon className="h-[1.05rem] w-[1.05rem]" />
              </a>
              <a
                href={site.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-full border border-white/25 p-2.5 text-white transition-all duration-300 hover:border-white hover:bg-white/10"
              >
                <LinkedInIcon className="h-[1.05rem] w-[1.05rem]" />
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="rounded-full border border-white/25 p-2.5 text-white transition-all duration-300 hover:border-white hover:bg-white/10"
              >
                <WhatsAppIcon className="h-[1.05rem] w-[1.05rem]" />
              </a>
            </div>
          </div>

          {/* ---------------- Services ---------------- */}
          <div>
            <h3 className="font-display text-[0.72rem] font-bold uppercase tracking-[0.2em] text-brand-300">
              Services
            </h3>
            <ul className="mt-5 space-y-2.5">
              {services.slice(0, 7).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-brand-100/75 transition-colors duration-300 hover:text-white"
                  >
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-300 transition-colors hover:text-white"
                >
                  All 12 services
                  <ArrowIcon className="h-3.5 w-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* ---------------- Company ---------------- */}
          {footerNav.map((group) => (
            <div key={group.title}>
              <h3 className="font-display text-[0.72rem] font-bold uppercase tracking-[0.2em] text-brand-300">
                {group.title}
              </h3>
              <ul className="mt-5 space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-brand-100/75 transition-colors duration-300 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* ---------------- Contact ---------------- */}
          <div>
            <h3 className="font-display text-[0.72rem] font-bold uppercase tracking-[0.2em] text-brand-300">
              Get in Touch
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3">
                <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
                <address className="not-italic leading-relaxed text-brand-100/75">
                  {site.address.line1}
                  <br />
                  {addressLine}
                </address>
              </li>
              <li className="flex gap-3">
                <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
                <a
                  href={`tel:${site.phoneHref}`}
                  className="text-brand-100/75 transition-colors hover:text-white"
                >
                  {site.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
                <a
                  href={`mailto:${site.email}`}
                  className="break-all text-brand-100/75 transition-colors hover:text-white"
                >
                  {site.email}
                </a>
              </li>
              <li className="flex gap-3">
                <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
                <span className="text-brand-100/75">{site.hours}</span>
              </li>
            </ul>

            <Link href="/contact" className="btn btn-light group mt-6 w-full">
              Enquire Now
              <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <div className="divider-glow mt-14" />

        <div className="flex flex-col items-center justify-between gap-4 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-brand-200/70">
            {/* legalName already ends in "Ltd." — don't add a second full stop. */}
            © {year} {site.legalName} All rights reserved.
          </p>

          <div className="flex items-center gap-5 text-xs text-brand-200/70">
            <Link href="/privacy-policy" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/contact" className="transition-colors hover:text-white">
              Contact
            </Link>
          </div>
        </div>

        {/* Build credit, centred on its own line under the legal row. */}
        <p className="mt-5 flex flex-wrap items-center justify-center gap-1 text-center text-xs text-brand-200/60">
          Designed and developed by
          <a
            href="https://nakshatranamahacreations.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1 text-brand-300 transition-colors duration-300 hover:text-white hover:underline"
          >
            Nakshatra Namaha Creations
            <ArrowIcon className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </p>
      </div>
    </footer>
  )
}
