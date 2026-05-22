import styled from 'styled-components'
import { motion } from 'motion/react'
import { media } from '../../theme/tokens'

export const HeroWrapper = styled.div`
  min-height: calc(100vh - 60px);
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
`

export const HeroInner = styled(motion.div)`
  width: 100%;
`

export const TagLine = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space['2']};
  margin-bottom: ${({ theme }) => theme.space['4']};
`

export const Dot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: ${({ theme }) => theme.radii.full};
  background: ${({ theme }) => theme.colors.accent};
  display: inline-block;
  flex-shrink: 0;
`

export const Name = styled(motion.h1)`
  font-size: clamp(${({ theme }) => theme.font.size['3xl']}, 8vw, ${({ theme }) => theme.font.size['5xl']});
  font-weight: ${({ theme }) => theme.font.weight.bold};
  letter-spacing: ${({ theme }) => theme.font.letterSpacing.tight};
  line-height: ${({ theme }) => theme.font.lineHeight.tight};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.space['4']};
`

export const Title = styled(motion.p)`
  font-size: clamp(${({ theme }) => theme.font.size.lg}, 3vw, ${({ theme }) => theme.font.size['2xl']});
  font-weight: ${({ theme }) => theme.font.weight.medium};
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: ${({ theme }) => theme.space['6']};
  letter-spacing: ${({ theme }) => theme.font.letterSpacing.snug};
`

export const Bio = styled(motion.p)`
  font-size: ${({ theme }) => theme.font.size.md};
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: ${({ theme }) => theme.font.lineHeight.relaxed};
  max-width: 560px;
  margin-bottom: ${({ theme }) => theme.space['8']};
`

export const Actions = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.space['3']};
  align-items: center;
`

export const ScrollHint = styled(motion.div)`
  position: absolute;
  bottom: ${({ theme }) => theme.space['8']};
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.space['2']};
  color: ${({ theme }) => theme.colors.textSubtle};

  ${media.md} {
    display: flex;
  }
`

export const ScrollLine = styled(motion.div)`
  width: 1px;
  height: 40px;
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.accent},
    transparent
  );
`
