import type { Metadata } from "next";
import { CheckCircle2, Target } from "lucide-react";
import Link from "next/link";

import { PageIntro } from "@/components/page-intro";
import { Button } from "@/components/ui/button";
import {
  ABOUT_PARAGRAPHS,
  MISSION,
  PRIORITIES,
  VISION,
  WHO_WE_WORK_WITH,
  WHY_POINTS,
} from "@/lib/site-content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Daksa Digital—our mission, vision, values, and how we partner with businesses for long-term digital growth.",
};

export default function AboutPage() {
  return (
    <div className="site-container py-16 sm:py-20">
      <PageIntro
        eyebrow="About us"
        title="A digital partner invested in how you grow—not just how you look online."
        description="We combine strategic rigor with creative craft so your brand earns attention and your funnel earns revenue."
        className="mb-14 md:mb-20"
      />

      <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
        {ABOUT_PARAGRAPHS.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <div className="mt-16 grid gap-8 border-t border-border/80 pt-16 md:grid-cols-2 md:gap-12">
        <div className="rounded-2xl border border-border/80 bg-card p-8 shadow-sm">
          <h2 className="font-heading text-xl font-semibold">Our mission</h2>
          <p className="mt-4 text-muted-foreground md:text-lg">{MISSION}</p>
        </div>
        <div className="rounded-2xl border border-border/80 bg-card p-8 shadow-sm">
          <h2 className="font-heading text-xl font-semibold">Our vision</h2>
          <p className="mt-4 text-muted-foreground md:text-lg">{VISION}</p>
        </div>
      </div>

      <section className="mt-20 border-t border-border/80 pt-16" aria-labelledby="why-heading">
        <h2
          id="why-heading"
          className="font-heading text-2xl font-bold tracking-tight md:text-3xl"
        >
          Why teams choose Daksa
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          What sets us apart is how we blend strategy with creativity and ship
          work that stays aligned to business outcomes.
        </p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-3">
          {WHY_POINTS.map((t) => (
            <li
              key={t}
              className="flex gap-3 rounded-2xl border border-border bg-card p-5 shadow-sm"
            >
              <CheckCircle2
                className="mt-0.5 size-5 shrink-0 text-primary"
                aria-hidden
              />
              <span className="text-sm font-medium leading-snug">{t}</span>
            </li>
          ))}
        </ul>
        <div className="mt-12">
          <p className="font-heading text-lg font-semibold">We prioritize</p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {PRIORITIES.map((t) => (
              <li key={t} className="flex items-start gap-3 text-muted-foreground">
                <Target className="mt-1 size-4 shrink-0 text-primary" aria-hidden />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="mt-20 rounded-2xl border border-primary/20 bg-gradient-to-br from-card to-muted/40 p-8 ring-1 ring-primary/10 md:p-12"
        aria-labelledby="audience-heading"
      >
        <h2
          id="audience-heading"
          className="font-heading text-2xl font-bold tracking-tight md:text-3xl"
        >
          Who we work with
        </h2>
        <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
          {WHO_WE_WORK_WITH}
        </p>
      </section>

      <div className="mt-16 flex flex-col items-start gap-4 border-t border-border/80 pt-12 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-muted-foreground">
          Want the full picture of what we can run for you?
        </p>
        <Button asChild>
          <Link href="/services">Explore services</Link>
        </Button>
      </div>
    </div>
  );
}
