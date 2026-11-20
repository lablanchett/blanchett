import { getCollection, type CollectionEntry } from 'astro:content';
import { z } from 'astro/zod';

export interface Album {
  id: string;
  titulo: string;
  evento: string;
  fecha: string;
  tipo: string;
  orden?: number | null;
  portada: string;
  fotos: string[];
}

const texto = z.string().trim().nullish().transform((valor) => valor ?? '');
function fotoLocal(valor: string): string {
  if (!valor.startsWith('/media/') || /[<>"\\?#]/.test(valor)) return '';
  return new URL(valor, 'https://lablanchett.com').pathname.startsWith('/media/') ? valor : '';
}
const esquema = z.object({
  titulo: texto,
  evento: texto,
  publicado: z.boolean().default(false),
  orden: z.number().int().positive().nullish().catch(null),
  portada: texto.transform(fotoLocal),
  fotos: z.array(texto).nullish().transform((fotos) => fotos ?? []),
});
const archivos = import.meta.glob('../content/albumes/*.json', { eager: true, import: 'default' });
const entradas = Object.entries(archivos).map(([archivo, contenido]) => {
  const id = archivo.slice('../content/albumes/'.length, -'.json'.length);
  const data = esquema.parse(contenido);
  const fotos = data.fotos.map(fotoLocal).filter(Boolean);
  const descartadas = data.fotos.length - fotos.length;
  if (descartadas) {
    console.warn(`[Álbumes] ${id}.json: se omitieron fotos con rutas inválidas (${descartadas} de ${data.fotos.length}). Las rutas deben empezar por /media/.`);
  }
  if (data.publicado && !fotos.length) {
    console.warn(`[Álbumes] ${id}.json: el álbum no saldrá en la galería porque no tiene fotos con rutas válidas.`);
  }
  return { id, data: { ...data, fotos } };
});

export function archivoDelPlan(plan: CollectionEntry<'planes'>): string {
  return plan.filePath?.replaceAll('\\', '/') ?? `src/content/planes/${plan.id}.md`;
}

export async function obtenerAlbumes(): Promise<Album[]> {
  const planes = await getCollection('planes');
  const eventos = new Map(planes.map((plan) => [archivoDelPlan(plan), plan.data]));
  return entradas
    .filter(({ data }) => data.publicado && data.titulo && data.fotos.length)
    .map(({ id, data }) => ({
      ...data,
      id,
      fecha: eventos.get(data.evento)?.fecha ?? '',
      tipo: eventos.get(data.evento)?.tipo ?? '',
      portada: data.portada || data.fotos[0],
    }))
    .sort((a, b) => b.fecha.localeCompare(a.fecha) || a.titulo.localeCompare(b.titulo));
}
