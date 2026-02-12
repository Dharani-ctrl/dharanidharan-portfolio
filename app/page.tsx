import Navigation from "@/components/navigation"
import ThemeToggle from "@/components/theme-toggle"
import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Skills from "@/components/sections/skills"
import Projects from "@/components/sections/projects"
import Services from "@/components/sections/services"
import Experience from "@/components/sections/experience"
import Education from "@/components/sections/education"
import WhyHireMe from "@/components/sections/why-hire-me"
import Contact from "@/components/sections/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/10">
      <Navigation />
      <ThemeToggle />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Experience />
      <Education />
      <WhyHireMe />
      <Contact />
      <Footer />
    </main>
  )
}
