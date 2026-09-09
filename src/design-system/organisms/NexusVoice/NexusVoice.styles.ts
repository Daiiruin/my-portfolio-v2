import styled from 'styled-components'
import { motion } from 'motion/react'

export const Wrapper = styled(motion.div)(({ theme }) => ({
  position: 'fixed',
  left: theme.space['4'],
  bottom: theme.space['4'],
  zIndex: theme.zIndex.toast,
  maxWidth: '360px',
  display: 'flex',
  alignItems: 'flex-start',
  gap: theme.space['3'],
  padding: theme.space['3'],
  background: theme.colors.surface,
  border: `1px solid ${theme.colors.nexus}`,
  fontFamily: theme.font.mono,
  fontSize: theme.font.size.sm,
}))

export const Label = styled('span')(({ theme }) => ({
  color: theme.colors.nexus,
  fontWeight: theme.font.weight.bold,
  flexShrink: 0,
}))

export const Message = styled('p')(({ theme }) => ({
  color: theme.colors.text,
  flex: 1,
  lineHeight: theme.font.lineHeight.normal,
}))

export const CloseButton = styled('button')(({ theme }) => ({
  color: theme.colors.textSubtle,
  flexShrink: 0,
  lineHeight: 1,
  transition: `color ${theme.transition.fast}`,

  '&:hover': {
    color: theme.colors.text,
  },
}))
