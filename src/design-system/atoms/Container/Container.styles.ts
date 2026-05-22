import styled from 'styled-components'
import { media } from '../../theme/tokens'

export const StyledContainer = styled.div<{ $narrow?: boolean }>`
  width: 100%;
  max-width: ${({ $narrow }) => ($narrow ? '760px' : '1200px')};
  margin-inline: auto;
  padding-inline: ${({ theme }) => theme.space['4']};

  ${media.md} {
    padding-inline: ${({ theme }) => theme.space['6']};
  }

  ${media.lg} {
    padding-inline: ${({ theme }) => theme.space['8']};
  }
`
