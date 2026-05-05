"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { Layers, MapPin } from "lucide-react";
import { useRef } from "react";

import type { PartnerModelStat } from "@/lib/sanity.home";
import { cn } from "@/lib/utils";

const DEFAULT_STATS: PartnerModelStat[] = [
  {
    value: "9+",
    label: "Service lines, full-funnel",
    accent: false,
  },
  {
    value: "Noida",
    label: "On-site & remote across India",
    accent: true,
  },
];

export type PartnerModelCardProps = {
  eyebrow?: string;
  title?: string;
  body?: string;
  stats?: PartnerModelStat[];
};

const SPRING = { stiffness: 280, damping: 28, mass: 0.45 };

export function PartnerModelCard({
  eyebrow = "Partner model",
  title = "Embedded digital team",
  body = "Strategy, creative, and analytics, tied to your P&L from discovery through launch and beyond.",
  stats = DEFAULT_STATS,
}: PartnerModelCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, SPRING);
  const smy = useSpring(my, SPRING);

  const rotateX = useTransform(smy, (v) => (reduceMotion ? 0 : -v * 11));
  const rotateY = useTransform(smx, (v) => (reduceMotion ? 0 : v * 11));

  const glowX = useTransform(smx, [-0.5, 0.5], [18, 82]);
  const glowY = useTransform(smy, [-0.5, 0.5], [22, 78]);

  const spotlight = useMotionTemplate`radial-gradient(520px circle at ${glowX}% ${glowY}%, rgba(255,255,255,0.22) 0%, rgba(233,30,67,0.12) 28%, transparent 62%)`;

  const borderGlow = useMotionTemplate`radial-gradient(380px circle at ${glowX}% ${glowY}%, rgba(233,30,67,0.35), transparent 68%)`;

  const onPointerMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el || reduceMotion) return;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  const onPointerLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <section
      className="relative z-20 -mt-12 mb-10 px-4 sm:-mt-16 sm:mb-12 sm:px-6 md:-mt-20 md:px-10 lg:px-14 xl:px-16 2xl:px-24"
      aria-labelledby="partner-model-heading"
      style={{ perspective: "1400px" }}
    >
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          ref={ref}
          className="relative overflow-hidden rounded-2xl border border-white/[0.12] bg-gradient-to-br from-[color-mix(in_srgb,var(--brand-navy)_92%,#2a2d4a)] to-[var(--brand-navy)] shadow-[0_24px_56px_-16px_rgba(26,27,53,0.55)] ring-1 ring-black/10 sm:rounded-3xl"
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          onPointerMove={onPointerMove}
          onPointerLeave={onPointerLeave}
        >
          {/* Cursor-tracked spotlight */}
          <motion.div
            className="pointer-events-none absolute inset-0 rounded-[inherit] mix-blend-overlay"
            style={{ background: spotlight }}
            aria-hidden
          />
          <motion.div
            className="pointer-events-none absolute inset-0 rounded-[inherit] mix-blend-screen opacity-50"
            style={{ background: borderGlow }}
            aria-hidden
          />

          <div
            className="relative grid gap-5 p-4 sm:gap-6 sm:p-5 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-center lg:gap-8 lg:p-6"
            style={{ transform: "translateZ(28px)" }}
          >
            <div className="space-y-2">
              <p className="font-heading text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-primary sm:text-xs">
                {eyebrow}
              </p>
              <div className="flex gap-3 sm:gap-4">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                  style={{ transform: "translateZ(42px)" }}
                >
                  <Layers className="size-5" aria-hidden />
                </span>
                <div className="min-w-0 space-y-1.5">
                  <h2
                    id="partner-model-heading"
                    className="font-heading text-lg font-bold tracking-tight text-white sm:text-xl"
                  >
                    {title}
                  </h2>
                  <p className="text-sm leading-snug text-[color-mix(in_oklch,white_76%,transparent)] sm:text-[0.9375rem]">
                    {body}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
              {stats.map(({ value, label, accent }, i) => (
                <div
                  key={`${value}-${i}`}
                  className={cn(
                    "rounded-xl border px-3 py-3 sm:px-4 sm:py-3.5",
                    accent
                      ? "border-white/[0.1] bg-white/[0.06] backdrop-blur-sm"
                      : "border-white/[0.08] bg-black/15",
                  )}
                  style={{
                    transform: `translateZ(${24 + i * 6}px)`,
                  }}
                >
                  <p
                    className={
                      accent
                        ? "flex items-center gap-1 font-heading text-xl font-bold text-primary sm:text-2xl"
                        : "font-heading text-xl font-bold text-white sm:text-2xl"
                    }
                  >
                    {accent ? (
                      <MapPin className="size-4 shrink-0 sm:size-5" aria-hidden />
                    ) : null}
                    {value}
                  </p>
                  <p className="mt-1 text-[0.7rem] font-medium leading-tight text-[color-mix(in_oklch,white_70%,transparent)] sm:text-xs">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom edge sheen for depth */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-50"
            style={{ transform: "translateZ(1px)" }}
            aria-hidden
          />
        </motion.div>
      </div>
    </section>
  );
}
