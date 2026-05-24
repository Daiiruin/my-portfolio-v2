import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6'
import { LuMail, LuMapPin } from 'react-icons/lu'
import { Icon } from '../../atoms/Icon'
import { useLocaleData } from '../../../hooks/useLocaleData'
import { useReducedMotion } from '../../../hooks/useReducedMotion'
import { staggerContainer, fadeInUpScroll, reducedStagger, reducedFadeIn } from '../../../lib/motion'
import contactFr from '../../../data/contact.fr.json'
import contactEn from '../../../data/contact.en.json'
import { Wrapper, Intro, List, Item, StaticItem } from './ContactInfo.styles'

type ContactData = {
  email: string
  location: string
  linkedin: string
  github: string
  twitter: string | null
}

export function ContactInfo() {
  const { t } = useTranslation()
  const reducedMotion = useReducedMotion()
  const contact = useLocaleData<ContactData>({ fr: contactFr, en: contactEn })

  const container = reducedMotion ? reducedStagger : staggerContainer
  const item = reducedMotion ? reducedFadeIn : fadeInUpScroll

  return (
    <Wrapper
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
    >
      <motion.div variants={item}>
        <Intro>{t('contact.intro')}</Intro>
      </motion.div>

      <List variants={container}>
        <motion.div variants={item}>
          <Item href={`mailto:${contact.email}`}>
            <Icon icon={LuMail} size={18} />
            {contact.email}
          </Item>
        </motion.div>

        <motion.div variants={item}>
          <Item href={contact.linkedin} target="_blank" rel="noopener noreferrer">
            <Icon icon={FaLinkedin} size={18} />
            LinkedIn
          </Item>
        </motion.div>

        <motion.div variants={item}>
          <Item href={contact.github} target="_blank" rel="noopener noreferrer">
            <Icon icon={FaGithub} size={18} />
            GitHub
          </Item>
        </motion.div>

        {contact.twitter && (
          <motion.div variants={item}>
            <Item href={contact.twitter} target="_blank" rel="noopener noreferrer">
              <Icon icon={FaXTwitter} size={18} />
              Twitter / X
            </Item>
          </motion.div>
        )}

        <motion.div variants={item}>
          <StaticItem>
            <Icon icon={LuMapPin} size={18} />
            {contact.location}
          </StaticItem>
        </motion.div>
      </List>
    </Wrapper>
  )
}
