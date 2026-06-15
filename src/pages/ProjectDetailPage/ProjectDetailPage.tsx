import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import styled from 'styled-components'
import { motion } from 'motion/react'
import { FaGithub } from 'react-icons/fa6'
import { LuExternalLink } from 'react-icons/lu'
import { useTranslation } from 'react-i18next'
import { PageLayout } from '../../templates/PageLayout'
import { Container } from '../../design-system/atoms/Container'
import { Heading } from '../../design-system/atoms/Heading'
import { Badge } from '../../design-system/atoms/Badge'
import { Button } from '../../design-system/atoms/Button'
import { Icon } from '../../design-system/atoms/Icon'
import { useLocaleData } from '../../hooks/useLocaleData'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { fadeInUp, staggerContainer, reducedFadeIn, reducedStagger } from '../../lib/motion'
import projectsFr from '../../data/projects.fr.json'
import projectsEn from '../../data/projects.en.json'
import { media } from '../../design-system/theme/tokens'

type Project = {
  slug: string
  title: string
  shortDescription: string
  description: string
  stack: string[]
  image: string
  github: string | null
  demo: string | null
}

const Hero = styled.div`
  padding: ${({ theme }) => theme.space['16']} 0 ${({ theme }) => theme.space['12']};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`

const BackButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.textSubtle};
  font-size: ${({ theme }) => theme.font.size.sm};
  cursor: pointer;
  padding: 0;
  margin-bottom: ${({ theme }) => theme.space['8']};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space['1']};
  transition: color ${({ theme }) => theme.transition.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`

const Meta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.space['2']};
  margin-top: ${({ theme }) => theme.space['4']};
`

const ImageWrapper = styled(motion.div)`
  margin: ${({ theme }) => theme.space['8']} 0 0;
  border-radius: ${({ theme }) => theme.radii.xl};
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  position: relative;
  background: ${({ theme }) => theme.colors.surface};

  img {
    width: 100%;
    height: 320px;
    object-fit: cover;
    display: block;

    ${media.md} {
      height: 480px;
    }
  }
`

const Content = styled(motion.div)`
  padding: ${({ theme }) => theme.space['12']} 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space['8']};

  ${media.md} {
    flex-direction: row;
    gap: ${({ theme }) => theme.space['16']};
  }
`

const DescriptionBlock = styled(motion.div)`
  flex: 1;
`

const Sidebar = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space['6']};

  ${media.md} {
    width: 260px;
    flex-shrink: 0;
  }
`

const SidebarSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space['3']};
`

const SidebarLabel = styled.span`
  font-size: ${({ theme }) => theme.font.size.xs};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  color: ${({ theme }) => theme.colors.textSubtle};
  text-transform: uppercase;
  letter-spacing: ${({ theme }) => theme.font.letterSpacing.wider};
`

const StackRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.space['2']};
`

const DescriptionText = styled.p`
  font-size: ${({ theme }) => theme.font.size.base};
  line-height: ${({ theme }) => theme.font.lineHeight.relaxed};
  color: ${({ theme }) => theme.colors.textMuted};
`

const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space['2']};
`

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const { t } = useTranslation()
  const reducedMotion = useReducedMotion()
  const projects = useLocaleData<Project[]>({ fr: projectsFr, en: projectsEn })

  const project = projects.find((p) => p.slug === slug)

  useEffect(() => {
    if (!project) navigate('/', { replace: true })
  }, [project, navigate])

  if (!project) return null

  const container = reducedMotion ? reducedStagger : staggerContainer
  const item = reducedMotion ? reducedFadeIn : fadeInUp

  return (
    <PageLayout>
      <Hero>
        <Container>
          <motion.div variants={container} initial="hidden" animate="visible">
            <motion.div variants={item}>
              <BackButton onClick={() => navigate(-1)}>{t('projects.backHome')}</BackButton>
            </motion.div>
            <motion.div variants={item}>
              <Heading level={1}>{project.title}</Heading>
            </motion.div>
            <motion.div variants={item}>
              <Meta>
                {project.stack.map((tech) => (
                  <Badge key={tech} variant="accent">
                    {tech}
                  </Badge>
                ))}
              </Meta>
            </motion.div>
          </motion.div>
        </Container>
      </Hero>

      <Container>
        <ImageWrapper variants={item} initial="hidden" animate="visible">
          <img src={project.image} alt={project.title} />
        </ImageWrapper>

        <Content variants={container} initial="hidden" animate="visible">
          <DescriptionBlock variants={item}>
            <DescriptionText>{project.description}</DescriptionText>
          </DescriptionBlock>

          <Sidebar variants={item}>
            <SidebarSection>
              <SidebarLabel>Stack</SidebarLabel>
              <StackRow>
                {project.stack.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </StackRow>
            </SidebarSection>

            <SidebarSection>
              <SidebarLabel>Links</SidebarLabel>
              <Links>
                {project.github ? (
                  <Button
                    as="a"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="secondary"
                    size="sm"
                  >
                    <Icon icon={FaGithub} size={16} />
                    GitHub
                  </Button>
                ) : null}
                {project.demo ? (
                  <Button
                    as="a"
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    size="sm"
                  >
                    <Icon icon={LuExternalLink} size={16} />
                    Demo
                  </Button>
                ) : null}
              </Links>
            </SidebarSection>
          </Sidebar>
        </Content>
      </Container>
    </PageLayout>
  )
}
