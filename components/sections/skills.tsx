"use client"

import { useEffect, useRef } from "react"
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiHtml5, SiCss3,
  SiNodedotjs, SiJavascript, SiPostman, SiMongodb, SiExpress,
  SiFigma, SiAdobexd, SiFramer, SiAmazonwebservices, SiDocker,
  SiGithubactions, SiVercel, SiThreedotjs, SiGit
} from "react-icons/si"
import { VscCode } from "react-icons/vsc"
import { Monitor, Server, Paintbrush, Cloud } from "lucide-react"

const SkillPill = ({ name, color, icon: Icon, delay }: { name: string; color: string; icon: any; delay: number }) => (
  <div
    className="stagger-pill opacity-0 translate-y-6 transition-all duration-300 ease-out flex items-center gap-2 px-3.5 py-2 rounded-xl border bg-background/80 hover:bg-background cursor-pointer hover:scale-105 hover:-translate-y-0.5 group shadow-sm"
    style={{
      borderColor: `${color}45`,
      backgroundColor: `${color}0A`,
      animationDelay: `${delay}ms`,
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.boxShadow = `0 0 16px ${color}35`;
      e.currentTarget.style.borderColor = color;
      e.currentTarget.style.backgroundColor = `${color}18`;
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.boxShadow = `0 0 0 0 transparent`;
      e.currentTarget.style.borderColor = `${color}45`;
      e.currentTarget.style.backgroundColor = `${color}0A`;
    }}
  >
    <Icon className="text-lg sm:text-xl shrink-0 transition-transform duration-300 group-hover:scale-110" style={{ color }} />
    <span className="text-xs sm:text-sm font-semibold text-foreground/90 group-hover:text-foreground transition-colors">
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
            // Animate Categories
            const categories = entry.target.querySelectorAll(".stagger-category")
            categories.forEach((item, index) => {
              setTimeout(() => {
                (item as HTMLElement).style.opacity = "1";
                (item as HTMLElement).style.transform = "translateY(0) scale(1)";
              }, index * 150)
            })

            // Animate Pills
            const pills = entry.target.querySelectorAll(".stagger-pill")
            pills.forEach((item, index) => {
              setTimeout(() => {
                (item as HTMLElement).style.opacity = "1";
                (item as HTMLElement).style.transform = "translateY(0)";
              }, index * 40)
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
      count: "6 Techs",
      skills: [
        { name: "React", color: "#61DAFB", icon: SiReact },
        { name: "Next.js", color: "#FFFFFF", icon: SiNextdotjs },
        { name: "TypeScript", color: "#3178C6", icon: SiTypescript },
        { name: "Tailwind CSS", color: "#06B6D4", icon: SiTailwindcss },
        { name: "HTML5", color: "#E34C26", icon: SiHtml5 },
        { name: "CSS3", color: "#1572B6", icon: SiCss3 },
      ],
    },
    {
      title: "Backend Development",
      icon: Server,
      count: "6 Techs",
      skills: [
        { name: "Node.js", color: "#339933", icon: SiNodedotjs },
        { name: "Express.js", color: "#A8A8A8", icon: SiExpress },
        { name: "MongoDB", color: "#47A248", icon: SiMongodb },
        { name: "JavaScript", color: "#F7DF1E", icon: SiJavascript },
        { name: "Postman", color: "#FF6C37", icon: SiPostman },
        { name: "REST APIs", color: "#00D4FF", icon: Server },
      ],
    },
    {
      title: "UI/UX & Creative Design",
      icon: Paintbrush,
      count: "6 Techs",
      skills: [
        { name: "Figma", color: "#F24E1E", icon: SiFigma },
        { name: "Framer", color: "#0055FF", icon: SiFramer },
        { name: "Responsive Design", color: "#00D4FF", icon: SiCss3 },
        { name: "Adobe XD", color: "#FF61F6", icon: SiAdobexd },
        { name: "Wireframing", color: "#A855F7", icon: Paintbrush },
        { name: "Three.js & Motion", color: "#38BDF8", icon: SiThreedotjs },
      ],
    },
    {
      title: "DevOps, Tools & Cloud",
      icon: Cloud,
      count: "6 Techs",
      skills: [
        { name: "AWS", color: "#FF9900", icon: SiAmazonwebservices },
        { name: "Docker", color: "#2496ED", icon: SiDocker },
        { name: "Git & GitHub", color: "#F05032", icon: SiGit },
        { name: "Vercel", color: "#FFFFFF", icon: SiVercel },
        { name: "VS Code", color: "#007ACC", icon: VscCode },
        { name: "CI/CD Pipelines", color: "#2088FF", icon: SiGithubactions },
      ],
    },
  ]

  return (
    <section id="skills" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative bg-background overflow-hidden" ref={sectionRef}>
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[10%] left-[-5%] w-[35%] h-[35%] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[35%] h-[35%] bg-cyan-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-12 sm:mb-16 text-center stagger-category opacity-0 translate-y-8 transition-all duration-700">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-3">
            Technical Stack
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-outfit tracking-tight gradient-text mb-3">
            Skills & Expertise
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full mb-4" />
          <p className="text-muted-foreground text-sm sm:text-base max-w-xl">
            A specialized full-stack ecosystem built for modern performance, security, and exceptional user experience.
          </p>
        </div>

        {/* Balanced 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, idx) => {
            const CategoryIcon = category.icon
            const startingPillIndex = skillCategories.slice(0, idx).reduce((acc, cat) => acc + cat.skills.length, 0);

            return (
              <div
                key={idx}
                className="stagger-category opacity-0 translate-y-8 scale-[0.98] transition-all duration-700 ease-out p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-card/60 border border-border/80 hover:border-primary/40 backdrop-blur shadow-xl hover:shadow-primary/5 flex flex-col justify-between group/card"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-border/60">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 sm:p-3 rounded-xl bg-primary/10 border border-primary/20 text-primary group-hover/card:bg-primary group-hover/card:text-background transition-colors duration-500 shrink-0">
                        <CategoryIcon size={22} />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold font-outfit tracking-tight text-foreground">
                        {category.title}
                      </h3>
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                      {category.count}
                    </span>
                  </div>

                  {/* Skill Pills */}
                  <div className="flex flex-wrap gap-2.5 sm:gap-3">
                    {category.skills.map((skill, skillIdx) => {
                      const globalIdx = startingPillIndex + skillIdx;
                      return (
                        <SkillPill
                          key={skill.name}
                          name={skill.name}
                          color={skill.color}
                          icon={skill.icon}
                          delay={globalIdx * 40}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}