# my-portfolio-ad

Portfolio personnel — React 19 + TypeScript + styled-components + motion + react-i18next.

## Stack

- **Vite 8** — build tool
- **React 19** + **TypeScript** (strict)
- **react-router-dom v7** — routing (one-page + /projects/:slug)
- **styled-components v6** — CSS-in-JS avec ThemeProvider (dark/light)
- **motion v12** — animations
- **react-i18next** — internationalisation FR/EN
- **EmailJS** — formulaire de contact sans backend
- **lucide-react** — icônes

## Démarrage

```bash
pnpm install
cp .env.local.example .env.local  # remplir les clés EmailJS
pnpm dev
```

## Contenu

Toutes les données sont dans `src/data/` sous forme de fichiers JSON :

```
src/data/
  profile.{fr,en}.json    ← nom, bio, titre
  stack.{fr,en}.json      ← technologies
  career.{fr,en}.json     ← parcours professionnel
  projects.{fr,en}.json   ← projets (avec slug pour les URLs)
  contact.{fr,en}.json    ← email, LinkedIn, GitHub, etc.
```

## Architecture

Atomic design strict : `atoms → molecules → organisms → templates → pages`.
Voir `STATUS.md` pour le suivi de progression et les décisions techniques.
