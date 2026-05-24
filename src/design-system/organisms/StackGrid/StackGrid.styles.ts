import styled from 'styled-components'
import { motion } from 'motion/react'
import { media } from '../../theme/tokens'

export const Header = styled(motion.div)`
  margin-bottom: ${({ theme }) => theme.space['12']};
`

export const SectionLabel = styled.p`
  font-size: ${({ theme }) => theme.font.size.xs};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  letter-spacing: ${({ theme }) => theme.font.letterSpacing.wider};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: ${({ theme }) => theme.space['3']};
`

export const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.space['3']};

  ${media.sm} {
    grid-template-columns: repeat(4, 1fr);
  }

  ${media.md} {
    grid-template-columns: repeat(5, 1fr);
    gap: ${({ theme }) => theme.space['4']};
  }

  ${media.lg} {
    grid-template-columns: repeat(6, 1fr);
  }
`
