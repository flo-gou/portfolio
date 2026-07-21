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
  links: readonly { label: string; url: string }[];
  icon: string;
};

export function ProjectSection({
  project,
  theme,
  primaryScreen,
  secondaryScreen,
  capturedScreens = false,
}: {
  project: Project;
  theme: ProjectTheme;
  primaryScreen: ReactNode;
  secondaryScreen: ReactNode;
  /** true quand les écrans sont de vraies captures d'app (pas de status bar recréée). */
  capturedScreens?: boolean;
}) {
  return (
    <section
      id={project.id}
      className="relative overflow-hidden px-5 py-24 sm:px-8 sm:py-28"
      style={{ background: theme.bg, color: theme.text }}
    >
      {/* glow d'ambiance propre au monde */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-10 h-[24rem] w-[24rem] rounded-full opacity-30 blur-[90px]"
        style={{ background: theme.glow }}
      />

      <div className="relative mx-auto max-w-6xl">
        {/* En-tête */}
        <div
          className="flex flex-col gap-6 border-b pb-10 sm:flex-row sm:items-end sm:justify-between"
          style={{ borderColor: theme.line }}
        >
          <Reveal>
            <span className="eyebrow" style={{ color: theme.meta }}>
              {project.world}
            </span>
            <h2
              className={`${theme.headingFontClass} mt-4 text-5xl tracking-[-0.02em] sm:text-7xl`}
              style={{ fontWeight: 800 }}
            >
              {project.name}
            </h2>
            <p className="mt-3 text-lg sm:text-xl" style={{ color: theme.accent }}>
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

        {/* Récit + téléphones */}
        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[1fr_minmax(0,25rem)] lg:gap-16">
          <div className="flex flex-col gap-8">
            <Reveal>
              <p className="max-w-xl text-lg leading-relaxed">{project.summary}</p>
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

            {project.links.length > 0 ? (
              <Reveal delay={0.05}>
                <div className="flex flex-wrap gap-3">
                  {project.links.map((l) => (
                    <a
                      key={l.url}
                      href={l.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-[0.9rem] font-semibold transition-transform hover:-translate-y-0.5"
                      style={{ background: theme.ctaBg, color: theme.ctaText }}
                    >
                      {l.label}
                      <ArrowUpRight size={16} />
                    </a>
                  ))}
                </div>
              </Reveal>
            ) : null}
          </div>

          {/* Duo de téléphones */}
          <Reveal delay={0.12} className="relative">
            <div className="relative mx-auto flex max-w-md items-start justify-center pb-6">
              <div className="w-[58%] max-w-[15rem] translate-y-10 -rotate-6">
                <PhoneFrame
                  screenBg={theme.phoneScreenBg}
                  chrome={theme.phoneChrome}
                  hideStatusBar={capturedScreens}
                >
                  {secondaryScreen}
                </PhoneFrame>
              </div>
              <div className="-ml-10 w-[62%] max-w-[16rem] rotate-3 drop-shadow-2xl">
                <PhoneFrame
                  screenBg={theme.phoneScreenBg}
                  chrome={theme.phoneChrome}
                  hideStatusBar={capturedScreens}
                >
                  {primaryScreen}
                </PhoneFrame>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Fonctionnalités + rôle */}
        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <span className="eyebrow" style={{ color: theme.meta }}>
                Ce que fait {project.name}
              </span>
            </Reveal>
            <div className="mt-6 flex flex-col gap-3">
              {project.features.map((f, i) => (
                <Reveal
                  key={f.title}
                  delay={i * 0.05}
                  className="rounded-2xl p-5"
                  style={{ background: theme.panel }}
                >
                  <h3
                    className="text-[1.02rem] font-semibold"
                    style={{ color: theme.text }}
                  >
                    {f.title}
                  </h3>
                  <p
                    className="mt-1.5 text-[0.9rem] leading-relaxed"
                    style={{ color: theme.textDim }}
                  >
                    {f.body}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <Reveal>
              <span className="eyebrow" style={{ color: theme.meta }}>
                Ce que j&apos;ai fait
              </span>
            </Reveal>
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
                  <span className="text-[0.98rem] leading-relaxed">{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
