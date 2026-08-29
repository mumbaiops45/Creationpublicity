import Link from 'next/link'
import { cn } from '@/lib/utils'
import { ArrowIcon } from './Icons'

const VARIANTS = {
  primary: 'btn btn-primary',
  ghost: 'btn btn-ghost',
  gold: 'btn btn-gold',
}

const SIZES = {
  sm: 'px-5 py-2.5 text-[0.8rem]',
  md: '',
  lg: 'px-8 py-4 text-[0.95rem]',
}

/**
 * Renders a <Link> when given `href`, otherwise a <button>.
 * `withArrow` adds an arrow that slides on hover.
 */
export default function Button({
  href,
  variant = 'primary',
  size = 'md',
  withArrow = false,
  className,
  children,
  ...props
}) {
  const classes = cn(VARIANTS[variant] ?? VARIANTS.primary, SIZES[size], 'group', className)

  const inner = (
    <>
      {children}
      {withArrow && (
        <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  )

  if (href) {
    const external = /^(https?:|mailto:|tel:)/.test(href)
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          {...props}
        >
          {inner}
        </a>
      )
    }
    return (
      <Link href={href} className={classes} {...props}>
        {inner}
      </Link>
    )
  }

  return (
    <button className={classes} {...props}>
      {inner}
    </button>
  )
}
