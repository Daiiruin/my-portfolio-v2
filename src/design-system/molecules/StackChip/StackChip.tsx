import { Icon } from '../../atoms/Icon'
import { getIcon } from './iconMap'
import { Chip, IconWrapper, ChipName } from './StackChip.styles'

type Props = {
  name: string
  icon: string
}

export function StackChip({ name, icon }: Props) {
  return (
    <Chip>
      <IconWrapper>
        <Icon icon={getIcon(icon)} size={24} />
      </IconWrapper>
      <ChipName>{name}</ChipName>
    </Chip>
  )
}
