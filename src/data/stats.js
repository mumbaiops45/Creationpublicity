/**
 * -----------------------------------------------------------------------------
 * STATISTICS — the numbers shown on the home page and the /statistics page.
 *
 * `value` is the number the counter animates up to.
 * `prefix` / `suffix` wrap it (e.g. prefix '₹', suffix ' Cr+').
 * `decimals` keeps decimal places while counting (e.g. 1.2).
 * -----------------------------------------------------------------------------
 */

/** The four headline numbers — shown on the home page. */
export const headlineStats = [
  { value: 16, suffix: '+', label: 'Years in business', detail: 'Independent since 2009.' },
  { value: 4800, suffix: '+', label: 'Campaigns delivered', detail: 'Across outdoor, print, transit and digital.' },
  { value: 620, suffix: '+', label: 'Brands served', detail: 'From local retail to listed corporates.' },
  { value: 140, suffix: '+', label: 'Cities covered', detail: 'Metros, Tier-2 and Tier-3 markets.' },
]

/** The full profile grid — shown on /statistics. */
export const profileStats = [
  {
    group: 'Scale',
    items: [
      { value: 16, suffix: '+', label: 'Years in business', detail: 'Trading continuously since 2009.' },
      { value: 4800, suffix: '+', label: 'Campaigns delivered', detail: 'Planned, booked, mounted and reported.' },
      { value: 620, suffix: '+', label: 'Brands served', detail: 'Retail, FMCG, real estate, auto, healthcare, BFSI.' },
      { value: 140, suffix: '+', label: 'Cities covered', detail: 'Nationwide execution from a single point of contact.' },
    ],
  },
  {
    group: 'Media Footprint',
    items: [
      { value: 2400, suffix: '+', label: 'Outdoor sites', detail: 'Hoardings, unipoles, gantries and digital screens.' },
      { value: 180, suffix: '+', label: 'Malls & multiplexes', detail: 'Mapped inventory with footfall data.' },
      { value: 3600, suffix: '+', label: 'Retail outlets branded', detail: 'Multi-outlet signage rollouts.' },
      { value: 350, suffix: '+', label: 'Publications', detail: 'National, regional and trade press.' },
    ],
  },
  {
    group: 'Delivery',
    items: [
      { value: 40, prefix: '₹', suffix: ' Cr+', label: 'Media & ad spend managed', detail: 'Across offline and digital budgets.' },
      { value: 90000, suffix: '+', label: 'Corporate gifts dispatched', detail: 'In the last financial year alone.' },
      { value: 750, suffix: '+', label: 'Events & activations', detail: 'Exhibitions, launches and road shows.' },
      { value: 94, suffix: '%', label: 'Client retention', detail: 'Clients who book us again within 12 months.' },
    ],
  },
]

/** Short credibility strip used under the hero. */
export const trustPoints = [
  'Accredited agency — direct publication rates',
  'Single point of contact, pan-India execution',
  'Dated mounting photographs on every campaign',
  'In-house design, print and fabrication',
]
