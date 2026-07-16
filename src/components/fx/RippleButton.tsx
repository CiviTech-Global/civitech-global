import { useRef, useState } from 'react'
import { cn } from '../../lib/utils'

interface Ripple {
  id: number
  x: number
  y: number
}

interface RippleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
}

export function RippleButton({ children, className, onClick, ...props }: RippleButtonProps) {
  const ref = useRef<HTMLButtonElement>(null)
  const [ripples, setRipples] = useState<Ripple[]>([])

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const id = Date.now()
      setRipples((prev) => [...prev, { id, x, y }])
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id))
      }, 650)
    }
    onClick?.(e)
  }

  return (
    <button
      ref={ref}
      onClick={handleClick}
      className={cn('relative overflow-hidden', className)}
      {...props}
    >
      {ripples.map((r) => (
        <span
          key={r.id}
          className="pointer-events-none absolute animate-ripple rounded-full bg-white/30"
          style={{
            left: r.x,
            top: r.y,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
      {children}
    </button>
  )
}
