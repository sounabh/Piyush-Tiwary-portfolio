// App.tsx
import { useEffect, useRef } from "react";
import { Hero } from "./components/Hero";
import { Expertise } from "./components/Expertise";
import { Projects } from "./components/Projects";
import { EngineeringApproach } from "./components/EngineeringApproach";
import { TechStack } from "./components/TechStack";
import { Credibility } from "./components/Credibility";
import { About } from "./components/About";
import { Contact } from "./components/Contact";

export default function App() {
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#060611] text-white overflow-x-hidden grid-bg relative">
      {/* Global ambient orbs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, var(--neon-violet) 0%, transparent 70%)",
            filter: "blur(120px)",
          }}
        />
        <div
          className="absolute top-1/2 -right-40 w-[500px] h-[500px] rounded-full opacity-15"
          style={{
            background:
              "radial-gradient(circle, var(--neon-indigo) 0%, transparent 70%)",
            filter: "blur(120px)",
          }}
        />
        <div
          className="absolute -bottom-40 left-1/3 w-[400px] h-[400px] rounded-full opacity-15"
          style={{
            background:
              "radial-gradient(circle, var(--neon-emerald) 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
      </div>

      <div className="relative z-10">
        <Hero onViewProjects={scrollToProjects} />
        <Expertise />
        <div ref={projectsRef}>
          <Projects />
        </div>
        <EngineeringApproach />
        <TechStack />
        <Credibility />
        <About />
        <Contact />
      </div>
    </div>
  );
}