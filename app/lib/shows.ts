import { showsUtcOffset, type Show } from "../data/band";

// Título visible de un show: el nombre del evento, o el lugar si no tiene.
export const showTitle = (show: Show) => show.event ?? show.venue;

// Instante de inicio en ms. Sin hora definida, cuenta desde el inicio del día.
export const showStart = (show: Show) =>
  new Date(`${show.date}T${show.time ?? "00:00"}:00${showsUtcOffset}`).getTime();
