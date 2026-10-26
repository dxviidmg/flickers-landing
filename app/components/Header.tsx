"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Quiénes somos", href: "#quienes-somos" },
  { label: "Próximos shows", href: "#shows" },
] as const;

// Subrayado con degradado: crece desde la izquierda al pasar el mouse y queda fijo en la sección activa.
const linkClass =
  "type-eyebrow relative block px-2 py-3 text-sm transition hover:brightness-125 md:py-2 " +
  "after:absolute after:bottom-1 after:left-2 after:h-0.5 after:w-8 after:origin-left after:scale-x-0 after:rounded after:bg-gradient-brand after:transition-transform after:duration-300 " +
  "md:after:right-2 md:after:w-auto hover:after:scale-x-100 data-[active=true]:after:scale-x-100 motion-reduce:after:transition-none";

const line =
  "absolute left-0 h-0.5 w-full rounded bg-current transition-all duration-300 motion-reduce:transition-none";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("inicio");
  const headerRef = useRef<HTMLElement>(null);

  // Transparente sobre el hero; al bajar se vuelve sólido. Siempre visible.
  // Es solo un atributo en el DOM, no estado de React.
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const update = () => {
      el.dataset.scrolled = String(window.scrollY > 24);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  // Sección activa: la que cruza la franja del centro de la pantalla.
  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const id of ids) {
      const section = document.getElementById(id);
      if (section) io.observe(section);
    }
    return () => io.disconnect();
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed inset-x-0 top-0 z-40 border-b border-transparent bg-gradient-to-b from-background/80 to-transparent pt-[env(safe-area-inset-top)] transition-[background-color,border-color,backdrop-filter] duration-500 motion-reduce:transition-none data-[scrolled=true]:border-foreground/10 data-[scrolled=true]:bg-background/80 data-[scrolled=true]:bg-none data-[scrolled=true]:backdrop-blur"
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
          {/* Tres líneas que se transforman en una X */}
          <span aria-hidden="true" className="relative block h-4 w-6">
            <span
              className={`${line} ${open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"}`}
            />
            <span
              className={`${line} top-1/2 -translate-y-1/2 ${open ? "scale-x-0 opacity-0" : ""}`}
            />
            <span
              className={`${line} ${open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"}`}
            />
          </span>
        </button>
        <nav
          id="menu-principal"
          aria-label="Principal"
          data-open={open}
          className="group absolute inset-x-0 top-full grid grid-rows-[0fr] transition-[grid-template-rows,visibility] duration-500 ease-out data-[open=true]:grid-rows-[1fr] motion-reduce:transition-none max-md:data-[open=false]:invisible md:static md:block"
        >
          <div className="min-h-0 overflow-hidden bg-background/95 px-4 backdrop-blur group-data-[open=true]:border-b group-data-[open=true]:border-foreground/10 md:overflow-visible md:border-0 md:bg-transparent md:p-0 md:backdrop-blur-none">
            <ul className="pb-3 md:flex md:gap-8 md:pb-0">
              {links.map((l, i) => (
                <li
                  key={l.label}
                  style={{ "--d": `${120 + i * 100}ms` } as CSSProperties}
                  className="nav-item max-md:-translate-y-2 max-md:opacity-0 max-md:transition max-md:duration-500 max-md:group-data-[open=true]:translate-y-0 max-md:group-data-[open=true]:opacity-100 max-md:group-data-[open=true]:[transition-delay:var(--d)] motion-reduce:transition-none"
                >
                  <a
                    href={l.href}
                    className={linkClass}
                    data-active={active === l.href.slice(1)}
                    aria-current={active === l.href.slice(1) ? "location" : undefined}
                    onClick={() => setOpen(false)}
                  >
                    <span className="text-gradient">{l.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
