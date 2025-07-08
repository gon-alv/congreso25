// src/content/config.ts
import { defineCollection, z } from "astro:content";

// Colección: equipo
const equipo = defineCollection({
  schema: z.object({
    nombre: z.string(),
    cargo: z.string(),
    foto: z.string(),
    correo: z.string(),
    reversed: z.boolean()
  })
});

// Colección: hoteles
const hoteles = defineCollection({
  type: 'data', // importante si usas YAML
  schema: z.object({
    nombre: z.string(),
    direccion: z.string(),
    telefono: z.string(),
    email: z.string().email(),
    web: z.string().url().optional(),
    imagen: z.string(),
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
