export const sanityEnv = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  /** True when env is set (Studio + fetches work). */
  isConfigured: Boolean(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID?.trim()),
} as const;
