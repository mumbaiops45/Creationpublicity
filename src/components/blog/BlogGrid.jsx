'use client'

import { useMemo, useState } from 'react'
import { cn } from '@/lib/utils'
import BlogCard from './BlogCard'

/**
 * Case-study listing with client-side category filtering.
 * Every post is in the static HTML; the filter only hides cards, so nothing
 * is lost for search engines or for visitors without JavaScript.
 */
export default function BlogGrid({ posts, categories }) {
  const [active, setActive] = useState('All')

  const filtered = useMemo(
    () => (active === 'All' ? posts : posts.filter((post) => post.category === active)),
    [posts, active],
  )

  const [featured, ...rest] = filtered

  return (
    <>
      {categories.length > 2 && (
        <div className="mb-10 flex flex-wrap gap-2.5" data-reveal="up">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              aria-pressed={active === category}
              className={cn(
                'rounded-full border px-5 py-2 text-[0.8rem] font-semibold transition-all duration-300',
                active === category
                  ? 'border-brand-400 bg-brand-50 text-brand-700'
                  : 'border-line text-muted hover:border-brand-400 hover:text-ink-900',
              )}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      {featured && (
        <div className="mb-5" data-reveal="up">
          <BlogCard post={featured} featured />
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" data-reveal-child>
        {rest.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-16 text-center text-faint">
          No stories in this category yet.
        </p>
      )}
    </>
  )
}
