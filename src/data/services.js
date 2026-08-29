/**
 * -----------------------------------------------------------------------------
 * SERVICES — the 12 service pages.
 * Each entry generates: a card on the home page, a card on /services, and a
 * full page at /services/<slug> with its own enquiry form.
 *
 * To edit a service, change its text below. To add one, copy a whole block.
 * `formFields` controls the enquiry form on that service's page — the field
 * types available are: text, tel, email, number, date, textarea, select,
 * checkboxes.
 *
 * `image` is the photo shown on the service cards. Put a photo in
 * /public/images/services/ and set it, e.g.
 *   image: '/images/services/hoardings-and-neon-signs.webp',
 * Images are served exactly as committed (static export has no image
 * optimiser), so resize to about 800px wide and save as .webp first —
 * see design-assets/services-original/ for the untouched masters.
 * Leave it as null and the card shows a branded gradient plate with the
 * service icon instead — so the grid never looks broken while you gather
 * photography.
 * -----------------------------------------------------------------------------
 */

/** Fields every enquiry form asks for, before the service-specific ones. */
export const baseFormFields = [
  { name: 'name', label: 'Your Name', type: 'text', required: true, placeholder: 'Full name' },
  { name: 'company', label: 'Company / Brand', type: 'text', required: false, placeholder: 'Company name' },
  { name: 'phone', label: 'Phone Number', type: 'tel', required: true, placeholder: '+91 xxxxx xxxxx' },
  { name: 'email', label: 'Email Address', type: 'email', required: true, placeholder: 'you@company.com' },
]

