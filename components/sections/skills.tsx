"use client"

import { useEffect, useRef } from "react"
import { Code2, Database, Layout, Wrench } from "lucide-react"

export default function Skills() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll(".stagger-item")
            items.forEach((item, index) => {
              setTimeout(() => {
                item.style.animation = "stagger 0.6s ease-out forwards"
              }, index * 100)
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Layout,
      skills: [
        { name: "React", color: "#61DAFB", hoverBg: "from-blue-400 to-cyan-300" },
        { name: "Next.js", color: "#000000", hoverBg: "from-gray-800 to-black" },
        { name: "TypeScript", color: "#3178C6", hoverBg: "from-blue-500 to-blue-600" },
        { name: "Tailwind CSS", color: "#06B6D4", hoverBg: "from-cyan-400 to-cyan-500" },
        { name: "HTML5", color: "#E34C26", hoverBg: "from-orange-500 to-red-500" },
        { name: "CSS3", color: "#1572B6", hoverBg: "from-blue-400 to-blue-600" },
      ],
    },
    {
      title: "Backend Development",
      icon: Code2,
      skills: [
        { name: "Node.js", color: "#339933", hoverBg: "from-green-500 to-green-600" },
        { name: "Python", color: "#3776AB", hoverBg: "from-blue-400 to-blue-600" },
        { name: "PostgreSQL", color: "#336791", hoverBg: "from-blue-500 to-indigo-600" },
        { name: "MongoDB", color: "#13AA52", hoverBg: "from-green-500 to-emerald-600" },
        { name: "REST APIs", color: "#FF6C37", hoverBg: "from-orange-400 to-orange-600" },
        { name: "GraphQL", color: "#E10098", hoverBg: "from-pink-500 to-red-500" },
      ],
    },
    {
      title: "UI/UX Design",
      icon: Layout,
      skills: [
        { name: "Figma", color: "#F24E1E", hoverBg: "from-orange-500 to-red-500" },
        { name: "Responsive Design", color: "#00D4FF", hoverBg: "from-cyan-400 to-blue-500" },
        { name: "Wireframing", color: "#667EEA", hoverBg: "from-indigo-500 to-purple-600" },
        { name: "Prototyping", color: "#9B59B6", hoverBg: "from-purple-500 to-pink-600" },
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: Wrench,
      skills: [
        { name: "AWS", color: "#FF9900", hoverBg: "from-orange-400 to-yellow-500" },
        { name: "Docker", color: "#2496ED", hoverBg: "from-blue-500 to-cyan-600" },
        { name: "CI/CD", color: "#E95D2A", hoverBg: "from-orange-500 to-red-600" },
        { name: "Kubernetes", color: "#326CE5", hoverBg: "from-blue-500 to-indigo-600" },
      ],
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      skills: [
        { name: "VS Code", color: "#007ACC", hoverBg: "from-blue-500 to-blue-700" },
        { name: "Jest", color: "#C21325", hoverBg: "from-red-500 to-pink-600" },
        { name: "Webpack", color: "#8DD6F9", hoverBg: "from-blue-300 to-cyan-400" },
        { name: "Redux", color: "#764ABC", hoverBg: "from-purple-500 to-indigo-600" },
        { name: "Firebase", color: "#FFA500", hoverBg: "from-yellow-400 to-orange-600" },
        { name: "Vercel", color: "#000000", hoverBg: "from-gray-800 to-black" },
      ],
    },
    {
      title: "Creative Skills",
      icon: Code2,
      skills: [
        { name: "UI Animation", color: "#00D4FF", hoverBg: "from-cyan-400 to-blue-500" },
        { name: "SVG Animation", color: "#FF6B6B", hoverBg: "from-red-400 to-pink-500" },
        { name: "3D Modeling", color: "#8338EC", hoverBg: "from-purple-500 to-pink-600" },
        { name: "Motion Graphics", color: "#FFBE0B", hoverBg: "from-yellow-400 to-orange-500" },
      ],
    },
  ]

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text">Skills & Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive toolkit built over years of development, always expanding and learning.
          </p>

          <div className="flex justify-center gap-8 mt-12 flex-wrap">
            {[
              { icon: Code2, color: "primary", delay: 0 },
              { icon: Database, color: "accent", delay: 1 },
              { icon: Layout, color: "primary", delay: 2 },
              { icon: Wrench, color: "accent", delay: 3 },
            ].map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={idx}
                  className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center float"
                  style={{ animationDelay: `${item.delay}s` }}
                >
                  <Icon className="text-primary" size={24} />
                </div>
              )
            })}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon
            return (
              <div
                key={idx}
                className="stagger-item p-6 rounded-lg bg-secondary/20 border border-primary/30 transition-all duration-300 hover:border-primary/80 group hover-glow"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-all group-hover:scale-110 group-hover:rotate-12">
                  <Icon className="text-primary" size={28} />
                </div>

                <h3 className="text-lg font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {category.title}
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {category.skills.map((skill, i) => (
                    <div
                      key={i}
                      className="group relative p-4 rounded-lg border border-primary/20 transition-all duration-300 hover:scale-110 cursor-pointer overflow-hidden flex flex-col items-center justify-center gap-2 min-h-24"
                      style={{
                        backgroundColor: `${typeof skill === "object" ? skill.color : skill}20`,
                        borderColor: typeof skill === "object" ? skill.color : skill,
                      }}
                    >
                      {/* Animated background on hover */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                        style={{
                          background: typeof skill === "object" ? `linear-gradient(135deg, ${skill.color} 0%, ${skill.color}80 100%)` : `linear-gradient(135deg, ${skill} 0%, ${skill}80 100%)`,
                        }}
                      ></div>

                      {/* Icon/Symbol - using colored circle */}
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm relative z-10 transition-all duration-300 group-hover:scale-125 group-hover:shadow-lg"
                        style={{
                          backgroundColor: typeof skill === "object" ? skill.color : skill,
                          color: "#0a0e27",
                          boxShadow: `0 0 15px ${typeof skill === "object" ? skill.color : skill}40`,
                        }}
                      >
                        {(typeof skill === "object" ? skill.name : skill).charAt(0).toUpperCase()}
                      </div>

                      {/* Text */}
                      <span
                        className="relative z-10 font-bold text-xs text-center transition-all duration-300 group-hover:text-white"
                        style={{
                          color: typeof skill === "object" ? skill.color : skill,
                        }}
                      >
                        {typeof skill === "object" ? skill.name : skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
