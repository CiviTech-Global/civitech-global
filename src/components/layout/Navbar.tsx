import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { ThemeToggle } from './ThemeToggle'
import { LanguageSwitcher } from './LanguageSwitcher'
import { cn } from '../../lib/utils'
import logo from '../../assets/logos/white-logo.png'

const navItems = [
  { key: 'home', path: '/' },
  { key: 'about', path: '/about' },
  { key: 'teams', path: '/teams' },
  { key: 'roles', path: '/roles' },
  { key: 'openCall', path: '/open-call' },
  { key: 'gitWorkflow', path: '/git-workflow' },
  { key: 'contact', path: '/contact' },
]

export function Navbar() {
  const { t } = useTranslation()
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed start-0 top-0 z-40 w-full">
      <nav className="glass mx-4 mt-4 rounded-2xl px-4 py-3 shadow-lg backdrop-blur-xl md:mx-6 lg:mx-auto lg:max-w-6xl">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt={t('brand.name')}
              className="h-10 w-10 object-contain invert dark:invert-0"
            />
            <span className="hidden text-lg font-semibold text-[var(--text)] sm:inline">
              {t('brand.name')}
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const active =
                item.path === '/' ? location.pathname === '/' : location.pathname.startsWith(item.path)
              return (
                <Link
                  key={item.key}
                  to={item.path}
                  className={cn(
                    'relative rounded-full px-4 py-2 text-sm font-medium transition-colors',
                    active ? 'text-[var(--text)]' : 'text-[var(--text-muted)] hover:text-[var(--text)]'
                  )}
                >
                  {t(`nav.${item.key}`)}
                  {active && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-[var(--bg-soft)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              )
            })}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <LanguageSwitcher />
            <button
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--bg-soft)] text-[var(--text)] lg:hidden"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? t('nav.close') : t('nav.menu')}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.98 }}
            className="glass mx-4 mt-2 rounded-2xl p-4 shadow-xl backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) => {
                const active =
                  item.path === '/'
                    ? location.pathname === '/'
                    : location.pathname.startsWith(item.path)
                return (
                  <Link
                    key={item.key}
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      'rounded-xl px-4 py-3 text-base font-medium transition-colors',
                      active
                        ? 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400'
                        : 'text-[var(--text-muted)] hover:bg-[var(--bg-soft)] hover:text-[var(--text)]'
                    )}
                  >
                    {t(`nav.${item.key}`)}
                  </Link>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
