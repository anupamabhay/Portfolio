import { about } from "../data/portfolio"
import { useInView } from "../hooks/useInView"

export function About() {
  const { ref, inView } = useInView()

  return (
    <section
      id="about"
      className="px-6 md:px-12 max-w-container-max mx-auto py-24"
      ref={ref}
    >
      <div
        className={`grid grid-cols-1 lg:grid-cols-12 gap-20 transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="lg:col-span-4">
          <span className="text-[10px] text-primary mb-4 block font-bold tracking-[0.2em] uppercase">
            &lt;&gt; 01. ABOUT
          </span>
          <h2 className="text-headline-lg text-on-surface">A bit about me</h2>
        </div>
        <div className="lg:col-span-8 space-y-6">
          {about.bio.map((paragraph, i) => (
            <p key={i} className="text-body-lg text-on-surface/70 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center gap-8 mt-20">
        <span className="flex-1 max-w-32 h-px bg-on-surface/20" />
        <svg
          className="w-[18px] h-[18px] text-primary animate-[breathe_3s_ease-in-out_infinite]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 9l7 7 7-7" />
        </svg>
        <span className="flex-1 max-w-32 h-px bg-on-surface/20" />
      </div>
    </section>
  )
}
