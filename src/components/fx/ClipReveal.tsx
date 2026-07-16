import { motion } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { cn } from '../../lib/utils'

interface ClipRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'left' | 'right' | 'up' | 'down'
}

export function ClipReveal({ children, className, delay = 0, direction = 'left' }: ClipRevealProps) {
  const reduced = useReducedMotion()

  const clipFrom = {
    left: 'inset(0 100% 0 0)',
    right: 'inset(0 0 0 100%)',
    up: 'inset(100% 0 0 0)',
    down: 'inset(0 0 100% 0)',
  }[direction]

  const clipTo = 'inset(0 0 0 0)'

  return (
    <motion.div
      initial={reduced ? { opacity: 1 } : { opacity: 0, clipPath: clipFrom }}
      whileInView={{ opacity: 1, clipPath: clipTo }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
