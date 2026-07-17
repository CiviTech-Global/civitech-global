import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import enTranslation from './locales/en/translation.json'
import faTranslation from './locales/fa/translation.json'
import frTranslation from './locales/fr/translation.json'
import deTranslation from './locales/de/translation.json'
import esTranslation from './locales/es/translation.json'

import enContent from './locales/en/content.json'
import faContent from './locales/fa/content.json'
import frContent from './locales/fr/content.json'
import deContent from './locales/de/content.json'
import esContent from './locales/es/content.json'

export const supportedLanguages = [
  { code: 'en', label: 'English', dir: 'ltr' },
  { code: 'fa', label: 'فارسی', dir: 'rtl' },
  { code: 'fr', label: 'Français', dir: 'ltr' },
  { code: 'de', label: 'Deutsch', dir: 'ltr' },
  { code: 'es', label: 'Español', dir: 'ltr' },
] as const

export type SupportedLanguage = (typeof supportedLanguages)[number]['code']

const resources = {
  en: { translation: enTranslation, content: enContent },
  fa: { translation: faTranslation, content: faContent },
  fr: { translation: frTranslation, content: frContent },
  de: { translation: deTranslation, content: deContent },
  es: { translation: esTranslation, content: esContent },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: supportedLanguages.map((l) => l.code),
    defaultNS: 'translation',
    ns: ['translation', 'content'],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  })

export default i18n
