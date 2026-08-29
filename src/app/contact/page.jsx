import Link from 'next/link'
import { site, addressLine, whatsappLink } from '@/data/site'
import { services } from '@/data/services'
import PageHero from '@/components/common/PageHero'
import EnquiryForm from '@/components/forms/EnquiryForm'
import {
  PhoneIcon,
  MailIcon,
  PinIcon,
  ClockIcon,
  WhatsAppIcon,
  InstagramIcon,
  LinkedInIcon,
} from '@/components/common/Icons'

export const metadata = {
  title: 'Contact Us — Get a Quote',
  description: `Talk to Creation Publicity Pvt. Ltd. about your next campaign. Call ${site.phone}, message us on WhatsApp, or send an enquiry and we will reply within one working day.`,
  alternates: { canonical: '/contact' },
}

/** The general enquiry form asks which service, then the usual qualifiers. */
const generalFields = [
  {
    name: 'service',
    label: 'Which service are you interested in?',
    type: 'select',
    required: true,
    options: [...services.map((service) => service.title), 'Multiple services', 'Not sure yet'],
  },
  {
    name: 'cities',
    label: 'Target Cities / Locations',
    type: 'text',
    required: false,
    placeholder: 'e.g. Mumbai, Pune',
  },
  {
    name: 'timeline',
    label: 'When do you need this live?',
    type: 'select',
    required: false,
    options: ['Immediately', 'Within a month', '1 – 3 months', '3 months +', 'Just exploring'],
  },
  {
    name: 'budget',
    label: 'Indicative Budget',
    type: 'select',
    required: false,
    options: [
      'Under ₹1 Lakh',
      '₹1 – 5 Lakh',
      '₹5 – 15 Lakh',
      '₹15 – 50 Lakh',
      '₹50 Lakh +',
      'Prefer to discuss',
    ],
  },
  {
    name: 'message',
    label: 'Tell us about your requirement',
    type: 'textarea',
    required: true,
    placeholder: 'The objective, the product, the audience, anything you already have in mind…',
  },
]

const contactCards = [
  {
    icon: PhoneIcon,
    label: 'Call us',
    value: site.phone,
    href: `tel:${site.phoneHref}`,
    detail: site.hours,
  },
  {
    icon: WhatsAppIcon,
    label: 'WhatsApp',
    value: 'Message our team',
    href: whatsappLink(),
    detail: 'Fastest reply, usually within the hour',
    external: true,
  },
  {
    icon: MailIcon,
    label: 'Email',
    value: site.email,
    href: `mailto:${site.email}`,
    detail: 'For briefs, decks and rate-card requests',
  },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: 'Contact Us' }]}
        eyebrow="Contact Us"
        title="Tell us what you need."
        highlight="We will tell you what it costs."
        lead="No lengthy discovery process to get a number. Send us the brief and you will have options, availability and pricing within one working day."
      />

      {/* ---------------- Contact channels ---------------- */}
      <section className="pb-4">
        <div className="container-x">
          <div className="grid gap-4 sm:grid-cols-3" data-reveal-child>
            {contactCards.map((card) => {
              const Icon = card.icon
              return (
                <a
                  key={card.label}
                  href={card.href}
                  {...(card.external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className="glass glass-hover group rounded-2xl p-6"
                >
                  <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-brand-200 bg-brand-50 text-brand-600 transition-colors group-hover:border-brand-400 group-hover:text-brand-700">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-faint">
                    {card.label}
                  </p>
                  <p className="mt-1.5 font-display text-base font-bold text-ink-900 transition-colors group-hover:text-brand-800">
                    {card.value}
                  </p>
                  <p className="mt-1.5 text-[0.8rem] text-faint">{card.detail}</p>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* ---------------- Form + details ---------------- */}
      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-14">
          <div data-reveal="up">
            <EnquiryForm
              fields={generalFields}
              serviceName="General Enquiry"
              title="Send us an enquiry"
              lead="The more you tell us here, the more useful our first reply will be."
            />
          </div>

          <aside className="space-y-4 lg:sticky lg:top-28 lg:h-fit" data-reveal="right">
            <div className="glass rounded-2xl p-7">
              <h2 className="font-display text-lg font-bold text-ink-900">Visit our office</h2>

              <ul className="mt-5 space-y-4 text-[0.9rem]">
                <li className="flex gap-3">
                  <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                  <address className="not-italic leading-relaxed text-muted">
                    <span className="block font-semibold text-ink-800">
                      {site.address.line1}
                    </span>
                    {addressLine}
                  </address>
                </li>
                <li className="flex gap-3">
                  <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                  <span className="text-muted">{site.hours}</span>
                </li>
              </ul>

              <div className="divider-glow my-6" />

              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-faint">
                Follow us
              </p>
              <div className="mt-3 flex items-center gap-2.5">
                <a
                  href={site.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="rounded-full border border-brand-200 p-2.5 text-body transition-colors hover:border-brand-400 hover:text-brand-700"
                >
                  <InstagramIcon className="h-4 w-4" />
                </a>
                <a
                  href={site.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="rounded-full border border-brand-200 p-2.5 text-body transition-colors hover:border-brand-400 hover:text-brand-700"
                >
                  <LinkedInIcon className="h-4 w-4" />
                </a>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="rounded-full border border-brand-200 p-2.5 text-body transition-colors hover:border-brand-400 hover:text-brand-700"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="glass rounded-2xl p-7">
              <h2 className="font-display text-lg font-bold text-ink-900">
                Prefer a service-specific form?
              </h2>
              <p className="mt-2 text-[0.86rem] leading-relaxed text-muted">
                Each service page has its own form with the questions that matter for
                that medium — sizes, durations, editions, quantities.
              </p>
              <Link href="/services" className="btn btn-ghost mt-5 w-full">
                Browse all 12 services
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
