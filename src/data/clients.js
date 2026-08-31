/**
 * -----------------------------------------------------------------------------
 * CLIENTS — logos shown on the home page marquee and the /clients page.
 *
 * ⚠️  TEMPORARY PLACEHOLDERS — NOT REAL CLIENTS. REPLACE BEFORE LAUNCH.  ⚠️
 *
 * Every company below is invented, and NONE has a logo file — so all 20 tiles
 * currently render the brand's initials in a blue box rather than an actual
 * logo. The brief asks for client logos; that needs real files.
 *
 * The names are kept as plausible company names on purpose: the case studies
 * in src/data/posts.js quote several of them by name ("Skyline Developers",
 * "Meridian Retail", "Arth Finserv", "Prime Capital Bank"), so renaming these
 * to "Client A/B/C" would leave the blog telling a story about companies that
 * no longer appear anywhere else. Replace both sets together with the real
 * client list.
 *
 * To make one real: set `name` to the actual client, drop the logo into
 * /public/images/clients/ (transparent PNG or SVG, around 200x80) and set
 * `logo: '/images/clients/<file>.png'`, then delete `placeholder: true`.
 * `ClientLogo` renders it greyscale and brings it to full colour on hover.
 * -----------------------------------------------------------------------------
 */

export const clientSectors = [
  'All',
  'Retail & Fashion',
  'Real Estate',
  'Healthcare',
  'Automotive',
  'BFSI',
  'FMCG & Food',
  'Education',
]

export const clients = [
  { name: 'Meridian Retail', sector: 'Retail & Fashion', logo: null, placeholder: true },
  { name: 'Kapoor & Sons Jewellers', sector: 'Retail & Fashion', logo: null, placeholder: true },
  { name: 'Urbanwear', sector: 'Retail & Fashion', logo: null, placeholder: true },
  { name: 'Nirvana Lifestyle', sector: 'Retail & Fashion', logo: null, placeholder: true },

  { name: 'Skyline Developers', sector: 'Real Estate', logo: null, placeholder: true },
  { name: 'Greenfield Estates', sector: 'Real Estate', logo: null, placeholder: true },
  { name: 'Aravali Infra', sector: 'Real Estate', logo: null, placeholder: true },

  { name: 'Medicare Hospitals', sector: 'Healthcare', logo: null, placeholder: true },
  { name: 'Lifeline Diagnostics', sector: 'Healthcare', logo: null, placeholder: true },
  { name: 'Vedanta Wellness', sector: 'Healthcare', logo: null, placeholder: true },

  { name: 'Shakti Motors', sector: 'Automotive', logo: null, placeholder: true },
  { name: 'Velocity Auto', sector: 'Automotive', logo: null, placeholder: true },

  { name: 'Prime Capital Bank', sector: 'BFSI', logo: null, placeholder: true },
  { name: 'Suraksha Insurance', sector: 'BFSI', logo: null, placeholder: true },
  { name: 'Arth Finserv', sector: 'BFSI', logo: null, placeholder: true },

  { name: 'Annapurna Foods', sector: 'FMCG & Food', logo: null, placeholder: true },
  { name: 'Tandoor House', sector: 'FMCG & Food', logo: null, placeholder: true },
  { name: 'Fresh Valley Dairy', sector: 'FMCG & Food', logo: null, placeholder: true },

  { name: 'Scholars Academy', sector: 'Education', logo: null, placeholder: true },
  { name: 'Nova Institute', sector: 'Education', logo: null, placeholder: true },
]

/** Filter helper used by the /clients page. */
export function clientsBySector(sector) {
  if (!sector || sector === 'All') return clients
  return clients.filter((client) => client.sector === sector)
}
