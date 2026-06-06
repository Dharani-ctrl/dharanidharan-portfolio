"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Mail,
  Linkedin,
  Github,
  MessageCircle,
  Loader2,
  CheckCircle2,
  Send
} from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Portfolio Inquiry",
    message: "",
  })

  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<{
    type: "success" | "error"
    msg: string
  } | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus(null)

    // Simulate backend for static site
    setTimeout(() => {
      setStatus({ type: "success", msg: "Message sent successfully!" })
      setFormData({
        name: "",
        email: "",
        subject: "Portfolio Inquiry",
        message: "",
      })
      setIsLoading(false)
    }, 1500)
  }

  // WhatsApp Config
  const whatsappNumber = "916385372905" 
  const whatsappMessage = encodeURIComponent(
    "Hi, I’d like to connect with you. "
  )
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-card/50 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Get In Touch
          </h2>
          <div className="h-1 w-24 bg-primary rounded-full mb-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8 animate-in slide-in-from-left duration-700">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Connect With Me
              </h3>
              <p className="text-muted-foreground mb-8 text-lg">
                Feel free to reach out through any of these channels.
                I typically respond within 24 hours.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:tdharanidharan340@gmail.com"
                  className="group flex items-center gap-4 p-4 rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-background transition-colors">
                    <Mail size={24} />
                  </div>
                  <span className="font-medium group-hover:text-primary transition-colors">tdharanidharan340@gmail.com</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/dharanidharant/"
                  target="_blank"
                  className="group flex items-center gap-4 p-4 rounded-xl bg-background border border-border hover:border-[#0077b5]/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-[#0077b5] group-hover:text-background transition-colors">
                    <Linkedin size={24} />
                  </div>
                  <span className="font-medium group-hover:text-[#0077b5] transition-colors">LinkedIn Profile</span>
                </a>

                <a
                  href="https://github.com/Dharani-ctrl"
                  target="_blank"
                  className="group flex items-center gap-4 p-4 rounded-xl bg-background border border-border hover:border-[#2ea043]/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-[#2ea043] group-hover:text-background transition-colors">
                    <Github size={24} />
                  </div>
                  <span className="font-medium group-hover:text-[#2ea043] transition-colors">GitHub Profile</span>
                </a>

                {/* WhatsApp */}
                <a
                  href={whatsappLink}
                  target="_blank"
                  className="group flex items-center gap-4 p-4 rounded-xl bg-background border border-border hover:border-[#25D366]/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-[#25D366] group-hover:text-background transition-colors">
                    <MessageCircle size={24} />
                  </div>
                  <span className="font-medium group-hover:text-[#25D366] transition-colors">WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-in slide-in-from-right duration-700 delay-200 fill-mode-both">
            <form onSubmit={handleSubmit} className="space-y-6 bg-background p-8 rounded-2xl border border-border shadow-xl">
              <div className="relative group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 bg-transparent border-b-2 border-border outline-none transition-colors peer placeholder-transparent"
                  id="name"
                />
                <label htmlFor="name" className="absolute left-4 top-4 text-muted-foreground transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-primary peer-valid:-top-2 peer-valid:text-xs peer-valid:text-primary pointer-events-none">Your Name</label>
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 peer-focus:w-full" />
              </div>

              <div className="relative group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 bg-transparent border-b-2 border-border outline-none transition-colors peer placeholder-transparent"
                  id="email"
                />
                <label htmlFor="email" className="absolute left-4 top-4 text-muted-foreground transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-primary peer-valid:-top-2 peer-valid:text-xs peer-valid:text-primary pointer-events-none">Your Email</label>
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 peer-focus:w-full" />
              </div>

              <div className="relative group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-4 bg-transparent border-b-2 border-border outline-none transition-colors peer placeholder-transparent resize-none"
                  id="message"
                />
                <label htmlFor="message" className="absolute left-4 top-4 text-muted-foreground transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-primary peer-valid:-top-2 peer-valid:text-xs peer-valid:text-primary pointer-events-none">Your Message</label>
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 peer-focus:w-full" />
              </div>

              <Button type="submit" disabled={isLoading} className="w-full py-6 text-lg group bg-primary hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(0,212,255,0.2)] hover:shadow-[0_0_30px_rgba(0,212,255,0.4)]">
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="animate-spin" size={20} /> Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Send Message
                    <Send size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                )}
              </Button>

              {status && (
                <div
                  className={`p-4 rounded-lg flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2 ${
                    status.type === "success"
                      ? "bg-green-500/10 text-green-500 border border-green-500/20"
                      : "bg-red-500/10 text-red-500 border border-red-500/20"
                  }`}
                >
                  {status.type === "success" && (
                    <CheckCircle2 size={20} />
                  )}
                  {status.msg}
                </div>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
