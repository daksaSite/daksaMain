import type { Metadata } from "next";

import { ContactDetails } from "@/components/contact-details";
import { InquiryForm } from "@/components/inquiry-form";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach Daksa Digital in Noida—phone, email, and inquiry form. Office at Sector 63, G Block.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <PageIntro
        eyebrow="Contact"
        title="Let’s talk about your roadmap, timelines, and what “success” looks like."
        description="Use the form for structured inquiries—we’ll route it to the right people. Prefer voice? Call or email us directly."
        className="mb-14 md:mb-20"
      />

      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16 lg:items-start">
        <aside className="lg:sticky lg:top-24">
          <h2 className="font-heading text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Direct lines
          </h2>
          <div className="mt-6">
            <ContactDetails />
          </div>
        </aside>

        <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-lg ring-1 ring-foreground/[0.03] sm:p-8 md:p-10">
          <h2 className="font-heading text-xl font-semibold">Inquiry form</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Share context on your business and goals—the more specific, the
            faster we can respond with useful next steps.
          </p>
          <InquiryForm className="mt-8" />
        </div>
      </div>
    </div>
  );
}
