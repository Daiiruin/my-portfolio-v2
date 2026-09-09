import styled from 'styled-components'
import { motion } from 'motion/react'

export const Chip = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.space['2']};
  padding: ${({ theme }) => `${theme.space['4']} ${theme.space['3']}`};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.sm};
  cursor: default;
  transition:
    border-color ${({ theme }) => theme.transition.fast},
    background ${({ theme }) => theme.transition.fast};

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    background: ${({ theme }) => theme.colors.surfaceAlt};
  }
`

export const IconWrapper = styled.div`
  color: ${({ theme }) => theme.colors.textMuted};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color ${({ theme }) => theme.transition.fast};

  ${Chip}:hover & {
    color: ${({ theme }) => theme.colors.text};
  }
`

export const YearsReadout = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.space['1']};
  background: ${({ theme }) => theme.colors.surfaceAlt};
  opacity: 0;
  pointer-events: none;
  transition: opacity ${({ theme }) => theme.transition.fast};

  ${Chip}:hover & {
    opacity: 1;
  }
`

export const YearsName = styled.span`
  font-size: ${({ theme }) => theme.font.size.xs};
  color: ${({ theme }) => theme.colors.textMuted};
  font-family: ${({ theme }) => theme.font.mono};
`

export const YearsValue = styled.span`
  color: ${({ theme }) => theme.colors.accent};
  font-family: ${({ theme }) => theme.font.mono};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: ${({ theme }) => theme.font.size.sm};
`

export const ChipName = styled.span`
  font-size: ${({ theme }) => theme.font.size.xs};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  color: ${({ theme }) => theme.colors.textMuted};
  text-align: center;
  line-height: 1.2;
  transition: color ${({ theme }) => theme.transition.fast};

  ${Chip}:hover & {
    color: ${({ theme }) => theme.colors.text};
  }
`
