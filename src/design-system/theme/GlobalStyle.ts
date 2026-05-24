import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.font.family};
    font-size: ${({ theme }) => theme.font.size.base};
    line-height: ${({ theme }) => theme.font.lineHeight.normal};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: background-color 300ms ease, color 300ms ease;
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
