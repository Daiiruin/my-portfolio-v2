import styled from 'styled-components'
import { motion } from 'motion/react'

export const Header = styled(motion.div)(({ theme }) => ({
  marginBottom: theme.space['12'],
}))

export const List = styled(motion.div)(() => ({
  display: 'flex',
  flexDirection: 'column',
}))
