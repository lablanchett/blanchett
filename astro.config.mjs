// @ts-check
import { defineConfig } from 'astro/config';

// Las fechas de los planes se interpretan en hora de Barcelona.
process.env.TZ ||= 'Europe/Madrid';

// SITE_URL y BASE_PATH los pone solo el workflow de GitHub Pages.
// Con dominio propio, BASE_PATH queda vacío.
export default defineConfig({
  site: process.env.SITE_URL || undefined,
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'ignore',
});
