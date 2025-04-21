'use client'
import { motion } from 'framer-motion'
import { Heart as HeartIcon, CheckCircle2, Users, Star } from 'lucide-react'

interface AnimatedLogoProps {
  size?: number
}

export function AnimatedLogo({ size = 96 }: AnimatedLogoProps) {
  return (
    <div
      className="rounded-full bg-white/10 border-4 border-pink-400 shadow-lg flex items-center justify-center relative"
      style={{ width: size, height: size }}
    >
      <motion.div
        initial={{ scale: 0, y: 10 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ delay: 0.2, type: "spring" }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <HeartIcon size={44} className="text-pink-400 drop-shadow-lg" />
      </motion.div>
      <motion.div
        initial={{ scale: 0, x: -10, y: -10 }}
        animate={{ scale: 1, x: 0, y: 0 }}
        transition={{ delay: 0.35, type: "spring" }}
        className="absolute left-8 top-6 bg-[#1a1c2c] rounded-full p-1"
      >
        <CheckCircle2 size={28} className="text-emerald-400" />
      </motion.div>
      <motion.div
        initial={{ scale: 0, x: 10, y: -10 }}
        animate={{ scale: 1, x: 0, y: 0 }}
        transition={{ delay: 0.5, type: "spring" }}
        className="absolute right-8 top-6 bg-[#1a1c2c] rounded-full p-1"
      >
        <Users size={28} className="text-blue-400" />
      </motion.div>
      <motion.div
        initial={{ scale: 0, y: 10 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ delay: 0.65, type: "spring" }}
        className="absolute left-1/2 bottom-5 -translate-x-1/2 bg-[#1a1c2c] rounded-full p-0.5"
      >
        <Star size={24} className="text-yellow-300" />
      </motion.div>
    </div>
  )
}