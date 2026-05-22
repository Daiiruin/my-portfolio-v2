import type { HTMLAttributes, ReactNode, ElementType } from 'react'
import { StyledContainer } from './Container.styles'

type Props = HTMLAttributes<HTMLElement> & {
  as?: ElementType
  narrow?: boolean
  children: ReactNode
}

export function Container({ as, narrow, children, ...rest }: Props) {
  return (
    <StyledContainer as={as} $narrow={narrow} {...rest}>
      {children}
    </StyledContainer>
  )
}
