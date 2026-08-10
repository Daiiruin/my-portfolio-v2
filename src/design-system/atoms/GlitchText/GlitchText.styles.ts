import styled from 'styled-components'

export const StyledGlitchText = styled.span`
  font-family: ${({ theme }) => theme.font.mono};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  color: ${({ theme }) => theme.colors.accent};
`
