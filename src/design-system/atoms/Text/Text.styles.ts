import styled, { css } from 'styled-components'
import type { TextVariant } from './Text'

const variantStyles: Record<TextVariant, ReturnType<typeof css>> = {
  body: css`
    font-size: ${({ theme }) => theme.font.size.base};
    line-height: ${({ theme }) => theme.font.lineHeight.normal};
    color: ${({ theme }) => theme.colors.text};
  `,
  bodyLg: css`
    font-size: ${({ theme }) => theme.font.size.md};
    line-height: ${({ theme }) => theme.font.lineHeight.relaxed};
    color: ${({ theme }) => theme.colors.text};
  `,
  caption: css`
    font-size: ${({ theme }) => theme.font.size.sm};
    line-height: ${({ theme }) => theme.font.lineHeight.normal};
    color: ${({ theme }) => theme.colors.textMuted};
  `,
  label: css`
    font-size: ${({ theme }) => theme.font.size.sm};
    font-weight: ${({ theme }) => theme.font.weight.medium};
    line-height: 1;
    color: ${({ theme }) => theme.colors.text};
  `,
  overline: css`
    font-size: ${({ theme }) => theme.font.size.xs};
    font-weight: ${({ theme }) => theme.font.weight.semibold};
    letter-spacing: ${({ theme }) => theme.font.letterSpacing.wider};
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.textMuted};
  `,
  mono: css`
    font-family: ${({ theme }) => theme.font.mono};
    font-size: ${({ theme }) => theme.font.size.sm};
    color: ${({ theme }) => theme.colors.textMuted};
  `,
}

export const StyledText = styled.p<{ $variant: TextVariant; $muted?: boolean }>`
  ${({ $variant }) => variantStyles[$variant]}
  ${({ $muted, theme }) => $muted && `color: ${theme.colors.textMuted};`}
`
