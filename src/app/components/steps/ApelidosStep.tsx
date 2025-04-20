'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

interface ApelidosStepProps {
  onConfirmar: (apelidos: { meuApelido: string; parceiroApelido: string }) => void
}

export default function ApelidosStep({ onConfirmar }: ApelidosStepProps) {
  const [meuApelido, setMeuApelido] = useState('')
  const [parceiroApelido, setParceiroApelido] = useState('')

  const handleConfirmar = () => {
    if (meuApelido.trim().length >= 2 && parceiroApelido.trim().length >= 2) {
      onConfirmar({ meuApelido: meuApelido.trim(), parceiroApelido: parceiroApelido.trim() })
    }
  }

  const isDisabled = meuApelido.trim().length < 2 || parceiroApelido.trim().length < 2

  return (
    <main className="min-h-screen flex items-center justify-center text-white px-4 bg-gradient-to-br from-[#1a1c2c] via-[#2e2f3e] to-[#3e4050]">
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, type: 'spring' }}
        className="w-full max-w-md bg-[#23243a]/90 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl border border-pink-400/30"
      >
        <h2 className="text-3xl font-bold text-center mb-7 text-pink-400 flex items-center justify-center gap-2">
          🤝 <span>Escolha seus apelidos</span>
        </h2>

        <div className="mb-5">
          <label className="block text-pink-300 font-semibold mb-2" htmlFor="meuApelido">
            Seu apelido
          </label>
          <input
            id="meuApelido"
            type="text"
            placeholder="Ex: Amor, Vida, Mozão..."
            value={meuApelido}
            onChange={(e) => setMeuApelido(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-[#1f2028] text-white placeholder-gray-400 border border-pink-400/40 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
            maxLength={20}
          />
        </div>

        <div className="mb-8">
          <label className="block text-pink-300 font-semibold mb-2" htmlFor="parceiroApelido">
            Apelido do parceiro
          </label>
          <input
            id="parceiroApelido"
            type="text"
            placeholder="Ex: Mozão, Cheiro, Bem..."
            value={parceiroApelido}
            onChange={(e) => setParceiroApelido(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-[#1f2028] text-white placeholder-gray-400 border border-pink-400/40 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
            maxLength={20}
          />
        </div>

        <motion.button
          onClick={handleConfirmar}
          whileHover={{ scale: 1.04, backgroundColor: '#f472b6' }}
          whileTap={{ scale: 0.97 }}
          disabled={isDisabled}
          className="w-full bg-pink-500 hover:bg-pink-600 disabled:bg-gray-500 text-white font-bold py-3 rounded-xl text-lg shadow-lg transition"
        >
          Confirmar apelidos 🎉
        </motion.button>
      </motion.div>
    </main>
  )
}