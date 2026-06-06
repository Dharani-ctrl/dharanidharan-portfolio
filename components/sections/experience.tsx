"use client"

import { useEffect, useRef } from "react"
import { MapPin, Calendar, Briefcase } from "lucide-react"

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll<HTMLElement>(".experience-card")
            items.forEach((item, index) => {
              setTimeout(() => {
                item.style.opacity = "1"
                item.style.transform = "translateX(0)"
              }, index * 200)
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )
    if (containerRef.current) observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  const experiences = [
    {
      role: "Software Engineer",
      company: "Ascentz Technolgies ",
      location: "Coimbatore",
      period: "May 2026 - Present",
      achievements: "Software development and maintenance of client website. Implementing new features and bug fixes and also Working on MERN stack application development using React.js, Node.js, Express.js, and MongoDB, REST APIs ",
      technologies: [
        { name: "React.js", color: "#61DAFB" },
        { name: "Node.js", color: "#339933" },
        { name: "Postman", color: "#E34C26" },
        { name: "MongoDB", color: "#47A248" },
        { name: "Nodemailer", color: "#828282" },
      ],
    },
    {
      role: "Backend Developer (MERN Specialist)",
      company: "Rehabionics Healthcare Pvt Ltd",
      location: "Coimbatore",
      period: "Aug 2025 - Present",
      achievements: "Spearheaded the development of a scalable healthcare application using the MERN stack. Especially focused on optimizing backend performance and implementing secure API endpoints to handle sensitive medical data efficiently.",
      technologies: [
        { name: "Node.js", color: "#339933" },
        { name: "Postman", color: "#E34C26" },
        { name: "MongoDB", color: "#47A248" },
        { name: "Nodemailer", color: "#828282" },
      ],
    },
    {
      role: "Web Developer Intern",
      company: "SkillSync Technologies",
      location: "Coimbatore",
      period: "Jul 2025 - Sep 2025",
      achievements: "Assisted in building and optimizing user interfaces with a focus on responsive design and interactive user experiences.",
      technologies: [
        { name: "React", color: "#61DAFB" },
        { name: "Tailwind CSS", color: "#06B6D4" },
        { name: "HTML", color: "#E34C26" },
        { name: "JavaScript", color: "#F7DF1E" },
      ],
    },
    {
      role: "Frontend Developer Intern",
      company: "NoviTech R&D Pvt Ltd",
      location: "Remote",
      period: "Feb 2024 - Mar 2024",
      achievements: "Learned the fundamentals of frontend development and contributed to small projects, gaining hands-on experience with modern web technologies.",
      technologies: [
        { name: "HTML", color: "#E34C26" },
        { name: "CSS", color: "#5A67D8" },
        { name: "JavaScript", color: "#F7DF1E" },
      ],
    },
  ]

  return (
    <section id="experience" className="py-24 px-4 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex flex-col items-center mb-20 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-4">
            <Briefcase size={14} /> My Journey
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold gradient-text tracking-tight mb-4">
            Work Experience
          </h2>
          <div className="h-1 w-24 bg-primary rounded-full" />
        </div>

        <div className="relative pl-8 md:pl-0" ref={containerRef}>
          {/* Vertical Timeline Line */}
          <div className="absolute left-[15px] md:left-[39px] top-4 bottom-0 w-[2px] bg-gradient-to-b from-primary via-primary/30 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div 
                key={idx} 
                className="experience-card relative flex flex-col md:flex-row gap-6 md:gap-8 transition-all duration-700 ease-out"
                style={{
                  opacity: 0,
                  transform: "translateX(50px)"
                }}
              >
                {/* Timeline Dot Marker */}
                <div className="absolute -left-[33px] md:left-[15px] mt-1.5 md:mt-0 md:relative w-[48px] flex justify-center shrink-0">
                  <div className="w-12 h-12 rounded-full bg-background border-2 border-primary flex items-center justify-center z-20 shadow-[0_0_15px_rgba(0,212,255,0.3)] relative">
                    <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg">
                      {exp.company.charAt(0)}
                    </div>
                  </div>
                </div>

                {/* Content Card */}
                <div className="w-full">
                  <div className="group relative p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 shadow-xl hover:-translate-y-1 hover:shadow-primary/10">
                    
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-4">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 text-muted-foreground font-medium mt-1">
                          <span className="text-foreground">{exp.company}</span>
                          <span className="w-1 h-1 rounded-full bg-primary/50" />
                          <span className="flex items-center gap-1">
                            <MapPin size={14} className="text-primary" /> {exp.location}
                          </span>
                        </div>
                      </div>
                      
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-sm font-bold shrink-0">
                        <Calendar size={14} />
                        {exp.period}
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {exp.achievements}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 text-xs font-bold rounded-md border transition-all hover:scale-105 cursor-default"
                          style={{
                            borderColor: `${tech.color}40`,
                            color: tech.color,
                            backgroundColor: `${tech.color}10`,
                          }}
                        >
                          {tech.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}