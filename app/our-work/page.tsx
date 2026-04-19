import type { Metadata } from "next";
import Link from "next/link";

import { PageIntro } from "@/components/page-intro";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Our work",
  description:
    "Selected projects and case highlights from Daksa Digital—coming soon as we publish client stories.",
};

export default function OurWorkPage() {
  return (
    <div className="site-container py-16 sm:py-20">
      <PageIntro
        eyebrow="Our work"
        title="Case studies and project highlights"
        description="We’re preparing a curated view of engagements across marketing, content, web, and brand. Check back soon—or tell us what you’re building and we’ll share relevant examples privately."
        className="mb-12"
      />
      <div className="rounded-2xl border border-dashed border-border/80 bg-muted/20 p-10 text-center">
        <p className="text-muted-foreground">
          Portfolio content will appear here. For now, start a conversation and
          we’ll walk you through comparable work on a call.
        </p>
        <Button className="mt-6" asChild>
          <Link href="/contact">Get in touch</Link>
        </Button>
      </div>
    </div>
  );
}
