/**
 * Génère l'image de partage (Open Graph / LinkedIn) — 1200 × 630.
 *
 *   npm run og
 *
 * Rend une carte HTML aux tokens « Cockpit » dans Chrome et l'écrit dans
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
<link href="https://fonts.googleapis.com/css2?family=Figtree:wght@500;700;800&display=block" rel="stylesheet">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 1200px; height: 630px; display: flex; flex-direction: column;
    justify-content: space-between; padding: 72px 80px;
    background: #17152b; color: #ffffff;
    font-family: Figtree, system-ui, sans-serif;
  }
  h1 { font-weight: 800; font-size: 124px; line-height: 0.98; letter-spacing: -0.04em; }
  h1 .accent { color: #b4abff; }
  p.sub { margin-top: 36px; font-size: 30px; font-weight: 500; line-height: 1.4; color: #cfcce6; white-space: nowrap; }
  footer { display: flex; align-items: center; gap: 22px; }
  .avatar {
    width: 72px; height: 72px; border-radius: 16px; background: #5546e0;
    display: flex; align-items: center; justify-content: center;
    font-size: 27px; font-weight: 800; letter-spacing: -0.02em;
  }
  .name { font-size: 30px; font-weight: 800; letter-spacing: -0.02em; }
  .role { font-size: 23px; font-weight: 500; color: #cfcce6; }
</style></head>
<body>
  <div>
    <h1>Cadrer, arbitrer,<br><span class="accent">livrer.</span></h1>
    <p class="sub">Sept ans de plateformes B2B et SaaS en marque blanche.</p>
  </div>
  <footer>
    <span class="avatar">FG</span>
    <span>
      <span class="name">Florian Gouesse</span><br>
      <span class="role">Senior Product Manager · Île-de-France</span>
    </span>
  </footer>
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
