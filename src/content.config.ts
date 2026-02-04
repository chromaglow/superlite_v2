// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

// Define a `type` and `schema` for each collection
const postsCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/posts" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    description: z.string(),
    author: z.string(),
    image: z.object({
      url: image(),
      alt: z.string(),
    }),
    readingTime: z.number().optional(),
  }),
});
// Export a single `collections` object to register your collection(s)
export const collections = {
  posts: postsCollection,
};
