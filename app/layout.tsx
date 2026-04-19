import type { Metadata } from "next";
import { DM_Sans, Geist_Mono, Montserrat } from "next/font/google";

import { SiteBackground } from "@/components/site-background";
import { SiteFooter } from "@/components/site-footer";
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${montserrat.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <div className="relative flex min-h-full flex-1 flex-col">
          <SiteBackground />
          <TopBar />
          <SiteHeader />
          <main className="flex flex-1 flex-col">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
