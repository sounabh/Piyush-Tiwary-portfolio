// components/TechStack.tsx
import { motion } from "motion/react";

const techStack = {
  "Languages & Data": {
    items: ["Python", "SQL", "Java", "HTML", "CSS"],
    color: "var(--neon-violet)",
  },
  "AI & LLMs": {
    items: ["LangChain", "RAG", "OpenAI API", "Ollama", "Whisper", "Prompt Engineering"],
    color: "var(--neon-indigo)",
  },
  "ML & DL": {
    items: ["Scikit-learn", "TensorFlow", "Keras", "NumPy", "Pandas", "Statistics"],
    color: "var(--neon-sky)",
  },
  "Data Visualization": {
    items: ["Matplotlib", "Seaborn", "Power BI (Basic)", "Jupyter", "Google Colab"],
    color: "var(--neon-emerald)",
  },
  "Automation & Tools": {
    items: ["n8n", "BeautifulSoup", "requests", "Flask", "Web Scraping"],
    color: "var(--neon-amber)",
  },
  "Dev Environment": {
    items: ["VS Code", "Git", "GitHub", "Terminal", "Cursor", "Claude"],
    color: "var(--neon-rose)",
  },
};

export function TechStack() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="inline-block text-xs font-mono tracking-widest text-[var(--neon-rose)] uppercase mb-3 px-3 py-1 rounded-full border"
            style={{
              borderColor: "rgba(244,63,94,0.3)",
              background: "rgba(244,63,94,0.1)",
            }}
          >
            Tools & Technologies
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">Tech Stack</h2>
          <p className="text-gray-400 text-lg">
            Technologies I work with to build scalable AI systems
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(techStack).map(([category, { items, color }], categoryIndex) => (
            <motion.div
              key={category}
              className="p-7 rounded-3xl border group transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.03)",
                borderColor: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(10px)",
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              whileHover={{
                borderColor: `${color}25`,
                boxShadow: `0 15px 50px ${color}15`,
              }}
            >
              {/* Category header */}
              <div className="mb-5">
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ background: color, boxShadow: `0 0 8px ${color}` }}
                  />
                  <h3 className="font-bold text-sm uppercase tracking-widest" style={{ color }}>
                    {category}
                  </h3>
                </div>
                <div
                  className="h-px w-full"
                  style={{
                    background: `linear-gradient(to right, ${color}40, transparent)`,
                  }}
                />
              </div>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2">
                {items.map((tech, techIndex) => (
                  <motion.span
                    key={tech}
                    className="px-3 py-1.5 text-sm rounded-xl font-mono transition-all duration-200 cursor-default border"
                    style={{
                      background: `${color}08`,
                      borderColor: `${color}18`,
                      color: "var(--foreground)",
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.1 + techIndex * 0.04,
                    }}
                    whileHover={{
                      background: `${color}18`,
                      borderColor: `${color}35`,
                      scale: 1.05,
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}