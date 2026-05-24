import styled from 'styled-components'
import { PageLayout } from '../../templates/PageLayout'
import { Container } from '../../design-system/atoms/Container'
import { Section } from '../../design-system/atoms/Section'
import { Heading } from '../../design-system/atoms/Heading'
import { Text } from '../../design-system/atoms/Text'
import { HeroBlock } from '../../design-system/organisms/HeroBlock'
import { AboutBlock } from '../../design-system/organisms/AboutBlock'
import { StackGrid } from '../../design-system/organisms/StackGrid'
import { CareerTimeline } from '../../design-system/organisms/CareerTimeline'
import { ProjectsGrid } from '../../design-system/organisms/ProjectsGrid'

const SectionPlaceholder = styled.div`
  padding: ${({ theme }) => theme.space['8']};
  border: 1px dashed ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  text-align: center;
`

export function HomePage() {
  return (
    <PageLayout>
      <HeroBlock />
      <AboutBlock />
      <StackGrid />

      <CareerTimeline />

      <ProjectsGrid />

      {/* Contact — PR #8 */}
      <Section id="contact">
        <Container>
          <SectionPlaceholder>
            <Text variant="overline">PR #8</Text>
            <Heading level={2} style={{ marginTop: '8px' }}>Contact</Heading>
          </SectionPlaceholder>
        </Container>
      </Section>
    </PageLayout>
  )
}
