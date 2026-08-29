/**
 * Renders the `body` blocks from src/data/posts.js.
 * Supported: heading, paragraph, list, quote, stats.
 */
export default function BlogContent({ blocks = [] }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, index) => {
        switch (block.type) {
          case 'heading':
            return (
              <h2
                key={index}
                className="pt-6 font-display text-2xl font-bold text-ink-900 sm:text-[1.7rem]"
              >
                {block.text}
              </h2>
            )

          case 'list':
            return (
              <ul key={index} className="space-y-3">
                {block.items.map((item) => (
                  <li key={item} className="flex gap-3.5 text-[1.02rem] leading-relaxed text-body">
                    <span
                      aria-hidden="true"
                      className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            )

          case 'quote':
            return (
              <figure
                key={index}
                className="glass my-4 rounded-2xl border-l-2 border-l-brand-500 p-7"
              >
                <blockquote className="text-lg leading-relaxed text-ink-800">
                  “{block.text}”
                </blockquote>
                {block.attribution && (
                  <figcaption className="mt-4 text-[0.84rem] font-semibold text-brand-600">
                    — {block.attribution}
                  </figcaption>
                )}
              </figure>
            )

          case 'stats':
            return (
              <div key={index} className="my-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {block.items.map((stat) => (
                  <div key={stat.label} className="glass rounded-xl p-5 text-center">
                    <p className="font-display text-2xl font-extrabold text-brand-600">
                      {stat.value}
                    </p>
                    <p className="mt-1.5 text-[0.78rem] leading-snug text-muted">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            )

          case 'paragraph':
          default:
            return (
              <p key={index} className="text-[1.02rem] leading-relaxed text-body">
                {block.text}
              </p>
            )
        }
      })}
    </div>
  )
}
