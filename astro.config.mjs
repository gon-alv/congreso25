// @ts-check
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    plugins: [
        tailwindcss(),
    ],
});
