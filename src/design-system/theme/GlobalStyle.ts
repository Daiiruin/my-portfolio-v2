import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* No scroll-behavior: smooth here — Lenis owns scroll physics and the two conflict. */

  /* Toggled by CustomCursor once it confirms a fine pointer + no reduced-motion — never
     set by default, so devices/preferences it opts out of keep the native cursor. */
  body.custom-cursor-active,
  body.custom-cursor-active * {
    cursor: none !important;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.font.family};
    font-size: ${({ theme }) => theme.font.size.base};
    line-height: ${({ theme }) => theme.font.lineHeight.normal};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img, video {
    max-width: 100%;
    display: block;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font: inherit;
  }

  ul, ol {
    list-style: none;
  }

  ::selection {
    background-color: ${({ theme }) => theme.colors.accentSubtle};
    color: ${({ theme }) => theme.colors.text};
  }

  :focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
    outline-offset: 3px;
    border-radius: ${({ theme }) => theme.radii.sm};
  }

  :focus:not(:focus-visible) {
    outline: none;
  }
`
