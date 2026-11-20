import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Export 100 % statique → servi par le Worker Cloudflare (worker/index.ts).
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
