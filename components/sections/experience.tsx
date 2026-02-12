"use client"

import { useEffect, useRef } from "react"
import { Laptop, Rocket, Code2, MapPin, Calendar } from "lucide-react"

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Select only HTML Elements to avoid TypeError
            const items = entry.target.querySelectorAll<HTMLElement>(".experience-card")
            
            items.forEach((item, index) => {
              setTimeout(() => {
                // Using standard style manipulation for maximum compatibility in Next.js
                item.style.opacity = "1"
                item.style.transform = "translateY(0) scale(1)"
              }, index * 250)
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
      role: "Backend Developer (MERN Specialist)",
      company: "Rehabionics Healthcare Pvt Ltd , Coimbatore",
      period: "Aug 2025 - Present",
      icon: <Rocket className="w-5 h-5" />,
      achievements: "Spearheaded the development of a scalable healthcare application using the MERN stack.Especially focused on optimizing backend performance and implementing secure API endpoints to handle sensitive medical data efficiently.",
      technologies: [
        { name: "Node.js", color: "#339933" },
        { name: "Postman", color: "#E34C26" },
        { name: "MongoDB", color: "#47A248" },
        { name: "Nodemailer", color: "#828282" },
        
      ],
    },
    {
      role: "Web Developer Intern",
      company: "SkillSync Technologies, Coimbatore",
      period: "Jul 2025 - Sep 2025",
      icon: <Code2 className="w-5 h-5" />,
      achievements: "Assisted in building and optimizing user interfaces with a focus on responsive design and interactive user experiences.",
      technologies: [
        { name: "React", color: "#61DAFB" },
        { name: "Tailwind CSS", color: "#06B6D4" },
        { name: "HTML", color: "#E34C26" },
        {name: "JavaScript", color: "#F7DF1E" },
      ],
    },
    {
      role: "Frontend Developer Intern",
      company: "NoviTech R&D Pvt Ltd",
      period: "Feb 2024 - Mar 2024",
      icon: <Laptop className="w-5 h-5" />,
      achievements: "Learned the fundamentals of frontend development and contributed to small projects, gaining hands-on experience with modern web technologies.",
      technologies: [
        { name: "HTML", color: "#E34C26" },
        { name: "CSS", color: "#5A67D8" },
        { name: "JavaScript", color: "#F7DF1E" },
      ],
    },
  ]

  return (
    <section id="experience" className="py-24 px-4 bg-[#030712] relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex flex-col items-center mb-20 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Calendar size={14} /> My Journey
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Work Experience
          </h2>
        </div>

        <div className="relative" ref={containerRef}>
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-blue-500/50 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div 
                key={idx} 
                className={`experience-card relative flex flex-col md:flex-row items-center gap-8 transition-all duration-1000 ease-out ${
                  idx % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
                style={{
                  opacity: 0,
                  transform: "translateY(2rem) scale(0.95)"
                }}
              >
                {/* Timeline Node */}
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full bg-[#030712] border-2 border-blue-500 flex items-center justify-center z-20 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                  <div className="text-blue-400">{exp.icon}</div>
                  <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-20" />
                </div>

                {/* Content Card */}
                <div className="w-full md:w-[45%] pl-12 md:pl-0">
                  <div className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-blue-500/50 hover:bg-white/[0.04] transition-all duration-500 shadow-xl">
                    <div className="inline-block px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-wider mb-4">
                      {exp.period}
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {exp.role}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-gray-400 text-sm mt-1 mb-4">
                      <MapPin size={14} className="text-blue-500" />
                      <span>{exp.company}</span>
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      {exp.achievements}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-[10px] font-bold rounded-md border transition-all"
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
                <div className="hidden md:block md:w-[45%]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}