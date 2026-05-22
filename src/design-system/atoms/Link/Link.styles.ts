import styled, { css } from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'
import type { LinkVariant } from './Link'

const variantStyles: Record<LinkVariant, ReturnType<typeof css>> = {
  default: css`
    color: ${({ theme }) => theme.colors.accent};
    &:hover { color: ${({ theme }) => theme.colors.accentHover}; }
  `,
  subtle: css`
    color: ${({ theme }) => theme.colors.textMuted};
    &:hover { color: ${({ theme }) => theme.colors.text}; }
  `,
  underline: css`
    color: ${({ theme }) => theme.colors.text};
    text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme.colors.border};
    text-underline-offset: 3px;
    &:hover { text-decoration-color: ${({ theme }) => theme.colors.text}; }
  `,
}

const base = css`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.space['1']};
  transition: color ${({ theme }) => theme.transition.fast};
`

export const StyledRouterLink = styled(RouterLink)<{ $variant: LinkVariant }>`
  ${base}
  ${({ $variant }) => variantStyles[$variant]}
`

export const StyledAnchor = styled.a<{ $variant: LinkVariant }>`
  ${base}
  ${({ $variant }) => variantStyles[$variant]}
`
