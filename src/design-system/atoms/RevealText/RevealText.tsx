import { Fragment } from 'react'
import { useReducedMotion } from '../../../hooks/useReducedMotion'
import {
  revealContainer,
  revealSegment,
  reducedRevealContainer,
  reducedRevealSegment,
} from '../../../lib/motion'
import { Wrapper, Mask, Segment } from './RevealText.styles'

type Props = {
  children: string
  by?: 'word' | 'char'
}

// Masked word/char reveal for text content — the replacement for the blanket fadeInUp
// used on every text block before. Renders as an inline span, meant to sit inside an
// existing semantic element (Heading, Text, a plain h1) and inherit that ancestor's
// whileInView/variants state — it does not trigger its own viewport observer.
//
// Reserved for text. Non-text blocks (cards, chip grids, images) keep fadeInUp /
// fadeInUpScroll — this is deliberately not applied everywhere in this PR.
export function RevealText({ children, by = 'word' }: Props) {
  const reducedMotion = useReducedMotion()
  const container = reducedMotion ? reducedRevealContainer : revealContainer
  const segmentVariants = reducedMotion ? reducedRevealSegment : revealSegment
  const segments = by === 'char' ? Array.from(children) : children.split(' ')

  return (
    <Wrapper variants={container}>
      {segments.map((segment, i) => (
        <Fragment key={i}>
          <Mask>
            <Segment variants={segmentVariants}>{segment}</Segment>
          </Mask>
          {by === 'word' && i < segments.length - 1 ? ' ' : null}
        </Fragment>
      ))}
    </Wrapper>
  )
}
