import { experience } from "../data/portfolio"
import { useInView } from "../hooks/useInView"

export function Experience() {
  const { ref, inView } = useInView()

  return (
    <section id="experience" className="section-divider bg-transparent" ref={ref}>
      <div
        className={`px-6 md:px-12 max-w-container-max mx-auto py-section-gap transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
            <span className="text-[10px] text-primary mb-4 block font-bold tracking-[0.2em] uppercase">
              03 / CHRONOLOGY
            </span>
            <h2 className="text-headline-lg text-on-surface mb-8">Engineering Trajectory</h2>
            <p className="text-body-md text-on-surface/50 leading-relaxed">
              A decade of scaling systems and leading high-impact technical teams at the
              intersection of performance and reliability.
            </p>
          </div>

          <div className="lg:col-span-8 space-y-24">
            {experience.map((job) => (
              <div key={job.company} className="grid grid-cols-1 sm:grid-cols-4 gap-6 sm:gap-12">
                <div className="text-[11px] font-bold tracking-widest text-on-surface/30 pt-1.5">
                  {job.period}
                </div>
                <div className="sm:col-span-3 space-y-5">
                  <h3 className="text-[20px] font-semibold text-on-surface">
                    {job.role} @ {job.company}
                  </h3>
                  <p className="text-body-md text-on-surface/60 leading-relaxed">
                    {job.highlights[0]}
                  </p>
                  <div className="flex flex-wrap gap-6 pt-2">
                    {job.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-bold text-primary tracking-widest uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
