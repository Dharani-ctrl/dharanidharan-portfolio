"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function TermsOfService() {
  return (
    <section className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

      {/* Header */}
      <header className="mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
          Terms of Service
        </h1>
        <p className="text-sm text-muted-foreground">
          Last updated: February 2026
        </p>
      </header>

      {/* Content */}
      <div className="space-y-6 text-muted-foreground leading-relaxed text-base sm:text-[17px]">
        <p>
          This website is a personal developer portfolio created by{" "}
          <span className="font-medium text-foreground">Dharanidharan</span>.
          By accessing or using this site, you agree to the following terms.
        </p>

        <p>
          The content on this website is provided for informational and
          professional showcase purposes only. It may be updated or changed
          without notice.
        </p>

        <p>
          You may view, browse, and share links to this website for personal or
          professional use. You may not copy, redistribute, or reuse content
          (including code, designs, or text) without permission.
        </p>

        <p>
          Any communication submitted through the contact form must be lawful
          and respectful. Abuse, spam, or malicious use is prohibited.
        </p>

        <p>
          This website may contain links to third-party services (GitHub,
          LinkedIn, WhatsApp). I am not responsible for their content or
          practices.
        </p>

        <p>
          I am not liable for any damages arising from the use or inability to
          use this website.
        </p>

        <p>
          Continued use of this website indicates acceptance of these Terms of
          Service.
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
