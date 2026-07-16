import { useTranslation } from 'react-i18next'
import { ScrollReveal } from '../components/fx/ScrollReveal'
import { MagneticLink } from '../components/fx/MagneticButton'
import { Home } from 'lucide-react'

export function NotFound() {
  const { t } = useTranslation()

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 pt-32 text-center">
      <ScrollReveal>
        <h1 className="mb-4 text-8xl font-bold text-cyan-500">404</h1>
        <h2 className="mb-6 text-2xl font-semibold text-[var(--text)]">Page not found</h2>
        <p className="mx-auto mb-8 max-w-md text-[var(--text-muted)]">
          The page you are looking for does not exist or has been moved.
        </p>
        <MagneticLink href="/" variant="primary">
          <Home size={18} /> {t('nav.home')}
        </MagneticLink>
      </ScrollReveal>
    </div>
  )
}
