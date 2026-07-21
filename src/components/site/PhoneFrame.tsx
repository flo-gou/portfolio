import type { CSSProperties, ReactNode } from "react";

type PhoneFrameProps = {
  children: ReactNode;
  /** Couleur d'écran par défaut (derrière le contenu). */
  screenBg?: string;
  /** Couleur des éléments de la status bar (heure, batterie). */
  chrome?: string;
  className?: string;
  style?: CSSProperties;
  time?: string;
  /** true quand `children` est une VRAIE capture d'app : layout en flux (jamais
      croppé), status bar + îlot iOS dessinés sur une bande couleur d'app. */
  captured?: boolean;
};

/** Réseau · wifi · batterie — dimensionnés en cqw (relatifs à la largeur de l'écran). */
function StatusIcons() {
  return (
    <span className="flex items-center gap-[1.6cqw]" aria-hidden>
      <svg className="h-auto w-[4.6cqw]" viewBox="0 0 18 12" fill="none">
        {[0, 1, 2, 3].map((i) => (
          <rect
            key={i}
            x={i * 4.6}
            y={9 - i * 3}
            width="3"
            height={3 + i * 3}
            rx="0.6"
            fill="currentColor"
          />
        ))}
      </svg>
      <svg className="h-auto w-[4.8cqw]" viewBox="0 0 16 12" fill="currentColor">
        <path d="M8 9.4a1.3 1.3 0 1 0 0 2.6 1.3 1.3 0 0 0 0-2.6Zm0-3.1c1.2 0 2.3.46 3.14 1.2l1.2-1.34A6.6 6.6 0 0 0 8 3.6a6.6 6.6 0 0 0-4.34 1.75l1.2 1.35A4.7 4.7 0 0 1 8 6.3Zm0-3.2c2 0 3.84.74 5.24 1.96l1.2-1.35A8.9 8.9 0 0 0 8 .7a8.9 8.9 0 0 0-6.44 2.81l1.2 1.35A7 7 0 0 1 8 3.1Z" />
      </svg>
      <svg className="h-auto w-[6.6cqw]" viewBox="0 0 26 12" fill="none">
        <rect x="0.5" y="0.5" width="22" height="11" rx="3" stroke="currentColor" opacity="0.5" />
        <rect x="2.5" y="2.5" width="16" height="7" rx="1.5" fill="currentColor" />
        <rect x="24" y="4" width="2" height="4" rx="1" fill="currentColor" />
      </svg>
    </span>
  );
}

/** Cadre de téléphone réaliste et léger. */
export function PhoneFrame({
  children,
  screenBg = "#ffffff",
  chrome = "#221f1b",
  className = "",
  style,
  time = "9:41",
  captured = false,
}: PhoneFrameProps) {
  const shell =
    "relative w-full select-none rounded-[2.6rem] bg-[#0c0b0a] p-[0.5rem] shadow-[0_2px_2px_rgba(0,0,0,0.3),0_30px_60px_-20px_rgba(0,0,0,0.55)] ring-1 ring-white/10";

  // --- Mode capture : la vraie capture d'app, en flux, avec chrome iOS ---
  if (captured) {
    return (
      <div className={`${shell} ${className}`} style={style}>
        <div
          className="relative flex flex-col overflow-hidden rounded-[2.15rem] [container-type:inline-size]"
          style={{ background: screenBg }}
        >
          {/* Status bar (heure + réseau/wifi/batterie), sur une bande couleur d'app */}
          <div
            className="relative z-20 flex h-[12cqw] items-center justify-between px-[7cqw] text-[3.6cqw] font-semibold"
            style={{ color: chrome }}
          >
            <span className="font-mono tracking-tight">{time}</span>
            <StatusIcons />
          </div>

          {/* Dynamic island */}
          <div className="absolute left-1/2 top-[2.6cqw] z-30 h-[6.4cqw] w-[30cqw] -translate-x-1/2 rounded-full bg-[#0c0b0a]" />

          {/* La capture, à sa taille naturelle — jamais croppée */}
          <div className="relative w-full">{children}</div>

          {/* Home indicator */}
          <div className="flex justify-center py-[2.4cqw]">
            <div
              className="h-[1cqw] w-[30%] rounded-full"
              style={{ background: chrome, opacity: 0.35 }}
            />
          </div>
        </div>
      </div>
    );
  }

  // --- Mode par défaut : écran recréé (mockup), status bar en overlay ---
  return (
    <div className={`${shell} aspect-[9/19.3] ${className}`} style={style}>
      <div
        className="relative h-full w-full overflow-hidden rounded-[2.15rem]"
        style={{ background: screenBg }}
      >
        {/* Status bar */}
        <div
          className="absolute inset-x-0 top-0 z-20 flex h-[6.5%] items-center justify-between px-6 text-[0.62rem] font-semibold"
          style={{ color: chrome }}
        >
          <span className="font-mono tracking-tight">{time}</span>
          <span className="flex items-center gap-1.5" aria-hidden>
            <svg width="15" height="9" viewBox="0 0 18 12" fill="none">
              {[0, 1, 2, 3].map((i) => (
                <rect
                  key={i}
                  x={i * 4.6}
                  y={9 - i * 3}
                  width="3"
                  height={3 + i * 3}
                  rx="0.6"
                  fill="currentColor"
                />
              ))}
            </svg>
            <svg width="18" height="9" viewBox="0 0 26 12" fill="none">
              <rect
                x="0.5"
                y="0.5"
                width="22"
                height="11"
                rx="3"
                stroke="currentColor"
                opacity="0.5"
              />
              <rect x="2.5" y="2.5" width="15" height="7" rx="1.5" fill="currentColor" />
              <rect x="24" y="4" width="2" height="4" rx="1" fill="currentColor" />
            </svg>
          </span>
        </div>

        {/* Dynamic island */}
        <div className="absolute left-1/2 top-[1.6%] z-30 h-[3.4%] w-[32%] -translate-x-1/2 rounded-full bg-[#0c0b0a]" />

        {/* Contenu de l'écran */}
        <div className="absolute inset-0">{children}</div>

        {/* Home indicator */}
        <div
          className="absolute bottom-[0.9%] left-1/2 z-30 h-[0.5%] w-[30%] -translate-x-1/2 rounded-full"
          style={{ background: chrome, opacity: 0.35 }}
        />
      </div>
    </div>
  );
}
