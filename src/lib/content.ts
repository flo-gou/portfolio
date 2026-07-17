/* Contenu du portfolio — source unique de vérité.
   Extrait des projets réels de Florian (Briquera, Bandee) et de son profil.
   Aucune donnée inventée : chiffres et faits proviennent des dépôts. */

export const profile = {
  name: "Florian Gouesse",
  title: "Designer produit & créateur d'apps",
  location: "France",
  tagline: "Je conçois et j'expédie des applications mobiles entières. En solo.",
  intro:
    "Designer orienté produit. Je pense d'abord en parcours utilisateur, je place l'onboarding au-dessus de tout, et je soigne autant l'identité visuelle que le copywriting. Je pars d'une idée et je vais jusqu'au store — design system, écrans, backend, mise en ligne.",
  method: [
    {
      k: "01",
      label: "Cadrer avant de coder",
      body: "Je commence chaque produit en dialogue : questions structurées, décisions tranchées vite et clairement. Le meilleur code est celui qu'on n'écrit pas.",
    },
    {
      k: "02",
      label: "Parcours d'abord",
      body: "Je raisonne en cycle de vie utilisateur — de la première ouverture au moment où l'app devient un réflexe. L'onboarding passe avant les fonctionnalités.",
    },
    {
      k: "03",
      label: "Un design system par produit",
      body: "Chaque app reçoit son monde : palette source-unique, échelle typographique, tokens et règles. La cohérence n'est pas négociable.",
    },
    {
      k: "04",
      label: "Livrer, mesurer, itérer",
      body: "Je gère aussi le déploiement : EAS, TestFlight, sites marketing, domaines, conformité RGPD. Un produit qui n'est pas en ligne n'existe pas.",
    },
  ],
  skills: [
    "Design produit",
    "UX / UI",
    "Direction artistique & identité",
    "Copywriting & voix de marque",
    "Design systems",
    "Priorisation MVP / V1 / V2",
    "Prototypage & shipping mobile",
    "Game design (tycoon)",
  ],
  stack: [
    "Expo",
    "React Native",
    "TypeScript",
    "Expo Router",
    "NativeWind",
    "TanStack Query",
    "Supabase",
    "Postgres / RLS",
    "EAS Build & Update",
    "Astro",
    "Cloudflare",
    "Skia",
  ],
  contacts: {
    email: "flo.gouesse@gmail.com",
    linkedin: "https://www.linkedin.com/in/floriangouesse" as string,
    github: "https://github.com/flo-gou" as string,
    bandee: "https://join-bandee.com",
  },
} as const;

export type ProjectFeature = { title: string; body: string };
export type Swatch = { hex: string; name: string };

