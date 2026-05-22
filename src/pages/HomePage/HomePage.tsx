import styled from 'styled-components'
import { PageLayout } from '../../templates/PageLayout'
import { Container } from '../../design-system/atoms/Container'
import { Section } from '../../design-system/atoms/Section'
import { Heading } from '../../design-system/atoms/Heading'
import { Text } from '../../design-system/atoms/Text'

const HeroPlaceholder = styled.div`
  min-height: calc(100vh - 60px);
  display: flex;
  align-items: center;
`

const SectionPlaceholder = styled.div`
  padding: ${({ theme }) => theme.space['8']};
  border: 1px dashed ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  text-align: center;
`

export function HomePage() {
  return (
    <PageLayout>
      {/* Hero — PR #4 */}
      <HeroPlaceholder>
        <Container>
          <Text variant="overline" as="p">Coming in PR #4</Text>
          <Heading level={1} style={{ marginTop: '12px' }}>Hero Section</Heading>
        </Container>
      </HeroPlaceholder>

      {/* About + Stack — PR #5 */}
      <Section id="about">
        <Container>
          <SectionPlaceholder>
            <Text variant="overline">PR #5</Text>
            <Heading level={2} style={{ marginTop: '8px' }}>About</Heading>
          </SectionPlaceholder>
        </Container>
      </Section>

      <Section id="stack">
        <Container>
          <SectionPlaceholder>
            <Text variant="overline">PR #5</Text>
            <Heading level={2} style={{ marginTop: '8px' }}>Stack</Heading>
          </SectionPlaceholder>
        </Container>
      </Section>

      {/* Career — PR #6 */}
      <Section id="career">
        <Container>
          <SectionPlaceholder>
            <Text variant="overline">PR #6</Text>
            <Heading level={2} style={{ marginTop: '8px' }}>Career</Heading>
          </SectionPlaceholder>
        </Container>
      </Section>

      {/* Projects — PR #7 */}
      <Section id="projects">
        <Container>
          <SectionPlaceholder>
            <Text variant="overline">PR #7</Text>
            <Heading level={2} style={{ marginTop: '8px' }}>Projects</Heading>
          </SectionPlaceholder>
        </Container>
      </Section>

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
