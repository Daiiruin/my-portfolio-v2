import styled, { css } from 'styled-components'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { media } from '../../theme/tokens'

// Corner ticks — a hairline frame with its corners marked, rather than an orbiting glow.
// Reads as a targeting reticle / inspection frame: cheap, static-safe, on-concept.
const cornerTick = css`
  content: '';
  position: absolute;
  width: 10px;
  height: 10px;
  border: 1px solid ${({ theme }) => theme.colors.accent};
  opacity: 0;
  transition: opacity ${({ theme }) => theme.transition.fast};
  pointer-events: none;
`

export const CardWrapper = styled.div<{ $inProgress?: boolean }>`
  position: relative;
  height: 100%;

  &::before {
    ${cornerTick}
    top: -1px;
    left: -1px;
    border-right: none;
    border-bottom: none;
  }

  &::after {
    ${cornerTick}
    bottom: -1px;
    right: -1px;
    border-left: none;
    border-top: none;
  }

  ${({ $inProgress }) =>
    !$inProgress &&
    css`
      &:hover::before,
      &:hover::after {
        opacity: 1;
      }
    `}
`

export const Card = styled(motion.article)<{ $inProgress?: boolean }>`
  position: relative;
  z-index: 1;
  display: flex;
  height: 100%;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.none};
  overflow: hidden;
  background: ${({ theme, $inProgress }) => ($inProgress ? theme.colors.accentSubtle : theme.colors.surface)};
  transition: border-color ${({ theme }) => theme.transition.fast};

  ${CardWrapper}:hover & {
    border-color: ${({ theme }) => theme.colors.accent};
  }
`

export const ImageArea = styled.div<{ $inProgress?: boolean }>`
  height: 140px;
  background: ${({ theme }) => theme.colors.surfaceAlt};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${({ $inProgress }) =>
    $inProgress &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
    `}

  ${media.md} {
    height: 160px;
  }
`

export const QuestionMark = styled.span`
  position: relative;
  z-index: 1;
  font-size: ${({ theme }) => theme.font.size['4xl']};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.colors.accent};
`

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space['3']};
  padding: ${({ theme }) => theme.space['4']};
  flex: 1;
`

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.font.size.lg};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  color: ${({ theme }) => theme.colors.text};
  line-height: ${({ theme }) => theme.font.lineHeight.tight};
`

export const Description = styled.p`
  font-size: ${({ theme }) => theme.font.size.sm};
  line-height: ${({ theme }) => theme.font.lineHeight.relaxed};
  color: ${({ theme }) => theme.colors.textMuted};
  flex: 1;
`

export const StackRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.space['2']};
`

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.space['4']} ${({ theme }) => theme.space['4']};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  gap: ${({ theme }) => theme.space['3']};
`

export const ViewLink = styled(Link)`
  font-size: ${({ theme }) => theme.font.size.sm};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  color: ${({ theme }) => theme.colors.accent};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space['1']};

  &:hover {
    text-decoration: underline;
  }
`

export const IconLinks = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space['3']};
`

export const IconLink = styled.a`
  color: ${({ theme }) => theme.colors.textSubtle};
  display: flex;
  align-items: center;
  transition: color ${({ theme }) => theme.transition.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`