export const briquera = {
  id: "briquera",
  name: "Briquera",
  world: "Atelier",
  tagline: "Tes chantiers, sans mauvaise surprise.",
  category: "App mobile · Suivi de budget de rénovation",
  year: "2026",
  status: "Prêt pour l'App Store",
  summary:
    "Briquera aide ceux qui rénovent — puis les artisans — à piloter le budget de leur chantier, du premier devis à la dernière facture, sans tableur. On crée ses postes et ses pièces, on ajoute ses achats, et on voit en temps réel où part chaque euro.",
  problem:
    "Le budget d'une rénovation s'éparpille entre devis, tickets et factures. On finit par bricoler un tableur, puis on abandonne le suivi — et on découvre les dépassements trop tard.",
  approach:
    "Un suivi poste par poste et pièce par pièce, où un achat prévu devient une dépense réelle en un geste. Règle stricte du design : un achat prévu ne compte jamais dans le dépensé. On dédramatise l'argent sans jamais culpabiliser.",
  features: [
    {
      title: "Budget en temps réel",
      body: "Suivi poste par poste et pièce par pièce. Montant engagé, reste à dépenser, burn rate — avec un feu tricolore vert → ocre → rouge qui alerte sans affoler.",
    },
    {
      title: "Scan de tickets par OCR",
      body: "On photographie un ticket, un parseur géométrique reconstitue les colonnes nom/prix, chaque article est ajouté en quelques secondes. La photo reste jointe à l'achat.",
    },
    {
      title: "Liste d'achats prévu → réel",
      body: "Un achat « prévu » devient une dépense via la sheet « C'est acheté » : prix et date préremplis, un bouton. Hors-ligne géré, export CSV avec le statut.",
    },
    {
      title: "Documents du chantier",
      body: "Devis, factures, garanties et plans au même endroit, catégorisés, avec viewer intégré et pièces jointes par pièce.",
    },
    {
      title: "Planning & rappels",
      body: "Grille mensuelle, échéances par poste, notifications locales : échéance dépassée à J+1, relances d'inactivité à J+7 et J+21.",
    },
    {
      title: "Partage & rôles",
      body: "Inviter conjoint ou artisan sur un chantier (propriétaire / éditeur / lecteur), sécurisé par des politiques RLS Supabase.",
    },
  ] as ProjectFeature[],
  role: [
    "Concepteur et développeur unique — 191 des 192 commits sont de ma main.",
    "Design system « Atelier » de A à Z : palette source-unique, typographie, logo mur de briques, icônes natives.",
    "Backend Supabase modélisé et sécurisé : 10 tables Postgres, politiques RLS par chantier, Edge Function de suppression de compte.",
    "Parseur OCR de tickets écrit maison (approche géométrique nom/prix) et architecture offline-first (file d'inserts + cache + sync).",
    "Marque, voix produit et fiche App Store FR rédigées de bout en bout.",
  ],
  metrics: [
    { value: "192", label: "commits en solo" },
    { value: "~1 mois", label: "de l'idée au prêt-à-soumettre" },
    { value: "~37", label: "écrans conçus" },
    { value: "10", label: "tables Postgres + RLS" },
  ],
  palette: [
    { hex: "#1b3a5b", name: "Navy" },
    { hex: "#d9531e", name: "Crayon" },
    { hex: "#ece3d2", name: "Plâtre" },
    { hex: "#1c8a6b", name: "Niveau" },
    { hex: "#c4881a", name: "Ocre" },
    { hex: "#221f1b", name: "Graphite" },
  ] as Swatch[],
  typography: [
    { name: "Archivo", role: "Titres & montants héros" },
    { name: "Plus Jakarta Sans", role: "Texte courant" },
    { name: "IBM Plex Mono", role: "Chiffres tabulaires (€)" },
  ],
  stack: [
    "Expo ~54",
    "React Native",
    "TypeScript",
    "Supabase",
    "ML Kit (OCR)",
    "Reanimated",
    "Skia",
    "victory-native",
  ],
  icon: "/brand/briquera-icon.png",
  links: [] as { label: string; url: string }[],
} as const;

