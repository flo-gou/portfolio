import { nav, profile } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-line px-5 py-14 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-xs">
          <div className="flex items-center gap-2.5">
            <span
              aria-hidden
              className="grid h-7 w-7 place-items-center rounded-md bg-gold font-display text-sm text-espresso"
            >
              F
            </span>
            <span className="font-display text-[0.95rem]">Florian Gouesse</span>
          </div>
          <p className="mt-4 text-[0.85rem] leading-relaxed text-ivory-faint">
            {profile.title}. Des applications mobiles conçues de bout en bout,
            sur mon temps libre.
          </p>
        </div>

        <nav className="flex flex-col gap-2.5">
          <span className="eyebrow mb-1 text-ivory-faint">Naviguer</span>
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-[0.9rem] text-ivory-dim transition-colors hover:text-ivory"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-2.5">
          <span className="eyebrow mb-1 text-ivory-faint">Ailleurs</span>
          <a
            href={profile.contacts.bandee}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.9rem] text-ivory-dim transition-colors hover:text-ivory"
          >
            join-bandee.com
          </a>
          <a
            href={profile.contacts.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.9rem] text-ivory-dim transition-colors hover:text-ivory"
          >
            LinkedIn
          </a>
          <a
            href={profile.contacts.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.9rem] text-ivory-dim transition-colors hover:text-ivory"
          >
            GitHub
          </a>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-col gap-2 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-[0.72rem] text-ivory-faint">
          © {new Date().getFullYear()} Florian Gouesse — Product management & design.
        </p>
        <a
          href="#top"
          className="font-mono text-[0.72rem] text-ivory-faint transition-colors hover:text-ivory-dim"
        >
          Retour en haut ↑
        </a>
      </div>
    </footer>
  );
}
