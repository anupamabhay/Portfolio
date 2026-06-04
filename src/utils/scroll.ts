export function scrollToSection(id: string, offset = 80) {
  const el = document.getElementById(id)
  if (!el) return

  const start = window.scrollY
  const target = el.getBoundingClientRect().top + start - offset
  const duration = 700
  const startTime = performance.now()

  function easeOutQuart(t: number) {
    return 1 - Math.pow(1 - t, 4)
  }

  function step(now: number) {
    const elapsed = now - startTime
    const progress = Math.min(elapsed / duration, 1)
    window.scrollTo(0, Math.round(start + (target - start) * easeOutQuart(progress)))
    if (progress < 1) requestAnimationFrame(step)
  }

  requestAnimationFrame(step)
}
