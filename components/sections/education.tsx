"use client"

import { useEffect, useRef } from "react"
import { GraduationCap, BookOpen, Code, MapPin, Sparkles } from "lucide-react"

export default function Education() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Select elements and cast to HTMLElement for type safety
            const items = entry.target.querySelectorAll<HTMLElement>(".education-card")
            
            items.forEach((item, index) => {
              setTimeout(() => {
                item.style.opacity = "1"
                item.style.transform = "translateY(0) scale(1)"
              }, index * 250) // Staggered one-by-one delay
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

  const education = [
    {
      degree: "B.E. Computer Science and Engineering",
      institution: "Dhanalakshmi Srinivasan College of Engineering , Coimbatore - TamilNadu",
      period: "Oct 2022 - May 2026",
      icon:  <GraduationCap className="w-5 h-5" />,
      description: "Core focus on a digital or physical showcase of a student’s technical skills, academic projects, internships, and coding proficiency to demonstrate their readiness for software development roles.",
    },
    {
      degree: "Higher Secondary Certificate (HSC) 75%",
      institution: "Government Higher Secondary School , Aragalur - TamilNadu",
      period: "2020 - 2022",
      icon: <Code className="w-5 h-5" />,
      description: "Focused on Maths Computer Science, which provided a strong foundation in programming concepts, algorithms, and problem-solving skills essential for a career in software development.",
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC) 80%",
      institution: "Government Higher Secondary School , Aragalur - TamilNadu",
      period: "2019 - 2020",
      icon: <BookOpen className="w-5 h-5" />,
      description: "Achieved a high score of 80% in the SSLC examination, demonstrating strong academic performance and a solid foundation in core subjects, which laid the groundwork for future studies in computer science and software development.",
    },
  ]

  return (
    <section id="education" className="py-24 px-4 bg-background relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex flex-col items-center mb-20 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles size={14} /> Academic Path
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold gradient-text tracking-tight">
            Education & Certifications
          </h2>
        </div>

        <div className="relative" ref={containerRef}>
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-blue-500/40 to-transparent" />

          <div className="space-y-12">
            {education.map((edu, idx) => (
              <div 
                key={idx} 
                className={`education-card relative flex flex-col md:flex-row items-center gap-8 transition-all duration-1000 ease-out ${
                  idx % 2 === 0 ? "" : "md:flex-row-reverse"
                }`}
                style={{
                  opacity: 0,
                  transform: "translateY(2rem) scale(0.95)"
                }}
              >
                {/* Timeline Center Node */}
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full bg-background border-2 border-blue-500 flex items-center justify-center z-20 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                  <div className="text-blue-400">{edu.icon}</div>
                </div>

                {/* Content Card */}
                <div className="w-full md:w-[45%] pl-12 md:pl-0">
                  <div className="group relative p-6 rounded-2xl bg-card border border-border hover:border-blue-500/40 transition-all duration-500">
                    
                    <div className="flex justify-between items-start mb-4">
                      <div className="inline-block px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-wider">
                        {edu.period}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-foreground group-hover:text-blue-400 transition-colors duration-300">
                      {edu.degree}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mt-1 mb-4">
                      <MapPin size={14} className="text-blue-500" />
                      <span>{edu.institution}</span>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {edu.description}
                    </p>

                    {/* Decorative inner glow */}
                    <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-blue-500/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>

                {/* Desktop layout spacer */}
                <div className="hidden md:block md:w-[45%]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}