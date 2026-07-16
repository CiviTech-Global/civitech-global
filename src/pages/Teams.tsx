import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { teams, getRoleCountForTeam } from '../data/siteData'
import { StaggerContainer, StaggerItem } from '../components/fx/ScrollReveal'
import { SectionHeading } from '../components/fx/SectionHeading'
import { GlassCard } from '../components/fx/GlassCard'
import { Lightbulb, Code2, ShieldCheck, TrendingUp, Users } from 'lucide-react'
import { cn, getTeamColor, getTeamGlow } from '../lib/utils'

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Lightbulb,
  Code2,
  ShieldCheck,
  TrendingUp,
  Users,
}

export function Teams() {
  const { t } = useTranslation()

  return (
    <div className="px-6 pb-24 pt-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <SectionHeading title={t('teams.title')} subtitle={t('teams.subtitle')} />
        </div>

        <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {teams.map((team) => {
            const Icon = iconMap[team.iconName] ?? Users
            return (
              <StaggerItem key={team.id}>
                <Link to={`/teams/${team.id}`}>
                  <GlassCard
                    className={cn(
                      'h-full transition-shadow duration-300',
                      getTeamGlow(team.color)
                    )}
                    hover
                  >
                    <div className="mb-4 flex items-center gap-4">
                      <div
                        className={cn(
                          'flex h-12 w-12 items-center justify-center rounded-xl',
                          getTeamColor(team.color)
                        )}
                      >
                        <Icon size={24} />
                      </div>
                      <div>
                        <h2 className="text-lg font-semibold text-[var(--text)]">{team.name}</h2>
                        <p className="text-xs text-[var(--text-muted)]">
                          {t('teams.formerName', { name: team.formerName })}
                        </p>
                      </div>
                    </div>
                    <p className="line-clamp-3 text-sm leading-relaxed text-[var(--text-muted)]">
                      {team.story[0]}
                    </p>
                    <div className="mt-4">
                      <span className="inline-block rounded-full bg-[var(--bg-soft)] px-3 py-1 text-xs font-medium text-[var(--text-muted)]">
                        {t('teams.rolesCount', { count: getRoleCountForTeam(team.id) })}
                      </span>
                    </div>
                  </GlassCard>
                </Link>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </div>
  )
}
