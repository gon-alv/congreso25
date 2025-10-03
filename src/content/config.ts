import { defineCollection, z } from "astro:content";

const equipo = defineCollection({
  schema: z.object({
    nombre: z.string(),
    cargo: z.string(),
    foto: z.string(),
    email: z.string()
  })
});

const hoteles = defineCollection({
  type: 'data',
  schema: z.object({
    nombre: z.string(),
    direccion: z.string(),
    telefono: z.string(),
    email: z.string().email().optional(),
    web: z.string().url().optional(),
    imagen: z.string(),
    ruta: z.string().optional(),
    redes: z.object({
      facebook: z.string().url().optional(),
      instagram: z.string().url().optional(),
      twitter: z.string().url().optional()
    }).optional()
  })
});

export const collections = {
  equipo,
  hoteles
};
