import styled from 'styled-components'

export const Wrapper = styled.div<{ $revealing: boolean }>`
  position: fixed;
  inset: 0;
  z-index: ${({ theme }) => theme.zIndex.boot};
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.background};
  transform-origin: bottom;
  transition: transform 550ms cubic-bezier(0.76, 0, 0.24, 1);
  transform: scaleY(${({ $revealing }) => ($revealing ? 0 : 1)});
  pointer-events: ${({ $revealing }) => ($revealing ? 'none' : 'auto')};
  cursor: pointer;
`

export const Panel = styled.div`
  width: 100%;
  max-width: 420px;
  padding-inline: ${({ theme }) => theme.space['6']};
  font-family: ${({ theme }) => theme.font.mono};
  font-size: ${({ theme }) => theme.font.size.sm};
`

export const Log = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space['2']};
  margin-bottom: ${({ theme }) => theme.space['6']};
  min-height: 6.5em;
`

export const Line = styled.div`
  color: ${({ theme }) => theme.colors.textMuted};
  white-space: pre;
`

export const ReadyLine = styled(Line)`
  color: ${({ theme }) => theme.colors.accent};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
`

export const ProgressRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space['3']};
  margin-bottom: ${({ theme }) => theme.space['4']};
`

export const ProgressBar = styled.div`
  flex: 1;
  height: 2px;
  background: ${({ theme }) => theme.colors.border};
`

export const ProgressFill = styled.div`
  height: 100%;
  background: ${({ theme }) => theme.colors.accent};
  transition: width 200ms ease;
`

export const Percent = styled.span`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
`

export const HintText = styled.p`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-size: ${({ theme }) => theme.font.size.xs};
  text-transform: uppercase;
  letter-spacing: ${({ theme }) => theme.font.letterSpacing.wide};
`
