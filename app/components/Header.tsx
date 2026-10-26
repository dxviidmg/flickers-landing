"use client";

import { useState } from "react";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Quiénes somos", href: "#quienes-somos" },
  { label: "Próximos shows", href: "#shows" },
] as const;

const linkClass =
  "type-eyebrow block px-2 py-3 text-sm transition hover:brightness-125 md:py-2";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed inset-x-0 top-0 z-40 border-b border-foreground/10 bg-background/70 backdrop-blur"
      onKeyDown={(e) => e.key === "Escape" && setOpen(false)}
    >
      <div className="mx-auto flex max-w-3xl items-center justify-end px-4 md:justify-center">
        <button
          type="button"
          className="flex size-11 items-center justify-center md:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="menu-principal"
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
            className="size-6"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
        <nav
          id="menu-principal"
          aria-label="Principal"
          className={`${
            open ? "block" : "hidden"
          } absolute inset-x-0 top-full border-b border-foreground/10 bg-background/95 px-4 pb-3 backdrop-blur md:static md:block md:border-0 md:bg-transparent md:p-0`}
        >
          <ul className="md:flex md:gap-8">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className={linkClass}
                  onClick={() => setOpen(false)}
                >
                  <span className="text-gradient">{l.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
