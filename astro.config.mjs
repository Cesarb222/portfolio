// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    output: 'static', // ya soporta endpoints, hybrid ya no existe
    site: 'https://github.com/Cesarb222',
    base: '/portfolio'
});