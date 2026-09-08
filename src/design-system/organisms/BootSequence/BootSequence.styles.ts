import styled from 'styled-components'
import { motion } from 'motion/react'

export const Wrapper = styled('div')<{ $revealing: boolean }>(({ theme, $revealing }) => ({
  position: 'fixed',
  inset: 0,
  zIndex: theme.zIndex.boot,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: theme.colors.background,
  transformOrigin: 'bottom',
  transition: 'transform 550ms cubic-bezier(0.76, 0, 0.24, 1)',
  transform: `scaleY(${$revealing ? 0 : 1})`,
  pointerEvents: $revealing ? 'none' : 'auto',
  cursor: 'pointer',
}))

export const Panel = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: '420px',
  paddingInline: theme.space['6'],
  fontFamily: theme.font.mono,
  fontSize: theme.font.size.sm,
}))

export const Log = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.space['2'],
  marginBottom: theme.space['6'],
  minHeight: '6.5em',
}))

export const Line = styled(motion.div)(({ theme }) => ({
  color: theme.colors.textMuted,
  whiteSpace: 'pre',
}))

export const ReadyLine = styled(Line)(({ theme }) => ({
  color: theme.colors.accent,
  fontWeight: theme.font.weight.semibold,
}))

export const ProgressRow = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.space['3'],
  marginBottom: theme.space['4'],
}))

export const ProgressBar = styled('div')(({ theme }) => ({
  flex: 1,
  height: '2px',
  background: theme.colors.border,
}))

export const ProgressFill = styled('div')(({ theme }) => ({
  height: '100%',
  background: theme.colors.accent,
  transition: 'width 200ms ease',
}))

export const Percent = styled('span')(({ theme }) => ({
  color: theme.colors.textSubtle,
  fontVariantNumeric: 'tabular-nums',
  whiteSpace: 'nowrap',
}))

export const HintText = styled('p')(({ theme }) => ({
  color: theme.colors.textSubtle,
  fontSize: theme.font.size.xs,
  textTransform: 'uppercase',
  letterSpacing: theme.font.letterSpacing.wide,
}))
