'use client'
import { useEffect, useState } from 'react'

type Particle = {
  id: number
  x: number
  y: number
  size: number
  color: string
}

const particleColors = ['#f472b6', '#a21caf', '#fbbf24', '#38bdf8', '#34d399']

export function ParticlesEffect({ trigger }: { trigger: boolean }) {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    if (trigger) {
      const arr: Particle[] = Array.from({ length: 12 }).map((_, i) => ({
        id: Date.now() + i,
        x: Math.random() * 100 - 50,
        y: Math.random() * -100 - 50,
        size: Math.random() * 8 + 4,
        color: particleColors[i % particleColors.length],
      }))
      setParticles(arr)
      const timeout = setTimeout(() => setParticles([]), 800)
      return () => clearTimeout(timeout)
    }
  }, [trigger])

  return (
    <div className="absolute z-50 pointer-events-none" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: p.size,
            height: p.size,
            background: p.color,
            borderRadius: '50%',
            transform: `translate(${p.x}px, ${p.y}px)`,
            opacity: 0.7,
            transition: 'opacity 0.8s',
            zIndex: 50,
          }}
        />
      ))}
    </div>
  )
}