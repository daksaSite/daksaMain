import type { Metadata } from "next";
import {
  BarChart3,
  CheckCircle2,
  Lightbulb,
  MapPin,
  MessageCircle,
  Rocket,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { MEDIA } from "@/lib/media";
import {
  ABOUT_PARAGRAPHS,
  CONTACT,
  MISSION,
  PRIORITIES,
  VISION,
  WHO_WE_WORK_WITH,
  WHY_POINTS,
} from "@/lib/site-content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Daksa Digital — our mission, vision, values, and how we partner with businesses for long-term digital growth.",
};

const STATS = [
  { value: "9+", label: "Service lines" },
  { value: "100%", label: "Client-first approach" },
  { value: "Noida", label: "Headquartered in" },
  { value: "Pan-India", label: "Client reach" },
] as const;

const VALUES = [
  {
    icon: Lightbulb,
    title: "Strategic clarity",
    body: "Every engagement starts with understanding your goals — not guessing at tactics.",
  },
  {
    icon: BarChart3,
    title: "Measurable outcomes",
    body: "We tie our work to metrics that actually move the needle for your business.",
  },
  {
    icon: ShieldCheck,
    title: "Consistent quality",
    body: "No shortcuts. Every deliverable meets the standard we'd stake our reputation on.",
  },
  {
    icon: MessageCircle,
    title: "Clear communication",
    body: "You always know what's happening, why it's happening, and what comes next.",
  },
  {
    icon: Users,
    title: "Long-term relationships",
    body: "We work best as ongoing partners, not one-off vendors. Growth takes time and trust.",
  },
  {
    icon: Rocket,
    title: "Bias for execution",
    body: "Great strategy without action is just a slide deck. We ship, learn, and iterate fast.",
  },
] as const;

