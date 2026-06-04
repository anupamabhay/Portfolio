import { personal } from "../data/portfolio"

export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-edge">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-content-muted text-sm">
          &copy; {new Date().getFullYear()} {personal.name}. Built with React &amp; Tailwind CSS.
        </p>
        <a
          href="#hero"
          className="w-9 h-9 rounded-lg bg-surface-tertiary/50 border border-edge flex items-center justify-center text-content-muted hover:text-content hover:border-accent transition-all"
          aria-label="Back to top"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </a>
      </div>
    </footer>
  )
}
