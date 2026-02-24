"use client";

import { Reveal, StaggerContainer, StaggerItem } from "@/components/reveal";

const steps = [
  {
    num: "01",
    title: "Build your exercise library",
    desc: "Add exercises from our vault or create custom movements. Tag them by category, muscle group, and equipment.",
  },
  {
    num: "02",
    title: "Architect your workouts",
    desc: "Sequence exercises into structured workouts. Set timing, reps, coaching notes, and intensity for each block.",
  },
  {
    num: "03",
    title: "Schedule and teach",
    desc: "Assign workouts to upcoming classes, manage your studio calendar, and show up prepared every session.",
  },
];

export function HowItWorks() {
  return (
    <section
      className="py-24"
      style={{ background: "var(--color-surface-variant)" }}
      aria-labelledby="how-heading"
    >
      <div className="mx-auto max-w-[1120px] px-6">
        <Reveal className="mx-auto mb-16 max-w-[640px] text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.1em] text-[var(--color-text-muted)]">
            How It Works
          </p>
          <h2
            id="how-heading"
            className="font-[family-name:var(--font-display)] text-[2.25rem] font-extrabold leading-[1.15] tracking-tight text-[var(--color-text-primary)]"
          >
            From exercise to curriculum in three steps
          </h2>
        </Reveal>

        <StaggerContainer className="relative grid gap-8 md:grid-cols-3">
          {/* Connector line — desktop only */}
          <div
            className="pointer-events-none absolute top-7 left-[calc(16.67%+32px)] right-[calc(16.67%+32px)] hidden h-px bg-[var(--color-outline-variant)] md:block"
            aria-hidden="true"
          />

          {steps.map((s) => (
            <StaggerItem key={s.num} className="relative z-10 flex flex-col items-start">
              <div className="mb-6 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-[8px] bg-[var(--color-accent)] font-[family-name:var(--font-mono)] text-xl font-bold text-[var(--color-on-accent)]">
                {s.num}
              </div>
              <h3 className="mb-3 text-lg font-bold text-[var(--color-text-primary)]">
                {s.title}
              </h3>
              <p className="leading-relaxed text-[var(--color-text-secondary)]">
                {s.desc}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
