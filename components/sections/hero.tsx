"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const [displayedText, setDisplayedText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const phrases = ["Full-Stack Developer", "Backend Developer", "MERN Specialist", "Problem Solver"];
  const typingSpeed = isDeleting ? 50 : 100;
  const delayBetweenPhrases = 1500;

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      if (displayedText === "") {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      } else {
        timer = setTimeout(() => {
          setDisplayedText(currentPhrase.substring(0, displayedText.length - 1));
        }, typingSpeed);
      }
    } else {
      if (displayedText === currentPhrase) {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, delayBetweenPhrases);
      } else {
        timer = setTimeout(() => {
          setDisplayedText(currentPhrase.substring(0, displayedText.length + 1));
        }, typingSpeed);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, phraseIndex, phrases, typingSpeed]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-background"
    >
      {/* Floating dot grid background */}
      <div 
        className="absolute inset-0 opacity-[0.07] dark:opacity-[0.05]" 
        style={{ 
          backgroundImage: 'radial-gradient(var(--primary) 1px, transparent 1px)', 
          backgroundSize: '30px 30px',
          animation: 'float 20s linear infinite'
        }} 
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full mt-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium animate-in fade-in slide-in-from-bottom-4 duration-700">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Welcome to my universe
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100 fill-mode-both">
                <span className="block mb-2 text-foreground">I'm Dharanidharan</span>

              </h1>

              <div className="h-8 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200 fill-mode-both">
                <p className="text-xl md:text-2xl font-medium text-muted-foreground">
                  <span className="gradient-text font-bold">{displayedText}</span>
                  <span className="animate-pulse text-primary ml-1">|</span>
                </p>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="flex gap-4 pt-4 flex-wrap items-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-both">
              <Button
                size="lg"
                className="group bg-primary hover:bg-primary/90 text-background gap-2 border border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/50"
              >
                Learn More
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Button>

              {/* View Resume — Animated Download Button */}
              <a
                href="/DHARANIDHARAN T RESUME  .pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="group relative overflow-hidden cursor-pointer border-primary/40 text-primary hover:border-primary hover:bg-primary hover:text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,212,255,0.3)]"
                >
                  {/* Shimmer sweep on hover */}
                  <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-primary/20 to-transparent transition-transform duration-700 ease-in-out" />
                  <span className="relative z-10 flex items-center gap-2">
                    View Resume
                    <Download
                      size={18}
                      className="transition-all duration-300 group-hover:translate-y-1 group-hover:scale-110 group-hover:text-white"
                    />
                  </span>
                </Button>
              </a>
            </div>

            <p className="text-sm text-muted-foreground pt-4 max-w-lg animate-in fade-in duration-1000 delay-500 fill-mode-both">
              JavaScript lover | Passionate about clean code | Crafting modern web applications
            </p>
          </div>

          {/* RIGHT */}
          <div className="hidden md:flex justify-center items-center animate-in fade-in zoom-in-95 duration-1000 delay-700 fill-mode-both">
            <div className="w-full max-w-md rounded-xl border border-primary/40 bg-slate-900 dark:bg-card/50 backdrop-blur overflow-hidden shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-primary/40">
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/80 dark:bg-secondary/50 border-b border-primary/20">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-xs text-slate-400 ml-2">
                  developer.js
                </span>
              </div>

              <div className="p-4 font-mono text-sm overflow-x-auto">
                <pre className="text-sky-400">
                  {`const profile = {
  name: 'Dharanidharan',
  title: 'Full-Stack Developer',
  skills: [
    'React', 'Next.js', 'Redux',
    'Express', 'Node.js',
    'MongoDB', 'TypeScript'
  ],
  hardWorker: true,
  problemSolver: true,
  yearsOfExperience: 2,
  hireable() {
    return this.hardWorker &&
           this.problemSolver &&
           this.skills.length >= 5
  }
};`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
          <ArrowRight className="rotate-90" size={24} />
        </a>
      </div>
    </section>
  );
}
