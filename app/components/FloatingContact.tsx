import { socials, whatsappUrl } from "../data/band";
import { InstagramIcon, WhatsAppIcon } from "./icons";

export default function FloatingContact() {
  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col gap-3 sm:right-6 sm:bottom-6">
      <a
        href={socials.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram de FLICKERS"
        className="flex size-14 items-center justify-center rounded-full border border-foreground/30 bg-background/80 shadow-lg backdrop-blur transition hover:scale-110 hover:border-accent hover:text-accent"
      >
        <InstagramIcon className="size-7 motion-safe:animate-wiggle motion-safe:[animation-delay:2s]" />
      </a>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contrátanos por WhatsApp"
        className="relative flex size-14 items-center justify-center rounded-full bg-gradient-brand text-brand-contrast shadow-[0_0_24px_rgba(249,115,22,0.45)] transition-transform hover:scale-110"
      >
        {/* Aro que se expande de forma continua */}
        <span
          aria-hidden="true"
          className="absolute inset-0 -z-10 rounded-full bg-brand/60 motion-safe:animate-ping"
        />
        <WhatsAppIcon className="size-7 motion-safe:animate-wiggle" />
      </a>
    </div>
  );
}
