import { defineCollection } from 'astro:content';
import { z } from 'zod';
import { glob } from 'astro/loaders';

const technical = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/technical' }),
  schema: z.object({ title: z.string(), description: z.string() }),
});

export const collections = { technical };
