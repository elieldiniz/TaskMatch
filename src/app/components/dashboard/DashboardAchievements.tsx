'use client'
import { conquistas } from '@/app/data/dashboardData'
import { Award } from 'lucide-react'
import { motion } from 'framer-motion'

export function DashboardAchievements() {
  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-8 shadow-lg">
      <h2 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
        <Award className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" /> Conquistas recentes 🏅
      </h2>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
        {conquistas.map((c, i) => {
          const Icon = c.icon
          return (
            <motion.div
              key={c.nome}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              className="flex-1 bg-gradient-to-br from-purple-700/60 via-pink-600/40 to-fuchsia-700/60 rounded-xl p-4 sm:p-5 flex flex-col items-center shadow border border-purple-300/20"
            >
              <Icon className={c.color} size={22} />
              <div className="text-base sm:text-lg font-bold text-white">{c.nome}</div>
              <div className="text-xs sm:text-sm text-gray-200 text-center">{c.desc}</div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}