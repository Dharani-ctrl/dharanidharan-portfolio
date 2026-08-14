"use client"

import { useEffect, useRef } from "react"
import { MapPin, Calendar, Briefcase } from "lucide-react"

const monthsMap: { [key: string]: number } = {
  jan: 0, january: 0,
  feb: 1, february: 1,
  mar: 2, march: 2,
  apr: 3, april: 3,
  may: 4,
  jun: 5, june: 5,
  jul: 6, july: 6,
  aug: 7, august: 7,
  sep: 8, sept: 8, september: 8,
  oct: 9, october: 9,
  nov: 10, november: 10,
  dec: 11, december: 11
};

function getDurationText(periodStr: string): string {
  const parts = periodStr.split("-").map(s => s.trim());
  if (parts.length !== 2) return "";

  const parsePart = (str: string) => {
    if (str.toLowerCase().includes("present")) {
      const now = new Date();
      return { month: now.getMonth(), year: now.getFullYear() };
    }
    const match = str.match(/([a-zA-Z]+)\s*(\d{4})/);
    if (!match) return null;
    const mStr = match[1].toLowerCase().slice(0, 3);
    const year = parseInt(match[2], 10);
    const month = monthsMap[mStr] !== undefined ? monthsMap[mStr] : 0;
    return { month, year };
  };

  const start = parsePart(parts[0]);
  const end = parsePart(parts[1]);

  if (!start || !end) return "";

  const totalMonths = (end.year * 12 + end.month) - (start.year * 12 + start.month) + 1;
  if (totalMonths <= 0) return "1 mo";

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const yearText = years > 0 ? `${years} ${years === 1 ? "yr" : "yrs"}` : "";
  const monthText = months > 0 ? `${months} ${months === 1 ? "mo" : "mos"}` : "";

  if (years > 0 && months > 0) {
    return `${yearText} ${monthText}`;
  }
  return yearText || monthText || "1 mo";
}

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
      company: "Ascentz Technologies",
      location: "Coimbatore",
      period: "May 2026 - Present",
      achievements: "Full-stack software development, web maintenance, and system engineering. Building scalable MERN stack applications using React.js and Node.js, engineering secure REST APIs, performing automated Selenium testing, containerizing services with Docker, and overseeing continuous deployment and website maintenance.",
      technologies: [
        { name: "React.js", color: "#61DAFB" },
        { name: "Node.js", color: "#339933" },
        { name: "Express.js", color: "#A8A8A8" },
        { name: "MongoDB", color: "#47A248" },
        { name: "DevOps", color: "#FF9900" },
        { name: "Docker", color: "#2496ED" },
        { name: "Selenium Testing", color: "#43B02A" },
        { name: "Deployment", color: "#2088FF" },
        { name: "Maintenance", color: "#38BDF8" },
        { name: "Postman", color: "#FF6C37" },
        { name: "Nodemailer", color: "#828282" },
      ],
    },
    {
      role: "Backend Developer (MERN Specialist)",
      company: "Rehabionics Healthcare Pvt Ltd",
      location: "Coimbatore",
      period: "Aug 2025 - July 2026",
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
    <section id="experience" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-3">
            <Briefcase size={14} /> My Journey
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-outfit gradient-text tracking-tight mb-3">
            Work Experience
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full mb-4" />
          <p className="text-muted-foreground text-sm sm:text-base max-w-xl">
            Hands-on software engineering roles, backend API architecture, and web development experience.
          </p>
        </div>

        <div className="relative pl-6 sm:pl-8 md:pl-0" ref={containerRef}>
          {/* Vertical Timeline Line */}
          <div className="absolute left-[15px] md:left-[39px] top-4 bottom-0 w-[2px] bg-gradient-to-b from-primary via-primary/30 to-transparent" />

          <div className="space-y-8 sm:space-y-12">
            {experiences.map((exp, idx) => {
              const duration = getDurationText(exp.period);

              return (
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
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-background border-2 border-primary flex items-center justify-center z-20 shadow-[0_0_15px_rgba(0,212,255,0.3)] relative">
                      <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-base sm:text-lg font-outfit">
                        {exp.company.charAt(0)}
                      </div>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="w-full">
                    <div className="group relative p-6 sm:p-8 rounded-2xl bg-card/60 border border-border/80 hover:border-primary/40 backdrop-blur transition-all duration-500 shadow-xl hover:-translate-y-1 hover:shadow-primary/10">

                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-3 sm:gap-4">
                        <div>
                          <h3 className="text-xl sm:text-2xl font-bold font-outfit text-foreground group-hover:text-primary transition-colors duration-300">
                            {exp.role}
                          </h3>
                          <div className="flex flex-wrap items-center gap-2 text-muted-foreground text-xs sm:text-sm font-medium mt-1">
                            <span className="text-foreground font-semibold">{exp.company}</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                            <span className="flex items-center gap-1">
                              <MapPin size={14} className="text-primary" /> {exp.location}
                            </span>
                          </div>
                        </div>

                        {/* Period & Calculated Duration Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-primary/10 text-primary text-xs sm:text-sm font-bold shrink-0 border border-primary/20 shadow-sm">
                          <Calendar size={14} />
                          <span>{exp.period}</span>
                          {duration && (
                            <>
                              <span className="w-1 h-1 rounded-full bg-primary/60" />
                              <span className="text-cyan-400 font-extrabold">{duration}</span>
                            </>
                          )}
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                        {exp.achievements}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 text-xs font-semibold rounded-lg border transition-all hover:scale-105 cursor-default"
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
              );
            })}
          </div>
        </div>
      </div>
    </section>
  )
}