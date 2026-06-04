import { useInView } from "../hooks/useInView"
import { skills } from "../data/portfolio"

const categoryColors: Record<string, string> = {
  Frontend: "border-sky-500/40 bg-sky-500/20 text-sky-600 dark:text-sky-300",
  Backend: "border-emerald-500/40 bg-emerald-500/20 text-emerald-600 dark:text-emerald-300",
  "DevOps & Cloud": "border-orange-500/40 bg-orange-500/20 text-orange-600 dark:text-orange-300",
  Tools: "border-purple-500/40 bg-purple-500/20 text-purple-600 dark:text-purple-300",
}

export function Skills() {
  const { ref, inView } = useInView()

  return (
    <section id="skills" className="py-28 px-6 bg-surface-secondary/50" ref={ref}>
      <div className={`max-w-6xl mx-auto transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="text-3xl sm:text-4xl font-bold text-content mb-4 tracking-tight">
          Skills & <span className="text-accent">Technologies</span>
        </h2>
        <p className="text-content-muted text-sm mb-16 max-w-md">
          Tools and technologies I work with regularly
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="p-6 rounded-xl border border-edge bg-surface-secondary shadow-sm"
            >
              <h3 className="text-content font-semibold mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, i) => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 text-sm rounded-lg border transition-all hover:scale-105 ${
                      categoryColors[category] || "border-edge text-content-secondary"
                    }`}
                    style={{ animationDelay: `${i * 50}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
