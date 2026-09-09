import { motion } from 'motion/react'
import { Heading } from '../../atoms/Heading'
import { Container } from '../../atoms/Container'
import { Section } from '../../atoms/Section'
import { ProjectRow } from '../../molecules/ProjectRow'
import { SectionMeta } from '../../molecules/SectionMeta'
import { useLocaleData } from '../../../hooks/useLocaleData'
import { useReducedMotion } from '../../../hooks/useReducedMotion'
import { staggerContainer, fadeInUpScroll, reducedStagger, reducedFadeIn } from '../../../lib/motion'
import projectsFr from '../../../data/projects.fr.json'
import projectsEn from '../../../data/projects.en.json'
import { Header, TreeRoot, List } from './ProjectsTree.styles'

type Project = {
  slug: string
  fileKind: 'exe' | 'py' | 'dir'
  title: string
  shortDescription: string
  description: string
  stack: string[]
  image: string
  github: string | null
  demo: string | null
  inProgress: boolean
  codeName?: string
}

export function ProjectsTree() {
  const reducedMotion = useReducedMotion()
  const projects = useLocaleData<Project[]>({
    fr: projectsFr as Project[],
    en: projectsEn as Project[],
  })

  const container = reducedMotion ? reducedStagger : staggerContainer
  const item = reducedMotion ? reducedFadeIn : fadeInUpScroll

  return (
    <Section id="projects">
      <Container>
        <Header
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.div variants={item}>
            <SectionMeta index={4} path="projects" count={projects.length} countLabel="entries" />
            <Heading level={2}>Projects</Heading>
          </motion.div>
        </Header>

        <TreeRoot>./projects/</TreeRoot>

        <List
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {projects.map((project) => (
            <motion.div key={project.slug} variants={item}>
              <ProjectRow
                slug={project.slug}
                fileKind={project.fileKind}
                title={project.title}
                shortDescription={project.shortDescription}
                stack={project.stack}
                image={project.image}
                github={project.github}
                demo={project.demo}
                inProgress={project.inProgress}
                codeName={project.codeName}
              />
            </motion.div>
          ))}
        </List>
      </Container>
    </Section>
  )
}
