import type { CollectionEntry } from 'astro:content';
import { t, type Locale } from './i18n';

export type Plan = CollectionEntry<'planes'>['data'] & {
  id: string;
  inicio: Date | null;
  final: Date | null;
};

const ZONA = 'Europe/Madrid';
const formatosDia: Partial<Record<Locale, Intl.DateTimeFormat>> = {};
const fmtDia = (locale: Locale) =>
  formatosDia[locale] ??= new Intl.DateTimeFormat(locale, { weekday: 'short', day: 'numeric', month: 'short', timeZone: ZONA });
const hora = (h: string) => /^([01]\d|2[0-3]):[0-5]\d$/.test(h);

/** Día siguiente a una fecha ISO (yyyy-mm-dd), en calendario, sin tocar la hora. */
function diaSiguiente(fechaISO: string): string {
  const [anio, mes, dia] = fechaISO.split('-').map(Number);
  return new Date(Date.UTC(anio, mes - 1, dia + 1)).toISOString().slice(0, 10);
}

/** Calcula inicio y final de cada plan (en hora de Barcelona). */
export function prepararPlanes(entradas: CollectionEntry<'planes'>[], locale: Locale = 'es', ahora = new Date()): Plan[] {
  const planes: Plan[] = entradas
    .filter((e) => e.data.publicado && e.data.nombre)
    .map((e) => {
      const d = e.data;
      if (!/^\d{4}-\d{2}-\d{2}$/.test(d.fecha)) return { ...d, id: e.id, inicio: null, final: null };

      const inicio = new Date(`${d.fecha}T${hora(d.hora) ? d.hora : '12:00'}`);
      if (isNaN(inicio.getTime())) return { ...d, id: e.id, inicio: null, final: null };

      let final: Date;
      if (hora(d.hora) && hora(d.fin)) {
        final = new Date(`${d.fecha}T${d.fin}`);
        // Si cierra de madrugada, el día siguiente puede tener una hora menos o una hora más (cambio de hora).
        if (final <= inicio) final = new Date(`${diaSiguiente(d.fecha)}T${d.fin}`);
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
  const sinFecha = planes.filter((p) => !p.inicio).sort((a, b) => a.nombre.localeCompare(b.nombre, locale));
  return [...conFecha, ...sinFecha];
}

export function dia(p: Plan, locale: Locale = 'es'): string {
  if (!p.inicio) return t(locale).proximamente;
  const texto = fmtDia(locale).format(p.inicio).replace(/\./g, '');
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}

export function horario(p: Plan, locale: Locale = 'es'): string {
  if (!hora(p.hora)) return '';
  return hora(p.fin) ? t(locale).deA(p.hora, p.fin) : t(locale).desdeLas(p.hora);
}

export function mapa(p: Plan): string {
  const direccion = p.direccion.trim();
  try {
    const enlace = new URL(direccion);
    if (enlace.protocol === 'https:' || enlace.protocol === 'http:') return enlace.href;
  } catch {
    // Una dirección escrita se convierte en una búsqueda de Google Maps.
  }
  const q = [p.lugar, p.direccion].filter(Boolean).join(', ');
  return 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(q);
}

/** Añade la ruta base (por ejemplo /blanchett) a rutas como /media/foto.jpg. */
export function ruta(p: string): string {
  if (!p || /^https?:\/\//.test(p)) return p;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return base + (p.startsWith('/') ? p : '/' + p);
}
