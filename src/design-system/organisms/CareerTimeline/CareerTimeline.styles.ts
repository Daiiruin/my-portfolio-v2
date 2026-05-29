import styled, { css } from 'styled-components'
import { motion } from 'motion/react'

export const Header = styled(motion.div)`
  margin-bottom: ${({ theme }) => theme.space['12']};
`

export const SectionLabel = styled.span`
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

export const TabBar = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space['2']};
  margin-bottom: ${({ theme }) => theme.space['8']};
`

export const TabBadge = styled.span<{ $active: boolean }>`
  padding: 1px 7px;
  border-radius: ${({ theme }) => theme.radii.full};
  font-size: ${({ theme }) => theme.font.size.xs};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  transition: all ${({ theme }) => theme.transition.fast};

  ${({ $active, theme }) =>
    $active
      ? css`
          background: rgba(255, 255, 255, 0.2);
          color: #fff;
        `
      : css`
          background: ${theme.colors.surfaceAlt};
          color: ${theme.colors.textSubtle};
        `}
`

export const TabButton = styled.button<{ $active: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.space['2']};
  padding: ${({ theme }) => `${theme.space['2']} ${theme.space['4']}`};
  border-radius: ${({ theme }) => theme.radii.full};
  font-size: ${({ theme }) => theme.font.size.sm};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  cursor: pointer;
  border: 1px solid;
  transition: all ${({ theme }) => theme.transition.fast};

  ${({ $active, theme }) =>
    $active
      ? css`
          background: ${theme.colors.accent};
          color: #fff;
          border-color: ${theme.colors.accent};
        `
      : css`
          background: transparent;
          color: ${theme.colors.textMuted};
          border-color: ${theme.colors.border};
          &:hover {
            border-color: ${theme.colors.accent};
            color: ${theme.colors.accent};
          }
        `}
`
