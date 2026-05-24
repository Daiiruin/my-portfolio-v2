import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { LuMapPin, LuCircleCheck } from 'react-icons/lu'
import { Heading } from '../../atoms/Heading'
import { Container } from '../../atoms/Container'
import { Section } from '../../atoms/Section'
import { Icon } from '../../atoms/Icon'
import { useLocaleData } from '../../../hooks/useLocaleData'
import { useReducedMotion } from '../../../hooks/useReducedMotion'
import { staggerContainer, fadeInUpScroll, reducedStagger, reducedFadeIn } from '../../../lib/motion'
import profileFr from '../../../data/profile.fr.json'
import profileEn from '../../../data/profile.en.json'
import {
  Grid,
  Left,
  SectionLabel,
  BioText,
  InfoRow,
  InfoChip,
  Right,
  AvatarFrame,
  AvatarPlaceholder,
  AvatarAccent,
} from './AboutBlock.styles'

export function AboutBlock() {
  const { t } = useTranslation()
  const reducedMotion = useReducedMotion()
  const profile = useLocaleData({ fr: profileFr, en: profileEn })

  const container = reducedMotion ? reducedStagger : staggerContainer
  const item = reducedMotion ? reducedFadeIn : fadeInUpScroll

  const initials = `${profile.firstName[0]}${profile.lastName[0]}`

  return (
    <Section id="about">
      <Container>
        <Grid>
          <Left
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <SectionLabel variants={item}>{t('about.title')}</SectionLabel>
            <motion.div variants={item}>
              <Heading level={2}>{profile.firstName} {profile.lastName}</Heading>
            </motion.div>
            <BioText variants={item}>{profile.bio}</BioText>
            <InfoRow variants={item}>
              <InfoChip>
                <Icon icon={LuMapPin} size={14} />
                {profile.location}
              </InfoChip>
              <InfoChip>
                <Icon icon={LuCircleCheck} size={14} />
                {profile.title}
              </InfoChip>
            </InfoRow>
          </Left>

          <Right
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <AvatarFrame>
              <AvatarPlaceholder>{initials}</AvatarPlaceholder>
              <AvatarAccent />
            </AvatarFrame>
          </Right>
        </Grid>
      </Container>
    </Section>
  )
}
