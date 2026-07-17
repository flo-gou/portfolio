import type { ReactNode } from "react";
import type { Swatch } from "@/lib/content";

/** Eyebrow mono — la "signature design token" du site. */
export function Eyebrow({
  children,
  className = "",
  dot,
}: {
  children: ReactNode;
  className?: string;
  dot?: string;
}) {
  return (
    <span className={`eyebrow inline-flex items-center gap-2 ${className}`}>
      {dot ? (
        <span
          aria-hidden
          className="inline-block h-1.5 w-1.5 rounded-full"
          style={{ background: dot }}
        />
      ) : null}
      {children}
    </span>
  );
}

/** Chip de token couleur avec son hex — montre le design system réel. */
export function SwatchChip({ hex, name }: Swatch) {
  return (
    <div className="flex items-center gap-2.5">
      <span
        className="h-8 w-8 shrink-0 rounded-md ring-1 ring-black/10"
        style={{ background: hex }}
      />
      <span className="flex flex-col leading-tight">
        <span className="text-[0.82rem] font-medium">{name}</span>
        <span className="font-mono text-[0.68rem] uppercase opacity-55">
          {hex}
        </span>
      </span>
    </div>
  );
}

/** Grande statistique en mono tabulaire. */
export function Stat({
  value,
  label,
  accent,
}: {
  value: string;
  label: string;
  accent?: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <span
        className="font-display text-3xl sm:text-4xl"
        style={accent ? { color: accent } : undefined}
      >
        {value}
      </span>
      <span className="text-[0.8rem] leading-snug opacity-70">{label}</span>
    </div>
  );
}
