"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const links = [
  { href: "/features", label: "Features" },
  { href: "/support", label: "Support" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const prevPathname = useRef(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change — deferred to avoid setState-in-effect lint error
  useEffect(() => {
    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname;
      const id = setTimeout(() => setMobileOpen(false), 0);
      return () => clearTimeout(id);
    }
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300 ${
        scrolled
          ? "bg-[#162430]/95 border-b border-[#3f5661]"
          : "bg-[#162430]/80"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-280 items-center justify-between px-6">
        <Link
          href="/"
          className="font-(family-name:--font-display) text-xl font-extrabold tracking-tight text-(--color-on-primary) no-underline"
        >
          TEASER
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`text-sm font-semibold uppercase tracking-[0.08em] transition-colors duration-150 no-underline ${
                  pathname === l.href
                    ? "text-(--color-accent)"
                    : "text-(--color-dark-text-secondary) hover:text-(--color-on-primary)"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <Link
            href="/#download"
            className="hidden rounded-lg bg-(--color-accent) px-6 py-2.5 text-sm font-bold uppercase tracking-[0.08em] text-(--color-on-accent) transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(184,219,217,0.3)] md:inline-flex no-underline"
          >
            DOWNLOAD
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex flex-col gap-1.25 p-2 md:hidden"
            aria-label="Toggle navigation"
          >
            <span
              className={`block h-0.5 w-6 rounded-sm bg-(--color-on-primary) transition-transform duration-200 ${
                mobileOpen ? "translate-y-1.75 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 rounded-sm bg-(--color-on-primary) transition-opacity duration-200 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 rounded-sm bg-(--color-on-primary) transition-transform duration-200 ${
                mobileOpen ? "-translate-y-1.75 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-b border-(--color-dark-outline) bg-(--color-dark-surface) px-6 py-6 md:hidden">
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`text-sm font-semibold uppercase tracking-[0.08em] no-underline ${
                    pathname === l.href
                      ? "text-(--color-accent)"
                      : "text-(--color-dark-text-secondary)"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/#download"
                className="mt-2 inline-block rounded-lg bg-(--color-accent) px-6 py-2.5 text-sm font-bold uppercase tracking-[0.08em] text-(--color-on-accent) no-underline"
              >
                DOWNLOAD
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
