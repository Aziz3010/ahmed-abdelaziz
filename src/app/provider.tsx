'use client'
import ModeContextProvidor from '@/context/ModeContext';

export function Providers({children}: { children: React.ReactNode }) {
  return (
    <ModeContextProvidor >
      {children}
    </ModeContextProvidor>
  )
}