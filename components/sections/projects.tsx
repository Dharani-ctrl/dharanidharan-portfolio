"use client"

import { useEffect, useRef } from "react"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Projects() {
  const containerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll(".project-card")
            items.forEach((item, index) => {
              item.style.animation = "bounce-in 0.6s ease-out forwards"
              item.style.animationDelay = `${index * 0.1}s`
              item.style.opacity = "0"
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with product catalog, shopping cart, and payment integration.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#",
      github: "#",
      image: "/placeholder.jpg",
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates and team collaboration features.",
      tech: ["React", "Express", "MongoDB", "Socket.io"],
      link: "#",
      github: "#",
      image: "/placeholder.jpg",
    },
    {
      title: "Blog Platform",
      description: "Content management system with user authentication, markdown support, and comment system.",
      tech: ["Next.js", "Node.js", "MongoDB", "JWT"],
      link: "#",
      github: "#",
      image: "/placeholder.jpg",
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather application with location search and 7-day forecast predictions.",
      tech: ["React", "API Integration", "Tailwind CSS", "Geolocation"],
      link: "#",
      github: "#",
      image: "/placeholder.jpg",
    },
    {
      title: "Social Media App",
      description: "Social networking platform with user profiles, posts, likes, comments, and messaging.",
      tech: ["React", "Express", "MongoDB", "WebSocket"],
      link: "#",
      github: "#",
      image: "/placeholder.jpg",
    },
    {
      title: "Analytics Dashboard",
      description: "Data visualization dashboard with real-time analytics and custom reporting features.",
      tech: ["React", "Charts.js", "Node.js", "MongoDB"],
      link: "#",
      github: "#",
      image: "/placeholder.jpg",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4 animate-in fade-in duration-700">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium badge-pulse">
            <span></span>
            Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing my best work across different domains and technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" ref={containerRef}>
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="project-card group relative p-6 rounded-lg bg-background border border-border hover:border-primary/50 transition-all card-hover flex flex-col hover-glow overflow-hidden"
            >
              {/* Hover Image Overlay */}
              <div className="absolute inset-0 overflow-hidden rounded-lg opacity-0 group-hover:opacity-90 transition-opacity duration-300">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Content - appears above image on hover */}
              <div className="relative z-10 group-hover:bg-black/40 group-hover:backdrop-blur-sm p-4 rounded transition-all duration-300">
                <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-grow group-hover:text-gray-200 transition-colors">
                  {project.description}
                </p>

                <div className="mb-4 opacity-100 group-hover:opacity-100">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20 transition-all duration-300 group-hover:bg-primary/40 group-hover:text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button
                    size="sm"
                    className="flex-1 gap-2 bg-primary text-background hover:bg-accent transition-all duration-300"
                  >
                    <ExternalLink size={16} />
                    View
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 gap-2 bg-primary/20 text-primary hover:bg-primary/40 transition-all duration-300"
                  >
                    <Github size={16} />
                    Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
