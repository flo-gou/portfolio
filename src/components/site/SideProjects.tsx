import { projects, sideProjects } from "@/lib/content";
import { ProjectCase } from "./ProjectCase";

/** Side projects — une introduction posée sur le fond de page (pas une carte
    de plus) pour marquer le changement de registre après le parcours salarié,
    puis une fiche par projet. */
export function SideProjects() {
  return (
    <section id="projets" className="mt-6 flex scroll-mt-6 flex-col gap-4">
      <div className="flex flex-col gap-3 px-1 pb-1">
        <h2 className="text-[30px] font-extrabold leading-[1.1] tracking-[-0.03em]">
          {sideProjects.title}
        </h2>
        <p className="max-w-[68ch] text-pretty text-[17px] leading-normal text-ink-2">
          {sideProjects.lead}
        </p>
        <dl className="mt-1 grid gap-x-8 border-t border-line sm:grid-cols-3">
          {sideProjects.facts.map((fact) => (
            <div key={fact.label} className="flex flex-col gap-0.5 py-3">
              <dt className="text-[13px] text-label">{fact.label}</dt>
              <dd className="text-[15px]">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      {projects.map((project) => (
        <ProjectCase key={project.id} project={project} />
      ))}
    </section>
  );
}
