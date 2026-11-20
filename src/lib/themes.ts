/** Thème d'une étude de cas — réduit à ce que le rendu utilise vraiment :
    un accent pour les titres, sa variante encrée pour le petit texte
    (contraste AA), et la teinte du cadre iPhone. */
export type ProjectTheme = {
  /** Accent du monde — grands titres uniquement (≥ 24 px). */
  accent: string;
  /** Même teinte, assombrie pour le texte courant et les liens (≥ 4.5:1). */
  accentInk: string;
  phoneChrome: string;
  phoneScreenBg: string;
};

/* Harmonisés avec la base « Lin & miel » : chaque projet garde sa teinte,
   déclinée en deux valeurs selon la taille du texte. */

export const briqueraTheme: ProjectTheme = {
  accent: "#c0562e", // terracotta / crayon (monde « Atelier »)
  accentInk: "#a3431d",
  phoneChrome: "#221f1b",
  phoneScreenBg: "#f5efe1",
};

export const bandeeTheme: ProjectTheme = {
  accent: "#e0512f", // corail (monde « Golden hour »)
  accentInk: "#b23c1c",
  phoneChrome: "#33203b",
  phoneScreenBg: "#fff7ed",
};
