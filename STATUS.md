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
- [x] **PR #6** `feat/section-career` — CareerTimeline animée + TimelineItem (frise verticale desktop, pulse sur item présent)
- [x] **PR #7** `feat/section-projects` — ProjectsGrid + ProjectCard + ProjectDetailPage + /projects/:slug
- [x] **PR #8** `feat/section-contact` — ContactForm EmailJS + ContactInfo + atoms Input/Textarea
- [x] **PR #9** `feat/dark-light-theme` — ThemeToggle + lightTheme + localStorage + prefers-color-scheme
- [x] **PR #10** `feat/polish-deploy` — SEO index.html + code-splitting manualChunks + vercel.json + robots.txt + JetBrains Mono

## Roadmap terminée 🎉

Toutes les 10 PRs sont mergées. Pour déployer sur Vercel :
1. Connecter le repo GitHub `my-portfolio-v2` sur vercel.com
2. Build command : `pnpm build` — Output dir : `dist`
3. Le `vercel.json` gère déjà le routing SPA

**Avant de mettre en ligne :**
- Remplir les vraies données dans `src/data/*.{fr,en}.json`
- Ajouter les clés EmailJS dans les variables d'env Vercel (`VITE_EMAILJS_*`)
- Remplacer `og:url` dans `index.html` avec l'URL réelle du site (bloqué : pas encore de domaine.
  `og:image` pointe toujours sur `/favicon.svg`, faute d'asset OG dédié — à faire au déploiement)

## Roadmap — Rework UI (identité "diégétique" OVERRIDE/NEXUS)

Le design initial (10 PRs ci-dessus) fonctionnait mais "faisait trop IA" — palette Tailwind par
défaut, Inter, glassmorphism, gradients 135deg. Rework complet vers une identité terminal/cyberpunk
ancrée dans l'univers du projet OVERRIDE (escape game vs l'IA NEXUS). Plan détaillé perdu après la
session (voir git log du commit PR 1 pour le contexte complet) — décisions clés : fond `#08070f`,
palette néon sémantique (cyan `#00e5ff` dominant/interactif, magenta `#ff2e97` = voix de NEXUS,
vert/ambre/rouge = success/warning/error), JetBrains Mono partout + Chakra Petch en display (≥32px
only, jamais de glow/skew/gradient dessus), radius 0 par défaut (2px max), **thème clair supprimé**
(le monde diégétique n'a pas d'équivalent "light").

- [x] **PR 1** `feat/identity-tokens` — tokens néon + suppression thème clair/glass/gradients +
  GridOverlay + CRTOverlay + SectionMeta (`SEC.0N · ./path`) + nettoyage dette (images → WebP,
  Footer i18n, stub mort, champ avatar inutilisé)
- [ ] **PR 2** `feat/motion-grammar` — Lenis (smooth scroll, ⚠️ conflit avec `scroll-behavior:
  smooth` déjà retiré en PR 1), RevealText (remplace `fadeInUp` uniforme), curseur custom carré,
  transitions de page
- [ ] **PR 3** `feat/boot-sequence` — séquence de boot liée au vrai chargement, `GlitchText` sur le
  nom au hero (one-shot), aberration chromatique
- [ ] **PR 4** `feat/diegetic-copy` — ProjectsGrid → arborescence de fichiers (`override.exe [RUN
  →]`), StackGrid en panneau de contrôle, CareerTimeline en log horodaté, voix NEXUS, prompt de
  commandes (⌘K) — soupape recruteur : jamais bloquant, navigation classique toujours présente
- [ ] **PR 5** `feat/webgl-hero` — `@react-three/fiber` v9 (compatible React 19), grille wireframe
  derrière le hero, lazy + fallback CSS statique en reduced-motion/mobile/échec WebGL
- [ ] **PR 6** `feat/sound-and-signal` — toggle son (off par défaut), compteur réel dans le footer

**Discipline transversale à respecter dans toutes les PRs suivantes :** texte courant jamais en
néon (toujours `colors.text`), glow seulement au hover/focus, magenta jamais sous 14px, surface
néon totale < 15 %, tout ce qui est mouvement/artefact CRT coupé par `useReducedMotion`.

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
- **Site dark-only depuis le rework UI** — plus de `ThemeToggle`/`ThemeContext`/`lightTheme`.
  `darkTheme` (= `tokens` directement, sans champ `mode`) est fourni une fois dans `main.tsx`.
- Polices : JetBrains Mono (`theme.font.family`/`theme.font.mono`, identiques) + Chakra Petch
  (`theme.font.display`, réservée aux titres ≥32px — voir la discipline dans `Heading.styles.ts`).
- `GridOverlay` et `CRTOverlay` (`src/design-system/atoms/`) sont montés une fois dans `App.tsx`,
  au-dessus des `Routes` — décoratifs, `pointer-events: none`, ne pas les remonter ailleurs.
- `SectionMeta` (`src/design-system/molecules/`) remplace les anciens labels de section dupliqués
  dans StackGrid/CareerTimeline/ProjectsGrid/HomePage(contact) — prend `index`/`path`/`count`.
