import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { StyledButton } from './Button.styles'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean
  children: ReactNode
}

export function Button({ variant = 'primary', size = 'md', fullWidth, children, ...rest }: Props) {
  return (
    <StyledButton $variant={variant} $size={size} $fullWidth={fullWidth} {...rest}>
      {children}
    </StyledButton>
  )
}
