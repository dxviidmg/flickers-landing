const items = ["Punk rock", "Pop punk", "Rock pop"];

// Cinta decorativa con el degradado del logo, ligeramente inclinada.
export default function Marquee() {
  const group = (
    <div className="flex shrink-0 items-center">
      {[...items, ...items].map((t, i) => (
        <span
          key={i}
          className="flex items-center font-display text-xl uppercase tracking-wide whitespace-nowrap sm:text-3xl"
        >
          <span className="px-5 sm:px-8">{t}</span>
          <span aria-hidden="true" className="text-base sm:text-2xl">
            ✦
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <div aria-hidden="true" className="overflow-hidden py-6 sm:py-8">
      <div className="-rotate-1 scale-x-105 bg-gradient-brand py-2 text-brand-contrast shadow-[0_0_40px_rgba(249,115,22,0.25)]">
        <div className="marquee-track">
          {group}
          {group}
        </div>
      </div>
    </div>
  );
}
