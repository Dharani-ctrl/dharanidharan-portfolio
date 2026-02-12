import { Code2, Database, Zap, Shield } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Code2,
      title: "Web App Development",
      description: "Full-stack web applications built with modern technologies and best practices.",
    },
    {
      icon: Database,
      title: "Backend API Development",
      description: "Robust RESTful APIs with proper authentication, validation, and error handling.",
    },
    {
      icon: Zap,
      title: "UI/UX Integration",
      description: "Seamless integration of beautiful designs with responsive and interactive components.",
    },
    {
      icon: Shield,
      title: "Maintenance & Optimization",
      description: "Performance optimization, security audits, and continuous maintenance support.",
    },
  ]

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold">What I Offer</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive services tailored to bring your vision to life with quality and expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, idx) => {
            const IconComponent = service.icon
            return (
              <div
                key={idx}
                className="p-8 rounded-lg bg-card border border-border hover:border-primary/50 transition-all card-hover"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <IconComponent className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
