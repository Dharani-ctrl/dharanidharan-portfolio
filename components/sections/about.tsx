export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="space-y-4">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              About Me
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-balance">Passionate Problem Solver & Code Enthusiast</h2>
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
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
              sharing my knowledge with the developer community.
            </p>
          </div>

          {/* Right */}
          <div className="space-y-6">
            <div className="p-6 rounded-lg bg-background border border-border hover:border-primary/50 transition-colors card-hover">
              <h3 className="font-semibold mb-2">Full Stack Development</h3>
              <p className="text-sm text-muted-foreground">
                End-to-end development from frontend to backend, creating complete web solutions.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-background border border-border hover:border-primary/50 transition-colors card-hover">
              <h3 className="font-semibold mb-2">API Design</h3>
              <p className="text-sm text-muted-foreground">
                Building RESTful APIs with proper authentication, validation, and error handling.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-background border border-border hover:border-primary/50 transition-colors card-hover">
              <h3 className="font-semibold mb-2">Database Architecture</h3>
              <p className="text-sm text-muted-foreground">
                Designing efficient MongoDB schemas and optimizing database queries for performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
