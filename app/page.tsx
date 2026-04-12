import type { Metadata } from "next";
import {
  ArrowRight,
  ArrowUpRight,
  Compass,
  Layers,
  LineChart,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PROCESS_STEPS, SERVICES } from "@/lib/site-content";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: { absolute: "Daksa Digital — Built for Scale. Driven by Impact." },
  description:
    "Strategic digital solutions, creative excellence, and performance-driven execution. Partner with Daksa Digital Pvt. Ltd. in Noida.",
};

const pillars = [
  {
    title: "Strategy first",
    body: "Roadmaps rooted in your market, audience, and commercial goals—not vanity metrics.",
    icon: Compass,
  },
  {
    title: "Creative that converts",
    body: "Distinctive craft across content, social, and brand touchpoints with clarity and consistency.",
    icon: Sparkles,
  },
  {
    title: "Execution you can measure",
    body: "Campaigns, sites, and funnels optimized for learning loops and sustainable growth.",
    icon: LineChart,
  },
] as const;

const explore = [
  {
    href: "/about",
    title: "Our story & principles",
    desc: "Mission, vision, and how we work with teams like yours.",
    label: "About",
  },
  {
    href: "/services",
    title: "Capabilities & offerings",
    desc: "Marketing, content, web, SEO, branding, and more—tailored to your stack.",
    label: "Services",
  },
  {
    href: "/testimonials",
    title: "Client perspectives",
    desc: "What partners say about collaboration, quality, and outcomes.",
    label: "Testimonials",
  },
] as const;

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden border-b border-border/60"
        aria-labelledby="hero-heading"
      >
        <div className="mx-auto max-w-6xl px-4 pb-20 pt-14 sm:px-6 sm:pb-28 sm:pt-20 md:pt-24">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-16">
            <div className="space-y-8">
              <div className="animate-hero inline-flex items-center gap-2 rounded-full border border-primary/20 bg-[color-mix(in_oklch,var(--brand-red)_6%,transparent)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary sm:text-sm">
                Built for Scale · Driven by Impact
              </div>
              <div className="space-y-6">
                <h1
                  id="hero-heading"
                  className="animate-hero animate-hero-delay-1 font-heading text-4xl font-bold leading-[1.08] tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-[3.35rem]"
                >
                  Digital growth for brands that{" "}
                  <span className="text-primary">refuse to stay invisible.</span>
                </h1>
                <p className="animate-hero animate-hero-delay-2 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                  Daksa Digital partners with startups and established names to
                  sharpen positioning, scale acquisition, and build durable
                  brand presence—with strategy, creative, and performance in
                  one accountable team.
                </p>
              </div>
              <div className="animate-hero animate-hero-delay-3 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  className="h-12 px-8 text-base shadow-lg shadow-primary/25"
                  size="lg"
                  asChild
                >
                  <Link href="/contact">
                    Plan a conversation
                    <ArrowRight className="ml-2 size-4" aria-hidden />
                  </Link>
                </Button>
                <Button
                  className="h-12 px-8 text-base"
                  variant="outline"
                  size="lg"
                  asChild
                >
                  <Link href="/services">View capabilities</Link>
                </Button>
              </div>
            </div>

            <div className="animate-hero animate-hero-delay-2 relative lg:pl-4">
              <div
                className="absolute -right-6 -top-6 h-40 w-40 rounded-full bg-primary/15 blur-3xl"
                aria-hidden
              />
              <div className="relative space-y-4">
                <Card className="overflow-hidden border-border/80 bg-card/90 shadow-xl ring-1 ring-foreground/[0.04] backdrop-blur-sm">
                  <CardHeader className="gap-4 pb-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-heading text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          Partner model
                        </p>
                        <CardTitle className="mt-2 font-heading text-xl">
                          Embedded digital team
                        </CardTitle>
                      </div>
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-md">
                        <Layers className="size-5" aria-hidden />
                      </span>
                    </div>
                    <CardDescription className="text-base leading-relaxed">
                      From discovery workshops to launch and ongoing
                      optimization—we align channel mix, creative, and analytics
                      to what matters for your P&L.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-border/80 bg-muted/50 px-4 py-4 backdrop-blur-sm">
                    <p className="font-heading text-2xl font-bold text-foreground">
                      9+
                    </p>
                    <p className="mt-1 text-xs font-medium leading-snug text-muted-foreground">
                      Service lines spanning full-funnel growth
                    </p>
                  </div>
                  <div className="rounded-2xl border border-border/80 bg-[color-mix(in_oklch,var(--brand-navy)_6%,var(--card))] px-4 py-4">
                    <p className="font-heading text-2xl font-bold text-primary">
                      Noida
                    </p>
                    <p className="mt-1 text-xs font-medium leading-snug text-muted-foreground">
                      On-site & remote collaboration across India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section
        className="border-b border-border/60 bg-muted/25 py-14 sm:py-16"
        aria-labelledby="pillars-heading"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 id="pillars-heading" className="sr-only">
            What we stand for
          </h2>
          <div className="grid gap-10 md:grid-cols-3 md:gap-8">
            {pillars.map(({ title, body, icon: Icon }) => (
              <div
                key={title}
                className="relative flex flex-col gap-4 border-border/60 md:border-l md:pl-8 md:first:border-l-0 md:first:pl-0"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="size-5" aria-hidden />
                </span>
                <h3 className="font-heading text-lg font-semibold tracking-tight">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground md:text-[0.9375rem]">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore */}
      <section
        className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24"
        aria-labelledby="explore-heading"
      >
        <div className="mb-12 flex max-w-2xl flex-col gap-4 md:mb-16">
          <p className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Navigate
          </p>
          <h2
            id="explore-heading"
            className="font-heading text-3xl font-bold tracking-tight md:text-4xl"
          >
            Go deeper where you need detail
          </h2>
          <p className="text-lg text-muted-foreground">
            The homepage stays focused on how we think and work. Everything
            else lives on dedicated pages—easier to share, scan, and maintain.
          </p>
        </div>
        <ul className="grid gap-5 md:grid-cols-3">
          {explore.map(({ href, title, desc, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={cn(
                  "group flex h-full flex-col rounded-2xl border border-border/80 bg-card p-6 shadow-sm transition-all",
                  "hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-lg"
                )}
              >
                <span className="font-heading text-xs font-semibold uppercase tracking-wider text-primary">
                  {label}
                </span>
                <span className="mt-3 font-heading text-lg font-semibold tracking-tight group-hover:text-primary">
                  {title}
                </span>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {desc}
                </p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Continue
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Process preview */}
      <section
        id="process"
        className="border-y border-border/60 bg-[color-mix(in_oklch,var(--brand-navy)_4%,var(--background))] py-20 sm:py-24"
        aria-labelledby="process-heading"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-12 max-w-2xl space-y-4 md:mb-16">
            <p className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Process
            </p>
            <h2
              id="process-heading"
              className="font-heading text-3xl font-bold tracking-tight md:text-4xl"
            >
              A clear rhythm from kickoff to scale
            </h2>
            <p className="text-lg text-muted-foreground">
              Structured phases keep stakeholders aligned while we move quickly
              where it counts.
            </p>
          </div>
          <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map(({ step, detail }, i) => (
              <li key={step} className="relative">
                <div className="flex h-full flex-col rounded-2xl border border-border/70 bg-card p-6 shadow-sm">
                  <span className="font-heading mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                  <h3 className="font-heading text-lg font-semibold">{step}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {detail}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Services snapshot */}
      <section
        className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24"
        aria-labelledby="services-snapshot-heading"
      >
        <div className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
          <div className="max-w-2xl space-y-4">
            <p className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Capabilities
            </p>
            <h2
              id="services-snapshot-heading"
              className="font-heading text-3xl font-bold tracking-tight md:text-4xl"
            >
              Full-stack digital under one roof
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore the full list on the services page—here are a few anchors.
            </p>
          </div>
          <Button variant="outline" className="h-11 shrink-0 px-6" asChild>
            <Link href="/services">
              All services
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.slice(0, 6).map(({ title, icon: Icon, blurb }) => (
            <li key={title}>
              <div className="flex h-full gap-4 rounded-2xl border border-border/80 bg-card/80 p-5 shadow-sm transition-colors hover:border-primary/20">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="size-5" aria-hidden />
                </span>
                <div>
                  <p className="font-heading text-sm font-semibold">{title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{blurb}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section
        className="border-t border-border/60 bg-[var(--brand-navy)] px-4 py-20 text-[color-mix(in_oklch,white_92%,transparent)] sm:px-6 sm:py-24"
        aria-labelledby="cta-heading"
      >
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
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
    </>
  );
}
