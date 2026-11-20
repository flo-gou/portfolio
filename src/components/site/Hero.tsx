import { profile } from "@/lib/content";

/** Bandeau sombre — le seul aplat plein de la page : la promesse, puis le
    métier en deux paragraphes. Aucun lien ici ; l'action vit dans la colonne
    profil, les side projects dans leur section. */
export function Hero() {
  return (
    <section className="flex flex-col gap-[18px] rounded-[14px] bg-ink px-6 py-9 text-white sm:px-8">
      <h1 className="text-balance text-[clamp(2.375rem,4.4vw,3.75rem)] font-extrabold leading-[1.02] tracking-[-0.035em]">
        {profile.headline[0]}{" "}
        <span className="text-accent-light">{profile.headline[1]}</span>
      </h1>
      <p className="max-w-[62ch] text-pretty text-[19px] leading-normal">
        {profile.subhead}
      </p>
      <p className="max-w-[68ch] text-pretty text-[15px] leading-[1.6] text-on-ink">
        {profile.bio}
      </p>
    </section>
  );
}
