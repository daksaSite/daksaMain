import { cn } from "@/lib/utils";

export function SiteBackground({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none fixed inset-0 -z-10 overflow-hidden",
        className
      )}
    >
      <div
        className={cn(
          "absolute inset-0 bg-[radial-gradient(ellipse_100%_70%_at_50%_-20%,color-mix(in_oklch,var(--brand-red)_10%,transparent),transparent_58%)]"
        )}
      />
      <div
        className={cn(
          "absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_100%_0%,color-mix(in_oklch,var(--brand-navy)_7%,transparent),transparent_52%)]"
        )}
      />
      <div
        className={cn(
          "absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_0%_100%,color-mix(in_oklch,var(--brand-burgundy)_5%,transparent),transparent_48%)]"
        )}
      />
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `linear-gradient(color-mix(in_oklch,var(--brand-navy)_6%,transparent) 1px, transparent 1px),
            linear-gradient(90deg, color-mix(in_oklch,var(--brand-navy)_6%,transparent) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />
    </div>
  );
}
