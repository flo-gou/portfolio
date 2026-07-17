import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { PhoneFrame } from "./PhoneFrame";
import { Reveal } from "./Reveal";

export type ProjectTheme = {
  bg: string;
  panel: string;
  panelSoft: string;
  text: string;
  textDim: string;
  accent: string;
  line: string;
  meta: string;
  headingFontClass: string;
  ctaBg: string;
  ctaText: string;
  phoneChrome: string;
  phoneScreenBg: string;
  glow: string;
};

type Project = {
  id: string;
  name: string;
  world: string;
  tagline: string;
  category: string;
  status: string;
  summary: string;
  problem: string;
  approach: string;
  features: readonly { title: string; body: string }[];
  role: readonly string[];
  metrics: readonly { value: string; label: string }[];
  palette: readonly { hex: string; name: string }[];
  typography: readonly { name: string; role: string }[];
  stack: readonly string[];
  links: readonly { label: string; url: string }[];
  icon: string;
};

export function ProjectSection({
  project,
  theme,
  index,
  primaryScreen,
  secondaryScreen,
}: {
  project: Project;
  theme: ProjectTheme;
  index: string;
  primaryScreen: ReactNode;
  secondaryScreen: ReactNode;
}) {
  return (
    <section
      id={project.id}
      className="relative overflow-hidden px-5 py-24 sm:px-8 sm:py-32"
      style={{ background: theme.bg, color: theme.text }}
    >
      {/* glow d'ambiance propre au monde */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-10 h-[24rem] w-[24rem] rounded-full opacity-30 blur-[90px]"
        style={{ background: theme.glow }}
      />

      <div className="relative mx-auto max-w-6xl">
        {/* En-tête d'étude de cas */}
        <div className="flex flex-col gap-6 border-b pb-10" style={{ borderColor: theme.line }}>
          <Reveal>
            <div className="flex items-center gap-3">
              <span
                className="font-mono text-sm"
                style={{ color: theme.accent }}
              >
                {index}
              </span>
              <span
                className="eyebrow"
                style={{ color: theme.meta }}
              >
                Étude de cas — {project.world}
              </span>
            </div>
          </Reveal>

          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <Reveal delay={0.05}>
              <h2
                className={`${theme.headingFontClass} text-5xl tracking-[-0.02em] sm:text-7xl`}
                style={{ fontWeight: 800 }}
              >
                {project.name}
              </h2>
              <p
                className="mt-3 text-lg sm:text-xl"
                style={{ color: theme.accent }}
              >
                {project.tagline}
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <ul
                className="flex flex-col gap-1.5 font-mono text-[0.72rem] uppercase tracking-wider sm:text-right"
                style={{ color: theme.meta }}
              >
                <li>{project.category}</li>
                <li style={{ color: theme.accent }}>{project.status}</li>
              </ul>
            </Reveal>
          </div>
        </div>

        {/* Récit + téléphones */}
        <div className="mt-14 grid items-start gap-12 lg:grid-cols-[1fr_minmax(0,26rem)] lg:gap-16">
          <div className="flex flex-col gap-8">
            <Reveal>
              <p className="max-w-xl text-lg leading-relaxed">
                {project.summary}
              </p>
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-2">
              <Reveal delay={0.05}>
                <div
                  className="h-full rounded-2xl p-6"
                  style={{ background: theme.panel }}
                >
                  <span className="eyebrow" style={{ color: theme.accent }}>
                    Le problème
                  </span>
                  <p
                    className="mt-3 text-[0.95rem] leading-relaxed"
                    style={{ color: theme.textDim }}
                  >
                    {project.problem}
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div
                  className="h-full rounded-2xl p-6"
                  style={{ background: theme.panel }}
                >
                  <span className="eyebrow" style={{ color: theme.accent }}>
                    Mon approche
                  </span>
                  <p
                    className="mt-3 text-[0.95rem] leading-relaxed"
                    style={{ color: theme.textDim }}
                  >
                    {project.approach}
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Métriques */}
            <Reveal delay={0.05}>
              <div
                className="grid grid-cols-2 gap-6 rounded-2xl border p-6 sm:grid-cols-4"
                style={{ borderColor: theme.line }}
              >
                {project.metrics.map((m) => (
                  <div key={m.label} className="flex flex-col gap-1">
                    <span
                      className="font-mono text-2xl sm:text-3xl"
                      style={{ color: theme.accent, fontWeight: 600 }}
                    >
                      {m.value}
                    </span>
                    <span
                      className="text-[0.78rem] leading-snug"
                      style={{ color: theme.textDim }}
                    >
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Duo de téléphones */}
          <Reveal delay={0.12} className="relative">
            <div className="relative mx-auto flex max-w-md items-start justify-center pb-6">
              <div className="w-[58%] max-w-[15rem] translate-y-10 -rotate-6">
                <PhoneFrame
                  screenBg={theme.phoneScreenBg}
                  chrome={theme.phoneChrome}
                >
                  {secondaryScreen}
                </PhoneFrame>
              </div>
              <div className="-ml-10 w-[62%] max-w-[16rem] rotate-3 drop-shadow-2xl">
                <PhoneFrame
                  screenBg={theme.phoneScreenBg}
                  chrome={theme.phoneChrome}
                >
                  {primaryScreen}
                </PhoneFrame>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Fonctionnalités */}
        <div className="mt-20">
          <Reveal>
            <span className="eyebrow" style={{ color: theme.meta }}>
              Ce que fait {project.name}
            </span>
          </Reveal>
          <div className="mt-6 grid gap-px overflow-hidden rounded-2xl sm:grid-cols-2 lg:grid-cols-3"
            style={{ background: theme.line }}
          >
            {project.features.map((f, i) => (
              <Reveal
                key={f.title}
                delay={(i % 3) * 0.05}
                className="p-6"
                style={{ background: theme.bg }}
              >
                <div className="flex h-full flex-col">
                  <h3
                    className="text-[1.05rem] font-semibold"
                    style={{ color: theme.text }}
                  >
                    {f.title}
                  </h3>
                  <p
                    className="mt-2 text-[0.9rem] leading-relaxed"
                    style={{ color: theme.textDim }}
                  >
                    {f.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Mon rôle + design system */}
        <div className="mt-16 grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <Reveal>
            <span className="eyebrow" style={{ color: theme.meta }}>
              Mon rôle
            </span>
            <ul className="mt-6 flex flex-col">
              {project.role.map((r, i) => (
                <li
                  key={i}
                  className="flex gap-4 border-t py-4 first:border-t-0"
                  style={{ borderColor: theme.line }}
                >
                  <span
                    className="font-mono text-xs"
                    style={{ color: theme.accent }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[0.95rem] leading-relaxed">{r}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.08}>
            <span className="eyebrow" style={{ color: theme.meta }}>
              Design system « {project.world} »
            </span>
            {/* Palette réelle */}
            <div className="mt-6 grid grid-cols-3 gap-3">
              {project.palette.map((c) => (
                <div key={c.hex} className="flex flex-col gap-2">
                  <span
                    className="h-14 w-full rounded-xl ring-1 ring-black/10"
                    style={{ background: c.hex }}
                  />
                  <span className="flex flex-col leading-tight">
                    <span className="text-[0.78rem] font-medium">{c.name}</span>
                    <span
                      className="font-mono text-[0.62rem] uppercase"
                      style={{ color: theme.textDim }}
                    >
                      {c.hex}
                    </span>
                  </span>
                </div>
              ))}
            </div>
            {/* Typo */}
            <div className="mt-7 flex flex-col gap-2">
              {project.typography.map((t) => (
                <div
                  key={t.name}
                  className="flex items-baseline justify-between border-t py-2.5"
                  style={{ borderColor: theme.line }}
                >
                  <span className="text-[0.95rem] font-semibold">{t.name}</span>
                  <span
                    className="font-mono text-[0.7rem]"
                    style={{ color: theme.textDim }}
                  >
                    {t.role}
                  </span>
                </div>
              ))}
            </div>

            {/* Stack + liens */}
            <div className="mt-7 flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full px-3 py-1 text-[0.75rem]"
                  style={{ background: theme.panelSoft, color: theme.textDim }}
                >
                  {s}
                </span>
              ))}
            </div>
            {project.links.length > 0 ? (
              <div className="mt-6 flex flex-wrap gap-3">
                {project.links.map((l) => (
                  <a
                    key={l.url}
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[0.85rem] font-semibold transition-transform hover:-translate-y-0.5"
                    style={{ background: theme.ctaBg, color: theme.ctaText }}
                  >
                    {l.label}
                    <ArrowUpRight size={15} />
                  </a>
                ))}
              </div>
            ) : null}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
