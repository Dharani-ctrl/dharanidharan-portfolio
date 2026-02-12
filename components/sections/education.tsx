"use client"

import { useEffect, useRef } from "react"
import { GraduationCap, BookOpen, Code, MapPin } from "lucide-react"

export default function Education() {
  const containerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll(".education-card")
            items.forEach((item, index) => {
              item.style.animation = "slide-in-right 0.7s ease-out forwards"
              item.style.animationDelay = `${index * 0.15}s`
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

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Tech University",
      period: "2017 - 2021",
      icon: <GraduationCap className="w-5 h-5" />,
      description: "Core focus on web development, databases, and software engineering principles.",
    },
    {
      degree: "Frontend Development Specialization",
      institution: "Online Learning Platform",
      period: "2020 - 2021",
      icon: <Code className="w-5 h-5" />,
      description: "Advanced React, TypeScript, and modern frontend frameworks with real-world projects.",
    },
    {
      degree: "Full-Stack Web Development Bootcamp",
      institution: "Coding Academy",
      period: "2022 - 2023",
      icon: <BookOpen className="w-5 h-5" />,
      description: "Comprehensive training in MERN stack with emphasis on scalable application architecture.",
    },
  ]

  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex items-center gap-3 mb-20 animate-in fade-in duration-700">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
            <GraduationCap className="w-5 h-5" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-primary">Education & Certifications</h2>
        </div>

        {/* Vertical Timeline */}
        <div className="relative" ref={containerRef}>
          {/* Timeline line */}
          <div className="absolute left-7 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary to-primary/30"></div>

          {/* Education items */}
          <div className="space-y-8">
            {education.map((edu, idx) => (
              <div key={idx} className="education-card relative pl-24">
                {/* Timeline circle icon */}
                <div
                  className="absolute left-0 top-0 w-16 h-16 rounded-full border-4 border-primary bg-background flex items-center justify-center text-primary transition-all duration-300 hover:scale-125 hover:shadow-lg hover:shadow-primary/50"
                  style={{
                    borderColor: "#00d4ff",
                  }}
                >
                  {edu.icon}
                </div>

                {/* Content card */}
                <div className="p-6 rounded-lg bg-secondary/20 border border-primary/30 hover:border-primary/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-1">{edu.degree}</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <MapPin size={16} className="text-primary" />
                        <span>{edu.institution}</span>
                      </div>
                    </div>
                    <span className="text-xs px-3 py-1 rounded-full bg-primary/20 text-primary font-medium whitespace-nowrap">
                      {edu.period}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
