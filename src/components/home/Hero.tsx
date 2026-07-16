import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { DigitalGlobeLazy } from '../fx/DigitalGlobeLazy'
import { KineticText } from '../fx/KineticText'
import { MagneticLink } from '../fx/MagneticButton'
import { ArrowRight, Sparkles } from 'lucide-react'


export function Hero() {
  const { t } = useTranslation()

  return (
    <section className="relative flex min-h-[90vh] items-center px-6 pt-32 lg:pt-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div className="order-2 flex flex-col items-start gap-6 lg:order-1">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-sm font-medium text-cyan-600 dark:text-cyan-400"
          >
            <Sparkles size={14} />
            <span>{t('brand.shortTagline')}</span>
          </motion.div>

          <KineticText
            text={t('home.hero.headline')}
            tag="h1"
            className="text-5xl font-bold leading-tight tracking-tight text-[var(--text)] md:text-6xl lg:text-7xl"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="max-w-xl text-lg text-[var(--text-muted)]"
          >
            {t('home.hero.subheadline')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <MagneticLink href="/teams" variant="primary">
              {t('home.hero.ctaTeams')} <ArrowRight size={18} />
            </MagneticLink>
            <MagneticLink href="/open-call" variant="secondary">
              {t('home.hero.ctaOpenCall')}
            </MagneticLink>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 lg:order-2"
        >
          <DigitalGlobeLazy />
        </motion.div>
      </div>
    </section>
  )
}
