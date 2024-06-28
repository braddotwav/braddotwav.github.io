import { z, defineCollection } from 'astro:content';

// Define the profile collection
const profileCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        avatar: image().required(),
        description: z.string(),
        toolset: z.array(z.string()),
        socials: z.array(z.string()),
        resumeLink: z.string().url().optional()
    }),
});

// Define the project collection
const projectCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        category: z.enum(['software', 'audio', 'other']),
        image: image().required(),
        createdWith: z.array(z.string()),
        links: z.array(z.string().url()),
    })
});

// Register content collections 
export const collections = {
  'profile': profileCollection,
  'project': projectCollection,
};