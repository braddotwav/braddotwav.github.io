import { z, defineCollection } from 'astro:content';

// Profile collection
const profileCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        avatar: image().required(),
        description: z.string(),
        tools: z.array(z.string()),
        socials: z.array(z.string()),
        resumeLink: z.string().url().optional()
    }),
});

// Project collection
const projectCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        category: z.enum(['software', 'audio', 'other']),
        image: image().required(),
        tools: z.array(z.string()),
        links: z.array(z.string().url()),
    })
});

// Register content collections 
export const collections = {
  'profile': profileCollection,
  'project': projectCollection,
};