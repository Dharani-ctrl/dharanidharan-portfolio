import { Github, Linkedin, MessageCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
export default function Footer() {
  const year = new Date().getFullYear();
  const whatsappNumber = "916385372905" 
  const whatsappMessage = encodeURIComponent(
    "Hi, I’d like to discuss a project with you. "
  )
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#060b14]">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24">
        {/* Main Grid */}
        <div className="grid gap-14 md:grid-cols-3 pb-16 md:pb-20 border-b border-white/10">
          {/* Brand */}
          <div className="space-y-6 text-center md:text-left">
            <div>
              <h3 className="text-3xl font-bold tracking-tight text-cyan-400">
                Dharanidharan
              </h3>
              <p className="mt-2 text-xs uppercase tracking-[0.25em] text-white/50">
                Full Stack Developer & Backend Developer
              </p>
            </div>

            <p className="mx-auto md:mx-0 max-w-sm text-sm leading-relaxed text-white/60">
              Blending design and engineering to build web experiences that are
              fast, functional, and delightful.
            </p>
          </div>

          {/* Connect */}
          <div className="flex flex-col items-center justify-center text-center gap-8">
            <p className="max-w-sm text-sm leading-relaxed text-white/60">
              Let’s stay connected — I post dev notes, design experiments, and
              thoughtful insights.
            </p>

            <div className="flex gap-8">
              {[
                { icon: MessageCircle, label: "Message" },
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Github, label: "GitHub" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="group relative text-white/50 transition-all duration-300 hover:text-cyan-400"
                >
                  <Icon size={22} />
                  <span className="absolute inset-0 rounded-full blur-md bg-cyan-400/20 opacity-0 group-hover:opacity-100 transition" />
                </a>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center md:items-end justify-center gap-6 text-center md:text-right">
            

            <a
              href={whatsappLink}
              className="group inline-flex items-center gap-3 rounded-full bg-cyan-400 px-7 py-3 text-sm font-semibold text-[#060b14] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(34,211,238,0.45)]"
            >
              Start a conversation
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between text-center sm:text-left text-xs text-white/50">
          <p>
            Copyright © {year}{" "}
            <span className="text-cyan-400 font-medium">Dharanidharan</span> —
            Built with purpose. Designed for impact.
          </p>

          <div className="flex flex-wrap justify-center sm:justify-end gap-6 sm:gap-8">
            <Link
              href="/privacy-policy"
              className="hover:text-cyan-400 transition"
            >
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-cyan-400 transition">
              Terms of Service
            </Link>
            <Link href="/cookie-policy" className="hover:text-cyan-400 transition">
              Cookie Preferences
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
