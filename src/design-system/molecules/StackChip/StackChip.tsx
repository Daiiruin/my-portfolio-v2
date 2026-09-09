import { Icon } from '../../atoms/Icon'
import { getIcon } from './iconMap'
import { Chip, IconWrapper, ChipName, YearsReadout } from './StackChip.styles'

type Props = {
  name: string
  icon: string
  years: number
}

export function StackChip({ name, icon, years }: Props) {
  return (
    <Chip>
      <IconWrapper>
        <Icon icon={getIcon(icon)} size={24} />
      </IconWrapper>
      <ChipName>{name}</ChipName>
      <YearsReadout aria-hidden="true">{years}Y</YearsReadout>
    </Chip>
  )
}
