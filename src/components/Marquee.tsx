import { techStack } from "../data/portfolio"

export function Marquee() {
  const tags = techStack.map((tag) => (
    <div key={tag} className="flex items-center gap-8">
      <span className="text-[10px] font-bold text-on-surface/20">/</span>
      <span className="text-[11px] text-on-surface/40 tracking-[0.3em] font-medium">{tag}</span>
    </div>
  ))

  const content = [...tags, ...tags, ...tags, ...tags]

  return (
    <section
      id="stack"
      className="py-12 bg-surface-container-lowest border-y border-outline-variant overflow-hidden"
    >
      <div className="animate-marquee whitespace-nowrap flex gap-20 items-center">
        {content}
      </div>
    </section>
  )
}
