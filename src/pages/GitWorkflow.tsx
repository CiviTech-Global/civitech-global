import { useState } from 'react'
import { gitWorkflow } from '../data/siteData'
import { ScrollReveal } from '../components/fx/ScrollReveal'
import { GlassCard } from '../components/fx/GlassCard'
import { RippleButton } from '../components/fx/RippleButton'
import { Check, Copy, GitBranch } from 'lucide-react'

function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="relative overflow-hidden rounded-xl bg-slate-950 text-slate-100">
      <div className="flex items-center justify-between border-b border-slate-800 px-4 py-2">
        <span className="text-xs text-slate-400">bash</span>
        <RippleButton
          onClick={handleCopy}
          className="flex items-center gap-1 rounded-md px-2 py-1 text-xs text-slate-300 hover:bg-slate-800"
        >
          {copied ? <Check size={12} /> : <Copy size={12} />}
          {copied ? 'Copied' : 'Copy'}
        </RippleButton>
      </div>
      <pre className="overflow-x-auto p-4 text-sm leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  )
}

export function GitWorkflow() {
  const gw = gitWorkflow

  return (
    <div className="px-6 pb-24 pt-32">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <div className="mb-10 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-500">
              <GitBranch size={28} />
            </div>
            <h1 className="mb-4 text-4xl font-bold text-[var(--text)] md:text-5xl">{gw.title}</h1>
            <p className="mx-auto max-w-2xl text-[var(--text-muted)]">{gw.subtitle}</p>
          </div>
        </ScrollReveal>

        <div className="space-y-10">
          <ScrollReveal>
            <GlassCard>
              <h2 className="mb-4 text-xl font-semibold text-[var(--text)]">{gw.repository.title}</h2>
              <div className="space-y-4">
                <div>
                  <p className="mb-2 text-[var(--text-muted)]">{gw.repository.external.description}</p>
                  <CodeBlock code={gw.repository.external.code} />
                </div>
                <div>
                  <p className="mb-2 text-[var(--text-muted)]">{gw.repository.team.description}</p>
                  <CodeBlock code={gw.repository.team.code} />
                </div>
              </div>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="mb-4 text-2xl font-semibold text-[var(--text)]">The Standard Workflow</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {gw.steps.map((step, i) => (
                <GlassCard key={i}>
                  <div className="mb-2 flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500/10 text-xs font-bold text-cyan-500">
                      {i + 1}
                    </span>
                    <h3 className="font-semibold text-[var(--text)]">{step.title}</h3>
                  </div>
                  <p className="mb-3 text-sm text-[var(--text-muted)]">{step.description}</p>
                  <CodeBlock code={step.code} />
                </GlassCard>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid gap-8 lg:grid-cols-2">
              <GlassCard>
                <h2 className="mb-4 text-xl font-semibold text-[var(--text)]">{gw.branchNaming.title}</h2>
                <p className="mb-4 text-sm text-[var(--text-muted)]">{gw.branchNaming.description}</p>
                <p className="mb-4 rounded-md bg-[var(--bg-soft)] px-3 py-2 font-mono text-sm text-[var(--text)]">
                  {gw.branchNaming.pattern}
                </p>
                <ul className="space-y-2">
                  {gw.branchNaming.types.map((bt) => (
                    <li key={bt.prefix} className="text-sm text-[var(--text-muted)]">
                      <span className="font-mono font-medium text-cyan-500">{bt.prefix}</span> — {bt.use}
                      <br />
                      <span className="text-xs opacity-70">Example: {bt.example}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>

              <GlassCard>
                <h2 className="mb-4 text-xl font-semibold text-[var(--text)]">{gw.commitMessages.title}</h2>
                <p className="mb-4 text-sm text-[var(--text-muted)]">{gw.commitMessages.description}</p>
                <p className="mb-4 whitespace-pre-line rounded-md bg-[var(--bg-soft)] px-3 py-2 font-mono text-sm text-[var(--text)]">
                  {gw.commitMessages.format}
                </p>
                <ul className="grid grid-cols-2 gap-2">
                  {gw.commitMessages.types.map((ct) => (
                    <li key={ct.type} className="text-sm text-[var(--text-muted)]">
                      <span className="font-mono font-medium text-violet-500">{ct.type}</span> — {ct.desc}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <GlassCard>
              <h2 className="mb-4 text-xl font-semibold text-[var(--text)]">{gw.pullRequestEtiquette.title}</h2>
              <ul className="list-disc space-y-2 ps-5 text-[var(--text-muted)]">
                {gw.pullRequestEtiquette.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid gap-8 lg:grid-cols-2">
              <GlassCard>
                <h2 className="mb-4 text-xl font-semibold text-[var(--text)]">{gw.stayingUpToDate.title}</h2>
                <div className="space-y-4">
                  <div>
                    <p className="mb-2 text-sm text-[var(--text-muted)]">{gw.stayingUpToDate.directClone.description}</p>
                    <CodeBlock code={gw.stayingUpToDate.directClone.code} />
                  </div>
                  <div>
                    <p className="mb-2 text-sm text-[var(--text-muted)]">{gw.stayingUpToDate.forkedClone.description}</p>
                    <CodeBlock code={gw.stayingUpToDate.forkedClone.code} />
                  </div>
                </div>
              </GlassCard>

              <GlassCard>
                <h2 className="mb-4 text-xl font-semibold text-[var(--text)]">{gw.bestPractices.title}</h2>
                <ul className="list-disc space-y-2 ps-5 text-[var(--text-muted)]">
                  {gw.bestPractices.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </GlassCard>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <GlassCard>
              <h2 className="mb-4 text-xl font-semibold text-[var(--text)]">{gw.quickReference.title}</h2>
              <CodeBlock code={gw.quickReference.code} />
            </GlassCard>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}
