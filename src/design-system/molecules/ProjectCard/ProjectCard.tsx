import { FaGithub } from 'react-icons/fa6'
import { LuArrowRight, LuExternalLink } from 'react-icons/lu'
import { useTranslation } from 'react-i18next'
import { Badge } from '../../atoms/Badge'
import { Icon } from '../../atoms/Icon'
import { CardWrapper, Card, ImageArea, Body, Title, Description, StackRow, Footer, ViewLink, IconLinks, IconLink } from './ProjectCard.styles'

type Props = {
  slug: string
  title: string
  shortDescription: string
  stack: string[]
  github: string
  demo: string | null
}

export function ProjectCard({ slug, title, shortDescription, stack, github, demo }: Props) {
  const { t } = useTranslation()

  return (
    <CardWrapper>
    <Card>
      <ImageArea />
      <Body>
        <Title>{title}</Title>
        <Description>{shortDescription}</Description>
        <StackRow>
          {stack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </StackRow>
      </Body>
      <Footer>
        <ViewLink to={`/projects/${slug}`}>
          {t('projects.viewDetails')}
          <Icon icon={LuArrowRight} size={14} />
        </ViewLink>
        <IconLinks>
          <IconLink href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Icon icon={FaGithub} size={18} />
          </IconLink>
          {demo && (
            <IconLink href={demo} target="_blank" rel="noopener noreferrer" aria-label="Demo">
              <Icon icon={LuExternalLink} size={18} />
            </IconLink>
          )}
        </IconLinks>
      </Footer>
    </Card>
    </CardWrapper>
  )
}