export const bandee = {
  id: "bandee",
  name: "Bandee",
  world: "Golden hour",
  tagline: "Tes plans entre amis, du premier oui au dernier compte.",
  category: "App mobile · Organisation d'événements de groupe",
  year: "2026",
  status: "Bêta TestFlight · Site en ligne",
  summary:
    "Bandee centralise toute l'organisation d'un événement de plusieurs jours entre amis — week-end, roadtrip, vacances. Elle remplace le patchwork Doodle + Tricount + WhatsApp par un seul endroit qui suit le cycle de vie de l'événement.",
  problem:
    "Organiser un séjour à plusieurs, c'est jongler entre un Doodle pour la date, un Tricount pour les dépenses, un fil WhatsApp et des notes éparses. Rien n'est relié, personne ne sait « où on en est ».",
  approach:
    "Un flux unique guidé par les phases de l'événement : décider la date, préparer le programme, vivre le jour J, régler les comptes. L'accueil affiche toujours la « prochaine action ». Pas de mur de connexion : un prénom, un code à 6 caractères, et c'est parti.",
  features: [
    {
      title: "Vote de dates façon Doodle",
      body: "L'organisateur propose des créneaux, chacun répond oui / non / peut-être, la meilleure date ressort par score. Un mode plein écran pour « caler » la date et passer en préparation.",
    },
    {
      title: "Programme en timeline",
      body: "Un fil partagé unique où se mêlent étapes (activité, resto, trajet…) et notes d'info, triés par jour puis heure. Drag & drop à l'appui long, rubrique « Avant de partir ».",
    },
    {
      title: "Budget partagé façon Tricount",
      body: "Dépenses, répartition égale / pondérée / exacte, soldes par personne et remboursements minimisés. Calcul uniquement, tout en centimes entiers, zéro paiement intégré.",
    },
    {
      title: "Messagerie temps réel",
      body: "Un fil de discussion par événement via Supabase Realtime : bulles groupées, séparateurs de jour, brouillon ré-injecté en cas d'échec d'envoi.",
    },
    {
      title: "Check-lists partagées",
      body: "« Qui apporte quoi » : listes collaboratives, cochage optimiste avec l'avatar du cocheur, modèles de départ.",
    },
    {
      title: "Participants fantômes",
      body: "Ajouter au groupe des amis sans compte (nom + couleur), qu'ils pourront « réclamer » plus tard en rejoignant par le code.",
    },
  ] as ProjectFeature[],
  role: [
    "Développeur solo et unique auteur — 123 commits en 9 jours.",
    "Product owner & UX lead : cadrage complet, priorisation du parcours, onboarding placé au-dessus de tout.",
    "Direction artistique « Golden hour » : palette, typo Outfit, icône « le groupe », refontes successives (CTA, budget, timeline, accueil).",
    "Copywriting & voix de marque : lexique et ton entièrement calés (« le groupe », « l'événement »).",
    "Distribution & conformité : compte Apple Developer, EAS, premier build TestFlight, audit App Privacy / RGPD.",
    "Rebrand Trippie → Bandee : nom, bundle, domaine join-bandee.com, site marketing et email en ligne.",
  ],
  metrics: [
    { value: "123", label: "commits en 9 jours" },
    { value: "~26", label: "écrans (Expo Router)" },
    { value: "19", label: "migrations SQL en prod" },
    { value: "≤ 100 €", label: "de services / mois" },
  ],
  palette: [
    { hex: "#ff6b4a", name: "Corail" },
    { hex: "#ffb25e", name: "Ambre" },
    { hex: "#fff7ed", name: "Crème" },
    { hex: "#33203b", name: "Prune" },
    { hex: "#7c5cbf", name: "Violet" },
    { hex: "#2e9e6b", name: "Vert" },
  ] as Swatch[],
  typography: [
    { name: "Outfit", role: "Typographie principale" },
    { name: "Caveat", role: "Touches scrapbook" },
  ],
  stack: [
    "Expo SDK 57",
    "React Native",
    "TypeScript",
    "TanStack Query",
    "Supabase Realtime",
    "React Compiler",
    "EAS Update (OTA)",
    "Astro",
  ],
  icon: "/brand/bandee-icon.png",
  links: [
    { label: "Site en ligne", url: "https://join-bandee.com" },
    { label: "Confidentialité", url: "https://join-bandee.com/confidentialite" },
  ] as { label: string; url: string }[],
} as const;

export const otherProjects = [
  {
    name: "No Vacancy",
    kind: "Jeu de gestion hôtelière",
    body: "Un tycoon hôtelier au tour par tour hebdomadaire, adossé à un moteur de simulation pur et testé : demande par segment, occupation, satisfaction, notoriété, concurrence, tarification dynamique.",
    tags: ["Game design", "Simulation", "Expo"],
    accent: "#2e9e6b",
  },
  {
    name: "Fast-Food Corporation",
    kind: "Jeu de gestion",
    body: "Première itération d'un tycoon de fast-food, figée sous le tag git fastfood-v0 (jouable, 42 tests verts) avant le pivot vers le tycoon hôtelier. Un banc d'essai de mes systèmes de jeu.",
    tags: ["Game design", "Tycoon", "Tests"],
    accent: "#d9531e",
  },
] as const;

export const nav = [
  { href: "#apropos", label: "À propos" },
  { href: "#briquera", label: "Briquera" },
  { href: "#bandee", label: "Bandee" },
  { href: "#savoir-faire", label: "Savoir-faire" },
  { href: "#contact", label: "Contact" },
] as const;
