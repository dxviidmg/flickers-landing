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
        className="flex size-14 items-center justify-center rounded-full border border-foreground/30 bg-background/80 shadow-lg backdrop-blur transition-colors hover:border-accent hover:text-accent"
      >
        <InstagramIcon className="size-7" />
      </a>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contrátanos por WhatsApp"
        className="flex size-14 items-center justify-center rounded-full bg-brand text-brand-contrast shadow-lg transition-opacity hover:opacity-90"
      >
        <WhatsAppIcon className="size-7" />
      </a>
    </div>
  );
}
