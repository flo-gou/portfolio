import { SlidersHorizontal, Camera, Plus } from "lucide-react";

export default function BriqueraPurchases() {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden bg-briq-plaster-2 pt-[9%] pb-3 font-archivo">
      {/* En-tête */}
      <header className="flex items-center justify-between px-5 pt-3">
        <h1 className="font-archivo text-lg font-bold text-briq-ink">Achats</h1>
        <button
          className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-briq-navy"
          style={{ boxShadow: "0 4px 12px rgba(27,58,91,0.10)" }}
          aria-label="Filtrer"
        >
          <SlidersHorizontal size={16} strokeWidth={2.2} />
        </button>
      </header>

      {/* Segmented control */}
      <div className="mt-3 px-5">
        <div className="flex rounded-full bg-briq-navy/10 p-1">
          <div
            className="flex-1 rounded-full bg-white py-1.5 text-center text-[11px] font-semibold text-briq-ink"
            style={{ boxShadow: "0 2px 8px rgba(27,58,91,0.12)" }}
          >
            Achetés
          </div>
          <div className="flex-1 rounded-full py-1.5 text-center text-[11px] font-medium text-briq-navy/50">
            À acheter
          </div>
        </div>
      </div>

      {/* Carte scan navy */}
      <div className="mt-3 px-5">
        <div
          className="flex items-center gap-3 rounded-2xl bg-briq-navy px-3.5 py-3"
          style={{ boxShadow: "0 10px 22px rgba(18,41,63,0.28)" }}
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-briq-crayon">
            <Camera size={18} strokeWidth={2.2} className="text-briq-plaster" />
          </div>
          <div className="min-w-0">
            <p className="text-[13px] font-semibold text-briq-plaster">
              Scanner un ticket
            </p>
            <p className="mt-0.5 text-[10px] font-normal leading-tight text-briq-plaster/60">
              Les articles s&apos;ajoutent tout seuls
            </p>
          </div>
        </div>
      </div>

      {/* Liste groupée par pièce */}
      <div className="mt-4 flex-1 space-y-4 overflow-hidden px-5">
        {/* CUISINE */}
        <section>
          <p className="mb-2 font-mono text-[10px] font-medium tracking-[0.14em] text-briq-navy/45">
            CUISINE
          </p>
          <div className="space-y-2">
            <PurchaseRow
              tile="bg-briq-plaster"
              initial="C"
              initialColor="text-briq-navy"
              name="Carrelage"
              store="Leroy Merlin"
              amount="248,90 €"
            />
            <PurchaseRow
              tile="bg-briq-niveau-soft"
              initial="R"
              initialColor="text-briq-niveau"
              name="Mitigeur"
              store="Castorama"
              amount="79,00 €"
            />
          </div>
        </section>

        {/* SALLE DE BAIN */}
        <section>
          <p className="mb-2 font-mono text-[10px] font-medium tracking-[0.14em] text-briq-navy/45">
            SALLE DE BAIN
          </p>
          <div className="space-y-2">
            <PurchaseRow
              tile="bg-briq-plaster"
              initial="P"
              initialColor="text-briq-crayon"
              name="Peinture 10L"
              store="Brico Dépôt"
              amount="54,50 €"
            />
            <PurchaseRow
              tile="bg-briq-plaster-2"
              initial="M"
              initialColor="text-briq-navy"
              name="Miroir LED"
              store="Leroy Merlin"
              amount="129,00 €"
            />
          </div>
        </section>
      </div>

      {/* FAB */}
      <button
        className="absolute bottom-6 right-5 flex h-13 w-13 items-center justify-center rounded-full bg-briq-crayon"
        style={{ height: "52px", width: "52px", boxShadow: "0 10px 20px rgba(217,83,30,0.42)" }}
        aria-label="Ajouter un achat"
      >
        <Plus size={22} strokeWidth={2.6} className="text-briq-plaster" />
      </button>
    </div>
  );
}

function PurchaseRow({
  tile,
  initial,
  initialColor,
  name,
  store,
  amount,
}: {
  tile: string;
  initial: string;
  initialColor: string;
  name: string;
  store: string;
  amount: string;
}) {
  return (
    <div
      className="flex items-center gap-2.5 rounded-xl bg-white px-2.5 py-2.5"
      style={{ boxShadow: "0 6px 14px rgba(27,58,91,0.08)" }}
    >
      <div
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${tile}`}
      >
        <span className={`font-archivo text-[12px] font-bold ${initialColor}`}>
          {initial}
        </span>
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-[12px] font-semibold text-briq-ink">{name}</p>
        <p className="mt-0.5 truncate font-mono text-[9.5px] text-briq-navy/45">
          {store}
        </p>
      </div>
      <div className="flex shrink-0 items-center gap-1.5">
        <span className="font-mono text-[11px] font-medium text-briq-crayon">
          {amount}
        </span>
        <span className="h-2 w-2 shrink-0 rounded-full bg-briq-niveau" />
      </div>
    </div>
  );
}
