# Portfolio — Florian Gouesse

Portfolio de **Florian Gouesse**, designer produit indépendant. Met en avant deux
études de cas — **Briquera** (suivi de budget de rénovation) et **Bandee**
(organisation d'événements de groupe) — chacune ré-habillée avec le vrai design
system de l'app.

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4**
- **motion** (animations), **lucide-react** (icônes)
- Polices : Bricolage Grotesque · Instrument Sans · IBM Plex Mono (+ Outfit,
  Archivo, Caveat pour les maquettes d'app)

## Démarrer

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de production
npm start        # sert le build
```

## Structure

```
src/
  app/
    layout.tsx          # polices + métadonnées SEO
    page.tsx            # assemble les sections
    globals.css         # design tokens (chrome + mondes Briquera/Bandee)
    icon.svg            # favicon
    api/contact/route.ts# réception du formulaire de contact
  components/
    site/               # Nav, Hero, About, ProjectSection, Capabilities,
                        # OtherProjects, Contact, Footer, PhoneFrame, Reveal…
    mockups/            # écrans d'app recréés en code (Briquera / Bandee)
  lib/
    content.ts          # tout le contenu (source unique)
    themes.ts           # thèmes des deux études de cas
public/brand/           # icônes & logos des apps
```

## Personnaliser

- **Contenu** : tout est dans `src/lib/content.ts` (textes, métriques, liens).
- **Formulaire de contact** : voir `.env.example` pour activer l'envoi via
  [Resend](https://resend.com). Sans clé, les messages sont acceptés mais non
  livrés (repli mailto côté front).
- **Vraies captures d'écran** : les maquettes sont dans `src/components/mockups/`.
  Pour les remplacer par de vraies captures TestFlight/simulateur, échange le
  contenu du `PhoneFrame` par une `<Image>` dans `ProjectSection`.

## Déployer

Optimisé pour [Vercel](https://vercel.com) (déploiement direct du dépôt). Pense à
définir les variables d'environnement du formulaire de contact si tu l'actives,
et à ajuster `metadataBase` dans `src/app/layout.tsx` avec ton domaine réel.
