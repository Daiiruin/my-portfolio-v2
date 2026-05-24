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
| Icônes | react-icons v5 — `lu` (Lucide UI), `fa6` (GitHub/LinkedIn/Twitter), `si` (logos tech) |
| Data | JSON statiques dans `src/data/*.{fr,en}.json` |
| Package manager | **pnpm** (ne jamais utiliser npm/yarn) |
| Tests | Aucun (décision volontaire) |
| Hosting | TBD en PR #10 |

## Roadmap PRs

- [x] **PR #1** `chore/init` — Scaffold + deps + structure + STATUS.md
- [x] **PR #2** `feat/design-system` — Tokens dark theme + GlobalStyle + atoms (Button, Text, Heading, Link, Icon, Container, Section, Badge) + page démo `/dev/components`
- [x] **PR #3** `feat/i18n-layout` — Header sticky + Footer + molecules NavItem + LangSwitch + useScrollSpy + useReducedMotion + PageLayout + HomePage shell
- [x] **PR #4** `feat/section-hero` — HeroBlock + variants motion + useLocaleData + Button polymorphe
- [x] **PR #5** `feat/section-about-stack` — AboutBlock + StackGrid + StackChip (iconMap react-icons/si) + whileInView stagger
- [ ] **PR #6** `feat/section-career` — CareerTimeline animée
- [ ] **PR #7** `feat/section-projects` — ProjectsGrid + ProjectCard + /projects/:slug
- [ ] **PR #8** `feat/section-contact` — ContactForm EmailJS + ContactInfo (icônes marque en SVG inline)
- [ ] **PR #9** `feat/dark-light-theme` — ThemeToggle + lightTheme + localStorage
- [ ] **PR #10** `feat/polish-deploy` — SEO + favicon + deploy

## PR suivante : #6 `feat/section-career`

**À faire :**
- `src/design-system/organisms/CareerTimeline/` — frise chronologique
- `src/design-system/molecules/TimelineItem/` — période + entreprise + rôle + description
- `src/data/career.{fr,en}.json` — mettre le vrai parcours (ou garder placeholder)
- Anim séquentielle : items entrent un par un au scroll (stagger `whileInView`)
- Mettre à jour `HomePage` pour remplacer le placeholder Career

## Notes techniques

- `react-router-dom` installé en v7 — API similaire à v6, `<BrowserRouter>` fonctionne pareil.
- `motion` v12 s'importe via `import { motion } from 'motion/react'`.
- `react-icons` v5 remplace `lucide-react` — familles : `lu` (UI), `fa6` (marques), `si` (logos tech). Import : `import { FaGithub } from 'react-icons/fa6'`.
- `motion` v12 : `import { motion } from 'motion/react'`, `import type { Variants } from 'motion/react'`.
- `Button` est polymorphe : `<Button as="a" href="#projects">` fonctionne grâce au generic `ElementType`.
- `useLocaleData<T>({ fr, en })` : hook simple qui retourne le bon JSON selon la locale i18next active.
- DefaultTheme styled-components override : `src/design-system/theme/types.ts` — pattern `type AppTheme = typeof darkTheme` puis `interface DefaultTheme extends AppTheme {}`.
- Page démo atoms accessible sur `/dev/components` en mode dev uniquement (conditionnée par `import.meta.env.DEV`).
- Toutes les données dans `src/data/*.{fr,en}.json` — éditer pour mettre le vrai contenu.
