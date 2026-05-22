import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { Text } from '../../atoms/Text'
import { Icon } from '../../atoms/Icon'
import { StyledFooter, Inner, Links, SocialLink } from './Footer.styles'
import contactData from '../../../data/contact.en.json'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <StyledFooter>
      <Inner>
        <Text variant="caption">© {year} — Built with React & styled-components</Text>
        <Links>
          {contactData.github && (
            <SocialLink href={contactData.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Icon icon={FaGithub} size={18} />
            </SocialLink>
          )}
          {contactData.linkedin && (
            <SocialLink href={contactData.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Icon icon={FaLinkedin} size={18} />
            </SocialLink>
          )}
        </Links>
      </Inner>
    </StyledFooter>
  )
}
