import styled, { css } from 'styled-components'
import type { HeadingLevel } from './Heading'

const levelStyles: Record<HeadingLevel, ReturnType<typeof css>> = {
  1: css`
    font-size: ${({ theme }) => theme.font.size['5xl']};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    letter-spacing: ${({ theme }) => theme.font.letterSpacing.tight};
    line-height: ${({ theme }) => theme.font.lineHeight.tight};
  `,
  2: css`
    font-size: ${({ theme }) => theme.font.size['4xl']};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    letter-spacing: ${({ theme }) => theme.font.letterSpacing.tight};
    line-height: ${({ theme }) => theme.font.lineHeight.tight};
  `,
  3: css`
    font-size: ${({ theme }) => theme.font.size['3xl']};
    font-weight: ${({ theme }) => theme.font.weight.semibold};
    letter-spacing: ${({ theme }) => theme.font.letterSpacing.snug};
    line-height: ${({ theme }) => theme.font.lineHeight.tight};
  `,
  4: css`
    font-size: ${({ theme }) => theme.font.size['2xl']};
    font-weight: ${({ theme }) => theme.font.weight.semibold};
    letter-spacing: ${({ theme }) => theme.font.letterSpacing.snug};
    line-height: ${({ theme }) => theme.font.lineHeight.tight};
  `,
  5: css`
    font-size: ${({ theme }) => theme.font.size.xl};
    font-weight: ${({ theme }) => theme.font.weight.semibold};
    line-height: ${({ theme }) => theme.font.lineHeight.normal};
  `,
  6: css`
    font-size: ${({ theme }) => theme.font.size.lg};
    font-weight: ${({ theme }) => theme.font.weight.medium};
    line-height: ${({ theme }) => theme.font.lineHeight.normal};
  `,
}

export const StyledHeading = styled.h1<{ $level: HeadingLevel }>`
  color: ${({ theme }) => theme.colors.text};
  ${({ $level }) => levelStyles[$level]}
`
