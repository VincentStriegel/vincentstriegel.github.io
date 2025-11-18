// 1. Import utilities from `astro:content`
import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";

// 2. Import loader(s)

const projectDescriptions = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/descriptions" }),
});

export const collections = { projectDescriptions: projectDescriptions };
