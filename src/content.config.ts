import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const servicosCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/servicos' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    heroImage: image(),
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
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default('Detaliê Móveis'),
    coverImage: image(),
    tags: z.array(z.string()).default(['Móveis Planejados']),
  }),
});

export const collections = {
  servicos: servicosCollection,
  blog: blogCollection,
};
