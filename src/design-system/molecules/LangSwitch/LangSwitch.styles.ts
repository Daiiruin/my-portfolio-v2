import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  background: ${({ theme }) => theme.colors.surfaceAlt};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.full};
  padding: 2px;
`

export const LangButton = styled.button<{ $active: boolean }>`
  font-size: ${({ theme }) => theme.font.size.xs};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  letter-spacing: ${({ theme }) => theme.font.letterSpacing.wide};
  padding: ${({ theme }) => `2px ${theme.space['2']}`};
  border-radius: ${({ theme }) => theme.radii.full};
  border: none;
  cursor: pointer;
  transition: background ${({ theme }) => theme.transition.fast},
    color ${({ theme }) => theme.transition.fast};
  background: ${({ $active, theme }) => ($active ? theme.colors.accent : 'transparent')};
  color: ${({ $active, theme }) => ($active ? '#fff' : theme.colors.textMuted)};

  &:hover:not(:disabled) {
    color: ${({ $active, theme }) => ($active ? '#fff' : theme.colors.text)};
  }
`
