import { techStack } from "../data/portfolio"

export function Marquee() {
  const items = Array.from({ length: 2 }, (_, i) =>
    techStack.map((tag) => (
      <div key={`${tag}-${i}`} className="flex items-center gap-8 shrink-0">
        <span className="text-[10px] font-bold text-primary">/</span>
        <span className="text-[11px] text-on-surface/70 tracking-[0.3em] font-medium">
          {tag}
        </span>
      </div>
    ))
  ).flat()

  return (
    <div className="border-y border-outline-variant overflow-hidden">
      <div
        className="animate-marquee whitespace-nowrap flex gap-20 items-center py-7"
        style={{ width: "max-content" }}
      >
        {items}
      </div>
    </div>
  )
}
