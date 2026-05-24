import type { InputHTMLAttributes } from 'react'
import { StyledInput } from './Input.styles'

type Props = InputHTMLAttributes<HTMLInputElement>

export function Input(props: Props) {
  return <StyledInput {...props} />
}
