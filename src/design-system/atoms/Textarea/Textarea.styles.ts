import styled from 'styled-components'

export const StyledTextarea = styled.textarea`
  width: 100%;
  padding: ${({ theme }) => theme.space['3']} ${({ theme }) => theme.space['4']};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.font.family};
  font-size: ${({ theme }) => theme.font.size.base};
  line-height: ${({ theme }) => theme.font.lineHeight.relaxed};
  transition: border-color ${({ theme }) => theme.transition.fast};
  outline: none;
  resize: vertical;
  min-height: 140px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSubtle};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.accent};
  }
`
