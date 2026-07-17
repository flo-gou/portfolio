/* Contenu du portfolio — source unique de vérité.
   Volontairement non technique : on parle produit, design et impact,
   jamais code, stack ou chiffres d'implémentation. */

export const profile = {
  name: "Florian Gouesse",
  title: "Designer produit & créateur d'apps",
  location: "France",
  tagline: "Je conçois et je mets en ligne des applications mobiles entières. En solo.",
  intro:
    "Designer orienté produit. Je pars d'une idée et je vais jusqu'au store — je pense d'abord à la personne qui utilise l'app, je soigne autant l'identité visuelle que les mots, et je m'occupe de tout : le concept, le design, la mise en ligne.",
  method: [
    {
      k: "01",
      label: "Cadrer d'abord",
      body: "Chaque produit commence par des questions : à qui il sert, ce qu'il résout, ce qu'on garde et ce qu'on coupe. Rien ne démarre avant que ce soit clair.",
    },
    {
      k: "02",
      label: "Le parcours avant tout",
      body: "Je raisonne du point de vue de la personne — de la première ouverture au moment où l'app devient un réflexe. L'expérience passe avant les fonctionnalités.",
    },
    {
      k: "03",
      label: "Une identité par produit",
      body: "Chaque app reçoit son monde : couleurs, typographie, ton, jusqu'au moindre écran. La cohérence n'est pas négociable.",
    },
    {
      k: "04",
      label: "Mettre en ligne",
      body: "Un produit qui n'est pas accessible n'existe pas. Je vais jusqu'au bout : les stores, un site, un nom de domaine.",
    },
  ],
  skills: [
    "Design produit",
    "UX / UI",
    "Direction artistique & identité",
    "Copywriting & voix de marque",
    "Design systems",
    "Priorisation produit",
    "Mise en ligne (stores)",
  ],
  tools: ["Claude Code", "Supabase", "Cloudflare"],
  toolsNote:
    "Je conçois mes apps et je les mets en ligne moi-même, en m'appuyant sur des outils modernes comme Claude Code, Supabase et Cloudflare.",
  contacts: {
    email: "flo.gouesse@gmail.com",
    linkedin: "https://www.linkedin.com/in/floriangouesse" as string,
    github: "https://github.com/flo-gou" as string,
    bandee: "https://join-bandee.com",
  },
} as const;

export type ProjectFeature = { title: string; body: string };

export const briquera = {
  id: "briquera",
  name: "Briquera",
  world: "Atelier",
  tagline: "Tes chantiers, sans mauvaise surprise.",
  category: "App mobile · Budget de rénovation",
  status: "Prêt pour l'App Store",
  summary:
    "Briquera aide ceux qui rénovent à piloter le budget de leur chantier, du premier devis à la dernière facture, sans tableur. On crée ses pièces et ses postes, on ajoute ses achats, et on voit en temps réel où part chaque euro.",
  problem:
    "Le budget d'une rénovation s'éparpille entre devis, tickets et factures. On finit par bricoler un tableur, puis on abandonne le suivi — et on découvre les dépassements trop tard.",
  approach:
    "Un suivi clair, pièce par pièce et poste par poste, où un achat prévu devient une dépense réelle en un geste. On dédramatise l'argent, sans jamais culpabiliser.",
  features: [
    {
      title: "Le budget en temps réel",
      body: "Où part chaque euro, pièce par pièce et poste par poste — d'un coup d'œil, sans jamais ouvrir un tableur.",
    },
    {
      title: "Le scan de tickets",
      body: "On photographie un ticket de caisse, et les articles s'ajoutent tout seuls au budget.",
    },
    {
      title: "Tout au même endroit",
      body: "Achats, devis, factures, planning et partage à plusieurs : le chantier entier dans une seule app.",
    },
  ] as ProjectFeature[],
  role: [
    "L'idée, le concept produit et le parcours, de bout en bout.",
    "L'identité visuelle « Atelier » et tous les écrans de l'app.",
    "La marque, le ton, la fiche App Store — et la mise en ligne.",
  ],
  links: [] as { label: string; url: string }[],
  icon: "/brand/briquera-icon.png",
} as const;

export const bandee = {
  id: "bandee",
  name: "Bandee",
  world: "Golden hour",
  tagline: "Tes plans entre amis, du premier oui au dernier compte.",
  category: "App mobile · Organisation d'événements",
  status: "Bêta · Site en ligne",
  summary:
    "Bandee centralise toute l'organisation d'un week-end ou d'un voyage entre amis. Elle remplace le patchwork de sondages, de tableurs de comptes et de fils de discussion par un seul endroit qui suit l'événement, du premier « oui » au dernier compte réglé.",
  problem:
    "Organiser un séjour à plusieurs, c'est jongler entre un sondage pour la date, un outil pour les dépenses, un fil de messages et des notes éparses. Rien n'est relié, personne ne sait « où on en est ».",
  approach:
    "Un parcours unique guidé par les étapes de l'événement : décider la date, préparer le programme, vivre le jour J, régler les comptes. Pas de compte à créer : un prénom, un code, et c'est parti.",
  features: [
    {
      title: "Choisir la date ensemble",
      body: "Chacun dit quand il peut, la meilleure date ressort toute seule — fini les échanges de messages sans fin.",
    },
    {
      title: "Un programme partagé",
      body: "Le séjour se construit à plusieurs : activités, restos, trajets, réunis sur une même timeline.",
    },
    {
      title: "Les comptes réglés sans prise de tête",
      body: "Chacun note ses dépenses, l'app dit qui doit combien à qui. Zéro tableur, zéro tension à la fin.",
    },
  ] as ProjectFeature[],
  role: [
    "Le concept produit, le parcours et les priorités.",
    "La direction artistique « Golden hour », l'identité et tous les écrans.",
    "Le copywriting, la voix de marque, et la mise en ligne (site + bêta).",
  ],
  links: [
    { label: "Voir le site", url: "https://join-bandee.com" },
  ] as { label: string; url: string }[],
  icon: "/brand/bandee-icon.png",
} as const;

export const projects = [briquera, bandee] as const;

export const nav = [
  { href: "#apropos", label: "À propos" },
  { href: "#projets", label: "Projets" },
  { href: "#contact", label: "Contact" },
] as const;
