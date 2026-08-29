# Updating the website yourself

Everything you are likely to want to change lives in **one folder**: `src/data/`.
You do not need to touch any design or code files.

Each file is plain text. Edit the words between the quote marks, save, and the
site rebuilds with your changes.

> **The golden rule:** only change text *inside* quote marks `'like this'`.
> Leave the punctuation around it — the commas, brackets and braces — alone.
> If you need an apostrophe inside text, write it as `’` (a curly apostrophe) so
> it does not clash with the surrounding quote marks.

---

## Where to change what

| I want to change… | Open this file |
| --- | --- |
| Phone number, WhatsApp number, email, office address, opening hours, Instagram / LinkedIn links | `src/data/site.js` |
| Anything about the 12 services — descriptions, formats, or the enquiry-form questions | `src/data/services.js` |
| The numbers on the home page and the Statistics page | `src/data/stats.js` |
| The client list on the Clients page | `src/data/clients.js` |
| Testimonial quotes | `src/data/testimonials.js` |
| Case studies and blog posts | `src/data/posts.js` |
| The About page — story, values, timeline, team, process | `src/data/team.js` |

---

## Common tasks

### Change the phone or WhatsApp number

Open `src/data/site.js` and edit these three lines:

```js
phone: '+91 xxxxx xxxxx',        // shown to visitors
phoneHref: '+91xxxxxxxxxx',      // what the call button dials — digits only
whatsapp: '91xxxxxxxxxx',        // country code + number, digits only, no +
```

All three must be updated together. The floating buttons, the header, the footer
and every enquiry form use them.

### Add a testimonial

Open `src/data/testimonials.js` and copy an existing block, including its braces
and the trailing comma:

```js
  {
    quote: 'What the client said about working with you.',
    name: 'Their Name',
    role: 'Their Job Title',
    company: 'Their Company',
    service: 'Hoardings & Neon Signs',
  },
```

Always get written permission before publishing someone’s name and company.

### Add a client logo

1. Save the logo as a PNG with a transparent background into
   `public/images/clients/`. Name it simply, e.g. `meridian-retail.png`.
2. Open `src/data/clients.js` and add or edit the entry:

```js
  { name: 'Meridian Retail', sector: 'Retail & Fashion', logo: '/images/clients/meridian-retail.png' },
```

If you leave `logo: null`, the site shows a tidy name plate instead — so an
entry without a logo still looks deliberate.

### Publish a new case study

Open `src/data/posts.js`, copy a whole existing block, and change the fields.
The `body` is built from simple blocks so you never write HTML:

```js
  { type: 'heading',   text: 'A sub-heading' },
  { type: 'paragraph', text: 'A normal paragraph of text.' },
  { type: 'list',      items: ['First point', 'Second point'] },
  { type: 'quote',     text: 'A client quote.', attribution: 'Name, Company' },
  { type: 'stats',     items: [{ value: '46', label: 'Sites live in 11 days' }] },
```

Three important fields:

- `image` — the cover photo. Leave it as `null` and the story automatically
  borrows the photo of the service named in its `service` field, so it always
  has a relevant cover. To use your own, put the photo in
  `public/images/blog/` (about 800px wide, saved as `.webp`) and set
  `image: '/images/blog/my-story.webp'`.

- `slug` — this becomes the web address, e.g. `/blog/my-new-story`. Use lowercase
  words separated by hyphens, and never reuse a slug.
- `linkedinUrl` — paste the link to your matching LinkedIn post and the story
  shows a “View on LinkedIn” button.

### Add a photo to a service card

The service cards on the home page and `/services` are photo-led. To add a
picture to one:

1. Save a **portrait** photo (taller than it is wide — roughly 3:4) into
   `public/images/services/`, named after the service, e.g.
   `hoardings-and-neon-signs.jpg`. Keep it under about 300 KB.
2. Open `src/data/services.js`, find that service, and set its `image`:

```js
image: '/images/services/hoardings-and-neon-signs.jpg',
```

Leave `image: null` and the card shows a branded blue gradient with the
service icon instead — so the grid always looks deliberate, even before you
have photography for every service.

The cards show the **short** name (`shortTitle`) so long names do not wrap
awkwardly in the narrow arch shape.

### Change a service’s enquiry-form questions

Open `src/data/services.js`, find the service, and edit its `formFields` list.
Each question looks like one of these:

```js
{ name: 'cities', label: 'Target Cities', type: 'text', required: true, placeholder: 'e.g. Mumbai' },
{ name: 'duration', label: 'Campaign Duration', type: 'select', required: true, options: ['1 month', '3 months'] },
{ name: 'formats', label: 'Formats', type: 'checkboxes', required: false, options: ['Option A', 'Option B'] },
```

- `type` can be `text`, `tel`, `email`, `number`, `date`, `textarea`, `select` or `checkboxes`.
- `name` must be unique within that service and must not contain spaces.
- `required: true` means the visitor cannot submit without answering it.

Name, company, phone and email are added to every form automatically — you do
not need to list them.

---

## Where enquiry-form submissions go

The forms are built to work on a static site, with two modes:

**1. Connected to a form service (recommended).**
Sign up for a free form service — [Web3Forms](https://web3forms.com) or
[Formspree](https://formspree.io) both have free tiers that email you every
submission. Then create a file called `.env.local` in this folder containing:

```
NEXT_PUBLIC_FORM_ENDPOINT=https://api.web3forms.com/submit
NEXT_PUBLIC_FORM_ACCESS_KEY=your-access-key-here
```

Rebuild the site and enquiries will arrive in your inbox.

**2. Not connected yet (the default).**
The form still validates everything, then hands the visitor a **Send on
WhatsApp** and a **Send by Email** button with all their answers pre-filled. No
enquiry is ever lost, but you have to receive it through WhatsApp or email
rather than an inbox rule.

---

## Adding photos and the home-page video

- **Photos** go in `public/images/`. Reference them from the data files as
  `/images/your-file.jpg`. Resize them before adding — aim for under 300 KB each,
  and no wider than 1,600 pixels.
- **The home-page video** goes at `public/videos/hero-showreel.mp4`. See
  `public/videos/README.md` for the recommended length and file size. Until you
  add it, the hero shows its animated gradient background instead — which is
  intentional, not broken.
- **Your logo** is already in place at `public/images/logo/logo.png`. It is a
  resized copy (560 px wide, 45 KB) of the original you supplied, which is kept
  untouched in `design-assets/logo-original.png`. The original was 877 KB, and
  because the logo sits in the header and footer of every page, using it
  directly would have added almost a megabyte to every page load on mobile. If
  you change the logo, put the master in `design-assets/` and save a copy no
  wider than about 600 px as `public/images/logo/logo.png`.

---

## Publishing your changes

After editing any file, run:

```bash
npm run build
```

This creates a folder called `out/` containing the finished website. Upload the
contents of `out/` to your hosting.

If your site is connected to Netlify, Vercel or Cloudflare Pages, you can skip
this — just save your changes to the repository and the site rebuilds and
publishes itself within a minute or two.

---

## If you would rather not edit files at all

The site is ready to have a proper login-based editor added on top of the same
content. See `src/lib/cms.js` for the two options and what each one costs. It is
roughly half a day of work to add, and nothing on the site has to be rebuilt —
so there is no need to decide now.
