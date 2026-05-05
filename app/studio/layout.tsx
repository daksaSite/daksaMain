import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

/**
 * Inline Studio shell metadata — avoids importing `next-sanity/studio` in a
 * server layout (that barrel can pull code that touches `window` during SSR).
 */
export const metadata: Metadata = {
  referrer: "same-origin",
  robots: { index: false, follow: false },
  title: "Sanity Studio — Daksa Digital",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function StudioLayout({ children }: { children: ReactNode }) {
  return (
    <div
      id="sanity"
      data-ui="NextStudioLayout"
      style={{
        height: "100vh",
        maxHeight: "100dvh",
        overscrollBehavior: "none",
        WebkitFontSmoothing: "antialiased",
        overflow: "auto",
      }}
    >
      {children}
    </div>
  );
}
