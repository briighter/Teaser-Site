import Link from "next/link";

export function DownloadCTA() {
  return (
    <section
      id="download"
      className="py-24 text-center"
      style={{ background: "var(--color-primary)" }}
      aria-labelledby="cta-heading"
    >
      <div className="mx-auto max-w-[1120px] px-6">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.1em] text-[var(--color-text-muted)]">
          Get Started
        </p>
        <h2
          id="cta-heading"
          className="mb-4 font-[family-name:var(--font-display)] text-[2.25rem] font-extrabold leading-[1.15] tracking-tight text-[var(--color-accent)]"
        >
          Your studio. Your curriculum.
        </h2>
        <p className="mx-auto mb-8 max-w-[480px] text-lg text-[rgba(244,244,249,0.7)]">
          Download Teaser and start building workouts that your clients will
          feel.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="#"
            className="inline-flex items-center gap-2 rounded-[8px] bg-[var(--color-primary)] border-2 border-[var(--color-accent)] px-8 py-4 text-base font-bold uppercase tracking-[0.08em] text-[var(--color-accent)] transition-all duration-150 hover:-translate-y-0.5 hover:bg-[var(--color-accent)] hover:text-[var(--color-on-accent)] hover:shadow-[0_8px_32px_rgba(184,219,217,0.3)] active:translate-y-0 no-underline"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
            App Store
          </Link>
          <Link
            href="#"
            className="inline-flex items-center gap-2 rounded-[8px] border-2 border-[var(--color-on-primary)] px-8 py-4 text-base font-bold uppercase tracking-[0.08em] text-[var(--color-on-primary)] transition-all duration-150 hover:bg-[var(--color-on-primary)] hover:text-[var(--color-primary)] no-underline"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.18 23.76c.37.2.8.2 1.17 0l11.17-6.45-2.34-2.34L3.18 23.76zm14.29-8.21L5.29 9.1 3.18.24c-.37-.2-.8-.2-1.17 0C1.59.52 1.5.95 1.5 1.38v21.24c0 .43.09.86.51 1.14.37.2.8.2 1.17 0l11.17-6.45L16.69 15l.78 2.55zm.67-8.4L6.96.7 17.47 6.94l-2.28 2.27 2.95.94zM20.82 11l-2.1-1.21-2.3 2.3 2.3 2.3L20.87 13c.63-.36.63-1.6-.05-2z"/></svg>
            Google Play
          </Link>
        </div>
      </div>
    </section>
  );
}
