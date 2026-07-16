import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { cn } from '../../lib/utils'

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
  variant?: 'primary' | 'secondary' | 'ghost'
}

interface MagneticLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode
  className?: string
  variant?: 'primary' | 'secondary' | 'ghost'
}

function useMagnetic<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const reduced = useReducedMotion()

  const handleMouseMove = (e: React.MouseEvent) => {
    if (reduced || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) * 0.25
    const y = (e.clientY - rect.top - rect.height / 2) * 0.25
    setPosition({ x, y })
  }

  const handleMouseLeave = () => setPosition({ x: 0, y: 0 })

  return { ref, position, handleMouseMove, handleMouseLeave }
}

function Inner({ children, variant, className }: { children: React.ReactNode; variant: string; className?: string }) {
  return (
    <span
      className={cn(
        'relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-medium transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        variant === 'primary' &&
          'bg-gradient-to-r from-cyan-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40',
        variant === 'secondary' &&
          'bg-[var(--card)] text-[var(--text)] border border-[var(--border)] hover:border-cyan-500/50',
        variant === 'ghost' && 'text-[var(--text-muted)] hover:text-[var(--text)]',
        className
      )}
    >
      {children}
    </span>
  )
}

export function MagneticButton({
  children,
  className,
  variant = 'primary',
  ...props
}: MagneticButtonProps) {
  const { ref, position, handleMouseMove, handleMouseLeave } = useMagnetic<HTMLButtonElement>()

  return (
    <button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <motion.span
        animate={{ x: position.x, y: position.y }}
        transition={{ type: 'spring', stiffness: 350, damping: 15 }}
      >
        <Inner variant={variant} className={className}>
          {children}
        </Inner>
      </motion.span>
    </button>
  )
}

export function MagneticLink({
  children,
  className,
  variant = 'primary',
  ...props
}: MagneticLinkProps) {
  const { ref, position, handleMouseMove, handleMouseLeave } = useMagnetic<HTMLAnchorElement>()

  return (
    <a
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <motion.span
        animate={{ x: position.x, y: position.y }}
        transition={{ type: 'spring', stiffness: 350, damping: 15 }}
      >
        <Inner variant={variant} className={className}>
          {children}
        </Inner>
      </motion.span>
    </a>
  )
}
