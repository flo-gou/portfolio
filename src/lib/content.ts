/* Contenu du portfolio — source unique de vérité.
   Grammaire « fiche d'outil B2B » : tout est clé → valeur. On parle produit —
   cadrer, arbitrer, livrer — jamais jargon ni survente. Aucun chiffre mis en
   vedette : ils vivent dans la phrase, à taille de texte. */

export const profile = {
  name: "Florian Gouesse",
  initials: "FG",
  role: "Senior Product Manager",
  location: "Île-de-France",
  status: "Ouvert aux opportunités",
  headline: ["Cadrer, arbitrer,", "livrer."], // l'accent porte sur le 2e fragment
  subhead:
    "Senior product manager, 7 ans à transformer des problèmes clients en produits B2B mesurables — de la startup au grand groupe, de la discovery à l'impact business.",
  bio: "Je pars d'un problème réel, je tranche ce que le produit fait et surtout ce qu'il ne fait pas — puis je le mène jusqu'en ligne. Trois leviers pour y arriver : le design pour rendre chaque arbitrage visible, la data pour le mesurer, l'IA pour livrer plus vite.",
  /** Fiche profil — une valeur simple, ou une liste rendue en étiquettes. */
  facts: [
    { label: "Expérience", value: "7 ans" },
    { label: "Terrain", value: ["B2B", "SaaS", "Marque blanche"] },
    { label: "Leviers", value: ["Design", "Data", "IA"] },
    { label: "Localisation", value: "Île-de-France" },
    { label: "Recherche", value: "Senior product manager en B2B SaaS" },
  ] as { label: string; value: string | string[] }[],
  closing: {
    title: "Senior product manager en B2B SaaS, ouvert aux opportunités.",
    body: "Les apps sont juste au-dessus ; le reste du parcours est sur LinkedIn.",
  },
  colophon: "Ce site aussi — conçu, écrit et mis en ligne par mes soins. 2026.",
  contacts: {
    email: "flo.gouesse@gmail.com",
    linkedin: "https://www.linkedin.com/in/floriangouesse",
    github: "https://github.com/flo-gou",
  },
} as const;

/** Parcours — le CV concis. Une ligne par entreprise : poste, période, ce qui
    y a été livré. Source : CV (juin 2026). Aucun fait qui n'y figure pas. */
export const parcours = {
  title: "Parcours",
  lead: "Sept ans sur des plateformes B2B et SaaS en marque blanche. Le même métier, à une autre échelle.",
  linkLabel: "Le détail sur LinkedIn",
  columns: ["Entreprise", "Poste", "Période", "Ce que j'y ai livré"],
  rows: [
    {
      company: "Carglass",
      sector: "Vitrage automobile",
      role: "Product Manager",
      via: "via Thiga, puis en CDI",
      period: "2023 – aujourd'hui",
      delivered: [
        "Un espace client lancé de zéro et tenu depuis : 40 000 utilisateurs actifs mensuels, +2,7 pts de rétention.",
        "Des canaux chat et WhatsApp où l'IA et les conseillers se passent la main : 70 000 conversations par an.",
        "Un dashboard de parcours en marque blanche, déployé chez trois assureurs partenaires.",
      ],
    },
    {
      company: "Leroy Merlin",
      sector: "Groupe ADEO",
      role: "Product Manager",
      via: "via Thiga",
      period: "2022 – 2023",
      delivered: [
        "La plateforme B2B transverse du groupe et son design system. Une équipe core et cinq équipes dédiées, environ 80 personnes alignées.",
      ],
    },
    {
      company: "Padam Mobility",
      sector: "Transport à la demande",
      role: "Product Manager",
      period: "2021 – 2022",
      delivered: [
        "Un produit en marque blanche pour passagers, conducteurs et administrateurs.",
        "Deux marchés ouverts, Canada et Royaume-Uni, et un pricing modulable par client : 7 contrats remportés au Royaume-Uni.",
      ],
    },
    {
      company: "Safran Landing Systems",
      sector: "Systèmes d'atterrissage",
      role: "Product Owner",
      period: "2019 – 2020",
      delivered: [
        "Le portail B2B de services clients pour compagnies aériennes et ateliers de maintenance : backlog, conduite du changement.",
      ],
    },
  ] as {
    company: string;
    sector: string;
    role: string;
    via?: string;
    period: string;
    delivered: string[];
  }[],
} as const;

