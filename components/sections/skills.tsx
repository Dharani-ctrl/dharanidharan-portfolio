"use client"

import { useEffect, useRef } from "react"
import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiHtml5, SiCss3,
  SiNodedotjs, SiJavascript, SiPostman, SiMongodb, SiNodemon, SiExpress,
  SiFigma, SiAdobexd, SiFramer, SiAmazonwebservices, SiDocker, SiKubernetes,
  SiGithubactions, SiJest, SiWebpack, SiFirebase, SiVercel,
  SiThreedotjs, SiAdobeaftereffects, SiBlender, SiGreensock, SiGit,
  SiDotenv
} from "react-icons/si"
import { VscCode } from "react-icons/vsc" 
import { Layout, Database, Wrench, Cloud, Sparkles, Code2 } from "lucide-react"

// Individual Skill Item Component with Hover & Float Animations
const SkillBadge = ({ name, color, icon: Icon }: { name: string; color: string; icon: any }) => (
  <div className="group/skill flex flex-col items-center justify-center gap-3">
    <div 
      className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-2xl transition-all duration-500 group-hover/skill:-translate-y-3 group-hover/skill:rotate-3"
      style={{ 
        backgroundColor: `${color}10`, 
        border: `1px solid ${color}20`,
      }}
    >
      {/* Dynamic Glow Aura */}
      <div 
        className="absolute inset-0 rounded-2xl opacity-0 group-hover/skill:opacity-40 blur-2xl transition-opacity duration-500 scale-150"
        style={{ backgroundColor: color }}
      />
      
      {/* Icon with subtle pulse on hover */}
      <Icon 
        className="text-2xl sm:text-3xl z-10 transition-all duration-500 group-hover/skill:scale-110 group-hover/skill:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" 
        style={{ color: color }} 
      />
    </div>
    
    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground group-hover/skill:text-foreground transition-colors duration-300 text-center">
      {name}
    </span>
  </div>
)

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll(".stagger-item")
            items.forEach((item, index) => {
              setTimeout(() => {
                (item as HTMLElement).style.opacity = "1";
                (item as HTMLElement).style.transform = "translateY(0) scale(1)";
              }, index * 150) // Stagger speed
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Layout,
      skills: [
        { name: "React", color: "#61DAFB", icon: SiReact },
        { name: "Next.js", color: "#FFFFFF", icon: SiNextdotjs },
        { name: "TypeScript", color: "#3178C6", icon: SiTypescript },
        { name: "Tailwind", color: "#06B6D4", icon: SiTailwindcss },
        { name: "HTML5", color: "#E34C26", icon: SiHtml5 },
        { name: "CSS3", color: "#1572B6", icon: SiCss3 },
      ],
    },
    {
      title: "Backend Development",
      icon: Database,
      skills: [
        { name: "Node.js", color: "#339933", icon: SiNodedotjs },
        { name: "JavaScript", color: "#F7DF1E", icon: SiJavascript },
        { name: "Postman", color: "#E34C26", icon: SiPostman },
        { name: "MongoDB", color: "#47A248", icon: SiMongodb },
        { name: "Express", color: "#828282", icon: SiExpress },
        { name: "dotenv", color: "#E10098", icon: SiDotenv },
      ],
    },
    {
      title: "UI/UX Design",
      icon: Sparkles,
      skills: [
        { name: "Figma", color: "#F24E1E", icon: SiFigma },
        { name: "Framer", color: "#0055FF", icon: SiFramer },

        { name: "Responsive", color: "#00D4FF", icon: SiCss3 },
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: [
        { name: "AWS", color: "#FF9900", icon: SiAmazonwebservices },
        { name: "Docker", color: "#2496ED", icon: SiDocker },
        { name: "CI/CD", color: "#E95D2A", icon: SiGithubactions },
        { name: "Kubernetes", color: "#326CE5", icon: SiKubernetes },
      ],
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      skills: [
        { name: "VS Code", color: "#007ACC", icon: VscCode },
        { name: "Git", color: "#F05032", icon: SiGit },
        { name: "Jest", color: "#C21325", icon: SiJest },
        { name: "Webpack", color: "#8DD6F9", icon: SiWebpack },
        { name: "Firebase", color: "#FFA500", icon: SiFirebase },
        { name: "Vercel", color: "#FFFFFF", icon: SiVercel },
      ],
    },

  ]

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-background overflow-hidden" ref={sectionRef}>
      
      {/* Animated Background Orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[120px] animate-pulse delay-700" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4 stagger-item opacity-0 translate-y-10 transition-all duration-1000">
            Skills & Expertise
          </h2>
          <div className="h-1 w-24 bg-primary rounded-full mb-6 stagger-item opacity-0 translate-y-10 transition-all duration-1000 delay-100" />
          <p className="text-muted-foreground max-w-2xl stagger-item opacity-0 translate-y-10 transition-all duration-1000 delay-200">
            A specialized stack focused on modern performance and user-centric design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon
            return (
              <div 
                key={idx} 
                className="stagger-item opacity-0 translate-y-20 scale-95 transition-all duration-1000 ease-out p-8 rounded-3xl bg-secondary/5 border border-white/5 hover:border-primary/30 hover:bg-secondary/10 hover:shadow-[0_0_30px_rgba(0,0,0,0.2)] group/card"
              >
                <div className="flex items-center gap-4 mb-10 transition-transform duration-500 group-hover/card:translate-x-2">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover/card:bg-primary group-hover/card:text-white transition-all duration-500">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight">{category.title}</h3>
                </div>

                <div className="grid grid-cols-3 gap-y-10 gap-x-2">
                  {category.skills.map((skill, i) => (
                    <SkillBadge key={i} name={skill.name} color={skill.color} icon={skill.icon} />
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