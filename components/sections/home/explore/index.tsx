import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";

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
    href: "/process",
    title: "How engagements run",
    desc: "From discovery to delivery—phases, rituals, and what to expect.",
    label: "Process",
  },
  {
    href: "/pricing",
    title: "Engagement models",
    desc: "Project, retainer, or hybrid—scoped to outcomes and your stage.",
    label: "Pricing",
  },
  {
    href: "/testimonials",
    title: "Client perspectives",
    desc: "What partners say about collaboration, quality, and outcomes.",
    label: "Testimonials",
  },
  {
    href: "/our-work",
    title: "Work & outcomes",
    desc: "Case studies and highlights as we publish them.",
    label: "Our work",
  },
] as const;

export function ExploreSection() {
  return (
    <section
      className="site-container py-20 sm:py-24"
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
          The homepage stays focused on how we think and work. Everything else
          lives on dedicated pages—easier to share, scan, and maintain.
        </p>
      </div>
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
  );
}
