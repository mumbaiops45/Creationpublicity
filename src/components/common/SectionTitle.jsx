import { cn } from '@/lib/utils'

/**
 * Shared section heading: small eyebrow, large title, optional lead paragraph.
 * `align="center"` centres it; the default is left.
 */
export default function SectionTitle({
  eyebrow,
  title,
  highlight,
  lead,
  align = 'left',
  as: Tag = 'h2',
  className,
}) {
  const centred = align === 'center'

  return (
    <div
      className={cn(
        'relative z-10 max-w-3xl',
        centred && 'mx-auto text-center',
        className,
      )}
    >
      {/* .eyebrow is inline-flex, so the parent's text-center already centres
          it — no justify-* needed here. */}
      {eyebrow && (
        <p className="eyebrow mb-5" data-reveal="fade">
          {eyebrow}
        </p>
      )}

      <Tag
        className="text-3xl leading-[1.1] sm:text-4xl lg:text-[2.9rem]"
        data-reveal="up"
      >
        {title}
        {highlight && <span className="gradient-text"> {highlight}</span>}
      </Tag>

      {lead && (
        <p
          className={cn(
            'mt-5 text-base leading-relaxed text-body sm:text-lg',
            centred && 'mx-auto',
          )}
          data-reveal="up"
          data-reveal-delay="0.1"
        >
          {lead}
        </p>
      )}
    </div>
  )
}
