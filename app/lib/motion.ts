import type { CSSProperties } from "react";

// Retraso de animación vía la variable --d, que leen .anim-*, [data-reveal] y .nav-item.
export const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;
