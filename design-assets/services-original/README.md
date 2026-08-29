# Original service photography

The twelve service images exactly as supplied: PNG, mostly 1536 × 1024,
about **2.4 MB each (~25 MB total)**.

They are **not published**. The versions the site serves live at
`public/images/services/<slug>.webp` — resized to 800px wide and saved as
WebP, which brought the set from 25 MB down to **0.72 MB (97% smaller)**.

That matters because the `/services` page loads all twelve at once: the
originals would have meant a ~25 MB page on mobile data.

## Filename mapping

The supplied names did not match the service slugs in `src/data/services.js`,
so they were renamed:

| Supplied file | Published as |
| --- | --- |
| `mall.png` | `malls-and-multiplexes.webp` |
| `hoardings-neon-signs.png` | `hoardings-and-neon-signs.webp` |
| `corporate-gifting.png` | `corporate-gifting.webp` |
| `brochures-banners-catalogues.png` | `brochures-banners-catalogues.webp` |
| `transit-media.png` | `transit-media.webp` |
| `retail-signages.png` | `retail-and-signages.webp` |
| `digital-marketing.png` | `digital-marketing.webp` |
| `buses-bus-stops.png` | `buses-and-bus-shelters.webp` |
| `newspapers-magazines.png` | `newspapers-and-magazines.webp` |
| `radio-cinema-advertising.png` | `radio-and-cinema.webp` |
| `events-exhibitions.png` | `events-and-exhibitions.webp` |
| `airport-metro-advertising.png` | `airport-and-metro-advertising.webp` |

**To replace one:** put the new master here, then save a copy at about 800px
wide as `public/images/services/<slug>.webp`. The published filename must
match the service's `slug`.

The cards render at **3:2, matching these photos exactly**, so nothing is
cropped. Keep replacements landscape 3:2 for the same result.
