import { about } from "../data/portfolio"
import { useInView } from "../hooks/useInView"

export function About() {
  const { ref, inView } = useInView()

  return (
    <section
      id="about"
      className="px-6 md:px-12 max-w-container-max mx-auto py-section-gap"
      ref={ref}
    >
      <div
        className={`grid grid-cols-1 lg:grid-cols-12 gap-20 transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="lg:col-span-4">
          <span className="text-[10px] text-primary mb-4 block font-bold tracking-[0.2em] uppercase">
            01 / ABOUT
          </span>
          <h2 className="text-headline-lg text-on-surface">Philosophy &amp; Approach</h2>
        </div>
        <div className="lg:col-span-8 space-y-6">
          {about.bio.map((paragraph, i) => (
            <p key={i} className="text-body-lg text-on-surface/70 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
