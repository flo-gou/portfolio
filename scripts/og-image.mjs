/**
 * Génère l'image de partage (Open Graph / LinkedIn) — 1200 × 630.
 *
 *   npm run og
 *
 * Rend une carte HTML aux tokens « Lin & miel » dans Chrome et l'écrit dans
 * src/app/opengraph-image.png, que Next sert automatiquement (convention de
 * fichier). À relancer si le titre ou la baseline du site changent.
 */
import { access, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer-core";

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO = resolve(__dirname, "..");
const OUT = resolve(REPO, "src/app/opengraph-image.png");

const CHROME_CANDIDATES = [
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/Applications/Chromium.app/Contents/MacOS/Chromium",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium-browser",
];

async function findChrome() {
  for (const p of CHROME_CANDIDATES) {
    try { await access(p); return p; } catch {}
  }
  throw new Error("Google Chrome introuvable. Installe Chrome ou édite CHROME_CANDIDATES.");
}

const html = `<!doctype html>
<html lang="fr"><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700;12..96,800&family=Instrument+Sans:wght@400;500&family=IBM+Plex+Mono:wght@500&display=block" rel="stylesheet">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 1200px; height: 630px; display: flex; flex-direction: column;
    justify-content: space-between; padding: 72px 80px;
    background: #f0e9da; color: #26201a;
    font-family: "Instrument Sans", system-ui, sans-serif;
  }
  .eyebrow {
    font-family: "IBM Plex Mono", monospace; font-size: 19px; font-weight: 500;
    text-transform: uppercase; letter-spacing: 0.16em; color: #6f6453;
  }
  h1 {
    font-family: "Bricolage Grotesque", system-ui, sans-serif; font-weight: 800;
    font-size: 132px; line-height: 0.94; letter-spacing: -0.035em; margin-top: 40px;
  }
  h1 .gold { color: #ad620f; }
  p.sub { margin-top: 36px; font-size: 27px; line-height: 1.45; color: #5a5046; max-width: 30ch; }
  footer { display: flex; align-items: center; justify-content: space-between; }
  .name { font-family: "Bricolage Grotesque", sans-serif; font-weight: 700; font-size: 26px; }
  .meta {
    font-family: "IBM Plex Mono", monospace; font-size: 19px; font-weight: 500;
    text-transform: uppercase; letter-spacing: 0.1em; color: #6f6453;
  }
  .rule { height: 1px; background: rgba(38,32,26,0.22); margin-bottom: 26px; }
</style></head>
<body>
  <div>
    <div class="eyebrow">Senior Product Manager — Île-de-France</div>
    <h1>Cadrer, arbitrer,<br><span class="gold">livrer.</span></h1>
    <p class="sub">Sept ans de plateformes B2B. Deux apps mobiles menées jusqu'à l'App Store.</p>
  </div>
  <div>
    <div class="rule"></div>
    <footer>
      <span class="name">Florian Gouesse</span>
      <span class="meta">Briquera · Bandee</span>
    </footer>
  </div>
</body></html>`;

const chromePath = await findChrome();
const browser = await puppeteer.launch({
  executablePath: chromePath,
  headless: "new",
  defaultViewport: { width: 1200, height: 630, deviceScaleFactor: 1 },
});
const page = await browser.newPage();
await page.setContent(html, { waitUntil: "networkidle0" });
await page.evaluate(() => document.fonts.ready);
const buf = await page.screenshot({ type: "png" });
await writeFile(OUT, buf);
await browser.close();
console.log(`✓ ${OUT} (1200×630)`);
