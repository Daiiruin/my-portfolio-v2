import styled from 'styled-components'
import { motion } from 'motion/react'

export const Wrapper = styled(motion.span)`
  display: inline;
`

export const Mask = styled.span`
  display: inline-block;
  overflow: hidden;
  vertical-align: top;
`

export const Segment = styled(motion.span)`
  display: inline-block;
  will-change: transform;
`
