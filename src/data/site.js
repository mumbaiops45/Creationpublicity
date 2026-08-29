/**
 * -----------------------------------------------------------------------------
 * SITE CONFIGURATION — edit this file to change company-wide details.
 * Everything here (phone, WhatsApp, address, social links, nav) is used across
 * every page. Change it once here and it updates everywhere.
 * -----------------------------------------------------------------------------
 */

export const site = {
  name: 'Creation Publicity',
  legalName: 'Creation Publicity Pvt. Ltd.',
  shortName: 'Creation Publicity',
  tagline: 'Advertising that owns the street, the screen and the scroll.',
  description:
    'Creation Publicity Pvt. Ltd. is a full-service advertising agency delivering outdoor, transit, mall, print and digital media campaigns across India — from hoardings and bus shelters to malls, multiplexes and performance marketing.',

  // TODO(client): replace with the live domain before launch.
  url: 'https://www.creationpublicity.com',

  // TODO(client): confirm these contact details.
  phone: '+91 xxxxx xxxxx',
  phoneHref: '+919876543210',
  whatsapp: '919876543210', // country code + number, digits only
  whatsappMessage:
    "Hi Creation Publicity! I'd like to know more about your advertising services.",
  email: 'info@creationpublicity.com',

  address: {
    line1: 'Creation Publicity Pvt. Ltd.',
    line2: 'Andheri East',
    city: 'Mumbai',
    state: 'Maharashtra',
    postalCode: '400059',
    country: 'India',
  },

  hours: 'Mon – Sat, 10:00 AM – 7:00 PM IST',
  foundedYear: 2009,

  socials: {
    instagram: 'https://www.instagram.com/creationpublicity',
    linkedin: 'https://www.linkedin.com/company/creationpublicity',
  },
}

/** Full postal address as one line — used in the footer and schema.org markup. */
export const addressLine = [
  site.address.line2,
  site.address.city,
  `${site.address.state} ${site.address.postalCode}`,
  site.address.country,
].join(', ')

/** Pre-built WhatsApp deep link used by the floating button and form fallbacks. */
export function whatsappLink(message = site.whatsappMessage) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`
}

/** Primary navigation. Add or remove items here to change the header + footer. */
export const mainNav = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Statistics', href: '/statistics' },
  { label: 'Clients', href: '/clients' },
  { label: 'Case Studies', href: '/blog' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact Us', href: '/contact' },
]

export const footerNav = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Statistics', href: '/statistics' },
      { label: 'Clients', href: '/clients' },
      { label: 'Testimonials', href: '/testimonials' },
      { label: 'Case Studies', href: '/blog' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
]
