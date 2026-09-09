import { Item, PeriodCol, Period, Dot, ContentCol, ConnectorDot, Role, Company, Description, TypeTag, StatusTag } from './TimelineItem.styles'

type Props = {
  type: 'work' | 'education'
  period: string
  company: string
  role: string
  description: string
  isPulse?: boolean
}

export function TimelineItem({ type, period, company, role, description, isPulse }: Props) {
  return (
    <Item>
      <PeriodCol>
        <Dot $pulse={isPulse} />
        <Period>{period}</Period>
      </PeriodCol>
      <ContentCol>
        <ConnectorDot $pulse={isPulse} />
        <TypeTag $type={type}>{type.toUpperCase()}</TypeTag>
        {isPulse ? <StatusTag>[ active ]</StatusTag> : null}
        <Company>{company.toUpperCase()}</Company>
        <Role>{role}</Role>
        <Description>{description}</Description>
      </ContentCol>
    </Item>
  )
}
