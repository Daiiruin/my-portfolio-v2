import styled from 'styled-components'
import { motion } from 'motion/react'

export const Header = styled(motion.div)`
  margin-bottom: ${({ theme }) => theme.space['12']};
`

export const SectionLabel = styled.span`
  font-family: ${({ theme }) => theme.font.mono};
  font-size: ${({ theme }) => theme.font.size.xs};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  color: ${({ theme }) => theme.colors.accent};
  text-transform: uppercase;
  letter-spacing: ${({ theme }) => theme.font.letterSpacing.wider};
  display: block;
  margin-bottom: ${({ theme }) => theme.space['2']};
`

export const List = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding-left: ${({ theme }) => theme.space['4']};
`
