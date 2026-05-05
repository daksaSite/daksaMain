import { createClient } from "next-sanity";

import { sanityEnv } from "@/lib/sanity.env";

export const sanityClient = createClient({
  projectId: sanityEnv.projectId || "missing",
  dataset: sanityEnv.dataset,
  apiVersion: "2025-05-01",
  useCdn: true,
});
