import { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { supportedLanguages, type SupportedLanguage } from '../../i18n/config'
import { Globe, Check } from 'lucide-react'
import { cn } from '../../lib/utils'

export function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const current = supportedLanguages.find((l) => l.code === i18n.language) ?? supportedLanguages[0]

  const select = (code: SupportedLanguage) => {
    i18n.changeLanguage(code)
    setOpen(false)
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex h-10 items-center gap-2 rounded-full bg-[var(--bg-soft)] px-3 text-sm font-medium text-[var(--text)] transition-transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
      >
        <Globe size={16} />
        <span className="hidden sm:inline">{current.label}</span>
        <span className="sm:hidden uppercase">{current.code}</span>
      </button>
      {open && (
        <div className="absolute end-0 top-12 z-50 min-w-[10rem] overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-1 shadow-xl">
          {supportedLanguages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => select(lang.code)}
              className={cn(
                'flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2 text-start text-sm transition-colors',
                current.code === lang.code
                  ? 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400'
                  : 'text-[var(--text)] hover:bg-[var(--bg-soft)]'
              )}
            >
              <span>{lang.label}</span>
              {current.code === lang.code && <Check size={14} />}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
