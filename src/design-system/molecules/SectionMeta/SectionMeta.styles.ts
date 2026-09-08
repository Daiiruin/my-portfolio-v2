import styled from 'styled-components'

export const Row = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${({ theme }) => theme.space['4']};
  padding-bottom: ${({ theme }) => theme.space['2']};
  margin-bottom: ${({ theme }) => theme.space['3']};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  font-family: ${({ theme }) => theme.font.mono};
  font-size: ${({ theme }) => theme.font.size.xs};
  letter-spacing: ${({ theme }) => theme.font.letterSpacing.wide};
`

export const Path = styled.span`
  color: ${({ theme }) => theme.colors.textMuted};
  text-transform: uppercase;
  white-space: nowrap;

  em {
    color: ${({ theme }) => theme.colors.accent};
    font-style: normal;
  }
`

export const Count = styled.span`
  color: ${({ theme }) => theme.colors.textSubtle};
  white-space: nowrap;
`
