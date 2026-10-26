<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Proyecto

Landing page de **FLICKERS**, banda de punk rock / pop punk / rock pop formada en 2025.

Integrantes:
- Aris: voz y teclado
- David: guitarra
- Kelvin: bajo
- Ramón: batería

Bio base: "Somos 4 amigos que nos gusta tocar." Mantener ese espíritu: cercano y directo.

## Stack

- Next.js 16.4.2 (App Router, carpeta `app/` en la raíz, sin `src/`)
- React 19.3.0, TypeScript
- Tailwind CSS 4
- npm (hay `package-lock.json`; no usar yarn/pnpm/bun)

Comandos: `npm run dev`, `npm run build`, `npm run lint`.

## Reglas

- Idioma del sitio y del contenido: español únicamente. No añadir i18n.
- Landing de una sola página, mobile first.
- Secciones previstas: hero, música, videos, shows/fechas, galería, merch, booking/contacto.
- Booking y contacto: enlace de WhatsApp (`https://wa.me/<numero>`). Sin formulario ni backend por ahora.
- El número de WhatsApp, los links de redes y plataformas (Spotify, YouTube, Instagram, etc.) y las fechas de shows se definen en un solo módulo de datos (por ejemplo `app/data/`), no repartidos en los componentes.
- No inventar datos de la banda (fechas, canciones, links, biografía). Si falta un dato, dejar un `TODO` visible o una sección oculta.
- Aún no hay diseño, logo, paleta ni fotos. No asumir una identidad visual definitiva: usar tokens de Tailwind centralizados (colores y fuentes) para que cambiarlos sea fácil. Estética tentativa: punk/pop punk, energética.
- Rama de trabajo: `develop`; `main` es la principal. Commits cortos y descriptivos.

## Pendiente de definir

- Número de WhatsApp de booking
- Logo, paleta, tipografías, fotos
- Links de redes y plataformas
- Fechas de shows (estáticas por ahora)
- Dominio y hosting
