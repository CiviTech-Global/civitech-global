import { lazy, Suspense } from 'react'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { ErrorBoundary } from './ErrorBoundary'

const DigitalGlobe = lazy(() => import('./DigitalGlobe').then((m) => ({ default: m.DigitalGlobe })))

export function DigitalGlobeLazy() {
  const reduced = useReducedMotion()

  if (reduced) {
    return (
      <div className="relative flex h-full w-full items-center justify-center">
        <div className="h-64 w-64 rounded-full bg-gradient-to-br from-cyan-500/20 to-violet-500/20 blur-sm" />
      </div>
    )
  }

  return (
    <ErrorBoundary
      fallback={
        <div className="relative flex h-full w-full items-center justify-center">
          <div className="h-64 w-64 rounded-full bg-gradient-to-br from-cyan-500/20 to-violet-500/20 blur-sm" />
        </div>
      }
    >
      <Suspense
        fallback={
          <div className="flex h-[420px] w-full items-center justify-center lg:h-[520px]">
            <div className="h-16 w-16 animate-spin rounded-full border-4 border-cyan-500/20 border-t-cyan-500" />
          </div>
        }
      >
        <DigitalGlobe />
      </Suspense>
    </ErrorBoundary>
  )
}
