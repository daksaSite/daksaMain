import type { Metadata } from "next";
import Link from "next/link";

import { PageIntro } from "@/components/page-intro";
import { Button } from "@/components/ui/button";
import { PROCESS_STEPS } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Process",
  description:
    "How Daksa Digital runs engagements—from discovery and strategy to execution and ongoing optimization.",
};

export default function ProcessPage() {
  return (
    <div className="site-container py-16 sm:py-20">
      <PageIntro
        eyebrow="Process"
        title="Structured delivery with room to move fast."
        description="Our approach stays simple on the surface so teams stay aligned—while we handle the complexity underneath: channel mix, creative iterations, and performance feedback loops."
        className="mb-14 md:mb-20"
      />

      <ol className="grid gap-6 md:grid-cols-2">
        {PROCESS_STEPS.map(({ step, detail }, i) => (
          <li key={step}>
            <div className="flex h-full flex-col rounded-2xl border border-border/80 bg-card p-8 shadow-sm">
              <span className="font-heading mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                {i + 1}
              </span>
              <h2 className="font-heading text-xl font-semibold">{step}</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{detail}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-16 rounded-2xl border border-border/80 bg-muted/30 p-8 md:p-10">
        <h2 className="font-heading text-lg font-semibold">
          What you can expect week to week
        </h2>
        <ul className="mt-4 list-inside list-disc space-y-2 text-muted-foreground">
          <li>Clear ownership: a single accountable lead across workstreams.</li>
          <li>
            Rituals that match your cadence—weekly or biweekly reviews, async
            updates, and shared dashboards where it helps.
          </li>
          <li>
            Scope changes handled explicitly so timelines and outcomes stay
            honest.
          </li>
        </ul>
      </div>

      <div className="mt-12 flex flex-wrap gap-4">
        <Button asChild>
          <Link href="/contact">Start a conversation</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/services">Browse services</Link>
        </Button>
      </div>
    </div>
  );
}
