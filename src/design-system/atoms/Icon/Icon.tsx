import type { IconType } from 'react-icons'

type Props = {
  icon: IconType
  size?: number
  color?: string
  className?: string
}

export function Icon({ icon: IconComponent, size = 20, color, className }: Props) {
  return <IconComponent size={size} color={color} className={className} aria-hidden="true" />
}