export const services = [
  {
    slug: 'malls-and-multiplexes',
    title: 'Malls & Multiplexes',
    shortTitle: 'Malls & Multiplexes',
    // icon: 'mall',
    image: '/images/services/malls-and-multiplexes.webp',
    tagline: 'Reach shoppers in the mood to spend.',
    excerpt:
      'Atriums, escalator panels, food courts and on-screen cinema advertising inside India’s highest-footfall malls and multiplex chains.',
    description: [
      'Malls are the one place where your audience arrives with time, money and intent all at once. We place brands inside that moment — across atrium activations, escalator and lift wraps, food-court branding, washroom panels, parking gantries and full-dominance mall takeovers.',
      'On the multiplex side we handle on-screen cinema slides and audio-visual spots, lobby standees, ticket-counter branding and seat-back media across the major national chains and strong regional single screens.',
    ],
    highlights: [
      'Premium mall inventory across metros and Tier-2 cities',
      'Atrium activations with footfall-verified reporting',
      'Cinema on-screen AV spots and slide advertising',
      'Full mall-dominance packages for launches',
    ],
    formats: [
      { name: 'Atrium & Concourse', detail: 'Kiosks, canopies and podium activations in the highest-dwell zones.' },
      { name: 'Escalator & Lift Branding', detail: 'Glass wraps and side panels with guaranteed eye-level contact.' },
      { name: 'Food Court Media', detail: 'Table tops, backlit panels and digital screens at peak dwell time.' },
      { name: 'Cinema On-Screen', detail: 'Pre-show AV spots and static slides across multiplex chains.' },
    ],
    stat: { value: '180+', label: 'Malls & multiplexes mapped' },
    formFields: [
      { name: 'cities', label: 'Target Cities', type: 'text', required: true, placeholder: 'e.g. Mumbai, Pune, Nagpur' },
      {
        name: 'mallFormats',
        label: 'Formats You’re Interested In',
        type: 'checkboxes',
        required: false,
        options: ['Atrium / Activation', 'Escalator & Lift Branding', 'Food Court Media', 'Kiosk / Cart', 'Cinema On-Screen', 'Full Mall Takeover'],
      },
      {
        name: 'duration',
        label: 'Campaign Duration',
        type: 'select',
        required: true,
        options: ['1 week', '15 days', '1 month', '3 months', '6 months or more', 'Not decided yet'],
      },
      { name: 'startDate', label: 'Preferred Start Date', type: 'date', required: false },
      {
        name: 'budget',
        label: 'Indicative Budget',
        type: 'select',
        required: false,
        options: ['Under ₹1 Lakh', '₹1 – 5 Lakh', '₹5 – 15 Lakh', '₹15 – 50 Lakh', '₹50 Lakh +', 'Prefer to discuss'],
      },
      {
        name: 'message',
        label: 'Tell us about the campaign',
        type: 'textarea',
        required: false,
        placeholder: 'Brand, product, objective, any specific malls in mind…',
      },
    ],
  },

  {
    slug: 'hoardings-and-neon-signs',
    title: 'Hoardings & Neon Signs',
    shortTitle: 'Hoardings & Neon',
    // icon: 'billboard',
    image: '/images/services/hoardings-and-neon-signs.webp',
    tagline: 'The format people cannot scroll past.',
    excerpt:
      'Prime-location hoardings, unipoles, gantries, LED screens and custom neon signage — sited, fabricated, mounted and maintained.',
    description: [
      'Outdoor is still the loudest medium a brand can buy, provided the site is right. We hold and broker inventory on the arterial roads, highway stretches, junctions and skylines that actually carry your audience, and we back every recommendation with traffic counts and line-of-sight checks rather than a rate card.',
      'We also design, fabricate and install illuminated signage in-house — neon and faux-neon, LED channel letters, backlit ACP boards and glow signs — with an annual maintenance contract so your sign never sits dark.',
    ],
    highlights: [
      'Traffic-count and visibility audit before every site recommendation',
      'Unipoles, gantries, billboards and digital LED screens',
      'In-house neon, LED and glow-sign fabrication',
      'Mounting, monitoring photos and maintenance included',
    ],
    formats: [
      { name: 'Hoardings & Billboards', detail: 'Classic large-format sites on high-traffic arterial roads.' },
      { name: 'Unipoles & Gantries', detail: 'Elevated highway and junction formats with long approach visibility.' },
      { name: 'Digital LED Screens', detail: 'Rotating spots on premium digital outdoor screens.' },
      { name: 'Neon & Glow Signs', detail: 'Custom fabricated illuminated signage for storefronts and offices.' },
    ],
    stat: { value: '2,400+', label: 'Outdoor sites in our network' },
    formFields: [
      { name: 'cities', label: 'Target Cities / Locations', type: 'text', required: true, placeholder: 'e.g. Mumbai — Western Express Highway' },
      {
        name: 'hoardingType',
        label: 'What do you need?',
        type: 'checkboxes',
        required: false,
        options: ['Hoarding / Billboard', 'Unipole', 'Gantry', 'Digital LED Screen', 'Neon Sign', 'Glow Sign / Signage Board'],
      },
      { name: 'sizeSpec', label: 'Size / Specification (if known)', type: 'text', required: false, placeholder: 'e.g. 40ft x 20ft' },
      {
        name: 'duration',
        label: 'Display Duration',
        type: 'select',
        required: true,
        options: ['15 days', '1 month', '3 months', '6 months', '12 months', 'Not decided yet'],
      },
      {
        name: 'needsPrinting',
        label: 'Do you need printing & mounting?',
        type: 'select',
        required: false,
        options: ['Yes, handle everything', 'No, artwork and flex ready', 'Need design help too'],
      },
      {
        name: 'budget',
        label: 'Indicative Budget',
        type: 'select',
        required: false,
        options: ['Under ₹1 Lakh', '₹1 – 5 Lakh', '₹5 – 15 Lakh', '₹15 – 50 Lakh', '₹50 Lakh +', 'Prefer to discuss'],
      },
      { name: 'message', label: 'Additional Details', type: 'textarea', required: false },
    ],
  },

  {
    slug: 'corporate-gifting',
    title: 'Corporate Gifting',
    shortTitle: 'Corporate Gifting',
    // icon: 'gift',
    image: '/images/services/corporate-gifting.webp',
    tagline: 'Branded things people actually keep.',
    excerpt:
      'Curated, custom-branded gift programmes for employees, clients and channel partners — sourced, personalised and delivered to every address.',
    description: [
      'A good corporate gift does two jobs: it says thank you, and it keeps your brand on a desk for the next three years. We curate ranges across every price band — from premium leather and tech to eco-conscious and artisanal Indian craft — and brand them properly, with embossing, laser etching or full-colour UV printing rather than a sticker.',
      'We handle the whole programme: sampling, custom packaging design, kitting, and multi-address dispatch with tracking, so your HR or sales team never has to run a logistics operation.',
    ],
    highlights: [
      'Curated ranges from ₹250 to ₹25,000 per piece',
      'Custom packaging, kitting and branded inserts',
      'Laser etching, embossing and full-colour UV printing',
      'Pan-India multi-address dispatch with tracking',
    ],
    formats: [
      { name: 'Employee & Onboarding Kits', detail: 'Welcome kits, milestone and festival gifting at scale.' },
      { name: 'Client & Partner Gifting', detail: 'Premium curated hampers with personalised notes.' },
      { name: 'Event & Conference Merch', detail: 'Delegate kits, giveaways and speaker gifts.' },
      { name: 'Festive Hampers', detail: 'Diwali, New Year and anniversary programmes.' },
    ],
    stat: { value: '90,000+', label: 'Gifts dispatched last year' },
    formFields: [
      {
        name: 'occasion',
        label: 'Occasion',
        type: 'select',
        required: true,
        options: ['Diwali / Festive', 'Employee Onboarding', 'Employee Milestones', 'Client Gifting', 'Conference / Event', 'Channel Partner Programme', 'Other'],
      },
      { name: 'quantity', label: 'Approximate Quantity', type: 'number', required: true, placeholder: 'e.g. 500' },
      {
        name: 'budgetPerGift',
        label: 'Budget per Gift',
        type: 'select',
        required: true,
        options: ['Under ₹500', '₹500 – 1,000', '₹1,000 – 2,500', '₹2,500 – 5,000', '₹5,000 +', 'Prefer to discuss'],
      },
      {
        name: 'giftCategories',
        label: 'Categories of Interest',
        type: 'checkboxes',
        required: false,
        options: ['Tech & Gadgets', 'Drinkware', 'Bags & Luggage', 'Stationery & Leather', 'Apparel', 'Eco-Friendly', 'Gourmet & Hampers', 'Open to suggestions'],
      },
      { name: 'deliveryBy', label: 'Needed By', type: 'date', required: false },
      {
        name: 'deliveryLocations',
        label: 'Delivery',
        type: 'select',
        required: false,
        options: ['Single location', 'Multiple offices', 'Individual home addresses', 'Mix of the above'],
      },
      { name: 'message', label: 'Anything specific in mind?', type: 'textarea', required: false },
    ],
  },

  {
    slug: 'brochures-banners-catalogues',
    title: 'Brochures, Banners & Catalogues',
    shortTitle: 'Print & Collateral',
    // icon: 'print',
    image: '/images/services/brochures-banners-catalogues.webp',
    tagline: 'Design and print, handled end to end.',
    excerpt:
      'Concept, copy, design and production for brochures, catalogues, banners, standees and the full sales-collateral kit.',
    description: [
      'Print still closes deals — in a showroom, at an exhibition stall, in a distributor’s hand. Our studio writes and designs the piece, then our production team prints it on the right stock with the right finish, and we quality-check every batch before it ships.',
      'We work across offset and digital printing, large-format banners and flex, roll-up and backdrop standees, dealer catalogues, annual reports, packaging inserts and complete product-literature systems.',
    ],
    highlights: [
      'In-house copywriting, design and artwork',
      'Offset, digital and large-format production',
      'Premium finishes — spot UV, foiling, emboss, lamination',
      'Batch quality checks and pan-India delivery',
    ],
    formats: [
      { name: 'Brochures & Leaflets', detail: 'Corporate profiles, product folders, mailers and flyers.' },
      { name: 'Catalogues', detail: 'Multi-page dealer and product catalogues with price-list variants.' },
      { name: 'Banners & Flex', detail: 'Large-format banners, backdrops and building wraps.' },
      { name: 'Standees & Displays', detail: 'Roll-ups, X-banners, danglers and point-of-sale units.' },
    ],
    stat: { value: '1.2 Cr+', label: 'Print impressions produced' },
    formFields: [
      {
        name: 'printItems',
        label: 'What do you need printed?',
        type: 'checkboxes',
        required: true,
        options: ['Brochure / Leaflet', 'Catalogue', 'Banner / Flex', 'Roll-up Standee', 'Poster', 'Visiting Cards & Stationery', 'Annual Report', 'Packaging / Inserts'],
      },
      { name: 'quantity', label: 'Quantity', type: 'number', required: true, placeholder: 'e.g. 2000' },
      { name: 'sizePages', label: 'Size & Number of Pages', type: 'text', required: false, placeholder: 'e.g. A4, 12 pages' },
      {
        name: 'designNeeded',
        label: 'Do you need design?',
        type: 'select',
        required: true,
        options: ['Yes — design and print', 'No — print-ready artwork available', 'Need artwork adapted / resized'],
      },
      { name: 'deliveryBy', label: 'Delivery Deadline', type: 'date', required: false },
      {
        name: 'message',
        label: 'Specifications & Notes',
        type: 'textarea',
        required: false,
        placeholder: 'Paper stock, finish, binding, delivery location…',
      },
    ],
  },

  {
    slug: 'transit-media',
    title: 'Transit Media',
    shortTitle: 'Transit Media',
    // icon: 'transit',
    image: '/images/services/transit-media.webp',
    tagline: 'Advertising that travels with your audience.',
    excerpt:
      'Metro stations and trains, railway platforms, airports, cabs and auto branding — media that moves through the city all day.',
    description: [
      'Transit media buys you time. A commuter spends twenty minutes on a platform and forty in a cab, and for most of it there is nothing else to look at. We plan campaigns across metro networks, railway stations, airport terminals, cab and auto fleets, and inter-city coach routes.',
      'Because transit inventory is release-cycle driven, we manage the booking calendar, permissions and installation windows for you, and share dated mounting photographs from every site.',
    ],
    highlights: [
      'Metro station, pillar and train-interior branding',
      'Railway platform hoardings and foot-over-bridge panels',
      'Airport terminals, baggage belts and trolley branding',
      'Cab, auto and fleet vehicle wraps',
    ],
    formats: [
      { name: 'Metro Media', detail: 'Station domination, pillar wraps, train interiors and exteriors.' },
      { name: 'Railway Media', detail: 'Platform boards, foot-over-bridge panels and concourse branding.' },
      { name: 'Airport Media', detail: 'Terminal panels, baggage belts, trolleys and lounges.' },
      { name: 'Cab & Auto Branding', detail: 'City-wide moving media on cab hoods, doors and auto backs.' },
    ],
    stat: { value: '48', label: 'Transit networks accessed' },
    formFields: [
      { name: 'cities', label: 'Target Cities', type: 'text', required: true, placeholder: 'e.g. Delhi NCR, Bengaluru' },
      {
        name: 'transitFormats',
        label: 'Transit Formats',
        type: 'checkboxes',
        required: false,
        options: ['Metro Stations', 'Metro Train Branding', 'Railway Platforms', 'Airport Terminals', 'Cab Branding', 'Auto Rickshaw Branding', 'Inter-city Coaches'],
      },
      {
        name: 'duration',
        label: 'Campaign Duration',
        type: 'select',
        required: true,
        options: ['15 days', '1 month', '3 months', '6 months', '12 months', 'Not decided yet'],
      },
      { name: 'startDate', label: 'Preferred Start Date', type: 'date', required: false },
      {
        name: 'budget',
        label: 'Indicative Budget',
        type: 'select',
        required: false,
        options: ['Under ₹5 Lakh', '₹5 – 15 Lakh', '₹15 – 50 Lakh', '₹50 Lakh +', 'Prefer to discuss'],
      },
      { name: 'message', label: 'Campaign Brief', type: 'textarea', required: false },
    ],
  },

  {
    slug: 'retail-and-signages',
    title: 'Retail & Signages',
    shortTitle: 'Retail & Signages',
    // icon: 'store',
    image: '/images/services/retail-and-signages.webp',
    tagline: 'Every storefront, on brand, everywhere.',
    excerpt:
      'Storefront signage, in-store branding and multi-outlet rollouts executed to one specification across the whole network.',
    description: [
      'Retail branding fails at scale, not at design. The first store always looks right; the four hundredth is the problem. We build a signage specification with you, then roll it out across the network with site surveys, fabrication, installation and photographic sign-off from every single outlet.',
      'That covers ACP and glow-sign fascias, channel letters, window graphics and vinyl, in-store point-of-sale and shelf branding, wayfinding, and complete shop-in-shop build-outs.',
    ],
    highlights: [
      'Multi-outlet rollouts to a single brand specification',
      'Site surveys before fabrication — no re-work',
      'ACP fascias, channel letters, glow signs and vinyl',
      'Photographic completion report from every outlet',
    ],
    formats: [
      { name: 'Storefront Signage', detail: 'Fascia boards, channel letters and illuminated glow signs.' },
      { name: 'Window & Vinyl Graphics', detail: 'Frosted, printed and one-way vision window branding.' },
      { name: 'In-Store Branding', detail: 'Point-of-sale units, shelf strips, danglers and standees.' },
      { name: 'Wayfinding & Safety', detail: 'Directional, statutory and safety signage systems.' },
    ],
    stat: { value: '3,600+', label: 'Retail outlets branded' },
    formFields: [
      { name: 'outletCount', label: 'Number of Outlets', type: 'number', required: true, placeholder: 'e.g. 45' },
      { name: 'cities', label: 'Cities / Regions', type: 'text', required: true, placeholder: 'e.g. Maharashtra & Gujarat' },
      {
        name: 'signageType',
        label: 'Type of Work',
        type: 'checkboxes',
        required: false,
        options: ['Storefront Fascia / Glow Sign', 'Channel Letters', 'Window Graphics / Vinyl', 'In-Store POS & Shelf Branding', 'Wayfinding Signage', 'Complete Shop Fit-Out'],
      },
      {
        name: 'rolloutStage',
        label: 'Where are you in the process?',
        type: 'select',
        required: false,
        options: ['Exploring options', 'Have a brand spec, need execution', 'Need design + execution', 'Replacing existing signage'],
      },
      { name: 'deliveryBy', label: 'Target Completion Date', type: 'date', required: false },
      { name: 'message', label: 'Project Details', type: 'textarea', required: false },
    ],
  },

  {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    shortTitle: 'Digital Marketing',
    // icon: 'digital',
    image: '/images/services/digital-marketing.webp',
    tagline: 'Performance you can read off a dashboard.',
    excerpt:
      'Meta and Google performance campaigns, SEO, social media management and content — measured against leads and revenue, not likes.',
    description: [
      'We run digital the way we run outdoor: with a number attached. Campaigns are built around a cost-per-lead or return-on-ad-spend target, tracked properly with conversion events and call tracking, and reported in a dashboard you can open any day of the month.',
      'Services span paid performance on Meta, Google and YouTube, technical and local SEO, social media management and content production, influencer partnerships, email and WhatsApp marketing, and landing-page build and optimisation.',
    ],
    highlights: [
      'Meta, Google, YouTube and programmatic performance media',
      'Technical, local and content-led SEO',
      'Social media management and content production',
      'Live dashboards with cost-per-lead reporting',
    ],
    formats: [
      { name: 'Performance Marketing', detail: 'Lead-gen and e-commerce campaigns with CPL / ROAS targets.' },
      { name: 'Search Engine Optimisation', detail: 'Technical fixes, content strategy and local map-pack ranking.' },
      { name: 'Social Media Management', detail: 'Content calendars, creative production and community handling.' },
      { name: 'Creative & Video', detail: 'Reels, product films, motion graphics and ad creative at volume.' },
    ],
    stat: { value: '₹40 Cr+', label: 'Ad spend managed' },
    formFields: [
      { name: 'website', label: 'Website / Landing Page', type: 'text', required: false, placeholder: 'https://' },
      {
        name: 'digitalServices',
        label: 'Services You Need',
        type: 'checkboxes',
        required: true,
        options: ['Meta Ads (Facebook / Instagram)', 'Google Ads & YouTube', 'SEO', 'Social Media Management', 'Content & Video Production', 'Influencer Marketing', 'WhatsApp / Email Marketing', 'Website / Landing Page'],
      },
      {
        name: 'objective',
        label: 'Primary Objective',
        type: 'select',
        required: true,
        options: ['Lead generation', 'E-commerce sales', 'Brand awareness', 'App installs', 'Footfall to store', 'Not sure yet'],
      },
      {
        name: 'monthlyBudget',
        label: 'Monthly Budget (incl. ad spend)',
        type: 'select',
        required: false,
        options: ['Under ₹50,000', '₹50,000 – 1 Lakh', '₹1 – 3 Lakh', '₹3 – 10 Lakh', '₹10 Lakh +', 'Prefer to discuss'],
      },
      {
        name: 'currentlyRunning',
        label: 'Are you running campaigns today?',
        type: 'select',
        required: false,
        options: ['Yes, in-house', 'Yes, with another agency', 'No, starting fresh', 'Ran earlier, paused'],
      },
      { name: 'message', label: 'Tell us about your business & goals', type: 'textarea', required: false },
    ],
  },

  {
    slug: 'buses-and-bus-shelters',
    title: 'Buses & Bus Stop Shelters',
    shortTitle: 'Buses & Shelters',
    // icon: 'bus',
    image: '/images/services/buses-and-bus-shelters.webp',
    tagline: 'City-wide coverage at street level.',
    excerpt:
      'Full and partial bus wraps, back panels, and backlit bus-queue shelter panels across state transport and private fleets.',
    description: [
      'Buses deliver reach that static outdoor cannot — the same vehicle passes a different neighbourhood every hour, and the back panel sits at windscreen height for every car behind it. We book across state transport undertakings and private operators, with route-level planning so your wraps run where your customers live.',
      'Bus queue shelters are the companion buy: backlit panels at eye level, viewed by a captive waiting audience, at a fraction of hoarding cost per contact.',
    ],
    highlights: [
      'Route-level planning, not blanket fleet buys',
      'Full wraps, half wraps, back and side panels',
      'Backlit and non-lit bus queue shelter panels',
      'Printing, mounting and monitoring photographs included',
    ],
    formats: [
      { name: 'Full Bus Wrap', detail: 'Complete vehicle branding for maximum impact and share of voice.' },
      { name: 'Back & Side Panels', detail: 'Cost-efficient high-frequency formats at driver eye level.' },
      { name: 'Bus Queue Shelters', detail: 'Backlit panels with captive dwell time at every stop.' },
      { name: 'Interior Media', detail: 'Panels, hand-grip and ceiling branding inside the coach.' },
    ],
    stat: { value: '1,100+', label: 'Buses & shelters booked' },
    formFields: [
      { name: 'cities', label: 'Target Cities / Routes', type: 'text', required: true, placeholder: 'e.g. Mumbai — BEST routes, Western suburbs' },
      {
        name: 'busFormats',
        label: 'Formats',
        type: 'checkboxes',
        required: false,
        options: ['Full Bus Wrap', 'Half / Partial Wrap', 'Back Panel', 'Side Panel', 'Bus Interior', 'Bus Queue Shelter'],
      },
      { name: 'unitCount', label: 'Number of Buses / Shelters', type: 'number', required: false, placeholder: 'e.g. 50' },
      {
        name: 'duration',
        label: 'Campaign Duration',
        type: 'select',
        required: true,
        options: ['1 month', '3 months', '6 months', '12 months', 'Not decided yet'],
      },
      {
        name: 'budget',
        label: 'Indicative Budget',
        type: 'select',
        required: false,
        options: ['Under ₹2 Lakh', '₹2 – 10 Lakh', '₹10 – 25 Lakh', '₹25 Lakh +', 'Prefer to discuss'],
      },
      { name: 'message', label: 'Campaign Brief', type: 'textarea', required: false },
    ],
  },

  {
    slug: 'newspapers-and-magazines',
    title: 'Newspapers & Magazines',
    shortTitle: 'Press & Publications',
    // icon: 'news',
    image: '/images/services/newspapers-and-magazines.webp',
    tagline: 'Accredited press buying at card-beating rates.',
    excerpt:
      'Display and classified advertising across national dailies, regional language press, trade journals and glossy magazines.',
    description: [
      'As an accredited agency we book directly with publications — which means you get the negotiated rate, the right edition, and the position you actually paid for. We plan across national English dailies, regional-language press with genuine household reach, business and trade journals, and consumer magazines.',
      'We handle everything from a two-column classified to a jacket wrap or a multi-city front-page solus, plus tender notices, public notices, recruitment advertising and statutory publishing.',
    ],
    highlights: [
      'Accredited agency rates across major publications',
      'National, regional-language and trade press planning',
      'Display, classified, jackets and front-page solus',
      'Tender, public notice and recruitment advertising',
    ],
    formats: [
      { name: 'Display Advertising', detail: 'Quarter, half, full page and front-page solus placements.' },
      { name: 'Classified & Notices', detail: 'Tender, public, recruitment and statutory notices.' },
      { name: 'Jackets & Innovations', detail: 'Wraps, gatefolds, pop-ups and scented inserts.' },
      { name: 'Magazine Advertising', detail: 'Consumer glossies, in-flight and trade publications.' },
    ],
    stat: { value: '350+', label: 'Publications on our rate card' },
    formFields: [
      {
        name: 'adType',
        label: 'Type of Advertisement',
        type: 'select',
        required: true,
        options: ['Display Advertisement', 'Classified Ad', 'Tender / Public Notice', 'Recruitment Ad', 'Magazine Advertisement', 'Jacket / Innovation'],
      },
      {
        name: 'publications',
        label: 'Preferred Publications',
        type: 'text',
        required: false,
        placeholder: 'e.g. Times of India, Lokmat — or ask us to recommend',
      },
      { name: 'editions', label: 'Cities / Editions', type: 'text', required: true, placeholder: 'e.g. Mumbai, Pune, Nashik' },
      { name: 'adSize', label: 'Ad Size (if known)', type: 'text', required: false, placeholder: 'e.g. 20cm x 4 col' },
      { name: 'publishDate', label: 'Release Date', type: 'date', required: false },
      {
        name: 'colour',
        label: 'Colour',
        type: 'select',
        required: false,
        options: ['Full Colour', 'Black & White', 'Either — advise me'],
      },
      { name: 'message', label: 'Additional Details', type: 'textarea', required: false },
    ],
  },

  {
    slug: 'radio-and-cinema',
    title: 'Radio & Cinema Advertising',
    shortTitle: 'Radio & Cinema',
    // icon: 'radio',
    image: '/images/services/radio-and-cinema.webp',
    tagline: 'Own the drive time and the dark room.',
    excerpt:
      'FM radio spots, RJ mentions and sponsorships, plus on-screen cinema advertising in single screens and multiplex chains.',
    description: [
      'Radio is the cheapest frequency a brand can buy in a city, and it reaches people at the exact moment they are driving past your store. We plan spots, RJ mentions, contests and show sponsorships across the major FM networks, and we write and produce the jingle or ad film in-house.',
      'Cinema does the opposite job — a dark room, a big screen and no second screen to compete with. We book pre-show audio-visual spots and slides by circuit, chain or individual property.',
    ],
    highlights: [
      'FM spots, RJ mentions and show sponsorships',
      'In-house scripting, voice-over and jingle production',
      'Cinema audio-visual spots and on-screen slides',
      'Property-level, chain-level or circuit-level booking',
    ],
    formats: [
      { name: 'Radio Spots', detail: '10 / 20 / 30-second spots planned by daypart and station.' },
      { name: 'RJ Mentions & Sponsorships', detail: 'Live mentions, contests and show title sponsorships.' },
      { name: 'Cinema AV Spots', detail: 'Pre-show ad films across multiplex and single-screen circuits.' },
      { name: 'On-Screen Slides', detail: 'Low-cost static slides ideal for local businesses.' },
    ],
    stat: { value: '60+', label: 'Cities with radio coverage' },
    formFields: [
      { name: 'cities', label: 'Target Cities', type: 'text', required: true, placeholder: 'e.g. Mumbai, Nagpur' },
      {
        name: 'mediumType',
        label: 'Medium',
        type: 'checkboxes',
        required: true,
        options: ['FM Radio Spots', 'RJ Mentions / Sponsorship', 'Cinema AV Spot', 'Cinema On-Screen Slide'],
      },
      {
        name: 'spotDuration',
        label: 'Spot Length',
        type: 'select',
        required: false,
        options: ['10 seconds', '20 seconds', '30 seconds', '45 seconds or more', 'Not decided yet'],
      },
      {
        name: 'creativeReady',
        label: 'Is your creative ready?',
        type: 'select',
        required: false,
        options: ['Yes, audio / film ready', 'No — need production', 'Have a script, need production'],
      },
      {
        name: 'duration',
        label: 'Campaign Duration',
        type: 'select',
        required: true,
        options: ['1 week', '2 weeks', '1 month', '3 months', 'Not decided yet'],
      },
      { name: 'message', label: 'Campaign Brief', type: 'textarea', required: false },
    ],
  },

  {
    slug: 'events-and-exhibitions',
    title: 'Events & Exhibitions',
    shortTitle: 'Events & Exhibitions',
    // icon: 'event',
    image: '/images/services/events-and-exhibitions.webp',
    tagline: 'Stalls, stages and activations that pull a crowd.',
    excerpt:
      'Exhibition stall design and fabrication, product launches, road shows, mall activations and dealer meets — planned and run end to end.',
    description: [
      'An exhibition stall has about four seconds to stop someone in an aisle. We design for that moment, then build it — custom fabrication, lighting, audio-visual, graphics and furniture — and run the stall through the show with trained promoters and a lead-capture system that hands you a clean list at the end.',
      'Beyond exhibitions we produce product launches, dealer and distributor meets, road shows, mall and society activations, and sampling campaigns, with permissions and vendor management handled in-house.',
    ],
    highlights: [
      'Custom stall design, fabrication and on-site management',
      'Product launches, dealer meets and conferences',
      'Mall, market and society activations with promoters',
      'Permissions, logistics and lead capture handled',
    ],
    formats: [
      { name: 'Exhibition Stalls', detail: 'Design, 3D visualisation, fabrication and show-floor management.' },
      { name: 'Product Launches', detail: 'Venue, stage, AV, artist management and press coordination.' },
      { name: 'Road Shows & Activations', detail: 'Mobile vans, mall atriums, societies and market sampling.' },
      { name: 'Dealer & Channel Meets', detail: 'End-to-end conference and incentive-event production.' },
    ],
    stat: { value: '750+', label: 'Events & activations delivered' },
    formFields: [
      {
        name: 'eventType',
        label: 'Type of Event',
        type: 'select',
        required: true,
        options: ['Exhibition Stall', 'Product Launch', 'Dealer / Channel Meet', 'Road Show', 'Mall / Society Activation', 'Sampling Campaign', 'Conference / Seminar', 'Other'],
      },
      { name: 'eventCity', label: 'City / Venue', type: 'text', required: true, placeholder: 'e.g. Bombay Exhibition Centre, Mumbai' },
      { name: 'eventDate', label: 'Event Date', type: 'date', required: false },
      { name: 'stallSize', label: 'Stall Size / Expected Footfall', type: 'text', required: false, placeholder: 'e.g. 6m x 6m, or 500 guests' },
      {
        name: 'scopeNeeded',
        label: 'What do you need from us?',
        type: 'checkboxes',
        required: false,
        options: ['Design & 3D Visualisation', 'Fabrication & Setup', 'AV, Lighting & Sound', 'Promoters / Hostesses', 'Permissions & Licensing', 'Complete Turnkey Management'],
      },
      {
        name: 'budget',
        label: 'Indicative Budget',
        type: 'select',
        required: false,
        options: ['Under ₹2 Lakh', '₹2 – 10 Lakh', '₹10 – 25 Lakh', '₹25 Lakh +', 'Prefer to discuss'],
      },
      { name: 'message', label: 'Event Brief', type: 'textarea', required: false },
    ],
  },

  {
    slug: 'airport-and-metro-advertising',
    title: 'Airport & Metro Advertising',
    shortTitle: 'Airport & Metro',
    // icon: 'plane',
    image: '/images/services/airport-and-metro-advertising.webp',
    tagline: 'Premium audiences, unmissable formats.',
    excerpt:
      'Terminal domination, baggage-belt and trolley branding, lounge media and full metro-station takeovers for premium brands.',
    description: [
      'Airports and metro networks deliver the most valuable audience in outdoor: high-income, high-dwell and entirely captive. Arrival corridors, security queues, baggage belts and lounges give you minutes of attention rather than seconds, in an environment that lends the brand real prestige.',
      'We hold access across major Indian airports and metro networks, and we plan by passenger profile — domestic versus international, business versus leisure — rather than simply selling whatever panel is vacant.',
    ],
    highlights: [
      'Terminal domination and arrival-corridor packages',
      'Baggage belts, trolleys, security trays and lounges',
      'Full metro-station takeovers and train wraps',
      'Planning by passenger profile and terminal',
    ],
    formats: [
      { name: 'Terminal Media', detail: 'Backlit panels, pillars, glass and digital screens airside and landside.' },
      { name: 'Baggage & Trolley', detail: 'Belt wraps, trolley panels and security-tray branding.' },
      { name: 'Lounge & Aerobridge', detail: 'High-dwell premium formats for business audiences.' },
      { name: 'Metro Station Takeover', detail: 'Entry, concourse, platform and train-wrap domination.' },
    ],
    stat: { value: '25+', label: 'Airports & metro lines' },
    formFields: [
      { name: 'cities', label: 'Airports / Metro Networks', type: 'text', required: true, placeholder: 'e.g. Mumbai T2, Delhi Metro Blue Line' },
      {
        name: 'airportFormats',
        label: 'Formats of Interest',
        type: 'checkboxes',
        required: false,
        options: ['Terminal Backlit Panels', 'Digital Screens', 'Baggage Belt', 'Trolley Branding', 'Security Trays', 'Lounge Branding', 'Aerobridge', 'Metro Station Takeover', 'Metro Train Wrap'],
      },
      {
        name: 'audience',
        label: 'Audience Focus',
        type: 'select',
        required: false,
        options: ['Domestic departures', 'International departures', 'Arrivals', 'Business / lounge', 'Metro commuters', 'No preference'],
      },
      {
        name: 'duration',
        label: 'Campaign Duration',
        type: 'select',
        required: true,
        options: ['1 month', '3 months', '6 months', '12 months', 'Not decided yet'],
      },
      {
        name: 'budget',
        label: 'Indicative Budget',
        type: 'select',
        required: false,
        options: ['₹5 – 15 Lakh', '₹15 – 50 Lakh', '₹50 Lakh – 1 Cr', '₹1 Cr +', 'Prefer to discuss'],
      },
      { name: 'message', label: 'Campaign Brief', type: 'textarea', required: false },
    ],
  },
]

/** Look up one service by its URL slug. */
export function getServiceBySlug(slug) {
  return services.find((service) => service.slug === slug)
}

/** Every slug — used by generateStaticParams and the sitemap. */
export function getServiceSlugs() {
  return services.map((service) => service.slug)
}
