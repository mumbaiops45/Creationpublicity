# Creation Publicity Pvt. Ltd. — Website

A fully static marketing website for an advertising agency: 12 service pages
with their own tailored enquiry forms, a statistics profile, clients and
testimonials, case studies, and an about section.

Built with **Next.js 16** (App Router, JavaScript), **Tailwind CSS 4**,
**GSAP** (ScrollTrigger, SplitText, ScrollSmoother) for animation and scrolling.
Exports to plain HTML/CSS/JS — no server required.

> **Editing content?** You want [`CONTENT-GUIDE.md`](./CONTENT-GUIDE.md), not this file.

---

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # writes the finished site to ./out
npm run preview  # serve the built ./out locally, exactly as a host would
npm run lint
```

`npm run build` produces a folder called `out/` containing the entire site as
static files. Upload its contents to any host.

> There is no `npm start`: with `output: 'export'` there is no Node server to
> run. Use `npm run preview` to check the built output locally.

### Build step: `scripts/fix-prefetch-payloads.mjs`

`npm run build` runs this immediately after `next build`. Next 16's client
requests prefetch payloads at a flat dotted filename
(`/services/__next.services.__PAGE__.txt`) but the static export writes them
into a nested directory (`out/services/__next.services/__PAGE__.txt`). Without
the fix every prefetch 404s and each internal link becomes a full page reload.
The script writes the flat copies the client actually asks for. It is a no-op
once a future Next.js release emits those names itself, so it is safe to keep.

---

## Deploying

Because the output is static, hosting is effectively free:

| Host | How |
| --- | --- |
| **Netlify / Vercel / Cloudflare Pages** (recommended) | Connect the repo. Build command `npm run build`, publish directory `out`. Every push republishes. |
| **Any shared host** (Hostinger, cPanel, etc.) | Run `npm run build` locally and upload the contents of `out/` to `public_html`. |
| **Amazon S3 / any CDN** | Sync `out/` to the bucket, enable static website hosting. |

`trailingSlash: true` is set in `next.config.mjs` so every route emits an
`index.html`, which every static host serves correctly with no rewrite rules.

### Before launch

1. Set the real domain in `src/data/site.js` → `url`. This drives canonical
   URLs, the sitemap, Open Graph tags and the structured data.
2. Confirm the phone, WhatsApp, email and address in the same file.
3. Connect the enquiry forms — see **Enquiry forms** below.
4. Add the home-page video — see `public/videos/README.md`.
5. Replace the placeholder clients, testimonials and team members.
6. Have the privacy policy reviewed by a legal advisor.

---

## Project structure

```
src/
├── app/                      # Routes (App Router)
│   ├── layout.jsx            # Fonts, metadata, structured data, shell
│   ├── page.jsx              # Home
│   ├── services/             # /services + /services/[slug] (12 pages)
│   ├── blog/                 # /blog + /blog/[slug] (case studies)
│   ├── about|contact|clients|testimonials|statistics|privacy-policy/
│   ├── not-found.jsx         # 404
│   ├── sitemap.js            # /sitemap.xml, generated from the data files
│   └── robots.js             # /robots.txt
│
├── components/
│   ├── layout/               # Header, Footer, FloatingActions, SmoothScroll
│   ├── home/                 # Home-page sections
│   ├── services/             # Service card, service enquiry form
│   ├── blog/                 # Post card, grid, body renderer
│   ├── forms/                # EnquiryForm + FormField
│   └── common/               # Buttons, icons, counters, ScrollAnimations
│
├── data/                     # ← ALL CONTENT LIVES HERE
│   ├── site.js               # Contact details, nav, social links
│   ├── services.js           # The 12 services + their form schemas
│   ├── stats.js  clients.js  testimonials.js  posts.js  team.js
│
└── lib/
    ├── content.js            # Content accessor layer (CMS swap point)
    ├── cms.js                # Notes on adding a hosted CMS later
    ├── gsap.js               # Plugin registration, reduced-motion helper
    └── utils.js
