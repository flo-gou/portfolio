import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Export 100 % statique → déployé tel quel sur Cloudflare Pages.
  // Le formulaire de contact est géré par une Pages Function (functions/api/contact.ts).
  output: "export",
  images: {
    // Pas d'optimiseur d'images côté serveur en statique.
    unoptimized: true,
  },
  // Le dossier parent contient un package-lock.json parasite : on ancre
  // explicitement la racine du workspace sur ce projet.
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
