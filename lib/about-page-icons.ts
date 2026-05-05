import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Lightbulb,
  MessageCircle,
  Rocket,
  ShieldCheck,
  Sparkles,
  Store,
  TrendingUp,
  Users,
} from "lucide-react";

const VALUE_ICONS: Record<string, LucideIcon> = {
  lightbulb: Lightbulb,
  barChart3: BarChart3,
  shieldCheck: ShieldCheck,
  messageCircle: MessageCircle,
  users: Users,
  rocket: Rocket,
};

const AUDIENCE_ICONS: Record<string, LucideIcon> = {
  sparkles: Sparkles,
  trendingUp: TrendingUp,
  store: Store,
};

export function resolveAboutValueIcon(iconKey: string): LucideIcon {
  return VALUE_ICONS[iconKey] ?? Lightbulb;
}

export function resolveAboutAudienceIcon(iconKey: string): LucideIcon {
  return AUDIENCE_ICONS[iconKey] ?? Sparkles;
}
