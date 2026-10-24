# La Blanchett

Web de La Blanchett, hecha con [Astro](https://astro.build) y editable con [Pages CMS](https://pagescms.org).

## Para editar contenido (sin código)

Entra en **https://app.pagescms.org**, elige este repositorio y edita **Planes** o **Datos de la web**. Al guardar, la web se actualiza sola en 1–2 minutos.

## Cómo está organizado

| Qué | Dónde |
| --- | --- |
| Planes (uno por archivo) | `src/content/planes/*.md` |
| Lema, Instagram, correo, feed | `src/data/sitio.json` |
| Carteles y vídeos subidos | `public/media/` |
| Logos y favicon | `public/logos/`, `public/favicon.png` |
| Diseño de la página | `src/pages/index.astro`, `src/estilos.css` |
| Configuración del editor | `.pages.yml` |
| Publicación automática | `.github/workflows/publicar.yml` |
| Página de artistas y formulario Tally | `src/components/Artistas.astro` |
| Navegación y pie compartidos | `src/components/Navegacion.astro`, `src/components/Pie.astro` |

## Propuestas artísticas

El enlace «¿Hacés arte?» dentro de «Nosotras» abre `/artistas/` (también `/ca/artistas/` y `/en/artistas/`).
La página integra https://tally.so/r/jeaVy1 y ofrece un enlace directo como alternativa.
Las respuestas, las preguntas, el aviso de privacidad y el diseño interno se gestionan en Tally; no se guardan en este repositorio.
La página exterior está traducida, pero el formulario actual está en español en los tres idiomas.
El script oficial de Tally ajusta la altura del formulario; el iframe también carga sin JavaScript.

## Publicación

GitHub Actions construye y publica la web en GitHub Pages:

- cada vez que hay un cambio en `main`,
- todos los días a las 05:00 UTC, para que los planes pasados desaparezcan solos,
- a mano, desde la pestaña **Actions → Publicar la web → Run workflow**.

En **Settings → Pages**, la opción **Source** tiene que estar en **GitHub Actions**.

> GitHub pausa las tareas programadas de los repositorios sin actividad durante 60 días. Si eso pasa, aparece un aviso en la pestaña Actions para reactivarlas.

## Trabajar en local

```bash
npm install
npm run dev
```
