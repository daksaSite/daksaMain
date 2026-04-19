import type { LucideIcon } from "lucide-react";

import { SERVICES } from "@/lib/site-content";

function MarqueeServiceTile({
  title,
  icon: Icon,
}: {
  title: string;
  icon: LucideIcon;
}) {
  return (
    <li>
      <div className="flex h-full min-h-[4.25rem] w-[min(100vw-2rem,19.5rem)] shrink-0 items-center gap-3.5 rounded-2xl border border-border/55 bg-background px-3.5 py-3 shadow-[0_2px_14px_-6px_rgba(26,27,53,0.12)] sm:min-h-[4.75rem] sm:w-[21.5rem] sm:gap-4 sm:px-4 sm:py-3.5 md:min-h-[5rem] md:w-[23rem]">
        <span
          className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/[0.09] text-primary ring-1 ring-primary/15 sm:size-11 md:size-12"
          aria-hidden
        >
          <Icon className="size-[1.125rem] sm:size-5 md:size-[1.35rem]" strokeWidth={1.75} />
        </span>
        <p className="min-w-0 flex-1 font-heading text-[0.9375rem] font-semibold leading-snug tracking-tight text-foreground sm:text-base md:text-[1.0625rem]">
          {title}
        </p>
      </div>
    </li>
  );
}

/** Full-bleed scrolling ticker of all services (nav + /services page carry full detail). */
export function ServicesMarqueeSection() {
  const list = SERVICES;

  return (
    <section className="border-b border-border/50 bg-background" aria-label="Service offerings">
      <p className="sr-only">
        Service offerings include: {list.map((s) => s.title).join(", ")}. Use the site navigation
        Services link for the full services page.
      </p>

      <div className="services-marquee-group py-8 sm:py-9 md:py-10" aria-hidden>
        <div className="services-marquee-wrap">
          <div className="services-marquee-track">
            <ul className="flex items-stretch gap-5 pr-5 sm:gap-6 sm:pr-6 md:gap-7 md:pr-7">
              {list.map(({ title, icon }) => (
                <MarqueeServiceTile key={title} title={title} icon={icon} />
              ))}
            </ul>
            <ul className="flex items-stretch gap-5 pr-5 sm:gap-6 sm:pr-6 md:gap-7 md:pr-7">
              {list.map(({ title, icon }) => (
                <MarqueeServiceTile key={`${title}-dup`} title={title} icon={icon} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
