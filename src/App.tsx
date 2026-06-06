import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero"
import { About } from "./components/About"
import { Marquee } from "./components/Marquee"
import { Projects } from "./components/Projects"
import { Experience } from "./components/Experience"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import { ScrollProgress } from "./components/ScrollProgress"
import { GoToTop } from "./components/GoToTop"

function App() {
  return (
    <div className="min-h-screen bg-surface text-on-surface font-sans antialiased">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Marquee />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <GoToTop />
    </div>
  )
}

export default App
