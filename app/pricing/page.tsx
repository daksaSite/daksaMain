import type { Metadata } from "next";
import Link from "next/link";

import { PageIntro } from "@/components/page-intro";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Engagement models for digital marketing, content, web, and growth work with Daksa Digital—project, retainer, and hybrid.",
};

const rows = [
  {
    name: "Discovery & proposal",
    detail:
      "We align on goals, constraints, and success metrics. You receive a scoped plan with timelines and commercial options.",
  },
  {
    name: "Project-based",
    detail:
      "Best for launches, migrations, or defined deliverables. Fixed scope where possible; change requests handled in writing.",
  },
  {
    name: "Retainer",
    detail:
      "Ongoing execution with allocated capacity—ideal when you need consistent creative, social, or campaign support.",
  },
  {
    name: "Hybrid",
    detail:
      "A baseline retainer for continuity plus scoped projects when you need bursts of velocity.",
  },
] as const;

export default function PricingPage() {
  return (
    <div className="site-container py-16 sm:py-20">
      <PageIntro
        eyebrow="Pricing & models"
        title="Commercial structures that match how you buy work."
        description="Exact fees depend on scope, seniority, and duration—we’ll quote after discovery. Below is how we typically structure engagements so expectations stay clear."
        className="mb-14 md:mb-20"
      />

      <div className="divide-y divide-border/80 rounded-2xl border border-border/80 bg-card">
        {rows.map(({ name, detail }) => (
          <div key={name} className="grid gap-3 p-6 md:grid-cols-[220px_minmax(0,1fr)] md:items-start md:gap-10 md:p-8">
            <h2 className="font-heading text-base font-semibold">{name}</h2>
            <p className="text-muted-foreground leading-relaxed">{detail}</p>
          </div>
        ))}
      </div>

      <p className="mt-10 text-sm text-muted-foreground">
        Need a ballpark? Share your goals on the contact page—we’ll respond with
        realistic options or a short discovery call.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <Button asChild>
          <Link href="/contact">Request a quote</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/process">See our process</Link>
        </Button>
      </div>
    </div>
  );
}
