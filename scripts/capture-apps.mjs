#!/usr/bin/env node
/**
 * capture-apps.mjs — Captures faithful screenshots of the REAL Briquera & Bandee
 * Expo apps, rendered on their web target with a local fixture dataset.
 *
 * How it works
 * ------------
 *  1. Boots each app's Expo web dev server with EXPO_PUBLIC_CAPTURE=1 (which makes
 *     the app load its `supabase.web.ts` fake client → realistic local fixtures,
 *     zero network, zero prod Supabase writes) + dummy Supabase env.
 *  2. Warms the Metro bundle, then drives the system Google Chrome (via
 *     puppeteer-core — no browser download) at an iPhone viewport.
 *  3. Navigates to each hero route and writes a high-res PNG to
 *     public/mockups/<app>/<name>.png.
 *
 * Usage
 * -----
 *   node scripts/capture-apps.mjs               # all apps
 *   node scripts/capture-apps.mjs bandee        # one app
 *   node scripts/capture-apps.mjs bandee:home   # one screen
 *
 * Requirements: Google Chrome installed; the two app repos present at the paths
 * in CONFIG; each app has its capture-mode files committed.
 */
import { spawn } from "node:child_process";
import { mkdir, access } from "node:fs/promises";
import { setTimeout as sleep } from "node:timers/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer-core";

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO = resolve(__dirname, "..");

const CHROME_CANDIDATES = [
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/Applications/Chromium.app/Contents/MacOS/Chromium",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium-browser",
];

// iPhone 13/14 logical resolution; deviceScaleFactor 3 → crisp retina PNGs.
const VIEWPORT = { width: 390, height: 844, deviceScaleFactor: 3, isMobile: true, hasTouch: true };

// Dummy, non-prod Supabase env so the module's import guard passes without ever
// touching production. The fake client ignores these values entirely.
const DUMMY_ENV = {
  EXPO_PUBLIC_CAPTURE: "1",
  EXPO_PUBLIC_SUPABASE_URL: "http://127.0.0.1:54321",
  EXPO_PUBLIC_SUPABASE_ANON_KEY: "dummy_capture_key",
  EXPO_NO_TELEMETRY: "1",
  CI: "1",
  BROWSER: "none",
};

/**
 * Per-app config. `screens[].route` is filled from each app's fixtures.
 * `settleMs` gives animations/queries time to paint before the shot.
 */
const BANDEE_EVENT = "e0000000-0000-4000-8000-0000000b1a44";

const CONFIG = {
  bandee: {
    cwd: "/Users/floriangouesse/bandee",
    port: 8090,
    screens: [
      { name: "welcome", route: "/welcome", settleMs: 2200 },
      { name: "home", route: "/home", settleMs: 2600 },
      { name: "event-hub", route: `/event/${BANDEE_EVENT}`, settleMs: 2800 },
      { name: "dates", route: `/event/dates?id=${BANDEE_EVENT}`, settleMs: 2600 },
      { name: "budget", route: `/event/budget?id=${BANDEE_EVENT}`, settleMs: 2600 },
      { name: "chat", route: `/event/chat?id=${BANDEE_EVENT}`, settleMs: 2600 },
    ],
  },
  briquera: {
    cwd: "/Users/floriangouesse/briquera",
    port: 8091,
    screens: [
      { name: "accueil", route: "/", settleMs: 2800 },
      { name: "chantier", route: "/rooms", settleMs: 2600 },
      { name: "achats", route: "/achat", settleMs: 2600 },
      { name: "stats", route: "/stats", settleMs: 2800 },
    ],
  },
};

async function findChrome() {
  for (const p of CHROME_CANDIDATES) {
    try { await access(p); return p; } catch {}
  }
  throw new Error("Google Chrome introuvable. Installe Chrome ou édite CHROME_CANDIDATES.");
}

function waitForLog(child, re, timeoutMs) {
  return new Promise((res, rej) => {
    const t = setTimeout(() => rej(new Error(`timeout waiting for ${re}`)), timeoutMs);
    const onData = (buf) => {
      const s = buf.toString();
      process.stdout.write(s.replace(/^/gm, "    "));
      if (re.test(s)) { clearTimeout(t); child.stdout.off("data", onData); child.stderr.off("data", onData); res(); }
    };
    child.stdout.on("data", onData);
    child.stderr.on("data", onData);
  });
}

async function isUp(port) {
  try {
    const r = await fetch(`http://localhost:${port}/`, { signal: AbortSignal.timeout(2000) });
    return r.ok;
  } catch { return false; }
}

async function bootExpoWeb(app, cfg) {
  // Reuse an already-running dev server on this port (e.g. one you started
  // manually with EXPO_PUBLIC_CAPTURE=1) instead of spawning a duplicate.
  if (await isUp(cfg.port)) {
    console.log(`▶ [${app}] reusing dev server already on :${cfg.port}`);
    return null;
  }
  console.log(`\n▶ [${app}] starting expo web on :${cfg.port} …`);
  const child = spawn("npx", ["expo", "start", "--web", "--port", String(cfg.port)], {
    cwd: cfg.cwd,
    env: { ...process.env, ...DUMMY_ENV },
  });
  await waitForLog(child, new RegExp(`Waiting on http://localhost:${cfg.port}`), 120_000);
  console.log(`▶ [${app}] warming bundle …`);
  try { await fetch(`http://localhost:${cfg.port}/`); } catch {}
  await waitForLog(child, /Web Bundled|Bundling failed|error/i, 180_000).catch(() => {});
  await sleep(1500);
  return child;
}

async function captureApp(app, cfg, chromePath, only) {
  if (!cfg.screens.length) { console.log(`▶ [${app}] no screens configured — skipping.`); return; }
  const outDir = resolve(REPO, "public", "mockups", app);
  await mkdir(outDir, { recursive: true });

  const server = await bootExpoWeb(app, cfg);
  const browser = await puppeteer.launch({ executablePath: chromePath, headless: "new", defaultViewport: VIEWPORT, args: ["--hide-scrollbars"] });
  try {
    const page = await browser.newPage();
    await page.emulateMediaFeatures([{ name: "prefers-color-scheme", value: "light" }]);
    for (const s of cfg.screens) {
      if (only && s.name !== only) continue;
      const url = `http://localhost:${cfg.port}${s.route}`;
      console.log(`  📸 [${app}] ${s.name} → ${url}`);
      await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60_000 }).catch(() => {});
      // Web fonts gate the app's first paint — wait for them, then settle.
      await page.evaluate(() => (document.fonts ? document.fonts.ready : Promise.resolve())).catch(() => {});
      await sleep(s.settleMs ?? 2000);
      const out = resolve(outDir, `${s.name}.png`);
      await page.screenshot({ path: out });
      console.log(`     saved ${out}`);
    }
  } finally {
    await browser.close();
    if (server) { server.kill("SIGTERM"); await sleep(500); }
  }
}

async function main() {
  const arg = process.argv[2]; // e.g. "bandee" or "bandee:home"
  const [appFilter, screenFilter] = arg ? arg.split(":") : [null, null];
  const chromePath = await findChrome();
  console.log("Chrome:", chromePath);
  for (const [app, cfg] of Object.entries(CONFIG)) {
    if (appFilter && app !== appFilter) continue;
    await captureApp(app, cfg, chromePath, screenFilter);
  }
  console.log("\n✅ done.");
}

main().catch((e) => { console.error(e); process.exit(1); });
