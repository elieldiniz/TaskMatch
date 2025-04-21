'use client'
import { TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'

export function DashboardProgress() {
  const valores = [60, 80, 100, 40, 90, 70, 50]
  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-8 mb-8 sm:mb-10 shadow-lg">
      <h2 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
        <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" /> Progresso semanal 📈
      </h2>
      <div className="flex items-end gap-2 sm:gap-4 h-24 sm:h-32">
        {valores.map((v, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            animate={{ height: `${v}%` }}
            transition={{ delay: 0.1 * i, type: "spring" }}
            className="w-5 sm:w-8 rounded-xl bg-gradient-to-t from-pink-500 via-purple-500 to-fuchsia-600 shadow-md flex items-end justify-center"
          >
            <span className="text-[10px] sm:text-xs text-white font-bold mb-1 sm:mb-2">{v}</span>
          </motion.div>
        ))}
      </div>
      <div className="flex justify-between text-[10px] sm:text-xs text-gray-400 mt-1 sm:mt-2 px-1">
        <span>Seg</span><span>Ter</span><span>Qua</span><span>Qui</span><span>Sex</span><span>Sáb</span><span>Dom</span>
      </div>
    </div>
  )
}