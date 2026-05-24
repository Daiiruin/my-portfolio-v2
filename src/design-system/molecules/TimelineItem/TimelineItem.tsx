import { Item, PeriodCol, Period, Dot, ContentCol, ConnectorDot, Role, Company, Description } from './TimelineItem.styles'

type Props = {
  period: string
  company: string
  role: string
  description: string
  isPulse?: boolean
}

export function TimelineItem({ period, company, role, description, isPulse }: Props) {
  return (
    <Item>
      <PeriodCol>
        <Dot $pulse={isPulse} />
        <Period>{period}</Period>
      </PeriodCol>
      <ContentCol>
        <ConnectorDot $pulse={isPulse} />
        <Role>{role}</Role>
        <Company>{company}</Company>
        <Description>{description}</Description>
      </ContentCol>
    </Item>
  )
}
