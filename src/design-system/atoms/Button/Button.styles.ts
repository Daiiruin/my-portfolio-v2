import styled, { css } from 'styled-components'
import type { ButtonVariant, ButtonSize } from './Button'

const sizeStyles = {
  sm: css`
    padding: ${({ theme }) => `${theme.space['1']} ${theme.space['3']}`};
    font-size: ${({ theme }) => theme.font.size.sm};
    border-radius: ${({ theme }) => theme.radii.md};
  `,
  md: css`
    padding: ${({ theme }) => `${theme.space['2']} ${theme.space['4']}`};
    font-size: ${({ theme }) => theme.font.size.base};
    border-radius: ${({ theme }) => theme.radii.md};
  `,
  lg: css`
    padding: ${({ theme }) => `${theme.space['3']} ${theme.space['6']}`};
    font-size: ${({ theme }) => theme.font.size.md};
    border-radius: ${({ theme }) => theme.radii.lg};
  `,
}

const variantStyles = {
  primary: css`
    background: ${({ theme }) => theme.colors.accent};
    color: #fff;
    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.colors.accentHover};
    }
  `,
  secondary: css`
    background: ${({ theme }) => theme.colors.surfaceAlt};
    color: ${({ theme }) => theme.colors.text};
    border: 1px solid ${({ theme }) => theme.colors.border};
    &:hover:not(:disabled) {
      border-color: ${({ theme }) => theme.colors.borderHover};
      background: ${({ theme }) => theme.colors.surface};
    }
  `,
  ghost: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.textMuted};
    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.colors.surfaceAlt};
      color: ${({ theme }) => theme.colors.text};
    }
  `,
}

export const StyledButton = styled.button<{ $variant: ButtonVariant; $size: ButtonSize; $fullWidth?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.space['2']};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  line-height: 1;
  white-space: nowrap;
  transition: background ${({ theme }) => theme.transition.fast},
    border-color ${({ theme }) => theme.transition.fast},
    color ${({ theme }) => theme.transition.fast};
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};

  ${({ $size }) => sizeStyles[$size]}
  ${({ $variant }) => variantStyles[$variant]}

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`
