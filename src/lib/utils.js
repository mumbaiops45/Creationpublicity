/** Join class names, dropping anything falsy. */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

/** Format an ISO date string as "18 June 2026". */
export function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

/** Turn "Malls & Multiplexes" into "malls-multiplexes". */
export function slugify(text) {
  return String(text)
    .toLowerCase()
    .replace(/&/g, ' ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

/** Initials for logo fallback tiles, e.g. "Meridian Retail" -> "MR". */
export function initials(name) {
  return String(name)
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase()
}

/** Split an array into `count` roughly equal columns. */
export function chunk(items, size) {
  const out = []
  for (let i = 0; i < items.length; i += size) out.push(items.slice(i, i + size))
  return out
}
