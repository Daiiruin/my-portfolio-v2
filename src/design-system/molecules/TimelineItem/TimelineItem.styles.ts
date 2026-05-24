import styled, { keyframes, css } from 'styled-components'
import { motion } from 'motion/react'
import { media } from '../../theme/tokens'

const pulse = keyframes`
  0%   { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.6); }
  70%  { box-shadow: 0 0 0 8px rgba(59, 130, 246, 0); }
  100% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0); }
`

export const Item = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.space['4']};
  position: relative;

  ${media.md} {
    grid-template-columns: 180px 1fr;
    gap: ${({ theme }) => theme.space['8']};
  }
`

export const PeriodCol = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.space['3']};

  ${media.md} {
    flex-direction: column;
    gap: ${({ theme }) => theme.space['2']};
    padding-top: 3px;
  }
`

export const Period = styled.span`
  font-family: ${({ theme }) => theme.font.mono};
  font-size: ${({ theme }) => theme.font.size.sm};
  color: ${({ theme }) => theme.colors.textSubtle};
  white-space: nowrap;
`

export const Dot = styled.div<{ $pulse?: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: ${({ theme }) => theme.radii.full};
  background: ${({ theme }) => theme.colors.accent};
  flex-shrink: 0;
  margin-top: 5px;
  box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.accentSubtle};

  ${({ $pulse }) =>
    $pulse &&
    css`
      animation: ${pulse} 2s ease-out infinite;
    `}

  ${media.md} {
    display: none;
  }
`

export const ContentCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space['2']};
  padding-bottom: ${({ theme }) => theme.space['8']};
  position: relative;

  /* Ligne verticale de la timeline */
  &::before {
    content: '';
    position: absolute;
    left: -33px;
    top: 0;
    bottom: 0;
    width: 1px;
    background: linear-gradient(to bottom, ${({ theme }) => theme.colors.border}, transparent);
    display: none;

    ${media.md} {
      display: block;
    }
  }
`

export const ConnectorDot = styled.div<{ $pulse?: boolean }>`
  display: none;

  ${media.md} {
    display: block;
    position: absolute;
    left: -37px;
    top: 6px;
    width: 10px;
    height: 10px;
    border-radius: ${({ theme }) => theme.radii.full};
    background: ${({ theme }) => theme.colors.surface};
    border: 2px solid ${({ theme }) => theme.colors.accent};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.accentSubtle};
    z-index: 1;

    ${({ $pulse }) =>
      $pulse &&
      css`
        animation: ${pulse} 2s ease-out infinite;
      `}
  }
`

export const Role = styled.h3`
  font-size: ${({ theme }) => theme.font.size.lg};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  color: ${({ theme }) => theme.colors.text};
  line-height: ${({ theme }) => theme.font.lineHeight.tight};
`

export const Company = styled.span`
  font-size: ${({ theme }) => theme.font.size.base};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  color: ${({ theme }) => theme.colors.accent};
`

export const Description = styled.p`
  font-size: ${({ theme }) => theme.font.size.base};
  line-height: ${({ theme }) => theme.font.lineHeight.relaxed};
  color: ${({ theme }) => theme.colors.textMuted};
  max-width: 600px;
`
