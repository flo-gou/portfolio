import { ChevronLeft, Check, CalendarCheck } from "lucide-react";

type Avatar = { initial: string; color: string };

type Slot = {
  range: string;
  yes: number;
  maybe: number;
  no: number;
  score: number;
  leading: boolean;
  extra: number;
  avatars: Avatar[];
};

const slots: Slot[] = [
  {
    range: "Ven 12 – Dim 14 sept.",
    yes: 6,
    maybe: 1,
    no: 1,
    score: 88,
    leading: true,
    extra: 2,
    avatars: [
      { initial: "L", color: "bg-band-coral" },
      { initial: "M", color: "bg-band-violet" },
      { initial: "T", color: "bg-band-amber" },
      { initial: "C", color: "bg-band-green" },
    ],
  },
  {
    range: "Ven 19 – Dim 21 sept.",
    yes: 4,
    maybe: 2,
    no: 2,
    score: 58,
    leading: false,
    extra: 1,
    avatars: [
      { initial: "N", color: "bg-band-plum" },
      { initial: "S", color: "bg-band-coral" },
      { initial: "É", color: "bg-band-amber" },
    ],
  },
  {
    range: "Ven 26 – Dim 28 sept.",
    yes: 3,
    maybe: 1,
    no: 4,
    score: 40,
    leading: false,
    extra: 0,
    avatars: [
      { initial: "J", color: "bg-band-violet" },
      { initial: "R", color: "bg-band-green" },
      { initial: "A", color: "bg-band-coral" },
    ],
  },
];

const cardShadow = "0 8px 24px -12px rgba(51,32,59,0.22)";

export default function BandeeDates() {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden bg-band-cream font-outfit pt-[9%] pb-3">
      {/* En-tête */}
      <header className="px-4 pt-2">
        <button
          type="button"
          className="grid h-8 w-8 place-items-center rounded-full bg-white text-band-plum"
          style={{ boxShadow: "0 4px 12px -6px rgba(51,32,59,0.25)" }}
          aria-label="Retour"
        >
          <ChevronLeft size={18} strokeWidth={2.4} />
        </button>
        <h1 className="mt-3 text-lg font-extrabold leading-tight text-band-plum">
          Quand on part ?
        </h1>
        <p className="mt-0.5 text-[11px] text-band-plum/55">8 amis ont répondu</p>
      </header>

      {/* Liste des créneaux */}
      <div className="mt-3 flex-1 space-y-2.5 overflow-hidden px-4">
        {slots.map((slot) => (
          <div
            key={slot.range}
            className={`rounded-2xl bg-white p-3 ${
              slot.leading ? "ring-2 ring-band-amber" : ""
            }`}
            style={{ boxShadow: cardShadow }}
          >
            {/* Date + badge */}
            <div className="flex items-center justify-between gap-2">
              <span className="font-mono text-[12px] font-medium text-band-plum">
                {slot.range}
              </span>
              {slot.leading && (
                <span className="shrink-0 rounded-full bg-band-amber px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-band-plum">
                  En tête
                </span>
              )}
            </div>

            {/* Barre de score */}
            <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-band-cream-2">
              <div
                className={`h-full rounded-full ${
                  slot.leading ? "bandee-sunset" : "bg-band-amber"
                }`}
                style={{ width: `${slot.score}%` }}
              />
            </div>

            {/* Compte + avatars */}
            <div className="mt-2 flex items-center justify-between gap-2">
              <p className="text-[10px] text-band-plum/60">
                <span className="font-semibold text-band-green">{slot.yes} oui</span>
                {" · "}
                {slot.maybe} peut-être {" · "}
                {slot.no} non
              </p>
              <div className="flex items-center">
                {slot.avatars.map((a, i) => (
                  <span
                    key={a.initial}
                    className={`grid h-6 w-6 place-items-center rounded-full text-[9px] font-bold text-white ring-2 ring-white ${a.color} ${
                      i === 0 ? "" : "-ml-1.5"
                    }`}
                  >
                    {a.initial}
                  </span>
                ))}
                {slot.extra > 0 && (
                  <span className="-ml-1.5 grid h-6 w-6 place-items-center rounded-full bg-band-cream-2 text-[9px] font-bold text-band-plum/60 ring-2 ring-white">
                    +{slot.extra}
                  </span>
                )}
              </div>
            </div>

            {/* Vote segmenté */}
            <div className="mt-2.5 grid grid-cols-3 gap-1">
              <button
                type="button"
                className={`flex items-center justify-center gap-0.5 rounded-lg py-1.5 text-[10px] font-semibold ${
                  slot.leading
                    ? "bg-band-green text-white"
                    : "bg-band-cream-2 text-band-plum/70"
                }`}
              >
                {slot.leading && <Check size={11} strokeWidth={3} />}
                Oui
              </button>
              <button
                type="button"
                className="rounded-lg bg-band-cream-2 py-1.5 text-[10px] font-semibold text-band-plum/70"
              >
                Peut-être
              </button>
              <button
                type="button"
                className="rounded-lg bg-band-cream-2 py-1.5 text-[10px] font-semibold text-band-plum/70"
              >
                Non
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pied : note scrapbook + CTA */}
      <div className="px-4 pt-2">
        <p className="mb-1.5 text-center font-hand text-sm -rotate-2 text-band-coral">
          on y est presque !
        </p>
        <button
          type="button"
          className="bandee-sunset flex w-full items-center justify-center gap-1.5 rounded-2xl py-3 text-[13px] font-semibold text-white"
          style={{ boxShadow: "0 10px 22px -10px rgba(255,107,74,0.65)" }}
        >
          <CalendarCheck size={16} strokeWidth={2.4} />
          Caler cette date
        </button>
        <div className="mx-auto mt-2.5 h-1 w-24 rounded-full bg-band-plum/20" />
      </div>
    </div>
  );
}
