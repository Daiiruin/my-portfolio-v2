import styled, { css } from 'styled-components'
import type { BadgeVariant } from './Badge'

const variantStyles: Record<BadgeVariant, ReturnType<typeof css>> = {
  default: css`
    background: ${({ theme }) => theme.colors.surfaceAlt};
    color: ${({ theme }) => theme.colors.textMuted};
    border: 1px solid ${({ theme }) => theme.colors.border};
  `,
  accent: css`
    background: ${({ theme }) => theme.colors.accentSubtle};
    color: ${({ theme }) => theme.colors.accent};
    border: 1px solid transparent;
  `,
}

export const StyledBadge = styled.span<{ $variant: BadgeVariant }>`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.space['1']};
  padding: ${({ theme }) => `2px ${theme.space['2']}`};
  border-radius: ${({ theme }) => theme.radii.full};
  font-size: ${({ theme }) => theme.font.size.xs};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  line-height: 1.4;
  white-space: nowrap;
  ${({ $variant }) => variantStyles[$variant]}
`
