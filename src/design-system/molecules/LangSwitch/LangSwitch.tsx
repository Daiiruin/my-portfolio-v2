import { useTranslation } from 'react-i18next'
import { Wrapper, LangButton } from './LangSwitch.styles'

export function LangSwitch() {
  const { i18n } = useTranslation()
  const current = i18n.language.startsWith('fr') ? 'fr' : 'en'

  return (
    <Wrapper>
      <LangButton $active={current === 'fr'} onClick={() => i18n.changeLanguage('fr')}>
        FR
      </LangButton>
      <LangButton $active={current === 'en'} onClick={() => i18n.changeLanguage('en')}>
        EN
      </LangButton>
    </Wrapper>
  )
}
