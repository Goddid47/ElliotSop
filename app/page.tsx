import Hero from '@/components/hero'
import About from '@/components/about'
import Projects from '@/components/projects'
import Experience from '@/components/experience'
import Contact from '@/components/contact'
import Navigation from '@/components/navigation'
import CyberGrid from '@/components/cyber-grid'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <CyberGrid />
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </main>
  )
}
