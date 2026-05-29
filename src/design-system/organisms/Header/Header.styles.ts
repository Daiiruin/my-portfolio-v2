import styled from 'styled-components'
import { media } from '../../theme/tokens'

export const StyledHeader = styled.header<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${({ theme }) => theme.zIndex.sticky};
  height: 60px;
  display: flex;
  align-items: center;
  transition: background ${({ theme }) => theme.transition.base},
    border-color ${({ theme }) => theme.transition.base},
    backdrop-filter ${({ theme }) => theme.transition.base};

  background: ${({ $scrolled, theme }) => ($scrolled ? `${theme.colors.surface}d9` : 'transparent')};
  backdrop-filter: ${({ $scrolled }) => ($scrolled ? 'blur(12px)' : 'none')};
  border-bottom: 1px solid
    ${({ $scrolled, theme }) => ($scrolled ? theme.colors.border : 'transparent')};
`

export const Inner = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-inline: auto;
  padding-inline: ${({ theme }) => theme.space['4']};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.space['4']};

  ${media.md} {
    padding-inline: ${({ theme }) => theme.space['6']};
  }

  ${media.lg} {
    padding-inline: ${({ theme }) => theme.space['8']};
  }
`

export const Logo = styled.a`
  font-size: ${({ theme }) => theme.font.size.base};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  letter-spacing: ${({ theme }) => theme.font.letterSpacing.tight};
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  white-space: nowrap;
  flex-shrink: 0;

  &:hover {
    color: ${({ theme }) => theme.colors.textMuted};
  }
`

export const Nav = styled.nav<{ $open: boolean }>`
  display: none;
  align-items: center;
  gap: ${({ theme }) => theme.space['1']};

  ${media.md} {
    display: flex;
  }
`

export const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space['3']};
  flex-shrink: 0;
`

export const MobileMenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: ${({ theme }) => theme.radii.md};
  color: ${({ theme }) => theme.colors.textMuted};
  transition: background ${({ theme }) => theme.transition.fast},
    color ${({ theme }) => theme.transition.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.surfaceAlt};
    color: ${({ theme }) => theme.colors.text};
  }

  ${media.md} {
    display: none;
  }
`

export const MobileNav = styled.div<{ $open: boolean }>`
  display: ${({ $open }) => ($open ? 'flex' : 'none')};
  flex-direction: column;
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
  background: ${({ theme }) => `${theme.colors.surface}f7`};
  backdrop-filter: blur(12px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => theme.space['4']};
  gap: ${({ theme }) => theme.space['1']};
  z-index: ${({ theme }) => theme.zIndex.sticky};

  ${media.md} {
    display: none;
  }
`
