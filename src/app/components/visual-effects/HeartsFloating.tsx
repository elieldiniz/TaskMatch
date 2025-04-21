'use client'
import { useEffect, useState } from 'react'

type Heart = {
  id: number
  left: number
  size: number
  duration: number
  delay: number
  targetY: string
}

export function HeartsFloating() {
  const [hearts, setHearts] = useState<Heart[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      const heights = ['-20vh', '-40vh', '-60vh', '-80vh', '-100vh']
      const id = Date.now()
      const top = heights[Math.floor(Math.random() * heights.length)]
      const newHeart: Heart = {
        id,
        left: Math.random() * 100,
        size: 12 + Math.random() * 16,
        duration: 4 + Math.random() * 4,
        delay: Math.random() * 2,
        targetY: top,
      }
      setHearts((prev) => [...prev.slice(-30), newHeart])
    }, 400)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="heart"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            top: '100%',
            animation: `float ${heart.duration}s linear ${heart.delay}s`,
            color: heart.id % 2 === 0 ? '#f472b6' : '#a21caf',
            opacity: 0.13,
            position: 'absolute'
          }}
        >💖</span>
      ))}
    </div>
  )
}