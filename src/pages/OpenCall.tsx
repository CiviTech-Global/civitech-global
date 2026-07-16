import { openCall } from '../data/siteData'
import { ScrollReveal } from '../components/fx/ScrollReveal'
import { GlassCard } from '../components/fx/GlassCard'
import { RippleButton } from '../components/fx/RippleButton'
import { AlertTriangle, Calendar, Send } from 'lucide-react'

export function OpenCall() {
  const oc = openCall

  return (
    <div className="px-6 pb-24 pt-32">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <div className="mb-10 text-center">
            <span className="mb-4 inline-block rounded-full bg-cyan-500/10 px-4 py-1 text-sm font-medium text-cyan-600 dark:text-cyan-400">
              {oc.headline}
            </span>
            <h1 className="mb-4 text-4xl font-bold text-[var(--text)] md:text-5xl">{oc.title}</h1>
            <p className="mx-auto max-w-2xl text-lg text-[var(--text-muted)]">{oc.mission}</p>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <ScrollReveal>
              <GlassCard>
                <h2 className="mb-4 text-xl font-semibold text-[var(--text)]">{oc.whatIs.title}</h2>
                {oc.whatIs.paragraphs.map((p, i) => (
                  <p key={i} className="mb-4 leading-relaxed text-[var(--text-muted)]">
                    {p}
                  </p>
                ))}
                <ul className="list-disc space-y-2 ps-5 text-[var(--text-muted)]">
                  {oc.whatIs.exposure.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </GlassCard>
            </ScrollReveal>

            <ScrollReveal>
              <GlassCard>
                <h2 className="mb-4 text-xl font-semibold text-[var(--text)]">{oc.purpose.title}</h2>
                <ul className="list-disc space-y-2 ps-5 text-[var(--text-muted)]">
                  {oc.purpose.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </GlassCard>
            </ScrollReveal>

            <ScrollReveal>
              <GlassCard>
                <h2 className="mb-4 text-xl font-semibold text-[var(--text)]">{oc.whoShouldApply.title}</h2>
                <p className="text-[var(--text-muted)]">{oc.whoShouldApply.description}</p>
              </GlassCard>
            </ScrollReveal>

            <ScrollReveal>
              <GlassCard>
                <h2 className="mb-4 text-xl font-semibold text-[var(--text)]">{oc.commitment.title}</h2>
                <ul className="list-disc space-y-2 ps-5 text-[var(--text-muted)]">
                  {oc.commitment.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </GlassCard>
            </ScrollReveal>
          </div>

          <aside className="space-y-6">
            <ScrollReveal>
              <GlassCard glow className="border-amber-500/20">
                <div className="mb-3 flex items-center gap-2 text-amber-600 dark:text-amber-400">
                  <AlertTriangle size={20} />
                  <h2 className="font-semibold">{oc.important.title}</h2>
                </div>
                <p className="text-sm text-[var(--text-muted)]">{oc.important.note}</p>
              </GlassCard>
            </ScrollReveal>

            <ScrollReveal>
              <GlassCard>
                <h2 className="mb-4 text-lg font-semibold text-[var(--text)]">{oc.application.title}</h2>
                <p className="mb-6 text-sm text-[var(--text-muted)]">{oc.application.instructions}</p>
                <div className="flex flex-col gap-4">
                  <a href={oc.application.applyUrl} target="_blank" rel="noreferrer" className="block">
                    <RippleButton className="w-full rounded-full bg-gradient-to-r from-cyan-600 to-cyan-500 px-5 py-3 font-medium text-white shadow-lg shadow-cyan-500/25">
                      <span className="flex items-center justify-center gap-2">
                        <Send size={16} /> {oc.application.applyButtonText}
                      </span>
                    </RippleButton>
                  </a>
                  <a href={oc.application.calendlyUrl} target="_blank" rel="noreferrer" className="block">
                    <RippleButton className="w-full rounded-full border border-[var(--border)] bg-[var(--bg-soft)] px-5 py-3 font-medium text-[var(--text)]">
                      <span className="flex items-center justify-center gap-2">
                        <Calendar size={16} /> {oc.application.scheduleButtonText}
                      </span>
                    </RippleButton>
                  </a>
                </div>
              </GlassCard>
            </ScrollReveal>
          </aside>
        </div>

        <ScrollReveal>
          <div className="mt-12 text-center">
            <p className="text-xl font-semibold text-[var(--text)]">{oc.closing.tagline}</p>
            <p className="mt-2 text-[var(--text-muted)]">{oc.closing.signature}</p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
