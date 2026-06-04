import { useInView } from "../hooks/useInView"
import { about, personal } from "../data/portfolio"

export function About() {
  const { ref, inView } = useInView()

  return (
    <section id="about" className="py-24 px-6" ref={ref}>
      <div className={`max-w-6xl mx-auto transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="text-3xl sm:text-4xl font-bold text-content mb-4">
          About <span className="text-accent">Me</span>
        </h2>
        <p className="text-content-muted text-sm mb-16 max-w-md">
          A quick overview of who I am and what I do
        </p>

        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-2">
            <div className="space-y-4">
              {about.bio.map((paragraph, i) => (
                <p key={i} className="text-content-secondary leading-relaxed text-lg">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
              {about.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 rounded-xl bg-surface-tertiary/50 border border-edge text-center"
                >
                  <div className="text-2xl font-bold text-accent-light mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-content-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-56 h-56 rounded-2xl overflow-hidden border-2 border-accent/20 mb-4">
              <img
                src={personal.avatar}
                alt={personal.name}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-content-muted text-sm">{personal.location}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
