import Link from 'next/link'
import Image from 'next/image'
import { formatDate, cn } from '@/lib/utils'
import { getPostImage } from '@/data/posts'
import { ArrowIcon } from '@/components/common/Icons'

export default function BlogCard({ post, featured = false }) {
  // Falls back to the photo of the service the story belongs to.
  const cover = getPostImage(post)

  return (
    <article
      className={cn(
        'glass glass-hover group relative flex flex-col overflow-hidden rounded-2xl',
        featured && 'lg:flex-row',
      )}
    >
      {/* Cover. Falls back to a generated gradient plate when no image is set. */}
      <Link
        href={`/blog/${post.slug}`}
        className={cn(
          'relative block shrink-0 overflow-hidden',
          // 3:2 matches the source photography exactly, so nothing is cropped.
          // A fixed height here made the box far wider than 3:2 and cut a third
          // off the top and bottom of every cover.
          featured ? 'aspect-[16/10] lg:aspect-auto lg:h-auto lg:w-[45%]' : 'aspect-[3/2]',
        )}
        data-reveal-image
        aria-hidden="true"
        tabIndex={-1}
      >
        {cover ? (
          <Image
            src={cover}
            alt=""
            width={800}
            height={500}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <span className="flex h-full w-full items-center justify-center bg-[radial-gradient(ellipse_at_30%_20%,rgba(15,118,188,0.16),transparent_60%),radial-gradient(ellipse_at_80%_80%,rgba(43,143,226,0.13),transparent_65%)]">
            <span className="px-6 text-center font-display text-xs font-bold uppercase tracking-[0.24em] text-brand-300/50">
              {post.service ?? post.category}
            </span>
          </span>
        )}
        <span className="absolute left-4 top-4 rounded-full border border-brand-200 bg-white/80 px-3 py-1 text-[0.64rem] font-semibold uppercase tracking-[0.14em] text-brand-700 backdrop-blur-sm">
          {post.category}
        </span>
      </Link>

      <div className={cn('flex flex-1 flex-col p-6', featured && 'lg:p-9')}>
        <div className="flex items-center gap-2.5 text-[0.7rem] text-faint">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span className="h-1 w-1 rounded-full bg-brand-200" />
          <span>{post.readingTime} min read</span>
        </div>

        <h3
          className={cn(
            'mt-3 font-display font-bold leading-snug text-ink-900 transition-colors duration-300 group-hover:text-brand-800',
            featured ? 'text-2xl lg:text-3xl' : 'text-lg',
          )}
        >
          <Link href={`/blog/${post.slug}`} className="before:absolute before:inset-0">
            {post.title}
          </Link>
        </h3>

        <p
          className={cn(
            'mt-3 flex-1 leading-relaxed text-muted',
            featured ? 'text-[0.95rem]' : 'text-[0.87rem]',
          )}
        >
          {post.excerpt}
        </p>

        <div className="mt-6 flex items-center justify-between gap-4">
          <span className="inline-flex items-center gap-2 text-[0.76rem] font-semibold uppercase tracking-[0.14em] text-brand-600">
            Read story
            <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
          </span>
          {post.client && (
            <span className="truncate text-[0.72rem] text-faint">{post.client}</span>
          )}
        </div>
      </div>
    </article>
  )
}
