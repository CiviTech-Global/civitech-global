import { ClipReveal } from './ClipReveal'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  className?: string
}

export function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  return (
    <div className={className}>
      <ClipReveal>
        <h2 className="mb-3 text-3xl font-bold text-[var(--text)] md:text-4xl">{title}</h2>
      </ClipReveal>
      {subtitle && (
        <ClipReveal delay={0.1}>
          <p className="mx-auto max-w-2xl text-[var(--text-muted)]">{subtitle}</p>
        </ClipReveal>
      )}
    </div>
  )
}
