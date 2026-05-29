import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { LuBriefcase, LuGraduationCap } from 'react-icons/lu'
import { Heading } from '../../atoms/Heading'
import { Container } from '../../atoms/Container'
import { Section } from '../../atoms/Section'
import { Icon } from '../../atoms/Icon'
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
import { Header, SectionLabel, List, TabBar, TabButton, TabBadge } from './CareerTimeline.styles'

type CareerEntry = {
  id: string
  type: 'work' | 'education'
  period: string
  company: string
  role: string
  description: string
}

export function CareerTimeline() {
  const { t } = useTranslation()
  const reducedMotion = useReducedMotion()
  const career = useLocaleData<CareerEntry[]>({ fr: careerFr as CareerEntry[], en: careerEn as CareerEntry[] })
  const [activeTab, setActiveTab] = useState<'work' | 'education'>('work')

  const container = reducedMotion ? reducedStagger : staggerContainer
  const item = reducedMotion ? reducedFadeIn : fadeInUpScroll

  const filtered = career.filter((entry) => entry.type === activeTab)

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

        <TabBar>
          <TabButton $active={activeTab === 'work'} onClick={() => setActiveTab('work')}>
            <Icon icon={LuBriefcase} size={14} />
            {t('career.work')}
            <TabBadge $active={activeTab === 'work'}>{t('career.workBadge')}</TabBadge>
          </TabButton>
          <TabButton $active={activeTab === 'education'} onClick={() => setActiveTab('education')}>
            <Icon icon={LuGraduationCap} size={14} />
            {t('career.education')}
            <TabBadge $active={activeTab === 'education'}>{t('career.educationBadge')}</TabBadge>
          </TabButton>
        </TabBar>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={reducedMotion ? { duration: 0 } : { duration: 0.2, ease: 'easeOut' }}
          >
            <List
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              {filtered.map((entry, index) => (
                <motion.div key={entry.id} variants={item}>
                  <TimelineItem
                    type={entry.type}
                    period={entry.period}
                    company={entry.company}
                    role={entry.role}
                    description={entry.description}
                    isPulse={index === 0 && activeTab === 'work'}
                  />
                </motion.div>
              ))}
            </List>
          </motion.div>
        </AnimatePresence>
      </Container>
    </Section>
  )
}
