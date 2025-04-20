'use client'
import { motion } from 'framer-motion'

interface ConviteStepProps {
  codigo: string
  onProsseguir: () => void
}

export default function ConviteStep({ codigo, onProsseguir }: ConviteStepProps) {
  const copiarCodigo = () => {
    navigator.clipboard.writeText(codigo)
    alert('Código copiado!')
  }

  return (
    <main className="min-h-screen flex items-center justify-center text-white px-4 bg-gradient-to-br from-[#1a1c2c] via-[#2e2f3e] to-[#3e4050]">
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, type: 'spring' }}
        className="w-full max-w-md bg-[#23243a]/90 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl border border-pink-400/30"
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-pink-400">📩 Convide seu parceiro</h2>
        <p className="text-center text-gray-300 mb-4">
          Envie este código para seu parceiro:
        </p>
        <div className="bg-[#1f2028] text-pink-400 font-mono p-4 rounded-xl text-center mb-6 text-xl select-all">
          {codigo}
        </div>
        <div className="flex gap-4">
          <button
            onClick={copiarCodigo}
            className="flex-1 bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 rounded-xl text-lg transition"
          >
            🔗 Copiar código
          </button>
          <motion.button
            onClick={onProsseguir}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 rounded-xl text-lg transition"
          >
            Prosseguir
          </motion.button>
        </div>
      </motion.div>
    </main>
  )
}