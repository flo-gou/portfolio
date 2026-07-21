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
  /** Masque la status bar recréée (heure/batterie). À activer quand l'écran est
      une VRAIE capture d'app, qui n'a pas de status bar iOS à recouvrir. */
  hideStatusBar?: boolean;
};

/** Cadre de téléphone réaliste et léger. Le contenu est un écran d'app recréé. */
export function PhoneFrame({
  children,
  screenBg = "#ffffff",
  chrome = "#221f1b",
  className = "",
  style,
  time = "9:41",
  hideStatusBar = false,
}: PhoneFrameProps) {
  return (
    <div
      className={`relative aspect-[9/19.3] w-full select-none rounded-[2.6rem] bg-[#0c0b0a] p-[0.5rem] shadow-[0_2px_2px_rgba(0,0,0,0.3),0_30px_60px_-20px_rgba(0,0,0,0.55)] ring-1 ring-white/10 ${className}`}
      style={style}
    >
      {/* Écran */}
      <div
        className="relative h-full w-full overflow-hidden rounded-[2.15rem]"
        style={{ background: screenBg }}
      >
        {/* Status bar */}
        {!hideStatusBar ? (
        <div
          className="absolute inset-x-0 top-0 z-20 flex h-[6.5%] items-center justify-between px-6 text-[0.62rem] font-semibold"
          style={{ color: chrome }}
        >
          <span className="font-mono tracking-tight">{time}</span>
          <span className="flex items-center gap-1.5" aria-hidden>
            {/* réseau */}
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
            {/* batterie */}
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
        ) : null}

        {/* Dynamic island — masqué pour les vraies captures (leur contenu monte
            jusqu'en haut, l'îlot chevaucherait le titre de l'app). */}
        {!hideStatusBar ? (
          <div className="absolute left-1/2 top-[1.6%] z-30 h-[3.4%] w-[32%] -translate-x-1/2 rounded-full bg-[#0c0b0a]" />
        ) : null}

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
