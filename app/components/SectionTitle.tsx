import type { ReactNode } from "react";
import Reveal from "./Reveal";

// Título de sección: Anton con el degradado del logo, aparece al hacer scroll.
export default function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <Reveal>
      <h2 className="font-display text-5xl uppercase tracking-wide text-gradient sm:text-6xl">
        {children}
      </h2>
    </Reveal>
  );
}
