"use client";

import dynamic from "next/dynamic";

const SanityStudio = dynamic(() => import("@/components/studio/sanity-studio"), {
  ssr: false,
  loading: () => (
    <div className="flex min-h-[100dvh] items-center justify-center bg-[#f6f6f8] text-sm text-neutral-600">
      Loading Sanity Studio…
    </div>
  ),
});

export default function StudioPage() {
  return <SanityStudio />;
}
