import { personal } from "../data/portfolio"

export function Footer() {
  return (
    <footer className="w-full py-24 border-t border-outline-variant bg-surface">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-12 max-w-container-max mx-auto gap-12">
        <div className="text-[10px] font-bold text-on-surface/30 tracking-[0.2em] uppercase">
          &copy; {new Date().getFullYear()} DESIGNED FOR PERFORMANCE.
        </div>
        <div className="flex gap-12 text-[10px] font-bold tracking-[0.2em] uppercase">
          <a
            href={personal.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface/50 hover:text-primary transition-colors"
          >
            GITHUB
          </a>
          <a
            href={personal.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface/50 hover:text-primary transition-colors"
          >
            LINKEDIN
          </a>
          <a href="#" className="text-on-surface/50 hover:text-primary transition-colors">
            SOURCE
          </a>
        </div>
      </div>
    </footer>
  )
}
