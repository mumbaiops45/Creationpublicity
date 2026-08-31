import Link from 'next/link'
import { getAllPosts } from '@/data/posts'
import { site } from '@/data/site'
import SectionTitle from '@/components/common/SectionTitle'
import BlogCard from '@/components/blog/BlogCard'
import { ArrowIcon, LinkedInIcon } from '@/components/common/Icons'

export default function BlogPreview() {
  const posts = getAllPosts().slice(0, 3)

  return (
    <section className="section section-tinted relative overflow-hidden border-y border-line bg-surface-2">
      <div className="aurora opacity-40" />

      <div className="container-x relative z-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionTitle
            eyebrow="Case Studies & Insights"
            title="How the work actually"
            highlight="got done"
            lead="Campaign stories with the timelines, the constraints and the numbers — plus what we have learnt about buying media in India."
          />

          <a
            href={site.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost group hidden shrink-0 md:inline-flex"
            data-reveal="left"
          >
            <LinkedInIcon className="h-4 w-4" />
            Follow on LinkedIn
          </a>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3" data-reveal-child>
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        <div className="mt-9 flex flex-wrap justify-center gap-3" data-reveal="up">
          <Link href="/blog" className="btn btn-ghost group">
            All case studies
            <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <a
            href={site.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost md:hidden"
          >
            <LinkedInIcon className="h-4 w-4" />
            Follow on LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
