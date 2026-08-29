# Original design assets

Files here are **not published** — nothing in this folder is copied into the
built site. Keep master/source artwork here.

## logo-original.png

The logo exactly as supplied: **1825 × 862 px, 877 KB**.

The version the website actually uses, `public/images/logo/logo.png`, is a
resized copy: **560 × 265 px, 45 KB**. It is displayed at most 112 px tall
anywhere on the site, so 560 px wide still covers high-density retina screens
with room to spare.

**Why this matters:** the logo appears in the header and footer of every single
page. Serving the 877 KB original would have added roughly 0.9 MB to every page
load on mobile data. The resized copy is a 95% saving with no visible
difference.

## The two published logo files

Both are generated from `logo-original.png` and both have a **transparent**
background — the white ground the original was drawn on is keyed out, so the
logo can sit on any colour without a white box behind it.

| File | Used where |
| --- | --- |
| `public/images/logo/logo.png` | full colour, transparent — the white header bar |
| `public/images/logo/logo-white.png` | all-white knockout, transparent — over the dark video hero and on the dark blue footer |

The white knockout exists because the logo's navy wordmark is close to
unreadable on the dark blue footer and over video.

**If you replace the logo:** put the new master here, then regenerate both
files from it (keying out the white ground and resizing to about 560 px wide).
Keep the same proportions — the site sizes the logo by height and lets the
width follow.
