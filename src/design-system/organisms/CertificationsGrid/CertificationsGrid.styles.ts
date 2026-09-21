import styled from 'styled-components'
import { motion } from 'motion/react'
import { media } from '../../theme/tokens'

export const Header = styled(motion.div)(({ theme }) => ({
  marginBottom: theme.space['12'],
}))

export const CategoryGroup = styled(motion.div)(({ theme }) => ({
  marginBottom: theme.space['8'],

  '&:last-child': {
    marginBottom: 0,
  },
}))

export const CategoryTitle = styled('h3')(({ theme }) => ({
  fontSize: theme.font.size.xs,
  fontWeight: theme.font.weight.semibold,
  letterSpacing: theme.font.letterSpacing.wider,
  textTransform: 'uppercase',
  color: theme.colors.textMuted,
  marginBottom: theme.space['4'],
  paddingBottom: theme.space['2'],
  borderBottom: `1px solid ${theme.colors.border}`,
}))

export const Grid = styled(motion.div)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: theme.space['4'],

  [media.sm]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },

  [media.md]: {
    gridTemplateColumns: 'repeat(4, 1fr)',
  },

  [media.lg]: {
    gridTemplateColumns: 'repeat(5, 1fr)',
  },
}))
