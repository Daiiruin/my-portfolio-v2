import styled from 'styled-components'

export const StyledSection = styled.section`
  padding-block: ${({ theme }) => theme.space['16']};
  /* Keeps anchor-jump targets clear of the fixed header — for both the native browser
     jump (reduced-motion) and Lenis's smooth scroll, which reads this same property
     when computing its target (see lenis.mjs's scrollMarginTop handling). */
  scroll-margin-top: ${({ theme }) => theme.layout.headerHeight}px;
`
