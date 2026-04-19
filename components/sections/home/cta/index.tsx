import Link from "next/link";

import { Button } from "@/components/ui/button";

export function HomeCtaSection() {
  return (
    <section
      className="border-t border-border/60 bg-[var(--brand-navy)] py-20 text-[color-mix(in_oklch,white_92%,transparent)] sm:py-24"
      aria-labelledby="cta-heading"
    >
      <div className="site-container flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
        <div className="max-w-xl space-y-4">
          <h2
            id="cta-heading"
            className="font-heading text-3xl font-bold tracking-tight text-white md:text-4xl"
          >
            Ready for a partner who owns the outcome with you?
          </h2>
          <p className="text-lg leading-relaxed text-[color-mix(in_oklch,white_72%,transparent)]">
            Tell us about your goals—we&apos;ll reply with next steps and a
            realistic view of how we can help.
          </p>
        </div>
        <div className="flex w-full shrink-0 flex-col gap-3 sm:flex-row lg:w-auto">
          <Button
            className="h-12 bg-primary px-8 text-base text-primary-foreground hover:bg-primary/90"
            size="lg"
            asChild
          >
            <Link href="/contact">Contact the team</Link>
          </Button>
          <Button
            className="h-12 border-white/25 bg-transparent px-8 text-base text-white hover:bg-white/10"
            variant="outline"
            size="lg"
            asChild
          >
            <Link href="/about">Learn about us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
