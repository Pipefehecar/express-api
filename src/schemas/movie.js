import {z} from 'zod'


export const Movie = z.object({
    title: z.string(),
    director: z.string(),
    year: z.number().min(1950).max(new Date().getFullYear()),
    coverUrl: z.string().url()

})