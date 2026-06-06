import Link from "next/link"
import { ArrowLeft, Cookie, Settings, BarChart2, Shield, ToggleLeft } from "lucide-react"

export default function CookiePolicy() {
  const sections = [
    {
      icon: Cookie,
      title: "What Are Cookies?",
      content:
        "Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences and understand how visitors interact with the site.",
    },
    {
      icon: Shield,
      title: "Essential Cookies",
      content:
        "These are required for the basic functionality of dharan.codes — such as maintaining your theme preference (light/dark mode). The site cannot function properly without these cookies.",
    },
    {
      icon: BarChart2,
      title: "Analytics Cookies",
      content:
        "This site may use Vercel Analytics to collect anonymised data about page views and traffic sources. This helps improve the website experience. No personally identifiable information is ever collected.",
    },
    {
      icon: Settings,
      title: "Preference Cookies",
      content:
        "These cookies remember your settings, such as your selected color theme, so the site looks the same on your next visit.",
    },
    {
      icon: ToggleLeft,
      title: "Managing Your Cookies",
      content:
        "You can disable cookies at any time through your browser settings. Note that disabling cookies may affect certain features such as theme persistence. Instructions vary by browser — check your browser's help section.",
    },
    {
      icon: Shield,
      title: "Third-Party Cookies",
      content:
        "External services linked from this site (such as GitHub or LinkedIn) may set their own cookies when you visit them. These are governed by their own cookie and privacy policies.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header Banner */}
      <div className="relative bg-gradient-to-br from-primary/10 via-background to-background border-b border-border py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-4">
            <Cookie size={12} /> Legal
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-3">
            Cookie Policy
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
          <span className="font-semibold text-foreground">Dharan.codes</span> uses cookies to provide
          a smooth and personalised experience. This policy explains what cookies we use and why.
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
          By continuing to browse <span className="text-foreground font-medium">dharan.codes</span>, you
          consent to the use of cookies as described in this policy.
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
