'use client'
import { ReactNode } from 'react'
import { DashboardBackground } from './DashboardBackground'
import { HeartsFloating } from './HeartsFloating'
import { ConfettiEffect } from './ConfettiEffect'
import { ParticlesEffect } from './ParticlesEffect'

interface VisualLayerProps {
  showHeartsFloating?: boolean
  showConfetti?: boolean
  showParticles?: boolean
  particlesTrigger?: boolean
  children: ReactNode
}

export function VisualLayer({
    showHeartsFloating = false,
    showConfetti = false,
    showParticles = false,
    particlesTrigger = false,
    children,
  }: VisualLayerProps) {
    return (
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#1a1c2c] via-[#2e2f3e] to-[#3e4050]">
        <DashboardBackground />
        {showHeartsFloating && <HeartsFloating />}
        {showConfetti && <ConfettiEffect />}
        {showParticles && <ParticlesEffect trigger={particlesTrigger} />}
        <div className="relative z-10">{children}</div>
      </div>
    )
  }