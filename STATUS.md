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
- [ ] **PR #4** `feat/section-hero` — HeroBlock + animations mount (motion)
- [ ] **PR #5** `feat/section-about-stack` — AboutBlock + StackGrid + StackChip
- [ ] **PR #6** `feat/section-career` — CareerTimeline animée
- [ ] **PR #7** `feat/section-projects` — ProjectsGrid + ProjectCard + /projects/:slug
- [ ] **PR #8** `feat/section-contact` — ContactForm EmailJS + ContactInfo (icônes marque en SVG inline)
- [ ] **PR #9** `feat/dark-light-theme` — ThemeToggle + lightTheme + localStorage
- [ ] **PR #10** `feat/polish-deploy` — SEO + favicon + deploy

## PR suivante : #4 `feat/section-hero`

**À faire :**
- `src/design-system/organisms/HeroBlock/` — nom/prénom + titre + bio + CTA
- `src/hooks/useLocaleData.ts` — charge le bon JSON selon locale active
- `src/data/profile.{fr,en}.json` — mettre les vraies infos (ou garder placeholder)
- Animations motion/react : `fadeInUp` + `staggerContainer` au mount
- Mettre à jour `HomePage` pour afficher le vrai HeroBlock à la place du placeholder
- `src/lib/motion.ts` — variants réutilisables

## Notes techniques

- `react-router-dom` installé en v7 — API similaire à v6, `<BrowserRouter>` fonctionne pareil.
- `motion` v12 s'importe via `import { motion } from 'motion/react'`.
- `react-icons` v5 remplace `lucide-react` — familles utilisées : `lu` (Lucide, icônes UI), `fa6` (Font Awesome 6, icônes de marque), `si` (Simple Icons, logos tech). Import : `import { FaGithub } from 'react-icons/fa6'`.
- DefaultTheme styled-components override : `src/design-system/theme/types.ts` — pattern `type AppTheme = typeof darkTheme` puis `interface DefaultTheme extends AppTheme {}`.
- Page démo atoms accessible sur `/dev/components` en mode dev uniquement (conditionnée par `import.meta.env.DEV`).
- Toutes les données dans `src/data/*.{fr,en}.json` — éditer pour mettre le vrai contenu.
