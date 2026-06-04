import { useEffect, useState } from "react"
import { personal } from "../data/portfolio"
import { useInView } from "../hooks/useInView"

const terminalCommand = 'ssh architect@portfolio --cmd "hire_me"'

export function Contact() {
  const { ref, inView } = useInView({ threshold: 0.5 })
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
        className={`px-6 md:px-12 max-w-container-max mx-auto py-section-gap transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-[10px] text-primary mb-8 block font-bold tracking-[0.2em] uppercase">
            04 / EXECUTION
          </span>

          <h2 className="text-[42px] md:text-5xl font-bold text-on-surface mb-12">
            Let&apos;s build the future of scale.
          </h2>

          <div className="flex flex-col items-center gap-10 mb-20">
            <div className="text-[18px] font-medium text-on-surface/90 flex items-center gap-3 bg-surface p-6 border border-outline-variant">
              <span className="text-primary font-bold">$</span>
              <span className="font-mono">{typedText}</span>
              {!typingDone && (
                <span
                  className="inline-block w-[6px] h-[1.1em] bg-primary animate-[blink_1s_step-end_infinite] align-middle ml-1"
                />
              )}
            </div>
            <p className="text-body-md text-on-surface/50 max-w-lg leading-relaxed">
              Ready to discuss architecture, performance, or team leadership? Let&apos;s connect
              and engineer something extraordinary.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-12 pt-12">
            <a
              href={`mailto:${personal.email}`}
              className="group inline-flex items-center gap-4 text-[11px] font-bold text-on-surface hover:text-primary transition-all tracking-widest uppercase"
            >
              <svg className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {personal.email.toUpperCase()}
            </a>
            <a
              href={personal.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 text-[11px] font-bold text-on-surface hover:text-primary transition-all tracking-widest uppercase"
            >
              <svg className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GITHUB.COM/ARCHITECT-IO
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
