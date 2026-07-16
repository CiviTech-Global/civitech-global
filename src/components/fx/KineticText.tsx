import { motion } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { cn } from '../../lib/utils'

interface KineticTextProps {
  text: string
  className?: string
  stagger?: number
  tag?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
}

export function KineticText({ text, className, stagger = 0.03, tag = 'h1' }: KineticTextProps) {
  const reduced = useReducedMotion()
  const words = text.split(' ')
  const Tag = tag

  return (
    <Tag className={cn('flex flex-wrap justify-center gap-x-3 gap-y-1', className)}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={reduced ? { opacity: 1 } : { opacity: 0, y: 40, scale: 0.9, skewX: -8 }}
          animate={{ opacity: 1, y: 0, scale: 1, skewX: 0 }}
          transition={{
            duration: 0.55,
            delay: i * stagger,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block will-change-transform"
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  )
}
