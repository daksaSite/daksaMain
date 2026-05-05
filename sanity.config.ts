import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { schemaTypes } from "./sanity/schemaTypes";
import { deskStructure } from "./sanity/structure";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

export default defineConfig({
  name: "daksa",
  title: "Daksa Digital CMS",
  projectId,
  dataset,
  basePath: "/studio",
  plugins: [structureTool({ structure: deskStructure })],
  schema: {
    types: schemaTypes,
  },
});
