"use client";

import Image from "next/image";
import { useRef } from "react";

type Props = { src: string; label: string };

export default function FlyerModal({ src, label }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        type="button"
        onClick={() => dialogRef.current?.showModal()}
        aria-label={`Ampliar flyer: ${label}`}
        className="shrink-0 cursor-zoom-in overflow-hidden rounded-md border border-foreground/20 transition-colors hover:border-accent"
      >
        <Image
          src={src}
          alt={`Flyer de ${label}`}
          width={912}
          height={1280}
          sizes="64px"
          className="h-24 w-auto"
        />
      </button>
      <dialog
        ref={dialogRef}
        aria-label={`Flyer de ${label}`}
        // Clic fuera de la imagen (en el fondo) cierra el modal.
        onClick={(e) => {
          if (e.target === dialogRef.current) dialogRef.current?.close();
        }}
        className="m-auto max-h-[92vh] max-w-[92vw] overflow-visible bg-transparent p-0 backdrop:bg-black/85"
      >
        <button
          type="button"
          onClick={() => dialogRef.current?.close()}
          aria-label="Cerrar"
          className="absolute -top-3 -right-3 z-10 flex size-9 items-center justify-center rounded-full bg-brand text-xl leading-none font-bold text-brand-contrast shadow-lg"
        >
          ×
        </button>
        <Image
          src={src}
          alt={`Flyer de ${label}`}
          width={912}
          height={1280}
          sizes="92vw"
          className="max-h-[92vh] w-auto max-w-[92vw] rounded-md object-contain"
        />
      </dialog>
    </>
  );
}
