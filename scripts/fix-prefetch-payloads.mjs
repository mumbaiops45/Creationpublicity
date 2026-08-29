/**
 * Post-build fix: flatten Next.js prefetch payload filenames.
 *
 * Next's client asks for prefetch payloads at a FLAT, dot-separated filename.
 * From node_modules/next/dist/shared/lib/segment-cache/segment-value-encoding.js:
 *
 *     convertSegmentPathToStaticExportFilename(segmentPath) {
 *       return `__next${segmentPath.replace(/\//g, '.')}.txt`
 *     }
 *
 * So a link to /services asks for:
 *     /services/__next.services.__PAGE__.txt
 *
 * But `next build` with `output: 'export'` writes that payload as a nested
 * directory instead:
 *     out/services/__next.services/__PAGE__.txt
 *
 * The result is that every prefetch 404s, so each internal navigation falls
 * back to a full page load and the browser console fills with 404s.
 *
 * This script walks the export and writes a flat copy at the name the client
 * actually requests. The nested originals are left in place.
 *
 * It is a no-op if a future Next.js release writes the flat names itself, so
 * it is safe to leave in the build indefinitely.
 */

import { readdir, stat, copyFile } from 'node:fs/promises'
import { join, relative, sep } from 'node:path'
import { fileURLToPath } from 'node:url'

const OUT = fileURLToPath(new URL('../out/', import.meta.url))

/** Every file beneath `dir`, as paths relative to `dir`. */
async function filesUnder(dir) {
  const found = []
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) {
      for (const nested of await filesUnder(full)) found.push(join(entry.name, nested))
    } else {
      found.push(entry.name)
    }
  }
  return found
}

/** Recursively find directories named `__next.*` and flatten their contents. */
async function flatten(dir) {
  let written = 0

  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue

    const full = join(dir, entry.name)

    if (entry.name.startsWith('__next.')) {
      for (const rel of await filesUnder(full)) {
        // `__next.services` + `$d$slug/__PAGE__.txt`
        //   -> `__next.services.$d$slug.__PAGE__.txt`
        const flatName = `${entry.name}.${rel.split(sep).join('.')}`
        const target = join(dir, flatName)

        const exists = await stat(target).then(
          () => true,
          () => false,
        )
        if (exists) continue

        await copyFile(join(full, rel), target)
        written += 1
      }
    }

    written += await flatten(full)
  }

  return written
}

const exported = await stat(OUT).then(
  (s) => s.isDirectory(),
  () => false,
)

if (!exported) {
  console.log('fix-prefetch-payloads: no out/ directory — skipping.')
} else {
  const written = await flatten(OUT)
  console.log(
    written > 0
      ? `fix-prefetch-payloads: wrote ${written} flat prefetch payload${written === 1 ? '' : 's'}.`
      : 'fix-prefetch-payloads: nothing to do (payload names already flat).',
  )
}

console.log('  Relative to:', relative(process.cwd(), OUT) || '.')
