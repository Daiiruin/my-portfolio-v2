import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { Heading } from '../../atoms/Heading'
import { Container } from '../../atoms/Container'
import { Section } from '../../atoms/Section'
import { ProjectCard } from '../../molecules/ProjectCard'
// import { AnnouncementMarquee } from '../../molecules/AnnouncementMarquee'
import { useLocaleData } from '../../../hooks/useLocaleData'
import { useReducedMotion } from '../../../hooks/useReducedMotion'
import { staggerContainer, fadeInUpScroll, reducedStagger, reducedFadeIn } from '../../../lib/motion'
import projectsFr from '../../../data/projects.fr.json'
import projectsEn from '../../../data/projects.en.json'
import { Header, SectionLabel, Grid } from './ProjectsGrid.styles'

type Project = {
  slug: string
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

export function ProjectsGrid() {
  const { t } = useTranslation()
  const reducedMotion = useReducedMotion()
  const projects = useLocaleData<Project[]>({ fr: projectsFr, en: projectsEn })

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
            <SectionLabel>{t('projects.title')}</SectionLabel>
            <Heading level={2}>Projects</Heading>
          </motion.div>
        </Header>

        {/*<AnnouncementMarquee />*/}

        <Grid
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {projects.map((project) => (
            <motion.div key={project.slug} variants={item}>
              <ProjectCard
                slug={project.slug}
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
        </Grid>
      </Container>
    </Section>
  )
}
