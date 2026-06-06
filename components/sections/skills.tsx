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
import { Monitor, Server, Paintbrush, Cloud, Wrench } from "lucide-react"

const SkillPill = ({ name, color, icon: Icon, delay }: { name: string; color: string; icon: any; delay: number }) => (
  <div 
    className="stagger-pill opacity-0 translate-y-8 transition-all duration-500 ease-out flex items-center gap-2 px-4 py-2 rounded-full border bg-background cursor-pointer hover:scale-105 hover:-translate-y-1 group"
    style={{ 
      borderColor: `${color}40`,
      animationDelay: `${delay}ms`,
      boxShadow: `0 0 0 0 transparent`
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.boxShadow = `0 0 15px ${color}40`;
      e.currentTarget.style.borderColor = color;
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.boxShadow = `0 0 0 0 transparent`;
      e.currentTarget.style.borderColor = `${color}40`;
    }}
  >
    <Icon className="text-xl transition-transform duration-300 group-hover:scale-125" style={{ color }} />
    <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors duration-300">{name}</span>
  </div>
)

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate Categories
            const categories = entry.target.querySelectorAll(".stagger-category")
            categories.forEach((item, index) => {
              setTimeout(() => {
                (item as HTMLElement).style.opacity = "1";
                (item as HTMLElement).style.transform = "translateY(0) scale(1)";
              }, index * 200)
            })

            // Animate Pills
            const pills = entry.target.querySelectorAll(".stagger-pill")
            pills.forEach((item, index) => {
              setTimeout(() => {
                (item as HTMLElement).style.opacity = "1";
                (item as HTMLElement).style.transform = "translateY(0)";
              }, index * 50)
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
      icon: Monitor,
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
      icon: Server,
      skills: [
        { name: "Node.js", color: "#339933", icon: SiNodedotjs },
        { name: "JavaScript", color: "#F7DF1E", icon: SiJavascript },
        { name: "Postman", color: "#FF6C37", icon: SiPostman },
        { name: "MongoDB", color: "#47A248", icon: SiMongodb },
        { name: "Express", color: "#828282", icon: SiExpress },
        { name: "dotenv", color: "#ECD53F", icon: SiDotenv },
      ],
    },
    {
      title: "UI/UX Design",
      icon: Paintbrush,
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
        { name: "CI/CD", color: "#2088FF", icon: SiGithubactions },
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
        { name: "Firebase", color: "#FFCA28", icon: SiFirebase },
        { name: "Vercel", color: "#FFFFFF", icon: SiVercel },
      ],
    },
  ]


  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-background overflow-hidden" ref={sectionRef}>
      
      {/* Background Orbs (Removed pulse animation for scroll performance) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16 text-center stagger-category opacity-0 translate-y-10 transition-all duration-1000">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Skills & Expertise
          </h2>
          <div className="h-1 w-24 bg-primary rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl">
            A specialized stack focused on modern performance and user-centric design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon
            // Calculate a starting pill index based on previous categories for global staggering
            const startingPillIndex = skillCategories.slice(0, idx).reduce((acc, cat) => acc + cat.skills.length, 0);
            
            return (
              <div 
                key={idx} 
                className="stagger-category opacity-0 translate-y-10 scale-95 transition-all duration-1000 ease-out p-8 rounded-3xl bg-secondary/5 border border-white/5 hover:border-primary/20 hover:bg-secondary/10 transition-colors group/card"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover/card:bg-primary group-hover/card:text-background transition-colors duration-500">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIdx) => {
                    const globalIdx = startingPillIndex + skillIdx;
                    return (
                      <SkillPill 
                        key={skill.name} 
                        name={skill.name} 
                        color={skill.color} 
                        icon={skill.icon} 
                        delay={globalIdx * 50}
                      />
                    );
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}