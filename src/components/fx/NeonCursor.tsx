import { useEffect, useRef } from 'react'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export function NeonCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced || window.matchMedia('(pointer: coarse)').matches) return
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const trail: { x: number; y: number; age: number }[] = []
    let raf = 0

    const handleMove = (e: MouseEvent) => {
      trail.push({ x: e.clientX, y: e.clientY, age: 0 })
      if (trail.length > 24) trail.shift()
    }

    window.addEventListener('mousemove', handleMove, { passive: true })

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      if (trail.length > 1) {
        ctx.lineCap = 'round'
        ctx.lineJoin = 'round'
        for (let i = 1; i < trail.length; i++) {
          const p = trail[i]
          const prev = trail[i - 1]
          p.age += 1
          const life = 1 - p.age / 30
          if (life <= 0) continue
          ctx.beginPath()
          ctx.moveTo(prev.x, prev.y)
          ctx.lineTo(p.x, p.y)
          ctx.strokeStyle = `rgba(34, 211, 238, ${life * 0.35})`
          ctx.lineWidth = 4 + life * 6
          ctx.shadowBlur = 12
          ctx.shadowColor = 'rgba(34, 211, 238, 0.8)'
          ctx.stroke()
        }
      }
      while (trail.length > 0 && trail[0].age > 30) trail.shift()
      raf = requestAnimationFrame(render)
    }

    raf = requestAnimationFrame(render)

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMove)
      cancelAnimationFrame(raf)
    }
  }, [reduced])

  if (reduced || typeof window === 'undefined') return null

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 -z-[5] hidden lg:block"
      aria-hidden="true"
    />
  )
}
