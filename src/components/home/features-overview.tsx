"use client";

import Link from "next/link";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/reveal";

const features = [
  {
    title: "Exercise Vault",
    body: "Browse, filter, and organize hundreds of exercises. Build your personal exercise library and tag movements by muscle group, equipment, and intensity.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M4 6h16M4 10h16M4 14h10M4 18h6"/></svg>
    ),
  },
  {
    title: "Workout Builder",
    body: "Design structured workout sequences with drag-and-drop simplicity. Set reps, sets, rest periods, and cues for each exercise.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6M9 12h6M9 15h4"/></svg>
    ),
  },
  {
    title: "Class Scheduler",
    body: "Calendar-based class management for your entire studio. Assign workouts to classes, track attendance, and keep your schedule organized.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
    ),
  },
];

export function FeaturesOverview() {
  return (
    <section className="py-24" style={{ background: "linear-gradient(180deg, #f4f4f9 0%, #eceef5 100%)" }} aria-labelledby="features-heading">
      <div className="mx-auto max-w-280 px-6">
        <Reveal className="mx-auto mb-16 max-w-160 text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-(--color-text-muted)">
            Features
          </p>
          <h2
            id="features-heading"
            className="mb-4 font-(family-name:--font-display) text-[2.25rem] font-extrabold leading-[1.15] tracking-tight text-(--color-text-primary)"
          >
            Everything you need to run your studio
          </h2>
          <p className="text-lg text-(--color-text-secondary)">
            From exercise library to class scheduling, Teaser gives
            professional fitness instructors a complete command center.
          </p>
        </Reveal>

        <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <StaggerItem key={f.title}>
              <div className="flex h-full flex-col rounded-lg border border-(--color-outline-variant) bg-white p-8 shadow-[0_2px_8px_rgba(47,69,80,0.06),0_1px_2px_rgba(47,69,80,0.04)] transition-shadow duration-200 hover:shadow-[0_4px_16px_rgba(47,69,80,0.1)]">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-(--color-surface-variant) text-(--color-text-primary)">
                  {f.icon}
                </div>
                <h3 className="mb-3 text-[1.375rem] font-bold tracking-tight text-(--color-text-primary)">
                  {f.title}
                </h3>
                <p className="flex-1 leading-relaxed text-(--color-text-secondary)">
                  {f.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="mt-12 text-center">
          <Link
            href="/features"
            className="inline-flex items-center rounded-lg border-2 border-(--color-primary) px-8 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-(--color-primary) transition-all duration-150 hover:bg-(--color-primary) hover:text-white no-underline"
          >
            See all features
          </Link>
        </div>
      </div>
    </section>
  );
}
