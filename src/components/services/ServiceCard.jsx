import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { ServiceIcon, ArrowIcon } from '@/components/common/Icons'

/**
 * Service card: a 3:2 photo above the service name.
 *
 * The supplied photography is landscape 3:2, so the card matches that ratio
 * exactly — nothing important gets cropped out.
 *
 * Until a photo is set (`image: null` in src/data/services.js) the card shows
 * a branded gradient with the service icon, using a different gradient per
 * position so the grid still has variety.
 */

// Five variants, not three: the grid is three columns wide, so a multiple of
// three would line the same gradient up in vertical stripes down the page.
const GRADIENTS = [
  'bg-gradient-to-br from-brand-400 via-brand-600 to-brand-900',
  'bg-gradient-to-b from-ink-800 via-brand-800 to-brand-950',
  'bg-gradient-to-tr from-brand-700 via-brand-500 to-brand-300',
  'bg-gradient-to-br from-brand-900 via-ink-900 to-brand-700',
  'bg-gradient-to-bl from-brand-500 via-brand-700 to-ink-950',
]

export default function ServiceCard({ service, index = 0 }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className={cn(
        'group block overflow-hidden rounded-2xl border border-line bg-white',
        'shadow-[0_1px_3px_rgba(11,44,71,0.05)]',
        'transition-[transform,box-shadow,border-color] duration-500 ease-out-expo',
        'hover:-translate-y-1.5 hover:border-brand-300',
        'hover:shadow-[0_18px_40px_-20px_rgba(15,118,188,0.45)]',
      )}
    >
      {/* ---- Photo ---- */}
      <div className="relative aspect-[3/2] overflow-hidden bg-surface-3" data-reveal-image>
        {service.image ? (
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-[900ms] ease-out-expo group-hover:scale-[1.06]"
          />
        ) : (
          <span
            aria-hidden="true"
            className={cn(
              'absolute inset-0 flex items-center justify-center transition-transform duration-[900ms] ease-out-expo group-hover:scale-[1.06]',
              GRADIENTS[index % GRADIENTS.length],
            )}
          >
            <ServiceIcon name={service.icon} className="h-16 w-16 text-white/25" />
          </span>
        )}
      </div>

      {/* ---- Name ---- */}
      <div className="flex items-center justify-between gap-3 px-5 py-4">
        <h3 className="font-display text-[0.95rem] font-bold leading-snug text-ink-900 transition-colors duration-300 group-hover:text-brand-700">
          {service.title}
        </h3>
        <ArrowIcon className="h-4 w-4 shrink-0 text-brand-500 transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </Link>
  )
}
