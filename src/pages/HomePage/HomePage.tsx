import styled from 'styled-components'
import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { PageLayout } from '../../templates/PageLayout'
import { Container } from '../../design-system/atoms/Container'
import { Section } from '../../design-system/atoms/Section'
import { Heading } from '../../design-system/atoms/Heading'
import { HeroBlock } from '../../design-system/organisms/HeroBlock'
import { AboutBlock } from '../../design-system/organisms/AboutBlock'
import { StackGrid } from '../../design-system/organisms/StackGrid'
import { CareerTimeline } from '../../design-system/organisms/CareerTimeline'
import { ProjectsGrid } from '../../design-system/organisms/ProjectsGrid'
import { ContactForm } from '../../design-system/organisms/ContactForm'
import { ContactInfo } from '../../design-system/organisms/ContactInfo'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { staggerContainer, fadeInUpScroll, reducedStagger, reducedFadeIn } from '../../lib/motion'
import { media } from '../../design-system/theme/tokens'

const ContactHeader = styled(motion.div)`
  margin-bottom: ${({ theme }) => theme.space['12']};
`

const SectionLabel = styled.span`
  font-size: ${({ theme }) => theme.font.size.xs};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  color: ${({ theme }) => theme.colors.accent};
  text-transform: uppercase;
  letter-spacing: ${({ theme }) => theme.font.letterSpacing.wider};
  display: block;
  margin-bottom: ${({ theme }) => theme.space['2']};
`

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.space['12']};

  ${media.md} {
    grid-template-columns: 1fr 1fr;
    gap: ${({ theme }) => theme.space['16']};
  }
`

export function HomePage() {
  const { t } = useTranslation()
  const reducedMotion = useReducedMotion()
  const container = reducedMotion ? reducedStagger : staggerContainer
  const item = reducedMotion ? reducedFadeIn : fadeInUpScroll

  return (
    <PageLayout>
      <HeroBlock />
      <AboutBlock />
      <StackGrid />
      <CareerTimeline />
      <ProjectsGrid />

      <Section id="contact">
        <Container>
          <ContactHeader
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.div variants={item}>
              <SectionLabel>{t('contact.title')}</SectionLabel>
              <Heading level={2}>Contact</Heading>
            </motion.div>
          </ContactHeader>

          <ContactGrid>
            <ContactInfo />
            <ContactForm />
          </ContactGrid>
        </Container>
      </Section>
    </PageLayout>
  )
}
