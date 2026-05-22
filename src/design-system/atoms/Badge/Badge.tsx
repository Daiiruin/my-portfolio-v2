import type { HTMLAttributes, ReactNode } from 'react'
import { StyledBadge } from './Badge.styles'

export type BadgeVariant = 'default' | 'accent'

type Props = HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant
  children: ReactNode
}

export function Badge({ variant = 'default', children, ...rest }: Props) {
  return (
    <StyledBadge $variant={variant} {...rest}>
      {children}
    </StyledBadge>
  )
}
