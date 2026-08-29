/**
 * -----------------------------------------------------------------------------
 * CLIENTS — logos shown on the home page marquee and the /clients page.
 *
 * TODO(client): these are placeholder names grouped by sector. Replace `name`
 * with your real clients and drop each logo into /public/images/clients/,
 * then set `logo: '/images/clients/<file>.png'`. Any entry without a `logo`
 * falls back to a clean wordmark tile, so the page never looks broken.
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
  { name: 'Meridian Retail', sector: 'Retail & Fashion', logo: null },
  { name: 'Kapoor & Sons Jewellers', sector: 'Retail & Fashion', logo: null },
  { name: 'Urbanwear', sector: 'Retail & Fashion', logo: null },
  { name: 'Nirvana Lifestyle', sector: 'Retail & Fashion', logo: null },

  { name: 'Skyline Developers', sector: 'Real Estate', logo: null },
  { name: 'Greenfield Estates', sector: 'Real Estate', logo: null },
  { name: 'Aravali Infra', sector: 'Real Estate', logo: null },

  { name: 'Medicare Hospitals', sector: 'Healthcare', logo: null },
  { name: 'Lifeline Diagnostics', sector: 'Healthcare', logo: null },
  { name: 'Vedanta Wellness', sector: 'Healthcare', logo: null },

  { name: 'Shakti Motors', sector: 'Automotive', logo: null },
  { name: 'Velocity Auto', sector: 'Automotive', logo: null },

  { name: 'Prime Capital Bank', sector: 'BFSI', logo: null },
  { name: 'Suraksha Insurance', sector: 'BFSI', logo: null },
  { name: 'Arth Finserv', sector: 'BFSI', logo: null },

  { name: 'Annapurna Foods', sector: 'FMCG & Food', logo: null },
  { name: 'Tandoor House', sector: 'FMCG & Food', logo: null },
  { name: 'Fresh Valley Dairy', sector: 'FMCG & Food', logo: null },

  { name: 'Scholars Academy', sector: 'Education', logo: null },
  { name: 'Nova Institute', sector: 'Education', logo: null },
]

/** Filter helper used by the /clients page. */
export function clientsBySector(sector) {
  if (!sector || sector === 'All') return clients
  return clients.filter((client) => client.sector === sector)
}
