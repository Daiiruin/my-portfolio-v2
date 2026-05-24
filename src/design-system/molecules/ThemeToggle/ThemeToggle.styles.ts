import styled from 'styled-components'

export const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: ${({ theme }) => theme.radii.md};
  color: ${({ theme }) => theme.colors.textSubtle};
  transition: color ${({ theme }) => theme.transition.fast},
    background ${({ theme }) => theme.transition.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.surfaceAlt};
  }
`
