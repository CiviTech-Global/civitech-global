import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/fx/ScrollReveal'
import { SectionHeading } from '../components/fx/SectionHeading'
import { GlassCard } from '../components/fx/GlassCard'
import { MagneticLink } from '../components/fx/MagneticButton'
import { FloatingInput } from '../components/fx/FloatingInput'
import { RippleButton } from '../components/fx/RippleButton'
import { Github, Linkedin, MapPin, Send, CheckCircle } from 'lucide-react'

export function Contact() {
  const { t } = useTranslation()
  const [sent, setSent] = useState(false)

  const channels = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/company/civitech-global',
      href: 'https://www.linkedin.com/company/civitech-global/',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/CiviTech-Global',
      href: 'https://github.com/CiviTech-Global',
    },
    {
      icon: MapPin,
      label: t('contact.location'),
      value: t('contact.locationValue'),
      href: '#',
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="px-6 pb-24 pt-32">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <SectionHeading title={t('contact.title')} subtitle={t('contact.description')} />
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <StaggerContainer className="grid h-fit gap-4">
            {channels.map((channel) => (
              <StaggerItem key={channel.label}>
                <a
                  href={channel.href}
                  target={channel.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                >
                  <GlassCard className="flex items-center gap-4" hover>
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-500">
                      <channel.icon size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-[var(--text-muted)]">{channel.label}</p>
                      <p className="font-semibold text-[var(--text)]">{channel.value}</p>
                    </div>
                  </GlassCard>
                </a>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollReveal direction="right">
            <GlassCard>
              {sent ? (
                <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                  <CheckCircle className="text-emerald-500" size={48} />
                  <p className="text-lg font-medium text-[var(--text)]">{t('openCall.form.success')}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <FloatingInput label={t('openCall.form.name')} required />
                  <FloatingInput label={t('openCall.form.email')} type="email" required />
                  <FloatingInput label={t('openCall.form.linkedin')} />
                  <FloatingInput label={t('openCall.form.message')} multiline required />
                  <RippleButton
                    type="submit"
                    className="w-full rounded-full bg-gradient-to-r from-cyan-600 to-cyan-500 px-5 py-3 font-medium text-white shadow-lg shadow-cyan-500/25"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <Send size={16} /> {t('openCall.form.submit')}
                    </span>
                  </RippleButton>
                </form>
              )}
            </GlassCard>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div className="mt-16 text-center">
            <h2 className="mb-4 text-2xl font-semibold text-[var(--text)]">{t('home.cta.title')}</h2>
            <p className="mb-6 text-[var(--text-muted)]">{t('home.cta.description')}</p>
            <MagneticLink href="/open-call" variant="primary">
              {t('home.cta.button')}
            </MagneticLink>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
