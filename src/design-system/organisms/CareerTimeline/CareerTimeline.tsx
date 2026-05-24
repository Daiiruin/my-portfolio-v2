import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { Heading } from '../../atoms/Heading'
import { Container } from '../../atoms/Container'
import { Section } from '../../atoms/Section'
import { TimelineItem } from '../../molecules/TimelineItem'
import { useLocaleData } from '../../../hooks/useLocaleData'
import { useReducedMotion } from '../../../hooks/useReducedMotion'
import {
  staggerContainer,
  fadeInUpScroll,
  reducedStagger,
  reducedFadeIn,
} from '../../../lib/motion'
import careerFr from '../../../data/career.fr.json'
import careerEn from '../../../data/career.en.json'
import { Header, SectionLabel, List } from './CareerTimeline.styles'

type CareerEntry = {
  id: string
  period: string
  company: string
  role: string
  description: string
}

export function CareerTimeline() {
  const { t } = useTranslation()
  const reducedMotion = useReducedMotion()
  const career = useLocaleData<CareerEntry[]>({ fr: careerFr, en: careerEn })

  const container = reducedMotion ? reducedStagger : staggerContainer
  const item = reducedMotion ? reducedFadeIn : fadeInUpScroll

  return (
    <Section id="career">
      <Container>
        <Header
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.div variants={item}>
            <SectionLabel>{t('career.title')}</SectionLabel>
            <Heading level={2}>Experience</Heading>
          </motion.div>
        </Header>

        <List
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {career.map((entry, index) => (
            <motion.div key={entry.id} variants={item}>
              <TimelineItem
                period={entry.period}
                company={entry.company}
                role={entry.role}
                description={entry.description}
                isPulse={index === 0}
              />
            </motion.div>
          ))}
        </List>
      </Container>
    </Section>
  )
}
