// components/Credibility.tsx

import { motion } from "motion/react";
import { Award, Briefcase, TrendingUp, Star } from "lucide-react";
import Certificates from "./Certificate";

const metrics = [
  {
    icon: TrendingUp,
    value: "8.0",
    label: "B.Tech CGPA",
    description: "Electronics & Communication Engineering, Arya College Jaipur",
    color: "var(--neon-violet)",
  },
  {
    icon: Star,
    value: "93.8%",
    label: "Senior Secondary",
    description: "Mathematics stream, Small Wonders Academy (RBSE)",
    color: "var(--neon-indigo)",
  },
  {
    icon: Briefcase,
    value: "6+",
    label: "AI Systems Built",
    description: "Production-style AI & automation systems in internship",
    color: "var(--neon-emerald)",
  },
  {
    icon: Award,
    value: "1",
    label: "AI Internship",
    description: "Mirai School of Technology — Winter AI Internship 2026",
    color: "var(--neon-sky)",
  },
];

const internshipHighlights = [
  "Built 6+ production-style AI and automation systems in a 4-week sprint",
  "AI calendar agent for natural-language scheduling and conflict resolution",
  "Telegram appointment bot for conversational bookings",
  "LinkedIn content automation pipeline with structured prompt engineering",
  "Business workflow automations: form processing, data logging, confirmation emails",
];

export function Credibility() {
  return (
    <section className="py-28 px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at bottom, var(--neon-violet) 0%, transparent 60%)",
          filter: "blur(120px)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="inline-block text-xs font-mono tracking-widest text-[var(--neon-violet)] uppercase mb-3 px-3 py-1 rounded-full border"
            style={{
              borderColor: "rgba(124,58,237,0.3)",
              background: "rgba(124,58,237,0.1)",
            }}
          >
            Track Record
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
            Highlights & Achievements
          </h2>

          <p className="text-gray-400 text-lg">
            Academic performance, internship experience & real-world impact
          </p>
        </motion.div>

        {/* ================= Metrics ================= */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;

            return (
              <motion.div
                key={metric.label}
                className="group relative p-8 rounded-3xl text-center border overflow-hidden transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  borderColor: "rgba(255,255,255,0.08)",
                  backdropFilter: "blur(10px)",
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  y: -4,
                  boxShadow: `0 20px 60px ${metric.color}25`,
                  borderColor: `${metric.color}30`,
                }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition"
                  style={{
                    background: `${metric.color}12`,
                    border: `1px solid ${metric.color}25`,
                  }}
                >
                  <Icon
                    className="w-7 h-7"
                    style={{ color: metric.color }}
                  />
                </div>

                <motion.div
                  className="text-4xl font-bold mb-2"
                  style={{ color: metric.color }}
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1 + 0.2,
                  }}
                >
                  {metric.value}
                </motion.div>

                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2">
                  {metric.label}
                </h3>

                <p className="text-gray-500 text-xs leading-relaxed">
                  {metric.description}
                </p>

                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, ${metric.color}08, transparent 70%)`,
                  }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* ================= Internship ================= */}

        <motion.div
          className="rounded-3xl p-8 border overflow-hidden relative"
          style={{
            background: "rgba(124,58,237,0.05)",
            borderColor: "rgba(124,58,237,0.2)",
            backdropFilter: "blur(10px)",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Briefcase className="w-5 h-5 text-[var(--neon-violet)]" />

                <span className="text-xs font-mono uppercase tracking-wider text-[var(--neon-violet)]">
                  Internship Experience
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-1">
                AI Intern — Winter AI Internship 2026
              </h3>

              <p className="text-gray-400 mb-2">
                Mirai School of Technology • Remote • Jan 2026 – Feb 2026
              </p>

              <p className="text-gray-400 text-sm leading-relaxed">
                Built production-style AI and automation systems in a
                4-week sprint using n8n and LLM-driven logic. Applied
                prompt engineering, LLM-based systems, and automation
                design, strengthening structured problem-solving and
                turning ambiguous requirements into scalable real-world
                AI workflows.
              </p>
            </div>

            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-[var(--neon-emerald)] mb-4">
                Key Contributions
              </p>

              <ul className="space-y-3">
                {internshipHighlights.map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex gap-3 text-sm text-gray-300"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: i * 0.08,
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full mt-1.5"
                      style={{
                        background: "var(--neon-emerald)",
                      }}
                    />

                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* ================= Certificates ================= */}

        <div className="mt-24">
          <Certificates />
        </div>
      </div>
    </section>
  );
}