import { Hero } from '../components/Hero'
// import { About } from '../components/About'
import { Projects } from '../components/Projects'
import { Experience } from '../components/Experience'
import { Footer } from '../components/Footer'

export function Home() {
  return (
    <main className="relative">
      <Hero />
      {/* <About /> */}
      <Projects />
      <Experience />
      <Footer />
    </main>
  )
}
