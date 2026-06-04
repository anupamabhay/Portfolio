import { projects } from "../data/portfolio"
import { useInView } from "../hooks/useInView"

export function Projects() {
  const { ref, inView } = useInView()

  return (
    <section
      id="projects"
      className="px-6 md:px-12 max-w-container-max mx-auto py-section-gap"
      ref={ref}
    >
      <div
        className={`transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-24 gap-6">
          <div>
            <span className="text-[10px] text-primary mb-4 block font-bold tracking-[0.2em] uppercase">
              02 / SELECTED WORKS
            </span>
            <h2 className="text-headline-lg text-on-surface">System Architecture</h2>
          </div>
          <a
            href="#"
            className="text-[11px] font-bold text-on-surface/40 hover:text-primary transition-colors border-b border-outline-variant pb-1 tracking-widest uppercase"
          >
            VIEW ARCHIVE
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-32">
          {projects.map((project) => (
            <div key={project.title} className="group">
              <div className="aspect-[16/10] overflow-hidden bg-surface-container-low mb-10 relative">
                <img
                  alt={project.title}
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-1000"
                  src={project.image}
                  loading="lazy"
                />
                <div className="absolute bottom-6 left-6 text-[9px] font-bold text-white bg-black/60 backdrop-blur-md px-4 py-2 tracking-widest uppercase">
                  {project.tag || project.tech.join(" / ")}
                </div>
              </div>
              <div className="space-y-5">
                <h3 className="text-headline-md text-on-surface group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-body-md text-on-surface/60 leading-relaxed max-w-lg">
                  {project.description}
                </p>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-[11px] font-bold text-on-surface group/link pt-4 tracking-widest uppercase"
                >
                  READ CASE STUDY
                  <svg className="w-[18px] h-[18px] transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
