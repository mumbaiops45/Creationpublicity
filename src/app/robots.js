import { site } from '@/data/site'

// Emitted as a static file at build time (required by output: 'export').
export const dynamic = 'force-static'

export default function robots() {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  }
}
