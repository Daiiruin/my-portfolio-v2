import { LuSun, LuMoon } from 'react-icons/lu'
import { useTheme } from '../../../contexts/ThemeContext'
import { Icon } from '../../atoms/Icon'
import { ToggleButton } from './ThemeToggle.styles'

export function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <ToggleButton
      onClick={toggleTheme}
      aria-label={isDark ? 'Passer au thème clair' : 'Passer au thème sombre'}
    >
      <Icon icon={isDark ? LuSun : LuMoon} size={18} />
    </ToggleButton>
  )
}
