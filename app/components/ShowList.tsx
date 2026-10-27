import type { Show } from "../data/band";
import { showTitle } from "../lib/shows";
import FlyerModal from "./FlyerModal";
import Reveal from "./Reveal";

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

export default function ShowList({ items, past = false }: { items: Show[]; past?: boolean }) {
  return (
    <ul className="divide-y divide-foreground/15 border-y border-foreground/15">
      {items.map((show, index) => {
        const { day, month, year } = formatDate(show.date);
        const detail = show.time
          ? `${show.time} h`
          : past
            ? null
            : "Hora por definir";
        return (
          <li key={`${show.date}-${showTitle(show)}`}>
            <Reveal
              delay={Math.min(index, 4) * 90}
              className={`flex items-center gap-3 py-5 transition-colors sm:gap-5 hover:bg-foreground/5 ${past ? "opacity-75" : ""}`}
            >
            <time
              dateTime={show.date}
              className="flex w-16 shrink-0 flex-col items-center text-center leading-none sm:w-20"
            >
              <span
                className={`font-display text-4xl ${past ? "text-foreground" : "text-accent"}`}
              >
                {day}
              </span>
              <span className="type-eyebrow mt-1 whitespace-nowrap text-[0.7rem] text-muted">
                {month} {year}
              </span>
            </time>
            <div className="min-w-0 flex-1">
              <p className="text-lg font-semibold">
                {showTitle(show)}
              </p>
              <p className="text-sm text-muted">
                {[show.event ? show.venue : null, show.municipality, detail]
                  .filter(Boolean)
                  .join(" · ")}
              </p>
            </div>
            {show.flyer && (
              <FlyerModal src={show.flyer} label={showTitle(show) ?? ""} />
            )}
            </Reveal>
          </li>
        );
      })}
    </ul>
  );
}
