import { Sora, Inter } from 'next/font/google'
import './globals.css'

import { site } from '@/data/site'
import { services } from '@/data/services'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FloatingActions from '@/components/layout/FloatingActions'
import SmoothScroll from '@/components/layout/SmoothScroll'
import ScrollAnimations from '@/components/common/ScrollAnimations'

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-sora',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.legalName} — Advertising Agency in ${site.address.city}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    'advertising agency',
    'outdoor advertising India',
    'hoarding advertising',
    'mall advertising',
    'transit media',
    'bus shelter advertising',
    'newspaper advertising agency',
    'corporate gifting',
    'digital marketing agency',
    site.address.city,
  ],
  authors: [{ name: site.legalName }],
  creator: site.legalName,
  publisher: site.legalName,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: site.url,
    siteName: site.legalName,
    title: `${site.legalName} — Advertising Agency`,
    description: site.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.legalName} — Advertising Agency`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  category: 'Advertising & Marketing',
}

export const viewport = {
  themeColor: '#0f76bc',
  width: 'device-width',
  initialScale: 1,
}

/**
 * Structured data. Search engines use this for the knowledge panel and for
 * rich results on the services list.
 */
function StructuredData() {
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Organization', 'LocalBusiness', 'AdvertisingAgency'],
        '@id': `${site.url}/#organization`,
        name: site.legalName,
        alternateName: site.name,
        url: site.url,
        logo: `${site.url}/images/logo/logo.png`,
        image: `${site.url}/images/logo/logo.png`,
        description: site.description,
        email: site.email,
        telephone: site.phone,
        foundingDate: String(site.foundedYear),
        address: {
          '@type': 'PostalAddress',
          streetAddress: site.address.line2,
          addressLocality: site.address.city,
          addressRegion: site.address.state,
          postalCode: site.address.postalCode,
          addressCountry: 'IN',
        },
        areaServed: { '@type': 'Country', name: 'India' },
        sameAs: [site.socials.instagram, site.socials.linkedin],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Advertising Services',
          itemListElement: services.map((service) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: service.title,
              description: service.excerpt,
              url: `${site.url}/services/${service.slug}/`,
            },
          })),
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${site.url}/#website`,
        url: site.url,
        name: site.legalName,
        description: site.description,
        publisher: { '@id': `${site.url}/#organization` },
        inLanguage: 'en-IN',
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  )
}

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className={`${sora.variable} ${inter.variable}`}>
      <body className="antialiased">
        {/*
          Marks the document as JavaScript-enabled before anything paints, so
          the stylesheet can pre-hide elements that GSAP is about to animate in.
          Without JS the class is never added and every element stays visible.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js-ready')`,
          }}
        />

        <StructuredData />

        <SmoothScroll />
        <ScrollAnimations />

        {/*
          Header and FloatingActions sit OUTSIDE #smooth-wrapper on purpose.
          ScrollSmoother transforms #smooth-content, and a transformed ancestor
          becomes the containing block for `position: fixed` descendants — put
          them inside and they would scroll away instead of staying pinned.
        */}
        <Header />

        <div id="smooth-wrapper">
          <div id="smooth-content">
            <main id="main">{children}</main>
            <Footer />
          </div>
        </div>

        <FloatingActions />
      </body>
    </html>
  )
}
