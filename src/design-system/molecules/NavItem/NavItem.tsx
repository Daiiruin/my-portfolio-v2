import { StyledNavItem } from './NavItem.styles'

type Props = {
  href: string
  label: string
  isActive?: boolean
  onClick?: () => void
}

export function NavItem({ href, label, isActive = false, onClick }: Props) {
  return (
    <StyledNavItem href={href} $active={isActive} onClick={onClick}>
      {label}
    </StyledNavItem>
  )
}
