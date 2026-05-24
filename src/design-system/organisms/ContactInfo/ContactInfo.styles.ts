import styled from 'styled-components'
import { motion } from 'motion/react'

export const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space['6']};
`

export const Intro = styled(motion.p)`
  font-size: ${({ theme }) => theme.font.size.base};
  line-height: ${({ theme }) => theme.font.lineHeight.relaxed};
  color: ${({ theme }) => theme.colors.textMuted};
`

export const List = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space['4']};
`

export const Item = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space['3']};
  color: ${({ theme }) => theme.colors.textSubtle};
  text-decoration: none;
  font-size: ${({ theme }) => theme.font.size.base};
  transition: color ${({ theme }) => theme.transition.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`

export const StaticItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space['3']};
  color: ${({ theme }) => theme.colors.textSubtle};
  font-size: ${({ theme }) => theme.font.size.base};
`
