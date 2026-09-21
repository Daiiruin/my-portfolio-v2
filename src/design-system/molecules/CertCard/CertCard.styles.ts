import styled from 'styled-components'

export const Card = styled('a')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.space['3'],
  padding: theme.space['4'],
  background: theme.colors.surface,
  border: `1px solid ${theme.colors.border}`,
  borderRadius: theme.radii.sm,
  textAlign: 'center',
  transition: `border-color ${theme.transition.fast}, background ${theme.transition.fast}`,

  '&:hover': {
    borderColor: theme.colors.accent,
    background: theme.colors.surfaceAlt,
  },
}))

export const Thumb = styled('div')(({ theme }) => ({
  width: '100%',
  aspectRatio: '4 / 3',
  background: theme.colors.surfaceAlt,
  border: `1px solid ${theme.colors.border}`,
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

export const Badge = styled('img')({
  maxWidth: '100%',
  maxHeight: '100%',
  objectFit: 'contain',
})

export const Title = styled('span')(({ theme }) => ({
  fontSize: theme.font.size.sm,
  fontWeight: theme.font.weight.medium,
  color: theme.colors.textMuted,
  lineHeight: 1.3,
  transition: `color ${theme.transition.fast}`,

  [`${Card}:hover &`]: {
    color: theme.colors.text,
  },
}))
