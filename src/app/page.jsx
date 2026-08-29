import Hero from '@/components/home/Hero'
import ServicesPreview from '@/components/home/ServicesPreview'
import StatsPreview from '@/components/home/StatsPreview'
import ParallaxShowcase from '@/components/home/ParallaxShowcase'
import ProcessSection from '@/components/home/ProcessSection'
import ClientsPreview from '@/components/home/ClientsPreview'
import TestimonialsPreview from '@/components/home/TestimonialsPreview'
import BlogPreview from '@/components/home/BlogPreview'
import CtaBanner from '@/components/home/CtaBanner'

export const metadata = {
  title: 'Creation Publicity Pvt. Ltd. — Advertising Agency in India',
  description:
    'Full-service advertising agency for outdoor, transit, mall, retail, print, cinema and digital media. Hoardings, bus shelters, malls, newspapers, corporate gifting and performance marketing across 140+ Indian cities.',
  alternates: { canonical: '/' },
}

/*
  Section order, and the background of each. The page alternates white and
  grey bands so every section reads as its own block, with two dark anchors
  (the hero and the numbers) and the dark footer to close.

    1. Hero ................ dark   — who we are
    2. Services ............ white  — what we sell
    3. Statistics .......... DARK   — proof at scale
    4. Why us .............. grey   — how we are different
    5. Process ............. white  — how we work
    6. Clients ............. grey   — who trusts us
    7. Testimonials ........ white  — what they say
    8. Case studies ........ grey   — the work itself
    9. Enquiry CTA ......... white  — the ask
*/
export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <StatsPreview />
      <ParallaxShowcase />
      <ProcessSection />
      <ClientsPreview />
      <TestimonialsPreview />
      <BlogPreview />
      <CtaBanner />
    </>
  )
}
