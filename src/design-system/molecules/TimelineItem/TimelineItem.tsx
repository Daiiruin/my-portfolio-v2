import { Item, PeriodCol, Period, Dot, ContentCol, ConnectorDot, Role, Company, Description } from './TimelineItem.styles'

type Props = {
  period: string
  company: string
  role: string
  description: string
}

export function TimelineItem({ period, company, role, description }: Props) {
  return (
    <Item>
      <PeriodCol>
        <Dot />
        <Period>{period}</Period>
      </PeriodCol>
      <ContentCol>
        <ConnectorDot />
        <Role>{role}</Role>
        <Company>{company}</Company>
        <Description>{description}</Description>
      </ContentCol>
    </Item>
  )
}
