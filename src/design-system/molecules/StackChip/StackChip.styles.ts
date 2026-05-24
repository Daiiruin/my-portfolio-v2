import styled from 'styled-components'
import { motion } from 'motion/react'

export const Chip = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.space['2']};
  padding: ${({ theme }) => `${theme.space['4']} ${theme.space['3']}`};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  cursor: default;
  transition:
    border-color ${({ theme }) => theme.transition.fast},
    background ${({ theme }) => theme.transition.fast},
    transform ${({ theme }) => theme.transition.fast},
    box-shadow ${({ theme }) => theme.transition.fast};

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    background: ${({ theme }) => theme.colors.surfaceAlt};
    transform: translateY(-2px);
    box-shadow: 0 4px 20px ${({ theme }) => theme.colors.accentSubtle};
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
