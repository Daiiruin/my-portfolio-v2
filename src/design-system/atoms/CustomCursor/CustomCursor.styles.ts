import styled, { css } from 'styled-components'
import { motion } from 'motion/react'
import type { CursorState } from './CustomCursor'

const stateStyles: Record<CursorState, ReturnType<typeof css>> = {
  default: css`
    width: 8px;
    height: 8px;
    background: ${({ theme }) => theme.colors.accent};
    border: none;
  `,
  link: css`
    width: 32px;
    height: 32px;
    background: transparent;
    border: 1px solid ${({ theme }) => theme.colors.accent};
  `,
  text: css`
    width: 2px;
    height: 20px;
    background: ${({ theme }) => theme.colors.accent};
    border: none;
  `,
}

export const Cursor = styled(motion.div)<{ $state: CursorState }>`
  position: fixed;
  top: 0;
  left: 0;
  translate: -50% -50%;
  pointer-events: none;
  z-index: ${({ theme }) => theme.zIndex.toast};
  transition:
    width 150ms ease,
    height 150ms ease,
    background 150ms ease,
    border-color 150ms ease;
  ${({ $state }) => stateStyles[$state]}
`
