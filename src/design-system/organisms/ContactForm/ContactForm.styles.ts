import styled from 'styled-components'
import { motion } from 'motion/react'

export const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space['4']};
`

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space['2']};
`

export const Label = styled.label`
  font-size: ${({ theme }) => theme.font.size.sm};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  color: ${({ theme }) => theme.colors.textSubtle};
`

export const StatusMessage = styled(motion.p)<{ $type: 'success' | 'error' }>`
  font-size: ${({ theme }) => theme.font.size.sm};
  padding: ${({ theme }) => theme.space['3']} ${({ theme }) => theme.space['4']};
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme, $type }) =>
    $type === 'success' ? theme.colors.success + '1a' : theme.colors.error + '1a'};
  color: ${({ theme, $type }) =>
    $type === 'success' ? theme.colors.success : theme.colors.error};
  border: 1px solid ${({ theme, $type }) =>
    $type === 'success' ? theme.colors.success + '40' : theme.colors.error + '40'};
`
