import { Sidebar } from "@/components/site/Sidebar";
import { Hero } from "@/components/site/Hero";
import { Parcours } from "@/components/site/Parcours";
import { SideProjects } from "@/components/site/SideProjects";
import { Contact } from "@/components/site/Contact";

/** Mise en page « cockpit » : la fiche profil à gauche, le contenu à droite.
    Sur mobile tout s'empile, profil d'abord. */
export default function Home() {
  return (
    <div
      id="top"
      className="mx-auto flex max-w-[1280px] flex-col gap-6 px-4 pb-14 pt-4 sm:px-6 sm:pt-6 lg:grid lg:grid-cols-[320px_minmax(0,1fr)]"
    >
      <Sidebar />
      <main className="flex min-w-0 flex-col gap-6">
        <Hero />
        {/* Le parcours salarié d'abord : c'est lui qui porte la séniorité. */}
        <Parcours />
        <SideProjects />
        <Contact />
      </main>
    </div>
  );
}
