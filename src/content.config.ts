import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const servicosCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/servicos' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    heroImage: z.string(),
    category: z.string(),
    features: z.array(z.string()),
    faqs: z.array(
      z.object({
        question: z.string(),
        answer: z.string(),
      })
    ).optional(),
  }),
});

const blogCollection = defineCollection({
  loader: glob({ pattern: ['**/[^_]*.{md,mdx}', '!_drafts/**'], base: './src/content/posts' }),
  schema: z.object({
    title: z.any().transform((v) => (v ? String(v) : 'Artigo Detaliê Móveis')),
    description: z.any().optional().transform((v) => (v ? String(v) : undefined)),
    pubDate: z.coerce.date().optional(),
    date: z.coerce.date().optional(),
    author: z.any().optional().transform((v) => (v ? String(v) : 'Detaliê Móveis')),
    coverImage: z.any().optional().transform((v) => (v ? String(v) : undefined)),
    categories: z.any().optional(),
    tags: z.any().optional(),
  }),
});

export const collections = {
  servicos: servicosCollection,
  blog: blogCollection,
};
