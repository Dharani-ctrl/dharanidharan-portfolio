import { CheckCircle2 } from "lucide-react"

export default function WhyHireMe() {
  const reasons = [
    "Full-stack expertise with hands-on experience in modern technologies",
    "Strong problem-solving skills and ability to break down complex challenges",
    "Commitment to clean, maintainable code and best practices",
    "Fast learner who stays updated with industry trends",
    "Excellent communication and collaboration skills with teams",
  ]

  return (
    <section id="why-hire" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Why Me?
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold">Why Hire Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here's what I bring to the table for your next project.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {reasons.map((reason, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="text-primary" size={24} />
                </div>
                <p className="text-muted-foreground leading-relaxed">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
