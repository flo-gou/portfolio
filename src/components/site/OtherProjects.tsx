import { otherProjects } from "@/lib/content";
import { Eyebrow } from "./primitives";
import { Reveal } from "./Reveal";

export function OtherProjects() {
  return (
    <section className="relative border-t border-line px-5 py-24 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Eyebrow className="text-ivory-faint">Aussi dans l'atelier</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display mt-5 max-w-2xl text-2xl leading-tight tracking-tight sm:text-3xl">
            Quand je ne conçois pas d'apps utilitaires, je designe des jeux de
            gestion.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {otherProjects.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-line bg-espresso-2/40 p-8 transition-colors hover:border-line-strong">
                <span
                  aria-hidden
                  className="absolute right-6 top-6 h-16 w-16 rounded-full opacity-40 blur-2xl transition-opacity group-hover:opacity-70"
                  style={{ background: p.accent }}
                />
                <div className="relative">
                  <span
                    className="font-mono text-[0.72rem] uppercase tracking-wider"
                    style={{ color: p.accent }}
                  >
                    {p.kind}
                  </span>
                  <h3 className="font-display mt-3 text-2xl tracking-tight">
                    {p.name}
                  </h3>
                  <p className="mt-3 max-w-md text-[0.95rem] leading-relaxed text-ivory-dim">
                    {p.body}
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-line px-3 py-1 text-[0.74rem] text-ivory-dim"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
