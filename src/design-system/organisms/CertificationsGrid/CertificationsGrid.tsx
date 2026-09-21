import { motion } from 'motion/react'
import { Heading } from '../../atoms/Heading'
import { Container } from '../../atoms/Container'
import { Section } from '../../atoms/Section'
import { CertCard } from '../../molecules/CertCard'
import { SectionMeta } from '../../molecules/SectionMeta'
import { useReducedMotion } from '../../../hooks/useReducedMotion'
import { staggerContainer, fadeInUpScroll, reducedStagger, reducedFadeIn } from '../../../lib/motion'
import certifications from '../../../data/certifications.json'
import { Header, CategoryGroup, CategoryTitle, Grid } from './CertificationsGrid.styles'

export function CertificationsGrid() {
  const reducedMotion = useReducedMotion()

  const container = reducedMotion ? reducedStagger : staggerContainer
  const item = reducedMotion ? reducedFadeIn : fadeInUpScroll

  const techs = [...new Set(certifications.map((cert) => cert.tech))]

  return (
    <Section id="certifications">
      <Container>
        <Header
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.div variants={item}>
            <SectionMeta index={3} path="certifications" count={certifications.length} countLabel="badges" />
            <Heading level={2}>Certifications</Heading>
          </motion.div>
        </Header>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {techs.map((tech) => (
            <CategoryGroup key={tech} variants={item}>
              <CategoryTitle>{tech}</CategoryTitle>
              <Grid>
                {certifications
                  .filter((cert) => cert.tech === tech)
                  .map((cert) => (
                    <CertCard key={cert.id} title={cert.title} link={cert.link} imageUrl={cert.imageUrl} />
                  ))}
              </Grid>
            </CategoryGroup>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
