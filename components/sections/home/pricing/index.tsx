import Link from "next/link";

import { Button } from "@/components/ui/button";

const models = [
  {
    title: "Project-based",
    body: "Defined scope, milestones, and delivery—ideal for launches and one-off initiatives.",
  },
  {
    title: "Retainer",
    body: "Ongoing execution across channels with predictable capacity and cadence.",
  },
  {
    title: "Hybrid",
    body: "A core retainer plus scoped projects when you need extra velocity.",
  },
] as const;

export function PricingTeaserSection() {
  return (
    <section
      className="site-container py-16 sm:py-20"
      aria-labelledby="pricing-teaser-heading"
    >
      <div className="mb-10 max-w-2xl space-y-4 md:mb-14">
        <p className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Engagement
        </p>
        <h2
          id="pricing-teaser-heading"
          className="font-heading text-3xl font-bold tracking-tight md:text-4xl"
        >
          Flexible models for how you actually work
        </h2>
        <p className="text-lg text-muted-foreground">
          We align commercial structure to outcomes—not a one-size-fits-all
          menu. Details and FAQs live on the pricing page.
        </p>
      </div>
      <ul className="mb-10 grid gap-4 sm:grid-cols-3">
        {models.map(({ title, body }) => (
          <li
            key={title}
            className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm"
          >
            <h3 className="font-heading text-base font-semibold">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {body}
            </p>
          </li>
        ))}
      </ul>
      <Button className="h-11 px-6" asChild>
        <Link href="/pricing">See pricing and models</Link>
      </Button>
    </section>
  );
}
