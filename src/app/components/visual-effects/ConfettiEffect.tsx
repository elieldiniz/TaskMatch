'use client'
import { useEffect, useState } from 'react'

type Confetti = {
  id: number
  left: number
  color: string
  delay: number
}

const confettiColors = ['#f472b6', '#a21caf', '#fbbf24', '#38bdf8', '#34d399']

export function ConfettiEffect() {
  const [confetti, setConfetti] = useState<Confetti[]>([])

  useEffect(() => {
    const arr: Confetti[] = []
    for (let i = 0; i < 24; i++) {
      arr.push({
        id: i,
        left: Math.random() * 100,
        color: confettiColors[i % confettiColors.length],
        delay: Math.random() * 0.8,
      })
    }
    setConfetti(arr)
    const timeout = setTimeout(() => setConfetti([]), 1800)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-50" aria-hidden="true">
      {confetti.map((c) => (
        <span
          key={c.id}
          style={{
            left: `${c.left}%`,
            animation: `confetti-fall 1.2s cubic-bezier(.4,1.7,.6,.97) ${c.delay}s`,
            color: c.color,
            fontSize: '2rem',
            position: 'absolute',
            top: 0,
            zIndex: 50,
          }}
        >🎉</span>
      ))}
      <style jsx>{`
        @keyframes confetti-fall {
          0% { transform: translateY(-40px) rotate(-10deg); opacity: 1;}
          100% { transform: translateY(90vh) rotate(40deg); opacity: 0;}
        }
      `}</style>
    </div>
  )
}