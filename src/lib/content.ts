/* Contenu du portfolio — source unique de vérité.
   Refonte « Garder / Écarter » : synthétique, orientée CPO / Head of Product,
   le design en second métier. On parle produit — cadrer, arbitrer, livrer —
   jamais jargon, chiffres d'implémentation ni survente. */

export const profile = {
  name: "Florian Gouesse",
  role: "Senior Product Manager",
  location: "Île-de-France",
  // Manifeste (ex-hero)
  headline: ["Cadrer, arbitrer,", "livrer."], // l'accent miel porte sur le 2e fragment
  subhead:
    "Senior product manager, 7 ans à transformer des problèmes clients en produits B2B mesurables. À côté, je conçois et j'expédie des apps mobiles grand public — de l'idée au store. Deux à ouvrir aujourd'hui.",
  bio: "Je pars d'un problème réel, je tranche ce que le produit fait et surtout ce qu'il ne fait pas — puis je le mène jusqu'en ligne. Le design est mon second métier : il rend chaque arbitrage visible et tenu.",
  // Ce que je cherche — le lecteur ne doit pas avoir à le deviner. Les
  // entreprises repères, elles, ancrent le bloc « En entreprise ».
  looking: "Je cherche un poste de senior product manager en B2B SaaS.",
  // Liaison — remplace toute la section « À propos »
  liaison:
    "Le même métier à chaque projet : décider. Deux besoins réels, deux produits menés jusqu'en ligne.",
  // Clôture
  closing:
    "Senior product manager en B2B SaaS, ouvert aux opportunités. La meilleure façon de me juger : ouvrir les apps.",
  colophon:
    "Ce site aussi — conçu, écrit et mis en ligne par mes soins. « Lin & miel », 2026.",
  contacts: {
    email: "flo.gouesse@gmail.com",
    linkedin: "https://www.linkedin.com/in/floriangouesse" as string,
    github: "https://github.com/flo-gou" as string,
    bandee: "https://join-bandee.com",
  },
} as const;

/** En entreprise — le track record salarié, en quatre faits vérifiables.
    Même grammaire que les études de cas : un résultat, la décision derrière.
    Source : CV (Carglass, ADEO, Padam). Aucun chiffre qui n'y figure pas. */
export const track = {
  label: "En entreprise",
  lead: "Sept ans sur des plateformes B2B et SaaS en marque blanche. Le même métier, à une autre échelle.",
  items: [
    {
      metric: "0 → 40 000",
      unit: "utilisateurs actifs mensuels",
      body:
        "L'espace client Carglass, lancé de zéro et tenu depuis. +2,7 pts de rétention.",
    },
    {
      metric: "70 000",
      unit: "conversations par an",
      body:
        "Des canaux chat et WhatsApp où l'IA et les conseillers se passent la main, en production.",
    },
    {
      metric: "0 → 3",
      unit: "assureurs partenaires",
      body:
        "Un dashboard de parcours en marque blanche, vendu puis déployé chez leurs équipes.",
    },
    {
      metric: "~80",
      unit: "personnes alignées",
      body:
        "Chez Leroy Merlin, une équipe core et cinq équipes dédiées autour d'une seule plateforme B2B.",
    },
  ],
  footnote: "Carglass · Leroy Merlin · Padam · Safran — le parcours en détail",
} as const;

/** Fiches App Store — source unique, réutilisée par la pastille de statut,
    le lien de l'étude de cas et le pied de page. */
const appStore = {
  briquera: "https://apps.apple.com/fr/app/briquera-budget-travaux/id6793282477",
  bandee: "https://apps.apple.com/fr/app/bandee-voyages-entre-amis/id6791328278",
} as const;

export type Shot = { src: string; alt: string; caption: string };

export type Project = {
  id: string;
  index: string;
  name: string;
  world: string;
  category: string;
  status: string;
  statusHref?: string;
  /** Fiche App Store — l'app est en ligne. */
  appStore: string;
  promise: string;
  problem: string;
  /** La décision produit clé — le bloc sobre qui remplace le dispositif barré. */
  decision: string;
  /** Ce qui a été volontairement écarté (sobre, non barré) — signal de priorisation. */
  ecarte: string;
  /** Beat « ce que j'ai appris » — un vrai fait, ou null (masqué) tant qu'il n'est pas confirmé. */
  learned: string | null;
  role: string;
  links?: { label: string; url: string }[];
  shots: Shot[];
  icon: string;
};

