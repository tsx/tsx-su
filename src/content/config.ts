import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    postType: z.enum(["post", "ar"]).optional().default("post"),
    category: z.string().optional(),
    author: z.string().optional(),
    image: z.string().optional(),
    meta: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
