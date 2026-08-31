# Home-page video

The clip that plays behind the home-page headline is named in one place:
`HERO_VIDEO` at the top of `src/components/home/Hero.jsx`. It currently points
at **`homepage1.mp4`**.

To swap the showreel, either overwrite that file or change `HERO_VIDEO` to the
new filename. There is no auto-detection: the site is a static export, so the
filename has to be known at build time.

If the file is missing the hero falls back to its blue gradient field, so the
page never looks broken.

> ### ⚠️ `homepage1.mp4` is 7.8 MB — roughly double the budget below
> It is the single biggest download on the site and every home-page visit pays
> for it on mobile data. Compressing it to under 4 MB is the highest-value
> performance fix available here (see **Compressing it**).

> ### Dead weight in this folder
> `homepage.mp4` (1.0 MB) is the previous showreel and is no longer referenced.
> `homepage.crdownload` (1.0 MB) is an unfinished Chrome download whose usable
> frames were already recovered. Both are still copied into `out/` on every
> build. Delete them once you are happy with `homepage1.mp4`.

> ### ⚠️ Partial downloads
> A file ending in **`.crdownload`** (Chrome) or **`.part`** (Firefox) is a
> download that has **not finished**. It is not a playable video: the browser
> will ignore it and the hero will keep showing the gradient.
>
> Let the download finish so the file is renamed to `homepage.mp4`, then
> delete any leftover partial file. These are excluded from Git so they can
> never be committed or deployed by accident.

## What to supply

| | |
| --- | --- |
| **File name** | whatever `HERO_VIDEO` points at (today `homepage1.mp4`) |
| **Format** | MP4, H.264 video, no audio track needed |
| **Length** | 10–20 seconds, cut so it loops without an obvious jump |
| **Resolution** | 1920 × 1080 (1280 × 720 is acceptable) |
| **File size** | **Under 4 MB.** This is the single biggest factor in how fast the home page loads on mobile data. |

## What works well

The video sits behind the headline under a white scrim, so it should be
**slow, wide and low-contrast** — a drone pass over a city skyline with
hoardings, a timelapse of a mall atrium, a bus moving through traffic. Avoid
fast cuts, on-screen text, or a busy area where the headline sits.

## Compressing it

If your file is larger than 4 MB, compress it free at
[handbrake.fr](https://handbrake.fr) (choose a 1080p preset and drop the
quality slider a little), or at
[cloudconvert.com](https://cloudconvert.com/mp4-converter).

## Optional: a poster image

If you would like a still frame to show while the video loads, save it here as
`hero-poster.jpg` and add `poster="/videos/hero-poster.jpg"` to the `<video>`
tag in `src/components/home/Hero.jsx`.
