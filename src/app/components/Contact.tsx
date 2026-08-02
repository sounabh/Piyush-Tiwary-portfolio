// components/Contact.tsx
import { motion } from "motion/react";
import { Mail, Linkedin, Github, Send, Globe } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "tpiyush2003@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=tpiyush2003@gmail.com",
    color: "var(--neon-violet)",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "piyush-tiwari-76052731a",
    href: "https://linkedin.com/in/piyush-tiwari-76052731a",
    color: "var(--neon-sky)",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "piyushTIWARI-786",
    href: "https://github.com/piyushTIWARI-786",
    color: "var(--neon-emerald)",
  },
  {
    icon: Globe,
    label: "Portfolio",
    value: "My Portfolio",
    href: "#",
    color: "var(--neon-amber)",
  },
];

export function Contact() {
  return (
    <section className="py-28 px-6 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, var(--neon-violet) 0%, transparent 55%)",
          filter: "blur(150px)",
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          className="text-center mb-14"
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
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-5">
            Let's Build Something
            <span className="gradient-text-violet"> Amazing</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-xl mx-auto">
            Open to Data Science, AI/ML, and Generative AI opportunities. Interested in full-time roles, internships, freelance projects, and meaningful collaborations. Let's build something impactful together.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.a
                key={method.label}
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group p-6 rounded-3xl border transition-all duration-300 cursor-pointer block text-center"
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
                  boxShadow: `0 20px 60px ${method.color}25`,
                  borderColor: `${method.color}30`,
                  y: -4,
                }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `${method.color}12`,
                    border: `1px solid ${method.color}25`,
                  }}
                >
                  <Icon className="w-6 h-6" style={{ color: method.color }} />
                </div>

                <h3 className="font-bold text-white mb-2">{method.label}</h3>

                <p
                  className="text-xs font-mono break-all leading-relaxed"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  {method.value}
                </p>
              </motion.a>
            );
          })}
        </div>

     
      </div>

      {/* Footer */}
      <motion.div
        className="max-w-7xl mx-auto mt-24 pt-10 border-t"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p className="font-mono">
            © 2026 <span className="text-[var(--neon-violet)]"></span> Built by Piyush Tiwary 💗.
          </p>

          <p className="font-mono text-center">
            Specialized in{" "}
            <span className="text-[var(--neon-violet)]">Data Science</span>
            {" • "}
            <span className="text-[var(--neon-emerald)]">RAG Systems</span>
            {" • "}
            <span className="text-[var(--neon-sky)]">AI Automation</span>
          </p>
        </div>
      </motion.div>
    </section>
  );
}