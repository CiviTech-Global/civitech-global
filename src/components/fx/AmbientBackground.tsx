import { motion } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export function AmbientBackground() {
  const reduced = useReducedMotion()

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="dot-grid absolute inset-0" />
      {!reduced && (
        <>
          <motion.div
            animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -left-32 top-0 h-[40rem] w-[40rem] rounded-full bg-cyan-500/10 blur-[120px]"
          />
          <motion.div
            animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
            transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -right-32 bottom-0 h-[36rem] w-[36rem] rounded-full bg-violet-500/10 blur-[120px]"
          />
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute left-1/3 top-1/3 h-[24rem] w-[24rem] rounded-full bg-emerald-500/5 blur-[100px]"
          />
        </>
      )}
    </div>
  )
}
