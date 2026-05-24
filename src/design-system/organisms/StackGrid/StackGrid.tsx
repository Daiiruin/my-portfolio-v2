import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { Heading } from '../../atoms/Heading'
import { Container } from '../../atoms/Container'
import { Section } from '../../atoms/Section'
import { StackChip } from '../../molecules/StackChip'
import { useLocaleData } from '../../../hooks/useLocaleData'
import { useReducedMotion } from '../../../hooks/useReducedMotion'
import { staggerContainer, fadeInUpScroll, reducedStagger, reducedFadeIn } from '../../../lib/motion'
import stackFr from '../../../data/stack.fr.json'
import stackEn from '../../../data/stack.en.json'
import { Header, SectionLabel, Grid } from './StackGrid.styles'

export function StackGrid() {
  const { t } = useTranslation()
  const reducedMotion = useReducedMotion()
  const stack = useLocaleData({ fr: stackFr, en: stackEn })

  const container = reducedMotion ? reducedStagger : staggerContainer
  const item = reducedMotion ? reducedFadeIn : fadeInUpScroll

  return (
    <Section id="stack">
      <Container>
        <Header
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.div variants={item}>
            <SectionLabel>{t('stack.title')}</SectionLabel>
            <Heading level={2}>Technologies</Heading>
          </motion.div>
        </Header>

        <Grid
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {stack.map((tech) => (
            <motion.div key={tech.name} variants={item}>
              <StackChip name={tech.name} icon={tech.icon} />
            </motion.div>
          ))}
        </Grid>
      </Container>
    </Section>
  )
}
