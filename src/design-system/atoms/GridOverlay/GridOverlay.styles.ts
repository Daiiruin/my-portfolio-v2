import styled from 'styled-components'
import { media } from '../../theme/tokens'

export const Wrapper = styled.div`
  position: fixed;
  inset: 0;
  z-index: ${({ theme }) => theme.zIndex.behind};
  pointer-events: none;
  display: none;

  ${media.md} {
    display: block;
  }
`

export const Inner = styled.div`
  position: relative;
  width: 100%;
  max-width: ${({ theme }) => theme.layout.containerWidth};
  height: 100%;
  margin-inline: auto;
`

export const Line = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 1px;
  background: ${({ theme }) => theme.colors.grid};
`
