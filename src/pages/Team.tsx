import { useTranslation } from 'react-i18next'
import { Link, useParams, Navigate } from 'react-router-dom'
import { getTeamById, getRolesByTeam } from '../data/siteData'
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/fx/ScrollReveal'
import { GlassCard } from '../components/fx/GlassCard'
import { ArrowLeft, ArrowRight, Lightbulb, Code2, ShieldCheck, TrendingUp, Users } from 'lucide-react'
import { cn, getTeamColor } from '../lib/utils'

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Lightbulb,
  Code2,
  ShieldCheck,
  TrendingUp,
  Users,
}

export function Team() {
  const { t } = useTranslation()
  const { teamId } = useParams<{ teamId: string }>()
  const team = teamId ? getTeamById(teamId) : undefined

  if (!team) return <Navigate to="/teams" replace />

  const Icon = iconMap[team.iconName] ?? Users
  const teamRoles = getRolesByTeam(team.id)

  return (
    <div className="px-6 pb-24 pt-32">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <Link to="/teams" className="mb-6 inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-cyan-500">
            <ArrowLeft size={16} /> {t('team.backToTeams')}
          </Link>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mb-8 flex items-center gap-4">
            <div className={cn('flex h-16 w-16 items-center justify-center rounded-2xl', getTeamColor(team.color))}>
              <Icon size={32} />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-[var(--text)] md:text-4xl">{team.name}</h1>
              <p className="text-sm text-[var(--text-muted)]">{t('teams.formerName', { name: team.formerName })}</p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mb-12 space-y-4 text-lg leading-relaxed text-[var(--text-muted)]">
            {team.story.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="mb-6 text-2xl font-bold text-[var(--text)]">{t('team.roles')}</h2>
        </ScrollReveal>

        <StaggerContainer className="grid gap-4 md:grid-cols-2">
          {teamRoles.map((role) => (
            <StaggerItem key={role.slug}>
              <Link to={`/roles/${role.slug}`}>
                <GlassCard className="group flex items-center justify-between" hover>
                  <div>
                    <h3 className="font-semibold text-[var(--text)]">{role.title}</h3>
                    <p className="text-sm text-[var(--text-muted)]">{role.summary}</p>
                  </div>
                  <ArrowRight className="text-[var(--text-muted)] transition-transform group-hover:translate-x-1 group-hover:text-cyan-500" size={18} />
                </GlassCard>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </div>
  )
}
