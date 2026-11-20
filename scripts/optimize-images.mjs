/**
 * Dérive les images servies par le site depuis les sources PNG.
 *
 *   npm run images
 *
 * Les captures d'app (1170 × 2532) s'affichent à 170 px de large et les icônes
 * (1024 × 1024) à 48 px : on sert du WebP à 3× cette taille, pas l'original.
 * Le site référence les .webp ; les .png restent les sources (réutilisables
 * pour les fiches store). À relancer après `npm run capture` ou un changement
 * d'icône.
 *
 * sharp est fourni par Next (dépendance optionnelle) — pas de paquet en plus.
 */
import { readdir, stat } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const PUBLIC = resolve(dirname(fileURLToPath(import.meta.url)), "../public");

const jobs = [
  { dir: "mockups/bandee", width: 510 },
  { dir: "mockups/briquera", width: 510 },
  { dir: "brand", width: 144 },
];

for (const { dir, width } of jobs) {
  const files = (await readdir(join(PUBLIC, dir))).filter((f) => f.endsWith(".png"));
  for (const file of files) {
    const src = join(PUBLIC, dir, file);
    const out = src.replace(/\.png$/, ".webp");
    await sharp(src).resize({ width }).webp({ quality: 82 }).toFile(out);
    const [before, after] = await Promise.all([stat(src), stat(out)]);
    console.log(
      `✓ ${dir}/${file.replace(/\.png$/, ".webp")} — ${Math.round(before.size / 1024)} Ko → ${Math.round(after.size / 1024)} Ko`,
    );
  }
}
