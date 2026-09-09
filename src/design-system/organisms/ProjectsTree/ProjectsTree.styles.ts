import styled from 'styled-components'
import { motion } from 'motion/react'

export const Header = styled(motion.div)(({ theme }) => ({
  marginBottom: theme.space['12'],
}))

export const TreeRoot = styled('p')(({ theme }) => ({
  fontFamily: theme.font.mono,
  fontSize: theme.font.size.sm,
  color: theme.colors.textSubtle,
  marginBottom: theme.space['3'],
}))

export const List = styled(motion.div)(() => ({
  display: 'flex',
  flexDirection: 'column',
}))
