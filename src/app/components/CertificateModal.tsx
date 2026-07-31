// components/CertificateModal.tsx
import { AnimatePresence, motion } from "motion/react";
import {
  X,
  Calendar,
  Building2,
  BadgeCheck,
  ExternalLink,
  FileText,
} from "lucide-react";
import type { Certificate } from "../../data/certificates";

interface Props {
  certificate: Certificate | null;
  onClose: () => void;
}

// ── Image with graceful fallback ──────────────────────────────
function CertificateImage({ cert }: { cert: Certificate }) {
  const Icon = cert.icon;

  // PDF-only entry — embed the PDF directly
  if (cert.pdf && !cert.image.match(/\.(webp|png|jpg|jpeg|avif|gif)$/i)) {
    return (
      <div className="relative w-full h-full flex items-center justify-center bg-black p-4">
        <iframe
          src={cert.pdf}
          title={cert.title}
          className="w-full h-[80vh] rounded-xl bg-white"
        />
      </div>
    );
  }

  // Has a PDF companion — show image in card, PDF in modal via iframe tab
  if (cert.pdf) {
    return (
      <div className="relative w-full h-full bg-black flex flex-col overflow-hidden">
        {/* Scrollable image preview */}
        <div className="flex-1 overflow-auto flex items-center justify-center p-6">
          <motion.img
            src={cert.image}
            alt={cert.title}
            className="rounded-2xl shadow-2xl w-full object-contain"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4 }}
            onError={(e) => {
              // If webp preview missing, hide and show PDF fallback
              (e.currentTarget as HTMLImageElement).style.display = "none";
              const sibling = e.currentTarget.nextElementSibling as HTMLElement;
              if (sibling) sibling.style.display = "flex";
            }}
          />
          {/* Fallback when image fails — show PDF iframe instead */}
          <div
            className="hidden w-full h-full"
            style={{ display: "none" }}
          >
            <iframe
              src={cert.pdf}
              title={cert.title}
              className="w-full h-[75vh] rounded-xl bg-white"
            />
          </div>
        </div>

        {/* Open PDF button at bottom */}
        <div
          className="px-6 py-3 border-t flex items-center gap-2"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}
        >
          <FileText className="w-4 h-4 text-gray-500" />
          <span className="text-xs text-gray-500 font-mono">
            PDF document available
          </span>
          <a
            href={cert.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto text-xs flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-colors hover:bg-white/5"
            style={{
              color: cert.accent,
              borderColor: `${cert.accent}30`,
            }}
          >
            <ExternalLink className="w-3 h-3" />
            Open PDF
          </a>
        </div>
      </div>
    );
  }

  // Normal image certificate
  return (
    <div className="relative bg-black flex items-center justify-center p-8 overflow-auto h-full">
      <motion.img
        src={cert.image}
        alt={cert.title}
        className="rounded-2xl shadow-2xl w-full object-contain"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4 }}
        onError={(e) => {
          // Replace broken image with styled icon fallback
          const parent = (e.currentTarget as HTMLImageElement).parentElement;
          if (parent) {
            parent.innerHTML = `
              <div style="
                display:flex;flex-direction:column;align-items:center;
                justify-content:center;gap:12px;width:100%;height:100%;
                color:#6b7280;font-family:monospace;font-size:12px;
              ">
                <div style="
                  width:64px;height:64px;border-radius:16px;
                  display:flex;align-items:center;justify-content:center;
                  background:${cert.accent}15;border:1px solid ${cert.accent}30;
                ">
                  <svg width="28" height="28" fill="none" stroke="${cert.accent}" 
                    stroke-width="1.5" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 
                      2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976
                      -2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065
                      .21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 
                      00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 
                      0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 
                      0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 
                      8.25 6.108V19.5a2.25 2.25 0 002.25 2.25h.75"/>
                  </svg>
                </div>
                <span>Preview not available</span>
              </div>
            `;
          }
        }}
      />
    </div>
  );
}

