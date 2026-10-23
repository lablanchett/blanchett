import type { CollectionEntry } from 'astro:content';

export type Plan = CollectionEntry<'planes'>['data'] & {
  id: string;
  inicio: Date | null;
  final: Date | null;
};

const ZONA = 'Europe/Madrid';
const fmtDia = new Intl.DateTimeFormat('es', { weekday: 'short', day: 'numeric', month: 'short', timeZone: ZONA });
const hora = (h: string) => /^\d{2}:\d{2}$/.test(h);

/** Calcula inicio y final de cada plan (en hora de Barcelona). */
export function prepararPlanes(entradas: CollectionEntry<'planes'>[], ahora = new Date()): Plan[] {
  const planes: Plan[] = entradas
    .filter((e) => e.data.publicado && e.data.nombre)
    .map((e) => {
      const d = e.data;
      if (!/^\d{4}-\d{2}-\d{2}$/.test(d.fecha)) return { ...d, id: e.id, inicio: null, final: null };

      const inicio = new Date(`${d.fecha}T${hora(d.hora) ? d.hora : '12:00'}`);
      let final: Date;
      if (hora(d.hora) && hora(d.fin)) {
        final = new Date(`${d.fecha}T${d.fin}`);
        if (final <= inicio) final = new Date(final.getTime() + 24 * 3600e3); // cierra de madrugada
      } else if (hora(d.hora)) {
        final = new Date(inicio.getTime() + 6 * 3600e3);
      } else {
        final = new Date(`${d.fecha}T23:59`);
      }
      return { ...d, id: e.id, inicio, final };
    });

  const conFecha = planes
    .filter((p) => p.inicio && p.final && p.final > ahora)
    .sort((a, b) => a.inicio!.getTime() - b.inicio!.getTime());
  const sinFecha = planes.filter((p) => !p.inicio).sort((a, b) => a.nombre.localeCompare(b.nombre, 'es'));
  return [...conFecha, ...sinFecha];
}

export function dia(p: Plan): string {
  if (!p.inicio) return 'Próximamente';
  const t = fmtDia.format(p.inicio).replace(/\./g, '');
  return t.charAt(0).toUpperCase() + t.slice(1);
}

export function horario(p: Plan): string {
  if (!hora(p.hora)) return '';
  return hora(p.fin) ? `de ${p.hora} a ${p.fin}` : `desde las ${p.hora}`;
}

export function mapa(p: Plan): string {
  const q = [p.lugar, p.direccion].filter(Boolean).join(', ');
  return 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(q);
}

/** Añade la ruta base (por ejemplo /blanchett) a rutas como /media/foto.jpg. */
export function ruta(p: string): string {
  if (!p || /^https?:\/\//.test(p)) return p;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return base + (p.startsWith('/') ? p : '/' + p);
}
