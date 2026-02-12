"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  const isDark = theme === "dark"

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="fixed bottom-8 right-8 p-3 rounded-full bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg z-40"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun size={20} className="text-primary" /> : <Moon size={20} className="text-primary" />}
    </button>
  )
}
