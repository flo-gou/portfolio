import {
  Sparkle,
  MapPin,
  ArrowRight,
  CalendarDays,
  Wallet,
  MessageCircle,
  ListChecks,
} from "lucide-react";

const participants = [
  { initiale: "L", bg: "#ff6b4a" }, // coral
  { initiale: "T", bg: "#7c5cbf" }, // violet
  { initiale: "M", bg: "#ffb25e" }, // amber
  { initiale: "H", bg: "#2e9e6b" }, // green
  { initiale: "I", bg: "#33203b" }, // plum
];

export default function BandeeHome() {
  return (
    <div className="relative flex h-full w-full flex-col gap-3 overflow-hidden bg-band-cream px-4 pb-3 pt-[9%] font-outfit">
      {/* 1) Cover masthead */}
      <div
        className="relative overflow-hidden rounded-3xl px-4 pb-4 pt-4"
        style={{
          background: "linear-gradient(140deg, #33203b 0%, #7c5cbf 100%)",
          boxShadow: "0 16px 32px -14px rgba(51,32,59,0.55)",
        }}
      >
        <Sparkle
          size={54}
          className="pointer-events-none absolute -right-3 -top-3 text-band-amber/25"
        />
        <div className="relative flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-semibold text-white ring-1 ring-white/20 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-band-amber" />
            Préparation
          </span>
          <Sparkle size={16} className="text-white/70" />
        </div>

        <h1 className="relative mt-3 font-outfit text-lg font-extrabold leading-tight text-white">
          Week-end à Biarritz
        </h1>
        <div className="relative mt-1 flex items-center gap-2 text-white/70">
          <span className="font-mono text-[11px]">12 – 14 sept.</span>
          <span className="opacity-40">·</span>
          <span className="inline-flex items-center gap-1 text-[11px]">
            <MapPin size={12} />
            Pays basque
          </span>
        </div>
      </div>

      {/* 2) Rangée d'avatars participants */}
      <div className="flex items-center px-0.5">
        <div className="flex">
          {participants.map((p, i) => (
            <div
              key={p.initiale}
              className="flex h-8 w-8 items-center justify-center rounded-full text-[11px] font-semibold text-white ring-2 ring-band-cream"
              style={{ backgroundColor: p.bg, marginLeft: i === 0 ? 0 : -8 }}
            >
              {p.initiale}
            </div>
          ))}
          <div
            className="flex h-8 w-8 items-center justify-center rounded-full bg-band-cream-2 text-[10px] font-bold text-band-plum ring-2 ring-band-cream"
            style={{ marginLeft: -8 }}
          >
            +3
          </div>
        </div>
        <span className="ml-auto text-[11px] font-medium text-band-plum/60">
          Toi + 7 amis
        </span>
      </div>

      {/* 3) Carte "prochaine action" — CTA principal (unique gradient sunset) */}
      <div
        className="bandee-sunset flex items-center gap-3 rounded-2xl px-4 py-3.5"
        style={{ boxShadow: "0 14px 28px -12px rgba(255,107,74,0.6)" }}
      >
        <div className="min-w-0">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-white/85">
            Prochaine étape
          </p>
          <p className="mt-0.5 font-outfit text-[15px] font-semibold text-white">
            Vote pour la date
          </p>
          <p className="mt-0.5 text-[10px] text-white/80">
            3 propositions · se termine dans 2 j
          </p>
        </div>
        <div className="ml-auto grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/20">
          <ArrowRight size={18} className="text-white" />
        </div>
      </div>

      {/* 4) Grille 2x2 de tuiles */}
      <div className="grid grid-cols-2 gap-3">
        {/* Programme */}
        <div
          className="rounded-2xl bg-white p-3"
          style={{ boxShadow: "0 10px 24px -14px rgba(51,32,59,0.28)" }}
        >
          <div
            className="grid h-9 w-9 place-items-center rounded-xl"
            style={{ background: "rgba(124,92,191,0.14)" }}
          >
            <CalendarDays size={16} className="text-band-violet" />
          </div>
          <p className="mt-2.5 font-outfit text-[13px] font-semibold text-band-plum">
            Programme
          </p>
          <p className="text-[10px] text-band-plum/55">4 activités</p>
        </div>

        {/* Budget */}
        <div
          className="rounded-2xl bg-white p-3"
          style={{ boxShadow: "0 10px 24px -14px rgba(51,32,59,0.28)" }}
        >
          <div
            className="grid h-9 w-9 place-items-center rounded-xl"
            style={{ background: "rgba(46,158,107,0.14)" }}
          >
            <Wallet size={16} className="text-band-green" />
          </div>
          <p className="mt-2.5 font-outfit text-[13px] font-semibold text-band-plum">
            Budget
          </p>
          <p className="text-[10px] text-band-plum/55">3 dépenses</p>
        </div>

        {/* Messages */}
        <div
          className="relative rounded-2xl bg-white p-3"
          style={{ boxShadow: "0 10px 24px -14px rgba(51,32,59,0.28)" }}
        >
          <span className="absolute right-2.5 top-2.5 grid h-5 min-w-[20px] place-items-center rounded-full bg-band-coral px-1 text-[10px] font-bold text-white">
            5
          </span>
          <div
            className="grid h-9 w-9 place-items-center rounded-xl"
            style={{ background: "rgba(255,107,74,0.14)" }}
          >
            <MessageCircle size={16} className="text-band-coral" />
          </div>
          <p className="mt-2.5 font-outfit text-[13px] font-semibold text-band-plum">
            Messages
          </p>
          <p className="text-[10px] text-band-plum/55">Fil du groupe</p>
        </div>

        {/* Listes */}
        <div
          className="rounded-2xl bg-white p-3"
          style={{ boxShadow: "0 10px 24px -14px rgba(51,32,59,0.28)" }}
        >
          <div
            className="grid h-9 w-9 place-items-center rounded-xl"
            style={{ background: "rgba(255,178,94,0.20)" }}
          >
            <ListChecks size={16} style={{ color: "#c47f1a" }} />
          </div>
          <p className="mt-2.5 font-outfit text-[13px] font-semibold text-band-plum">
            Listes
          </p>
          <p className="text-[10px] text-band-plum/55">Qui apporte quoi</p>
        </div>
      </div>
    </div>
  );
}
