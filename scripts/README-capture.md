# Captures d'écran automatisées — Briquera & Bandee

Pipeline qui produit des **captures fidèles des vraies apps** (Briquera & Bandee),
rendues sur leur **cible web Expo** avec un **jeu de données local** — zéro réseau,
**aucune écriture sur le Supabase de prod**.

## Lancer

```bash
npm run capture            # les deux apps
npm run capture bandee     # une app
npm run capture bandee:home  # un seul écran
```

Les PNG (iPhone @3×, 1170×2532) sont écrits dans `public/mockups/<app>/`.
Pré-requis : Google Chrome installé, et les deux repos d'app présents
(`/Users/floriangouesse/briquera`, `/Users/floriangouesse/bandee`).

Le script (`scripts/capture-apps.mjs`) :
1. démarre la cible web de chaque app avec `EXPO_PUBLIC_CAPTURE=1` + un Supabase
   factice (`http://127.0.0.1:54321`), ou réutilise un serveur déjà lancé sur le port ;
2. pilote Chrome (via `puppeteer-core`, sans téléchargement de navigateur) à une
   résolution iPhone, attend le chargement des polices, puis capture chaque route.

## Comment ça marche (côté apps)

Chaque app fait passer **toutes** ses lectures par un unique client Supabase.
Metro résout automatiquement un fichier `.web.ts` frère sur la cible web, ce qui
permet d'injecter un **client factice** sans toucher au code natif ni au client réel.

Fichiers ajoutés **dans les repos d'app** (gardés hors du portfolio) :

- **Bandee** (`/Users/floriangouesse/bandee`)
  - `src/lib/supabase.web.ts` — si `EXPO_PUBLIC_CAPTURE==='1'`, exporte un faux
    client (auth factice, query-builder qui renvoie les fixtures, realtime no-op) ;
    sinon, ré-exporte le vrai client à l'identique (web normal inchangé).
  - `src/lib/capture-fixtures.ts` — le jeu de données réaliste (« Week-end à
    Biarritz », cast Léa/Sam/Zoé/Max/Noé/Inès, sondage de dates, budget, chat).

- **Briquera** (`/Users/floriangouesse/briquera`)
  - `lib/supabase.web.ts`, `lib/capture-fixtures.ts` — même principe (chantier
    « Appartement Nation », ~18 000 € de budget, 6 pièces, ~25 achats).
  - `components/DateField.web.tsx`, `components/ScanReceiptButton.web.tsx` — stubs
    web pour éviter d'embarquer des modules natifs (datetimepicker, ML-Kit) dans
    le bundle web.
  - `package.json` — ajout des dépendances web Expo (`react-dom`,
    `react-native-web`, `@expo/metro-runtime`).

### Garanties de sûreté
- Le faux client ne fait **aucun** appel réseau ; `insert/update/delete` sont inertes.
- Tout est conditionné à `EXPO_PUBLIC_CAPTURE=1` : sans ce drapeau, les apps se
  comportent normalement (natif et web réel intacts).
- Le `.env` de prod n'est jamais modifié ; les captures utilisent une URL Supabase factice.

## Ajouter / modifier un écran
Éditer `CONFIG` dans `scripts/capture-apps.mjs` (nom, route, `settleMs`).
Pour changer les données affichées, éditer `capture-fixtures.ts` dans le repo de l'app.
