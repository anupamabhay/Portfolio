import { personal } from "../data/portfolio"

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 max-w-container-max mx-auto pt-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[15%] left-[10%] w-[600px] h-[600px] rounded-full bg-primary/[0.06] blur-[140px] animate-[drift_25s_ease-in-out_infinite]" />
        <div className="absolute bottom-[10%] right-[15%] w-[500px] h-[500px] rounded-full bg-primary/[0.04] blur-[120px] animate-[drift_30s_ease-in-out_infinite_reverse]" />
      </div>

      <div className="max-w-4xl">
        <div className="inline-flex items-center gap-3 mb-12">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-40 animate-[breathe_3s_ease-in-out_infinite]" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary animate-[breathe_3s_ease-in-out_infinite]" />
          </span>
          <span className="text-[10px] text-on-surface/50 font-bold tracking-[0.2em] uppercase">
            Available for opportunities
          </span>
        </div>

        <h1 className="text-[48px] md:text-headline-xl text-on-surface mb-8">
          Building software{" "}
          <span className="text-primary">that works.</span>
        </h1>

        <p className="text-body-lg text-on-surface/70 max-w-2xl mb-14 leading-relaxed">
          {personal.tagline}
        </p>

        <a
          href="#about"
          className="group inline-flex items-center gap-5 text-[10px] font-bold tracking-[0.2em] uppercase"
        >
          <span className="text-primary transition-colors duration-300">SCROLL TO EXPLORE</span>
          <span className="w-16 h-px bg-on-surface/20 transition-colors duration-300" />
          <svg className="w-[18px] h-[18px] text-primary animate-[breathe_3s_ease-in-out_infinite] transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M5 9l7 7 7-7" />
          </svg>
        </a>
      </div>
    </section>
  )
}
