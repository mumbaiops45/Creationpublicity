import { services } from '@/data/services'
import { site } from '@/data/site'
import PageHero from '@/components/common/PageHero'
import ServiceCard from '@/components/services/ServiceCard'
import ProcessSection from '@/components/home/ProcessSection'
import CtaBanner from '@/components/home/CtaBanner'

export const metadata = {
  title: 'Our Services — 12 Advertising & Media Solutions',
  description:
    'Outdoor hoardings, malls and multiplexes, transit media, bus shelters, retail signage, newspapers and magazines, corporate gifting, print, radio, cinema, events and digital marketing — all under one roof.',
  alternates: { canonical: '/services' },
}

export default function ServicesPage() {
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Advertising Services',
    itemListElement: services.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: service.title,
      description: service.excerpt,
      url: `${site.url}/services/${service.slug}/`,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
      />

      <PageHero
        breadcrumbs={[{ label: 'Services' }]}
        eyebrow="Our Services"
        title="Twelve media disciplines,"
        highlight="one accountable team"
        lead="We do not broker briefs out to other agencies. Every service below is planned, produced and executed by our own people — which is why we can put a photograph against every line of your invoice."
      />

      <section className="section pt-0">
        <div className="container-x">
          <div
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            data-reveal-child
          >
            {services.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <ProcessSection />

      <CtaBanner
        eyebrow="Not sure which medium?"
        title="Tell us the objective. We will recommend the media."
        lead="Most briefs need two or three channels working together, not one. Send us what you are trying to achieve and we will build the plan around it."
      />
    </>
  )
}
