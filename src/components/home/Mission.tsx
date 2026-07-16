import { useTranslation } from 'react-i18next'
import { ScrollReveal } from '../fx/ScrollReveal'
import { GlassCard } from '../fx/GlassCard'
import { Globe, Heart, Code2, Users } from 'lucide-react'

export function Mission() {
  const { t } = useTranslation()

  const highlights = [
    { icon: Globe, label: t('about.valueItems.community') },
    { icon: Code2, label: t('about.valueItems.innovation') },
    { icon: Heart, label: t('about.valueItems.transparency') },
    { icon: Users, label: t('about.valueItems.excellence') },
  ]

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-4xl text-center">
        <ScrollReveal>
          <h2 className="mb-6 text-3xl font-bold text-[var(--text)] md:text-4xl">
            {t('home.mission.title')}
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-[var(--text-muted)]">
            {t('home.mission.description')}
          </p>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {highlights.map((item, i) => (
            <ScrollReveal key={item.label} delay={0.15 + i * 0.08}>
              <GlassCard className="flex flex-col items-center gap-3 py-8" hover>
                <item.icon className="text-cyan-500" size={28} />
                <span className="font-medium text-[var(--text)]">{item.label}</span>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
