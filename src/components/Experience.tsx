import { useInView } from "../hooks/useInView"
import { experience } from "../data/portfolio"

export function Experience() {
  const { ref, inView } = useInView()

  return (
    <section id="experience" className="py-24 px-6" ref={ref}>
      <div className={`max-w-4xl mx-auto transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="text-3xl sm:text-4xl font-bold text-content mb-4">
          Work <span className="text-accent">Experience</span>
        </h2>
        <p className="text-content-muted text-sm mb-16 max-w-md">
          My professional journey so far
        </p>

        <div className="relative">
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-edge" />

          <div className="space-y-12">
            {experience.map((job, i) => (
              <div key={job.company} className="relative md:pl-20">
                <div className="hidden md:flex absolute left-4 top-1 w-9 h-9 rounded-full bg-surface-tertiary border border-edge items-center justify-center text-sm text-content-muted font-bold">
                  {i + 1}
                </div>

                <div className="p-6 rounded-xl border border-edge bg-surface-tertiary/30 hover:border-accent/30 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-4">
                    <div>
                      <h3 className="text-content font-semibold text-lg">
                        {job.role}
                      </h3>
                      <p className="text-accent-light text-sm">{job.company}</p>
                    </div>
                    <span className="text-content-muted text-sm whitespace-nowrap">
                      {job.period}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {job.highlights.map((h) => (
                      <li key={h} className="flex gap-3 text-content-secondary text-sm">
                        <span className="text-accent mt-1.5 shrink-0">&#8226;</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