export const briquera: Project = {
  id: "briquera",
  index: "01",
  name: "Briquera",
  world: "Atelier",
  category: "App mobile · Budget de rénovation",
  status: "Sur l'App Store",
  statusHref: appStore.briquera,
  appStore: appStore.briquera,
  promise: "Tes chantiers, sans mauvaise surprise.",
  problem:
    "Le budget d'une rénovation s'éparpille entre devis, tickets et factures. On bricole un tableur, on lâche le suivi, on découvre les dépassements trop tard.",
  decision:
    "Le vrai frein, c'est la saisie. On scanne le ticket, la dépense s'ajoute seule — moins d'effort que le tableur qu'on remplace. C'est ce qui fait qu'on continue.",
  ecarte:
    "La gestion de chantier complète, la compta, les devis à signer. Une seule question bien résolue, pas un logiciel de plus.",
  learned:
    "En revoyant le produit, une alerte de dépassement pointait vers un budget global introuvable et non modifiable. Je l'ai retiré : le budget se calcule à partir des pièces — chaque euro se corrige là où il vit.",
  role: "Cadrage, produit, design « Atelier », mise en ligne — de l'idée à l'App Store.",
  links: [{ label: "Télécharger sur l'App Store", url: appStore.briquera }],
  shots: [
    {
      src: "/mockups/briquera/stats.png",
      alt: "Répartition du budget de Briquera par pièce",
      caption: "Où part l'argent, pièce par pièce — et la date où le budget sera atteint.",
    },
    {
      src: "/mockups/briquera/accueil.png",
      alt: "Accueil du chantier dans Briquera",
      caption: "Le chantier en un écran : engagé, restant, priorités.",
    },
  ],
  icon: "/brand/briquera-icon.png",
};

export const bandee: Project = {
  id: "bandee",
  index: "02",
  name: "Bandee",
  world: "Golden hour",
  category: "App mobile · Organisation d'événements entre amis",
  status: "Sur l'App Store",
  statusHref: appStore.bandee,
  appStore: appStore.bandee,
  promise: "Du premier oui au dernier compte réglé.",
  problem:
    "Organiser un week-end à plusieurs, c'est jongler entre un sondage de dates, un tableur de comptes et un fil de messages. Rien n'est relié, personne ne sait où on en est.",
  decision:
    "Pas de compte à créer : un prénom, un code, on entre. Enlever la friction, c'était ça, la fonctionnalité.",
  ecarte:
    "Le compte à créer, le fil social, la réservation — tout ce qui fait qu'un ami sur deux n'installe jamais l'app.",
  learned:
    "J'avais posé un rail de 4 phases en haut de l'événement. En m'en servant, il ne bougeait quasi jamais : il encombrait plus qu'il n'informait. Je l'ai retiré — la teinte et le compteur suffisent à situer où on en est.",
  role: "Concept, parcours, priorités, direction artistique « Golden hour », voix de marque — app et site en ligne.",
  links: [
    { label: "Télécharger sur l'App Store", url: appStore.bandee },
    { label: "Voir le site", url: profile.contacts.bandee },
  ],
  shots: [
    {
      src: "/mockups/bandee/dates.png",
      alt: "Sondage de dates dans Bandee",
      caption: "On cale la date : chacun coche ses dispos, la meilleure ressort.",
    },
    {
      src: "/mockups/bandee/event-hub.png",
      alt: "Accueil d'un événement Bandee",
      caption: "L'événement en un endroit : vote, budget, programme, comptes.",
    },
  ],
  icon: "/brand/bandee-icon.png",
};

export const projects = [briquera, bandee] as const;

export const nav = [
  { href: "#parcours", label: "Parcours" },
  { href: "#projets", label: "Projets" },
  { href: "#contact", label: "Contact" },
] as const;
