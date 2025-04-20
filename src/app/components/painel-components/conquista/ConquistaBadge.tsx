'use client'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ConquistaBadgeProps {
  icon: ReactNode
  texto: string
}

export default function ConquistaBadge({ icon, texto }: ConquistaBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{
        scale: 1.08,
        boxShadow: "0 0 16px #a21cafcc, 0 0 32px #f472b6cc",
        borderColor: "#fff",
        transition: { duration: 0.18 }
      }}
      transition={{ duration: 0.4 }}
      className={`
        bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-600
        text-white px-5 py-2 rounded-full text-base font-semibold
        shadow-lg flex items-center gap-2
        border-2 border-purple-300/40
        relative
        cursor-pointer
        transition-all duration-200
        group
        select-none
        outline-none
      `}
      tabIndex={0}
    >
      <span className="animate-pulse group-hover:animate-none drop-shadow-lg text-yellow-300">
        {icon}
      </span>
      <span className="drop-shadow">{texto}</span>
      {/* Borda neon extra */}
      <span
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          boxShadow: "0 0 0 3px #fff2, 0 0 12px #a21caf88, 0 0 24px #f472b6aa",
          zIndex: 0
        }}
        aria-hidden
      />
    </motion.div>
  )
}