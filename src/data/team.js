/**
 * -----------------------------------------------------------------------------
 * ABOUT US — company story, timeline, values and team.
 *
 * TODO(client): replace the placeholder team members and story details with
 * your own. Drop headshots into /public/images/team/ and set `photo`.
 * -----------------------------------------------------------------------------
 */

export const story = [
  'Creation Publicity began in 2009 with one hoarding, one client and a rented scooter to check whether the flex had been mounted straight. The scooter is long gone. The habit of physically checking every site is not.',
  'Sixteen years on we are a full-service advertising agency working across outdoor, transit, retail, print, cinema, press and digital — but we still run on the same principle we started with: the client should never have to chase us for proof that the work happened.',
  'Today a single team plans, negotiates, designs, prints, fabricates, mounts and reports. That vertical integration is why we can turn a three-city launch around in eleven days, and why a national signage rollout comes back photographed outlet by outlet.',
]

export const values = [
  {
    title: 'Proof, not promises',
    detail:
      'Every campaign closes with dated photographic evidence from every site. If it is not documented, we do not invoice it.',
  },
  {
    title: 'The audit comes first',
    detail:
      'We check traffic direction, approach time, obstruction and lighting before recommending a site — even when it costs us the easier sale.',
  },
  {
    title: 'One point of contact',
    detail:
      'A single account lead owns your campaign from brief to report, across every medium. No handoffs, no repeating yourself.',
  },
  {
    title: 'Priced to be re-booked',
    detail:
      'We would rather earn a fair margin four times a year than a large one once. Ninety-four per cent of our clients come back.',
  },
]

export const timeline = [
  { year: '2009', title: 'Founded in Mumbai', detail: 'Started as an outdoor media buying desk with a single hoarding contract.' },
  { year: '2012', title: 'In-house production', detail: 'Added printing and fabrication so quality and deadlines stopped depending on vendors.' },
  { year: '2015', title: 'Pan-India network', detail: 'Built execution partnerships covering more than 100 cities.' },
  { year: '2018', title: 'Press accreditation', detail: 'Became an accredited agency, unlocking direct publication rates.' },
  { year: '2021', title: 'Digital division', detail: 'Launched performance marketing and SEO, reporting to the same standard as offline.' },
  { year: '2026', title: '4,800+ campaigns', detail: 'Serving 620+ brands across 140+ cities, still independently owned.' },
]

/*
 * ⚠️  TEMPORARY PLACEHOLDER TEAM — MUST BE REPLACED BEFORE LAUNCH  ⚠️
 *
 * These are NOT real people. The names are deliberately written as labels
 * ("Founder Name") rather than invented human names, so this can never be
 * mistaken for the real team if it reaches a live site. The bios describe the
 * ROLE, not any individual's history.
 *
 * To make it real: replace `name` and `bio` with the actual person, drop a
 * square headshot (~400x400) into /public/images/team/ and set `photo`, add
 * their `linkedin` if they want it, and delete the `placeholder: true` flag.
 * Add or remove entries freely — the grid adapts to any number.
 */
export const team = [
  {
    name: 'Founder Name',
    role: 'Founder & Managing Director',
    bio: 'Owns client relationships and the standard the agency is held to — including the rule that nothing is invoiced without photographic proof.',
    photo: null,
    linkedin: null,
    placeholder: true,
  },
  {
    name: 'Media Director Name',
    role: 'Director — Media Planning',
    bio: 'Plans and negotiates across outdoor, transit, press and cinema, and runs the site audit that decides which locations we will recommend.',
    photo: null,
    linkedin: null,
    placeholder: true,
  },
  {
    name: 'Creative Head Name',
    role: 'Head of Creative',
    bio: 'Leads concept, copy and artwork in-house, from a single hoarding through to a full multi-city campaign identity.',
    photo: null,
    linkedin: null,
    placeholder: true,
  },
  {
    name: 'Operations Head Name',
    role: 'Head of Operations',
    bio: 'Runs printing, fabrication, mounting and the closing report, so campaigns go live on schedule and come back documented.',
    photo: null,
    linkedin: null,
    placeholder: true,
  },
]

/** The "how we work" steps shown on the About and Services pages. */
export const process = [
  { step: '01', title: 'Brief & Objective', detail: 'We start with the number you need to move, not the medium you had in mind.' },
  { step: '02', title: 'Plan & Audit', detail: 'Media plan built from audited sites, verified circulation and real footfall data.' },
  { step: '03', title: 'Design & Produce', detail: 'Creative adaptation, printing and fabrication handled in-house to spec.' },
  { step: '04', title: 'Execute & Monitor', detail: 'Mounting, installation and live monitoring with dated photographs.' },
  { step: '05', title: 'Report & Refine', detail: 'A closing report you can show your board, and a plan for the next cycle.' },
]
