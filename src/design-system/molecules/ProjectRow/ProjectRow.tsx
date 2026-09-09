import { FaGithub } from 'react-icons/fa6'
import { LuExternalLink } from 'react-icons/lu'
import { Badge } from '../../atoms/Badge'
import { Icon } from '../../atoms/Icon'
import { GlitchText } from '../../atoms/GlitchText'
import { Row, Thumb, Main, FileName, Tagline, StackRow, Actions, RunLink, IconLink } from './ProjectRow.styles'

type FileKind = 'exe' | 'py' | 'dir'

type Props = {
  slug: string
  fileKind: FileKind
  shortDescription: string
  stack: string[]
  image: string
  title: string
  github: string | null
  demo: string | null
  inProgress?: boolean
  codeName?: string
}

export function ProjectRow({
  slug,
  fileKind,
  shortDescription,
  stack,
  image,
  title,
  github,
  demo,
  inProgress = false,
  codeName,
}: Props) {
  const fileName = fileKind === 'dir' ? `${slug}/` : `${slug}.${fileKind}`

  return (
    <Row>
      <Thumb>{inProgress ? '?' : <img src={image} alt={title} />}</Thumb>
      <Main>
        <FileName>{inProgress && codeName ? <GlitchText text={codeName} /> : fileName}</FileName>
        <Tagline>{shortDescription}</Tagline>
        <StackRow>
          {stack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </StackRow>
      </Main>
      {inProgress ? null : (
        <Actions>
          <RunLink to={`/projects/${slug}`}>{fileKind === 'exe' ? 'RUN →' : 'OPEN →'}</RunLink>
          {github ? (
            <IconLink href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Icon icon={FaGithub} size={18} />
            </IconLink>
          ) : null}
          {demo ? (
            <IconLink href={demo} target="_blank" rel="noopener noreferrer" aria-label="Demo">
              <Icon icon={LuExternalLink} size={18} />
            </IconLink>
          ) : null}
        </Actions>
      )}
    </Row>
  )
}
