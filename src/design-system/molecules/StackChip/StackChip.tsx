import { useTranslation } from 'react-i18next'
import { Icon } from '../../atoms/Icon'
import { getIcon } from './iconMap'
import {
  Chip,
  IconWrapper,
  ChipName,
  YearsReadout,
  YearsName,
  YearsValue,
} from './StackChip.styles'

type Props = {
  name: string
  icon: string
  years: number
}

export function StackChip({ name, icon, years }: Props) {
  const { t } = useTranslation()

  return (
    <Chip>
      <IconWrapper>
        <Icon icon={getIcon(icon)} size={24} />
      </IconWrapper>
      <ChipName>{name}</ChipName>
      <YearsReadout aria-hidden="true">
        <YearsName>{name}</YearsName>
        <YearsValue>{t('stack.years', { count: years })}</YearsValue>
      </YearsReadout>
    </Chip>
  )
}
