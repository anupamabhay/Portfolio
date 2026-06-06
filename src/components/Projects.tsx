import { projects } from "../data/portfolio"
import { useInView } from "../hooks/useInView"

export function Projects() {
  const { ref, inView } = useInView()

  return (
    <section
      id="projects"
      className="px-6 md:px-12 max-w-container-max mx-auto py-24"
      ref={ref}
    >
      <div
        className={`transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="mb-24">
          <span className="text-[10px] text-primary mb-4 block font-bold tracking-[0.2em] uppercase">
            &lt;&gt; 02. WORK
          </span>
          <h2 className="text-headline-lg text-on-surface">Things I&apos;ve built</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
          {projects.map((project) => (
            <div key={project.title} className="group flex flex-col h-full">
              <div className="aspect-[16/9] overflow-hidden bg-surface-container-low mb-6 relative">
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
              <div className="flex flex-col flex-1 space-y-4">
                <h3 className="text-headline-md text-on-surface group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-body-md text-on-surface/60 leading-relaxed max-w-lg flex-1">
                  {project.description}
                </p>
                <div className="pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-3 text-[11px] font-bold tracking-widest uppercase"
                  >
                     <span className="relative text-on-surface transition-colors duration-300 group-hover/link:text-on-surface after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 group-hover/link:after:w-[40%] after:bg-primary after:transition-all after:duration-300">READ CASE STUDY</span>
                    <svg className="w-[18px] h-[18px] text-on-surface/40 group-hover/link:text-primary group-hover/link:translate-x-1 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
