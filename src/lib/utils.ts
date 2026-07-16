import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getTeamColor(color: string): string {
  const map: Record<string, string> = {
    cyan: 'bg-cyan-500 text-white',
    violet: 'bg-violet-500 text-white',
    emerald: 'bg-emerald-500 text-white',
    amber: 'bg-amber-500 text-white',
    rose: 'bg-rose-500 text-white',
  }
  return map[color] ?? 'bg-slate-500 text-white'
}

export function getTeamColorRing(color: string): string {
  const map: Record<string, string> = {
    cyan: 'ring-cyan-500/30',
    violet: 'ring-violet-500/30',
    emerald: 'ring-emerald-500/30',
    amber: 'ring-amber-500/30',
    rose: 'ring-rose-500/30',
  }
  return map[color] ?? 'ring-slate-500/30'
}

export function getTeamGlow(color: string): string {
  const map: Record<string, string> = {
    cyan: 'shadow-cyan-500/25',
    violet: 'shadow-violet-500/25',
    emerald: 'shadow-emerald-500/25',
    amber: 'shadow-amber-500/25',
    rose: 'shadow-rose-500/25',
  }
  return map[color] ?? 'shadow-slate-500/25'
}