/** Side projects — la section qui les introduit, pour qu'ils n'arrivent pas
    sans transition après le parcours salarié. */
export const sideProjects = {
  title: "Side projects",
  lead: "À côté du poste, je conçois et j'expédie des apps mobiles grand public, seul, de l'idée au store. Le même métier à chaque projet : décider. Deux besoins réels, deux produits menés jusqu'en ligne.",
  facts: [
    {
      label: "Pourquoi",
      value: "Garder la main sur tout le cycle : cadrer, designer, livrer.",
    },
    {
      label: "Comment",
      value:
        "Produit et design à la main, code piloté avec Claude Code, mise en ligne comprise.",
    },
    {
      label: "Lecture",
      value:
        "Chaque fiche suit la même trame : problème, décision, hors périmètre, appris.",
    },
  ],
} as const;

export type Project = {
  id: string;
  name: string;
  category: string;
  status: string;
  /** Fiche App Store — absente quand l'app n'est plus distribuée : la pastille
      de statut passe alors en « hors ligne » et aucun lien n'est proposé. */
  appStore?: string;
  promise: string;
  problem: string;
  /** La décision produit clé — la seule ligne teintée de la fiche. */
  decision: string;
  /** Ce qui a été volontairement écarté — signal de priorisation. */
  ecarte: string;
  /** Ce que j'ai appris — un vrai fait, ou null (ligne masquée). */
  learned: string | null;
  role: string;
  links?: { label: string; url: string }[];
  shots: { src: string; alt: string }[];
  caption: string;
  icon: string;
  /** La couleur de l'app : fond du bandeau et de la décision, encre du libellé
      (≥ 4.5:1 sur la teinte). */
  theme: { tint: string; ink: string };
};

const bandeeAppStore =
  "https://apps.apple.com/fr/app/bandee-voyages-entre-amis/id6791328278";

export const bandee: Project = {
  id: "bandee",
  name: "Bandee",
  category: "App mobile · Organisation d'événements entre amis",
  status: "Sur l'App Store",
  appStore: bandeeAppStore,
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
    { label: "Télécharger sur l'App Store", url: bandeeAppStore },
    { label: "Voir le site", url: "https://join-bandee.com" },
  ],
  shots: [
    { src: "/mockups/bandee/dates.png", alt: "Sondage de dates dans Bandee" },
    {
      src: "/mockups/bandee/event-hub.png",
      alt: "Accueil d'un événement Bandee",
    },
  ],
  caption:
    "On cale la date : chacun coche ses dispos, la meilleure ressort. Puis l'événement en un endroit : vote, budget, programme, comptes.",
  icon: "/brand/bandee-icon.png",
  theme: { tint: "#fde9e3", ink: "#b23c1c" },
};

export const briquera: Project = {
  id: "briquera",
  name: "Briquera",
  category: "App mobile · Budget de rénovation",
  // Briquera n'est plus distribuée : pas de fiche App Store, pas de lien.
  status: "Retirée de l'App Store",
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
  shots: [
    {
      src: "/mockups/briquera/stats.png",
      alt: "Répartition du budget de Briquera par pièce",
    },
    {
      src: "/mockups/briquera/accueil.png",
      alt: "Accueil du chantier dans Briquera",
    },
  ],
  caption:
    "Où part l'argent, pièce par pièce — et le chantier en un écran : engagé, restant, priorités.",
  icon: "/brand/briquera-icon.png",
  theme: { tint: "#fbebe4", ink: "#a3431d" },
};

/** Ordre d'affichage : Bandee d'abord. */
export const projects = [bandee, briquera];
