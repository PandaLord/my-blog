import { defineCollection, z } from "astro:content";


const blogCollection = defineCollection({
    schema: z.object({
        author: z.string(),
        date: z.string(),
        image: z.string(),
        title: z.string(),
        desc: z.string(),
    })
});

export const collections = {
    posts: blogCollection
}