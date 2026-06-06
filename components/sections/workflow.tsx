"use client"

import { Lightbulb, Layers, Code2, Rocket } from "lucide-react"

export default function Workflow() {
  const steps = [
    {
      icon: Lightbulb,
      title: "1. Discovery & Planning",
      description: "Understanding the project requirements, target audience, and defining the optimal tech stack and architecture.",
    },
    {
      icon: Layers,
      title: "2. UI/UX Design",
      description: "Creating wireframes and high-fidelity mockups, ensuring a seamless, intuitive, and visually stunning user experience.",
    },
    {
      icon: Code2,
      title: "3. Development",
      description: "Writing clean, scalable, and maintainable code using the MERN stack and modern development practices.",
    },
    {
      icon: Rocket,
      title: "4. Deployment",
      description: "Thorough testing followed by deploying the application to production, ensuring security and high performance.",
    },
  ]

  return (
    <section id="workflow" className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Process
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            How I Work
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A structured, agile approach to transforming ideas into production-ready software.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-12 md:gap-8 relative">
          {/* Connecting Line for Desktop */}
          <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent z-0" />

          {/* Connecting Line for Mobile */}
          <div className="block md:hidden absolute top-10 bottom-10 left-12 w-[2px] bg-gradient-to-b from-primary/30 to-transparent z-0" />

          {steps.map((step, idx) => {
            const IconComponent = step.icon
            return (
              <div
                key={idx}
                className="relative z-10 flex flex-row md:flex-col items-start md:items-center text-left md:text-center group gap-6 md:gap-0"
              >
                {/* Icon Circle */}
                <div className="flex-shrink-0 w-24 h-24 rounded-full bg-card border-2 border-border group-hover:border-primary/50 flex items-center justify-center md:mb-6 transition-all duration-500 shadow-lg group-hover:shadow-[0_0_20px_rgba(0,212,255,0.2)] md:group-hover:-translate-y-2">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white text-primary transition-colors duration-500">
                    <IconComponent size={28} />
                  </div>
                </div>
                
                {/* Content */}
                <div className="pt-2 md:pt-0">
                  <h3 className="text-xl font-bold mb-2 md:mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