export default function CertificateModal({ certificate, onClose }: Props) {
  if (!certificate) return null;

  const Icon = certificate.icon;

  return (
    <AnimatePresence>
      {certificate && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-xl"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.96 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="relative w-full max-w-5xl max-h-[92vh] overflow-hidden rounded-3xl border"
            style={{
              background: "#09090b",
              borderColor: `${certificate.accent}25`,
              boxShadow: `0 0 80px ${certificate.accent}20`,
            }}
          >
            {/* Ambient glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `radial-gradient(circle at top right, ${certificate.accent}18, transparent 55%)`,
              }}
            />

            {/* Close */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-50 h-10 w-10 rounded-full border border-white/10 bg-white/5 backdrop-blur-lg transition hover:bg-white/10 flex items-center justify-center"
            >
              <X className="h-4 w-4 text-white" />
            </button>

            <div className="grid lg:grid-cols-[1fr_420px] h-full max-h-[92vh]">
              {/* ── Left: Image / PDF ── */}
              <div className="relative overflow-auto min-h-[300px] lg:min-h-0">
                <CertificateImage cert={certificate} />
              </div>

              {/* ── Right: Details ── */}
              <div
                className="flex flex-col justify-between p-8 overflow-y-auto border-l"
                style={{ borderColor: "rgba(255,255,255,0.06)" }}
              >
                <div>
                  {/* Verified badge */}
                  <span
                    className="inline-flex items-center gap-1.5 mb-5 rounded-full border px-3 py-1.5 text-[11px] font-semibold uppercase tracking-widest"
                    style={{
                      color: certificate.accent,
                      borderColor: `${certificate.accent}35`,
                      background: `${certificate.accent}12`,
                    }}
                  >
                    <BadgeCheck className="w-3.5 h-3.5" />
                    Verified Certificate
                  </span>

                  {/* Icon + title */}
                  <div className="flex items-start gap-4 mb-5">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                      style={{
                        background: `${certificate.accent}15`,
                        border: `1px solid ${certificate.accent}25`,
                      }}
                    >
                      <Icon className="w-6 h-6" style={{ color: certificate.accent }} />
                    </div>
                    <h2 className="text-2xl font-bold text-white leading-tight">
                      {certificate.title}
                    </h2>
                  </div>

                  {/* Meta */}
                  <div
                    className="space-y-3 mb-6 pb-6 border-b"
                    style={{ borderColor: "rgba(255,255,255,0.06)" }}
                  >
                    <div className="flex items-center gap-2.5 text-sm text-gray-400">
                      <Building2 className="w-4 h-4 text-gray-600 shrink-0" />
                      {certificate.issuer}
                    </div>
                    <div className="flex items-center gap-2.5 text-sm text-gray-400">
                      <Calendar className="w-4 h-4 text-gray-600 shrink-0" />
                      {certificate.date}
                    </div>
                    {certificate.credential && (
                      <div className="flex items-center gap-2.5 text-sm text-gray-400">
                        <BadgeCheck className="w-4 h-4 text-gray-600 shrink-0" />
                        <span className="font-mono text-xs">{certificate.credential}</span>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-7 mb-6">
                    {certificate.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {certificate.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border px-3 py-1 text-xs font-mono"
                        style={{
                          background: `${certificate.accent}08`,
                          borderColor: `${certificate.accent}20`,
                          color: certificate.accent,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-3 mt-8">
                  {certificate.pdf && (
                    <a
                      href={certificate.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-medium transition-all hover:scale-[1.02]"
                      style={{
                        background: `linear-gradient(135deg, ${certificate.accent}, ${certificate.accent}cc)`,
                        color: "#fff",
                        boxShadow: `0 0 20px ${certificate.accent}35`,
                      }}
                    >
                      <FileText className="w-4 h-4" />
                      Open Full PDF
                      <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </a>
                  )}

                  <button
                    onClick={onClose}
                    className="flex items-center justify-center gap-2 rounded-xl border px-5 py-3 text-sm transition-all hover:bg-white/5"
                    style={{ borderColor: "rgba(255,255,255,0.08)", color: "#9ca3af" }}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}