import styled from 'styled-components'
import { motion } from 'motion/react'
import { media } from '../../theme/tokens'

export const Header = styled(motion.div)`
  margin-bottom: ${({ theme }) => theme.space['12']};
`

export const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.space['6']};

  ${media.md} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${media.lg} {
    grid-template-columns: repeat(3, 1fr);
  }
`
