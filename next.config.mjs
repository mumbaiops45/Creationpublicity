/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fully static site: `next build` emits plain HTML/CSS/JS into ./out,
  // which can be hosted on any cheap static host (Netlify, Vercel, Cloudflare
  // Pages, Hostinger, S3) with no Node server to pay for or maintain.
  output: 'export',

  // Static export has no image optimisation server, so images are served as-is.
  // Keep source images reasonably sized before committing them.
  images: { unoptimized: true },

  // Emit /about/index.html rather than /about.html — the form every static
  // host serves correctly without extra rewrite rules.
  trailingSlash: true,

  reactCompiler: true,
}

export default nextConfig
