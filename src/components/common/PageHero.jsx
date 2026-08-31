import Link from 'next/link'
import { cn } from '@/lib/utils'

/**
 * The banner at the top of every inner page: breadcrumb, eyebrow, title, lead.
 *
 * Two layouts, picked by whether a `media` node is passed:
 *   with media — copy left, picture right, so the band is filled edge to edge
 *   without    — the copy is centred, so there is no lopsided empty half
 * Left-aligned copy in a full-width band leaves a dead right-hand column, which
 * is the one thing this must never do.
 */
export default function PageHero({
  eyebrow,
  title,
  highlight,
  lead,
  breadcrumbs = [],
  media,
  children,
  className,
}) {
  const centred = !media

  return (
    <section
      className={cn(
        'relative overflow-hidden pb-10 pt-29 sm:pb-12 sm:pt-30 md:pb-14',
        className,
      )}
    >
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_100%_70%_at_50%_-20%,rgba(15,118,188,0.13),transparent_65%)]" />
      <div className="aurora opacity-60" />

      <div className="container-x relative z-10">
        {breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol
              className={cn(
                'flex flex-wrap items-center gap-2 text-[0.76rem] text-faint',
                centred && 'justify-center',
              )}
            >
              <li>
                <Link href="/" className="transition-colors hover:text-brand-700">
                  Home
                </Link>
              </li>
              {breadcrumbs.map((crumb, index) => (
                <li key={crumb.href ?? crumb.label} className="flex items-center gap-2">
                  <span aria-hidden="true" className="text-brand-700">
                    /
                  </span>
                  {crumb.href && index < breadcrumbs.length - 1 ? (
                    <Link href={crumb.href} className="transition-colors hover:text-brand-700">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span aria-current="page" className="text-brand-600">
                      {crumb.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <div
          className={cn(
            !centred && 'grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:gap-14',
          )}
        >
          <div className={cn('max-w-3xl', centred && 'mx-auto text-center')}>
            {eyebrow && (
              <p className="eyebrow mb-4" data-reveal="fade">
                {eyebrow}
              </p>
            )}

            <h1
              className="font-display text-[2.2rem] font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-5xl lg:text-[3.4rem]"
              data-reveal="up"
            >
              {title}
              {highlight && <span className="gradient-text"> {highlight}</span>}
            </h1>

            {lead && (
              <p
                className={cn(
                  'mt-5 max-w-2xl text-base leading-relaxed text-body sm:text-lg',
                  centred && 'mx-auto',
                )}
                data-reveal="up"
                data-reveal-delay="0.1"
              >
                {lead}
              </p>
            )}

            {children && (
              <div data-reveal="up" data-reveal-delay="0.2">
                {children}
              </div>
            )}
          </div>

          {media && (
            <div className="relative" data-reveal="right">
              {media}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
