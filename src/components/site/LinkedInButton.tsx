import { ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/content";

/** L'unique bouton plein du site : il n'y a qu'une action à faire. */
export function LinkedInButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={profile.contacts.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-[10px] bg-accent px-4.5 py-3.5 text-[15px] font-bold leading-tight text-white transition-colors hover:bg-accent-ink ${className}`}
    >
      Me contacter sur LinkedIn
      <ArrowUpRight size={16} strokeWidth={2.2} aria-hidden />
    </a>
  );
}
