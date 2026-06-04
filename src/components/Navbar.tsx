import { useState } from "react"
import { personal } from "../data/portfolio"
import { useTheme } from "../contexts/ThemeContext"

const links = [
  { label: "PROJECTS", href: "#projects" },
  { label: "STACK", href: "#stack" },
  { label: "CONTACT", href: "#contact" },
]

const sun = (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
)

const moon = (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
)

export function Navbar() {
  const { theme, resolved, cycleTheme } = useTheme()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md">
      <div className="flex justify-between items-center h-20 px-6 md:px-12 max-w-container-max mx-auto">
        <a href="#hero" className="text-[20px] font-bold tracking-tight text-on-surface">
          {personal.name.split(" ")[0].toUpperCase()}<span className="text-primary">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-12">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[11px] font-semibold tracking-widest text-on-surface/60 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={cycleTheme}
            className="text-on-surface/60 hover:text-primary transition-colors"
            aria-label={`Switch to ${resolved === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "light" ? sun : moon}
          </button>

          <a
            href={personal.resumeUrl}
            className="text-[11px] font-bold text-on-primary bg-primary px-6 py-3 hover:brightness-110 transition-all uppercase tracking-widest"
          >
            RESUME
          </a>

          <button
            className="md:hidden text-on-surface/60 hover:text-primary transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-surface border-t border-outline-variant px-6 py-6 space-y-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-[11px] font-semibold tracking-widest text-on-surface/60 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
