import styled, { css } from 'styled-components'
import type { HeadingLevel } from './Heading'

// Chakra Petch discipline: display face reserved for ≥32px, uppercase, tight tracking,
// weight 600-700, and NOTHING else - no glow, outline, skew, gradient, or shadow. The
// typeface carries the "techno" read; any added treatment tips it into e-sport-logo territory.
const displayFace = css`
  font-family: ${({ theme }) => theme.font.display};
  text-transform: uppercase;
`

const levelStyles: Record<HeadingLevel, ReturnType<typeof css>> = {
  1: css`
    ${displayFace}
    font-size: ${({ theme }) => theme.font.size['5xl']};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    letter-spacing: ${({ theme }) => theme.font.letterSpacing.tight};
    line-height: ${({ theme }) => theme.font.lineHeight.tight};
  `,
  2: css`
    ${displayFace}
    font-size: ${({ theme }) => theme.font.size['4xl']};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    letter-spacing: ${({ theme }) => theme.font.letterSpacing.tight};
    line-height: ${({ theme }) => theme.font.lineHeight.tight};
  `,
  3: css`
    ${displayFace}
    font-size: ${({ theme }) => theme.font.size['3xl']};
    font-weight: ${({ theme }) => theme.font.weight.semibold};
    letter-spacing: ${({ theme }) => theme.font.letterSpacing.snug};
    line-height: ${({ theme }) => theme.font.lineHeight.tight};
  `,
  4: css`
    ${displayFace}
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
