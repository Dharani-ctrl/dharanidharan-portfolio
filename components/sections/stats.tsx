"use client";

import { useEffect, useState, useRef } from "react";

const statsData = [
  { label: "Years Experience", value: 1, prefix: "", suffix: "+" },
  { label: "Projects Completed", value: 10, prefix: "", suffix: "+" },
  { label: "Technologies Mastered", value: 5, prefix: "", suffix: "+" },
  { label: "Client Satisfaction", value: 100, prefix: "", suffix: "%" },
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 bg-background border-y border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-2">
              <div className="text-4xl md:text-5xl font-bold gradient-text">
                {stat.prefix}
                {isVisible ? <CountUp end={stat.value} duration={2} /> : "0"}
                {stat.suffix}
              </div>
              <p className="text-sm md:text-base text-muted-foreground font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CountUp({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return <span>{count}</span>;
}
