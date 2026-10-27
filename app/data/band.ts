// Único módulo de datos del sitio: contacto, redes y shows.

// Número con código de país (52 = México; asumido por la lada 772).
export const whatsappNumber = "527721403616";
export const whatsappUrl = `https://wa.me/${whatsappNumber}`;

export const socials = {
  instagram: "https://instagram.com/flickersband",
  // Por ahora solo hay Instagram.
  // TODO: agregar Spotify, YouTube, etc. cuando existan.
} as const;

// Zona horaria de los shows (Centro de México, sin horario de verano).
export const showsUtcOffset = "-06:00";

export type Show = {
  date: string; // ISO yyyy-mm-dd
  time: string | null; // "HH:mm" 24 h; null = hora por definir
  venue: string | null; // lugar exacto; null = no se publica (ej. fiesta privada)
  municipality: string;
  event: string | null; // nombre del evento, si aplica
  flyer?: string; // ruta en /public (ej. "/flyers/x.webp")
};

export const shows: Show[] = [
  { date: "2025-07-17", time: "20:00", venue: "Vicke Concept House", municipality: "Actopan", event: "Jueves de escenario libre", flyer: "/flyers/2025-07-17-escenario-libre-vicke.webp" },
  { date: "2025-10-16", time: "17:30", venue: "Kiosco de Actopan", municipality: "Actopan", event: "Colecta Solidaria", flyer: "/flyers/2025-10-16-colecta-solidaria.webp" },
  { date: "2026-07-25", time: "16:00", venue: "Jardín Los Olivos", municipality: "Actopan", event: "Kermés de bandas a beneficio", flyer: "/flyers/2026-07-25-kermes-de-bandas.webp" },
  { date: "2025-07-11", time: "17:00", venue: "Michelandia, camino La Estancia y Libramiento Ixmiquilpan-Actopan", municipality: "Actopan", event: "333 La Mejor Banda", flyer: "/flyers/2025-07-11-333-michelandia.webp" },
  { date: "2025-11-22", time: "15:00", venue: "Kiosco del centro de Actopan", municipality: "Actopan", event: "Day Music Fest", flyer: "/flyers/2025-11-22-day-music-fest.webp" },
  { date: "2026-09-25", time: "18:00", venue: "Cancha pública de Cañada Aviación", municipality: "Actopan", event: "Kermés para Toño" },
  { date: "2026-11-21", time: "20:00", venue: null, municipality: "Actopan", event: "Fiesta privada" },
];

export type Member = {
  name: string;
  role: string;
  // Ruta en /public (ej. "/members/aris.jpg"). null = placeholder.
  // TODO: agregar las fotos de cada integrante.
  photo: string | null;
};

export const members: Member[] = [
  { name: "Aris", role: "Voz y teclado", photo: "/members/aris.webp" },
  { name: "David", role: "Guitarra", photo: "/members/david.webp" },
  { name: "Kelvin", role: "Bajo", photo: "/members/kelvin.webp" },
  { name: "Ramón", role: "Batería", photo: null },
];

export const about = [
  "Somos 4 amigos que nos gusta tocar. Hacemos punk rock, pop punk y rock pop desde Actopan, Hidalgo.",
  "FLICKERS nació en 2025 de las ganas de tocar juntos y armar una banda. Hoy tocamos covers y nos mueven bandas como Caifanes, Zoé, Los Concorde, DLD, PXNDX, División, Delux y Thermo, entre otras. Ya tuvimos la oportunidad de abrirle a 333 (antes Miró).",
];
