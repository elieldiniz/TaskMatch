'use client'
import { UserCircle, HeartHandshake } from 'lucide-react'
import { motion } from 'framer-motion'

interface DashboardHeaderProps {
  frase: string
}

export function DashboardHeader({ frase }: DashboardHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 mb-6 px-2">
      <div className="flex items-center gap-3 sm:gap-4">
        <UserCircle className="w-14 h-14 sm:w-16 sm:h-16 text-white/80 drop-shadow" />
        <div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white flex items-center gap-2">
            Dashboard do Casal <span className="text-2xl sm:text-3xl">💑</span>
          </h1>
          <p className="text-sm sm:text-base text-pink-300 font-semibold mt-1">{frase}</p>
        </div>
      </div>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", delay: 0.2 }}
        className="bg-gradient-to-r from-pink-500 via-purple-500 to-fuchsia-600 px-4 py-2 sm:px-6 sm:py-3 rounded-2xl shadow-lg text-white font-bold text-base sm:text-lg flex items-center gap-2"
      >
        <HeartHandshake className="w-5 h-5 sm:w-6 sm:h-6 text-pink-200" />
        Juntos no Nível 7
      </motion.div>
    </div>
  )
}