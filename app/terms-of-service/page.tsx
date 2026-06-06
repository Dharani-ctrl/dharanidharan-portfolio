import Link from "next/link"
import { ArrowLeft, FileText, Eye, Ban, Link2, AlertTriangle, CheckCircle } from "lucide-react"

export default function TermsOfService() {
  const sections = [
    {
      icon: Eye,
      title: "Acceptance of Terms",
      content:
        "By accessing or browsing dharan.codes, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use this website.",
    },
    {
      icon: FileText,
      title: "Purpose of This Website",
      content:
        "This is a personal developer portfolio created by Dharanidharan to showcase projects, skills, and professional experience. All content is provided for informational purposes only and may be updated without prior notice.",
    },
    {
      icon: CheckCircle,
      title: "Permitted Use",
      content:
        "You may view, browse, and share links to this website for personal or professional purposes. Referencing projects for hiring or collaboration is welcome and encouraged.",
    },
    {
      icon: Ban,
      title: "Prohibited Use",
      content:
        "You may not copy, redistribute, scrape, or reuse any content (including source code, design assets, or written text) without explicit written permission from the owner.",
    },
    {
      icon: FileText,
      title: "Contact Form",
      content:
        "All communications submitted through the contact form must be lawful, respectful, and professional. Spam, abuse, or malicious use is strictly prohibited.",
    },
    {
      icon: Link2,
      title: "Third-Party Links",
      content:
        "This website may link to third-party services such as GitHub, LinkedIn, and WhatsApp. These services are not under our control and we are not responsible for their content or practices.",
    },
    {
      icon: AlertTriangle,
      title: "Disclaimer of Liability",
      content:
        "Dharan.codes is provided on an \"as-is\" basis without warranties of any kind. We are not liable for any damages arising from the use or inability to use this website.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header Banner */}
      <div className="relative bg-gradient-to-br from-primary/10 via-background to-background border-b border-border py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-4">
            <FileText size={12} /> Legal
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-3">
            Terms of Service
          </h1>
          <p className="text-muted-foreground text-sm">
            Last updated: <span className="text-primary font-medium">June 2026</span> · Effective for{" "}
            <span className="font-medium text-foreground">dharan.codes</span>
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-6">
        <p className="text-muted-foreground text-lg leading-relaxed border-l-4 border-primary/40 pl-4">
          Please read these Terms carefully before using{" "}
          <span className="font-semibold text-foreground">Dharan.codes</span>. Your continued use of this
          site constitutes your acceptance of these terms.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 pt-4">
          {sections.map((section, idx) => {
            const Icon = section.icon
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,212,255,0.08)] group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Icon size={18} />
                  </div>
                  <h2 className="text-base font-bold text-foreground">{section.title}</h2>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{section.content}</p>
              </div>
            )
          })}
        </div>

        <p className="text-sm text-muted-foreground text-center pt-8 border-t border-border">
          Continued use of this website indicates your acceptance of these Terms of Service.
        </p>
      </div>

      {/* Back Button */}
      <Link href="/" className="fixed bottom-6 left-6 z-50 group">
        <div className="flex items-center gap-2 rounded-full border border-border bg-card/90 backdrop-blur-sm px-4 py-2 text-sm font-medium text-foreground shadow-lg transition-all duration-300 hover:border-primary hover:text-primary hover:shadow-[0_0_15px_rgba(0,212,255,0.2)]">
          <ArrowLeft size={16} className="transition-transform duration-300 group-hover:-translate-x-1" />
          Back to Home
        </div>
      </Link>
    </div>
  )
}
