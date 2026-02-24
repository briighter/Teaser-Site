import { type ReactNode } from "react";

export function PageHero({
  eyebrow,
  heading,
  children,
}: {
  eyebrow: string;
  heading: string;
  children?: ReactNode;
}) {
  return (
    <section
      className="border-b border-[var(--color-outline-variant)] py-16 pb-12"
      style={{ background: "var(--color-surface-variant)" }}
      aria-label="Page header"
    >
      <div className="mx-auto max-w-[1120px] px-6">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.1em] text-[var(--color-text-muted)]">
          {eyebrow}
        </p>
        <h1 className="font-[family-name:var(--font-display)] text-[clamp(2.25rem,5vw,3rem)] font-extrabold leading-[1.15] tracking-tight text-[var(--color-text-primary)]">
          {heading}
        </h1>
        {children}
      </div>
    </section>
  );
}
