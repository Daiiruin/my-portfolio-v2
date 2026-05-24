import type { TextareaHTMLAttributes } from 'react'
import { StyledTextarea } from './Textarea.styles'

type Props = TextareaHTMLAttributes<HTMLTextAreaElement>

export function Textarea(props: Props) {
  return <StyledTextarea {...props} />
}
