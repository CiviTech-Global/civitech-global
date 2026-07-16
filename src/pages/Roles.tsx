import { useState, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { roles, teams } from '../data/siteData'
import { ScrollReveal } from '../components/fx/ScrollReveal'
import { SectionHeading } from '../components/fx/SectionHeading'
import { GlassCard } from '../components/fx/GlassCard'
import { Search } from 'lucide-react'
import { cn, getTeamColor } from '../lib/utils'

export function Roles() {
  const { t } = useTranslation()
  const [query, setQuery] = useState('')
  const [teamFilter, setTeamFilter] = useState('all')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q && teamFilter === 'all') return roles
    return roles.filter((role) => {
      const team = teams.find((t) => t.id === role.teamId)
      const haystack = [
        role.title,
        role.summary,
        role.shortTitle,
        team?.name ?? '',
        team?.shortName ?? '',
        ...role.skills,
        ...role.tools,
      ]
        .join(' ')
        .toLowerCase()
      const matchesQuery = !q || haystack.includes(q)
      const matchesTeam = teamFilter === 'all' || role.teamId === teamFilter
      return matchesQuery && matchesTeam
    })
  }, [query, teamFilter])

  return (
    <div className="px-6 pb-24 pt-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <SectionHeading title={t('roles.title')} subtitle={t('roles.subtitle')} />
        </div>

        <ScrollReveal delay={0.1}>
          <div className="mb-8 flex flex-col gap-4 md:flex-row">
            <div className="relative flex-1">
              <Search className="absolute start-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" size={18} />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t('roles.search')}
                className="w-full rounded-full border border-[var(--border)] bg-[var(--bg-soft)] py-3 pe-4 ps-12 text-[var(--text)] placeholder:text-[var(--text-muted)] focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
              />
            </div>
            <select
              value={teamFilter}
              onChange={(e) => setTeamFilter(e.target.value)}
              className="rounded-full border border-[var(--border)] bg-[var(--bg-soft)] px-6 py-3 text-[var(--text)] focus:border-cyan-500 focus:outline-none"
            >
              <option value="all">{t('roles.filterAll')}</option>
              {teams.map((team) => (
                <option key={team.id} value={team.id}>
                  {team.name}
                </option>
              ))}
            </select>
          </div>
        </ScrollReveal>

        {filtered.length === 0 ? (
          <div className="py-20 text-center text-[var(--text-muted)]">{t('roles.noResults')}</div>
        ) : (
          <motion.div layout className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence>
              {filtered.map((role) => {
                const team = teams.find((t) => t.id === role.teamId)
                return (
                  <motion.div
                    layout
                    key={role.slug}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Link to={`/roles/${role.slug}`}>
                      <GlassCard className="h-full" hover>
                        <div className="mb-3 flex items-center gap-2">
                          <span className={cn('rounded-md px-2 py-0.5 text-xs font-medium', getTeamColor(team?.color ?? 'cyan'))}>
                            {role.shortTitle}
                          </span>
                          <span className="text-xs text-[var(--text-muted)]">{team?.shortName}</span>
                        </div>
                        <h3 className="mb-2 text-lg font-semibold text-[var(--text)]">{role.title}</h3>
                        <p className="line-clamp-3 text-sm text-[var(--text-muted)]">{role.summary}</p>
                      </GlassCard>
                    </Link>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </div>
  )
}
