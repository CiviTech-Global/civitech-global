import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useInView } from 'framer-motion'
import { teams, roles } from '../../data/siteData'
import { useReducedMotion } from '../../hooks/useReducedMotion'

function AnimatedNumber({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const reduced = useReducedMotion()

  useEffect(() => {
    if (!inView) return
    if (reduced) {
      setCount(value)
      return
    }
    let start = 0
    const duration = 1500
    const startTime = performance.now()

    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 4)
      start = Math.floor(eased * value)
      setCount(start)
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, value, reduced])

  return (
    <span ref={ref} className="text-4xl font-bold tabular-nums text-[var(--text)]">
      {count}
      {suffix}
    </span>
  )
}

export function Stats() {
  const { t } = useTranslation()

  const items = [
    { value: teams.length, label: t('home.stats.teams') },
    { value: roles.length, label: t('home.stats.roles') },
    { value: 12, label: t('home.stats.projects'), suffix: '+' },
    { value: 8, label: t('home.stats.countries'), suffix: '+' },
  ]

  return (
    <section className="px-6 py-20">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 md:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.label}
            className="glass flex flex-col items-center gap-2 rounded-2xl p-6 text-center"
          >
            <AnimatedNumber value={item.value} suffix={item.suffix} />
            <span className="text-sm font-medium text-[var(--text-muted)]">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
