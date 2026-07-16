import { motion } from 'framer-motion'
import { cn } from '../../lib/utils'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  glow?: boolean
  onClick?: () => void
}

export function GlassCard({ children, className, hover = true, glow = false, onClick }: GlassCardProps) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={
        hover
          ? {
              y: -8,
              scale: 1.01,
              transition: { type: 'spring', stiffness: 300, damping: 18 },
            }
          : undefined
      }
      className={cn(
        'glass rounded-2xl p-6 transition-colors duration-300',
        glow && 'neon-glow',
        onClick && 'cursor-pointer',
        className
      )}
    >
      {children}
    </motion.div>
  )
}
