import Image from "next/image";
import { about, members } from "../data/band";

export default function About() {
  return (
    <section id="quienes-somos" className="mx-auto w-full max-w-3xl px-6 py-20">
      <h2 className="font-display text-5xl uppercase tracking-wide text-gradient sm:text-6xl">
        Quiénes somos
      </h2>
      <div className="mt-6 space-y-4 text-lg text-muted">
        {about.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
      <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {members.map((m) => (
          <li key={m.name}>
            <div className="relative aspect-[3/4] overflow-hidden rounded-md border border-brand/25 bg-foreground/10">
              {m.photo ? (
                <Image
                  src={m.photo}
                  alt={`${m.name}, ${m.role}`}
                  fill
                  sizes="(min-width: 640px) 160px, 45vw"
                  className="object-cover"
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
          </li>
        ))}
      </ul>
    </section>
  );
}
