import Link from "next/link"
import { ArrowLeft, Shield, Eye, Lock, Mail, ExternalLink } from "lucide-react"

export default function PrivacyPolicy() {
  const sections = [
    {
      icon: Eye,
      title: "Information We Collect",
      content:
        "This is a personal developer portfolio by Dharanidharan. When you use the contact form, we may collect your name, email address, and message content solely to respond to your inquiry. We do not collect any other personal data.",
    },
    {
      icon: Lock,
      title: "How We Use Your Information",
      content:
        "Any information you voluntarily submit is used exclusively to respond to your message or communication request. Your data is never sold, rented, shared, or used for marketing purposes.",
    },
    {
      icon: Shield,
      title: "Analytics & Cookies",
      content:
        "This website may use Vercel Analytics or similar privacy-friendly tools to understand general traffic patterns. These tools do not collect personally identifiable information. See our Cookie Policy for more details.",
    },
    {
      icon: ExternalLink,
      title: "Third-Party Links",
      content:
        "External links (GitHub, LinkedIn, WhatsApp) are governed by their own privacy policies. Once you leave dharan.codes, those policies apply and we are not responsible for their content or practices.",
    },
    {
      icon: Lock,
      title: "Data Security",
      content:
        "Reasonable security measures are in place to protect any submitted data. However, no transmission method over the internet is guaranteed to be 100% secure.",
    },
    {
      icon: Mail,
      title: "Contact",
      content:
        "If you have any questions about this Privacy Policy, reach out at tdharanidharan340@gmail.com and we will respond as quickly as possible.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header Banner */}
      <div className="relative bg-gradient-to-br from-primary/10 via-background to-background border-b border-border py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-4">
            <Shield size={12} /> Legal
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-3">
            Privacy Policy
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
          Your privacy is important. This policy explains how{" "}
          <span className="font-semibold text-foreground">Dharan.codes</span> handles any information
          collected through this portfolio website.
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
          By using this website, you agree to the terms outlined in this Privacy Policy.
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
