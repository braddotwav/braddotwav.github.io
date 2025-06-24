import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const profiles = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/data/profiles' }),
    schema: ({ image }) => z.object({
        name: z.string(),
        avatar: image(),
        hero: image(),
        description: z.string(),
        tools: z.array(z.string()),
        socials: z.array(z.string())
    })
})

const projects = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/data/projects' }),
    schema: ({ image }) => z.object({
        name: z.string(),
        description: z.string(),
        date: z.date(),
        category: z.enum(['software', 'audio']),
        image: image(),
        tools: z.array(z.string()),
        links: z.array(z.string().url())
    })
});

export const collections = { profiles, projects };