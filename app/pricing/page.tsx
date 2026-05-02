import type { Metadata } from "next";
import { Check, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MEDIA } from "@/lib/media";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Starter, Standard, and Premium engagement options with Daksa Digital  clear scope, realistic pricing, and custom enterprise plans.",
};

type Plan = {
  name: string;
  eyebrow: string;
  description: string;
  included: readonly string[];
  notIncluded: readonly string[];
  /** null = contact-style footer */
  price: string | null;
  priceNote?: string;
  featured?: boolean;
};

const PLANS: Plan[] = [
  {
    name: "Starter",
    eyebrow: "Launch & learn",
    description:
      "Ideal for early-stage brands that need consistent digital presence without a full in-house team.",
    included: [
      "Kickoff workshop + 90-day roadmap",
      "Up to 2 social channels — planning, design & scheduling",
      "4 long-form or carousel content pieces per month",
      "Monthly performance snapshot (reach, engagement, top posts)",
      "Community monitoring & light engagement (comment/DM triage)",
      "On-brand templates for stories and static posts",
      "Email support with 48-hour response target",
    ],
    notIncluded: [
      "Paid media buying & optimisation",
      "Dedicated account director",
      "Influencer outreach & contracting",
      "Website builds or technical SEO fixes",
    ],
    price: "From ₹34,999 / month",
    priceNote: "Indicative · 3-month minimum · excludes ad spend & taxes",
  },
  {
    name: "Standard",
    eyebrow: "Growth ready",
    description:
      "For teams ready to scale campaigns, tighten creative, and report on outcomes every sprint.",
    featured: true,
    included: [
      "Everything in Starter, plus:",
      "Up to 4 social channels + platform-specific variants",
      "8 content deliverables / month (copy, creative, or landing tweaks)",
      "Paid social or search setup with weekly optimisation checkpoints",
      "Bi-weekly strategy call + shared live reporting dashboard",
      "Quarterly creative refresh & competitor snapshot",
      "Lead form / CTA audits on key landing pages",
      "Priority chat + email (24-hour target on business days)",
      "Single monthly influencer or UGC coordination slot",
    ],
    notIncluded: [
      "Full product site rebuilds",
      "Always-on brand film / large production shoots",
      "Enterprise martech integrations (CRM, CDP)",
    ],
    price: "From ₹79,999 / month",
    priceNote: "Indicative · scope confirmed after discovery · excludes media spend",
  },
  {
    name: "Premium",
    eyebrow: "Scale & sophistication",
    description:
      "Executive-level partnership: integrated campaigns, senior strategists, and capacity reserved for your brand.",
    included: [
      "Everything in Standard, plus:",
      "Named strategist + producer with weekly war-room cadence",
      "Unlimited channel coverage within agreed scope of work",
      "Custom reporting pack (board-ready summaries, cohort views)",
      "Multi-market or multilingual rollout support",
      "Crisis / reputation monitoring playbook & on-call window",
      "Advanced funnel experiments (A/B journeys, nurture logic)",
      "Executive workshops & annual planning sessions",
      "Vendor & partner coordination (PR, events, creators)",
      "Optional embedded days on-site or hybrid each quarter",
    ],
    notIncluded: [
      "Pricing varies by scope — we scope retainers and hybrid project fees together.",
    ],
    price: null,
  },
];

