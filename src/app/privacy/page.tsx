import { PageHero } from "@/components/page-hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Teaser Fitness Curriculum Platform",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" heading="Privacy Policy" />

      <section className="py-16">
        <div className="mx-auto max-w-[720px] px-6">
          <div className="legal-content space-y-0 [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:border-t [&_h2]:border-[var(--color-outline-variant)] [&_h2]:pt-8 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:font-[family-name:var(--font-display)] first:[&_h2]:mt-0 first:[&_h2]:border-t-0 first:[&_h2]:pt-0 [&_p]:mb-4 [&_p]:leading-relaxed [&_p]:text-[var(--color-text-secondary)] [&_ul]:mb-4 [&_ul]:ml-6 [&_ul]:list-disc [&_li]:mb-2 [&_li]:leading-relaxed [&_li]:text-[var(--color-text-secondary)] [&_a]:font-semibold [&_a]:text-[var(--color-text-primary)] [&_a]:underline [&_a]:underline-offset-2">
            <p className="mb-8 border-b border-[var(--color-outline-variant)] pb-8 text-sm text-[var(--color-text-muted)]">
              Last Updated: February 2026
            </p>

            <h2>1. Introduction</h2>
            <p>Teaser (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your personal information. This Privacy Policy explains what information we collect, how we use it, and your rights regarding your data when you use the Teaser application and website (collectively, the &ldquo;Service&rdquo;).</p>
            <p>By using the Service, you agree to the collection and use of information in accordance with this policy.</p>

            <h2>2. Information We Collect</h2>
            <p>We collect the following types of information:</p>
            <ul>
              <li><strong>Account Information:</strong> When you create an account, we collect your email address and any profile information you choose to provide (such as your name and studio name).</li>
              <li><strong>Workout and Exercise Data:</strong> Information you create within the app, including workouts, exercises, coaching notes, class schedules, and organization data.</li>
              <li><strong>Usage Analytics:</strong> Aggregated, anonymized data about how you use the Service, including features accessed, session duration, and app performance metrics. This data does not identify you individually.</li>
              <li><strong>Device Information:</strong> Basic device identifiers (device type, operating system version) used for app compatibility and support purposes.</li>
              <li><strong>Communications:</strong> If you contact us for support, we retain those communications to resolve your issue and improve our service.</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, maintain, and improve the Teaser Service</li>
              <li>Authenticate your identity and manage your account</li>
              <li>Sync your data across your devices</li>
              <li>Respond to your support requests and communications</li>
              <li>Analyze usage patterns to improve features and fix bugs</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>4. Data Processing and Storage</h2>
            <p>Teaser uses <strong>Supabase</strong> as its database and backend infrastructure provider. Supabase acts as a data processor on our behalf and processes your data in accordance with our instructions and applicable data protection laws.</p>
            <p>Your data is stored on Supabase&apos;s infrastructure, which is hosted on AWS in the United States. Supabase employs industry-standard security measures including encryption at rest and in transit.</p>
            <p>For more information on Supabase&apos;s security practices, visit <a href="https://supabase.com/security" rel="noopener noreferrer" target="_blank">supabase.com/security</a>.</p>

            <h2>5. Data Sharing</h2>
            <p>We do not sell, rent, or trade your personal information to any third parties for their marketing purposes.</p>
            <p>We may share your information only in the following limited circumstances:</p>
            <ul>
              <li><strong>Service Providers:</strong> With trusted vendors (such as Supabase) who assist us in operating the Service, subject to strict confidentiality agreements.</li>
              <li><strong>Organization Members:</strong> If you are part of a Teaser organization, organization owners and admins may see member names and roles within that organization.</li>
              <li><strong>Legal Requirements:</strong> If required to do so by law or in response to valid legal process (such as a court order or subpoena).</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
            </ul>

            <h2>6. Your Rights</h2>
            <p>Depending on your location, you may have the following rights regarding your personal information:</p>
            <ul>
              <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
              <li><strong>Correction:</strong> Request that we correct inaccurate or incomplete information.</li>
              <li><strong>Deletion:</strong> Request that we delete your personal data. You can also delete your account directly in the app under <strong>Profile → Settings → Account → Delete Account</strong>.</li>
              <li><strong>Portability:</strong> Request a machine-readable export of your personal data.</li>
              <li><strong>Objection:</strong> Object to certain types of processing of your personal data.</li>
            </ul>
            <p>To exercise any of these rights, please contact us at <a href="mailto:jaylima0@gmail.com">jaylima0@gmail.com</a>. We will respond to your request within 30 days.</p>

            <h2>7. Data Retention</h2>
            <p>We retain your personal data for as long as your account is active or as needed to provide the Service. If you delete your account, we will delete or anonymize your personal data within 30 days, except where we are required to retain it for legal, tax, or regulatory purposes.</p>

            <h2>8. Children&apos;s Privacy</h2>
            <p>The Service is intended for use by professional fitness instructors and is not directed at children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have inadvertently collected such information, we will delete it promptly.</p>

            <h2>9. Security</h2>
            <p>We implement industry-standard security measures to protect your information, including encrypted data transmission (TLS/HTTPS) and encrypted data storage. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>

            <h2>10. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. When we make changes, we will update the &ldquo;Last Updated&rdquo; date at the top of this page. For significant changes, we will notify you through the app or via email. Your continued use of the Service after changes take effect constitutes your acceptance of the revised policy.</p>

            <h2>11. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy or our data practices, please contact us at:</p>
            <ul>
              <li><strong>Email:</strong> <a href="mailto:jaylima0@gmail.com">jaylima0@gmail.com</a></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
