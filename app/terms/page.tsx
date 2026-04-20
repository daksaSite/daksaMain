import type { Metadata } from "next";
import Link from "next/link";

import { PageIntro } from "@/components/page-intro";
import { CONTACT } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms governing your use of the Daksa Digital website and our professional services.",
};

const LAST_UPDATED = "April 2025";

const SECTIONS = [
  {
    heading: "1. Acceptance of terms",
    body: [
      "By accessing or using the Daksa Digital website (daksadigital.in) or engaging our services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our website or services.",
    ],
  },
  {
    heading: "2. Services",
    body: [
      "Daksa Digital Pvt. Ltd. provides digital marketing, content, creative, SEO, web development, and related services. The specific scope, deliverables, timelines, and fees for each engagement are defined in a separate proposal or agreement signed between both parties.",
      "We reserve the right to decline any project at our discretion.",
    ],
  },
  {
    heading: "3. Intellectual property",
    body: [
      "All original content, designs, and creative work produced by Daksa Digital for a client project become the property of the client upon full payment of agreed fees, unless otherwise specified in writing.",
      "Our website content, brand assets, and pre-existing intellectual property remain the sole property of Daksa Digital Pvt. Ltd. and may not be reproduced without written permission.",
    ],
  },
  {
    heading: "4. Client responsibilities",
    body: [
      "Clients are responsible for providing accurate information, timely feedback, and any materials required for project delivery. Delays caused by late client input may affect agreed timelines.",
      "Clients warrant that any materials they provide (logos, images, copy, etc.) are owned by them or they have appropriate rights to use them.",
    ],
  },
  {
    heading: "5. Payment terms",
    body: [
      "Payment terms, amounts, and schedules are specified in individual project agreements. Work may be paused or withheld if payments are not made in accordance with agreed terms.",
      "All fees are exclusive of applicable taxes unless stated otherwise.",
    ],
  },
  {
    heading: "6. Confidentiality",
    body: [
      "Both parties agree to keep confidential any proprietary or sensitive information shared during the course of an engagement and not to disclose it to third parties without prior written consent.",
    ],
  },
  {
    heading: "7. Limitation of liability",
    body: [
      "Daksa Digital shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services or website. Our total liability in any matter shall not exceed the fees paid for the specific service giving rise to the claim.",
      "We do not guarantee specific marketing outcomes (such as traffic numbers, rankings, or conversions), as these depend on many external factors beyond our control.",
    ],
  },
  {
    heading: "8. Termination",
    body: [
      "Either party may terminate an ongoing engagement with written notice as specified in the individual project agreement. Upon termination, the client is responsible for fees for work completed up to the termination date.",
    ],
  },
  {
    heading: "9. Governing law",
    body: [
      "These terms are governed by the laws of India. Any disputes arising shall be subject to the jurisdiction of courts in Noida, Uttar Pradesh.",
    ],
  },
  {
    heading: "10. Changes to these terms",
    body: [
      "We may update these Terms of Service at any time. Continued use of our website or services after changes are posted constitutes your acceptance of the revised terms.",
    ],
  },
  {
    heading: "11. Contact",
    body: [
      `For any questions regarding these terms, please contact us at ${CONTACT.email} or write to us at ${CONTACT.address}.`,
    ],
  },
] as const;

export default function TermsPage() {
  return (
    <div className="site-container py-16 sm:py-20">
      <PageIntro
        eyebrow="Legal"
        title="Terms of Service"
        description="Please read these terms carefully before using our website or engaging our services."
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
          Have questions about our terms?
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
