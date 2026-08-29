import { site } from '@/data/site'
import { getServiceSlugs } from '@/data/services'
import { getAllPosts } from '@/data/posts'

// Emitted as a static file at build time (required by output: 'export').
export const dynamic = 'force-static'

/**
 * Generates /sitemap.xml at build time. New services and case studies are
 * picked up automatically — nothing to maintain by hand.
 */
export default function sitemap() {
  const now = new Date()

  const staticRoutes = [
    { path: '', priority: 1, changeFrequency: 'monthly' },
    { path: '/services', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/statistics', priority: 0.7, changeFrequency: 'yearly' },
    { path: '/clients', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/testimonials', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/blog', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/about', priority: 0.7, changeFrequency: 'yearly' },
    { path: '/contact', priority: 0.9, changeFrequency: 'yearly' },
    { path: '/privacy-policy', priority: 0.2, changeFrequency: 'yearly' },
  ]

  return [
    ...staticRoutes.map((route) => ({
      url: `${site.url}${route.path}/`,
      lastModified: now,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...getServiceSlugs().map((slug) => ({
      url: `${site.url}/services/${slug}/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85,
    })),
    ...getAllPosts().map((post) => ({
      url: `${site.url}/blog/${post.slug}/`,
      lastModified: new Date(post.date),
      changeFrequency: 'yearly',
      priority: 0.6,
    })),
  ]
}
