# Home-page video

Drop your showreel here as **`homepage.mp4`** and it appears behind the
home-page headline automatically. No code change needed.
(`hero-showreel.mp4` also works — the hero accepts either name and uses
whichever it finds first.)

Until one of them exists, the hero shows its animated blue gradient instead.
That is the intended fallback — the page does not look broken without it.

> ### ⚠️ The current `homepage.mp4` is a salvaged file
> The video originally supplied here arrived as `homepage.crdownload` — a
> Chrome download that stopped at 72%. Its index was intact, so the frames
> that had actually downloaded were recovered into a valid
> **`homepage.mp4` (1280x720, 3.3 seconds, 1.04 MB)**, which is what the site
> plays today. **52 of the original 150 frames are missing.**
>
> To restore the full 5-second clip: re-download it, let it finish, and
> replace `homepage.mp4`. Nothing in the code needs to change.
>
> You can also delete the leftover `homepage.crdownload` — its usable data has
> already been extracted, and it currently adds ~1 MB of dead weight to every
> deploy.

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
| **File name** | `homepage.mp4` (or `hero-showreel.mp4`) |
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
