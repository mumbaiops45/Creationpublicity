import Link from 'next/link'
import { services } from '@/data/services'
import SectionTitle from '@/components/common/SectionTitle'
import ServiceCard from '@/components/services/ServiceCard'
import { ArrowIcon } from '@/components/common/Icons'

export default function ServicesPreview() {
  return (
    <section className="section relative overflow-hidden" id="services">
      <div className="grid-lines opacity-60" />

      <div className="container-x relative z-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionTitle
            eyebrow="What We Do"
            title="Twelve ways to put your brand"
            highlight="in front of people"
            lead="Every medium we sell, we also plan, produce and execute ourselves. Pick a service to see the formats, the coverage and a form built for that brief."
          />

          <Link
            href="/services"
            className="btn btn-ghost group hidden shrink-0 md:inline-flex"
            data-reveal="left"
          >
            All Services
            <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <div
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          data-reveal-child
        >
          {services.map((service, index) => (
            <ServiceCard key={service.slug} service={service} index={index} />
          ))}
        </div>

        <div className="mt-10 flex justify-center md:hidden">
          <Link href="/services" className="btn btn-ghost group">
            All Services
            <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
