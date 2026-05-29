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

export const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.space['12']};
  align-items: center;
  width: 100%;

  ${media.lg} {
    grid-template-columns: 1fr 1fr;
  }
`

export const HeroLeft = styled(motion.div)`
  display: flex;
  flex-direction: column;
`

export const HeroRight = styled(motion.div)`
  display: none;

  ${media.lg} {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
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
  font-size: clamp(
    ${({ theme }) => theme.font.size['2xl']},
    6vw,
    ${({ theme }) => theme.font.size['4xl']}
  );
  font-weight: ${({ theme }) => theme.font.weight.bold};
  letter-spacing: ${({ theme }) => theme.font.letterSpacing.tight};
  line-height: ${({ theme }) => theme.font.lineHeight.tight};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.space['4']};
`

export const Title = styled(motion.p)`
  font-size: clamp(${({ theme }) => theme.font.size.md}, 2vw, ${({ theme }) => theme.font.size.xl});
  font-weight: ${({ theme }) => theme.font.weight.medium};
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: ${({ theme }) => theme.space['6']};
  letter-spacing: ${({ theme }) => theme.font.letterSpacing.snug};
`

export const Bio = styled(motion.p)`
  font-size: ${({ theme }) => theme.font.size.sm};
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: ${({ theme }) => theme.font.lineHeight.relaxed};
  max-width: 560px;
  margin-bottom: ${({ theme }) => theme.space['4']};
`

export const InfoRow = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.space['3']};
  margin-bottom: ${({ theme }) => theme.space['8']};
`

export const InfoChip = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.space['2']};
  padding: ${({ theme }) => `${theme.space['1']} ${theme.space['3']}`};
  background: ${({ theme }) => theme.colors.surfaceAlt};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.full};
  font-size: ${({ theme }) => theme.font.size.sm};
  color: ${({ theme }) => theme.colors.textMuted};
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
  width: 2px;
  height: 40px;
  background: linear-gradient(to bottom, ${({ theme }) => theme.colors.accent}, transparent);
`

export const AvatarFrame = styled.div`
  position: relative;
  width: 280px;
  height: 320px;
`

export const AvatarPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.surfaceAlt};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.xl};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.font.size['5xl']};
  color: ${({ theme }) => theme.colors.textSubtle};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  letter-spacing: ${({ theme }) => theme.font.letterSpacing.tight};
`

export const AvatarAccent = styled.div`
  position: absolute;
  inset: -8px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.xl};
  z-index: -1;
`
