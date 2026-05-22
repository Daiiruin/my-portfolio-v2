import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { StyledRouterLink, StyledAnchor } from './Link.styles'

export type LinkVariant = 'default' | 'subtle' | 'underline'

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  to?: string
  href?: string
  variant?: LinkVariant
  external?: boolean
  children: ReactNode
}

export function Link({ to, href, variant = 'default', external, children, ...rest }: Props) {
  if (to) {
    return (
      <StyledRouterLink to={to} $variant={variant} {...(rest as object)}>
        {children}
      </StyledRouterLink>
    )
  }
  return (
    <StyledAnchor
      href={href}
      $variant={variant}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      {...rest}
    >
      {children}
    </StyledAnchor>
  )
}
