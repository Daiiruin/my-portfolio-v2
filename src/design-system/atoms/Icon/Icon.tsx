import type { LucideIcon } from 'lucide-react'

type Props = {
  icon: LucideIcon
  size?: number
  color?: string
  strokeWidth?: number
  className?: string
}

export function Icon({ icon: LucideIconComponent, size = 20, color, strokeWidth = 1.75, className }: Props) {
  return (
    <LucideIconComponent
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      className={className}
      aria-hidden="true"
    />
  )
}
