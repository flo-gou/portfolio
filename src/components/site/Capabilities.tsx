import { profile } from "@/lib/content";
import { Eyebrow } from "./primitives";
import { Reveal } from "./Reveal";

const owns = [
  { k: "Produit", v: "Cadrage, parcours, priorisation MVP → V1 → V2" },
  { k: "Design", v: "Identité, UI, design system, copywriting" },
  { k: "Développement", v: "Expo / React Native, Supabase, TypeScript" },
  { k: "Distribution", v: "EAS, TestFlight, sites marketing, RGPD" },
];

export function Capabilities() {
  // On double la liste pour un défilement continu.
  const track = [...profile.stack, ...profile.stack];

  return (
    <section
      id="savoir-faire"
      className="relative border-t border-line px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Eyebrow dot="var(--color-gold)" className="text-ivory-dim">
            Savoir-faire
          </Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display mt-6 max-w-3xl text-3xl leading-[1.08] tracking-[-0.02em] sm:text-[2.7rem]">
            Un produit, du concept au store — sans passer la main.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {owns.map((o, i) => (
            <Reveal
              key={o.k}
              delay={i * 0.05}
              className="bg-espresso p-7"
              style={{ background: "var(--color-espresso)" }}
            >
              <h3 className="font-display text-lg text-gold">{o.k}</h3>
              <p className="mt-2 text-[0.9rem] leading-relaxed text-ivory-dim">
                {o.v}
              </p>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Marquee de la stack */}
      <div className="relative mt-16 overflow-hidden">
        <div className="marquee-track flex w-max gap-3">
          {track.map((s, i) => (
            <span
              key={`${s}-${i}`}
              className="whitespace-nowrap rounded-full border border-line bg-espresso-2/40 px-4 py-2 font-mono text-[0.78rem] text-ivory-dim"
            >
              {s}
            </span>
          ))}
        </div>
        {/* fondus latéraux */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-espresso to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-espresso to-transparent" />
      </div>
    </section>
  );
}
