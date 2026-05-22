import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { LuMenu, LuX } from 'react-icons/lu'
import { NavItem } from '../../molecules/NavItem'
import { LangSwitch } from '../../molecules/LangSwitch'
import { Icon } from '../../atoms/Icon'
import { useScrollSpy, NAV_SECTION_IDS } from '../../../hooks/useScrollSpy'
import {
  StyledHeader,
  Inner,
  Logo,
  Nav,
  NavRight,
  MobileMenuButton,
  MobileNav,
} from './Header.styles'

export function Header() {
  const { t } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const activeId = useScrollSpy()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = NAV_SECTION_IDS.map((id) => ({
    id,
    href: `#${id}`,
    label: t(`nav.${id}`),
  }))

  const handleNavClick = () => setMenuOpen(false)

  return (
    <>
      <StyledHeader $scrolled={scrolled}>
        <Inner>
          <Logo href="#" aria-label="Retour en haut">
            AD
          </Logo>

          <Nav $open={false}>
            {navLinks.map(({ id, href, label }) => (
              <NavItem key={id} href={href} label={label} isActive={activeId === id} />
            ))}
          </Nav>

          <NavRight>
            <LangSwitch />
            <MobileMenuButton
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={menuOpen}
            >
              <Icon icon={menuOpen ? LuX : LuMenu} size={20} />
            </MobileMenuButton>
          </NavRight>
        </Inner>
      </StyledHeader>

      <MobileNav $open={menuOpen}>
        {navLinks.map(({ id, href, label }) => (
          <NavItem
            key={id}
            href={href}
            label={label}
            isActive={activeId === id}
            onClick={handleNavClick}
          />
        ))}
      </MobileNav>
    </>
  )
}
