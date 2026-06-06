"use client"

import { useEffect, useState } from "react"

const techStack = [
  { label: "React", color: "#61DAFB" },
  { label: "Node.js", color: "#339933" },
  { label: "MongoDB", color: "#47A248" },
  { label: "Express", color: "#888888" },
  { label: "TypeScript", color: "#3178C6" },
]

const roles = ["Full-Stack Developer", "MERN Specialist", "Backend Engineer", "Problem Solver"]

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)
  const [roleIndex, setRoleIndex] = useState(0)
  const [fadeOut, setFadeOut] = useState(false)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Show content after a brief mount delay
    const showTimer = setTimeout(() => setShowContent(true), 100)

    // Cycle through roles
    const roleTimer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }, 600)

    // Smooth progress bar
    let prog = 0
    const progressTimer = setInterval(() => {
      prog += 1.5
      setProgress(Math.min(prog, 100))
      if (prog >= 100) {
        clearInterval(progressTimer)
        clearInterval(roleTimer)
        // Fade out after complete
        setTimeout(() => {
          setFadeOut(true)
          setTimeout(onComplete, 600)
        }, 300)
      }
    }, 35)

    return () => {
      clearTimeout(showTimer)
      clearInterval(roleTimer)
      clearInterval(progressTimer)
    }
  }, [onComplete])

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050810] transition-opacity duration-700 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Animated grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(#00d4ff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-[100px]" />

      {/* Main content */}
      <div
        className={`relative z-10 flex flex-col items-center gap-6 transition-all duration-700 ${
          showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Logo Icon */}
        <div className="relative">
          <div className="absolute inset-0 rounded-2xl bg-cyan-400/20 blur-xl scale-110 animate-pulse" />
          <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0d1120] to-[#1a2138] border border-cyan-400/30 flex items-center justify-center shadow-[0_0_30px_rgba(0,212,255,0.2)]">
            <span className="font-mono font-black text-2xl bg-gradient-to-br from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              {"<D/>"}
            </span>
          </div>
        </div>

        {/* Name */}
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-1">
            Dharanidharan
          </h1>
          {/* Animated role */}
          <div className="h-7 overflow-hidden">
            <p
              key={roleIndex}
              className="text-base font-semibold text-cyan-400 animate-in fade-in slide-in-from-bottom-2 duration-300"
            >
              {roles[roleIndex]}
            </p>
          </div>
        </div>

        {/* Tech stack pills */}
        <div className="flex flex-wrap justify-center gap-2 max-w-xs">
          {techStack.map((tech, i) => (
            <span
              key={tech.label}
              className="px-3 py-1 rounded-full text-[11px] font-bold border transition-all duration-500"
              style={{
                borderColor: `${tech.color}40`,
                color: tech.color,
                backgroundColor: `${tech.color}12`,
                opacity: showContent ? 1 : 0,
                transform: showContent ? "translateY(0)" : "translateY(8px)",
                transitionDelay: `${200 + i * 80}ms`,
              }}
            >
              {tech.label}
            </span>
          ))}
        </div>

        {/* Progress bar */}
        <div className="w-56 mt-2">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[10px] text-white/30 font-mono uppercase tracking-widest">Loading</span>
            <span className="text-[10px] text-cyan-400/70 font-mono">{Math.round(progress)}%</span>
          </div>
          <div className="h-[3px] w-full rounded-full bg-white/5 overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-100 ease-linear"
              style={{
                width: `${progress}%`,
                background: "linear-gradient(90deg, #0ea5e9, #00d4ff, #38bdf8)",
                boxShadow: "0 0 10px rgba(0,212,255,0.5)",
              }}
            />
          </div>
        </div>

        {/* Brand name */}
        <p className="text-[11px] font-mono text-white/20 tracking-[0.3em] uppercase mt-2">
          dharan.codes
        </p>
      </div>
    </div>
  )
}
