import { useEffect, useState } from "react"

export function Footer() {
  const [time, setTime] = useState(() => new Date())

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 60000)
    return () => clearInterval(timer)
  }, [])

  const formatted = time.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  })

  const clock = time.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Kolkata",
  })

  return (
    <footer className="w-full py-8 border-t border-outline-variant/[0.07] bg-surface">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-12 max-w-container-max mx-auto gap-12">
        <div className="flex items-center gap-2 text-[10px] font-bold text-on-surface/30 tracking-[0.2em] uppercase">
          <span className="relative inline-flex items-center justify-center h-3 w-3">
            <span className="absolute inset-0 rounded-full bg-emerald-500 animate-[breathe_3s_ease-in-out_infinite]" />
            <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-500 animate-[breathe_3s_ease-in-out_infinite]" />
          </span>
          {formatted} · {clock} IST
        </div>
        <div className="text-[10px] font-bold text-on-surface/30 tracking-[0.2em] uppercase">
          &copy; {new Date().getFullYear()} Anupam Abhay
        </div>
      </div>
    </footer>
  )
}
