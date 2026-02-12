"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "I'm Dharanidharan ";
  const typingSpeed = 100;

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, typingSpeed);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Floating dots */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-2 h-2 rounded-full bg-primary animate-pulse" />
        <div
          className="absolute top-40 right-20 w-3 h-3 rounded-full bg-accent animate-pulse"
          style={{ animationDelay: "0.7s" }}
        />
        <div
          className="absolute bottom-20 left-1/4 w-2 h-2 rounded-full bg-primary animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div className="space-y-8 animate-in fade-in slide-in-from-left-10 duration-1000">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Welcome to my universe
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                <span className="block">Hello</span>
                <span className="inline-block min-h-[1em]">
                  <span className="gradient-text">{displayedText}</span>
                  {displayedText.length < fullText.length && (
                    <span className="animate-pulse text-primary">|</span>
                  )}
                </span>
              </h1>

              <p className="text-lg text-muted-foreground">
                Full-Stack Developer | Backend Developer | Problem Solver
              </p>
            </div>

            {/* BUTTONS */}
            <div className="flex gap-4 pt-4 flex-wrap items-center">
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

              {/* View Resume */}
              <a
                href="/DHARANIDHARAN T RESUME.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="group relative overflow-hidden 
                  cursor-pointer
             border-primary/40 
             text-primary 
             hover:bg-black 
             hover:text-white 
             transition-all duration-300"
                >
                  {/* Shimmer */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/30 to-transparent translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700" />

                  <span className="relative z-10 flex items-center gap-2">
                    View Resume
                    <Download
                      size={18}
                      className="transition-transform group-hover:translate-y-0.5"
                    />
                  </span>
                </Button>
              </a>
            </div>

            <p className="text-sm text-muted-foreground pt-4 max-w-lg">
              JavaScript lover | OlovaJS creator | Crafting frameworks and
              coding the future
            </p>
          </div>

          {/* RIGHT */}
          <div className="hidden md:flex justify-center items-center animate-in fade-in slide-in-from-right-10 duration-1000 delay-200">
            <div className="w-full max-w-md rounded-xl border border-primary/40 bg-card/50 backdrop-blur overflow-hidden shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-primary/40">
              <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-primary/20">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-xs text-muted-foreground ml-2">
                  developer.js
                </span>
              </div>

              <div className="p-4 font-mono text-sm overflow-x-auto">
                <pre className="text-primary">
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
    </section>
  );
}
