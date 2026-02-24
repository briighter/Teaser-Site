"use client";

import { Reveal } from "@/components/reveal";

/* ---------- Mockup mini‑components ---------- */
function MockupShell({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-[8px] bg-[var(--color-primary)] p-6 font-[family-name:var(--font-mono)] text-sm text-[var(--color-on-primary)] shadow-[0_8px_24px_rgba(47,69,80,0.12),0_4px_8px_rgba(47,69,80,0.08)]">
      <div className="mb-6 flex items-center gap-2 border-b border-[rgba(244,244,249,0.12)] pb-4">
        <span className="h-[10px] w-[10px] rounded-full bg-[rgba(244,244,249,0.2)]" />
        <span className="h-[10px] w-[10px] rounded-full bg-[rgba(244,244,249,0.2)]" />
        <span className="h-[10px] w-[10px] rounded-full bg-[rgba(244,244,249,0.2)]" />
        <span className="ml-2 text-xs uppercase tracking-[0.08em] text-[var(--color-text-muted)]">{title}</span>
      </div>
      {children}
    </div>
  );
}

function Row({ accent, children }: { accent?: boolean; children: React.ReactNode }) {
  return (
    <div className={`mb-2 flex items-center gap-3 rounded-[6px] px-4 py-3 ${accent ? "bg-[rgba(184,219,217,0.12)]" : ""}`}>
      {children}
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-[4px] bg-[rgba(184,219,217,0.18)] px-2 py-[2px] text-xs uppercase tracking-[0.06em] text-[var(--color-accent)]">
      {children}
    </span>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <span className="text-xs text-[var(--color-text-muted)]">{children}</span>;
}

function Value({ children }: { children: React.ReactNode }) {
  return <span className="text-sm font-semibold text-[var(--color-on-primary)]">{children}</span>;
}

/* ---------- Pre-built mockups ---------- */
function VaultMockup() {
  return (
    <MockupShell title="Exercise Vault">
      <Row accent><Tag>Upper</Tag><Value>Barbell Bench Press</Value></Row>
      <Row><Tag>Core</Tag><Value>Plank Hold</Value></Row>
      <Row><Tag>Lower</Tag><Value>Goblet Squat</Value></Row>
      <Row><Tag>Cardio</Tag><Value>Box Jump</Value></Row>
      <Row><Tag>Upper</Tag><Value>Pull-Up</Value></Row>
      <div className="mt-4 border-t border-[rgba(244,244,249,0.1)] pt-4">
        <Label>Showing 5 of 100+ exercises</Label>
      </div>
    </MockupShell>
  );
}

function BuilderMockup() {
  return (
    <MockupShell title="Workout Builder">
      <div className="mb-3"><Label>MONDAY FULL BODY — 45 MIN</Label></div>
      <Row accent>
        <span className="text-sm font-bold text-[var(--color-accent)]">A1</span>
        <div className="flex-1"><Value>Barbell Back Squat</Value><br /><Label>4 × 8 · Rest 90s</Label></div>
      </Row>
      <Row>
        <span className="text-sm font-bold text-[rgba(184,219,217,0.5)]">A2</span>
        <div className="flex-1"><Value>Romanian Deadlift</Value><br /><Label>4 × 10 · Rest 90s</Label></div>
      </Row>
      <Row>
        <span className="text-sm font-bold text-[rgba(184,219,217,0.5)]">B1</span>
        <div className="flex-1"><Value>Push-Up Variation</Value><br /><Label>3 × 12 · Rest 60s</Label></div>
      </Row>
    </MockupShell>
  );
}

function SchedulerMockup() {
  return (
    <MockupShell title="Class Scheduler · February 2026">
      <Row accent>
        <div className="flex-1"><Value>Mon 9:00 AM — HIIT Bootcamp</Value><br /><Label>Monday Full Body assigned</Label></div>
        <Tag>Ready</Tag>
      </Row>
      <Row>
        <div className="flex-1"><Value>Wed 6:30 AM — Strength 101</Value><br /><Label>Upper Body Push assigned</Label></div>
        <Tag>Ready</Tag>
      </Row>
      <Row>
        <div className="flex-1"><Value>Fri 7:00 AM — Core Flow</Value><br /><Label>No workout assigned</Label></div>
        <Label>Draft</Label>
      </Row>
    </MockupShell>
  );
}

function OrgMockup() {
  return (
    <MockupShell title="Organization · Iron Temple Gym">
      <Row accent><Value>J. Morrison</Value><span className="ml-auto"><Tag>Owner</Tag></span></Row>
      <Row><Value>S. Chen</Value><span className="ml-auto"><Label>Admin</Label></span></Row>
      <Row><Value>A. Okafor</Value><span className="ml-auto"><Label>Instructor</Label></span></Row>
      <Row><Value>L. Petrova</Value><span className="ml-auto"><Label>Instructor</Label></span></Row>
      <div className="mt-4 border-t border-[rgba(244,244,249,0.1)] pt-4">
        <Label>3 locations · 4 members</Label>
      </div>
    </MockupShell>
  );
}

const mockups: Record<string, () => React.JSX.Element> = {
  vault: VaultMockup,
  builder: BuilderMockup,
  scheduler: SchedulerMockup,
  org: OrgMockup,
};

/* ---------- Feature section ---------- */
export function FeatureDeep({
  eyebrow,
  heading,
  body,
  bullets,
  mockup,
  reverse = false,
}: {
  eyebrow: string;
  heading: string;
  body: string;
  bullets: string[];
  mockup: string;
  reverse?: boolean;
}) {
  const Mockup = mockups[mockup];

  return (
    <div className="py-24">
      <div className="mx-auto max-w-[1120px] px-6">
        <Reveal>
          <div className={`grid items-center gap-16 md:grid-cols-2 ${reverse ? "direction-rtl" : ""}`}>
            <div className={reverse ? "direction-ltr" : ""}>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.1em] text-[var(--color-text-muted)]">
                {eyebrow}
              </p>
              <h2 className="mb-4 font-[family-name:var(--font-display)] text-[2.25rem] font-extrabold leading-[1.15] tracking-tight text-[var(--color-text-primary)]">
                {heading}
              </h2>
              <p className="mb-6 leading-relaxed text-[var(--color-text-secondary)]">{body}</p>
              <ul className="flex flex-col gap-3">
                {bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 text-[var(--color-text-secondary)]"
                  >
                    <span className="flex-shrink-0 text-xl font-bold leading-[1.2] text-[var(--color-accent)]">
                      ›
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className={reverse ? "direction-ltr" : ""}>
              {Mockup && <Mockup />}
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
