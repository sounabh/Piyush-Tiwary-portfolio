// components/Certificates.tsx
"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  Sparkles,
  Eye,
  ChevronDown,
  ChevronUp,
  Building2,
  Calendar,
} from "lucide-react";

import { certificates, type Certificate } from "../../data/certificates";
import CertificateModal from "./CertificateModal";

// ── Single card (no image preview) ───────────────────────────
function CertificateCard({
  certificate,
  index,
  onOpen,
}: {
  certificate: Certificate;
  index: number;
  onOpen: (c: Certificate) => void;
}) {
  const Icon = certificate.icon;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.94 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      whileHover={{ y: -5 }}
      className="group relative overflow-hidden rounded-2xl border cursor-pointer"
      style={{
        background: "rgba(255,255,255,0.03)",
        borderColor: "rgba(255,255,255,0.08)",
        backdropFilter: "blur(14px)",
      }}
      onClick={() => onOpen(certificate)}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"
        style={{
          background: `radial-gradient(circle at top right, ${certificate.accent}20, transparent 60%)`,
        }}
      />

      {/* Hover border */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"
        style={{ border: `1px solid ${certificate.accent}35` }}
      />

      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{
          background: `linear-gradient(to right, transparent, ${certificate.accent}60, transparent)`,
          opacity: 0.5,
        }}
      />

      <div className="p-6">
        {/* ── Header: Icon + Title + Badge ── */}
        <div className="flex items-start gap-4 mb-4">
          <div
            className="h-12 w-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
            style={{
              background: `${certificate.accent}12`,
              border: `1px solid ${certificate.accent}25`,
            }}
          >
            <Icon size={22} style={{ color: certificate.accent }} />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-sm font-bold text-white leading-snug line-clamp-2">
                {certificate.title}
              </h3>
              {certificate.featured && (
                <span
                  className="shrink-0 rounded-full px-2 py-0.5 text-[9px] font-semibold uppercase tracking-widest"
                  style={{
                    background: `${certificate.accent}15`,
                    color: certificate.accent,
                    border: `1px solid ${certificate.accent}28`,
                  }}
                >
                  Featured
                </span>
              )}
            </div>
          </div>
        </div>

        {/* ── Meta row ── */}
        <div className="flex items-center gap-4 mb-4 text-[11px] text-gray-500 font-mono">
          <span className="flex items-center gap-1.5">
            <Building2 className="w-3 h-3 text-gray-600" />
            {certificate.issuer}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3 h-3 text-gray-600" />
            {certificate.date}
          </span>
        </div>

        {/* ── Description ── */}
        <p className="text-gray-500 text-xs leading-relaxed mb-5 line-clamp-2">
          {certificate.description}
        </p>

        {/* ── Tags ── */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {certificate.tags.map((tag: string) => (
            <span
              key={tag}
              className="rounded-full px-2.5 py-0.5 text-[10px] font-mono border"
              style={{
                background: `${certificate.accent}08`,
                borderColor: `${certificate.accent}18`,
                color: certificate.accent,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* ── Credential ID (if exists) ── */}
        {certificate.credential && (
          <div
            className="mb-5 px-3 py-2 rounded-lg border"
            style={{
              background: "rgba(255,255,255,0.02)",
              borderColor: "rgba(255,255,255,0.06)",
            }}
          >
            <p className="text-[10px] font-mono text-gray-600">
              Credential:{" "}
              <span className="text-gray-400">{certificate.credential}</span>
            </p>
          </div>
        )}

        {/* ── Divider ── */}
        <div
          className="h-px w-full mb-4"
          style={{
            background: `linear-gradient(to right, transparent, rgba(255,255,255,0.06), transparent)`,
          }}
        />

        {/* ── View CTA ── */}
        <button
          className="group/btn flex items-center gap-2 text-xs font-medium w-full justify-center py-2 rounded-xl border transition-all duration-300 group-hover:border-transparent"
          style={{
            color: certificate.accent,
            borderColor: "rgba(255,255,255,0.06)",
            background: "transparent",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = `${certificate.accent}10`;
            e.currentTarget.style.borderColor = `${certificate.accent}25`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
          }}
        >
          <Eye size={14} />
          View Certificate
          <ArrowRight
            size={14}
            className="transition-transform group-hover/btn:translate-x-0.5"
          />
        </button>
      </div>
    </motion.div>
  );
}

// ── Section ───────────────────────────────────────────────────
export default function Certificates() {
  const [showAll, setShowAll] = useState(false);
  const [selected, setSelected] = useState<Certificate | null>(null);

  const visible = useMemo(
    () =>
      showAll ? certificates : certificates.filter((c) => c.featured),
    [showAll]
  );

  const hiddenCount = certificates.filter((c) => !c.featured).length;

  return (
    <section className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* ── Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs uppercase tracking-[0.25em] mb-5"
            style={{
              background: "rgba(124,58,237,0.1)",
              border: "1px solid rgba(124,58,237,0.25)",
              color: "#7c3aed",
            }}
          >
            <Sparkles size={13} />
            Verified Credentials
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
            Certifications
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto leading-relaxed text-base">
            Professional certifications, internship achievements and
            technical recognitions across AI, Data Science and Engineering.
          </p>
        </motion.div>

        {/* ── Grid ── */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {visible.map((cert, i) => (
              <CertificateCard
                key={cert.id}
                certificate={cert}
                index={i}
                onOpen={setSelected}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* ── Show More / Less ── */}
        {hiddenCount > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center mt-10"
          >
            <button
              onClick={() => setShowAll((p) => !p)}
              className="inline-flex items-center gap-2 rounded-2xl border px-7 py-3.5 text-sm font-mono transition-all duration-300 hover:scale-105"
              style={{
                background: "rgba(124,58,237,0.06)",
                borderColor: "rgba(124,58,237,0.25)",
                color: "#7c3aed",
              }}
            >
              {showAll ? (
                <>
                  Show Featured Only
                  <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  Show {hiddenCount} More
                  <ChevronDown className="w-4 h-4" />
                </>
              )}
            </button>
          </motion.div>
        )}

        {/* ── Modal ── */}
        <CertificateModal
          certificate={selected}
          onClose={() => setSelected(null)}
        />
      </div>
    </section>
  );
}