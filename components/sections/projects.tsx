"use client"

import { useEffect, useRef } from "react"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { 
  SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiTailwindcss,SiVite, SiGooglepay,
  SiTypescript, SiSocketdotio, SiStripe, SiFramer, SiPostgresql, SiGoogledrive, SiExpress, SiPostman, SiDocker, SiJenkins, SiChatbot, SiAmazonwebservices
} from "react-icons/si"

const techIcons: { [key: string]: { icon: any; color: string } } = {
  "React": { icon: SiReact, color: "#61DAFB" },
  "Next.js": { icon: SiNextdotjs, color: "#FFFFFF" },
  "Node.js": { icon: SiNodedotjs, color: "#339933" },
  "MongoDB": { icon: SiMongodb, color: "#47A248" },
  "Tailwind": { icon: SiTailwindcss, color: "#06B6D4" },
  "TypeScript": { icon: SiTypescript, color: "#3178C6" },
  "Socket.io": { icon: SiSocketdotio, color: "#FFFFFF" },
  "Stripe": { icon: SiStripe, color: "#635BFF" },
  "Framer": { icon: SiFramer, color: "#0055FF" },
  "Postgres": { icon: SiPostgresql, color: "#336791" },
  "Vite": { icon: SiVite, color: "#646CFF" },
  "Google Pay": { icon: SiGooglepay, color: "#4285F4" },
  "Google Drive": { icon: SiGoogledrive, color: "#4285F4" },
"Express": { icon: SiExpress, color: "#828282" },
"Postman": { icon: SiPostman, color: "#E34C26" },
"Docker": { icon: SiDocker, color: "#2496ED" },
"Jenkins": { icon: SiJenkins, color: "#D24939" },
"AI": { icon: SiChatbot, color: "#4CAF50" },
"AWS": { icon: SiAmazonwebservices, color: "#FF9900" },
};

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll(".project-card")
            items.forEach((item, index) => {
              setTimeout(() => {
                (item as HTMLElement).style.opacity = "1";
                (item as HTMLElement).style.transform = "translateY(0) scale(1)";
              }, index * 80)
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

  const projects = [
    {
      title: "AI Based CI/CD Software Delivery (Jenkins) ",
      description: "AI improves accuracy and efficiency in software pipelines.",
      tech: ["React", "Node.js", "Docker", "Jenkins", "AI", "AWS"],
      // link: "#",
      github: "https://github.com/Dharani-ctrl/jenkins-ci-cd-project",
      image: "/CICD.png",
      className: "lg:col-span-2 h-[260px]", 
    },
    {
      title: "SLMS ",
      description: "Student lab management system with real-time updates and analytics Using MERN Stack.",
      tech: ["React", "Node.js", "MongoDB", "Express", "Postman"],
      
      github: "https://github.com/Dharani-ctrl/Student-Lab-Management",
      image: "/SLM.png",
      className: "lg:col-span-1 h-[260px]",
    },
    {
      title: "E-Commerce Website",
      description: "React UI E-commerce platform with payment integration .",
      tech: ["React", "Tailwind", "Vite", "Google Pay"],
      // link: "https://github.com/Dharani-ctrl/react-card-app",
      github: "https://github.com/Dharani-ctrl/react-card-app",
      image: "/E-Com.jpg",
      className: "lg:col-span-1 h-[260px]",
    },
    {
      title: "Backend File Upload Viewer",
      description: "Server side file management and viewer system (Node.js, Express.js).",
      tech: ["Node.js", "Express", "Google Drive", "Postman"],
      // link: "https://github.com/Dharani-ctrl/Backend-Work-flow",
      github: "https://github.com/Dharani-ctrl/Backend-Work-flow",
      image: "/Server.jpg",
      className: "lg:col-span-2 h-[260px]",
    },
  ]

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#030712]">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">
            Projects
          </h2>
          <div className="h-1 w-8 bg-blue-600 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" ref={containerRef}>
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`project-card group relative rounded-2xl overflow-hidden border border-white/10 bg-[#0a0f1c] opacity-0 translate-y-6 scale-[0.98] transition-all duration-500 hover:border-blue-500/50 ${project.className}`}
            >
              {/* Full Bright Image Layer */}
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-75 transition-transform duration-700 group-hover:scale-110"
                />
                {/* Subtle bottom-only gradient to ensure text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              </div>

              {/* Glassmorphism Content Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-5 backdrop-blur-md bg-black/40 border-t border-white/10 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                <div className="flex flex-col">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-xl font-bold text-white tracking-tight">{project.title}</h3>
                    <div className="flex gap-2">
                      <a href={project.github} className="text-gray-300 hover:text-white transition-colors">
                        <Github size={18} />
                      </a>
                      <a href={project.link} className="text-gray-300 hover:text-blue-400 transition-colors">
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                  
                  <p className="text-gray-200 text-sm mb-3 line-clamp-1 group-hover:line-clamp-none">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => {
                      const IconData = techIcons[t];
                      return (
                        <div key={i} className="flex items-center gap-1.5 bg-white/10 px-2 py-0.5 rounded border border-white/10">
                          {IconData && <IconData.icon style={{ color: IconData.color }} className="text-[10px]" />}
                          <span className="text-[10px] font-bold text-white uppercase tracking-wider">{t}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}