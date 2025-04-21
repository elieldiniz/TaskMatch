'use client'
import { estatisticas } from '@/app/data/dashboardData'
import { motion } from 'framer-motion'

export function DashboardStats() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 mb-8 sm:mb-10 px-1">
      {estatisticas.map((stat) => {
        const Icon = stat.icon
        return (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-3 sm:p-6 flex flex-col items-center shadow-lg transition-transform hover:scale-105 hover:-rotate-1"
          >
            <Icon className={stat.color} size={28} />
            <div className="text-xl sm:text-3xl font-extrabold text-white drop-shadow">{stat.valor}</div>
            <div className="text-xs sm:text-sm text-gray-300 mt-1">{stat.label}</div>
          </motion.div>
        )
      })}
    </div>
  )
}