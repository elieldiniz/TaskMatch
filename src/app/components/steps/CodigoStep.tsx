'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

interface CodigoStepProps {
  onConfirmar: (codigo: string) => void
  onPular?: () => void
}

export default function CodigoStep({ onConfirmar, onPular }: CodigoStepProps) {
  const [codigo, setCodigo] = useState('')

  const handleConfirmar = () => {
    if (codigo.trim().length >= 6) {
      onConfirmar(codigo)
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center text-white px-4 bg-gradient-to-br from-[#1a1c2c] via-[#2e2f3e] to-[#3e4050]">
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, type: 'spring' }}
        className="w-full max-w-md bg-[#23243a]/90 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl border border-pink-400/30"
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-pink-400">🔐 Código de Pareamento</h2>
        <input
          type="text"
          placeholder="Digite o código recebido"
          value={codigo}
          onChange={(e) => setCodigo(e.target.value)}
          className="w-full mb-6 px-4 py-3 rounded-xl bg-[#1f2028] text-white placeholder-gray-400 border border-pink-400/40 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
        <div className="flex gap-4">
          <motion.button
            onClick={handleConfirmar}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={codigo.trim().length < 6}
            className="flex-1 bg-pink-500 hover:bg-pink-600 disabled:bg-gray-500 text-white font-bold py-3 rounded-xl text-lg transition"
          >
            Adicionar código
          </motion.button>
          <motion.button
            onClick={onPular}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 rounded-xl text-lg transition"
            type="button"
          >
            Prosseguir sem código
          </motion.button>
        </div>
      </motion.div>
    </main>
  )
}