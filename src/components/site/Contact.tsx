import { profile, projects } from "@/lib/content";
import { ArrowLink } from "./ArrowLink";
import { LinkedInButton } from "./LinkedInButton";

/** Clôture : une intention, UNE action mise en avant — LinkedIn, qui porte le
    parcours détaillé — et tout le reste en liens de texte. */
export function Contact() {
  return (
    <section
      id="contact"
      className="flex scroll-mt-6 flex-col items-start gap-4 rounded-[14px] border border-line bg-surface px-6 pb-4 pt-7"
    >
      <h2 className="max-w-[26ch] text-balance text-[28px] font-extrabold leading-[1.12] tracking-[-0.03em]">
        {profile.closing.title}
      </h2>
      <p className="text-base text-muted">{profile.closing.body}</p>
      <LinkedInButton />

      <div className="flex flex-wrap gap-x-7">
        <a
          href={`mailto:${profile.contacts.email}`}
          className="break-all py-3 text-sm font-bold text-accent-ink transition-colors hover:text-accent-deep"
        >
          {profile.contacts.email}
        </a>
        {projects.map((p) =>
          p.appStore ? (
            <ArrowLink key={p.id} href={p.appStore}>
              {p.name} sur l’App Store
            </ArrowLink>
          ) : null,
        )}
        <ArrowLink href={profile.contacts.github}>GitHub</ArrowLink>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-1 self-stretch border-t border-line-soft pt-1">
        <p className="text-[13px] text-label">{profile.colophon}</p>
        <a
          href="#top"
          className="py-3 text-[13px] text-label transition-colors hover:text-ink"
        >
          Retour en haut ↑
        </a>
      </div>
    </section>
  );
}
