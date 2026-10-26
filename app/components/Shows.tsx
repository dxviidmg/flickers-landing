import { cacheLife } from "next/cache";
import { shows, type Show } from "../data/band";
import FlyerModal from "./FlyerModal";
import ShowTabs from "./ShowTabs";

// Fecha fija en UTC para que servidor y cliente rendericen igual.
function formatDate(iso: string) {
  const d = new Date(`${iso}T00:00:00Z`);
  const parts = new Intl.DateTimeFormat("es-MX", {
    day: "numeric",
    month: "short",
    timeZone: "UTC",
  }).formatToParts(d);
  return {
    day: parts.find((p) => p.type === "day")?.value ?? "",
    month: (parts.find((p) => p.type === "month")?.value ?? "").replace(".", ""),
    year: String(d.getUTCFullYear()),
  };
}

function ShowList({ items, past = false }: { items: Show[]; past?: boolean }) {
  return (
    <ul className="divide-y divide-foreground/15 border-y border-foreground/15">
      {items.map((show) => {
        const { day, month, year } = formatDate(show.date);
        const detail = show.time
          ? `${show.time} h`
          : past
            ? null
            : "Hora por definir";
        return (
          <li
            key={`${show.date}-${show.event ?? show.venue}`}
            className={`flex items-center gap-5 py-5 ${past ? "opacity-60" : ""}`}
          >
            <time
              dateTime={show.date}
              className="flex w-20 shrink-0 flex-col items-center text-center leading-none"
            >
              <span
                className={`font-display text-4xl ${past ? "text-foreground" : "text-accent"}`}
              >
                {day}
              </span>
              <span className="mt-1 whitespace-nowrap text-xs font-medium uppercase tracking-wider text-muted">
                {month} {year}
              </span>
            </time>
            <div className="min-w-0 flex-1">
              <p className="text-lg font-semibold">
                {show.event ?? show.venue}
              </p>
              <p className="text-sm text-muted">
                {[show.event ? show.venue : null, show.municipality, detail]
                  .filter(Boolean)
                  .join(" · ")}
              </p>
            </div>
            {show.flyer && (
              <FlyerModal src={show.flyer} label={show.event ?? show.venue ?? ""} />
            )}
          </li>
        );
      })}
    </ul>
  );
}

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
    <section id="shows" className="mx-auto w-full max-w-3xl px-6 py-20">
      <h2 className="font-display text-5xl uppercase tracking-wide text-brand sm:text-6xl">
        Shows
      </h2>
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
