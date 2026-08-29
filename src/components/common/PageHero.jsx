import Link from 'next/link'
import { cn } from '@/lib/utils'

/**
 * The banner at the top of every inner page: breadcrumb, eyebrow, title, lead.
 * Layered gradients drift on scroll to keep it from feeling static.
 */
export default function PageHero({
  eyebrow,
  title,
  highlight,
  lead,
  breadcrumbs = [],
  children,
  className,
}) {
  return (
    <section
      className={cn(
        'relative overflow-hidden pb-16 pt-32 sm:pb-20 sm:pt-40 md:pb-24',
        className,
      )}
    >
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_100%_70%_at_50%_-20%,rgba(15,118,188,0.13),transparent_65%)]" />
      <div className="grid-lines" />
      <div className="aurora opacity-60" />

      <div className="container-x relative z-10">
        {breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-7">
            <ol className="flex flex-wrap items-center gap-2 text-[0.76rem] text-faint">
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

        <div className="max-w-3xl">
          {eyebrow && (
            <p className="eyebrow mb-5" data-reveal="fade">
              {eyebrow}
            </p>
          )}

          <h1
            className="font-display text-[2.2rem] font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-5xl lg:text-6xl"
            data-reveal="up"
          >
            {title}
            {highlight && <span className="gradient-text"> {highlight}</span>}
          </h1>

          {lead && (
            <p
              className="mt-6 max-w-2xl text-base leading-relaxed text-body sm:text-lg"
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
      </div>
    </section>
  )
}
