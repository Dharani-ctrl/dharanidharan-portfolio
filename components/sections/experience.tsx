"use client"

import { useEffect, useRef } from "react"
import { Laptop, Rocket, Code2, MapPin } from "lucide-react"

export default function Experience() {
  const containerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll(".experience-card")
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

  const experiences = [
    {
      role: "WordPress Developer",
      company: "Fiverr",
      period: "2019 - 2020",
      icon: <Laptop className="w-5 h-5" />,
      achievements: "Worked on developing and customizing WordPress websites for clients globally.",
      technologies: [
        { name: "WordPress", color: "#0073AA" },
        { name: "PHP", color: "#777BB4" },
        { name: "MySQL", color: "#00758F" },
      ],
    },
    {
      role: "Junior Frontend Developer",
      company: "Sera Programmer",
      period: "2021 - 2023",
      icon: <Code2 className="w-5 h-5" />,
      achievements:
        "Assisted in building and optimizing user interfaces with a focus on responsive and interactive designs.",
      technologies: [
        { name: "React", color: "#61DAFB" },
        { name: "Tailwind CSS", color: "#06B6D4" },
        { name: "JavaScript", color: "#F7DF1E" },
      ],
    },
    {
      role: "JavaScript Developer",
      company: "OlovaJS (Sera Programmer)",
      period: "2023 - Present",
      icon: <Rocket className="w-5 h-5" />,
      achievements: "Contributed to developing JavaScript libraries and enhancing framework functionalities.",
      technologies: [
        { name: "JavaScript", color: "#F7DF1E" },
        { name: "TypeScript", color: "#3178C6" },
        { name: "Node.js", color: "#339933" },
      ],
    },
  ]

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex items-center gap-3 mb-20 animate-in fade-in duration-700">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
            <Laptop className="w-5 h-5" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-primary">Work Experience</h2>
        </div>

        {/* Vertical Timeline */}
        <div className="relative" ref={containerRef}>
          {/* Timeline line */}
          <div className="absolute left-7 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary to-primary/30"></div>

          {/* Experience items */}
          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div key={idx} className="experience-card relative pl-24">
                {/* Timeline circle icon */}
                <div
                  className="absolute left-0 top-0 w-16 h-16 rounded-full border-4 border-primary bg-background flex items-center justify-center text-primary transition-all duration-300 hover:scale-125 hover:shadow-lg hover:shadow-primary/50"
                  style={{
                    borderColor: "#00d4ff",
                  }}
                >
                  {exp.icon}
                </div>

                {/* Content card */}
                <div className="p-6 rounded-lg bg-secondary/20 border border-primary/30 hover:border-primary/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-1">{exp.role}</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <MapPin size={16} className="text-primary" />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <span className="text-xs px-3 py-1 rounded-full bg-primary/20 text-primary font-medium whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{exp.achievements}</p>

                  {/* Technologies */}
                  {exp.technologies && (
                    <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-primary/20">
                      {exp.technologies.map((tech, i) => (
                        <div
                          key={i}
                          className="relative group/tech px-2 py-1 text-xs rounded-full border transition-all duration-300 hover:scale-110 cursor-pointer overflow-hidden"
                          style={{
                            borderColor: tech.color,
                            backgroundColor: `${tech.color}15`,
                          }}
                        >
                          <div
                            className="absolute inset-0 opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300"
                            style={{
                              background: `linear-gradient(135deg, ${tech.color}30 0%, ${tech.color}50 100%)`,
                            }}
                          ></div>
                          <span
                            className="relative z-10 font-semibold transition-all duration-300 group-hover/tech:text-white"
                            style={{
                              color: tech.color,
                            }}
                          >
                            {tech.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
