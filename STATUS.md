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
- [x] **PR 2** `feat/motion-grammar` — Lenis (`anchors: true`, lit `scroll-margin-top` par cible
  au lieu d'un offset JS codé en dur — fonctionne identiquement en reduced-motion, où Lenis n'est
  pas monté du tout), RevealText (mot/char masqué, appliqué au nom+titre du hero seulement — pas
  partout, ça reste le travail de PR 4), curseur custom carré (3 états, désactivé tactile/reduced-
  motion), wipe de transition de page (scaleY, pas d'AnimatePresence — un seul motion.div remonté
  via `key={pathname}` suffit)
- [x] **PR 3** `feat/boot-sequence` — séquence de boot liée au vrai chargement (`useBootProgress` :
  fonts.ready + préchargement des 5 screenshots projets, avec garde-fou 4s), skippable, une fois
  par session (`BootProvider`/`sessionStorage`). `GlitchText` n'est plus une boucle infinie — se
  fige une fois (2-5 ticks/caractère), aberration chromatique visible seulement pendant le décodage.
  Le nom du hero bascule texte-plat → `<GlitchText>` exactement quand `booting` passe à `false`,
  pour que le décodage se joue *après* le wipe, pas caché dessous
- [~] **PR 4** `feat/diegetic-copy` — 3 volets sur 4 faits : ProjectsGrid/ProjectCard remplacés par
  ProjectsTree/ProjectRow (arborescence, `fileKind` par projet : `override.exe [RUN →]`,
  `lost-world.py`, `culture-live/` en dossier) ; CareerTimeline/TimelineItem en log horodaté
  (société en tête, `[ active ]` sur l'entrée courante) ; StackChip hover affiche `<N>Y` réel
  (`years` dans stack.json, pas inventé) au lieu d'un glow ; CommandPrompt (⌘K) avec `ls`/`cd
  <section>`/`open <project>`/`whoami`/`contact`/`clear`/`help` — reste : **la voix de NEXUS**,
  pas encore commencée (ton à valider avec l'utilisateur avant d'écrire les lignes définitives)
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
- `theme.layout.headerHeight` est un **number** (unitless px), pas une string CSS — sert aussi de
  base pour la logique JS (Lenis). Toujours suffixer `px` aux points de consommation CSS.
- Lenis (`lenis/react`) : `<ReactLenis root>` monté dans `App.tsx`, **skip entièrement** si
  `useReducedMotion()` est vrai (pas juste désactivé). `useLenis()` retourne alors `undefined` —
  toujours prévoir un fallback natif (voir `ScrollToTop.tsx`) plutôt que de supposer l'instance
  présente.
- Nouveaux ancres de scroll : ne pas ajouter d'offset JS pour compenser le header fixe — poser
  `scroll-margin-top: ${theme.layout.headerHeight}px` sur l'élément ciblé par l'ancre à la place
  (Lenis le lit nativement, et ça marche aussi pour le saut natif du navigateur en reduced-motion).
- `BootContext` est scindé en 2 fichiers (`contexts/bootContext.ts` pour le `createContext` brut,
  `contexts/BootContext.tsx` pour le seul composant `BootProvider`) à cause de la règle ESLint
  `react-refresh/only-export-components` — un fichier `.tsx` ne doit exporter QUE des composants,
  jamais un hook ou un context à côté. `useBootState()` vit dans `hooks/`, pas dans `contexts/`.
  Même contrainte si un futur hook/context est ajouté ailleurs dans le rework.
- `GlitchText` ne fixe plus sa propre police/couleur (avant : mono + accent codés en dur) — il
  hérite du contexte où il est utilisé. C'est ce qui permet de l'utiliser dans le h1 du hero
  (Chakra Petch) sans qu'il écrase la police display avec du mono.
- `theme.zIndex.boot` (400) est au-dessus de `toast` (300, partagé par CRTOverlay/CustomCursor/
  RouteTransition) — nécessaire pour garantir l'ordre d'empilement de BootSequence indépendamment
  de l'ordre du DOM dans `App.tsx`.
- Demande explicite de l'utilisateur : tout **nouveau** fichier `.styles.ts` utilise la syntaxe
  objet (`styled('div')(({ theme }) => ({ ... }))`, camelCase) au lieu de template-string. Fait sur
  `BootSequence.styles.ts` (converti) et `ProjectRow`/`ProjectsTree`/`CommandPrompt` (créés direct
  en objet). Les fichiers **existants** non touchés pour cette conversion (StackChip, TimelineItem,
  CareerTimeline, etc.) restent en template-string — pas de rétro-conversion en masse sans
  demande explicite. Toujours garder les références `theme.*` à l'intérieur de la fonction (jamais
  de valeurs codées en dur).
- `ProjectsTree`/`ProjectRow` remplacent `ProjectsGrid`/`ProjectCard` (supprimés). Chaque projet a
  un champ `fileKind: 'exe' | 'py' | 'dir'` dans `projects.{fr,en}.json` qui pilote à la fois le
  nom affiché (`override.exe`, `lost-world.py`, `culture-live/`) et le CTA (`RUN →` seulement pour
  `exe`, `OPEN →` sinon) — un 6e projet n'a besoin que d'une entrée de données, pas de code.
- `CommandPrompt` (⌘K) : le bouton du Header le déclenche via un `CustomEvent('command-prompt:toggle')`
  sur `window`, pas un contexte React — volontairement, pour un simple booléen consommé par un seul
  bouton. `cd`/`open` valident contre les vrais ids de section (`useScrollSpy`) et les vrais slugs
  de projet — une faute de frappe donne une ligne d'erreur rouge, jamais un no-op silencieux.
- `theme.zIndex.behind` (-1) : un z-index négatif sur un `position: fixed` peint avant TOUT le
  contenu normal de la page, contrairement à `z-index: 0` qui ne peint qu'avant les éléments non-
  positionnés (`position: static`) — un élément avec juste `position: relative` (sans z-index
  explicite) passera quand même devant un `z-index: 0`. `GridOverlay` utilise ce token ; si un
  futur overlay doit être garanti derrière tout, réutiliser `behind`, pas `base`.
- `CustomCursor` a deux couches distinctes : `Dot` (4px, `colors.nexus`, suit la souris sans spring
  — c'est le curseur réel) et `Trail` (spring, coloré/dimensionné par état, `zIndex.toast + 1` donc
  au-dessus du Dot). Ne pas remettre un seul carré avec spring sur les deux rôles — le décalage
  entre le vrai pointeur et le carré spring est justement ce que l'utilisateur a fait corriger.
- `stack.{fr,en}.json` a un champ `years` par techno (nombre réel donné par l'utilisateur, jamais
  à inventer/estimer soi-même) et `stack.en.json` a maintenant ses catégories traduites
  (`Database`/`Tools`, pas `Base de données`/`Outils`).
