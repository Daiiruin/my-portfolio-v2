# Portfolio — Status

> Lire ce fichier en premier au début de chaque session. Il dit exactement où on en est et quoi faire ensuite.

## Comment lancer le projet

```bash
cd /home/daiiruin/dev/SoloProject/my-portfolio-ad
pnpm install      # si node_modules absent
pnpm dev          # http://localhost:5173
pnpm build        # build de prod
```

## Stack & décisions

| Catégorie | Choix |
|---|---|
| Build | Vite 8 + React 19 + TypeScript strict |
| Routing | react-router-dom v7 |
| CSS | styled-components v6 + ThemeProvider |
| Animations | motion v12 (ex-framer-motion) |
| i18n | react-i18next + i18next-browser-languagedetector |
| Contact | EmailJS (`@emailjs/browser`) |
| Icônes | lucide-react |
| Data | JSON statiques dans `src/data/*.{fr,en}.json` |
| Package manager | **pnpm** (ne jamais utiliser npm/yarn) |
| Tests | Aucun (décision volontaire) |
| Hosting | TBD en PR #10 |

## Roadmap PRs

- [x] **PR #1** `chore/init` — Scaffold + deps + structure + STATUS.md
- [ ] **PR #2** `feat/design-system` — Tokens dark theme + GlobalStyle + atoms (Button, Text, Heading, Link, Container, Section)
- [ ] **PR #3** `feat/i18n-layout` — Header + Footer + LangSwitch + PageLayout + useScrollSpy
- [ ] **PR #4** `feat/section-hero` — HeroBlock + animations mount (motion)
- [ ] **PR #5** `feat/section-about-stack` — AboutBlock + StackGrid + StackChip
- [ ] **PR #6** `feat/section-career` — CareerTimeline animée
- [ ] **PR #7** `feat/section-projects` — ProjectsGrid + ProjectCard + /projects/:slug
- [ ] **PR #8** `feat/section-contact` — ContactForm EmailJS + ContactInfo
- [ ] **PR #9** `feat/dark-light-theme` — ThemeToggle + lightTheme + localStorage
- [ ] **PR #10** `feat/polish-deploy` — SEO + favicon + deploy

## PR en cours : #1 `chore/init`

**Fait :**
- Scaffold Vite + React 19 + TypeScript (via `pnpm create vite`)
- Toutes les dépendances installées avec pnpm
- Structure de dossiers atomique complète créée
- Prettier + ESLint configurés
- Fichiers de base : `main.tsx`, `App.tsx`
- Config i18n + locales FR/EN (strings UI)
- JSON de données placeholder créés (profile, stack, career, projects, contact)
- `.env.local.example` avec clés EmailJS
- `STATUS.md` (ce fichier)
- `README.md` mis à jour

**Reste :**
- `pnpm build` et `pnpm dev` validés ✅
- Git init + repo GitHub créé + PR ouverte

## Notes techniques

- `react-router-dom` installé en v7 (pas v6 comme prévu initialement) — API similaire, `createBrowserRouter` ou `<BrowserRouter>` fonctionnent pareil.
- `motion` v12 s'importe via `import { motion } from 'motion/react'` (nouveau nom du package framer-motion).
- Le thème styled-components sera `DefaultTheme` override via `src/design-system/theme/types.ts` en PR #2.
- Toutes les données sont dans `src/data/*.{fr,en}.json` — éditer ces fichiers pour mettre ton vrai contenu.
