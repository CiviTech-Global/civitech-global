import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { supportedLanguages } from '../i18n/config'

export function useDirection() {
  const { i18n } = useTranslation()
  const lang = supportedLanguages.find((l) => l.code === i18n.language)
  const dir = lang?.dir ?? 'ltr'

  useEffect(() => {
    document.documentElement.dir = dir
    document.documentElement.lang = i18n.language
  }, [dir, i18n.language])

  return dir
}
