import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Megaphone,
  Palette,
  PenLine,
  Search,
  Share2,
  Globe,
  LineChart,
  Users,
} from "lucide-react";

const ABOUT_ORBIT_ICONS: Record<string, LucideIcon> = {
  megaphone: Megaphone,
  search: Search,
  palette: Palette,
  users: Users,
  penLine: PenLine,
  share2: Share2,
  globe: Globe,
  lineChart: LineChart,
  barChart3: BarChart3,
};

/** Resolve CMS `iconKey` to a Lucide icon for the home About orbit cards. */
export function resolveAboutOrbitIcon(iconKey: string): LucideIcon {
  return ABOUT_ORBIT_ICONS[iconKey] ?? Megaphone;
}
