# Portfolio — Florian Gouesse

Portfolio de **Florian Gouesse**, senior product manager. Une page unique :
un manifeste, le track record salarié en quatre chiffres, puis deux études de
cas — **Briquera** (budget de rénovation) et **Bandee** (organisation
d'événements entre amis), toutes deux publiées sur l'App Store.

Objectif du site : décrocher un poste de senior PM en B2B SaaS. Le lecteur visé
est un CPO / Head of Product ; l'action attendue est un contact via LinkedIn.

## Stack

- **Next.js 16** (App Router, export statique) + **React 19** + **TypeScript**
- **Tailwind CSS v4**
- **motion** (animations), **lucide-react** (icônes)
- Polices : Bricolage Grotesque · Instrument Sans · IBM Plex Mono
- Hébergement : **Cloudflare Workers Static Assets**

## Démarrer

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # export statique dans out/
```

## Structure

```
src/
  app/
    layout.tsx            # polices, métadonnées SEO, JSON-LD Person
    page.tsx              # assemble les sections
    globals.css           # design tokens « Lin & miel »
    sitemap.ts robots.ts  # dérivés de src/lib/site.ts
    opengraph-image.png   # image de partage, générée par npm run og
  components/site/        # Nav, Manifesto, Track, ProjectCase, PhoneFrame,
                          # Reveal, Footer
  lib/
    content.ts            # tout le contenu (source unique)
    themes.ts             # accent de chaque étude de cas
    site.ts               # domaine de production
public/mockups/           # captures réelles des apps
public/brand/             # icônes des apps
worker/index.ts           # Worker Cloudflare : sert out/
```

## Personnaliser

- **Contenu** : tout est dans `src/lib/content.ts` — textes, chiffres, liens.
- **Domaine** : `src/lib/site.ts`, seul endroit à changer (canonique, sitemap,
  robots, image de partage).
- **Image de partage** : `npm run og` régénère `src/app/opengraph-image.png`
  (nécessite Chrome installé). À relancer si le titre change.
- **Captures des apps** : `npm run capture` — voir `scripts/README-capture.md`.

## Contraintes tenues

- Contrastes **WCAG AA** sur tout le texte courant (ramp encre + accents
  encrés pour le petit texte, voir `globals.css` et `themes.ts`).
- `prefers-reduced-motion` respecté, repli `noscript` pour les animations.
- Aucun formulaire, aucune collecte : le contact passe par LinkedIn et mailto.

## Déployer

```bash
npx wrangler deploy
```
