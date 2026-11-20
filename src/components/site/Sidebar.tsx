import Image from "next/image";
import { parcours, profile, projects, sideProjects } from "@/lib/content";
import { LinkedInButton } from "./LinkedInButton";
import { Status } from "./Status";

const navLink =
  "rounded-lg px-3 text-[15px] text-ink transition-colors hover:bg-canvas";

/** Colonne profil — la fiche de la personne, toujours à portée : qui, statut,
    l'action, puis les propriétés en clé → valeur. Suit le défilement sur
    grand écran ; passe en tête de page sur mobile. */
export function Sidebar() {
  return (
    <aside
      aria-label="Profil"
      className="flex flex-col gap-4 lg:sticky lg:top-6 lg:max-h-[calc(100dvh-3rem)] lg:self-start lg:overflow-y-auto"
    >
      <div className="flex flex-col gap-4 rounded-[14px] border border-line bg-surface p-5">
        <div className="flex items-center gap-3.5">
          <span
            aria-hidden
            className="flex size-13 shrink-0 items-center justify-center rounded-xl bg-accent text-[19px] font-extrabold tracking-[-0.02em] text-white"
          >
            {profile.initials}
          </span>
          <div className="min-w-0">
            <p className="text-[19px] font-extrabold leading-tight tracking-[-0.02em]">
              {profile.name}
            </p>
            <p className="text-sm text-muted">{profile.role}</p>
          </div>
        </div>

        <div>
          <Status label={profile.status} />
        </div>

        <LinkedInButton />

        <dl>
          {profile.facts.map((fact) => (
            <div
              key={fact.label}
              className="flex gap-3 border-t border-line-soft py-[9px]"
            >
              <dt className="w-[100px] shrink-0 text-[13px] leading-[22px] text-label">
                {fact.label}
              </dt>
              {typeof fact.value === "string" ? (
                <dd className="min-w-0 text-sm font-semibold leading-[22px]">
                  {fact.value}
                </dd>
              ) : (
                <dd className="flex min-w-0 flex-wrap gap-1.5">
                  {fact.value.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-accent-tint px-2 py-px text-[13px] font-semibold text-accent-deep"
                    >
                      {tag}
                    </span>
                  ))}
                </dd>
              )}
            </div>
          ))}
        </dl>
      </div>

      {/* Sur mobile la page est linéaire : le sommaire n'apporte rien. */}
      <nav
        aria-label="Sur cette page"
        className="hidden flex-col rounded-[14px] border border-line bg-surface p-2 lg:flex"
      >
        <a href="#parcours" className={`${navLink} py-[11px] font-semibold`}>
          {parcours.title}
        </a>
        <a
          href="#projets"
          className={`${navLink} pb-[5px] pt-[11px] font-semibold`}
        >
          {sideProjects.title}
        </a>
        {projects.map((p) => (
          <a
            key={p.id}
            href={`#${p.id}`}
            className={`${navLink} flex items-center gap-2.5 py-2 pl-6 font-medium`}
          >
            <Image
              src={p.icon}
              alt=""
              width={28}
              height={28}
              className="size-7 rounded-[7px]"
            />
            {p.name}
          </a>
        ))}
        <a href="#contact" className={`${navLink} py-[11px] font-semibold`}>
          Contact
        </a>
      </nav>
    </aside>
  );
}
