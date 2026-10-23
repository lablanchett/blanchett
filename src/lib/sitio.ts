import { z } from 'astro:content';
import datos from '../data/sitio.json';

// src/data/sitio.json lo edita el equipo desde Pages CMS o a mano: validamos aquí
// porque el CMS no protege ediciones directas al archivo.
const esquema = z.object({
  lema: z.string().trim().default(''),
  lema_ca: z.string().trim().default(''),
  lema_en: z.string().trim().default(''),
  tituloSeo: z.string().trim().default(''),
  tituloSeo_ca: z.string().trim().default(''),
  tituloSeo_en: z.string().trim().default(''),
  explicacion: z.string().trim().default(''),
  explicacion_ca: z.string().trim().default(''),
  explicacion_en: z.string().trim().default(''),
  quienesFrase: z.string().trim().default(''),
  quienesFrase_ca: z.string().trim().default(''),
  quienesFrase_en: z.string().trim().default(''),
  quienesTexto: z.string().trim().default(''),
  quienesTexto_ca: z.string().trim().default(''),
  quienesTexto_en: z.string().trim().default(''),
  instagram: z
    .string()
    .trim()
    .refine((v) => v === '' || /^https:\/\/([\w-]+\.)*instagram\.com\//.test(v), {
      message: 'El enlace de Instagram debe empezar por https://instagram.com/ o https://www.instagram.com/',
    })
    .default(''),
  email: z
    .string()
    .trim()
    .refine((v) => v === '' || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), { message: 'Correo no válido' })
    .default(''),
  feedInstagram: z
    .string()
    .trim()
    .refine((v) => v === '' || /^https:\/\//.test(v), { message: 'El feed debe ser un enlace https://' })
    .default(''),
  fotosInstagram: z.number().int().min(0).max(12).default(0),
});

export default esquema.parse(datos);
