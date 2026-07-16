import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { cn } from '../../lib/utils'

interface ParallaxLayerProps {
  children: React.ReactNode
  className?: string
  speed?: number
}

export function ParallaxLayer({ children, className, speed = 0.3 }: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 200])

  return (
    <div ref={ref} className={cn('relative overflow-hidden', className)}>
      <motion.div style={reduced ? {} : { y }} className="h-full w-full">
        {children}
      </motion.div>
    </div>
  )
}
