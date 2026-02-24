"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { DownloadCTA } from "@/components/download-cta";

const socials = [
  {
    label: "X (Twitter)",
    href: "https://x.com/realjasonlima",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/@realjasonlima",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.73a8.19 8.19 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.16z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com/realjasonlima",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C16.67.014 16.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jasonlima-/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About" heading="The origin story" />

      {/* Origin Story Section — dark */}
      <section
        className="py-24"
        style={{
          background:
            "linear-gradient(180deg, #0F1410 0%, #1A1E1B 100%)",
        }}
      >
        {/* Subtle grid */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(184,255,87,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(184,255,87,0.03) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-[800px] px-6">
          <Reveal>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.1em] text-[var(--color-text-muted)]">
              How It Started
            </p>
            <h2 className="mb-8 font-[family-name:var(--font-display)] text-[clamp(1.75rem,4vw,2.25rem)] font-extrabold leading-[1.15] tracking-tight text-[var(--color-accent)]">
              It started with a TikTok. Obviously.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-6 text-lg leading-relaxed text-[var(--color-dark-text-secondary)]">
              <p>
                Picture this: I&apos;m deep in the trenches of another project — heads down, 
                tunnel vision, spreadsheets open, the whole developer arc. Then my wife 
                sends me a TikTok. No context. No &ldquo;hey check this out.&rdquo; Just a link. 
                A cold drop.
              </p>
              <p>
                The video? Some fitness instructor talking about how there&apos;s no good app 
                for building and managing workout curricula. Not the &ldquo;track your macros 
                and count your steps&rdquo; kind — the actual <em>teaching</em> side. 
                The class planning. The exercise sequencing. The &ldquo;I teach 14 classes 
                a week and I&apos;m using Google Sheets and vibes&rdquo; kind.
              </p>
              <p>
                My wife — who is a fitness instructor herself — looked at me with 
                <span className="text-[var(--color-accent)]"> that look</span>. 
                The &ldquo;you could build this&rdquo; look. The look that has historically 
                preceded me losing sleep for three months straight.
              </p>
              <p>
                I said, &ldquo;I&apos;m already working on something.&rdquo;
              </p>
              <p>
                She said, &ldquo;This is better.&rdquo;
              </p>
              <p>
                Reader, she was right. She&apos;s always right. (She will read this page 
                and I will hear about it if I don&apos;t say that.)
              </p>
              <p>
                So I did what any reasonable engineer does: I abandoned my existing 
                project, opened a fresh repo, and started building 
                <span className="font-semibold text-[var(--color-dark-text)]"> Teaser</span> — 
                a real curriculum platform designed for the people who actually 
                teach fitness classes, not tech bros who went to a spin class once 
                and decided they could &ldquo;disrupt&rdquo; the industry.
              </p>
              <p>
                Every feature in this app was born from conversations with 
                instructors, tested by instructors, and refined until it felt like 
                the tool they&apos;d been duct-taping together with five different apps. 
                Because that&apos;s exactly what it replaces.
              </p>
              <p className="text-sm text-[var(--color-text-muted)]">
                The other project? It&apos;s fine. It understands. Probably.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* About the Creator Section — light */}
      <section
        className="py-24"
        style={{ background: "linear-gradient(180deg, #FAFBF9 0%, #F4F6F3 100%)" }}
      >
        <div className="mx-auto max-w-[1120px] px-6">
          <div className="grid items-center gap-16 md:grid-cols-[340px_1fr]">
            {/* Headshot */}
            <Reveal>
              <div className="relative mx-auto w-full max-w-[340px]">
                <div className="overflow-hidden rounded-[8px] border-2 border-[var(--color-outline-variant)]">
                  <Image
                    src="/headshot.jpg"
                    alt="Jason Lima — Product Designer & Software Engineer"
                    width={680}
                    height={680}
                    className="h-auto w-full object-cover"
                    priority
                  />
                </div>
                {/* Accent tag */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                  className="absolute -right-4 -bottom-4 rounded-[8px] bg-[var(--color-accent)] px-4 py-2 font-[family-name:var(--font-mono)] text-xs font-bold uppercase tracking-[0.08em] text-[var(--color-on-accent)] shadow-[0_4px_16px_rgba(184,255,87,0.3)]"
                >
                  The People&apos;s Software Engineer
                </motion.div>
              </div>
            </Reveal>

            {/* Bio */}
            <Reveal delay={0.15}>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.1em] text-[var(--color-text-muted)]">
                The Builder
              </p>
              <h2 className="mb-6 font-[family-name:var(--font-display)] text-[clamp(1.75rem,4vw,2.25rem)] font-extrabold leading-[1.15] tracking-tight text-[var(--color-text-primary)]">
                Jason Lima
              </h2>
              <p className="mb-4 text-lg font-semibold text-[var(--color-text-primary)]">
                Product Designer & Software Engineer
              </p>
              <div className="mb-8 space-y-4 leading-relaxed text-[var(--color-text-secondary)]">
                <p>
                  I design and build software for real people with real problems — 
                  not pitch decks. When I&apos;m not writing code, I&apos;m drawing, designing, 
                  or finding some other creative way to avoid answering Slack messages.
                </p>
                <p>
                  I believe the best products come from people who are equally 
                  obsessed with how things look and how things work. Pixels and 
                  functions. Aesthetics and architecture. The whole stack.
                </p>
                <p>
                  Previously built{" "}
                  <a
                    href="https://www.ideamill.co/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[var(--color-text-primary)] underline underline-offset-2 transition-colors hover:text-[var(--color-accent)]"
                  >
                    Idea Mill
                  </a>{" "}
                  — and now I&apos;m putting everything into making Teaser the tool 
                  fitness instructors actually deserve.
                </p>
              </div>

              {/* Skill chips */}
              <div className="mb-8 flex flex-wrap gap-2">
                {["Coding", "Design", "Art", "Drawing", "Product"].map((s) => (
                  <span
                    key={s}
                    className="rounded-[4px] border border-[var(--color-outline-variant)] bg-[var(--color-surface)] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.06em] text-[var(--color-text-secondary)]"
                  >
                    {s}
                  </span>
                ))}
              </div>

              {/* Social links */}
              <div className="flex items-center gap-4">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-[8px] border border-[var(--color-outline-variant)] text-[var(--color-text-secondary)] transition-all duration-150 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <DownloadCTA />
    </>
  );
}
