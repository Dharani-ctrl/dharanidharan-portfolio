"use client"

import { useState, useEffect } from "react"
import { Menu, X, Home, Code2, Briefcase, BookOpen, FolderOpen, Mail, Info } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const sectionIds = ["hero", "about", "skills", "projects", "services", "experience", "education", "why-hire-me", "contact"]
    
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  const navItems = [
    { label: "Home", id: "hero", icon: Home },
    { label: "About", id: "about", icon: Info },
    { label: "Skills", id: "skills", icon: Code2 },
    { label: "Experience", id: "experience", icon: Briefcase },
    { label: "Education", id: "education", icon: BookOpen },
    { label: "Projects", id: "projects", icon: FolderOpen },
    { label: "Contact", id: "contact", icon: Mail },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur border-b border-primary/20" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Changed justify-center to justify-between to push icon to the right */}
        <div className="flex justify-between items-center h-16">
          
          {/* Logo - Always visible now to balance the icon on the right */}
          
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold gradient-text hover:opacity-80 transition-opacity">
              Dharan.dev
            </a>
          </div>

          {/* Desktop Menu - Centered using absolute positioning or just gap in flex */}
          <div className="hidden md:flex items-center gap-2 px-6 py-2 rounded-full border border-primary/40 bg-background/40 backdrop-blur hover-glow">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = activeSection === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative group ${
                    isActive ? "bg-primary/30 text-primary" : "hover:bg-primary/20 hover:text-primary text-foreground"
                  }`}
                >
                  <Icon size={18} />
                  <span className="hidden lg:inline">{item.label}</span>
                  {isActive && <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary rounded-full"></span>}
                </button>
              )
            })}
          </div>

          {/* Mobile Menu Button - Moved to right side automatically by justify-between */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 transform active:scale-95"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-background/95 backdrop-blur-xl border-b border-primary/20 py-4 animate-in slide-in-from-top duration-300">
            <div className="flex flex-col gap-1 px-4">
              {navItems.map((item, idx) => {
                const Icon = item.icon
                const isActive = activeSection === item.id
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center gap-4 px-4 py-4 text-base font-medium rounded-xl transition-all ${
                      isActive 
                        ? "bg-primary/20 text-primary border-l-4 border-primary" 
                        : "hover:bg-primary/10 text-foreground/80"
                    }`}
                    style={{ animationDelay: `${idx * 0.05}s` }}
                  >
                    <Icon size={20} />
                    {item.label}
                  </button>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}