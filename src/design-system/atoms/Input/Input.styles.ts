import styled from 'styled-components'

export const StyledInput = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.space['3']} ${({ theme }) => theme.space['4']};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.font.family};
  font-size: ${({ theme }) => theme.font.size.base};
  transition: border-color ${({ theme }) => theme.transition.fast};
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSubtle};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.accent};
  }
`
