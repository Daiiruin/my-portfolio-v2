import styled from 'styled-components'

export const StyledNavItem = styled.a<{ $active: boolean }>`
  font-size: ${({ theme }) => theme.font.size.sm};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  color: ${({ $active, theme }) => ($active ? theme.colors.text : theme.colors.textMuted)};
  text-decoration: none;
  padding: ${({ theme }) => `${theme.space['1']} ${theme.space['2']}`};
  border-radius: ${({ theme }) => theme.radii.md};
  transition: color ${({ theme }) => theme.transition.fast},
    background ${({ theme }) => theme.transition.fast};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: ${({ theme }) => theme.space['2']};
    right: ${({ theme }) => theme.space['2']};
    height: 1px;
    background: ${({ theme }) => theme.colors.accent};
    transform: scaleX(${({ $active }) => ($active ? 1 : 0)});
    transition: transform ${({ theme }) => theme.transition.fast};
    transform-origin: left;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.surfaceAlt};
  }
`
