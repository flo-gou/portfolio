import type { ReactNode } from "react";

/** Eyebrow mono — petit label de section. */
export function Eyebrow({
  children,
  className = "",
  dot,
}: {
  children: ReactNode;
  className?: string;
  dot?: string;
}) {
  return (
    <span className={`eyebrow inline-flex items-center gap-2 ${className}`}>
      {dot ? (
        <span
          aria-hidden
          className="inline-block h-1.5 w-1.5 rounded-full"
          style={{ background: dot }}
        />
      ) : null}
      {children}
    </span>
  );
}
