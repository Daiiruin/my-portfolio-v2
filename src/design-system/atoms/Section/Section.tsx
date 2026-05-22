import type { HTMLAttributes, ReactNode } from 'react'
import { StyledSection } from './Section.styles'

type Props = HTMLAttributes<HTMLElement> & {
  id?: string
  children: ReactNode
}

export function Section({ id, children, ...rest }: Props) {
  return (
    <StyledSection id={id} {...rest}>
      {children}
    </StyledSection>
  )
}
