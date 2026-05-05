import {
  BarChart3,
  Globe,
  LineChart,
  Megaphone,
  Palette,
  PenLine,
  Search,
  Share2,
  Users,
  type LucideIcon,
} from "lucide-react";

const SERVICE_ICON_MAP: Record<string, LucideIcon> = {
  megaphone: Megaphone,
  users: Users,
  penLine: PenLine,
  share2: Share2,
  globe: Globe,
  search: Search,
  palette: Palette,
  lineChart: LineChart,
  barChart3: BarChart3,
};

export function resolveServiceIcon(iconKey?: string | null): LucideIcon {
  if (!iconKey) return Megaphone;
  return SERVICE_ICON_MAP[iconKey] ?? Megaphone;
}
