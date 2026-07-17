import { profile } from "@/lib/content";
import { Eyebrow } from "./primitives";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section
      id="apropos"
      className="relative border-t border-line px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Eyebrow dot="var(--color-gold)" className="text-ivory-dim">
            À propos
          </Eyebrow>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="font-display mt-6 max-w-3xl text-3xl leading-[1.08] tracking-[-0.02em] sm:text-[2.7rem]">
            Sans background de développeur, je livre pourtant des apps
            complètes — parce que je pilote chaque décision produit, design et
            technique de bout en bout.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2">
          {profile.method.map((m, i) => (
            <Reveal
              key={m.k}
              delay={i * 0.06}
              className="bg-espresso p-7 sm:p-9"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-sm text-gold">{m.k}</span>
                <h3 className="font-display text-xl tracking-tight">
                  {m.label}
                </h3>
              </div>
              <p className="mt-3 pl-10 text-[0.95rem] leading-relaxed text-ivory-dim">
                {m.body}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-10">
            <span className="eyebrow shrink-0 pt-1 text-ivory-faint">
              Savoir-faire
            </span>
            <ul className="flex flex-wrap gap-2.5">
              {profile.skills.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-line bg-espresso-2/50 px-3.5 py-1.5 text-[0.82rem] text-ivory-dim"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
