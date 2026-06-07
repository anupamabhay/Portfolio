import { useEffect, useState } from "react"
import { personal } from "../data/portfolio"
import { useInView } from "../hooks/useInView"

const terminalCommand = 'npx hire --name anupamabhay'

export function Contact() {
  const { ref, inView } = useInView({ threshold: 0.3 })
  const [typedText, setTypedText] = useState("")
  const [typingDone, setTypingDone] = useState(false)

  useEffect(() => {
    if (!inView || typingDone) return

    let i = 0
    const interval = setInterval(() => {
      if (i < terminalCommand.length) {
        setTypedText(terminalCommand.slice(0, i + 1))
        i++
      } else {
        setTypingDone(true)
        clearInterval(interval)
      }
    }, 40)

    return () => clearInterval(interval)
  }, [inView, typingDone])

  return (
    <section id="contact" className="section-divider bg-surface-container-lowest" ref={ref}>
      <div
        className={`px-6 md:px-12 max-w-container-max mx-auto flex flex-col justify-center py-20 transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-[10px] text-primary mb-8 block font-bold tracking-[0.2em] uppercase">
            &lt;&gt; 04. CONTACT
          </span>

          <h2 className="text-[42px] md:text-5xl font-bold text-on-surface mb-12">
            Let&apos;s work together
          </h2>

          <div className="flex flex-col items-center gap-10 mb-20">
            <div className="text-[18px] font-medium text-on-surface/90 flex items-center gap-3 bg-surface p-6 border border-outline-variant">
              <span className="text-primary font-bold">$</span>
              <span className="font-mono">{typedText}</span>
              {!typingDone && (
                <span
                  className="inline-block w-[6px] h-[1.1em] bg-primary animate-[breathe_3s_ease-in-out_infinite] align-middle ml-1"
                />
              )}
            </div>
            <p className="text-body-md text-on-surface/50 max-w-lg leading-relaxed">
              Got a project in mind? Need a hand building something?
              Drop me a line and let&apos;s figure it out.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-12 pt-12">
            <a
              href={`mailto:${personal.email}`}
              className="group inline-flex items-center gap-4 text-[11px] font-bold tracking-widest uppercase"
            >
              <svg className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-on-surface relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 group-hover:after:w-[40%] after:bg-primary after:transition-all after:duration-300">{personal.email.toUpperCase()}</span>
            </a>
            <a
              href={personal.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 text-[11px] font-bold tracking-widest uppercase"
            >
              <svg className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span className="text-on-surface relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 group-hover:after:w-[40%] after:bg-primary after:transition-all after:duration-300">GITHUB.COM/ANUPAMABHAY</span>
            </a>
            <a
              href={personal.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 text-[11px] font-bold tracking-widest uppercase"
            >
              <svg className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span className="text-on-surface relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 group-hover:after:w-[40%] after:bg-primary after:transition-all after:duration-300">LINKEDIN.COM/IN/ANUPAMABHAY</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
