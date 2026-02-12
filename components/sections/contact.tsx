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

    try {
      const response = await fetch("http://localhost:5000/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus({ type: "success", msg: "Message sent successfully!" })
        setFormData({
          name: "",
          email: "",
          subject: "Portfolio Inquiry",
          message: "",
        })
      } else {
        throw new Error(data.message)
      }
    } catch (error) {
      setStatus({
        type: "error",
        msg: "Could not connect to server. Check if backend is running.",
      })
    } finally {
      setIsLoading(false)
    }
  }

  // WhatsApp Config
  const whatsappNumber = "916385372905" 
  const whatsappMessage = encodeURIComponent(
    "Hi, I’d like to discuss a project with you. "
  )
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 rounded-lg bg-background border border-border outline-none focus:ring-2 ring-primary"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 rounded-lg bg-background border border-border outline-none focus:ring-2 ring-primary"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full p-4 rounded-lg bg-background border border-border outline-none focus:ring-2 ring-primary"
            />

            <Button type="submit" disabled={isLoading} className="w-full py-6">
              {isLoading ? (
                <Loader2 className="animate-spin mr-2" />
              ) : (
                "Send Message"
              )}
            </Button>

            {status && (
              <div
                className={`p-4 rounded-lg flex items-center gap-2 ${
                  status.type === "success"
                    ? "bg-green-500/10 text-green-500"
                    : "bg-red-500/10 text-red-500"
                }`}
              >
                {status.type === "success" && (
                  <CheckCircle2 size={18} />
                )}
                {status.msg}
              </div>
            )}
          </form>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Connect With Me
              </h3>
              <p className="text-muted-foreground mb-6">
                Feel free to reach out through any of these channels.
                I typically respond within 24 hours.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:tdharanidharan340@gmail.com"
                  className="flex items-center gap-3 p-4 rounded-lg bg-background border border-border hover:border-primary/50 transition-colors"
                >
                  <Mail className="text-primary" size={20} />
                  <span>tdharanidharan340@gmail.com</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/dharanidharant/"
                  target="_blank"
                  className="flex items-center gap-3 p-4 rounded-lg bg-background border border-border hover:border-primary/50 transition-colors"
                >
                  <Linkedin className="text-primary" size={20} />
                  <span>LinkedIn Profile</span>
                </a>

                <a
                  href="https://github.com/Dharani-ctrl"
                  target="_blank"
                  className="flex items-center gap-3 p-4 rounded-lg bg-background border border-border hover:border-primary/50 transition-colors"
                >
                  <Github className="text-primary" size={20} />
                  <span>GitHub Profile</span>
                </a>

                {/* ✅ WhatsApp */}
                <a
                  href={whatsappLink}
                  target="_blank"
                  className="flex items-center gap-3 p-4 rounded-lg bg-background border border-border hover:border-primary/50 transition-colors"
                >
                  <MessageCircle className="text-primary" size={20} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
