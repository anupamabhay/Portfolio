import { techStack } from "../data/portfolio"

export function Marquee() {
  const content = Array.from({ length: 2 }, (_, i) =>
    techStack.map((tag) => (
      <div key={`${tag}-${i}`} className="flex items-center gap-8">
        <span className="text-[10px] font-bold text-primary/40">/</span>
        <span className="text-[11px] text-on-surface/40 tracking-[0.3em] font-medium">{tag}</span>
      </div>
    ))
  ).flat()

  return (
    <div className="border-y border-outline-variant overflow-hidden">
      <div className="animate-marquee whitespace-nowrap flex gap-20 items-center py-12">
        {content}
      </div>
    </div>
  )
}
