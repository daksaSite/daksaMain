import type { Metadata } from "next";
import Link from "next/link";

import { PageIntro } from "@/components/page-intro";
import { CONTACT } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Daksa Digital Pvt. Ltd. collects, uses, and protects your personal information.",
};

const LAST_UPDATED = "April 2025";

const SECTIONS = [
  {
    heading: "1. Information we collect",
    body: [
      "When you fill out our contact form or reach out to us directly, we collect your name, email address, phone number, and any details you choose to share about your business or project.",
      "We may also collect technical data such as your browser type, device, and pages visited when you browse our website. This is used solely to improve site performance and user experience.",
    ],
  },
  {
    heading: "2. How we use your information",
    body: [
      "We use the information you provide to respond to your enquiries, send you proposals, and communicate about ongoing projects.",
      "We do not use your personal data for automated decision-making, profiling, or sell it to third parties under any circumstances.",
    ],
  },
  {
    heading: "3. Cookies",
    body: [
      "Our website uses a minimal cookie to remember your cookie-preference choice. We do not currently use tracking cookies, advertising pixels, or analytics services that store personal data.",
      "You can disable cookies in your browser settings at any time without affecting your ability to browse the site.",
    ],
  },
  {
    heading: "4. Data retention",
    body: [
      "We retain contact form submissions and project correspondence for as long as necessary to provide our services and comply with applicable laws. You may request deletion of your data at any time by emailing us.",
    ],
  },
  {
    heading: "5. Third-party services",
    body: [
      "We may use trusted third-party tools (such as email delivery services) to operate our website and communicate with clients. These providers are bound by their own privacy policies and are not permitted to use your data for any other purpose.",
    ],
  },
  {
    heading: "6. Your rights",
    body: [
      "You have the right to access, correct, or request deletion of any personal information we hold about you. To exercise these rights, please contact us at the email address below.",
    ],
  },
  {
    heading: "7. Changes to this policy",
    body: [
      "We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised date. We encourage you to review this page periodically.",
    ],
  },
  {
    heading: "8. Contact us",
    body: [
      `If you have any questions about this Privacy Policy or how we handle your data, please contact us at ${CONTACT.email} or write to us at ${CONTACT.address}.`,
    ],
  },
] as const;

export default function PrivacyPage() {
  return (
    <div className="site-container py-16 sm:py-20">
      <PageIntro
        eyebrow="Legal"
        title="Privacy Policy"
        description="Your privacy matters to us. This policy explains what we collect, why we collect it, and how we keep it safe."
        className="mb-12 md:mb-16"
      />

      <p className="mb-10 text-sm text-muted-foreground">
        Last updated: <span className="font-medium text-foreground">{LAST_UPDATED}</span>
      </p>

      <div className="space-y-10 border-t border-border/60 pt-10">
        {SECTIONS.map(({ heading, body }) => (
          <section key={heading} aria-labelledby={heading}>
            <h2
              id={heading}
              className="font-heading text-lg font-semibold tracking-tight text-foreground md:text-xl"
            >
              {heading}
            </h2>
            <div className="mt-3 space-y-3">
              {body.map((para, i) => (
                <p key={i} className="leading-relaxed text-muted-foreground">
                  {para}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-16 flex flex-col gap-4 border-t border-border/60 pt-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          Questions? We&apos;re happy to clarify anything.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
        >
          Contact us
        </Link>
      </div>
    </div>
  );
}
