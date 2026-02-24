export function SocialProofBar() {
  return (
    <div
      className="border-y border-[var(--color-dark-outline)] py-6"
      style={{ background: "#162430" }}
      aria-label="Social proof"
    >
      <div className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-center gap-8 px-6">
        <span className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-text-muted)]">
          Built for fitness instructors
        </span>
        <div className="hidden h-5 w-px bg-[var(--color-dark-outline)] sm:block" aria-hidden="true" />
        <span className="font-[family-name:var(--font-mono)] text-sm font-semibold text-[var(--color-accent)]">
          100+ Exercises
        </span>
        <div className="hidden h-5 w-px bg-[var(--color-dark-outline)] sm:block" aria-hidden="true" />
        <span className="font-[family-name:var(--font-mono)] text-sm font-semibold text-[var(--color-dark-text)]">
          Unlimited Workouts
        </span>
        <div className="hidden h-5 w-px bg-[var(--color-dark-outline)] sm:block" aria-hidden="true" />
        <span className="font-[family-name:var(--font-mono)] text-sm font-semibold text-[var(--color-dark-text)]">
          Multi-Studio Support
        </span>
      </div>
    </div>
  );
}
