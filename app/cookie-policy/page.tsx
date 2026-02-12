"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function CookiePolicy() {
  return (
    <section className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

      {/* Header */}
      <header className="mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
          Cookie Policy
        </h1>
        <p className="text-sm text-muted-foreground">
          Last updated: February 2026
        </p>
      </header>

      {/* Content */}
      <div className="space-y-6 text-muted-foreground leading-relaxed text-base sm:text-[17px]">
        <p>
          This website uses cookies to enhance user experience and ensure smooth
          functionality.
        </p>

        <p>
          Cookies are small text files stored on your device that help analyze
          website usage and performance. They do not personally identify you.
        </p>

        <p>
          This portfolio may use:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Essential cookies for site functionality</li>
          <li>Analytics cookies to understand visitor behavior</li>
        </ul>

        <p>
          No sensitive personal information is stored using cookies.
        </p>

        <p>
          You can choose to disable cookies through your browser settings.
          Disabling cookies may affect certain features of the site.
        </p>

        <p>
          Third-party services linked from this site may use their own cookies,
          governed by their respective policies.
        </p>

        <p>
          By continuing to browse this website, you consent to the use of
          cookies as described above.
        </p>
      </div>

      {/* Back Button */}
      <Link href="/" className="fixed bottom-6 left-6 z-50 group">
        <div className="flex items-center gap-2 rounded-full border border-border bg-card/90 backdrop-blur px-4 py-2 text-sm font-medium transition-all hover:border-primary hover:text-primary hover:shadow-primary/30">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </div>
      </Link>
    </section>
  )
}
