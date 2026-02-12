
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicy() {
  return (
    <section className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

      {/* Header */}
      <header className="mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
          Privacy Policy
        </h1>
        <p className="text-sm text-muted-foreground">
          Last updated: February 2026
        </p>
      </header>

      {/* Content */}
      <div className="space-y-6 text-muted-foreground leading-relaxed text-base sm:text-[17px]">
        <p>
          This website is a personal developer portfolio created and maintained
          by <span className="font-medium text-foreground">Dharanidharan</span>{" "}
          to showcase projects, skills, and professional experience. Your
          privacy is respected and protected.
        </p>

        <p>
          Any information you voluntarily provide through the contact form —
          such as your name, email address, and message — is used strictly to
          respond to your inquiry or communication request. Your data is never
          sold, rented, or shared with third parties.
        </p>

        <p>
          This website may use cookies or basic analytics tools to improve
          performance and user experience. These tools do not collect
          personally identifiable information.
        </p>

        <p>
          External links on this website (including GitHub, LinkedIn, and
          WhatsApp) are governed by their own privacy policies. Once you leave
          this site, their policies apply.
        </p>

        <p>
          Reasonable security measures are taken to protect submitted data.
          However, no method of transmission over the internet can be
          guaranteed to be 100% secure.
        </p>

        <p>
          If you have any questions regarding this Privacy Policy, feel free to
          contact me:
          <br />
          <span className="font-medium text-foreground">
            tdharanidharan340@gmail.com
          </span>
        </p>

        <p>
          By using this website, you agree to the terms outlined in this Privacy
          Policy.
        </p>
      </div>

      {/* Sticky Back to Home Button */}
      <Link
        href="/"
        className="fixed bottom-6 left-6 z-50 group"
      >
        <div className="flex items-center gap-2 rounded-full border border-border bg-card/90 backdrop-blur px-4 py-2 text-sm font-medium text-foreground shadow-lg transition-all duration-300 hover:border-primary hover:text-primary hover:shadow-primary/30">
          <ArrowLeft
            size={16}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />
          Back to Home
        </div>
      </Link>

    </section>
  )
}
