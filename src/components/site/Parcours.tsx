import { parcours, profile } from "@/lib/content";
import { ArrowLink } from "./ArrowLink";

const columns =
  "md:grid md:grid-cols-[1.3fr_1fr_0.9fr_3fr] md:gap-x-6 md:px-6";

/** Parcours — le CV concis, en tableau : une ligne par entreprise. Les
    chiffres restent dans la phrase. En colonnes à partir de md, empilé
    en dessous (pas de tableau qui défile de côté sur mobile). */
export function Parcours() {
  return (
    <section
      id="parcours"
      className="scroll-mt-6 overflow-hidden rounded-[14px] border border-line bg-surface"
    >
      <div className="flex flex-wrap items-center justify-between gap-x-6 px-6 pb-1.5 pt-3.5">
        <h2 className="text-[22px] font-extrabold leading-tight tracking-[-0.025em]">
          {parcours.title}
        </h2>
        <ArrowLink href={profile.contacts.linkedin}>
          {parcours.linkLabel}
        </ArrowLink>
      </div>
      <p className="max-w-[72ch] px-6 pb-4 text-[15px] text-muted">
        {parcours.lead}
      </p>

      <div
        aria-hidden
        className={`hidden border-t border-line bg-canvas/60 py-2.5 text-[13px] font-semibold text-label ${columns}`}
      >
        {parcours.columns.map((column) => (
          <span key={column}>{column}</span>
        ))}
      </div>

      <ul>
        {parcours.rows.map((row) => (
          <li
            key={row.company}
            className={`flex flex-col gap-1.5 border-t border-line-soft px-6 py-3.5 ${columns}`}
          >
            <div>
              <h3 className="text-base font-bold">{row.company}</h3>
              <p className="text-[13px] text-label">{row.sector}</p>
            </div>
            <div>
              <p className="text-[15px] font-semibold">{row.role}</p>
              {row.via ? (
                <p className="text-[13px] text-label">{row.via}</p>
              ) : null}
            </div>
            <p className="text-[15px] text-muted">{row.period}</p>
            <ul className="flex flex-col gap-1.5 text-[15px]">
              {row.delivered.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
