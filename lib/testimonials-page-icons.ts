import {
  Award,
  Globe2,
  Headphones,
  MapPin,
  MessageCircle,
  MessageSquareQuote,
  RefreshCw,
  Star,
  type LucideIcon,
} from "lucide-react";

const STAT_ICON_MAP: Record<string, LucideIcon> = {
  messageSquareQuote: MessageSquareQuote,
  star: Star,
  mapPin: MapPin,
  globe2: Globe2,
};

const TRUST_ICON_MAP: Record<string, LucideIcon> = {
  messageCircle: MessageCircle,
  refreshCw: RefreshCw,
  headphones: Headphones,
  award: Award,
};

export function resolveTestimonialsStatIcon(iconKey?: string | null): LucideIcon {
  if (!iconKey) return MessageSquareQuote;
  return STAT_ICON_MAP[iconKey] ?? MessageSquareQuote;
}

export function resolveTestimonialsTrustIcon(iconKey?: string | null): LucideIcon {
  if (!iconKey) return MessageCircle;
  return TRUST_ICON_MAP[iconKey] ?? MessageCircle;
}
