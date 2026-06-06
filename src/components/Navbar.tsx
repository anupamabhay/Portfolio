import { useState, useRef } from "react"
import { personal } from "../data/portfolio"
import { useTheme } from "../contexts/ThemeContext"

const links = [
  { label: "ABOUT", href: "#about" },
  { label: "PROJECTS", href: "#projects" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "CONTACT", href: "#contact" },
]

const themeOptions = ["light", "dark", "system"] as const

const sun = (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
)

const moon = (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
)

const system = (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

function ThemeIcon({ theme }: { theme: string }) {
  if (theme === "light") return sun
  if (theme === "dark") return moon
  return system
}

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const openDropdown = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setDropdownOpen(true)
  }

  const closeDropdown = () => {
    timeoutRef.current = setTimeout(() => setDropdownOpen(false), 150)
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface/70 backdrop-blur-xl">
      <div className="flex justify-between items-center h-16 px-6 md:px-12">
        <a href="#hero" className="text-[20px] font-bold tracking-tight text-on-surface hover:text-primary transition-colors duration-300">
          {personal.name.split(" ")[0].toUpperCase()}<span className="text-primary">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-12">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-[11px] font-semibold tracking-widest text-on-surface/60 hover:text-primary transition-colors duration-300 py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-[40%] after:bg-primary after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div
            className="relative"
            onMouseEnter={openDropdown}
            onMouseLeave={closeDropdown}
          >
            <button
              className="p-2 text-on-surface/60 hover:text-primary transition-colors duration-300"
              aria-label="Change theme"
            >
              <ThemeIcon theme={theme} />
            </button>

            <div
              className={`absolute right-0 top-full mt-2 bg-surface-container border border-outline-variant min-w-[120px] py-1 z-50 transition-all duration-200 ease-out ${
                dropdownOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-2 pointer-events-none"
              }`}
              onMouseEnter={openDropdown}
              onMouseLeave={closeDropdown}
            >
                {themeOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => { setTheme(option); setDropdownOpen(false) }}
                    className={`w-full text-left px-4 py-2 text-[11px] font-semibold tracking-widest uppercase transition-colors duration-200 ${
                      theme === option
                        ? "text-primary bg-surface-container-low"
                        : "text-on-surface/60 hover:text-primary hover:bg-surface-container-low"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
          </div>

          <a
            href={personal.resumeUrl}
            className="text-[11px] font-bold text-on-primary bg-primary px-6 py-1 hover:brightness-110 hover:scale-[1.02] transition-all duration-300 uppercase tracking-widest"
          >
            RESUME
          </a>

          <button
            className="md:hidden text-on-surface/60 hover:text-primary transition-colors duration-300"
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
              className="block text-[11px] font-semibold tracking-widest text-on-surface/60 hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
