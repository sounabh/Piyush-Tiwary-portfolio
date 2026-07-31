// components/Expertise.tsx
import { motion } from "motion/react";
import {
  Brain,
  Database,
  BarChart2,
  Workflow,
  Code2,
  Cpu,
} from "lucide-react";

const expertiseAreas = [
  {
    icon: Brain,
    title: "LLMs & RAG Systems",
    description:
      "Building end-to-end RAG pipelines with semantic search, vector embeddings, and LLM-powered responses. Hands-on with LangChain, Ollama, OpenAI, and Pinecone for production-grade AI retrieval.",
    color: "var(--neon-violet)",
    tags: ["LangChain", "RAG", "Pinecone", "OpenAI"],
  },
  {
    icon: Workflow,
    title: "AI Automation & Agents",
    description:
      "Designing intelligent workflow automations using n8n and LLM-driven logic — from business process automation and AI calendar agents to Telegram bots for conversational bookings.",
    color: "var(--neon-emerald)",
    tags: ["n8n", "LLM Agents", "Workflow Design"],
  },
  {
    icon: Database,
    title: "Machine Learning",
    description:
      "Building and evaluating ML regression and classification pipelines with Scikit-learn, including data preprocessing, feature engineering, hyperparameter tuning, and RMSE-optimized models.",
    color: "var(--neon-sky)",
    tags: ["Scikit-learn", "Random Forest", "Regression"],
  },
  {
    icon: BarChart2,
    title: "Data Science & Analytics",
    description:
      "End-to-end data science workflows with Python, Pandas, NumPy, and visualization libraries. EDA, feature importance analysis, correlation heatmaps, and actionable insights from raw data.",
    color: "var(--neon-amber)",
    tags: ["Pandas", "Matplotlib", "Seaborn", "EDA"],
  },
  {
    icon: Code2,
    title: "Prompt Engineering",
    description:
      "Crafting structured, production-grade prompts for LLM systems that convert ambiguous requirements into reliable, scalable AI workflows — applied across internship projects and personal builds.",
    color: "var(--neon-violet)",
    tags: ["Structured Prompts", "LLM Logic", "Chain-of-Thought"],
  },
  {
    icon: Cpu,
    title: "Deep Learning Fundamentals",
    description:
      "Foundational deep learning with TensorFlow and Keras, covering neural network architectures, training pipelines, and model evaluation for classification and pattern recognition tasks.",
    color: "var(--neon-rose)",
    tags: ["TensorFlow", "Keras", "Neural Networks"],
  },
];

export function Expertise() {
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
            className="inline-block text-xs font-mono tracking-widest text-[var(--neon-emerald)] uppercase mb-3 px-3 py-1 rounded-full border"
            style={{
              borderColor: "rgba(16,185,129,0.3)",
              background: "rgba(16,185,129,0.1)",
            }}
          >
            What I Do
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
            Areas of Expertise
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Exploring AI, LLMs, Data Science & Automation through real-world
            projects and internship experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.title}
                className="group relative p-7 rounded-3xl transition-all duration-300 border overflow-hidden card-hover"
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
                  boxShadow: `0 20px 60px ${area.color}20`,
                  borderColor: `${area.color}30`,
                }}
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(to right, transparent, ${area.color}, transparent)`,
                  }}
                />

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `${area.color}15`,
                    border: `1px solid ${area.color}25`,
                  }}
                >
                  <Icon className="w-7 h-7" style={{ color: area.color }} />
                </div>

                {/* Content */}
                <h3
                  className="text-xl font-bold mb-3 transition-colors duration-300 group-hover:text-white"
                  style={{ color: "var(--foreground)" }}
                >
                  {area.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  {area.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {area.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-lg font-mono"
                      style={{
                        background: `${area.color}10`,
                        color: area.color,
                        border: `1px solid ${area.color}20`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at top left, ${area.color}08, transparent 60%)`,
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}