"use client";

import Link from "next/link";
import { motion } from "motion/react";

const words = ["Build.", "Schedule.", "Teach."];

export function HeroSection() {
  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden"
      style={{ background: "linear-gradient(180deg, #000000 0%, #162430 100%)" }}
      aria-label="Hero"
    >
      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(184,219,217,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(184,219,217,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      {/* Lime glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(88,111,124,0.15), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-280 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-6"
        >
          <span className="inline-flex items-center rounded-sm bg-(--color-accent) px-3 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-(--color-on-accent)">
            NOW AVAILABLE
          </span>
        </motion.div>

        <h1 className="mb-6 font-(family-name:--font-display) text-[clamp(2.25rem,6vw,3.75rem)] font-extrabold leading-[1.08] tracking-tight text-(--color-on-primary)">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.15 + i * 0.12,
                duration: 0.5,
                ease: "easeOut",
              }}
              className="mr-[0.25em] inline-block"
            >
              {word}
            </motion.span>
          ))}
          <br />
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.5, ease: "easeOut" }}
            className="inline-block text-(--color-dark-text-secondary)"
            style={{ fontSize: "0.55em", fontWeight: 700 }}
          >
            The curriculum architect for fitness professionals.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.4, ease: "easeOut" }}
          className="mb-8 max-w-140 text-lg text-(--color-dark-text-secondary)"
        >
          Design workouts, schedule classes, and manage your studio — all from
          one command center built for instructors who take their craft
          seriously.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.4, ease: "easeOut" }}
          className="flex flex-wrap gap-4"
        >
          <Link
            href="#download"
            className="inline-flex items-center gap-2 rounded-lg bg-(--color-accent) px-8 py-4 text-base font-bold uppercase tracking-[0.08em] text-(--color-on-accent) transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(184,219,217,0.3)] active:translate-y-0 no-underline"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
            App Store
          </Link>
          <Link
            href="#download"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-(--color-on-primary) px-8 py-4 text-base font-bold uppercase tracking-[0.08em] text-(--color-on-primary) transition-all duration-150 hover:bg-(--color-on-primary) hover:text-(--color-primary) no-underline"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.18 23.76c.37.2.8.2 1.17 0l11.17-6.45-2.34-2.34L3.18 23.76zm14.29-8.21L5.29 9.1 3.18.24c-.37-.2-.8-.2-1.17 0C1.59.52 1.5.95 1.5 1.38v21.24c0 .43.09.86.51 1.14.37.2.8.2 1.17 0l11.17-6.45L16.69 15l.78 2.55zm.67-8.4L6.96.7 17.47 6.94l-2.28 2.27 2.95.94zM20.82 11l-2.1-1.21-2.3 2.3 2.3 2.3L20.87 13c.63-.36.63-1.6-.05-2z"/></svg>
            Google Play
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
