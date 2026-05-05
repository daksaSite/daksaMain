import type { LucideIcon } from "lucide-react";
import { Compass, LineChart, Sparkles } from "lucide-react";

const WHY_US_ICONS: Record<string, LucideIcon> = {
  compass: Compass,
  sparkles: Sparkles,
  lineChart: LineChart,
};

/** Resolve CMS `iconKey` for a home “Why us” pillar card. */
export function resolveWhyUsIcon(iconKey: string): LucideIcon {
  return WHY_US_ICONS[iconKey] ?? Compass;
}
