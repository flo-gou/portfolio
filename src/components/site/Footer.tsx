import { ArrowUpRight } from "lucide-react";
import { profile, projects } from "@/lib/content";

/** Clôture : une intention claire, UNE action mise en avant — LinkedIn, qui
    porte le parcours détaillé — et tout le reste en retrait. Le seul aplat
    plein du site : il est ici parce qu'il n'y a qu'une chose à faire. */
export function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-line px-5 py-20 sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow text-ivory-faint">Contact</p>
        <p className="font-display mt-5 max-w-2xl text-2xl leading-snug tracking-[-0.01em] sm:text-3xl">
          {profile.closing}
        </p>

        <div className="mt-9">
          <a
            href={profile.contacts.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gold-ink px-6 py-3 text-[0.95rem] font-semibold text-espresso transition-opacity hover:opacity-90"
          >
            Me contacter sur LinkedIn
            <ArrowUpRight size={17} />
          </a>
        </div>

        {/* Tout le reste en retrait : l'email, les apps, le code. */}
        <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3 text-[0.92rem]">
          <a
            href={`mailto:${profile.contacts.email}`}
            className="text-ivory-dim transition-colors hover:text-ivory"
          >
            {profile.contacts.email}
          </a>
          {projects.map((p) => (
            <a
              key={p.id}
              href={p.appStore}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ivory-dim transition-colors hover:text-ivory"
            >
              {`${p.name} sur l’App Store ↗`}
            </a>
          ))}
          <a
            href={profile.contacts.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ivory-dim transition-colors hover:text-ivory"
          >
            GitHub ↗
          </a>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-lg font-mono text-[0.72rem] leading-relaxed text-ivory-faint">
            {profile.colophon}
          </p>
          <a
            href="#top"
            className="font-mono text-[0.72rem] text-ivory-faint transition-colors hover:text-ivory-dim"
          >
            Retour en haut ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
