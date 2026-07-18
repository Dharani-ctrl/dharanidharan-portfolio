"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Github, ArrowRight, Award, Star, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { 
  SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiTailwindcss,SiVite, SiGooglepay,
  SiTypescript, SiSocketdotio, SiStripe, SiFramer, SiPostgresql, SiGoogledrive, SiExpress, SiPostman, SiDocker, SiJenkins, SiChatbot, SiAmazonwebservices, SiJavascript
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
  const [showAllProjects, setShowAllProjects] = useState(false)

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
      title: "Arya Vysya's Penlli Connect \u2014 Community Matrimony Platform",
      description: "A full-stack community matrimony platform for the Arya Vysya community with Jathagam matching, real-time chat, and Razorpay payment integration.",
      tech: ["React", "Node.js", "Express", "Tailwind", "MongoDB", "Socket.io", "Razorpay", "JWT", "Olasms"],
      github: "",
      link: "https://penlliconnect.com",
      image: "/Matrimony project.png",
      className: "lg:col-span-1 h-[280px]",
      featured: true
    },
    {
      title: "Food Waste Reduction",
      description: "A platform to reduce food waste by connecting donors with those in need.",
      tech: ["React", "Node.js", "Express", "Tailwind", "MongoDB"],
      github: "https://github.com/Dharani-ctrl/food-waste-reduction-client",
      link: "https://food-waste-reduction-client.vercel.app/",
      image: "/foodwaste.png", // Make sure to add this image to your public folder!
      className: "lg:col-span-1 h-[280px]",
      featured: true
    },
    {
      title: "Onroad Vehical BreakDown",
      description: "A platform to connect vehicle owners with mechanics for on-road assistance.",
      tech: ["React", "Node.js", "Express", "Tailwind", "MongoDB"],
      github: "https://github.com/Dharani-ctrl/Onroad-vehical-BreakDown-client",
      link: "https://onroad-vehical-break-down-client.vercel.app",
      image: "/onroad.png", // Make sure to add this image to your public folder!
      className: "lg:col-span-1 h-[280px]",
    },
    {
      title: "Online Home Appliances Services",
      description: "A platform for online booking and repairing services for home appliances.",
      tech: ["React", "Node.js", "Express", "Tailwind", "MongoDB"],
      github: "https://github.com/Dharani-ctrl/Online-Home-Appliances-client",
      link: "https://online-home-appliances-client.vercel.app/",
      image: "/homeservice.png", // Make sure to add this image to your public folder!
      className: "lg:col-span-1 h-[280px]",
    },
    {
      title: "Online Requiments portal",
      description: "A portal for posting Job and Interview Requests and schedule them.",
      tech: ["React", "Node.js", "Express", "Tailwind", "MongoDB"],
      github: "https://github.com/Dharani-ctrl/Recrutiment-portal-client",
      link: "https://recrutiment-portal-client.vercel.app",
      image: "/jobportal.png", // Make sure to add this image to your public folder!
      className: "lg:col-span-1 h-[280px]",
      featured: true
    },

    {
      title: "AI Based CI/CD Software Delivery",
      description: "AI improves accuracy and efficiency in software pipelines.",
      tech: ["React", "Node.js", "Docker", "Jenkins", "AI", "AWS"],
      github: "https://github.com/Dharani-ctrl/jenkins-ci-cd-project",
      link: "#",
      image: "/CICD.png",
      className: "lg:col-span-1 h-[280px]", 
      featured: true
    },
    
    {
      title: "SLMS",
      description: "Student lab management system with real-time updates and analytics.",
      tech: ["React", "Node.js", "MongoDB", "Express", "Postman"],
      github: "https://github.com/Dharani-ctrl/Student-Lab-Management",
      link: "#",
      image: "/SLM.png",
      className: "lg:col-span-1 h-[280px]",
    },
    {
      title: "E-Commerce Website",
      description: "React UI E-commerce platform with payment integration.",
      tech: ["React", "Tailwind", "Vite", "Google Pay"],
      github: "https://github.com/Dharani-ctrl/react-card-app",
      link: "https://github.com/Dharani-ctrl/react-card-app",
      image: "/E-Com.jpg",
      className: "lg:col-span-1 h-[280px]",
    },
    {
      title: "Backend File Upload Viewer",
      description: "Server side file management and viewer system.",
      tech: ["Node.js", "Express", "Google Drive", "Postman"],
      github: "https://github.com/Dharani-ctrl/Backend-Work-flow",
      link: "https://github.com/Dharani-ctrl/Backend-Work-flow",
      image: "/Server.jpg",
      className: "lg:col-span-2 h-[280px]",
    },
  ]

  const visibleProjects = showAllProjects ? projects : projects.slice(0, 4)

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative">
      <div className="max-w-6xl mx-auto" ref={containerRef}>
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Projects & Work
          </h2>
          <div className="h-1 w-24 bg-primary rounded-full mb-6" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project, idx) => (
            <div
              key={idx}
              className={`project-card group relative rounded-2xl overflow-hidden border border-border bg-card transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,212,255,0.15)] hover:border-primary/50 ${project.className} ${
                showAllProjects ? 'opacity-100 translate-y-0 scale-100 animate-in fade-in zoom-in duration-500' : 'opacity-0 translate-y-10 scale-95'
              }`}
            >
              {/* Full Image Layer */}
              <div className="absolute inset-0 w-full h-full overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-40 transition-all duration-700 group-hover:scale-110"
                />
                {/* Always-dark overlay on mobile, hover-enhanced on desktop */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20 md:from-background md:via-background/80 md:to-transparent opacity-90 md:group-hover:bg-black/80 transition-all duration-500" />
              </div>

              {/* Badges */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-20">
                  <span className="px-2 py-1 bg-primary/90 text-background text-[10px] font-bold uppercase tracking-wider rounded flex items-center gap-1 shadow-lg shadow-primary/20">
                    <Star size={10} className="fill-background" /> Featured
                  </span>
                </div>
              )}

              {/* Content Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 z-10 flex flex-col justify-end h-full">
                <div className="md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-bold text-foreground tracking-tight mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2 group-hover:line-clamp-none transition-all">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t, i) => {
                      const IconData = techIcons[t];
                      return (
                        <div key={i} className="flex items-center gap-1.5 bg-secondary px-2 py-1 rounded-md border border-border">
                          {IconData && <IconData.icon style={{ color: IconData.color }} className="text-[10px]" />}
                          <span className="text-[10px] font-bold text-foreground/80 uppercase tracking-wider">{t}</span>
                        </div>
                      )
                    })}
                  </div>

                  {/* Actions — always visible on mobile, hover-reveal on desktop */}
                  <div className="flex gap-2 pt-2 border-t border-white/20 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button variant="default" size="sm" className="w-full bg-primary hover:bg-primary/90 text-background gap-2">
                          <ExternalLink size={14} /> Live Demo
                        </Button>
                      </a>
                    )}
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button variant="outline" size="sm" className="w-full hover:bg-black hover:text-white gap-2 border-primary/20 transition-colors">
                          <Github size={14} /> Code
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More / Show Less Button */}
        {projects.length > 4 && (
          <div className="mt-12 flex justify-center">
            <Button
              onClick={() => setShowAllProjects(!showAllProjects)}
              variant="outline"
              size="lg"
              className="group border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
            >
              {showAllProjects ? (
                <>
                  Show Less <ChevronUp size={18} className="ml-2 group-hover:-translate-y-1 transition-transform" />
                </>
              ) : (
                <>
                  Show More <ChevronDown size={18} className="ml-2 group-hover:translate-y-1 transition-transform" />
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}