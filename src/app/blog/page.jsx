import { getAllPosts, getPostCategories } from '@/data/posts'
import { site } from '@/data/site'
import PageHero from '@/components/common/PageHero'
import BlogGrid from '@/components/blog/BlogGrid'
import CtaBanner from '@/components/home/CtaBanner'
import { LinkedInIcon } from '@/components/common/Icons'

export const metadata = {
  title: 'Case Studies & Insights',
  description:
    'Campaign stories from Creation Publicity — how three-city launches, national signage rollouts and performance campaigns actually got delivered, plus what we have learnt about buying media in India.',
  alternates: { canonical: '/blog' },
}

export default function BlogPage() {
  const posts = getAllPosts()
  const categories = getPostCategories()

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: 'Case Studies' }]}
        eyebrow="Case Studies & Insights"
        title="The work, with"
        highlight="the constraints left in"
        lead="Most agency case studies show the finished artwork. Ours show the deadline, the problem with the site list, and the number at the end."
      >
        <a
          href={site.socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost mt-8"
        >
          <LinkedInIcon className="h-4 w-4" />
          Follow us on LinkedIn
        </a>
      </PageHero>

      <section className="section pt-0">
        <div className="container-x">
          <BlogGrid posts={posts} categories={categories} />
        </div>
      </section>

      <CtaBanner
        eyebrow="Your campaign next"
        title="Every story here started with a phone call."
        lead="Tell us the problem — the deadline, the budget, the market you cannot crack — and we will tell you what we would do about it."
      />
    </>
  )
}
