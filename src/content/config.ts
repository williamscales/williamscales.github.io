import {z, defineCollection} from 'astro:content';

const cardsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string()
    })
});

export const collections = {
    'cards': cardsCollection,
};