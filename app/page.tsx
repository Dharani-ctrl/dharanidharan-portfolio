"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import ThemeToggle from "@/components/theme-toggle"
import Hero from "@/components/sections/hero"
import Stats from "@/components/sections/stats"
import About from "@/components/sections/about"
import Skills from "@/components/sections/skills"
import Projects from "@/components/sections/projects"
import Services from "@/components/sections/services"
import Experience from "@/components/sections/experience"
import Education from "@/components/sections/education"
import WhyHireMe from "@/components/sections/why-hire-me"
import Contact from "@/components/sections/contact"
import Footer from "@/components/footer"
import SplashScreen from "@/components/splash-screen"

export default function Home() {
  const [splashDone, setSplashDone] = useState(false)

  return (
    <>
      {/* Splash screen — shown on every visit, fades out automatically */}
      {!splashDone && <SplashScreen onComplete={() => setSplashDone(true)} />}

      {/* Main portfolio — rendered underneath, revealed after splash */}
      <main
        className={`min-h-screen bg-gradient-to-b from-background via-background to-muted/10 transition-opacity duration-700 ${
          splashDone ? "opacity-100" : "opacity-0"
        }`}
      >
        <Navigation />
        <ThemeToggle />
        <Hero />
        <Stats />
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
    </>
  )
}
