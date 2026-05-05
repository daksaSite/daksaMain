import type { Metadata } from "next";
import { headers } from "next/headers";
import { DM_Sans, Geist_Mono, Montserrat } from "next/font/google";

import { BackToTop } from "@/components/back-to-top";
import { CookieBanner } from "@/components/cookie-banner";
import { SiteBackground } from "@/components/site-background";
import { SiteFooter } from "@/components/site-footer";
import { getSiteFooter } from "@/lib/sanity.footer";
import { SiteHeader } from "@/components/site-header";
import { TopBar } from "@/components/top-bar";

import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Daksa Digital — Built for Scale. Driven by Impact.",
    template: "%s — Daksa Digital",
  },
  description:
    "Strategic digital solutions, creative excellence, and performance-driven execution for modern businesses. Daksa Digital Pvt. Ltd., Noida.",
  keywords: [
    "Daksa Digital",
    "digital agency",
    "digital agency Noida",
    "digital marketing agency Noida",
    "best digital marketing agency in Noida",
    "SEO services Noida",
    "social media marketing",
    "content marketing",
    "website development",
    "website development Noida",
    "branding agency",
    "lead generation",
    "performance marketing agency India",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: ["/favicon.ico"],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = (await headers()).get("x-pathname") ?? "";
  const isStudio = pathname.startsWith("/studio");
  const siteFooter = await getSiteFooter();

  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${montserrat.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        className={
          isStudio
            ? "h-full overflow-hidden bg-[#f6f6f8]"
            : "flex min-h-full flex-col"
        }
      >
        {isStudio ? (
          children
        ) : (
          <div className="relative flex min-h-full flex-1 flex-col">
            <SiteBackground />
            <TopBar />
            <SiteHeader />
            <main className="flex flex-1 flex-col">{children}</main>
            <SiteFooter data={siteFooter} />
            <BackToTop />
            <CookieBanner />
          </div>
        )}
      </body>
    </html>
  );
}
