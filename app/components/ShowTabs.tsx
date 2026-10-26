"use client";

import { useState, type ReactNode } from "react";

type Props = {
  upcoming: ReactNode;
  past: ReactNode;
  upcomingCount: number;
  pastCount: number;
};

export default function ShowTabs({ upcoming, past, upcomingCount, pastCount }: Props) {
  // Si no hay próximos, abrir directo en pasados.
  const [tab, setTab] = useState<"upcoming" | "past">(
    upcomingCount === 0 && pastCount > 0 ? "past" : "upcoming",
  );

  const tabs = [
    { id: "upcoming", label: "Próximos", count: upcomingCount },
    { id: "past", label: "Pasados", count: pastCount },
  ] as const;

  return (
    <>
      <div role="tablist" aria-label="Shows" className="mt-10 flex gap-2">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            id={`shows-tab-${t.id}`}
            aria-selected={tab === t.id}
            aria-controls={`shows-panel-${t.id}`}
            onClick={() => setTab(t.id)}
            className={`min-h-11 rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
              tab === t.id
                ? "bg-gradient-brand text-brand-contrast"
                : "border border-foreground/30 text-muted hover:border-accent hover:text-accent"
            }`}
          >
            {t.label} ({t.count})
          </button>
        ))}
      </div>
      <div
        role="tabpanel"
        id="shows-panel-upcoming"
        aria-labelledby="shows-tab-upcoming"
        hidden={tab !== "upcoming"}
        className="mt-6"
      >
        {upcoming}
      </div>
      <div
        role="tabpanel"
        id="shows-panel-past"
        aria-labelledby="shows-tab-past"
        hidden={tab !== "past"}
        className="mt-6"
      >
        {past}
      </div>
    </>
  );
}
