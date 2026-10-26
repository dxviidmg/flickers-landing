"use client";

import { useSyncExternalStore } from "react";
import { shows, showsUtcOffset } from "../data/band";

// Sin hora definida, la cuenta regresiva apunta al inicio del día.
const startsAt = (s: (typeof shows)[number]) =>
  new Date(`${s.date}T${s.time ?? "00:00"}:00${showsUtcOffset}`).getTime();

function nextShow(now: number) {
  return shows
    .map((show) => ({ show, at: startsAt(show) }))
    .filter(({ at }) => at > now)
    .sort((a, b) => a.at - b.at)[0];
}

const pad = (n: number) => String(n).padStart(2, "0");

const subscribe = (onTick: () => void) => {
  const id = setInterval(onTick, 1000);
  return () => clearInterval(id);
};
// Estable dentro de cada segundo, como exige useSyncExternalStore.
const getNow = () => Math.floor(Date.now() / 1000) * 1000;

export default function Countdown() {
  // null en el servidor: evita diferencias de hidratación.
  const now = useSyncExternalStore(subscribe, getNow, () => null);

  // Reserva el alto antes de montar para que el bloque centrado no salte.
  if (now === null) return <div className="mt-6 h-32" aria-hidden="true" />;
  const next = nextShow(now);
  if (!next) return null;

  const total = Math.floor((next.at - now) / 1000);
  const units = [
    { label: "días", value: Math.floor(total / 86400) },
    { label: "horas", value: Math.floor((total % 86400) / 3600) },
    { label: "min", value: Math.floor((total % 3600) / 60) },
    { label: "seg", value: total % 60 },
  ];

  return (
    <div className="mt-6 flex h-32 flex-col items-center gap-3">
      <div className="flex max-w-full flex-col items-center gap-1 text-center">
        <p className="type-eyebrow text-legible text-xs text-foreground/90">
          Próximo show
        </p>
        <p className="text-legible max-w-[85vw] truncate text-base font-semibold">
          {next.show.event ?? next.show.venue}
        </p>
      </div>
      <div
        role="timer"
        aria-label="Cuenta regresiva al próximo show"
        className="flex gap-3"
      >
        {units.map((u) => (
          <div
            key={u.label}
            className="flex w-16 flex-col items-center rounded-lg border border-brand/30 bg-background/60 py-2 backdrop-blur sm:w-20"
          >
            <span className="font-display text-3xl tabular-nums text-gradient sm:text-4xl">
              {pad(u.value)}
            </span>
            <span className="type-eyebrow text-[0.7rem] text-muted">
              {u.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
