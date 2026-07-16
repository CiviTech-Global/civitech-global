import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Users, Briefcase, Megaphone, GitBranch } from 'lucide-react'
import { StaggerContainer, StaggerItem } from '../fx/ScrollReveal'
import { GlassCard } from '../fx/GlassCard'
import { cn } from '../../lib/utils'

const portals = [
  { key: 'teams', path: '/teams', icon: Users, color: 'text-cyan-500', glow: 'group-hover:shadow-cyan-500/20' },
  { key: 'roles', path: '/roles', icon: Briefcase, color: 'text-violet-500', glow: 'group-hover:shadow-violet-500/20' },
  { key: 'openCall', path: '/open-call', icon: Megaphone, color: 'text-emerald-500', glow: 'group-hover:shadow-emerald-500/20' },
  { key: 'gitWorkflow', path: '/git-workflow', icon: GitBranch, color: 'text-amber-500', glow: 'group-hover:shadow-amber-500/20' },
]

export function TeamPortal() {
  const { t } = useTranslation()

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-[var(--text)] md:text-4xl">
            {t('home.portals.title')}
          </h2>
        </div>

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {portals.map((portal) => (
            <StaggerItem key={portal.key}>
              <Link to={portal.path} className="group block">
                <GlassCard className={cn('h-full transition-shadow duration-300', portal.glow)}>
                  <div
                    className={cn(
                      'mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--bg-soft)]',
                      portal.color
                    )}
                  >
                    <portal.icon size={24} />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-[var(--text)]">
                    {t(`home.portals.${portal.key}.title`)}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                    {t(`home.portals.${portal.key}.description`)}
                  </p>
                </GlassCard>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
