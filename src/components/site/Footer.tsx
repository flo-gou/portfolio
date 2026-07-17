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
            {profile.title}. Je conçois et j'expédie des applications mobiles
            entières, en solo.
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
            href="#contact"
            className="text-[0.9rem] text-ivory-dim transition-colors hover:text-ivory"
          >
            Me contacter
          </a>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-col gap-2 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-[0.72rem] text-ivory-faint">
          © {new Date().getFullYear()} Florian Gouesse — Conçu & développé en solo.
        </p>
        <p className="font-mono text-[0.72rem] text-ivory-faint">
          Bricolage Grotesque · IBM Plex Mono
        </p>
      </div>
    </footer>
  );
}
