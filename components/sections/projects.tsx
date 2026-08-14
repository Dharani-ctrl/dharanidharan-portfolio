"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Github, Star, ChevronDown, ChevronUp, Layers, CreditCard, ShieldCheck, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { 
  SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiTailwindcss, SiVite, SiGooglepay,
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
  "Express": { icon: SiExpress, color: "#A8A8A8" },
  "Postman": { icon: SiPostman, color: "#FF6C37" },
  "Docker": { icon: SiDocker, color: "#2496ED" },
  "Jenkins": { icon: SiJenkins, color: "#D24939" },
  "AI": { icon: SiChatbot, color: "#10B981" },
  "AWS": { icon: SiAmazonwebservices, color: "#FF9900" },
  "Razorpay": { icon: CreditCard, color: "#00D4FF" },
  "JWT": { icon: ShieldCheck, color: "#A855F7" },
  "Olasms": { icon: MessageSquare, color: "#38BDF8" },
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
      title: "Arya Vysya's Penlli Connect — Community Matrimony Platform",
      description: "A full-stack community matrimony platform for the Arya Vysya community featuring Jathagam matching, real-time chat, and Razorpay payment integration.",
      tech: ["React", "Node.js", "Express", "Tailwind", "MongoDB", "Socket.io", "Razorpay", "JWT", "Olasms"],
      github: "",
      link: "https://penlliconnect.com",
      image: "/Matrimony project.png",
      featured: true
    },
    {
      title: "Food Waste Reduction Platform",
      description: "A digital ecosystem aimed at curbing food waste by seamlessly connecting surplus food donors with local communities and organizations in need.",
      tech: ["React", "Node.js", "Express", "Tailwind", "MongoDB"],
      github: "https://github.com/Dharani-ctrl/food-waste-reduction-client",
      link: "https://food-waste-reduction-client.vercel.app/",
      image: "/foodwaste.png",
      featured: true
    },
    {
      title: "Onroad Vehicle Breakdown Assistance",
      description: "A location-aware platform connecting stranded vehicle owners with nearby mechanics for instant on-road emergency assistance.",
      tech: ["React", "Node.js", "Express", "Tailwind", "MongoDB"],
      github: "https://github.com/Dharani-ctrl/Onroad-vehical-BreakDown-client",
      link: "https://onroad-vehical-break-down-client.vercel.app",
      image: "/onroad.png",
      featured: false
    },
    {
      title: "Online Home Appliances Repair Services",
      description: "An intuitive web portal for booking professional home appliance repair, maintenance, and tracking technician schedules online.",
      tech: ["React", "Node.js", "Express", "Tailwind", "MongoDB"],
      github: "https://github.com/Dharani-ctrl/Online-Home-Appliances-client",
      link: "https://online-home-appliances-client.vercel.app/",
      image: "/homeservice.png",
      featured: false
    },
    {
      title: "Online Recruitment & Hiring Portal",
      description: "A streamlined job portal for posting positions, reviewing candidate applications, and scheduling candidate interviews.",
      tech: ["React", "Node.js", "Express", "Tailwind", "MongoDB"],
      github: "https://github.com/Dharani-ctrl/Recrutiment-portal-client",
      link: "https://recrutiment-portal-client.vercel.app",
      image: "/jobportal.png",
      featured: true
    },
    {
      title: "AI-Based CI/CD Software Delivery",
      description: "Automated software delivery system leveraging AI insights for build optimization, test accuracy, and automated deployment pipelines.",
      tech: ["React", "Node.js", "Docker", "Jenkins", "AI", "AWS"],
      github: "https://github.com/Dharani-ctrl/jenkins-ci-cd-project",
      link: "#",
      image: "/CICD.png",
      featured: true
    },
    {
      title: "SLMS — Student Lab Management System",
      description: "Comprehensive student lab tracking platform featuring real-time equipment booking, usage logs, and administrative analytics.",
      tech: ["React", "Node.js", "MongoDB", "Express", "Postman"],
      github: "https://github.com/Dharani-ctrl/Student-Lab-Management",
      link: "#",
      image: "/SLM.png",
      featured: false
    },
    {
      title: "E-Commerce Digital Storefront",
      description: "Modern, responsive e-commerce web application featuring dynamic cart state management, checkout flows, and payment portal integrations.",
      tech: ["React", "Tailwind", "Vite", "Google Pay"],
      github: "https://github.com/Dharani-ctrl/react-card-app",
      link: "https://github.com/Dharani-ctrl/react-card-app",
      image: "/E-Com.jpg",
      featured: false
    },
    {
      title: "Backend File Upload & Document Viewer",
      description: "Secure server-side file management infrastructure with Google Drive storage API integration and interactive document viewing capabilities.",
      tech: ["Node.js", "Express", "Google Drive", "Postman"],
      github: "https://github.com/Dharani-ctrl/Backend-Work-flow",
      link: "https://github.com/Dharani-ctrl/Backend-Work-flow",
      image: "/Server.jpg",
      featured: false
    },
  ]

  const visibleProjects = showAllProjects ? projects : projects.slice(0, 4)

  return (
    <section id="projects" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-background relative">
      <div className="max-w-6xl mx-auto" ref={containerRef}>
        <div className="flex flex-col items-center mb-12 sm:mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-3">
            Featured Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-outfit tracking-tight gradient-text mb-3">
            Projects & Work
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full mb-4" />
          <p className="text-muted-foreground text-sm sm:text-base max-w-xl">
            Real-world applications, full-stack platforms, and specialized software systems built for performance and impact.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
          {visibleProjects.map((project, idx) => (
            <div
              key={idx}
              className={`project-card group rounded-2xl overflow-hidden border border-border/80 bg-card/60 backdrop-blur flex flex-col justify-between transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/40 ${
                showAllProjects ? 'opacity-100 translate-y-0 scale-100 animate-in fade-in zoom-in duration-500' : 'opacity-0 translate-y-8 scale-95'
              }`}
            >
              {/* Image Preview Container */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted/50 border-b border-border/60">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback gradient background if image doesn't load
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-3 right-3 z-10">
                    <span className="px-2.5 py-1 bg-primary text-background text-[10px] font-bold uppercase tracking-wider rounded-full flex items-center gap-1 shadow-md shadow-primary/20">
                      <Star size={10} className="fill-background" /> Featured
                    </span>
                  </div>
                )}
              </div>

              {/* Content Body */}
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold font-outfit text-foreground tracking-tight group-hover:text-primary transition-colors mb-2 leading-snug">
                    {project.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tech.map((t, i) => {
                      const IconData = techIcons[t];
                      const IconComp = IconData ? IconData.icon : Layers;
                      const iconColor = IconData ? IconData.color : "#00D4FF";
                      return (
                        <div key={i} className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-secondary/50 border border-border/60 text-foreground/90">
                          <IconComp style={{ color: iconColor }} className="text-xs shrink-0" />
                          <span className="text-[11px] font-semibold tracking-wide">{t}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2.5 pt-4 border-t border-border/60">
                  {project.link && project.link !== "#" ? (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button size="sm" className="w-full bg-primary hover:bg-primary/90 text-background gap-2 font-semibold text-xs sm:text-sm shadow-sm">
                        <ExternalLink size={14} /> Live Demo
                      </Button>
                    </a>
                  ) : null}
                  
                  {project.github ? (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button variant="outline" size="sm" className="w-full hover:bg-primary/10 hover:text-primary border-border hover:border-primary/40 gap-2 font-semibold text-xs sm:text-sm">
                        <Github size={14} /> View Code
                      </Button>
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More / Show Less Button */}
        {projects.length > 4 && (
          <div className="mt-10 sm:mt-12 flex justify-center">
            <Button
              onClick={() => setShowAllProjects(!showAllProjects)}
              variant="outline"
              size="lg"
              className="group border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 font-semibold"
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