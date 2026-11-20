import { ArrowUpRight } from "lucide-react";

/** Lien sortant en texte : accent + flèche. Le seul code « lien » du site. */
export function ArrowLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 py-3 text-sm font-bold text-accent-ink transition-colors hover:text-accent-deep"
    >
      {children}
      <ArrowUpRight size={14} strokeWidth={2.2} aria-hidden />
    </a>
  );
}
