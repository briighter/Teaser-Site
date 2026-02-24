import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/support", label: "Support" },
  { href: "/about", label: "About" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-outline-variant)] bg-[var(--color-surface)]">
      <div className="mx-auto max-w-[1120px] px-6 pt-12 pb-8">
        <div className="mb-8 flex flex-wrap items-start justify-between gap-8">
          <div className="flex flex-col gap-3">
            <Link
              href="/"
              className="font-[family-name:var(--font-display)] text-xl font-extrabold tracking-tight text-[var(--color-text-primary)] no-underline"
            >
              TEASER
            </Link>
            <p className="text-sm text-[var(--color-text-muted)]">
              The curriculum architect for fitness professionals.
            </p>
          </div>
          <nav className="flex flex-wrap gap-8" aria-label="Footer navigation">
            {footerLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-[var(--color-text-secondary)] transition-colors duration-150 hover:text-[var(--color-text-primary)] no-underline"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="border-t border-[var(--color-outline-variant)] pt-6 text-xs text-[var(--color-text-muted)]">
          <p>&copy; {new Date().getFullYear()} Teaser. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
