import styled from 'styled-components'

export const Overlay = styled('div')(({ theme }) => ({
  position: 'fixed',
  inset: 0,
  zIndex: theme.zIndex.modal,
  background: 'rgba(0, 0, 0, 0.6)',
  display: 'flex',
  justifyContent: 'center',
  paddingTop: '15vh',
}))

export const Panel = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: '560px',
  maxHeight: '50vh',
  margin: `0 ${theme.space['4']}`,
  background: theme.colors.surface,
  border: `1px solid ${theme.colors.accent}`,
  display: 'flex',
  flexDirection: 'column',
  fontFamily: theme.font.mono,
  fontSize: theme.font.size.sm,
}))

export const Transcript = styled('div')(({ theme }) => ({
  flex: 1,
  overflowY: 'auto',
  padding: theme.space['4'],
  display: 'flex',
  flexDirection: 'column',
  gap: theme.space['1'],
  minHeight: '80px',
}))

export const Line = styled('div')<{ $kind: 'input' | 'output' | 'error' }>(({ theme, $kind }) => ({
  color:
    $kind === 'input'
      ? theme.colors.accent
      : $kind === 'error'
        ? theme.colors.error
        : theme.colors.textMuted,
  whiteSpace: 'pre-wrap',
  wordBreak: 'break-word',
}))

export const PromptLine = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.space['2'],
  padding: theme.space['4'],
  borderTop: `1px solid ${theme.colors.border}`,
}))

export const PromptSymbol = styled('span')(({ theme }) => ({
  color: theme.colors.accent,
  fontWeight: theme.font.weight.bold,
}))

export const Input = styled('input')(({ theme }) => ({
  flex: 1,
  background: 'transparent',
  border: 'none',
  outline: 'none',
  color: theme.colors.text,
  fontFamily: theme.font.mono,
  fontSize: theme.font.size.sm,
}))

export const Hint = styled('p')(({ theme }) => ({
  padding: `${theme.space['1']} ${theme.space['4']}`,
  fontSize: theme.font.size.xs,
  color: theme.colors.textSubtle,
  textTransform: 'uppercase',
  letterSpacing: theme.font.letterSpacing.wide,
  borderTop: `1px solid ${theme.colors.border}`,
}))
