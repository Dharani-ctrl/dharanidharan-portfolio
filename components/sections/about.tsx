import { Code2, Network, Database, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="space-y-6 animate-in slide-in-from-left duration-700">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              {/* Profile Photo */}
              <div className="relative w-32 h-32 rounded-full p-1 bg-gradient-to-r from-primary to-accent hover-glow shrink-0">
                <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping opacity-50" />
                <div className="w-full h-full rounded-full bg-background overflow-hidden border-2 border-background relative z-10">
                  <img src="/profile.jpg" alt="Dharanidharan" className="w-full h-full object-cover object-top" />
                </div>
              </div>
              
              <div className="space-y-4 text-center sm:text-left">
                <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  About Me
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-balance">Passionate Problem Solver & Code Enthusiast</h2>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              I'm a full-stack developer specializing in the MERN stack. My passion lies at the intersection of clean
              code and beautiful user experiences. I build scalable web applications that solve real-world problems with
              elegant solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With a strong foundation in React, Node.js, Express, and MongoDB, I create applications that are not only
              functionally robust but also intuitive and enjoyable to use. I believe in writing clean, maintainable code
              and continuously learning new technologies.
            </p>
            
            <a
              href="/DHARANIDHARAN T RESUME  .pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block pt-2"
            >
              <Button size="lg" className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,212,255,0.4)] hover:scale-105">
                {/* Shimmer sweep */}
                <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-in-out" />
                <span className="relative z-10 flex items-center gap-2">
                  {/* Bouncing download icon */}
                  <Download
                    size={18}
                    className="transition-all duration-300 group-hover:translate-y-1 group-hover:scale-110"
                  />
                  Download Resume
                </span>
              </Button>
            </a>
          </div>

          {/* Right */}
          <div className="space-y-6 animate-in slide-in-from-right duration-700 delay-200 fill-mode-both">
            <div className="p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,212,255,0.15)] hover:-translate-y-1 group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-background transition-colors">
                  <Code2 size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-lg">Full Stack Development</h3>
                  <p className="text-sm text-muted-foreground">
                    End-to-end development from frontend to backend, creating complete web solutions.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,212,255,0.15)] hover:-translate-y-1 group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-background transition-colors">
                  <Network size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-lg">API Design</h3>
                  <p className="text-sm text-muted-foreground">
                    Building RESTful APIs with proper authentication, validation, and error handling.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,212,255,0.15)] hover:-translate-y-1 group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-background transition-colors">
                  <Database size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-lg">Database Architecture</h3>
                  <p className="text-sm text-muted-foreground">
                    Designing efficient MongoDB schemas and optimizing database queries for performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