export default function AboutPage() {
  return (
    <div>

      {/* ── Hero ── */}
      <section className="relative min-h-[52vh] overflow-hidden bg-[var(--brand-navy)] sm:min-h-[58vh] lg:min-h-[62vh]">
        <Image
          src={MEDIA.images.hero4}
          alt="Daksa Digital team at work"
          fill
          quality={100}
          priority
          className="object-cover object-center opacity-30"
          sizes="100vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--brand-navy)]/40 via-transparent to-[var(--brand-navy)]/80" aria-hidden />

        <div className="site-container relative flex h-full min-h-[52vh] flex-col justify-end pb-14 pt-24 sm:min-h-[58vh] sm:pb-16 sm:pt-28 lg:min-h-[62vh] lg:pb-20">
          <p className="font-heading text-xs font-semibold uppercase tracking-[0.22em] text-primary sm:text-sm">
            About us
          </p>
          <h1 className="mt-3 max-w-3xl font-heading text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl lg:text-[3rem] lg:leading-[1.1]">
            A digital partner invested in how you grow — not just how you look online.
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70 sm:mt-5 sm:text-lg">
            Daksa Digital is a Noida-based digital marketing company helping brands build trust, visibility, and measurable growth.
          </p>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <section className="border-b border-border/60 bg-background" aria-label="Company stats">
        <div className="site-container">
          <dl className="grid grid-cols-2 divide-x divide-y divide-border/60 lg:grid-cols-4 lg:divide-y-0">
            {STATS.map(({ value, label }) => (
              <div key={label} className="flex flex-col items-center px-6 py-8 text-center sm:px-8 sm:py-10">
                <dt className="font-heading text-3xl font-extrabold tracking-tight text-[var(--brand-navy)] sm:text-4xl">
                  {value}
                </dt>
                <dd className="mt-1.5 text-sm text-muted-foreground">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Story ── */}
      <section className="border-b border-border/60 bg-muted/20" aria-labelledby="story-heading">
        <div className="site-container py-16 sm:py-20 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">

            <div className="space-y-5">
              <p className="font-heading text-xs font-semibold uppercase tracking-[0.22em] text-primary sm:text-sm">
                Our story
              </p>
              <h2
                id="story-heading"
                className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-[2rem] lg:leading-tight"
              >
                Built to deliver what brands actually need — results, not just reports.
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-[1.0625rem]">
                {ABOUT_PARAGRAPHS.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className="flex items-center gap-2 pt-2 text-sm text-muted-foreground">
                <MapPin className="size-4 shrink-0 text-primary" aria-hidden />
                <span>{CONTACT.address}</span>
              </div>
            </div>

            {/* Image */}
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src={MEDIA.images.hero4}
                alt="Daksa Digital — strategic execution"
                width={720}
                height={520}
                quality={100}
                className="h-[300px] w-full object-cover sm:h-[380px] lg:h-[460px]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Bottom caption bar */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[var(--brand-navy)]/75 to-transparent px-5 pb-5 pt-12">
                <p className="font-heading text-sm font-semibold text-white">
                  Built for Scale. Driven by Impact.
                </p>
                <p className="mt-0.5 text-xs text-white/65">Noida, Uttar Pradesh, India</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="border-b border-border/60 bg-background" aria-labelledby="mv-heading">
        <div className="site-container py-16 sm:py-20 lg:py-24">
          <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12 lg:mb-14">
            <p className="font-heading text-xs font-semibold uppercase tracking-[0.22em] text-primary sm:text-sm">
              Purpose
            </p>
            <h2
              id="mv-heading"
              className="mt-2.5 font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-[2rem]"
            >
              What we stand for
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-[var(--brand-navy)] to-[color-mix(in_srgb,var(--brand-navy)_85%,#32375f)] p-8 md:p-10">
              <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-primary/10 blur-3xl" aria-hidden />
              <div className="relative">
                <h3 className="font-heading text-lg font-bold text-white sm:text-xl">
                  Our Mission
                </h3>
                <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/70">{MISSION}</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-border/70 bg-card p-8 md:p-10">
              <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-primary/5 blur-3xl" aria-hidden />
              <div className="relative">
                <h3 className="font-heading text-lg font-bold text-foreground sm:text-xl">
                  Our Vision
                </h3>
                <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted-foreground">{VISION}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="border-b border-border/60 bg-muted/20" aria-labelledby="values-heading">
        <div className="site-container py-16 sm:py-20 lg:py-24">
          <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12 lg:mb-14">
            <p className="font-heading text-xs font-semibold uppercase tracking-[0.22em] text-primary sm:text-sm">
              How we operate
            </p>
            <h2
              id="values-heading"
              className="mt-2.5 font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-[2rem]"
            >
              Principles we don't compromise on
            </h2>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
            {VALUES.map(({ icon: Icon, title, body }) => (
              <li
                key={title}
                className="flex gap-4 rounded-2xl border border-border/70 bg-card p-5 sm:p-6"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="size-5" aria-hidden />
                </span>
                <div>
                  <p className="font-heading text-[0.9375rem] font-semibold text-foreground">{title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Why us + Priorities ── */}
      <section className="border-b border-border/60 bg-background" aria-labelledby="why-heading">
        <div className="site-container py-16 sm:py-20 lg:py-24">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">

            <div>
              <p className="font-heading text-xs font-semibold uppercase tracking-[0.22em] text-primary sm:text-sm">
                Why Daksa
              </p>
              <h2
                id="why-heading"
                className="mt-2.5 font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-[2rem]"
              >
                What makes us different
              </h2>
              <ul className="mt-8 space-y-4">
                {WHY_POINTS.map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                    <span className="text-base font-medium leading-snug text-foreground">{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-heading text-xs font-semibold uppercase tracking-[0.22em] text-primary sm:text-sm">
                Our focus
              </p>
              <h2 className="mt-2.5 font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-[2rem]">
                What we prioritize
              </h2>
              <ul className="mt-8 space-y-4">
                {PRIORITIES.map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <Target className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                    <span className="text-base leading-snug text-muted-foreground">{t}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ── Who we work with ── */}
      <section className="border-b border-border/60 bg-muted/20" aria-labelledby="audience-heading">
        <div className="site-container py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-heading text-xs font-semibold uppercase tracking-[0.22em] text-primary sm:text-sm">
              Our clients
            </p>
            <h2
              id="audience-heading"
              className="mt-2.5 font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-[2rem]"
            >
              Who we work with
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {WHO_WE_WORK_WITH}
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              From early-stage startups finding their voice to established brands looking to sharpen their digital edge — we bring the same level of strategic thinking and creative execution to every engagement.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[var(--brand-navy)]" aria-labelledby="about-cta-heading">
        <div className="site-container py-16 sm:py-20 lg:py-24">
          <div className="max-w-xl space-y-3">
            <h2
              id="about-cta-heading"
              className="font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-[2rem]"
            >
              Ready to build something meaningful?
            </h2>
            <p className="text-base leading-relaxed text-white/65 sm:text-lg">
              Let&apos;s have a real conversation about your goals. No sales pitch — just a clear look at how we can help.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
