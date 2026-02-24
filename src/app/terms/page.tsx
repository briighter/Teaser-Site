import { PageHero } from "@/components/page-hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Teaser Fitness Curriculum Platform",
};

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" heading="Terms of Service" />

      <section className="py-16">
        <div className="mx-auto max-w-[720px] px-6">
          <div className="legal-content space-y-0 [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:border-t [&_h2]:border-[var(--color-outline-variant)] [&_h2]:pt-8 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:font-[family-name:var(--font-display)] first:[&_h2]:mt-0 first:[&_h2]:border-t-0 first:[&_h2]:pt-0 [&_p]:mb-4 [&_p]:leading-relaxed [&_p]:text-[var(--color-text-secondary)] [&_ul]:mb-4 [&_ul]:ml-6 [&_ul]:list-disc [&_li]:mb-2 [&_li]:leading-relaxed [&_li]:text-[var(--color-text-secondary)] [&_a]:font-semibold [&_a]:text-[var(--color-text-primary)] [&_a]:underline [&_a]:underline-offset-2">
            <p className="mb-8 border-b border-[var(--color-outline-variant)] pb-8 text-sm text-[var(--color-text-muted)]">
              Last Updated: February 2026
            </p>

            <h2>1. Acceptance of Terms</h2>
            <p>By downloading, accessing, or using the Teaser application or website (the &ldquo;Service&rdquo;), you agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;). If you do not agree to these Terms, you may not use the Service.</p>
            <p>These Terms constitute a legally binding agreement between you and Teaser (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). We reserve the right to update these Terms at any time, and your continued use of the Service after changes take effect constitutes your acceptance of the revised Terms.</p>

            <h2>2. Description of Service</h2>
            <p>Teaser is a fitness curriculum platform designed for professional fitness instructors. The Service allows users to create and manage exercise libraries, build workout programs, schedule classes, and manage fitness studio organizations.</p>

            <h2>3. Account Registration</h2>
            <p>To use the Service, you must create an account by providing a valid email address and password. You are responsible for:</p>
            <ul>
              <li>Maintaining the confidentiality of your account credentials</li>
              <li>All activity that occurs under your account</li>
              <li>Promptly notifying us of any unauthorized use of your account</li>
            </ul>
            <p>You must be at least 18 years old to create an account. By creating an account, you represent that you meet this age requirement.</p>

            <h2>4. Acceptable Use</h2>
            <p>You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree not to:</p>
            <ul>
              <li>Use the Service in any way that violates applicable laws or regulations</li>
              <li>Attempt to gain unauthorized access to any part of the Service or its related systems</li>
              <li>Transmit any harmful, offensive, or disruptive content</li>
              <li>Use the Service to infringe upon the intellectual property rights of others</li>
              <li>Reverse engineer, decompile, or disassemble any part of the Service</li>
              <li>Use automated tools (bots, scrapers, etc.) to access or collect data from the Service without our express written permission</li>
              <li>Impersonate any person or entity or misrepresent your affiliation with any person or entity</li>
            </ul>

            <h2>5. User-Generated Content</h2>
            <p>The Service allows you to create and upload content, including workout programs, exercise descriptions, coaching notes, and other materials (&ldquo;User Content&rdquo;).</p>
            <p>You retain all ownership rights to your User Content. By submitting User Content to the Service, you grant Teaser a non-exclusive, worldwide, royalty-free license to store, process, and display your User Content solely for the purpose of providing the Service to you.</p>
            <p>You represent and warrant that:</p>
            <ul>
              <li>You own or have the necessary rights to the User Content you submit</li>
              <li>Your User Content does not violate the rights of any third party</li>
              <li>Your User Content complies with these Terms and all applicable laws</li>
            </ul>
            <p>We reserve the right to remove User Content that violates these Terms, without prior notice.</p>

            <h2>6. Intellectual Property</h2>
            <p>The Service, including its design, features, software, and pre-existing exercise content (excluding User Content), is owned by Teaser and protected by intellectual property laws. Nothing in these Terms grants you any right to use Teaser&apos;s trademarks, logos, or other proprietary marks.</p>

            <h2>7. Organizations</h2>
            <p>The Service includes organization features that allow multiple users to collaborate. Organization owners are responsible for ensuring that all members of their organization comply with these Terms. Organization owners may grant or revoke access to members at any time.</p>
            <p>We reserve the right to suspend or terminate organizations that violate these Terms.</p>

            <h2>8. Account Termination</h2>
            <p>You may delete your account at any time from within the app under <strong>Profile → Settings → Account → Delete Account</strong>. Upon deletion, your data will be removed in accordance with our Privacy Policy.</p>
            <p>We reserve the right to suspend or terminate your account, with or without notice, if we determine that you have violated these Terms or if your use of the Service poses a risk to us, other users, or third parties.</p>

            <h2>9. Disclaimers</h2>
            <p className="uppercase">THE SERVICE IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.</p>
            <p>We do not warrant that the Service will be uninterrupted, error-free, or free of viruses or other harmful components. We do not warrant the accuracy or completeness of any content available through the Service.</p>
            <p><strong>Fitness Disclaimer:</strong> Teaser is a curriculum management tool. It is not a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified healthcare professional before beginning any exercise program.</p>

            <h2>10. Limitation of Liability</h2>
            <p className="uppercase">TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, TEASER AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, OR GOODWILL, ARISING FROM OR RELATED TO YOUR USE OF THE SERVICE.</p>
            <p className="uppercase">IN NO EVENT SHALL TEASER&apos;S TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING FROM OR RELATED TO THE SERVICE EXCEED THE AMOUNT YOU PAID TO TEASER IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM, OR $100, WHICHEVER IS GREATER.</p>

            <h2>11. Indemnification</h2>
            <p>You agree to indemnify and hold Teaser and its affiliates, officers, directors, employees, and agents harmless from any claims, liabilities, damages, losses, and expenses (including reasonable attorney&apos;s fees) arising out of or in connection with your use of the Service or violation of these Terms.</p>

            <h2>12. Governing Law</h2>
            <p>These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Teaser is established, without regard to its conflict of law provisions.</p>
            <p>Any dispute arising from these Terms shall be resolved through binding arbitration in accordance with applicable arbitration rules, except that either party may seek injunctive relief in a court of competent jurisdiction.</p>

            <h2>13. Changes to These Terms</h2>
            <p>We may update these Terms from time to time. We will notify you of significant changes by updating the &ldquo;Last Updated&rdquo; date at the top of this page and, where appropriate, by sending you a notification through the Service. Your continued use of the Service after changes take effect constitutes your acceptance of the revised Terms.</p>

            <h2>14. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at:</p>
            <ul>
              <li><strong>Email:</strong> <a href="mailto:jaylima0@gmail.com">jaylima0@gmail.com</a></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
