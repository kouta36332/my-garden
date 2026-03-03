import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      pubDate: z.coerce.date(),
      category: z.enum(["works", "music", "ideas", "notes"]),
      heroImage: image().optional(), // サムネ（任意）
      draft: z.boolean().optional().default(false),
    }),
});

export const collections = { posts };
