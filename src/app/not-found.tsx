import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page introuvable — Florian Gouesse",
};

/** 404 — le site tient sur une page : on y renvoie, sans détour. */
export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-[560px] flex-col items-start justify-center gap-4 px-6 py-14">
      <h1 className="text-balance text-[28px] font-extrabold leading-[1.12] tracking-[-0.03em]">
        Cette page n’existe pas.
      </h1>
      <p className="text-base text-muted">
        L’adresse a changé, ou n’a jamais existé. Tout le site tient sur une
        seule page.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center rounded-[10px] bg-accent px-4.5 py-3.5 text-[15px] font-bold leading-tight text-white transition-colors hover:bg-accent-ink"
      >
        Retour à l’accueil
      </Link>
    </main>
  );
}
