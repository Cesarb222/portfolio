// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    output: 'static', // ya soporta endpoints, hybrid ya no existe
     // Reemplaza con tu dominio de GitHub Pages
  site: 'https://github.io', 
  
  // IMPORTANTE: Pon el nombre exacto de tu repositorio con barras diagonales
  base: '/portfolio', 
});
