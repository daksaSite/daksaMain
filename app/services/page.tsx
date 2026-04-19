import type { Metadata } from "next";
import Link from "next/link";

import { PageIntro } from "@/components/page-intro";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SERVICES } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Digital marketing, content, social, web, SEO, branding, lead generation, and more—tailored to your goals. Daksa Digital Pvt. Ltd., Noida.",
};

export default function ServicesPage() {
  return (
    <div className="site-container py-16 sm:py-20">
      <PageIntro
        eyebrow="Services"
        title="Everything you need to show up, persuade, and convert—without juggling five vendors."
        description="Each engagement is scoped around your stage, stack, and success metrics. Pick a single lane or bundle channels for compound growth."
        className="mb-14 md:mb-16"
      />

      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map(({ title, icon: Icon, blurb }) => (
          <li key={title}>
            <Card className="h-full border-border/80 transition-all hover:border-primary/25 hover:shadow-md">
              <CardHeader>
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="size-5" aria-hidden />
                </div>
                <CardTitle className="font-heading text-lg">{title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {blurb}
                </CardDescription>
              </CardHeader>
            </Card>
          </li>
        ))}
      </ul>

      <p className="mx-auto mt-12 max-w-2xl text-center text-muted-foreground md:text-lg">
        Each service is customized to align with your business goals, ensuring
        scalable and sustainable growth.
      </p>

      <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Button className="h-11 px-8" size="lg" asChild>
          <Link href="/contact">Discuss your requirements</Link>
        </Button>
        <Button className="h-11 px-8" variant="outline" size="lg" asChild>
          <Link href="/testimonials">Read client feedback</Link>
        </Button>
      </div>
    </div>
  );
}