export default function PricingPage() {
  return (
    <div>

      <section className="relative min-h-[48vh] overflow-hidden bg-[var(--brand-navy)] sm:min-h-[52vh] lg:min-h-[54vh]">
        <Image
          src={MEDIA.images.pricingHero}
          alt="Pricing and growth planning"
          fill
          quality={95}
          priority
          className="object-cover object-center opacity-30"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-[var(--brand-navy)]/55 via-transparent to-[var(--brand-navy)]/90"
          aria-hidden
        />

        <div className="site-container relative flex min-h-[48vh] flex-col justify-end pb-12 pt-24 sm:min-h-[52vh] sm:pb-14 sm:pt-28 lg:min-h-[54vh] lg:pb-16">
          <p className="font-heading text-xs font-semibold uppercase tracking-[0.22em] text-primary sm:text-sm">
            Pricing
          </p>
          <h1 className="mt-3 max-w-3xl font-heading text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl lg:text-[3rem] lg:leading-[1.08]">
            Three ways to work together clear scope, no surprises.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/72 sm:mt-5 sm:text-lg">
            Figures below are starting points. After discovery we confirm deliverables, timelines, and
            commercials in writing project, retainer, or hybrid.
          </p>
        </div>
      </section>

      <section className="border-b border-border/60 bg-background" aria-labelledby="plans-heading">
        <div className="site-container py-14 sm:py-20 lg:py-24">
          <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-14 lg:mb-16">
            <h2
              id="plans-heading"
              className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-[2rem]"
            >
              Compare plans
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-[1.0625rem]">
              Each tier stacks more strategy, creative throughput, and senior attention. Pick a lane to
              start the conversation — we refine everything on a call.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3 lg:gap-5 lg:items-stretch">
            {PLANS.map((plan) => (
              <article
                key={plan.name}
                className={cn(
                  "flex flex-col overflow-hidden rounded-2xl border bg-card shadow-sm transition-shadow",
                  plan.featured
                    ? "border-primary/40 shadow-md ring-2 ring-primary/20 lg:-mt-2 lg:mb-2"
                    : "border-border/70",
                )}
              >
                <div
                  className={cn(
                    "border-b px-6 py-6 sm:px-7 sm:py-7",
                    plan.featured ? "border-primary/15 bg-primary/[0.06]" : "border-border/60 bg-muted/20",
                  )}
                >
                  <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                    {plan.eyebrow}
                  </p>
                  <h3 className="mt-2 font-heading text-2xl font-bold tracking-tight text-foreground">
                    {plan.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-[0.9375rem]">
                    {plan.description}
                  </p>
                </div>

                <div className="flex flex-1 flex-col gap-6 px-6 py-6 sm:px-7 sm:py-7">
                  <div>
                    <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      Included
                    </p>
                    <ul className="space-y-2.5">
                      {plan.included.map((line) => (
                        <li key={line} className="flex gap-2.5 text-sm leading-snug text-foreground">
                          <Check
                            className="mt-0.5 size-4 shrink-0 text-primary"
                            strokeWidth={2.5}
                            aria-hidden
                          />
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      Not included
                    </p>
                    <ul className="space-y-2.5">
                      {plan.notIncluded.map((line) => (
                        <li
                          key={line}
                          className="flex gap-2.5 text-sm leading-snug text-muted-foreground"
                        >
                          <X
                            className="mt-0.5 size-4 shrink-0 text-muted-foreground/70"
                            strokeWidth={2}
                            aria-hidden
                          />
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div
                  className={cn(
                    "mt-auto border-t px-6 py-6 sm:px-7",
                    plan.featured ? "border-primary/15 bg-muted/30" : "border-border/60 bg-muted/15",
                  )}
                >
                  {plan.price ? (
                    <>
                      <p className="font-heading text-xl font-bold tracking-tight text-[var(--brand-navy)] sm:text-2xl">
                        {plan.price}
                      </p>
                      {plan.priceNote ? (
                        <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-[13px]">
                          {plan.priceNote}
                        </p>
                      ) : null}
                      <Button className="mt-5 w-full font-semibold sm:mt-6" size="lg" asChild>
                        <Link href="/contact">Request this plan</Link>
                      </Button>
                    </>
                  ) : (
                    <div className="rounded-xl border border-dashed border-primary/35 bg-primary/[0.04] px-4 py-5 text-center">
                      <p className="font-heading text-lg font-bold text-foreground sm:text-xl">
                        Custom engagement
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        Retainers, blended project fees, and enterprise SLAs — we&apos;ll shape a proposal
                        to your goals and governance needs.
                      </p>
                      <Button className="mt-5 w-full font-semibold" size="lg" asChild>
                        <Link href="/contact">Contact us</Link>
                      </Button>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-border/70 bg-muted/20 px-6 py-8 sm:mt-16 sm:px-8 lg:mt-20">
            <p className="font-heading text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              How we price
            </p>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-[0.9375rem]">
              Every engagement starts with <strong className="text-foreground">discovery</strong> — we
              align on goals, constraints, and success metrics, then share a scoped plan with timelines
              and commercial options. <strong className="text-foreground">Project</strong> fees suit
              defined deliverables; <strong className="text-foreground">retainers</strong> keep a steady
              drumbeat of execution; <strong className="text-foreground">hybrid</strong> pairs a baseline
              retainer with burst projects when you need extra velocity.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button variant="outline" className="font-semibold" asChild>
                <Link href="/process">See our process</Link>
              </Button>
              <Button variant="ghost" className="font-semibold text-primary hover:text-primary" asChild>
                <Link href="/services">Browse services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
