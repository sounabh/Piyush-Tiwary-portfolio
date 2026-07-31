// components/About.tsx
import { motion } from "motion/react";
import { MapPin, GraduationCap, Mail, Phone, Github, Linkedin } from "lucide-react";

const links = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/piyushTIWARI-786",
    color: "var(--neon-violet)",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/piyush-tiwari-76052731a",
    color: "var(--neon-sky)",
  },
  {
    icon: Mail,
    label: "Email",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=tpiyush2003@gmail.com",
    color: "var(--neon-emerald)",
  },
  {
    icon: Phone,
    label: "Phone",
    href: "tel:+919672416751",
    color: "var(--neon-amber)",
  },
];

export function About() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-mono tracking-widest text-[var(--neon-violet)] uppercase mb-3 px-3 py-1 rounded-full border"
            style={{ borderColor: "rgba(124,58,237,0.3)", background: "rgba(124,58,237,0.1)" }}>
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">The Person Behind the Code</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Avatar + Links */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Avatar card */}
            <div
              className="relative rounded-3xl p-8 text-center mb-6 border overflow-hidden group"
              style={{
                background: "rgba(124,58,237,0.06)",
                borderColor: "rgba(124,58,237,0.2)",
              }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "radial-gradient(circle at center, rgba(124,58,237,0.1), transparent 70%)",
                }}
              />
              {/* Initials Avatar */}
              <div
                className="w-28 h-28 rounded-2xl flex items-center justify-center mx-auto mb-4 text-4xl font-bold text-white relative z-10"
                style={{
                  background: "linear-gradient(135deg, var(--neon-violet), var(--neon-indigo), var(--neon-sky))",
                  boxShadow: "0 0 40px rgba(124,58,237,0.5)",
                }}
              >
                PT
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Piyush Tiwari</h3>
              <div className="flex items-center justify-center gap-1 text-gray-400 text-sm">
                <MapPin className="w-3.5 h-3.5" />
                <span>Jaipur, Rajasthan</span>
              </div>
            </div>

            {/* Links */}
            <div className="grid grid-cols-2 gap-3">
              {links.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-3 rounded-xl border transition-all duration-300 hover:scale-105 group"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      borderColor: "rgba(255,255,255,0.08)",
                    }}
                  >
                    <Icon className="w-4 h-4 transition-colors" style={{ color: link.color }} />
                    <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                      {link.label}
                    </span>
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="rounded-3xl p-8 border h-full"
              style={{
                background: "rgba(255,255,255,0.03)",
                borderColor: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(10px)",
              }}
            >
              <p className="text-lg text-gray-300 leading-relaxed mb-5">
                I'm{" "}
                <span className="gradient-text-violet font-semibold">
                  Piyush Tiwari
                </span>
                , a self-driven AI & Data Science enthusiast graduated from {" "}
                <span className="text-[var(--neon-violet)]">
                  B.Tech in Electronics & Communication Engineering
                </span>{" "}
                at Arya College of Engineering and IT, Jaipur (CGPA: 8.0).
              </p>

              <p className="text-lg text-gray-300 leading-relaxed mb-5">
                I have hands-on experience building{" "}
                <span className="text-[var(--neon-emerald)]">
                  intelligent automation solutions
                </span>
                ,{" "}
                <span className="text-[var(--neon-emerald)]">RAG systems</span>
                , and{" "}
                <span className="text-[var(--neon-emerald)]">ML pipelines</span>.
                I completed a real-world AI internship at{" "}
                <span className="text-[var(--neon-sky)]">Mirai School of Technology</span>{" "}
                where I built 6+ production-style AI and automation systems in a 4-week sprint.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Passionate about turning complex AI research into{" "}
                <span className="text-[var(--neon-amber)]">
                  real-world, impactful solutions
                </span>{" "}
                — from RAG platforms and HR chatbots to course content retrieval systems.
              </p>

              {/* Education badge */}
              <div
                className="flex items-start gap-3 p-4 rounded-2xl border"
                style={{
                  background: "rgba(124,58,237,0.06)",
                  borderColor: "rgba(124,58,237,0.2)",
                }}
              >
                <GraduationCap className="w-5 h-5 text-[var(--neon-violet)] mt-0.5 shrink-0" />
                <div>
                  <p className="text-white font-semibold text-sm">
                    B.Tech — Electronics & Communication Engineering
                  </p>
                  <p className="text-gray-400 text-sm">
                    Arya College of Engineering & IT, Jaipur • 2022–2026 • CGPA: 8.0
                  </p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-6">
                {[
                  "Python • SQL • Java",
                  "LLMs & RAG",
                  "n8n Automation",
                  "ML & Deep Learning",
                  "Data Science",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 text-xs font-mono rounded-lg border"
                    style={{
                      background: "rgba(124,58,237,0.08)",
                      borderColor: "rgba(124,58,237,0.25)",
                      color: "var(--neon-violet)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}