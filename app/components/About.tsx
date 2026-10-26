import Image from "next/image";
import Reveal from "./Reveal";
import { about, members } from "../data/band";

export default function About() {
  return (
    <section id="quienes-somos" className="mx-auto scroll-mt-12 w-full max-w-3xl px-6 py-20">
      <Reveal>
        <h2 className="font-display text-5xl uppercase tracking-wide text-gradient sm:text-6xl">
          Quiénes somos
        </h2>
      </Reveal>
      <div className="mt-6 space-y-4 text-lg text-muted">
        {about.map((p, i) => (
          <Reveal key={p} delay={i * 120}>
            <p>{p}</p>
          </Reveal>
        ))}
      </div>
      <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {members.map((m, i) => (
          <li key={m.name}>
            <Reveal delay={i * 110} className="group">
            <div className="relative aspect-[3/4] overflow-hidden rounded-md border border-brand/25 bg-foreground/10 transition-colors duration-500 group-hover:border-brand/70">
              {m.photo ? (
                <Image
                  src={m.photo}
                  alt={`${m.name}, ${m.role}`}
                  fill
                  sizes="(min-width: 640px) 160px, 45vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              ) : (
                // TODO: foto de este integrante
                <span
                  aria-hidden="true"
                  className="absolute inset-0 flex items-center justify-center font-display text-6xl uppercase text-foreground/20"
                >
                  {m.name[0]}
                </span>
              )}
            </div>
            <p className="mt-3 font-display text-2xl uppercase tracking-wide">
              {m.name}
            </p>
            <p className="text-sm text-muted">{m.role}</p>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
