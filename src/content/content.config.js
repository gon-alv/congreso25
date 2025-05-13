import { defineCollection, z } from "astro:content";

const equipo = defineCollection({
  schema: z.object({
    nombre: z.string(),
    cargo: z.string(),
    foto: z.string().url(),
    correo: z.string(),
    reversed: z.boolean()
  })

})


export const collections = { equipo }