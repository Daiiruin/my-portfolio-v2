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
import { Header, SectionLabel, CategoryGroup, CategoryTitle, Grid } from './StackGrid.styles'

export function StackGrid() {
  const { t } = useTranslation()
  const reducedMotion = useReducedMotion()
  const stack = useLocaleData({ fr: stackFr, en: stackEn })

  const container = reducedMotion ? reducedStagger : staggerContainer
  const item = reducedMotion ? reducedFadeIn : fadeInUpScroll

  const categories = [...new Set(stack.map((tech) => tech.category))]

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

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {categories.map((category) => (
            <CategoryGroup key={category} variants={item}>
              <CategoryTitle>{category}</CategoryTitle>
              <Grid>
                {stack
                  .filter((tech) => tech.category === category)
                  .map((tech) => (
                    <StackChip key={tech.name} name={tech.name} icon={tech.icon} />
                  ))}
              </Grid>
            </CategoryGroup>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
