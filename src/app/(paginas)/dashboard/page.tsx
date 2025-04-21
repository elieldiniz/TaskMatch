'use client'
import { useMemo } from 'react'
import { frases } from '@/app/data/dashboardData'
import { DashboardHeader } from '@/app/components/dashboard/DashboardHeader'
import { DashboardRanking } from '@/app/components/dashboard/DashboardRanking'
import { DashboardStats } from '@/app/components/dashboard/DashboardStats'
import { DashboardProgress } from 'app/components/dashboard/DashboardProgress'
import { DashboardTasks } from 'app/components/dashboard/DashboardTasks'
import { DashboardAchievements } from 'app/components/dashboard/DashboardAchievements'
import { DashboardBackground } from 'app/components/dashboard/DashboardBackground'

export default function DashboardPage() {
  const frase = useMemo(() => frases[Math.floor(Math.random() * frases.length)], [])

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#181926] via-[#23243a] to-[#2d1b2f] py-6 px-1 sm:py-10 sm:px-2 overflow-x-hidden">
      <DashboardBackground />
      <div className="relative z-10 max-w-5xl mx-auto">
        <DashboardHeader frase={frase} />
        <DashboardRanking />
        <DashboardStats />
        <DashboardProgress />
        <DashboardTasks />
        <DashboardAchievements />
      </div>
    </div>
  )
}