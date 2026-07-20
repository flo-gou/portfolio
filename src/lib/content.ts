/* Contenu du portfolio — source unique de vérité.
   Volontairement non technique : on parle produit, design et impact,
   jamais code, stack ou chiffres d'implémentation. */

export const profile = {
  name: "Florian Gouesse",
  title: "Product Manager & Product Designer",
  location: "France",
  tagline: "Des applications mobiles conçues de bout en bout, sur mon temps libre.",
  intro:
    "Product manager d'abord, product designer ensuite. Sur mon temps libre, je conçois des applications mobiles de bout en bout : cadrage, priorisation, design, mise en ligne. Des projets nés de besoins concrets, menés jusqu'au store.",
  method: [
    {
      k: "01",
      label: "Cadrer et prioriser",
      body: "Chaque projet part d'un besoin réel. Je définis le problème, ce qu'on garde et ce qu'on écarte.",
    },
    {
      k: "02",
      label: "Penser le parcours",
      body: "Je raisonne du point de vue de l'utilisateur, de la première ouverture à l'usage quotidien.",
    },
    {
      k: "03",
      label: "Une identité par produit",
      body: "Chaque application a son univers : couleurs, typographie, ton, jusqu'au moindre écran.",
    },
    {
      k: "04",
      label: "Livrer",
      body: "Un produit se juge en ligne. Je vais jusqu'au store : une application installable et aboutie.",
    },
  ],
  skills: [
    "Product management",
    "Priorisation & roadmap",
    "Product design",
    "UX / UI",
    "Direction artistique & identité",
    "Design systems",
    "Copywriting & voix de marque",
    "Mise en ligne (stores)",
  ],
  tools: ["Claude Code", "Supabase", "Cloudflare"],
  toolsNote:
    "Je conçois et mets en ligne mes applications moi-même, avec Claude Code, Supabase et Cloudflare. Chaque projet est l'occasion d'apprendre.",
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
] as const;
