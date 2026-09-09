import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Row = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: theme.space['4'],
  paddingBlock: theme.space['4'],
  borderBottom: `1px solid ${theme.colors.border}`,
  transition: `border-color ${theme.transition.fast}`,

  '&:hover': {
    borderColor: theme.colors.accent,
  },

  '&:last-child': {
    borderBottom: 'none',
  },
}))

export const Thumb = styled('div')(({ theme }) => ({
  width: '56px',
  height: '56px',
  flexShrink: 0,
  border: `1px solid ${theme.colors.border}`,
  background: theme.colors.surfaceAlt,
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.colors.accent,
  fontFamily: theme.font.mono,
  fontWeight: theme.font.weight.bold,

  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
}))

export const Main = styled('div')(({ theme }) => ({
  flex: 1,
  minWidth: '220px',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.space['1'],
}))

export const FileName = styled('span')(({ theme }) => ({
  fontFamily: theme.font.mono,
  fontWeight: theme.font.weight.semibold,
  color: theme.colors.accent,
}))

export const Tagline = styled('p')(({ theme }) => ({
  fontSize: theme.font.size.sm,
  color: theme.colors.textMuted,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
}))

export const StackRow = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.space['1'],
  marginTop: theme.space['1'],
}))

export const Actions = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.space['3'],
  flexShrink: 0,
  marginLeft: 'auto',
}))

export const RunLink = styled(Link)(({ theme }) => ({
  fontFamily: theme.font.mono,
  fontSize: theme.font.size.sm,
  fontWeight: theme.font.weight.semibold,
  color: theme.colors.background,
  background: theme.colors.accent,
  padding: `${theme.space['1']} ${theme.space['3']}`,
  whiteSpace: 'nowrap',
  transition: `background ${theme.transition.fast}`,

  '&:hover': {
    background: theme.colors.accentHover,
  },
}))

export const IconLink = styled('a')(({ theme }) => ({
  color: theme.colors.textSubtle,
  display: 'flex',
  transition: `color ${theme.transition.fast}`,

  '&:hover': {
    color: theme.colors.text,
  },
}))
