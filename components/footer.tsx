"use client"

import { Github, Linkedin, MessageCircle, ArrowRight, ArrowUp } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const year = new Date().getFullYear();
  
  const whatsappNumber = "916385372905" 
  const whatsappMessage = encodeURIComponent(
    "Hi, I’d like to connect with you. "
  )
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  const socialLinks = [
    { icon: MessageCircle, label: "WhatsApp", href: whatsappLink, hoverColor: "hover:text-green-500", glow: "bg-green-500/20" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/dharanidharant/", hoverColor: "hover:text-[#0077b5]", glow: "bg-[#0077b5]/20" },
    { icon: Github, label: "GitHub", href: "https://github.com/Dharani-ctrl", hoverColor: "hover:text-[#2ea043]", glow: "bg-[#2ea043]/20" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden bg-[#060b14]">
      {/* Animated Gradient Border Top */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 shimmer" />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24">
        {/* Main Grid */}
        <div className="grid gap-14 md:grid-cols-3 pb-16 md:pb-20 border-b border-white/10">
          {/* Brand */}
          <div className="space-y-6 text-center md:text-left">
            <div>
              <h3 className="text-3xl font-bold tracking-tight text-primary">
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
              {socialLinks.map(({ icon: Icon, label, href, hoverColor, glow }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`group relative text-white/50 transition-all duration-300 ${hoverColor}`}
                >
                  <Icon size={24} />
                  <span className={`absolute inset-0 rounded-full blur-md ${glow} opacity-0 group-hover:opacity-100 transition duration-300`} />
                </a>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center md:items-end justify-center gap-6 text-center md:text-right">
            <a
              href={whatsappLink}
              className="group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-background transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,212,255,0.4)]"
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
            <span className="text-primary font-medium">Dharanidharan</span> —
            Built with purpose. Designed for impact.
          </p>

          <div className="flex flex-wrap justify-center sm:justify-end gap-6 sm:gap-8">
            <Link href="/privacy-policy" className="hover:text-primary transition">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-primary transition">
              Terms of Service
            </Link>
            <Link href="/cookie-policy" className="hover:text-primary transition">
              Cookie Preferences
            </Link>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 p-3 rounded-full bg-primary text-background shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all duration-500 hover:scale-110 hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] ${
          showScrollTop ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
        }`}
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
}
