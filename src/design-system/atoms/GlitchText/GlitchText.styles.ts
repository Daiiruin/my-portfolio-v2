import styled from 'styled-components'

export const StyledGlitchText = styled.span<{ $settled: boolean }>`
  position: relative;
  z-index: 0;
  display: inline-block;
  color: ${({ theme }) => theme.colors.text};

  /* Chromatic aberration — split red/cyan channels peeking from behind the settled
     glyph, like a CRT's misaligned electron guns. Visible only while decoding, fading
     to nothing once the text locks — a screen artifact of the glitch moment, not a
     permanent style. No font/color opinions beyond that: this inherits typography from
     wherever it's used (a mono paragraph, a Chakra Petch heading, whatever's around it). */
  &::before,
  &::after {
    content: attr(data-text);
    position: absolute;
    inset: 0;
    z-index: -1;
    opacity: ${({ $settled }) => ($settled ? 0 : 0.7)};
    transition: opacity 200ms ease;
    pointer-events: none;
  }

  &::before {
    color: ${({ theme }) => theme.colors.error};
    transform: translateX(-1.5px);
  }

  &::after {
    color: ${({ theme }) => theme.colors.accent};
    transform: translateX(1.5px);
  }
`
