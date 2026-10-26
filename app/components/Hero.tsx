import Image from "next/image";
import Countdown from "./Countdown";
import { members } from "../data/band";

// Fondo de 4 columnas: las fotos disponibles se repiten hasta llenarlas.
// Sin fotos, se muestran los integrantes como placeholder.
const withPhoto = members.filter((m) => m.photo);
const columns = withPhoto.length
  ? Array.from({ length: 4 }, (_, i) => withPhoto[i % withPhoto.length])
  : members;

export default function Hero() {
  return (
    <section id="inicio" className="relative isolate flex min-h-svh flex-col items-center justify-center overflow-hidden px-6 py-10 text-center">
      {/* Fondo: una columna por integrante */}
      <div className="absolute inset-0 -z-10 grid grid-cols-2 grid-rows-2 gap-0.5 bg-background lg:grid-cols-4 lg:grid-rows-1" aria-hidden="true">
        {columns.map((m, i) => (
          <div
            key={`${m.name}-${i}`}
            className="relative flex items-end justify-center bg-foreground/10 pb-3"
          >
            {m.photo ? (
              <Image
                src={m.photo}
                alt={`${m.name}, ${m.role}`}
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
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
      {/* Logo, textos y cuenta regresiva: un solo bloque centrado en vertical */}
      <h1>
        <Image
          src="/logo.webp"
          alt="FLICKERS"
          width={1600}
          height={682}
          sizes="(min-width: 640px) 32rem, 80vw"
          className="h-auto w-[80vw] max-w-lg"
          priority
        />
      </h1>
      <div className="-mt-2 flex w-full flex-col items-center gap-1">
        <p className="type-eyebrow text-legible text-sm text-accent sm:text-base">
          Punk rock · Pop punk · Rock pop
        </p>
        <p className="text-legible max-w-md text-lg text-foreground/90">
          Actopan, Hgo.
        </p>
        <Countdown />
        <a
          href="#shows"
          className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-gradient-brand px-8 py-3 font-semibold text-brand-contrast transition-opacity hover:opacity-90"
        >
          Próximos shows
        </a>
      </div>
    </section>
  );
}
