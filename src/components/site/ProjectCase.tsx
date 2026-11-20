import Image from "next/image";
import type { Project } from "@/lib/content";
import { ArrowLink } from "./ArrowLink";
import { Status } from "./Status";

type Row = { label: string; value: string; kind?: "decision" | "soft" };

/** Fiche d'un side project — même trame pour tous : problème → décision →
    hors périmètre → appris → rôle, en clé → valeur. La décision est la seule
    ligne teintée, à la couleur de l'app. */
export function ProjectCase({ project: p }: { project: Project }) {
  const rows: Row[] = [
    { label: "Problème", value: p.problem },
    { label: "Décision", value: p.decision, kind: "decision" },
    { label: "Hors périmètre", value: p.ecarte, kind: "soft" },
    ...(p.learned ? [{ label: "Appris", value: p.learned }] : []),
    { label: "Rôle", value: p.role },
  ];

  return (
    <article
      id={p.id}
      className="scroll-mt-6 overflow-hidden rounded-[14px] border border-line bg-surface"
    >
      <header
        className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 px-6 py-4"
        style={{ background: p.theme.tint }}
      >
        <div className="flex min-w-0 items-center gap-3.5">
          <Image
            src={p.icon}
            alt=""
            width={48}
            height={48}
            className="size-12 shrink-0 rounded-xl"
          />
          <div className="min-w-0">
            <h3 className="text-[22px] font-extrabold leading-tight tracking-[-0.025em]">
              {p.name}
            </h3>
            <p className="text-sm text-muted">{p.category}</p>
          </div>
        </div>
        <Status
          label={p.status}
          href={p.appStore}
          live={Boolean(p.appStore)}
          onTint
        />
      </header>

      <div className="xl:grid xl:grid-cols-[minmax(0,1fr)_340px]">
        <div className="flex min-w-0 flex-col gap-3 p-6">
          <p className="mb-1 text-balance text-[28px] font-extrabold leading-[1.12] tracking-[-0.03em]">
            {p.promise}
          </p>

          <dl>
            {rows.map((row, i) => {
              const decision = row.kind === "decision";
              // Pas de filet autour du bloc teinté : il se détache seul.
              const ruled = !decision && rows[i - 1]?.kind !== "decision";
              return (
                <div
                  key={row.label}
                  className={`grid gap-x-4 gap-y-0.5 sm:grid-cols-[120px_minmax(0,1fr)] ${
                    decision ? "-mx-3.5 rounded-[10px] p-3.5" : "py-3"
                  } ${ruled ? "border-t border-line-soft" : ""}`}
                  style={decision ? { background: p.theme.tint } : undefined}
                >
                  <dt
                    className={`text-[13px] ${
                      decision
                        ? "font-bold leading-[25px]"
                        : "leading-[23px] text-label"
                    }`}
                    style={decision ? { color: p.theme.ink } : undefined}
                  >
                    {row.label}
                  </dt>
                  <dd
                    className={
                      decision
                        ? "text-[17px] font-semibold leading-[25px] text-ink"
                        : `text-[15px] leading-[23px] ${
                            row.kind === "soft" ? "text-muted" : "text-ink-2"
                          }`
                    }
                  >
                    {row.value}
                  </dd>
                </div>
              );
            })}
          </dl>

          {p.links?.length ? (
            <div className="flex flex-wrap gap-x-6">
              {p.links.map((link) => (
                <ArrowLink key={link.url} href={link.url}>
                  {link.label}
                </ArrowLink>
              ))}
            </div>
          ) : null}
        </div>

        <figure className="flex flex-col gap-3.5 border-t border-line-soft p-6 xl:border-l xl:border-t-0">
          <div className="grid max-w-[340px] grid-cols-2 gap-3">
            {p.shots.map((shot) => (
              <Image
                key={shot.src}
                src={shot.src}
                alt={shot.alt}
                width={1170}
                height={2532}
                sizes="170px"
                className="h-auto w-full rounded-2xl border border-line"
              />
            ))}
          </div>
          <figcaption className="max-w-[340px] text-[13px] text-muted">
            {p.caption}
          </figcaption>
        </figure>
      </div>
    </article>
  );
}
