import type { ProjectTheme } from "@/components/site/ProjectSection";

/* Thèmes des études de cas — harmonisés avec la base « Lin & miel » :
   fonds chauds et clairs, chaque projet distingué par son accent. */

export const briqueraTheme: ProjectTheme = {
  bg: "#e7dcc6", // sable chaud (un ton sous le lin, pour le rythme)
  panel: "#f1e8d7",
  panelSoft: "#ede2cd",
  text: "#2b2019",
  textDim: "#6c6053",
  accent: "#c0562e", // terracotta / crayon (monde « Atelier »)
  line: "rgba(43,32,25,0.14)",
  meta: "#8d8069",
  headingFontClass: "font-archivo",
  ctaBg: "#c0562e",
  ctaText: "#fdf6ec",
  phoneChrome: "#221f1b",
  phoneScreenBg: "#f5efe1",
  glow: "#d98a3c",
};

export const bandeeTheme: ProjectTheme = {
  bg: "#faf1e3", // crème claire
  panel: "#ffffff",
  panelSoft: "#f6ead9",
  text: "#33203b", // prune
  textDim: "#6c5567",
  accent: "#e0512f", // corail (monde « Golden hour »), assombri pour le clair
  line: "rgba(51,32,59,0.12)",
  meta: "#8a7686",
  headingFontClass: "font-outfit",
  ctaBg: "linear-gradient(100deg,#ff5a6e 0%,#ff6b4a 48%,#ffb25e 100%)",
  ctaText: "#3a1420",
  phoneChrome: "#33203b",
  phoneScreenBg: "#fff7ed",
  glow: "#ffcf8f",
};
