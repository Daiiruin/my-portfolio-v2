import type { ElementType, ComponentPropsWithoutRef, ReactNode } from 'react'
import { StyledButton } from './Button.styles'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'

type ButtonOwnProps<E extends ElementType = 'button'> = {
  as?: E
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean
  children: ReactNode
}

type Props<E extends ElementType = 'button'> = ButtonOwnProps<E> &
  Omit<ComponentPropsWithoutRef<E>, keyof ButtonOwnProps<E>>

export function Button<E extends ElementType = 'button'>({
  as,
  variant = 'primary',
  size = 'md',
  fullWidth,
  children,
  ...rest
}: Props<E>) {
  return (
    <StyledButton as={as} $variant={variant} $size={size} $fullWidth={fullWidth} {...(rest as object)}>
      {children}
    </StyledButton>
  )
}
