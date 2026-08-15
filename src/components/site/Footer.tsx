import { profile, projects } from "@/lib/content";

/** Clôture : une intention claire (poste produit), les liens sobres, un colophon
    qui prouve le ship sans le sur-jouer. */
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

        {/* Les apps d'abord : la clôture invite à les ouvrir, autant les tendre. */}
        <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3 text-[0.95rem]">
          {projects.map((p) => (
            <a
              key={p.id}
              href={p.appStore}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-ivory transition-colors hover:text-gold"
            >
              {`${p.name} sur l’App Store ↗`}
            </a>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-x-7 gap-y-3 text-[0.95rem]">
          <a
            href={`mailto:${profile.contacts.email}`}
            className="font-medium text-ivory transition-colors hover:text-gold"
          >
            {profile.contacts.email}
          </a>
          <a
            href={profile.contacts.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ivory-dim transition-colors hover:text-ivory"
          >
            LinkedIn ↗
          </a>
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
