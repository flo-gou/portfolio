import { ArrowUpRight } from "lucide-react";
import { track, profile } from "@/lib/content";
import { Reveal } from "./Reveal";

/** En entreprise — le track record salarié, juste après le manifeste et avant
    les apps. Le haut de page garde sa retenue ; la densité chiffrée commence
    ici. Quatre faits, pas une frise de CV. */
export function Track() {
  return (
    <section
      id="parcours"
      className="border-t border-line px-5 py-20 sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="eyebrow text-ivory-faint">{track.label}</p>
          <p className="font-display mt-5 max-w-2xl text-2xl leading-snug tracking-[-0.01em] sm:text-3xl">
            {track.lead}
          </p>
        </Reveal>

        <dl className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {track.items.map((item, i) => (
            <Reveal key={item.metric} delay={i * 0.05}>
              <div className="border-t border-line-strong pt-5">
                <dt>
                  <span className="font-display block text-3xl tracking-[-0.02em] text-gold sm:text-4xl">
                    {item.metric}
                  </span>
                  <span className="mt-1.5 block font-mono text-[0.72rem] uppercase tracking-wider text-ivory-faint">
                    {item.unit}
                  </span>
                </dt>
                <dd className="mt-4 text-[0.92rem] leading-relaxed text-ivory-dim">
                  {item.body}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>

        <Reveal>
          <a
            href={profile.contacts.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 inline-flex items-center gap-1.5 text-[0.9rem] text-ivory-dim transition-colors hover:text-ivory"
          >
            {track.footnote}
            <ArrowUpRight size={15} className="text-ivory-faint" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
