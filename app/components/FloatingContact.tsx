import { socials, whatsappUrl } from "../data/band";
import { InstagramIcon, WhatsAppIcon } from "./icons";

export default function FloatingContact() {
  return (
    <div className="fixed right-[max(1rem,env(safe-area-inset-right))] bottom-[max(1rem,env(safe-area-inset-bottom))] z-50 flex flex-col gap-3 sm:right-[max(1.5rem,env(safe-area-inset-right))] sm:bottom-[max(1.5rem,env(safe-area-inset-bottom))]">
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
        className="flex size-14 items-center justify-center rounded-full bg-gradient-brand text-brand-contrast shadow-[0_0_12px_rgba(249,115,22,0.25)] transition-transform hover:scale-105"
      >
        <WhatsAppIcon className="size-7 motion-safe:animate-wiggle" />
      </a>
    </div>
  );
}
