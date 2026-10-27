import { cacheLife } from "next/cache";
import { shows } from "../data/band";
import SectionTitle from "./SectionTitle";
import ShowList from "./ShowList";
import ShowTabs from "./ShowTabs";

// Cacheado por horas: "hoy" se recalcula sin volver a desplegar.
export default async function Shows() {
  "use cache";
  cacheLife("hours");

  if (shows.length === 0) return null;

  const today = new Date().toISOString().slice(0, 10);
  const upcoming = shows
    .filter((s) => s.date >= today)
    .sort((a, b) => a.date.localeCompare(b.date));
  const past = shows
    .filter((s) => s.date < today)
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <section id="shows" className="mx-auto scroll-mt-12 min-h-svh w-full max-w-3xl px-6 py-20">
      <SectionTitle>Shows</SectionTitle>
      <ShowTabs
        upcomingCount={upcoming.length}
        pastCount={past.length}
        upcoming={
          upcoming.length > 0 ? (
            <ShowList items={upcoming} />
          ) : (
            <p className="text-muted">Sin fechas próximas por ahora.</p>
          )
        }
        past={
          past.length > 0 ? (
            <ShowList items={past} past />
          ) : (
            <p className="text-muted">Aún no hay shows pasados.</p>
          )
        }
      />
    </section>
  );
}
