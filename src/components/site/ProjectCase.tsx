import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/content";
import type { ProjectTheme } from "./ProjectSection";
import { PhoneFrame } from "./PhoneFrame";
import { Reveal } from "./Reveal";

/** Une étude de cas courte, même grammaire pour les deux projets.
    Angle produit (problème → décision → écarté → appris), captures en pleine
    couleur qui portent la preuve. Le design se montre, il ne se réclame pas. */
export function ProjectCase({
  project,
  theme,
}: {
  project: Project;
  theme: ProjectTheme;
}) {
  const p = project;
  return (
    <section
      id={p.id}
      className="border-t border-line px-5 py-24 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        {/* En-tête : index · promesse (univers du projet) · statut */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <p className="font-mono text-[0.8rem] uppercase tracking-[0.18em] text-ivory-faint">
              {p.index} — {p.name}
            </p>
            <h2
              className="font-display mt-4 max-w-2xl text-4xl leading-[1.02] tracking-[-0.02em] sm:text-5xl"
              style={{ color: theme.accent }}
            >
              {p.promise}
            </h2>
            <p className="mt-3 font-mono text-[0.72rem] uppercase tracking-wider text-ivory-faint">
              {p.category}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <StatusPill status={p.status} href={p.statusHref} accent={theme.accent} />
          </Reveal>
        </div>

        {/* Corps : récit produit · captures */}
        <div className="mt-14 grid gap-14 lg:grid-cols-[1fr_minmax(0,22rem)] lg:gap-16">
          <div className="flex max-w-xl flex-col gap-8">
            <Reveal>
              <Block label="Le problème" accent={theme.accent}>
                {p.problem}
              </Block>
            </Reveal>

            <Reveal delay={0.05}>
              <Block label="La décision" accent={theme.accent} emphasis>
                {p.decision}
              </Block>
              <p className="mt-3 text-[0.9rem] leading-relaxed text-ivory-faint">
                <span className="text-ivory-dim">Volontairement écarté — </span>
                {p.ecarte}
              </p>
            </Reveal>

            {p.learned ? (
              <Reveal delay={0.05}>
                <Block label="Ce que j'ai appris" accent={theme.accent}>
                  {p.learned}
                </Block>
              </Reveal>
            ) : null}

            <Reveal delay={0.05}>
              <div className="border-t border-line pt-6">
                <p className="text-[0.92rem] leading-relaxed text-ivory-dim">
                  {p.role}
                </p>
                {p.link ? (
                  <a
                    href={p.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-[0.9rem] font-semibold"
                    style={{ color: theme.accent }}
                  >
                    {p.link.label}
                    <ArrowUpRight size={15} />
                  </a>
                ) : null}
              </div>
            </Reveal>
          </div>

          {/* Captures : porteuse (grande) + appui, droites, pleine couleur */}
          <Reveal delay={0.1}>
            <figure className="m-0">
              <div className="flex items-start justify-center gap-0">
                <div className="mt-14 w-[45%] max-w-[10.5rem]">
                  <PhoneFrame
                    captured
                    screenBg={theme.phoneScreenBg}
                    chrome={theme.phoneChrome}
                  >
                    <Image
                      src={p.shots[1].src}
                      alt={p.shots[1].alt}
                      width={1170}
                      height={2532}
                      sizes="180px"
                      className="block h-auto w-full"
                    />
                  </PhoneFrame>
                </div>
                <div className="-ml-6 w-[56%] max-w-[13.5rem] drop-shadow-2xl">
                  <PhoneFrame
                    captured
                    screenBg={theme.phoneScreenBg}
                    chrome={theme.phoneChrome}
                  >
                    <Image
                      src={p.shots[0].src}
                      alt={p.shots[0].alt}
                      width={1170}
                      height={2532}
                      sizes="220px"
                      className="block h-auto w-full"
                      priority
                    />
                  </PhoneFrame>
                </div>
              </div>
              <figcaption className="mt-6 max-w-sm text-[0.85rem] leading-relaxed text-ivory-faint">
                {p.shots[0].caption}
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Block({
  label,
  accent,
  emphasis = false,
  children,
}: {
  label: string;
  accent: string;
  emphasis?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <span
        className="font-mono text-[0.7rem] uppercase tracking-[0.16em]"
        style={{ color: accent }}
      >
        {label}
      </span>
      <p
        className={`mt-2.5 leading-relaxed ${
          emphasis ? "text-[1.05rem] text-ivory" : "text-[0.98rem] text-ivory-dim"
        }`}
      >
        {children}
      </p>
    </div>
  );
}

function StatusPill({
  status,
  href,
  accent,
}: {
  status: string;
  href?: string;
  accent: string;
}) {
  const inner = (
    <span className="inline-flex items-center gap-2 rounded-full border border-line-strong px-3.5 py-1.5 font-mono text-[0.7rem] uppercase tracking-wider text-ivory-dim">
      <span
        className="h-1.5 w-1.5 rounded-full"
        style={{ background: accent }}
      />
      {status}
      {href ? <ArrowUpRight size={12} className="text-ivory-faint" /> : null}
    </span>
  );
  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-70">
      {inner}
    </a>
  ) : (
    inner
  );
}
