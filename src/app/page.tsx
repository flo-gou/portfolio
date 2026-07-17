import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { ProjectSection } from "@/components/site/ProjectSection";
import { Capabilities } from "@/components/site/Capabilities";
import { OtherProjects } from "@/components/site/OtherProjects";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { briquera, bandee } from "@/lib/content";
import { briqueraTheme, bandeeTheme } from "@/lib/themes";

import BriqueraHome from "@/components/mockups/BriqueraHome";
import BriqueraPurchases from "@/components/mockups/BriqueraPurchases";
import BandeeHome from "@/components/mockups/BandeeHome";
import BandeeDates from "@/components/mockups/BandeeDates";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <ProjectSection
          project={briquera}
          theme={briqueraTheme}
          index="01"
          primaryScreen={<BriqueraHome />}
          secondaryScreen={<BriqueraPurchases />}
        />
        <ProjectSection
          project={bandee}
          theme={bandeeTheme}
          index="02"
          primaryScreen={<BandeeHome />}
          secondaryScreen={<BandeeDates />}
        />
        <Capabilities />
        <OtherProjects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
