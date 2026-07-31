import { motion } from "motion/react";
import { ChevronDown, Sparkles, ArrowRight } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import profilePhoto from "../../imports/pfp.jpg";

interface HeroProps {
  onViewProjects: () => void;
}

const roles = [
  "AI & ML Engineer",
  "RAG Systems Builder",
  "LLM Developer",
  "Data Scientist",
];

// Subtle film-grain texture — no motion, just depth. This is what makes a
// dark hero feel designed instead of flat. Pure CSS, zero asset weight.
const GRAIN_BG =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")";

export function Hero({ onViewProjects }: HeroProps) {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);
  const [countAnimation, setCountAnimation] = useState<number>(0);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const FALLBACK = 394;
    let active = true;
    fetch("/api/visitors")
      .then((r) => r.json())
      .then((d) => {
        if (active)
          setVisitorCount(
            typeof d.visitors === "number" ? d.visitors : FALLBACK
          );
      })
      .catch(() => active && setVisitorCount(FALLBACK));
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    if (visitorCount === null) return;
    const dur = 1200;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(now - start, dur) / dur;
      setCountAnimation(Math.round(visitorCount * (1 - Math.pow(1 - t, 3))));
      if (now - start < dur) requestAnimationFrame(tick);
      else setCountAnimation(visitorCount);
    };
    requestAnimationFrame(tick);
  }, [visitorCount]);

  useEffect(() => {
    const cur = roles[roleIndex];
    let tm: ReturnType<typeof setTimeout>;
    if (!isDeleting && displayed.length < cur.length)
      tm = setTimeout(
        () => setDisplayed(cur.slice(0, displayed.length + 1)),
        80
      );
    else if (!isDeleting && displayed.length === cur.length)
      tm = setTimeout(() => setIsDeleting(true), 2000);
    else if (isDeleting && displayed.length > 0)
      tm = setTimeout(
        () => setDisplayed(cur.slice(0, displayed.length - 1)),
        40
      );
    else if (isDeleting) {
      setIsDeleting(false);
      setRoleIndex((p) => (p + 1) % roles.length);
    }
    return () => clearTimeout(tm);
  }, [displayed, isDeleting, roleIndex]);

  const stats = useMemo(
    () => [
      {
        value: "3+",
        label: "Projects",
        color: "var(--neon-violet)",
      },
      {
        value:
          visitorCount === null ? "···" : countAnimation.toLocaleString(),
        label: "Visitors",
        color: "var(--neon-emerald)",
      },
      {
        value: "1+",
        label: "Years Exp",
        color: "var(--neon-sky)",
      },
    ],
    [visitorCount, countAnimation]
  );

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* ── BG ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Soft radial vignette so the aurora reads as light, not haze */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 30% 35%, rgba(124,58,237,0.10), transparent 55%), radial-gradient(circle at 78% 70%, rgba(16,185,129,0.08), transparent 50%)",
          }}
        />
        <motion.div
          className="absolute top-10 -left-40 w-[520px] h-[520px] rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle, #7c3aed 0%, transparent 70%)",
            filter: "blur(110px)",
          }}
          animate={{ x: [0, 50, 0], y: [0, 35, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-32 right-0 w-[420px] h-[420px] rounded-full opacity-25"
          style={{
            background:
              "radial-gradient(circle, #10b981 0%, transparent 70%)",
            filter: "blur(110px)",
          }}
          animate={{ x: [0, -35, 0], y: [0, -45, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-[280px] h-[280px] rounded-full opacity-[0.14]"
          style={{
            background:
              "radial-gradient(circle, #0ea5e9 0%, transparent 70%)",
            filter: "blur(90px)",
          }}
          animate={{ x: [0, -20, 0], y: [0, 25, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Grain — pinned static, gives the dark bg texture instead of flatness */}
        <div
          className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
          style={{ backgroundImage: GRAIN_BG }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-20 lg:py-0">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-24">
          {/* ── Photo ── */}
          <motion.div
            className="shrink-0"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              className="relative"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Ambient glow */}
              <div
                className="absolute -inset-6 rounded-[2.25rem] opacity-70 blur-3xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(124,58,237,0.35), rgba(14,165,233,0.25))",
                }}
              />

              {/* Rotating gradient ring frame */}
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-60 lg:h-60 rounded-[28px] p-[2px] overflow-hidden">
                <motion.div
                  className="absolute inset-[-60%]"
                  style={{
                    background:
                      "conic-gradient(from 0deg, #7c3aed, #0ea5e9, #10b981, #7c3aed)",
                  }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 9,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <div className="relative w-full h-full rounded-[26px] overflow-hidden bg-[#07060f] group">
                  <img
                    src={profilePhoto}
                    alt="Piyush Tiwari"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(124,58,237,0.15), rgba(14,165,233,0.15))",
                    }}
                  />
                </div>
              </div>

              {/* Status dot */}
              <div
                className="absolute -bottom-2 -right-2 flex items-center gap-1.5 px-2.5 py-1 rounded-full border"
                style={{
                  background: "rgba(6,6,17,0.92)",
                  borderColor: "rgba(16,185,129,0.4)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <span
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ background: "var(--neon-emerald)" }}
                />
                <span className="text-[10px] font-mono text-[var(--neon-emerald)]">
                  Open to Work
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Text ── */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-6"
              style={{
                background: "rgba(124,58,237,0.08)",
                borderColor: "rgba(124,58,237,0.3)",
              }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Sparkles className="w-3 h-3 text-[var(--neon-violet)]" />
              <span className="text-[11px] font-mono text-[var(--neon-violet)] tracking-wider">
                B.Tech ECE • Arya College, Jaipur
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-4 leading-[1.05]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <span className="text-white">Piyush </span>
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #7c3aed, #4f46e5, #0ea5e9)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Tiwari
              </span>
            </motion.h1>

            {/* Typewriter */}
            <motion.div
              className="flex items-center gap-2 mb-5 justify-center lg:justify-start h-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full shrink-0"
                style={{
                  background: "var(--neon-emerald)",
                  boxShadow: "0 0 6px var(--neon-emerald)",
                }}
              />
              <span className="text-lg font-mono text-[var(--neon-emerald)]">
                {displayed}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                >
                  |
                </motion.span>
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-gray-400 text-base leading-relaxed mb-7 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              AI & Data Science enthusiast with hands-on internship
              experience building{" "}
              <span className="text-[var(--neon-violet)] font-medium">
                intelligent automation
              </span>
              ,{" "}
              <span className="text-[var(--neon-emerald)] font-medium">
                RAG systems
              </span>{" "}
              &{" "}
              <span className="text-[var(--neon-sky)] font-medium">
                LLM pipelines
              </span>
              .
            </motion.p>

            {/* Stats */}
            <motion.div
              className="flex items-center gap-6 mb-8 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {stats.map((s, i) => (
                <div key={s.label} className="flex items-center gap-6">
                  <div className="text-center lg:text-left">
                    <div
                      className="text-2xl font-bold font-mono tabular-nums"
                      style={{ color: s.color }}
                    >
                      {s.value}
                    </div>
                    <div className="text-[10px] uppercase tracking-widest text-gray-600 mt-0.5 font-mono">
                      {s.label}
                    </div>
                  </div>
                  {i < stats.length - 1 && (
                    <div
                      className="w-px h-9"
                      style={{ background: "rgba(255,255,255,0.08)" }}
                    />
                  )}
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-7"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <button
                onClick={onViewProjects}
                className="group relative px-7 py-3 rounded-xl flex items-center justify-center gap-2 font-semibold transition-all duration-300 hover:scale-105 text-sm overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
                  boxShadow: "0 0 25px rgba(124,58,237,0.4)",
                }}
              >
                <span
                  className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"
                  style={{
                    background:
                      "linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.25) 50%, transparent 70%)",
                  }}
                />
                <span className="relative text-white">View Projects</span>
                <ArrowRight className="relative w-4 h-4 text-white transition-transform group-hover:translate-x-0.5" />
              </button>

              <a
                href="mailto:tpiyush2003@gmail.com"
                className="group px-7 py-3 rounded-xl flex items-center justify-center gap-2 font-semibold transition-all duration-300 hover:scale-105 text-sm border"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  borderColor: "rgba(124,58,237,0.35)",
                }}
              >
                <span className="text-white group-hover:text-[var(--neon-violet)] transition-colors">
                  Get In Touch
                </span>
              </a>
            </motion.div>

            {/* Skills */}
            <motion.div
              className="flex flex-wrap gap-1.5 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {[
                "Python",
                "LLMs",
                "RAG",
                "n8n",
                "Scikit-learn",
                "SQL",
                "TensorFlow",
              ].map((s, i) => (
                <motion.span
                  key={s}
                  className="px-2.5 py-1 text-[11px] font-mono rounded-md border cursor-default"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    borderColor: "rgba(255,255,255,0.08)",
                    color: "#6b6b8a",
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.75 + i * 0.05 }}
                  whileHover={{
                    borderColor: "rgba(124,58,237,0.4)",
                    color: "#7c3aed",
                    background: "rgba(124,58,237,0.06)",
                  }}
                >
                  {s}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-gray-600" />
        </motion.div>
      </motion.div>
    </section>
  );
}