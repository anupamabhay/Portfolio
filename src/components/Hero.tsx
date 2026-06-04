import { personal } from "../data/portfolio"

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: [
            "radial-gradient(ellipse 80% 60% at 20% 30%, rgba(255, 109, 31, 0.10) 0%, transparent 50%)",
            "radial-gradient(ellipse 60% 70% at 80% 70%, rgba(255, 109, 31, 0.07) 0%, transparent 50%)",
            "radial-gradient(ellipse 50% 50% at 45% 50%, rgba(255, 109, 31, 0.05) 0%, transparent 40%)",
          ].join(","),
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-accent/4 via-transparent to-surface pointer-events-none" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-edge bg-surface-secondary text-sm text-content-secondary mb-8 shadow-sm">
          <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
          <span className="leading-none">{personal.location}</span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-6 tracking-tight">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
            {personal.name}
          </span>
        </h1>

        <p className="text-xl sm:text-2xl text-content-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
          {personal.tagline}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="px-8 py-3 rounded-xl bg-accent hover:bg-accent-dark text-white font-medium transition-all hover:shadow-lg hover:shadow-accent/25"
          >
            Get In Touch
          </a>
          <a
            href="#projects"
            className="px-8 py-3 rounded-xl border border-edge text-content-secondary hover:text-content hover:border-accent font-medium transition-all"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  )
}
