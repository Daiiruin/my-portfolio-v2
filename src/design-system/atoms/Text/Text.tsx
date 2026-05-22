import type { HTMLAttributes, ReactNode, ElementType } from 'react'
import { StyledText } from './Text.styles'

export type TextVariant = 'body' | 'bodyLg' | 'caption' | 'label' | 'overline' | 'mono'

type Props = HTMLAttributes<HTMLElement> & {
  variant?: TextVariant
  as?: ElementType
  muted?: boolean
  children: ReactNode
}

export function Text({ variant = 'body', as, muted, children, ...rest }: Props) {
  return (
    <StyledText as={as} $variant={variant} $muted={muted} {...rest}>
      {children}
    </StyledText>
  )
}
