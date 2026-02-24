import { PageHero } from "@/components/page-hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support — Teaser Fitness Curriculum Platform",
};

const faqs = [
  {
    q: "How do I create a workout?",
    a: 'Open the Teaser app and tap <strong>Workouts</strong> in the bottom navigation. Tap the <strong>+</strong> button to start a new workout. Give it a name, then use the exercise search to add movements from your vault. Set reps, sets, rest times, and coaching cues for each exercise, then save your workout when done.',
  },
  {
    q: "How do I add exercises to my organization?",
    a: 'Organization owners and admins can add exercises to the shared organization library. Go to <strong>Organization → Exercise Library</strong> and tap <strong>Add Exercise</strong>. Custom exercises added here are available to all members of your organization. Individual instructors can also create personal exercises visible only to them.',
  },
  {
    q: "How do I schedule a class?",
    a: 'Navigate to the <strong>Schedule</strong> tab in the app. Tap on any date to add a new class, or tap an existing time slot. Fill in the class name, time, and location. You can then assign a workout directly to the class so you arrive fully prepared. Recurring classes can be set up from the class detail screen.',
  },
  {
    q: "How do I manage organization members?",
    a: 'Organization owners can manage members from <strong>Organization → Members</strong>. To invite someone, tap <strong>Invite Member</strong> and enter their email address. You can assign roles (Admin or Instructor) and remove members at any time. Admins can manage members but cannot remove the organization owner.',
  },
  {
    q: "Can I use Teaser on multiple devices?",
    a: "Yes. Your Teaser account syncs across all your devices. Sign in with the same email and password on any iOS or Android device to access all your workouts, exercises, and schedule. Your data is stored securely in the cloud and stays up to date across devices.",
  },
  {
    q: "How do I reset my password?",
    a: 'On the login screen, tap <strong>Forgot Password?</strong> Enter the email address associated with your account and tap <strong>Send Reset Link</strong>. Check your email for a password reset link (check your spam folder if you don\'t see it within a few minutes). Follow the link to set a new password.',
  },
  {
    q: "How do I delete my account?",
    a: 'To permanently delete your Teaser account, go to <strong>Profile → Settings → Account → Delete Account</strong>. You will be asked to confirm this action. Please note that account deletion is permanent and will erase all your workouts, exercise library, and class history. If you are the owner of an organization, you must transfer ownership or delete the organization before deleting your account. For assistance, email <a href="mailto:jaylima0@gmail.com" class="font-semibold underline underline-offset-2">jaylima0@gmail.com</a>.',
  },
  {
    q: "What platforms is Teaser available on?",
    a: "Teaser is available on <strong>iOS</strong> (iPhone and iPad, iOS 16 and later) and <strong>Android</strong> (Android 10 and later). You can download the app from the Apple App Store and Google Play Store. A web version is not currently available, but your data can be accessed from any of your signed-in devices.",
  },
];

export default function SupportPage() {
  return (
    <>
      <PageHero eyebrow="Help Center" heading="SUPPORT">
        <p className="mt-4 max-w-[560px] text-lg text-[var(--color-text-secondary)]">
          We&apos;re here to help. Find answers below or get in touch directly.
        </p>
      </PageHero>

      {/* Contact cards — full-width accent strip */}
      <section className="relative" aria-labelledby="contact-heading">
        <div className="absolute inset-0 h-1/2" style={{ background: "var(--color-surface-variant)" }} />
        <div className="relative mx-auto max-w-280 px-6">
          <div className="grid gap-6 sm:grid-cols-3">
            {/* Email */}
            <div className="rounded-lg border border-[var(--color-outline-variant)] bg-white p-8 shadow-[0_4px_16px_rgba(30,32,25,0.06)]">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--color-surface-variant)]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-[var(--color-text-primary)]"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <h3 className="mb-1 text-sm font-bold uppercase tracking-widest text-[var(--color-text-muted)]">
                Email Us
              </h3>
              <a href="mailto:jaylima0@gmail.com" className="text-lg font-semibold text-[var(--color-text-primary)] underline underline-offset-4 decoration-[var(--color-accent)] decoration-2">
                jaylima0@gmail.com
              </a>
            </div>

            {/* Response Time */}
            <div className="rounded-lg border border-[var(--color-outline-variant)] bg-white p-8 shadow-[0_4px_16px_rgba(30,32,25,0.06)]">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--color-surface-variant)]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-[var(--color-text-primary)]"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <h3 className="mb-1 text-sm font-bold uppercase tracking-widest text-[var(--color-text-muted)]">
                Response Time
              </h3>
              <p className="text-lg font-semibold text-[var(--color-text-primary)]">1–2 business days</p>
            </div>

            {/* Hours */}
            <div className="rounded-lg border border-[var(--color-outline-variant)] bg-white p-8 shadow-[0_4px_16px_rgba(30,32,25,0.06)]">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--color-surface-variant)]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-[var(--color-text-primary)]"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              </div>
              <h3 className="mb-1 text-sm font-bold uppercase tracking-widest text-[var(--color-text-muted)]">
                Hours
              </h3>
              <p className="text-lg font-semibold text-[var(--color-text-primary)]">Mon – Fri, 9am – 5pm PT</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-280 px-6">
          <div className="mx-auto max-w-[760px]">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[var(--color-text-muted)]">
              FAQ
            </p>
            <h2
              id="faq-heading"
              className="mb-10 font-[family-name:var(--font-display)] text-[2rem] font-extrabold tracking-tight"
            >
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="faq-item group overflow-hidden rounded-lg border border-[var(--color-outline-variant)] bg-white transition-shadow duration-200 hover:shadow-[0_2px_8px_rgba(30,32,25,0.06)]"
                >
                  <summary className="flex cursor-pointer select-none items-center justify-between px-6 py-5 font-semibold text-[var(--color-text-primary)] transition-colors duration-150 hover:bg-[var(--color-surface-variant)]">
                    {faq.q}
                  </summary>
                  <div
                    className="border-t border-[var(--color-outline-variant)] px-6 py-5 leading-relaxed text-[var(--color-text-secondary)]"
                    dangerouslySetInnerHTML={{ __html: faq.a }}
                  />
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Still need help — dark CTA */}
      <section
        className="py-20"
        style={{ background: "linear-gradient(180deg, #0F1410 0%, #1A1E1B 100%)" }}
      >
        <div className="mx-auto max-w-[560px] px-6 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">
            Still need help?
          </p>
          <h2 className="mb-4 font-[family-name:var(--font-display)] text-[1.75rem] font-extrabold tracking-tight text-[var(--color-on-primary)]">
            We&apos;re happy to assist
          </h2>
          <p className="mb-8 text-[var(--color-dark-text-secondary)]">
            If your question isn&apos;t answered above, reach out directly. We read
            every email and will get back to you as soon as possible.
          </p>
          <a
            href="mailto:jaylima0@gmail.com"
            className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-accent)] px-8 py-3.5 text-sm font-bold uppercase tracking-[0.08em] text-[var(--color-on-accent)] transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(184,255,87,0.3)] no-underline"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            EMAIL SUPPORT
          </a>
        </div>
      </section>
    </>
  );
}
