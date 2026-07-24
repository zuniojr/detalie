import { defineCollection, z } from 'astro:content';

const servicosCollection = defineCollection({
  type: 'content',
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
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string().default('Detaliê Móveis'),
    coverImage: z.string(),
    tags: z.array(z.string()).default(['Móveis Planejados']),
  }),
});

export const collections = {
  servicos: servicosCollection,
  blog: blogCollection,
};
