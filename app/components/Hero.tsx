import Image from "next/image";
import { InstagramIcon, WhatsAppIcon } from "./icons";
import { members, socials, whatsappUrl } from "../data/band";

// Fondo de 4 columnas: las fotos disponibles se repiten hasta llenarlas.
// Sin fotos, se muestran los integrantes como placeholder.
const withPhoto = members.filter((m) => m.photo);
const columns = withPhoto.length
  ? Array.from({ length: 4 }, (_, i) => withPhoto[i % withPhoto.length])
  : members;

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-svh flex-col items-center justify-center gap-6 overflow-hidden px-6 py-16 text-center">
      {/* Fondo: una columna por integrante */}
      <div className="absolute inset-0 -z-10 grid grid-cols-4" aria-hidden="true">
        {columns.map((m, i) => (
          <div
            key={`${m.name}-${i}`}
            className="relative flex items-end justify-center border-r border-background/60 bg-foreground/10 pb-3 last:border-r-0"
          >
            {m.photo ? (
              <Image
                src={m.photo}
                alt={`${m.name}, ${m.role}`}
                fill
                sizes="25vw"
                className="object-cover"
                priority
              />
            ) : (
              <span className="font-display text-4xl uppercase text-foreground/20 sm:text-7xl">
                {m.name[0]}
              </span>
            )}
          </div>
        ))}
        <div className="pointer-events-none absolute inset-0 bg-background/60" />
      </div>
      {/* TODO: reemplazar el texto por el logo cuando exista */}
      <h1 className="font-display text-7xl uppercase leading-none tracking-wide text-brand sm:text-9xl">
        Flickers
      </h1>
      <p className="text-sm font-medium uppercase tracking-widest text-accent sm:text-base">
        Punk rock · Pop punk · Rock pop
      </p>
      <p className="max-w-md text-lg text-muted">
        Somos 4 amigos que nos gusta tocar.
      </p>
      <div className="mt-4 flex w-full max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-8 py-3 font-semibold text-brand-contrast transition-opacity hover:opacity-90"
        >
          <WhatsAppIcon className="size-5" />
          Contrátanos
        </a>
        <a
          href={socials.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/30 px-8 py-3 font-semibold transition-colors hover:border-accent hover:text-accent"
        >
          <InstagramIcon className="size-5" />
          Instagram
        </a>
      </div>
    </section>
  );
}
