import { Camera, ChevronDown, Plus } from "lucide-react";

/** Accueil "hub chantier" de Briquera — écran rendu dans un cadre de téléphone. */
export default function BriqueraHome() {
  const postes: {
    name: string;
    amount: string;
    pct: string;
    bar: string;
    tension?: boolean;
  }[] = [
    { name: "Cuisine", amount: "4 200 €", pct: "84%", bar: "bg-briq-niveau" },
    { name: "Salle de bain", amount: "3 100 €", pct: "77%", bar: "bg-briq-niveau" },
    {
      name: "Électricité",
      amount: "2 980 €",
      pct: "93%",
      bar: "bg-briq-ocre",
      tension: true,
    },
    { name: "Peinture", amount: "2 200 €", pct: "38%", bar: "bg-briq-niveau" },
  ];

  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden bg-briq-plaster-2 px-4 pt-[9%] pb-3 font-archivo">
      {/* 1) En-tête */}
      <header className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-briq-ink/45">
            Chantier
          </p>
          <div className="mt-0.5 flex items-center gap-1.5">
            <h1 className="truncate text-base font-semibold leading-none text-briq-ink">
              Appartement Nation
            </h1>
            <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-briq-ink/10 text-briq-ink/60">
              <ChevronDown size={11} strokeWidth={2.5} />
            </span>
          </div>
        </div>
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-briq-navy text-[11px] font-semibold tracking-wide text-briq-plaster-2">
          FG
        </div>
      </header>

      {/* 2) Carte héro "ardoise" */}
      <div
        className="mt-3.5 rounded-3xl bg-briq-navy-deep p-4"
        style={{ boxShadow: "0 18px 34px -18px rgba(18,41,63,0.7)" }}
      >
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-briq-plaster/55">
          Budget engagé
        </p>
        <div className="mt-1.5 flex items-baseline gap-2">
          <span className="font-mono text-3xl font-semibold leading-none tracking-tight text-briq-plaster tabular-nums">
            12 480 €
          </span>
        </div>
        <p className="mt-1 font-mono text-[11px] text-briq-plaster/50 tabular-nums">
          sur 18 000 €
        </p>

        {/* Barre de progression */}
        <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-briq-plaster/15">
          <div
            className="h-full rounded-full bg-briq-niveau"
            style={{ width: "69%" }}
          />
        </div>

        {/* Ligne du bas */}
        <div className="mt-2.5 flex items-center justify-between gap-2">
          <span className="whitespace-nowrap font-mono text-[11px] text-briq-niveau-soft tabular-nums">
            Reste 5 520 €
          </span>
          <span className="flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full bg-briq-niveau/15 px-2 py-1 text-[9px] font-medium text-briq-niveau-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-briq-niveau" />
            Dans le budget
          </span>
        </div>
      </div>

      {/* 3) Boutons d'action */}
      <div className="mt-3 grid grid-cols-2 gap-2.5">
        <button
          type="button"
          className="flex items-center justify-center gap-1.5 rounded-2xl bg-briq-crayon py-3 text-[11px] font-semibold text-white"
          style={{ boxShadow: "0 12px 22px -12px rgba(217,83,30,0.65)" }}
        >
          <Camera size={15} strokeWidth={2.2} />
          Scanner un ticket
        </button>
        <button
          type="button"
          className="flex items-center justify-center gap-1.5 rounded-2xl bg-white py-3 text-[11px] font-semibold text-briq-ink"
          style={{ boxShadow: "0 6px 18px -8px rgba(122,80,18,0.25)" }}
        >
          <Plus size={15} strokeWidth={2.4} />
          Ajouter un achat
        </button>
      </div>

      {/* 4) Section "Par poste" */}
      <div className="mt-4 flex items-center justify-between">
        <h2 className="text-sm font-semibold text-briq-ink">Par poste</h2>
        <button
          type="button"
          className="font-mono text-[10px] font-medium text-briq-crayon"
        >
          Tout voir
        </button>
      </div>

      <div className="mt-2.5 flex flex-col gap-2">
        {postes.map((p) => (
          <div
            key={p.name}
            className="rounded-2xl bg-white px-3.5 py-2"
            style={{ boxShadow: "0 6px 18px -8px rgba(122,80,18,0.25)" }}
          >
            <div className="flex items-center justify-between gap-3">
              <span className="text-[12px] font-medium text-briq-ink">
                {p.name}
              </span>
              <span className="font-mono text-[11px] font-medium text-briq-ink tabular-nums">
                {p.amount}
              </span>
            </div>
            <div className="mt-1.5 flex items-center gap-2">
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-briq-ink/10">
                <div
                  className={`h-full rounded-full ${p.bar}`}
                  style={{ width: p.pct }}
                />
              </div>
              {p.tension ? (
                <span className="shrink-0 font-mono text-[9px] font-medium uppercase tracking-wide text-briq-ocre">
                  sous tension
                </span>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
