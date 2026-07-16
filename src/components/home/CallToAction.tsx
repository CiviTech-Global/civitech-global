import { useTranslation } from 'react-i18next'
import { ScrollReveal } from '../fx/ScrollReveal'
import { MagneticLink } from '../fx/MagneticButton'
import { ParticleField } from '../fx/ParticleField'
import { ArrowRight } from 'lucide-react'

export function CallToAction() {
  const { t } = useTranslation()

  return (
    <section className="relative px-6 py-24">
      <ParticleField className="pointer-events-none absolute inset-0 opacity-40" particleCount={30} />
      <ScrollReveal>
        <div className="relative mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-cyan-600 to-violet-600 p-px">
          <div className="rounded-3xl bg-[var(--bg)] p-8 text-center md:p-12">
            <h2 className="mb-4 text-3xl font-bold text-[var(--text)]">{t('home.cta.title')}</h2>
            <p className="mx-auto mb-8 max-w-2xl text-[var(--text-muted)]">
              {t('home.cta.description')}
            </p>
            <MagneticLink href="/open-call" variant="primary">
              {t('home.cta.button')} <ArrowRight size={18} />
            </MagneticLink>
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
