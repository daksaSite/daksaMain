import type { Metadata } from "next";
import Link from "next/link";

import { PageIntro } from "@/components/page-intro";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { TESTIMONIALS } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "What clients say about working with Daksa Digital—professional support, creativity, and results.",
};

export default function TestimonialsPage() {
  return (
    <div className="site-container py-16 sm:py-20">
      <PageIntro
        eyebrow="Social proof"
        title="Trusted by teams who expect clarity, speed, and follow-through."
        description="A snapshot of feedback from partners across projects—content, campaigns, and ongoing digital support."
        className="mb-14 md:mb-16"
      />

      <ul className="grid gap-6 md:grid-cols-2">
        {TESTIMONIALS.map(({ quote }, i) => (
          <li key={i}>
            <Card className="h-full border-border/80 bg-card shadow-sm">
              <CardHeader className="pb-6">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  &ldquo;{quote}&rdquo;
                </p>
              </CardHeader>
            </Card>
          </li>
        ))}
      </ul>

      <div className="mt-16 flex flex-col items-center gap-4 rounded-2xl border border-border/80 bg-muted/30 px-6 py-10 text-center sm:px-10">
        <p className="max-w-lg text-muted-foreground">
          Ready to see how we can support your next launch or growth sprint?
        </p>
        <Button asChild>
          <Link href="/contact">Start a conversation</Link>
        </Button>
      </div>
    </div>
  );
}
