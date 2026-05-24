import styled from 'styled-components'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { media } from '../../theme/tokens'

export const Card = styled(motion.article)`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.xl};
  overflow: hidden;
  background: ${({ theme }) => theme.colors.surface};
  transition: border-color ${({ theme }) => theme.transition.fast},
    transform ${({ theme }) => theme.transition.fast};
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-3px);
  }
`

export const ImageArea = styled.div`
  height: 140px;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.accentSubtle} 0%,
    ${({ theme }) => theme.colors.surfaceAlt} 100%
  );
  position: relative;
  overflow: hidden;

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
