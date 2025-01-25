import { defineCollection, reference, z } from "astro:content";

import { glob, file } from 'astro/loaders';

const blog = defineCollection({
    loader: glob({pattern:"**/[^_]*.md", base: "/src/content/blog" }),
    schema: z.object({
        title: z.string(),
        date: z.date(),
        description: z.string(),
        author: z.string(),
        image: z.object({
            url: z.string().url(),
            alt: z.string()
        }),
        tags: z.array(z.enum(['programmation', 'life', 'thoughts', 'science', 'nature']))
    })
});
const portfolio = defineCollection({
    loader: glob({pattern:"**/[^_]*.md", base: "./src/content/portfolio/" }),
    schema: z.object({
        title: z.string(),
        start_date: z.date(),
        end_date: z.date(),
        author: z.string(),
        description: z.string(),
        category: z.enum(['Programmation', 'Art']),
        context: z.enum(['Personal', 'Universitary', 'Professional']),
        status: z.enum(['Paused', 'In works', 'Finished'])
    })
});
const gallery = defineCollection({
    loader: glob({pattern: ["**/*.png", "**/*.jpg",'**/*.jpeg'], base: "./src/content/gallery" }),
    schema: null
});

export const collections = {blog, portfolio, gallery}