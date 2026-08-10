import styled, { css, keyframes } from 'styled-components'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { media } from '../../theme/tokens'

const orbitGlow = keyframes`
  0%   { --card-gx: 0%;   --card-gy: 0%;   }
  25%  { --card-gx: 100%; --card-gy: 0%;   }
  50%  { --card-gx: 100%; --card-gy: 100%; }
  75%  { --card-gx: 0%;   --card-gy: 100%; }
  100% { --card-gx: 0%;   --card-gy: 0%;   }
`

export const CardWrapper = styled.div<{ $inProgress?: boolean }>`
  position: relative;
  isolation: isolate;
  border-radius: ${({ theme }) => theme.radii.xl};
  padding: 2px;
  height: 100%;
  background: ${({ theme }) => theme.colors.background};

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: radial-gradient(
      circle at var(--card-gx) var(--card-gy),
      ${({ theme }) => theme.colors.accent},
      transparent 65%
    );
    opacity: 0;
    transition: opacity ${({ theme }) => theme.transition.fast};
    animation: ${orbitGlow} 3s linear infinite;
    animation-play-state: paused;
    pointer-events: none;
  }

  ${({ $inProgress }) =>
    !$inProgress &&
    css`
      &:hover::before {
        opacity: 1;
        animation-play-state: running;
      }
    `}
`

export const Card = styled(motion.article)<{ $inProgress?: boolean }>`
  position: relative;
  z-index: 1;
  display: flex;
  height: 100%;
  flex-direction: column;
  border-radius: calc(${({ theme }) => theme.radii.xl} - 2px);
  overflow: hidden;
  background: ${({ theme, $inProgress }) => ($inProgress ? theme.colors.accentSubtle : theme.colors.surface)};
  transition: transform ${({ theme }) => theme.transition.fast};
`

export const ImageArea = styled.div<{ $inProgress?: boolean }>`
  height: 140px;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.accentSubtle} 0%,
    ${({ theme }) => theme.colors.surfaceAlt} 100%
  );
  position: relative;
  overflow: hidden;

  ${({ $inProgress }) =>
    $inProgress &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
    `}

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      ellipse at 30% 50%,
      ${({ theme }) => theme.colors.accent}22 0%,
      transparent 70%
    );
  }

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
