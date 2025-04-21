'use client'
import { CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { ultimasTarefas } from '@/app/data/dashboardData'

export function DashboardTasks() {
  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-8 mb-8 sm:mb-10 shadow-lg">
      <h2 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
        <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" /> Últimas tarefas concluídas 📝
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-[420px] sm:min-w-full text-left">
          <thead>
            <tr>
              <th className="px-2 py-2 text-gray-300 text-xs sm:text-sm">Tarefa</th>
              <th className="px-2 py-2 text-gray-300 text-xs sm:text-sm">Quem fez</th>
              <th className="px-2 py-2 text-gray-300 text-xs sm:text-sm">Pontos</th>
              <th className="px-2 py-2 text-gray-300 text-xs sm:text-sm">Quando</th>
              <th className="px-2 py-2 text-gray-300 text-xs sm:text-sm">Status</th>
            </tr>
          </thead>
          <tbody>
            {ultimasTarefas.map((t, i) => (
              <motion.tr
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                className="border-b border-white/10"
              >
                <td className="px-2 py-2 text-white text-xs sm:text-base">{t.nome}</td>
                <td className="px-2 py-2">
                  <span className={`font-bold text-xs sm:text-base ${t.quem === 'Você' ? 'text-blue-400' : 'text-pink-400'}`}>{t.quem}</span>
                </td>
                <td className="px-2 py-2 text-purple-300 font-bold text-xs sm:text-base">{t.pontos}</td>
                <td className="px-2 py-2 text-gray-400 text-xs sm:text-base">{t.data}</td>
                <td className="px-2 py-2">
                  <span className="inline-block px-2 py-1 rounded-full bg-green-500/20 text-green-400 text-[10px] sm:text-xs font-bold">
                    {t.status}
                  </span>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}