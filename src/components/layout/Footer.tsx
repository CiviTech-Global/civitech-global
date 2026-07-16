import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import logo from '../../assets/logos/white-logo.png'

const footerLinks = [
  { key: 'home', path: '/' },
  { key: 'about', path: '/about' },
  { key: 'teams', path: '/teams' },
  { key: 'roles', path: '/roles' },
  { key: 'openCall', path: '/open-call' },
  { key: 'gitWorkflow', path: '/git-workflow' },
  { key: 'contact', path: '/contact' },
] as const

export function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="relative mt-auto border-t border-[var(--border)] bg-[var(--bg-soft)]/50 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="flex flex-col items-center gap-3 md:items-start">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt={t('brand.name')}
                className="h-10 w-10 object-contain invert dark:invert-0"
              />
              <div>
                <p className="text-lg font-semibold text-[var(--text)]">{t('brand.name')}</p>
                <p className="text-xs text-[var(--text-muted)]">{t('brand.legalName')}</p>
              </div>
            </div>
          </div>

          <nav className="flex flex-wrap justify-center gap-4">
            {footerLinks.map((item) => (
              <Link
                key={item.key}
                to={item.path}
                className="text-sm text-[var(--text-muted)] transition-colors hover:text-cyan-500"
              >
                {t(`nav.${item.key}`)}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-2 border-t border-[var(--border)] pt-6 text-sm text-[var(--text-muted)] md:flex-row">
          <p>{t('footer.builtWith', { year })}</p>
          <p>© {year} {t('brand.name')}. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  )
}
