import Image from 'next/image'
import { initials, cn } from '@/lib/utils'

/**
 * A client logo tile. Falls back to a clean initials-and-wordmark plate when
 * no logo file has been supplied yet, so the grid never shows broken images.
 */
export default function ClientLogo({ client, className }) {
  return (
    <div
      className={cn(
        'glass group flex h-24 items-center justify-center gap-3 rounded-xl px-5 transition-all duration-500 hover:border-brand-400',
        className,
      )}
      title={client.name}
    >
      {client.logo ? (
        <Image
          src={client.logo}
          alt={client.name}
          width={200}
          height={80}
          className="max-h-12 w-auto object-contain opacity-70 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0"
        />
      ) : (
        <>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-brand-200 bg-brand-50 font-display text-[0.7rem] font-bold text-brand-600 transition-colors duration-500 group-hover:border-brand-400 group-hover:text-brand-700">
            {initials(client.name)}
          </span>
          <span className="font-display text-[0.82rem] font-semibold leading-tight text-muted transition-colors duration-500 group-hover:text-ink-900">
            {client.name}
          </span>
        </>
      )}
    </div>
  )
}
