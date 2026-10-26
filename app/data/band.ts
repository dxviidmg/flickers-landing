// Único módulo de datos del sitio: contacto, redes y shows.

// Número con código de país (52 = México; asumido por la lada 772).
export const whatsappNumber = "527721403616";
export const whatsappUrl = `https://wa.me/${whatsappNumber}`;

export const socials = {
  instagram: "https://instagram.com/flickersband",
  // Por ahora solo hay Instagram.
  // TODO: agregar Spotify, YouTube, etc. cuando existan.
} as const;

export type Show = {
  date: string; // ISO yyyy-mm-dd
  time: string | null; // "HH:mm" 24 h; null = hora por definir
  venue: string;
  city: string;
  ticketsUrl: string | null;
};

export const shows: Show[] = [
  { date: "2026-09-25", time: null, venue: "Kermés para Toño", city: "Actopan", ticketsUrl: null },
  { date: "2026-10-27", time: null, venue: "La Arena Actopan", city: "Actopan", ticketsUrl: null },
  { date: "2026-11-21", time: "20:00", venue: "Fiesta privada", city: "Actopan", ticketsUrl: null },
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
