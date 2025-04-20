'use client'
import { motion } from 'framer-motion'

interface GeneroStepProps {
  genero: string
  setGenero: (genero: string) => void
  onNext: () => void
}

export default function GeneroStep({ genero, setGenero, onNext }: GeneroStepProps) {
  return (
    <main className="min-h-screen flex items-center justify-center text-white px-4 bg-gradient-to-br from-[#1a1c2c] via-[#2e2f3e] to-[#3e4050]">
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, type: 'spring' }}
        className="w-full max-w-md bg-[#23243a]/90 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl border border-pink-400/30"
      >
        <h2 className="text-3xl font-bold text-center mb-7 text-pink-400 flex items-center justify-center gap-2">
          🌈 <span>Escolha seu gênero</span>
        </h2>
        <label className="block text-pink-300 font-semibold mb-2" htmlFor="genero">
          Gênero
        </label>
        <select
          id="genero"
          value={genero}
          onChange={(e) => setGenero(e.target.value)}
          className="w-full mb-8 px-4 py-3 rounded-xl bg-[#1f2028] text-white border border-pink-400/40 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
        >
          <option value="">Selecione...</option>
          <option value="feminino">Feminino</option>
          <option value="masculino">Masculino</option>
          <option value="nao_binario">Não-binário</option>
          <option value="outro">Outro / Prefiro não dizer</option>
        </select>
        <motion.button
          onClick={onNext}
          whileHover={{ scale: 1.04, backgroundColor: '#f472b6' }}
          whileTap={{ scale: 0.97 }}
          disabled={!genero}
          className="w-full bg-pink-500 hover:bg-pink-600 disabled:bg-gray-500 text-white font-bold py-3 rounded-xl text-lg shadow-lg transition"
        >
          Continuar 💫
        </motion.button>
      </motion.div>
    </main>
  )
}