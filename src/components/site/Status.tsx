import { ArrowUpRight } from "lucide-react";

/** Pastille de statut — le code « état » du site. Point plein vert : en ligne
    ou ouvert. Point creux gris : hors ligne. La forme change avec la couleur,
    pour rester lisible sans elle. Cliquable seulement s'il y a où aller. */
export function Status({
  label,
  href,
  live = true,
  onTint = false,
}: {
  label: string;
  href?: string;
  live?: boolean;
  /** Posée sur un bandeau teinté : fond blanc plutôt que vert pâle. */
  onTint?: boolean;
}) {
  const shell = `inline-flex items-center gap-[7px] rounded-full pl-[11px] pr-[13px] text-[13px] font-bold ${
    live ? "text-ok-ink" : "text-muted"
  } ${onTint || !live ? "bg-surface" : "bg-ok-tint"}`;
  const dot = (
    <span
      aria-hidden
      className={`size-2 rounded-full ${live ? "bg-ok" : "border-2 border-off"}`}
    />
  );

  if (!href) {
    return (
      <span className={`${shell} py-1`}>
        {dot}
        {label}
      </span>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${shell} py-[11px] transition-opacity hover:opacity-75`}
    >
      {dot}
      {label}
      <ArrowUpRight size={13} strokeWidth={2.2} aria-hidden />
    </a>
  );
}
