// components/Projects.tsx
import { motion } from "motion/react";
import { ArrowRight, Github, ExternalLink, Calendar } from "lucide-react";

const projects = [
  {
    title: "LearnTrace AI",
    subtitle: "GenAI Course Content Retrieval",
    period: "July 2026",
    problem:
      "Engineered a GenAI-powered course content retrieval system that instantly pinpoints the exact lecture, video number, and timestamp for any topic across 100+ hours of course content.",
    stack: ["Python", "Scikit-learn", "RAG", "Ollama", "Whisper", "Embeddings", "NumPy", "Pandas"],
    impact:
      "Multi-stage pipeline (transcription → chunking → embeddings → vector search → LLM response) with local Ollama inference delivering source-aware, timestamped answers with near-instant retrieval.",
    gradient: "from-violet-500 to-indigo-500",
    glowColor: "rgba(124,58,237,0.3)",
    github: "https://github.com/piyushTIWARI-786/learntrace-ai",
    featured: true,
  },
  {
    title: "HRFlow AI",
    subtitle: "Intelligent RAG-based HR Chatbot",
    period: "January 2026",
    problem:
      "Developed an intelligent RAG-based HR chatbot that delivers accurate, context-aware answers to employee queries using an organization's HR policies and documents.",
    stack: ["RAG", "n8n", "Pinecone", "OpenAI Embeddings", "Google Drive API"],
    impact:
      "Automated document ingestion with 1-minute polling, chunking and embedding HR policy documents into Pinecone in real time. Reduced HR-query resolution time from manual document lookup to under a few seconds.",
    gradient: "from-emerald-500 to-sky-500",
    glowColor: "rgba(16,185,129,0.3)",
    github: "https://github.com/piyushTIWARI-786/HRFlow-AI",
    featured: true,
  },
  {
    title: "House Price Prediction",
    subtitle: "End-to-End ML Regression Pipeline",
    period: "May 2026",
    problem:
      "Built a complete ML regression pipeline on the California Housing Dataset (Kaggle) to predict median house prices with feature engineering and model benchmarking.",
    stack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    impact:
      "Trained Linear Regression, Random Forest, and Decision Tree models with RMSE-optimized hyperparameter tuning. Visualized feature importance and correlation heatmaps.",
    gradient: "from-amber-500 to-orange-500",
    glowColor: "rgba(245,158,11,0.3)",
    github: "https://github.com/piyushTIWARI-786/House-Price-Prediction-Model",
    featured: false,
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span
            className="inline-block text-xs font-mono tracking-widest text-[var(--neon-sky)] uppercase mb-3 px-3 py-1 rounded-full border"
            style={{
              borderColor: "rgba(14,165,233,0.3)",
              background: "rgba(14,165,233,0.1)",
            }}
          >
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            AI, Machine Learning, and Automation projects — from RAG systems to
            intelligent HR bots.
          </p>
        </motion.div>

        <div className="space-y-8">
          {/* Featured projects (large) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects
              .filter((p) => p.featured)
              .map((project, index) => (
                <motion.div
                  key={project.title}
                  className="group rounded-3xl p-8 relative border overflow-hidden transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    borderColor: "rgba(255,255,255,0.08)",
                    backdropFilter: "blur(10px)",
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{
                    boxShadow: `0 25px 80px ${project.glowColor}`,
                    borderColor: "rgba(124,58,237,0.25)",
                    y: -4,
                  }}
                >
                  {/* Gradient bar */}
                  <div
                    className={`w-full h-1 rounded-full bg-gradient-to-r ${project.gradient} mb-6`}
                  />

                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className="text-xs px-2 py-0.5 rounded-full font-mono border"
                          style={{
                            background: "rgba(124,58,237,0.1)",
                            borderColor: "rgba(124,58,237,0.3)",
                            color: "var(--neon-violet)",
                          }}
                        >
                          Featured
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-white">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-500 mt-0.5">
                        {project.subtitle}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-gray-600 font-mono">
                      <Calendar className="w-3 h-3" />
                      {project.period}
                    </div>
                  </div>

                  <p className="text-gray-400 leading-relaxed mb-5 text-sm">
                    {project.problem}
                  </p>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg text-xs font-mono border"
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          borderColor: "rgba(255,255,255,0.1)",
                          color: "#a0a0c0",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Impact */}
                  <div
                    className="rounded-xl p-4 mb-6 border"
                    style={{
                      background: "rgba(16,185,129,0.06)",
                      borderColor: "rgba(16,185,129,0.2)",
                    }}
                  >
                    <span className="text-[var(--neon-emerald)] font-semibold text-xs uppercase tracking-wider">
                      ✦ Impact
                    </span>
                    <p className="text-sm text-gray-300 mt-2 leading-relaxed">
                      {project.impact}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm transition-all hover:scale-105"
                      style={{
                        borderColor: "rgba(124,58,237,0.4)",
                        color: "var(--neon-violet)",
                      }}
                    >
                      <Github size={16} />
                      GitHub
                    </a>
                  </div>

                  {/* Glow */}
                  <div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(circle at top right, rgba(124,58,237,0.08), transparent 60%)",
                    }}
                  />
                </motion.div>
              ))}
          </div>

          {/* Other projects */}
          {projects
            .filter((p) => !p.featured)
            .map((project, index) => (
              <motion.div
                key={project.title}
                className="group rounded-3xl p-7 relative border overflow-hidden transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  borderColor: "rgba(255,255,255,0.08)",
                  backdropFilter: "blur(10px)",
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  boxShadow: `0 20px 60px ${project.glowColor}`,
                  borderColor: "rgba(245,158,11,0.2)",
                  y: -2,
                }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  <div className="lg:col-span-3">
                    <div
                      className={`w-16 h-1 rounded-full bg-gradient-to-r ${project.gradient} mb-4`}
                    />
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-white">
                        {project.title}
                      </h3>
                      <span className="text-xs text-gray-600 font-mono flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {project.period}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mb-3">
                      {project.subtitle}
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {project.problem}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono border"
                          style={{
                            background: "rgba(255,255,255,0.04)",
                            borderColor: "rgba(255,255,255,0.1)",
                            color: "#a0a0c0",
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-1 flex flex-col justify-between">
                    <div
                      className="rounded-xl p-4 border mb-4"
                      style={{
                        background: "rgba(16,185,129,0.06)",
                        borderColor: "rgba(16,185,129,0.2)",
                      }}
                    >
                      <p className="text-xs text-[var(--neon-emerald)] font-semibold uppercase tracking-wider mb-1">
                        ✦ Impact
                      </p>
                      <p className="text-xs text-gray-300 leading-relaxed">
                        {project.impact}
                      </p>
                    </div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border text-sm transition-all hover:scale-105"
                      style={{
                        borderColor: "rgba(124,58,237,0.4)",
                        color: "var(--neon-violet)",
                      }}
                    >
                      <Github size={16} />
                      View Code
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a
            href="https://github.com/piyushTIWARI-786"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border text-sm font-mono transition-all hover:scale-105"
            style={{
              borderColor: "rgba(124,58,237,0.3)",
              color: "var(--neon-violet)",
              background: "rgba(124,58,237,0.06)",
            }}
          >
            <Github size={16} />
            View All Projects on GitHub
            <ExternalLink size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}