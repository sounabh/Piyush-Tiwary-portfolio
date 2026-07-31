// components/EngineeringApproach.tsx
import { motion } from "motion/react";
import {
  Lightbulb,
  Layers,
  Boxes,
  CheckCircle2,
  Rocket,
} from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    title: "Problem Understanding",
    description:
      "Deep analysis of requirements, constraints, and success metrics before writing a single line of code.",
    number: "01",
    color: "var(--neon-violet)",
  },
  {
    icon: Layers,
    title: "Architecture Design",
    description:
      "Designing optimal data flow, retrieval strategies, embeddings, and context pipelines for the problem.",
    number: "02",
    color: "var(--neon-indigo)",
  },
  {
    icon: Boxes,
    title: "Pipeline Building",
    description:
      "Implementing robust AI/ML pipelines, automation workflows, and agent systems with tool integration.",
    number: "03",
    color: "var(--neon-sky)",
  },
  {
    icon: CheckCircle2,
    title: "Evaluation & Testing",
    description:
      "Rigorous benchmarking, hallucination control, RMSE optimization, and validation across edge cases.",
    number: "04",
    color: "var(--neon-emerald)",
  },
  {
    icon: Rocket,
    title: "Deploy & Iterate",
    description:
      "Production-ready systems deployed with monitoring, feedback loops, and continuous improvement.",
    number: "05",
    color: "var(--neon-amber)",
  },
];

export function EngineeringApproach() {
  return (
    <section className="py-28 px-6 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, var(--neon-indigo) 0%, transparent 60%)",
          filter: "blur(120px)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="inline-block text-xs font-mono tracking-widest text-[var(--neon-amber)] uppercase mb-3 px-3 py-1 rounded-full border"
            style={{
              borderColor: "rgba(245,158,11,0.3)",
              background: "rgba(245,158,11,0.1)",
            }}
          >
            My Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
            Engineering Approach
          </h2>
          <p className="text-gray-400 text-lg">
            Systematic methodology for building production AI systems
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div
            className="hidden lg:block absolute top-16 left-0 right-0 h-px"
            style={{
              background:
                "linear-gradient(to right, transparent, var(--neon-violet), var(--neon-indigo), var(--neon-sky), var(--neon-emerald), var(--neon-amber), transparent)",
              opacity: 0.25,
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                >
                  <div
                    className="relative p-6 rounded-3xl border transition-all duration-300 group overflow-hidden text-center"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      borderColor: "rgba(255,255,255,0.08)",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    {/* Step number */}
                    <div
                      className="absolute top-4 right-4 text-xs font-mono font-bold"
                      style={{ color: step.color, opacity: 0.6 }}
                    >
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 mx-auto transition-all duration-300 group-hover:scale-110"
                      style={{
                        background: `${step.color}12`,
                        border: `1px solid ${step.color}25`,
                      }}
                    >
                      <Icon className="w-7 h-7" style={{ color: step.color }} />
                    </div>

                    <h3 className="text-sm font-bold mb-2 text-white">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      {step.description}
                    </p>

                    {/* Bottom accent */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: `linear-gradient(to right, transparent, ${step.color}, transparent)`,
                      }}
                    />

                    {/* Glow */}
                    <div
                      className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at center, ${step.color}10, transparent 70%)`,
                      }}
                    />
                  </div>

                  {/* Arrow for mobile */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center my-4">
                      <div
                        className="w-px h-8"
                        style={{
                          background: `linear-gradient(to bottom, ${step.color}, ${steps[index + 1].color})`,
                          opacity: 0.4,
                        }}
                      />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}