```

---

## Enquiry forms

Every service page has a form whose questions are defined alongside that
service in `src/data/services.js` (`formFields`). The general form lives on
`/contact`.

Delivery is configured with environment variables — copy `.env.example` to
`.env.local`:

```
NEXT_PUBLIC_FORM_ENDPOINT=https://api.web3forms.com/submit
NEXT_PUBLIC_FORM_ACCESS_KEY=your-access-key
```

Submissions POST as JSON, including a `message_transcript` field containing a
readable version of the whole form.

**If no endpoint is set**, the form still validates and then offers the visitor
a pre-filled WhatsApp message and a pre-filled email. This means the site is
fully functional the day it launches, before any third-party signup. All forms
also include a honeypot field to absorb bot submissions.

---

## Animation

Animation is opt-in through data attributes, handled by one global animator
(`components/common/ScrollAnimations.jsx`) — so server components can animate
without becoming client components:

```jsx
<div data-reveal="up" data-reveal-delay="0.2">…</div>   {/* fade + slide in */}
<div data-reveal-child>…</div>                          {/* stagger children */}
<div data-parallax="0.25">…</div>                       {/* vertical parallax */}
<div data-parallax-x="-0.2">…</div>                     {/* horizontal drift */}
```

The home-page hero has its own GSAP timeline in `components/home/Hero.jsx`:
the headline is split into characters with GSAP **SplitText** and typed out one
letter at a time, with a blinking caret that follows the last typed character.
The split runs after `document.fonts.ready` (so characters are measured against
the real webfont, not the fallback), with a 1.5s timeout as a safety net — the
headline is hidden until the split completes, so that promise must never be
able to leave it hidden. Change the wording in the `HEADLINE` / `SUBLINE`
arrays at the top of the file.

Smooth momentum scrolling uses GSAP's own **ScrollSmoother**
(`components/layout/SmoothScroll.jsx`), which needs the
`#smooth-wrapper` / `#smooth-content` pair rendered by the root layout.

Two things about it are deliberate and easy to break:

- **The header and floating call buttons sit OUTSIDE `#smooth-wrapper`.**
  ScrollSmoother transforms `#smooth-content`, and a transformed ancestor
  becomes the containing block for `position: fixed` descendants — move them
  inside and they stop being pinned to the viewport.
- **It runs on the home page only.** For the same reason, a transformed
  ancestor makes `position: sticky` impossible. The contact, service and
  case-study pages have sticky sidebars, so those pages scroll natively.
  If you enable it site-wide, those sidebars will stop pinning.

**Accessibility and no-JS.** Elements are pre-hidden by CSS *only* under
`html.js-ready`, a class added by an inline script. With JavaScript disabled the
class is never added and every element renders visible. Anyone with
`prefers-reduced-motion: reduce` gets no smooth scrolling, no parallax and no
reveals — all content shows immediately.

---

## SEO

- Per-page `title`, `description` and canonical URLs.
- Open Graph and Twitter card metadata.
- JSON-LD structured data: `Organization` / `LocalBusiness` / `AdvertisingAgency`
  with a service catalogue, plus `Service` schema per service page, `Article`
  schema per case study and `ItemList` on the services index.
- `sitemap.xml` and `robots.txt` generated at build time from the data files, so
  new services and posts are included automatically.
- Every page is prerendered to static HTML — all copy, headings, statistics and
  links are in the source, not injected by JavaScript.
- Semantic headings, a skip link, breadcrumbs, labelled form fields with
  `aria-invalid` / `aria-describedby` error wiring, and visible focus rings.

---

## Design system

Tokens are defined once in `src/app/globals.css` under `@theme`. Changing the
`--color-brand-*` ramp re-colours the entire site.

- **Brand:** the blue from the Creation Publicity business card, `#0f76bc`
  (`--color-brand-600`), on white. Deep navy-blue `--color-ink-900` for
  headings, a light blue `--color-surface-2` for alternating sections, and the
  same brand blue at `--color-brand-900` for the footer.
- **Logo:** `public/images/logo/logo.png` is the full-colour mark, used on the
  white header and in the footer. `logo-white.png` is a transparent white
  knockout of the same lockup, used in the header while it sits over the home
  page's dark video hero. Regenerate the knockout if the logo ever changes.
- **Type:** Sora (display) and Inter (body), self-hosted via `next/font`.
- **Components:** `.glass` (white card), `.btn` / `.btn-primary` / `.btn-ghost` /
  `.btn-light` (for the dark footer), `.eyebrow`, `.field-input`, `.aurora`,
  `.grid-lines`, `.gradient-text`.

---

## Notes on the brief

- The brief listed **9 services but asked for 12**. The nine given are all
  present; three more were added to complete the set — **Radio & Cinema
  Advertising**, **Events & Exhibitions**, and **Airport & Metro Advertising**.
  Swap these for your actual remaining three in `src/data/services.js`.
- All statistics, client names, testimonials, case studies and team members are
  **realistic placeholders**. Every one needs replacing with real, verifiable
  figures before launch — see the `TODO(client)` comments in the data files.
#   C r e a t i o n p u b l i c i t y  
 