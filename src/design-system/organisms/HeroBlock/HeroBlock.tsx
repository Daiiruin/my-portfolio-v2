import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { LuArrowDown } from 'react-icons/lu'
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
  HeroInner,
  TagLine,
  Dot,
  Name,
  Title,
  Bio,
  Actions,
  ScrollHint,
  ScrollLine,
} from './HeroBlock.styles'

export function HeroBlock() {
  const { t } = useTranslation()
  const reducedMotion = useReducedMotion()
  const profile = useLocaleData({ fr: profileFr, en: profileEn })

  const container = reducedMotion ? reducedStagger : staggerContainer
  const item = reducedMotion ? reducedFadeIn : fadeInUp

  return (
    <HeroWrapper>
      <Container>
        <HeroInner variants={container} initial="hidden" animate="visible">
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

          <Actions variants={item}>
            <Button
              as="a"
              href="#projects"
              variant="primary"
              size="lg"
            >
              {t('hero.cta')}
            </Button>
            <Button
              as="a"
              href="#contact"
              variant="secondary"
              size="lg"
            >
              {t('nav.contact')}
            </Button>
          </Actions>
        </HeroInner>
      </Container>

      <ScrollHint
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <Icon icon={LuArrowDown} size={14} />
        <ScrollLine
          animate={reducedMotion ? {} : { scaleY: [0, 1, 0], y: [0, 0, 20] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: 'top' }}
        />
      </ScrollHint>
    </HeroWrapper>
  )
}
