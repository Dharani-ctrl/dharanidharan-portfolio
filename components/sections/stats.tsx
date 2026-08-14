"use client";

import { useEffect, useState, useRef } from "react";
import { Award, Code2, Cpu, Star } from "lucide-react";

const statsData = [
  { label: "Years Experience", value: 1, prefix: "", suffix: "+", icon: Award, color: "#00D4FF" },
  { label: "Projects Completed", value: 10, prefix: "", suffix: "+", icon: Code2, color: "#3B82F6" },
  { label: "Technologies Mastered", value: 5, prefix: "", suffix: "+", icon: Cpu, color: "#A855F7" },
  { label: "Client Satisfaction", value: 100, prefix: "", suffix: "%", icon: Star, color: "#10B981" },
];

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      id="stats" 
      className="py-10 sm:py-14 bg-card/40 border-y border-border relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {statsData.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index} 
                className="flex flex-col items-center justify-center text-center p-4 sm:p-6 rounded-2xl bg-background/70 border border-border/80 hover:border-primary/40 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 group"
              >
                <div className="p-2.5 sm:p-3 rounded-xl bg-primary/10 text-primary mb-2.5 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={20} className="sm:w-6 sm:h-6" style={{ color: stat.color }} />
                </div>
                <div className="text-2xl sm:text-4xl lg:text-5xl font-black font-outfit tracking-tight mb-1">
                  <span className="bg-gradient-to-r from-primary via-cyan-400 to-sky-400 bg-clip-text text-transparent">
                    {stat.prefix}
                    {isVisible ? <CountUp end={stat.value} duration={1.8} /> : "0"}
                    {stat.suffix}
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs font-semibold text-muted-foreground tracking-wider uppercase">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CountUp({ end, duration = 1.8 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      
      // Smooth ease-out quad interpolation
      const easeOutQuad = 1 - (1 - progress) * (1 - progress);
      const currentVal = Math.round(easeOutQuad * end);

      setCount(currentVal);

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      }
    };

    animationFrameId = window.requestAnimationFrame(step);

    return () => window.cancelAnimationFrame(animationFrameId);
  }, [end, duration]);

  return <span>{count}</span>;
}
