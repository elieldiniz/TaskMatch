
'use client'
import { ranking } from '@/app/data/dashboardData'
import { Star } from 'lucide-react'
import { motion } from 'framer-motion'

export function DashboardRanking() {
  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg p-4 sm:p-8 mb-8 sm:mb-10">
      <h2 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
        <span className="text-xl sm:text-2xl">🏆</span> Ranking do casal
      </h2>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center sm:items-end w-full">
        {ranking.map((p, i) => {
          const Icon = p.icon
          return (
            <motion.div
              key={p.nome}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              className={`
                flex flex-col items-center justify-end
                bg-gradient-to-br from-purple-700/60 via-pink-600/40 to-fuchsia-700/60
                rounded-xl p-4 sm:p-5 shadow border border-purple-300/20
                w-full sm:w-auto
                ${i === 0 ? 'ring-4 ring-yellow-400/80 scale-110 z-10' : 'scale-95'}
                max-w-xs
              `}
              style={{
                minWidth: 0,
                minHeight: i === 0 ? 140 : 110,
              }}
            >
              <div className="mb-1 sm:mb-2">
                {i === 0 ? <span className="text-2xl sm:text-3xl">👑</span> : <span className="text-xl sm:text-2xl">🥈</span>}
              </div>
              <Icon className={`w-10 h-10 ${p.color}`} />
              <div className="text-base sm:text-lg font-bold text-white mt-1 sm:mt-2">{p.nome}</div>
              <div className="text-xs sm:text-sm text-gray-200">XP: <span className="font-bold text-yellow-300">{p.xp}</span></div>
              {i === 0 && (
                <div className="text-xs text-yellow-400 font-bold flex items-center gap-1 mt-1 animate-bounce">
                  <Star className="w-4 h-4" /> 1º lugar!
                </div>
              )}
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}