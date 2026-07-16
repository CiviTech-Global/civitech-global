import { useState } from 'react'
import { cn } from '../../lib/utils'

interface FloatingInputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string
  multiline?: boolean
}

export function FloatingInput({ label, multiline, className, ...props }: FloatingInputProps) {
  const [focused, setFocused] = useState(false)
  const [value, setValue] = useState((props.value as string) ?? '')
  const active = focused || value.length > 0

  const inputClasses = cn(
    'peer w-full rounded-xl border border-[var(--border)] bg-[var(--bg-soft)] px-4 pt-6 pb-2 text-[var(--text)] placeholder-transparent transition-all',
    'focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20',
    className
  )

  const labelClasses = cn(
    'pointer-events-none absolute start-4 top-1/2 -translate-y-1/2 text-sm text-[var(--text-muted)] transition-all',
    active && 'start-4 top-2 -translate-y-0 text-xs text-cyan-500'
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.target.value)
    props.onChange?.(e as React.ChangeEvent<HTMLInputElement & HTMLTextAreaElement>)
  }

  return (
    <div className="relative">
      {multiline ? (
        <textarea
          {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          className={cn(inputClasses, 'min-h-[120px] resize-none pt-6')}
          onFocus={(e) => {
            setFocused(true)
            props.onFocus?.(e)
          }}
          onBlur={(e) => {
            setFocused(false)
            props.onBlur?.(e)
          }}
          onChange={handleChange}
        />
      ) : (
        <input
          {...props}
          className={inputClasses}
          onFocus={(e) => {
            setFocused(true)
            props.onFocus?.(e)
          }}
          onBlur={(e) => {
            setFocused(false)
            props.onBlur?.(e)
          }}
          onChange={handleChange}
        />
      )}
      <label className={labelClasses}>{label}</label>
    </div>
  )
}
