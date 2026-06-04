import { useInView } from "../hooks/useInView"
import { skills } from "../data/portfolio"

const categoryColors: Record<string, string> = {
  Frontend:
    "border-sky-300 bg-sky-100 text-sky-700 dark:border-sky-500/40 dark:bg-sky-500/20 dark:text-sky-300",
  Backend:
    "border-emerald-300 bg-emerald-100 text-emerald-700 dark:border-emerald-500/40 dark:bg-emerald-500/20 dark:text-emerald-300",
  "DevOps & Cloud":
    "border-orange-300 bg-orange-100 text-orange-700 dark:border-orange-500/40 dark:bg-orange-500/20 dark:text-orange-300",
  Tools:
    "border-purple-300 bg-purple-100 text-purple-700 dark:border-purple-500/40 dark:bg-purple-500/20 dark:text-purple-300",
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
              className="p-6 border border-edge bg-surface-secondary shadow-sm"
            >
              <h3 className="text-content font-semibold mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, i) => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 text-sm border transition-all hover:scale-105 ${
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
