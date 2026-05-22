import styled from 'styled-components'
import { media } from '../../theme/tokens'

export const StyledFooter = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding-block: ${({ theme }) => theme.space['8']};
`

export const Inner = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-inline: auto;
  padding-inline: ${({ theme }) => theme.space['4']};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.space['3']};

  ${media.md} {
    flex-direction: row;
    justify-content: space-between;
    padding-inline: ${({ theme }) => theme.space['6']};
  }

  ${media.lg} {
    padding-inline: ${({ theme }) => theme.space['8']};
  }
`

export const Links = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space['4']};
`

export const SocialLink = styled.a`
  color: ${({ theme }) => theme.colors.textMuted};
  transition: color ${({ theme }) => theme.transition.fast};
  display: flex;
  align-items: center;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`
