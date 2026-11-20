import { Nav } from "@/components/site/Nav";
import { Manifesto } from "@/components/site/Manifesto";
import { Track } from "@/components/site/Track";
import { ProjectCase } from "@/components/site/ProjectCase";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { briquera, bandee, profile } from "@/lib/content";
import { briqueraTheme, bandeeTheme } from "@/lib/themes";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Manifesto />

        {/* Le track record salarié d'abord : c'est lui qui porte la séniorité. */}
        <Track />

        {/* Liaison — une phrase qui pose la grille, remplace « À propos » */}
        <section
          id="projets"
          className="border-t border-line px-5 py-20 sm:px-8 sm:py-24"
        >
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <p className="font-display max-w-3xl text-2xl leading-snug tracking-[-0.01em] text-ivory-dim sm:text-3xl">
                {profile.liaison}
              </p>
            </Reveal>
          </div>
        </section>

        <ProjectCase project={briquera} theme={briqueraTheme} />
        <ProjectCase project={bandee} theme={bandeeTheme} />
      </main>
      <Footer />
    </>
  );
}
