import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getAllPosts, getPostBySlug, getPostSlugs, getPostImage } from '@/data/posts'
import { services } from '@/data/services'
import { site } from '@/data/site'
import { formatDate, slugify } from '@/lib/utils'
import PageHero from '@/components/common/PageHero'
import BlogContent from '@/components/blog/BlogContent'
import BlogCard from '@/components/blog/BlogCard'
import CtaBanner from '@/components/home/CtaBanner'
import { LinkedInIcon, ArrowIcon } from '@/components/common/Icons'

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) return { title: 'Story not found' }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      url: `${site.url}/blog/${post.slug}/`,
      publishedTime: post.date,
    },
  }
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) notFound()

  const cover = getPostImage(post)

  const related = getAllPosts()
    .filter((item) => item.slug !== post.slug)
    .slice(0, 3)

  // Link the story back to the service it belongs to, when the names match.
  const relatedService = services.find(
    (service) => slugify(service.title) === slugify(post.service ?? ''),
  )

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Organization', name: site.legalName, url: site.url },
    publisher: {
      '@type': 'Organization',
      name: site.legalName,
      logo: { '@type': 'ImageObject', url: `${site.url}/images/logo/logo.png` },
    },
    mainEntityOfPage: `${site.url}/blog/${post.slug}/`,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <PageHero
        breadcrumbs={[{ label: 'Case Studies', href: '/blog' }, { label: post.category }]}
        eyebrow={post.category}
        title={post.title}
        lead={post.excerpt}
      >
        <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.8rem] text-faint">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span className="h-1 w-1 rounded-full bg-brand-200" />
          <span>{post.readingTime} min read</span>
          {post.client && (
            <>
              <span className="h-1 w-1 rounded-full bg-brand-200" />
              <span>
                Client: <span className="text-body">{post.client}</span>
              </span>
            </>
          )}
        </div>
      </PageHero>

      {/* ---------------- Cover ---------------- */}
      {cover && (
        <section className="pb-14">
          <div className="container-x">
            <div className="relative aspect-[16/7] overflow-hidden rounded-2xl border border-line" data-reveal-image>
              <Image
                src={cover}
                alt={post.title}
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1200px"
                className="object-cover"
              />
            </div>
          </div>
        </section>
      )}

      {/* ---------------- Article ---------------- */}
      <section className="section pt-0">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_18rem] lg:gap-16">
          <article data-reveal="up">
            <BlogContent blocks={post.body} />

            {post.linkedinUrl && (
              <div className="glass mt-9 flex flex-col gap-4 rounded-2xl p-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-display text-base font-bold text-ink-900">
                    Discussing this on LinkedIn
                  </p>
                  <p className="mt-1 text-[0.86rem] text-muted">
                    Follow along and join the conversation.
                  </p>
                </div>
                <a
                  href={post.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost shrink-0"
                >
                  <LinkedInIcon className="h-4 w-4" />
                  View on LinkedIn
                </a>
              </div>
            )}
          </article>

          {/* Sidebar */}
          <aside className="space-y-4 lg:sticky lg:top-28 lg:h-fit" data-reveal="right">
            {relatedService && (
              <div className="glass rounded-2xl p-6">
                <p className="eyebrow mb-4">Service used</p>
                <h2 className="font-display text-base font-bold text-ink-900">
                  {relatedService.title}
                </h2>
                <p className="mt-2 text-[0.85rem] leading-relaxed text-muted">
                  {relatedService.tagline}
                </p>
                <Link
                  href={`/services/${relatedService.slug}`}
                  className="btn btn-ghost mt-5 w-full"
                >
                  Explore this service
                </Link>
              </div>
            )}

            <div className="glass rounded-2xl p-6">
              <p className="eyebrow mb-4">Got a similar brief?</p>
              <p className="text-[0.88rem] leading-relaxed text-muted">
                Short deadline, awkward market, or a rollout that has gone sideways —
                these are the ones we like.
              </p>
              <Link href="/contact" className="btn btn-primary group mt-5 w-full">
                Enquire Now
                <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* ---------------- More stories ---------------- */}
      <section className="section section-tinted relative overflow-hidden border-t border-line bg-surface-2">
        <div className="aurora opacity-40" />

        <div className="container-x relative z-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-display text-2xl font-bold text-ink-900" data-reveal="up">
              More stories
            </h2>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
              data-reveal="left"
            >
              All case studies
              <ArrowIcon className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" data-reveal-child>
            {related.map((item) => (
              <BlogCard key={item.slug} post={item} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
