/**
 * -----------------------------------------------------------------------------
 * CASE STUDIES & BLOG — the /blog listing and each /blog/<slug> page.
 *
 * To publish a new story, copy one block and change the fields. `body` is an
 * array of blocks so you never have to write HTML:
 *   { type: 'heading',  text: '...' }
 *   { type: 'paragraph', text: '...' }
 *   { type: 'list',     items: ['...', '...'] }
 *   { type: 'quote',    text: '...', attribution: '...' }
 *   { type: 'stats',    items: [{ value: '...', label: '...' }] }
 *
 * `linkedinUrl` adds a "Read the discussion on LinkedIn" link to the story, so
 * each case study can point at the matching LinkedIn post.
 *
 * `image` is the cover photo. Leave it null and the story automatically uses
 * the photo of the service named in its `service` field — so every post has a
 * relevant cover without you having to supply one. To use a specific photo,
 * put it in /public/images/blog/ and set it, e.g.
 *   image: '/images/blog/my-story.webp',
 * -----------------------------------------------------------------------------
 */

import { services } from './services.js'

export const posts = [
  {
    slug: 'skyline-developers-three-city-launch',
    title: 'Eleven days to launch a township across three cities',
    excerpt:
      'How we booked, printed and mounted a 46-site outdoor campaign for Skyline Developers in under a fortnight — and why the site audit mattered more than the discount.',
    category: 'Case Study',
    service: 'Hoardings & Neon Signs',
    client: 'Skyline Developers',
    date: '2026-06-18',
    readingTime: 6,
    image: '/images/services/hoardings-and-neon-signs.webp',
    linkedinUrl: 'https://www.linkedin.com/company/creationpublicity',
    body: [
      {
        type: 'paragraph',
        text: 'Skyline Developers came to us eleven days before the public launch of a township project spread across Mumbai, Pune and Nashik. The booking window their previous agency had promised had quietly collapsed, and the media plan on the table was a list of whatever sites happened to be vacant.',
      },
      { type: 'heading', text: 'The problem with a vacancy list' },
      {
        type: 'paragraph',
        text: 'A vacant site is vacant for a reason. Before committing a rupee we ran a physical audit of every proposed location — approach distance, line of sight from the correct traffic direction, obstruction from trees and flyovers, and whether the site was actually lit after dark. Nineteen of the forty-one sites offered failed at least one of those checks.',
      },
      {
        type: 'paragraph',
        text: 'We rebuilt the plan around the site quality rather than the discount, added inventory from our own network, and ended up with forty-six sites that all faced the right way.',
      },
      { type: 'heading', text: 'Compressing the timeline' },
      {
        type: 'list',
        items: [
          'Day 1–2: site audit and revised media plan signed off',
          'Day 3: artwork adapted to 46 different aspect ratios in-house',
          'Day 4–6: flex printing run in two parallel units to protect the deadline',
          'Day 7–10: mounting across three cities with local crews',
          'Day 11: dated photographic report delivered, campaign live before launch',
        ],
      },
      {
        type: 'quote',
        text: 'They had the sites confirmed in two days, and sent us dated mounting photographs from every single one. That is not normal in this industry.',
        attribution: 'Rohit Menon, Head of Marketing, Skyline Developers',
      },
      { type: 'heading', text: 'Results' },
      {
        type: 'stats',
        items: [
          { value: '46', label: 'Sites live in 11 days' },
          { value: '3', label: 'Cities executed in parallel' },
          { value: '2.1 Cr', label: 'Estimated monthly impressions' },
          { value: '31%', label: 'Uplift in site walk-ins' },
        ],
      },
      {
        type: 'paragraph',
        text: 'The lesson we keep relearning: in outdoor, the audit is the campaign. Everything after it is logistics.',
      },
    ],
  },

  {
    slug: 'meridian-retail-240-store-signage-rollout',
    title: 'Rescuing a 240-store signage rollout halfway through',
    excerpt:
      'A national retail chain was left with three different versions of its own storefront. Here is how we standardised 240 outlets in fourteen weeks.',
    category: 'Case Study',
    service: 'Retail & Signages',
    client: 'Meridian Retail',
    date: '2026-04-29',
    readingTime: 7,
    image: '/images/services/retail-and-signages.webp',
    linkedinUrl: 'https://www.linkedin.com/company/creationpublicity',
    body: [
      {
        type: 'paragraph',
        text: 'When Meridian Retail called us, 96 of their 240 outlets had been re-signed by a previous vendor, and no two regions looked the same. Fascia heights varied, the brand red had drifted across three different print batches, and roughly a fifth of the illuminated signs were already failing.',
      },
      { type: 'heading', text: 'Specification before fabrication' },
      {
        type: 'paragraph',
        text: 'We started by writing a single signage specification: exact colour references, fascia proportions by storefront width, lighting output, and the material grade for coastal versus inland cities. Then we surveyed every remaining outlet before fabricating anything — because a sign built to the wrong measurement is a sign built twice.',
      },
      {
        type: 'list',
        items: [
          'Physical site survey of all 240 outlets, photographed and measured',
          'Three fascia templates covering every storefront width in the network',
          'Marine-grade material for the 38 coastal locations',
          'Region-wise installation waves to avoid trading disruption',
        ],
      },
      {
        type: 'quote',
        text: 'Every store now matches the brand book, and we got a photo report for each one.',
        attribution: 'Ananya Deshpande, Retail Operations Director, Meridian Retail',
      },
      { type: 'heading', text: 'Results' },
      {
        type: 'stats',
        items: [
          { value: '240', label: 'Outlets standardised' },
          { value: '14', label: 'Weeks end to end' },
          { value: '0', label: 'Re-fabrications needed' },
          { value: '100%', label: 'Outlets photo-verified' },
        ],
      },
    ],
  },

  {
    slug: 'arth-finserv-cost-per-lead',
    title: 'Cutting cost per lead by 38% without cutting spend',
    excerpt:
      'What changed when we stopped optimising a financial services campaign for form fills and started optimising it for the leads sales actually called back.',
    category: 'Case Study',
    service: 'Digital Marketing',
    client: 'Arth Finserv',
    date: '2026-03-11',
    readingTime: 5,
    image: '/images/services/digital-marketing.webp',
    linkedinUrl: 'https://www.linkedin.com/company/creationpublicity',
    body: [
      {
        type: 'paragraph',
        text: 'Arth Finserv were generating leads at a healthy-looking cost per acquisition and converting almost none of them. The campaign was working exactly as instructed — it was just being instructed to buy the wrong thing.',
      },
      { type: 'heading', text: 'Optimising for the wrong event' },
      {
        type: 'paragraph',
        text: 'The platform was optimising towards form submissions. Nobody had told it which submissions turned into a conversation, so it kept finding the cheapest people willing to type their name into a box. We connected the CRM back to the ad platforms and moved the optimisation event to "qualified by sales".',
      },
      {
        type: 'list',
        items: [
          'Offline conversion import from the CRM into Meta and Google',
          'Optimisation event moved from lead to sales-qualified lead',
          'Call tracking added so phone enquiries stopped being invisible',
          'Landing pages rebuilt around one product each, not the full range',
        ],
      },
      { type: 'heading', text: 'Results after one quarter' },
      {
        type: 'stats',
        items: [
          { value: '−38%', label: 'Cost per qualified lead' },
          { value: '+61%', label: 'Sales-qualified lead volume' },
          { value: '2.4×', label: 'Return on ad spend' },
          { value: 'Same', label: 'Monthly budget' },
        ],
      },
      {
        type: 'quote',
        text: 'For once the reporting actually matched what our sales team was seeing in the CRM.',
        attribution: 'Vikram Shah, Business Head, Arth Finserv',
      },
    ],
  },

  {
    slug: 'how-to-choose-a-hoarding-site',
    title: 'How to judge a hoarding site before you pay for it',
    excerpt:
      'Six checks we run on every outdoor location — and the ones that quietly kill a campaign if you skip them.',
    category: 'Insight',
    service: 'Hoardings & Neon Signs',
    client: null,
    date: '2026-02-02',
    readingTime: 8,
    image: '/images/services/buses-and-bus-shelters.webp',
    linkedinUrl: 'https://www.linkedin.com/company/creationpublicity',
    body: [
      {
        type: 'paragraph',
        text: 'Most outdoor money is lost at the point of site selection, not at negotiation. A cheap site nobody sees is the most expensive media you can buy. These are the checks we run before recommending any location to a client.',
      },
      { type: 'heading', text: '1. Which direction is the traffic?' },
      {
        type: 'paragraph',
        text: 'A site facing away from the dominant traffic flow halves its value instantly. Stand at the location during peak hours and look at where cars are actually coming from, not at the map.',
      },
      { type: 'heading', text: '2. How long is the approach?' },
      {
        type: 'paragraph',
        text: 'Visibility is a function of time, not size. A modest board with an eight-second approach outperforms a giant one that appears for two seconds after a blind curve.',
      },
      { type: 'heading', text: '3. What obstructs it in season?' },
      {
        type: 'paragraph',
        text: 'Trees are the classic trap. A site audited in March can be half-hidden by August. Check the foliage line and the position of any planned flyover work.',
      },
      { type: 'heading', text: '4. Is it lit, and until when?' },
      {
        type: 'paragraph',
        text: 'Ask specifically what time the lights go off. Plenty of "illuminated" sites go dark at 10 p.m., losing the entire late-evening audience you were charged for.',
      },
      { type: 'heading', text: '5. What is the clutter around it?' },
      {
        type: 'paragraph',
        text: 'One board in a clean sky beats a bigger board in a wall of nine competing frames. Count what shares the field of view.',
      },
      { type: 'heading', text: '6. Is the permission actually current?' },
      {
        type: 'paragraph',
        text: 'Municipal permissions lapse. Ask to see the current documentation before booking, not after your flex has been printed.',
      },
      {
        type: 'paragraph',
        text: 'None of this is complicated. It is just work that many buyers skip — which is precisely why doing it is an advantage.',
      },
    ],
  },

  {
    slug: 'prime-capital-diwali-gifting',
    title: '9,000 hampers, 400 addresses, one week',
    excerpt:
      'The logistics behind a national festive gifting programme, and why the packaging design mattered as much as what went inside it.',
    category: 'Case Study',
    service: 'Corporate Gifting',
    client: 'Prime Capital Bank',
    date: '2025-11-14',
    readingTime: 5,
    image: '/images/services/corporate-gifting.webp',
    linkedinUrl: 'https://www.linkedin.com/company/creationpublicity',
    body: [
      {
        type: 'paragraph',
        text: 'Prime Capital Bank wanted one festive gift that would work for a branch cashier and a board member alike, delivered to roughly four hundred separate addresses, in the week before Diwali — the single worst week of the year for Indian logistics.',
      },
      { type: 'heading', text: 'Designing for the unboxing' },
      {
        type: 'paragraph',
        text: 'We built the hamper around a rigid, reusable box with a magnetic closure, foil-blocked in the bank\'s brand colours. The contents were curated in three tiers at different price points, but the outer packaging was identical across all of them — so nobody in the same office could tell who had received which tier.',
      },
      { type: 'heading', text: 'Kitting and dispatch' },
      {
        type: 'list',
        items: [
          'Single kitting facility with a three-shift packing line',
          'Address validation pass before any label was printed',
          'Tier allocation handled from the client HR file, encrypted end to end',
          'Consignment-level tracking dashboard shared with the HR team',
        ],
      },
      {
        type: 'stats',
        items: [
          { value: '9,000', label: 'Hampers dispatched' },
          { value: '412', label: 'Delivery addresses' },
          { value: '6 days', label: 'From sign-off to last delivery' },
          { value: '99.6%', label: 'Delivered before Diwali' },
        ],
      },
      {
        type: 'quote',
        text: 'Not a single escalation reached my desk.',
        attribution: 'Priya Nair, HR Director, Prime Capital Bank',
      },
    ],
  },

  {
    slug: 'why-tier-two-cities-outperform',
    title: 'Why your outdoor budget goes further in Tier-2 India',
    excerpt:
      'Metro rates have outpaced metro attention. A look at what the same money buys in Nagpur, Indore and Coimbatore.',
    category: 'Insight',
    service: 'Transit Media',
    client: null,
    date: '2025-09-23',
    readingTime: 6,
    image: '/images/services/transit-media.webp',
    linkedinUrl: 'https://www.linkedin.com/company/creationpublicity',
    body: [
      {
        type: 'paragraph',
        text: 'Every brief we receive starts with Mumbai, Delhi and Bengaluru. That is understandable, and often wrong. The cost per thousand impressions in a Tier-2 city is frequently a third of the metro rate, and the clutter is a fraction of it.',
      },
      { type: 'heading', text: 'Less competition for the same eyes' },
      {
        type: 'paragraph',
        text: 'On a metro arterial road your board competes with dozens of others for the same two seconds. On the main commercial stretch of a Tier-2 city, you may be one of four. Share of voice is the variable nobody prices properly.',
      },
      { type: 'heading', text: 'Where it does not work' },
      {
        type: 'paragraph',
        text: 'This is not a universal argument. If your product depends on metro-only distribution, high-income density or a retail network you have not built yet, Tier-2 outdoor will generate awareness you cannot convert. The efficiency only counts when the demand can actually be served.',
      },
      {
        type: 'list',
        items: [
          'Check distribution coverage before buying the reach',
          'Regional-language creative is not optional — translate properly',
          'Bus and shelter media often beats hoardings on cost per contact',
          'Local press still carries real weight in these markets',
        ],
      },
      {
        type: 'paragraph',
        text: 'Used well, a Tier-2 layer added to a metro plan is usually the cheapest incremental reach available to an Indian advertiser.',
      },
    ],
  },
]

/**
 * Cover photo for a story: its own `image` if set, otherwise the photo of the
 * service it belongs to, otherwise null (the card then draws a gradient).
 */
export function getPostImage(post) {
  if (post.image) return post.image
  const service = services.find((s) => s.title === post.service)
  return service?.image ?? null
}

/** All posts, newest first. */
export function getAllPosts() {
  return [...posts].sort((a, b) => new Date(b.date) - new Date(a.date))
}

export function getPostBySlug(slug) {
  return posts.find((post) => post.slug === slug)
}

export function getPostSlugs() {
  return posts.map((post) => post.slug)
}

/** Distinct categories, for the filter row on /blog. */
export function getPostCategories() {
  return ['All', ...new Set(posts.map((post) => post.category))]
}
