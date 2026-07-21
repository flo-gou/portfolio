import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { ProjectSection } from "@/components/site/ProjectSection";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { Eyebrow } from "@/components/site/primitives";
import { briquera, bandee } from "@/lib/content";
import { briqueraTheme, bandeeTheme } from "@/lib/themes";

import Image from "next/image";

/** Vraie capture d'écran de l'app, rendue plein cadre dans le téléphone. */
function Shot({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="256px"
      className="object-cover object-top"
      priority
    />
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />

        {/* Chapeau "Projets" — une liste qui pourra s'agrandir */}
        <section
          id="projets"
          className="relative border-t border-line px-5 pt-24 pb-14 sm:px-8 sm:pt-32 sm:pb-16"
        >
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <Eyebrow dot="var(--color-gold)" className="text-ivory-dim">
                Projets
              </Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display mt-6 max-w-3xl text-3xl leading-[1.08] tracking-[-0.02em] sm:text-[2.7rem]">
                Des projets nés de besoins concrets, menés jusqu&apos;au store.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-ivory-dim">
                Deux aujourd&apos;hui. D&apos;autres en préparation.
              </p>
            </Reveal>
          </div>
        </section>

        <ProjectSection
          project={briquera}
          theme={briqueraTheme}
          capturedScreens
          primaryScreen={
            <Shot src="/mockups/briquera/accueil.png" alt="Écran d'accueil de Briquera" />
          }
          secondaryScreen={
            <Shot src="/mockups/briquera/stats.png" alt="Statistiques de budget de Briquera" />
          }
        />
        <ProjectSection
          project={bandee}
          theme={bandeeTheme}
          capturedScreens
          primaryScreen={
            <Shot src="/mockups/bandee/event-hub.png" alt="Accueil d'un événement Bandee" />
          }
          secondaryScreen={
            <Shot src="/mockups/bandee/dates.png" alt="Sondage de dates de Bandee" />
          }
        />
      </main>
      <Footer />
    </>
  );
}
