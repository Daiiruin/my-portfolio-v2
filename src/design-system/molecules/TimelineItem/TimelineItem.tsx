import { useTranslation } from 'react-i18next'
import { LuBriefcase, LuGraduationCap } from 'react-icons/lu'
import { Icon } from '../../atoms/Icon'
import { Item, PeriodCol, Period, Dot, ContentCol, ConnectorDot, Role, Company, Description, TypeTag } from './TimelineItem.styles'

type Props = {
  type: 'work' | 'education'
  period: string
  company: string
  role: string
  description: string
  isPulse?: boolean
}

export function TimelineItem({ type, period, company, role, description, isPulse }: Props) {
  const { t } = useTranslation()

  return (
    <Item>
      <PeriodCol>
        <Dot $pulse={isPulse} />
        <Period>{period}</Period>
      </PeriodCol>
      <ContentCol>
        <ConnectorDot $pulse={isPulse} />
        <TypeTag $type={type}>
          <Icon icon={type === 'work' ? LuBriefcase : LuGraduationCap} size={11} />
          {t(`career.${type}`)}
        </TypeTag>
        <Role>{role}</Role>
        <Company>{company}</Company>
        <Description>{description}</Description>
      </ContentCol>
    </Item>
  )
}
