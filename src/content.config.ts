import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Pages CMS puede guardar campos vacíos como "" o null: los tratamos como "sin valor".
const texto = z.preprocess(
  (v) => (v === null || v === undefined ? '' : String(v).trim()),
  z.string()
);

// Las fechas pueden llegar como texto ("2026-11-07") o como fecha de YAML.
const fecha = z.preprocess((v) => {
  if (v instanceof Date) return v.toISOString().slice(0, 10);
  if (v === null || v === undefined) return '';
  return String(v).trim().slice(0, 10);
}, z.string());

// Enlaces editables: la validación del CMS (.pages.yml) no protege ediciones hechas
// directamente en los archivos, así que la repetimos aquí.
const url = texto.refine((v) => v === '' || /^https?:\/\//.test(v), {
  message: 'Debe ser un enlace que empiece por http:// o https://',
});

const planes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/planes' }),
  schema: z.object({
    nombre: texto,
    publicado: z.boolean().default(true),
    tipo: texto.default(''),
    con: texto.default(''),
    descripcion: texto.default(''),
    fecha: fecha.default(''),
    hora: texto.default(''),
    fin: texto.default(''),
    lugar: texto.default(''),
    direccion: texto.default(''),
    entradas: url.default(''),
    accion: z.enum(['entradas', 'apuntarme']).default('entradas'),
    cartel: texto.default(''),
    video: texto.default(''),
  }),
});

export const collections = { planes };
