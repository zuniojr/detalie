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
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date().optional(),
    date: z.coerce.date().optional(),
    author: z.string().default('Detaliê Móveis'),
    coverImage: z.string().optional(),
    categories: z.array(z.string()).optional().default([]),
    tags: z.array(z.string()).optional().default(['Móveis Planejados']),
  }),
});

export const collections = {
  servicos: servicosCollection,
  blog: blogCollection,
};
