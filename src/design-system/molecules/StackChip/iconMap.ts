import type { IconType } from 'react-icons'
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiStyledcomponents,
  SiNodedotjs,
  SiNestjs,
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiGithubactions,
  SiGit,
  SiFigma,
  SiJavascript,
  SiVuedotjs,
  SiMongodb,
  SiGraphql,
  SiTailwindcss,
  SiVercel,
  SiVite,
  SiPrisma,
} from 'react-icons/si'
import { LuCode } from 'react-icons/lu'

export const iconMap: Record<string, IconType> = {
  react: SiReact,
  typescript: SiTypescript,
  nextdotjs: SiNextdotjs,
  styledcomponents: SiStyledcomponents,
  nodedotjs: SiNodedotjs,
  nestjs: SiNestjs,
  postgresql: SiPostgresql,
  redis: SiRedis,
  docker: SiDocker,
  githubactions: SiGithubactions,
  git: SiGit,
  figma: SiFigma,
  javascript: SiJavascript,
  vuedotjs: SiVuedotjs,
  mongodb: SiMongodb,
  graphql: SiGraphql,
  tailwindcss: SiTailwindcss,
  vercel: SiVercel,
  vite: SiVite,
  prisma: SiPrisma,
}

export function getIcon(key: string): IconType {
  return iconMap[key] ?? LuCode
}
