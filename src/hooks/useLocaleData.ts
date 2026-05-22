import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

type LocaleDataMap<T> = { fr: T; en: T }

export function useLocaleData<T>(dataMap: LocaleDataMap<T>): T {
  const { i18n } = useTranslation()
  const lang = i18n.language.startsWith('fr') ? 'fr' : 'en'
  const [data, setData] = useState<T>(dataMap[lang])

  useEffect(() => {
    setData(dataMap[lang])
  }, [lang]) // eslint-disable-line react-hooks/exhaustive-deps

  return data
}
