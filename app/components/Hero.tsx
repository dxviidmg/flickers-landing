import Image from "next/image";
import Countdown from "./Countdown";
import { members } from "../data/band";
import { delay } from "../lib/motion";

// Fondo de 4 columnas: las fotos disponibles se repiten hasta llenarlas.
// Sin fotos, se muestran los integrantes como placeholder.
const withPhoto = members.filter((m) => m.photo);
const columns = withPhoto.length
  ? Array.from({ length: 4 }, (_, i) => withPhoto[i % withPhoto.length])
  : members;

export default function Hero() {
  return (
    <section id="inicio" className="relative isolate flex min-h-svh flex-col items-center justify-center overflow-hidden px-6 pb-8 pt-20 text-center md:pt-28">
      {/* Fondo: una columna por integrante */}
      <div className="hero-parallax absolute inset-0 -z-10 grid grid-cols-2 grid-rows-2 gap-0.5 bg-background lg:grid-cols-4 lg:grid-rows-1" aria-hidden="true">
        {columns.map((m, i) => (
          <div
            key={`${m.name}-${i}`}
            className="anim-col relative flex items-end justify-center overflow-hidden bg-foreground/10 pb-3"
            style={delay(i * 140)}
          >
            {m.photo ? (
              <Image
                src={m.photo}
                alt={`${m.name}, ${m.role}`}
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="anim-kenburns object-cover"
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
        <div className="hero-vignette pointer-events-none absolute inset-0" />
        <div className="hero-grain pointer-events-none absolute inset-0" />
      </div>
      {/* Logo, textos y cuenta regresiva: un solo bloque centrado en vertical */}
      <h1 className="[zoom:0.9]">
        <Image
          src="/logo.webp"
          alt="FLICKERS"
          width={1600}
          height={682}
          sizes="(min-width: 640px) 32rem, 80vw"
          className="anim-logo h-auto w-[80vw] max-w-[min(32rem,62svh)]"
          priority
        />
      </h1>
      <div className="[zoom:0.9] mt-2 flex w-full flex-col items-center gap-1 sm:mt-4">
        <p className="anim-rise type-eyebrow text-legible text-xs text-accent max-[379px]:tracking-[0.1em] min-[380px]:text-sm sm:text-base" style={delay(1500)}>
          Punk rock · Pop punk · Rock pop
        </p>
        <p className="anim-rise text-legible max-w-md text-lg text-foreground/90" style={delay(1700)}>
          Actopan, Hgo.
        </p>
        <div className="anim-rise mt-1 sm:mt-2" style={delay(1900)}>
          <Countdown />
        </div>
        <a
          href="#shows"
          style={delay(2100)}
          className="anim-rise mt-2 inline-flex sm:mt-2.5 min-h-11 items-center justify-center rounded-full bg-gradient-brand px-8 py-3 font-semibold text-brand-contrast transition-opacity hover:opacity-90"
        >
          Próximos shows
        </a>
      </div>
    </section>
  );
}
