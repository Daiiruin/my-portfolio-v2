import type { HTMLAttributes, ReactNode } from 'react'
import { StyledHeading } from './Heading.styles'

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6

type Props = HTMLAttributes<HTMLHeadingElement> & {
  level?: HeadingLevel
  children: ReactNode
}

const tagMap: Record<HeadingLevel, 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'> = {
  1: 'h1',
  2: 'h2',
  3: 'h3',
  4: 'h4',
  5: 'h5',
  6: 'h6',
}

export function Heading({ level = 2, children, ...rest }: Props) {
  return (
    <StyledHeading as={tagMap[level]} $level={level} {...rest}>
      {children}
    </StyledHeading>
  )
}
