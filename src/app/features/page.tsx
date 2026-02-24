import { PageHero } from "@/components/page-hero";
import { DownloadCTA } from "@/components/download-cta";
import { FeatureDeep } from "@/components/features/feature-deep";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features — Teaser Fitness Curriculum Platform",
};

const vault = {
  eyebrow: "Exercise Vault",
  heading: "Your complete movement library",
  body: "Access hundreds of categorized exercises or build your own custom movements. Filter by muscle group, equipment type, intensity, and more. Every exercise you need is a search away.",
  bullets: [
    "Browse a curated library of 100+ exercises",
    "Create and save custom movements with full descriptions",
    "Filter by muscle group, equipment, and intensity",
    "Add coaching cues and demo notes to each exercise",
    "Organize into personal collections for quick access",
  ],
};

const builder = {
  eyebrow: "Workout Builder",
  heading: "Architect every workout in detail",
  body: "Design structured workout sequences with a clean drag-and-drop interface. Set reps, sets, rest periods, tempo, and coaching cues for every exercise. Build once, reuse forever.",
  bullets: [
    "Drag-and-drop exercise sequencing",
    "Per-exercise reps, sets, rest, and tempo settings",
    "Add coaching cues and modification options",
    "Duplicate and remix existing workouts",
    "Organize workouts into programs and series",
  ],
};

const scheduler = {
  eyebrow: "Class Scheduler",
  heading: "Your studio calendar, organized",
  body: "Manage your entire teaching schedule in one place. Assign workouts to classes, track class history, and stay prepared for every session across all your locations.",
  bullets: [
    "Calendar-based class scheduling view",
    "Assign workouts directly to scheduled classes",
    "Multi-studio and multi-location support",
    "Class history and curriculum tracking",
    "Recurring class series management",
  ],
};

const org = {
  eyebrow: "Organization Management",
  heading: "Run your studio, not just your classes",
  body: "Manage multiple studios, teams of instructors, and shared exercise libraries under one organization. Teaser gives studio owners and lead instructors full control over shared resources.",
  bullets: [
    "Create and manage organizations with multiple locations",
    "Invite and manage instructor team members",
    "Share exercise libraries and workout templates across your team",
    "Role-based access for owners, admins, and instructors",
    "Organization-wide class scheduling overview",
  ],
};

export default function FeaturesPage() {
  return (
    <>
      <PageHero eyebrow="Platform" heading="Built for the way instructors actually work">
        <p className="mt-4 max-w-[560px] text-lg text-[var(--color-text-secondary)]">
          Every tool in Teaser was designed around the real workflow of
          professional fitness instructors — not generic gym management
          software.
        </p>
      </PageHero>

      <FeatureDeep {...vault} mockup="vault" />

      <section style={{ background: "var(--color-surface-variant)" }}>
        <FeatureDeep {...builder} mockup="builder" reverse />
      </section>

      <FeatureDeep {...scheduler} mockup="scheduler" />

      <section style={{ background: "var(--color-surface-variant)" }}>
        <FeatureDeep {...org} mockup="org" reverse />
      </section>

      <DownloadCTA />
    </>
  );
}
