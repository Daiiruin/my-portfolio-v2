import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { LuArrowDown, LuMapPin } from 'react-icons/lu'
import { Button } from '../../atoms/Button'
import { Icon } from '../../atoms/Icon'
import { Container } from '../../atoms/Container'
import { useReducedMotion } from '../../../hooks/useReducedMotion'
import { useLocaleData } from '../../../hooks/useLocaleData'
import { staggerContainer, fadeInUp, reducedStagger, reducedFadeIn } from '../../../lib/motion'
import profileFr from '../../../data/profile.fr.json'
import profileEn from '../../../data/profile.en.json'
import {
  HeroWrapper,
  HeroGrid,
  HeroLeft,
  HeroRight,
  TagLine,
  Dot,
  Name,
  Title,
  Bio,
  InfoRow,
  InfoChip,
  Actions,
  ScrollHint,
  ScrollLine,
  AvatarFrame,
  AvatarPlaceholder,
  AvatarAccent,
} from './HeroBlock.styles'

export function HeroBlock() {
  const { t } = useTranslation()
  const reducedMotion = useReducedMotion()
  const profile = useLocaleData({ fr: profileFr, en: profileEn })

  const container = reducedMotion ? reducedStagger : staggerContainer
  const item = reducedMotion ? reducedFadeIn : fadeInUp

  const initials = `${profile.firstName[0]}${profile.lastName[0]}`

  return (
    <HeroWrapper id="about">
      <Container>
        <HeroGrid>
          <HeroLeft variants={container} initial="hidden" animate="visible">
            <TagLine variants={item}>
              <Dot />
              <motion.span
                style={{
                  fontSize: '12px',
                  fontFamily: 'var(--font-mono, monospace)',
                  color: 'var(--text-subtle)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}
              >
                {profile.title}
              </motion.span>
            </TagLine>

            <Name variants={item}>
              {t('hero.greeting')}{' '}
              <span style={{ color: 'inherit' }}>
                {profile.firstName} {profile.lastName}
              </span>
            </Name>

            <Title variants={item}>{profile.title}</Title>

            <Bio variants={item}>{profile.bio}</Bio>

            <InfoRow variants={item}>
              <InfoChip>
                <Icon icon={LuMapPin} size={14} />
                {profile.location}
              </InfoChip>
            </InfoRow>

            <Actions variants={item}>
              <Button as="a" href="#projects" variant="primary" size="lg">
                {t('hero.cta')}
              </Button>
              <Button as="a" href="#contact" variant="secondary" size="lg">
                {t('nav.contact')}
              </Button>
            </Actions>
          </HeroLeft>

          <HeroRight
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={
              reducedMotion
                ? { duration: 0 }
                : { delay: 0.6, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
            }
          >
            <AvatarFrame>
              <AvatarPlaceholder>{initials}</AvatarPlaceholder>
              <AvatarAccent />
            </AvatarFrame>
          </HeroRight>
        </HeroGrid>
      </Container>

      <ScrollHint
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <motion.span
          animate={reducedMotion ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
          style={{ display: 'flex' }}
        >
          <Icon icon={LuArrowDown} size={22} />
        </motion.span>
        <ScrollLine
          animate={reducedMotion ? {} : { scaleY: [0, 1, 0], y: [0, 0, 20] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: 'top' }}
        />
      </ScrollHint>
    </HeroWrapper>
  )
}
