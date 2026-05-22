import { ArrowRight, GitBranch, Mail, Star, PartyPopper } from 'lucide-react'
import { Button } from '../../design-system/atoms/Button'
import { Text } from '../../design-system/atoms/Text'
import { Heading } from '../../design-system/atoms/Heading'
import { Link } from '../../design-system/atoms/Link'
import { Icon } from '../../design-system/atoms/Icon'
import { Badge } from '../../design-system/atoms/Badge'
import { Container } from '../../design-system/atoms/Container'
import { Section } from '../../design-system/atoms/Section'
import styled from 'styled-components'

const Page = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
`

const EasterEggBanner = styled.div`
  background: ${({ theme }) => theme.colors.accentSubtle};
  border-bottom: 1px solid ${({ theme }) => theme.colors.accent};
  padding: ${({ theme }) => `${theme.space['3']} ${theme.space['4']}`};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space['2']};
  font-family: ${({ theme }) => theme.font.mono};
  font-size: ${({ theme }) => theme.font.size.sm};
  color: ${({ theme }) => theme.colors.accent};
`

const Group = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${({ theme }) => theme.space['3']};
  margin-block: ${({ theme }) => theme.space['4']};
`

const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  margin-block: ${({ theme }) => theme.space['8']};
`

const Label = styled.p`
  font-family: ${({ theme }) => theme.font.mono};
  font-size: ${({ theme }) => theme.font.size.xs};
  color: ${({ theme }) => theme.colors.textSubtle};
  margin-bottom: ${({ theme }) => theme.space['2']};
`

export function DevPage() {
  return (
    <Page>
      <EasterEggBanner>
        <Icon icon={PartyPopper} size={16} />
        Haha, vous n&apos;étiez pas censé être là... mais bravo, vous avez trouvé ! Bienvenue dans le
        design system. Faites comme chez vous.
      </EasterEggBanner>
      <Container>
        <Section>
          <Heading level={1}>Design System — Component Demo</Heading>
          <Text variant="caption" as="p" style={{ marginTop: '8px' }}>
            Page secrète — non incluse dans le build de production
          </Text>

          <Divider />

          {/* BUTTONS */}
          <Heading level={4}>Button</Heading>

          <Label>variant</Label>
          <Group>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
          </Group>

          <Label>size</Label>
          <Group>
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </Group>

          <Label>with icon</Label>
          <Group>
            <Button variant="primary">
              <Icon icon={ArrowRight} size={16} />
              See projects
            </Button>
            <Button variant="secondary">
              <Icon icon={GitBranch} size={16} />
              GitHub
            </Button>
          </Group>

          <Label>disabled</Label>
          <Group>
            <Button disabled>Disabled primary</Button>
            <Button variant="secondary" disabled>Disabled secondary</Button>
          </Group>

          <Divider />

          {/* TEXT */}
          <Heading level={4}>Text</Heading>
          <Group style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
            <Text variant="bodyLg">bodyLg — Passionate about building modern web experiences.</Text>
            <Text variant="body">body — Passionate about building modern web experiences.</Text>
            <Text variant="caption">caption — Last updated January 2026</Text>
            <Text variant="label">label — Section label</Text>
            <Text variant="overline">overline — Featured Projects</Text>
            <Text variant="mono">mono — const portfolio = &apos;ready&apos;</Text>
          </Group>

          <Divider />

          {/* HEADINGS */}
          <Heading level={4}>Heading</Heading>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Heading level={1}>H1 — Hello, I&apos;m a developer</Heading>
            <Heading level={2}>H2 — About me</Heading>
            <Heading level={3}>H3 — My projects</Heading>
            <Heading level={4}>H4 — Section title</Heading>
            <Heading level={5}>H5 — Subsection</Heading>
            <Heading level={6}>H6 — Detail</Heading>
          </div>

          <Divider />

          {/* LINKS */}
          <Heading level={4}>Link</Heading>
          <Group>
            <Link href="#" variant="default">Default link</Link>
            <Link href="#" variant="subtle">Subtle link</Link>
            <Link href="#" variant="underline">Underlined link</Link>
            <Link href="https://github.com" variant="default" external>
              External <Icon icon={ArrowRight} size={14} />
            </Link>
          </Group>

          <Divider />

          {/* ICONS */}
          <Heading level={4}>Icon</Heading>
          <Group>
            <Icon icon={GitBranch} />
            <Icon icon={Mail} />
            <Icon icon={Star} />
            <Icon icon={ArrowRight} />
            <Icon icon={GitBranch} size={32} />
            <Icon icon={Mail} size={32} />
          </Group>

          <Divider />

          {/* BADGES */}
          <Heading level={4}>Badge</Heading>
          <Group>
            <Badge>React</Badge>
            <Badge>TypeScript</Badge>
            <Badge variant="accent">Featured</Badge>
            <Badge variant="accent">New</Badge>
          </Group>

          <Divider />

          {/* CONTAINER */}
          <Heading level={4}>Container</Heading>
          <Text variant="caption">
            This page itself uses Container (max-width 1200px, auto margins, responsive padding).
          </Text>
        </Section>
      </Container>
    </Page>
  )
}
