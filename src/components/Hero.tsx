import { personal } from "../data/portfolio"

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 max-w-container-max mx-auto pt-24">
      <div className="max-w-4xl">
        <div className="inline-flex items-center gap-3 mb-12">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full bg-primary opacity-40" />
            <span className="relative inline-flex h-2 w-2 bg-primary" />
          </span>
          <span className="text-[10px] text-on-surface/50 font-bold tracking-[0.2em] uppercase">
            Available for elite partnerships
          </span>
        </div>

        <h1 className="text-[48px] md:text-headline-xl text-on-surface mb-8">
          Engineering systems <br className="hidden md:block" /> for{" "}
          <span className="text-primary italic font-medium">scale.</span>
        </h1>

        <p className="text-body-lg text-on-surface/70 max-w-2xl mb-14 leading-relaxed">
          {personal.tagline}
        </p>

        <div className="flex flex-col sm:flex-row gap-6">
          <a
            href="#projects"
            className="bg-white text-black font-bold text-[11px] px-10 py-5 hover:bg-primary hover:text-on-primary transition-all text-center tracking-widest uppercase"
          >
            VIEW SYSTEMS
          </a>
          <a
            href="#about"
            className="border border-outline-variant text-on-surface/80 font-bold text-[11px] px-10 py-5 hover:border-on-surface transition-all text-center tracking-widest uppercase"
          >
            THE MANIFESTO
          </a>
        </div>
      </div>
    </section>
  )
}
