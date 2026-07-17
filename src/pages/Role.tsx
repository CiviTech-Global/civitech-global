import { useTranslation } from 'react-i18next'
import { Link, useParams, Navigate } from 'react-router-dom'
import { useSiteData, getRoleBySlug, getTeamById, getAdjacentRole } from '../data/siteData'
import { ScrollReveal } from '../components/fx/ScrollReveal'
import { GlassCard } from '../components/fx/GlassCard'
import { MagneticLink } from '../components/fx/MagneticButton'
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react'
import { cn, getTeamColor } from '../lib/utils'

export function Role() {
  const { t } = useTranslation()
  const { teams, roles } = useSiteData()
  const { roleSlug } = useParams<{ roleSlug: string }>()
  const role = roleSlug ? getRoleBySlug(roleSlug, roles) : undefined

  if (!role) return <Navigate to="/roles" replace />

  const team = getTeamById(role.teamId, teams)
  const { prev, next } = getAdjacentRole(role, roles)

  return (
    <div className="px-6 pb-24 pt-32">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <div className="mb-4 flex items-center gap-2 text-sm text-[var(--text-muted)]">
            <Link to="/" className="hover:text-cyan-500">{t('nav.home')}</Link>
            <span>/</span>
            <Link to="/teams" className="hover:text-cyan-500">{t('nav.teams')}</Link>
            <span>/</span>
            {team && <Link to={`/teams/${team.id}`} className="hover:text-cyan-500">{team.shortName}</Link>}
            <span>/</span>
            <span className="text-[var(--text)]">{role.title}</span>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className={cn('rounded-lg px-3 py-1 text-sm font-bold', getTeamColor(team?.color ?? 'cyan'))}>
              {role.shortTitle}
            </span>
            <h1 className="text-3xl font-bold text-[var(--text)] md:text-4xl">{role.title}</h1>
          </div>
          <p className="mb-10 text-lg text-[var(--text-muted)]">{role.summary}</p>
        </ScrollReveal>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-10">
            <ScrollReveal>
              <GlassCard>
                <h2 className="mb-4 text-xl font-semibold text-[var(--text)]">{t('role.story')}</h2>
                <p className="leading-relaxed text-[var(--text-muted)]">{role.story}</p>
              </GlassCard>
            </ScrollReveal>

            <ScrollReveal>
              <h2 className="mb-4 text-xl font-semibold text-[var(--text)]">{t('role.responsibilities')}</h2>
              <ul className="list-disc space-y-2 ps-5 text-[var(--text-muted)]">
                {role.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal>
              <h2 className="mb-4 text-xl font-semibold text-[var(--text)]">{t('role.bestPractices')}</h2>
              <ul className="list-disc space-y-2 ps-5 text-[var(--text-muted)]">
                {role.bestPractices.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal>
              <h2 className="mb-4 text-xl font-semibold text-[var(--text)]">{t('role.resources')}</h2>
              <div className="space-y-3">
                {role.resources.map((res, i) => (
                  <a
                    key={i}
                    href={res.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-start gap-3 rounded-xl border border-[var(--border)] bg-[var(--bg-soft)] p-4 transition-colors hover:border-cyan-500/50"
                  >
                    <ExternalLink size={18} className="mt-0.5 shrink-0 text-cyan-500" />
                    <div>
                      <p className="font-medium text-[var(--text)]">{res.title}</p>
                      <p className="text-sm text-[var(--text-muted)]">{res.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <aside className="space-y-8">
            <ScrollReveal>
              <GlassCard>
                <h2 className="mb-3 text-lg font-semibold text-[var(--text)]">{t('role.skills')}</h2>
                <div className="flex flex-wrap gap-2">
                  {role.skills.map((skill) => (
                    <span key={skill} className="rounded-full bg-[var(--bg-soft)] px-3 py-1 text-xs text-[var(--text)]">
                      {skill}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </ScrollReveal>

            <ScrollReveal>
              <GlassCard>
                <h2 className="mb-3 text-lg font-semibold text-[var(--text)]">{t('role.tools')}</h2>
                <div className="flex flex-wrap gap-2">
                  {role.tools.map((tool) => (
                    <span key={tool} className="rounded-full bg-[var(--bg-soft)] px-3 py-1 text-xs text-[var(--text)]">
                      {tool}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </ScrollReveal>

            <ScrollReveal>
              <GlassCard>
                <h2 className="mb-3 text-lg font-semibold text-[var(--text)]">{t('role.interactions')}</h2>
                <div className="space-y-3">
                  {role.dailyInteractions.map((interaction, i) => (
                    <div key={i} className="border-s-2 border-cyan-500/30 ps-3">
                      <p className="font-medium text-[var(--text)]">{interaction.role}</p>
                      <p className="text-sm text-[var(--text-muted)]">{interaction.description}</p>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </ScrollReveal>
          </aside>
        </div>

        <ScrollReveal>
          <h2 className="mb-6 mt-12 text-2xl font-bold text-[var(--text)]">{t('role.roadmap')}</h2>
          <div className="relative">
            <div className="absolute inset-y-0 start-5 w-0.5 bg-gradient-to-b from-cyan-500 to-violet-500 md:start-1/2 md:-translate-x-1/2" />
            <div className="space-y-8">
              {role.roadmap.map((level, i) => (
                <div
                  key={i}
                  className={cn(
                    'relative flex flex-col gap-4 md:flex-row',
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  )}
                >
                  <div className="md:w-1/2" />
                  <div className="absolute start-5 top-0 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-[var(--bg)] bg-cyan-500 md:start-1/2" />
                  <GlassCard className="ms-10 md:ms-0 md:w-1/2">
                    <div className="mb-1 text-xs font-bold text-cyan-500">Level {level.level}</div>
                    <h3 className="mb-1 font-semibold text-[var(--text)]">{level.title}</h3>
                    <p className="mb-2 text-sm text-[var(--text-muted)]">{level.focus}</p>
                    <span className="text-xs text-[var(--text-muted)]">{level.timeframe}</span>
                  </GlassCard>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--border)] pt-8">
            <div>
              {prev && (
                <MagneticLink href={`/roles/${prev.slug}`} variant="secondary">
                  <ArrowLeft size={16} /> {t('role.prev')}
                </MagneticLink>
              )}
            </div>
            <div>
              {next && (
                <MagneticLink href={`/roles/${next.slug}`} variant="secondary">
                  {t('role.next')} <ArrowRight size={16} />
                </MagneticLink>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
